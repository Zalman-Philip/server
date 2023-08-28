const {
  sendAllProducts,
  sendProductByID,
  addProduct,
  removeProduct,
  editProduct,
  changeQuantity,
} = require("../service/productsService");

const {
  validateProduct,
  validatePatch,
} = require("../../validation/validation");

const handelError = require("../../util/errorHandler");
// const { response } = require("express");

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await sendProductByID(productId);
    res.send(product);
  } catch (error) {
    handelError(res, 500, error.message);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await sendAllProducts();
    res.send(products);
  } catch (error) {
    handelError(res, 500, error.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const { error } = validateProduct(req.body);
    if (error) throw new Error(error.details.message);
    const response = await addProduct(req.body);
    res.send(response);
  } catch (error) {
    handelError(res, 400, error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { error } = validateProduct(req.body);
    if (error) throw new Error(error.details.message);
    const response = await editProduct(productId, req.body);
    res.send(response);
  } catch (error) {
    handelError(res, 400, error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const response = await removeProduct(productId);
    res.send(response);
  } catch (error) {
    handelError(res, 400, error.message);
  }
};

const updateProductPartly = async (req, res) => {
  try {
    const { error } = validatePatch(req.body);
    if (error) throw new Error(error.details.message);
    const response = await editProduct(productId, req.body);
    res.send(response);
  } catch (error) {
    handelError(res, 400, error.message);
  }
};
///////////////////////////////////////////
const subQuantity = async (req, res) => {
  try {
    const productId = req.params.id;
    const response = await changeQuantity(-1, productId);
    res.send("success");
  } catch (error) {
    handelError(res, 400, error.message);
  }
};
const addQuantity = async (req, res) => {
  try {
    const productId = req.params.id;
    const response = await changeQuantity(1, productId);
    // res.send(response);
  } catch (error) {
    handelError(res, 400, error.message);
  }
};
module.exports = {
  getProductById,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductPartly,
  subQuantity,
  addQuantity,
};
