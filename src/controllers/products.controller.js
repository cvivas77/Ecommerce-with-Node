const ProductServices = require('../services/products.services');


const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductServices.getAllProducts();
    res.json(products);
  } catch (error) {
    next (error);
    
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { body } = req;
    const userId = await req.user.id;
    const newProduct = { ...body, userId };
    const result = await ProductServices.createProduct(newProduct);
    res.status(201).json(result);
  } catch (error) {
    next (error);
  }
};



module.exports = { getAllProducts, createProduct };
