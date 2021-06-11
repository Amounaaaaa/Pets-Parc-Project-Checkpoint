const mongoose = require ('mongoose')
require('dotenv').config()
require('dotenv').config({path: 'config/.env'})

const ConnectDB = () => {



    mongoose.connect(process.env.URI, { useUnifiedTopology: true, 
        useNewUrlParser: true ,useUnifiedTopology: true,
        useFindAndModify:false,connectTimeoutMS: 10000,poolSize: 10,
        writeConcern: {j: true} } ,
    (err) => {
        if (err){ throw err;}

            console.log('connect to db...')
    })
}

module.exports = ConnectDB;
