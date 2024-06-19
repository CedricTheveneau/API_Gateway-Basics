const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name field is required"],
    unique: [true, "The name must be unique"],
    trim: true,
    lowercase: true,
  },
  category: {
    type: String,
    required: [true, "The category field is required"],
    trim: true,
    lowercase: true,
  },
  price: {
    type: Number,
    required: [true, "The price field is required"],
  },
  stock: {
    type: Number,
    required: [true, "The price field is required"],
  },
});

productSchema.plugin(uniqueValidator);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
