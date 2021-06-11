const Post = require("../models/Post");

const getAllProducts = async (req, res) => {
  try {
    const product = await Post.find({});
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
// const updateAllProducts = async (req,res)=>{
//     try {
//          await Product.findByIdAndUpdate({_id:req.params.id},req.body);
//          const products = await Product.find({});
//         res.json(products);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({message : "Server Error"});
//     }
// }
// const addproduct = async (req,res)=>{
//     try {
//         const newProduct = new Product(req.body)
//          newProduct.save()
//          const products = await Product.find({});
//         res.json(products);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({message : "Server Error"});
//     }
// }
// const getProductsBycollection = async (req,res)=>{
//     try {
//         const products = await Product.find({}).populate('category');
//         res.json(products);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({message : "Server Error"});
//     }
// }

module.exports = {
  getAllProducts,
};
