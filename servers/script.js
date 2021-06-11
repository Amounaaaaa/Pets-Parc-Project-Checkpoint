require('dotenv').config()
const connectDB = require('./helpers/ConnectDB')
const Post=require('./models/Post')
const products=require('./Data/Animal')
const collections=require('./Data/Categorydata')
const Category = require('./models/category')

connectDB();
const importData = async ()=>{
    try {
        await Post.deleteMany({});
        await Post.insertMany(products);

        await Category.deleteMany({});
        await Category.insertMany( collections);

        
        console.log('data import success');
        process.exit();

    } catch (error) {
        console.error('error with data import',error);
        process.exit(1);
        
    }
}

importData();