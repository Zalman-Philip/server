const axios = require("axios");
const { productsData, writeProducts } = require("../DAL/productsDal");
const {quantity} = require("./productsService")

  const getData = async () => {
    try {
      const response = await axios.get("http://fakestoreapi.com/products");
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
  module.exports = update