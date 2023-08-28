const express = require("express");
const router = express.Router();

const {
  getProductById,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductPartly,
  subQuantity,
  addQuantity,
} = require("../controller/productsController");

router.get("/:id", getProductById);

router.get("/", getAllProducts);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

router.patch("/addQuantity/:id", addQuantity);

router.patch("/reduceQuantity/:id", subQuantity);

router.patch("/:id", updateProductPartly);

module.exports = router;
