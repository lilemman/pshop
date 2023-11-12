const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/productModel");

//@desc Fetch all products
//@route GET /api/products
//@access //public
const getProducts = asyncHandler(async (req, res) => {
 const products = await Product.find({});
 res.json(products);
});
//@desc Fetch all products
//@route GET /api/product/:id
//@access //public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    } else {
      res.status(404);
      throw new Error("Resource not found");
    }
  })

  module.exports = { getProducts, getProductById };