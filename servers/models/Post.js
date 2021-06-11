const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  title: String,
  gender: String,
  city: String,
  price: String,
  created_at: {
    type: Date,
    default: Date.now,
  }
});

const Post = mongoose.model("post", PostSchema);
module.exports = Post;
