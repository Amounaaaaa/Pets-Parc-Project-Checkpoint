const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: String,
  image: String,
});

const Category = mongoose.model("category", CategorySchema);
module.exports = Category;
