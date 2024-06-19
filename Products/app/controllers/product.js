const Product = require("../models/product");

exports.create = async (req, res) => {
  try {
    const { name, category, price, stock } = req.body;
    const product = new Product({
      name,
      category,
      price,
      stock,
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({
      message:
        err.message ||
        "Something wrong happened with your request to create a new product.",
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message:
        err.message ||
        "Something wrong happened with your request to retrieve your accounts.",
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    let product = await Product.findOne({
      _id: req.params.id,
    });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message:
        err.message ||
        "Something wrong happened with your request to retrieve your product.",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { name, category, price, stock } = req.body;
    const product = await Product.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { name, category, price, stock },
      { returnDocument: "after" }
    );
    if (!product) {
      return res.status(404).json({
        message: "Didn't find the product you were looking for.",
      });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message:
        err.message ||
        "Something wrong happened with your request to update your product.",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
    });
    if (!product) {
      return res.status(404).json({
        message: "Didn't find the product you were looking for.",
      });
    }
    res.status(200).json({
      message: "The fellowing product has been deleted successfully.",
      product: product,
    });
  } catch (err) {
    res.status(500).json({
      message:
        err.message ||
        "Something wrong happened with your request to delete your product.",
    });
  }
};
