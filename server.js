const express = require("express");
//const ConnectDB = require("./servers/helpers/ConnectDB");
//mongoose.connect('mongodb://username:password@host:port/database?options...',
const app = express();
const mongoose=require('mongoose')
require('dotenv').config()

//connect to db
//ConnectDB();
//middleweares 
app.use(express.json());

mongoose.connect(process.env.URI, { useUnifiedTopology: true, useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify:false,connectTimeoutMS: 10000,poolSize: 10,writeConcern: {j: true} } ,
    (err) => {
        if (err){ throw err;}

            console.log('connect to db... ')

    })
//Define Routes
app.use("/register", require("./servers/routes/register"));
app.use("/login", require("./servers/routes/login"));
// app.use("/post", require("./servers/routes/post"));
app.use("/product", require("./servers/routes/product"));
app.use("/categorie", require("./servers/routes/category"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`server is running on PORT : ${PORT}`));
