const { productsData, writeProducts } = require("../DAL/productsDal");
const { v4: uuid } = require("uuid");
const axios = require("axios");

const quantity = () => {
  return Math.round(Math.random() * 10);
};
const getData = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const update = async () => {
  try {
    const products = await productsData();
    if (products) return console.log("data exist");
  } catch (error) {
    try {
      let data = await getData();
      data.map((product) => (product.quantity = quantity()));
      await writeProducts(data);
      console.log("updated successfully");
    } catch (error) {
      console.log(error.message);
    }
  }
};

const sendAllProducts = async () => {
  try {
    const products = await productsData();
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};

const sendProductByID = async (productId) => {
  try {
    const products = await productsData();
    const product = products.find((product) => product.id === +productId);
    if (!product) throw new Error("product not found");
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

const addProduct = async (product) => {
  try {
    const products = await productsData();
    product.id = uuid();
    product.quantity = quantity();
    products.push(product);
    await writeProducts(products);
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

const removeProduct = async (productId) => {
  try {
    const products = await productsData();
    const product = products.find((product) => product.id === +productId);
    if (!product) throw new Error("product not found");
    const index = products.indexOf(product);
    products.splice(index, 1);
    await writeProducts(products);
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

const editProduct = async (productId, updateProduct) => {
  try {
    const products = await productsData();
    const product = products.find((product) => product.id === +productId);
    if (!product) throw new Error("product not found");
    const index = products.indexOf(product);
    products[index] = { ...product, ...updateProduct };
    await writeProducts(products);
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

const changeQuantity = async (number, productId) => {
  try {
    const products = await productsData();
    const product = products.find((product) => product.id === +productId);
    if (!product) throw new Error("product not found");
    // if (product.quantity < 0) throw new Error("can not reduce below zero");
    product.quantity += number;
    await writeProducts(products);
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  quantity,
  sendAllProducts,
  sendProductByID,
  addProduct,
  removeProduct,
  editProduct,
  changeQuantity,
};
