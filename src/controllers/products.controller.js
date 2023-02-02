const ProductServices = require('../services/products.services');

const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductServices.getAllProducts();
    res.json(products);
  } catch (error) {
    throw error;
    
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { body } = req;
    const user_id = await req.user.id;
    const newProduct = { ...body, user_id };
    const result = await ProductServices.createProduct(newProduct);
    res.status(201).json(result);
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllProducts, createProduct };
