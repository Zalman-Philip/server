const express = require("express");
const router = express.Router();
const productsRouter = require("../products/router/productsRouter")
const usersRouter = require("../users/routers/usersRouter");

router.use("/products",productsRouter)
router.use(usersRouter)

router.use((req, res) => {
    res.status(404).send("page not found")
    })

module.exports = router