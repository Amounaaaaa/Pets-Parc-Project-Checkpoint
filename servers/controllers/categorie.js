const Categorie = require("../models/Category");
const express=require('express')
const route=express.Router()
const getAllCategorie = async (req, res) => {



  try {
    const categories = await Categorie.find({});
    res.status(200).json(categories)
     }
  catch (error) {
    console.error(error);
    res.status(500).json({errors:[{ message: "Server Error" }]});
  }
};





module.exports = { getAllCategorie};
