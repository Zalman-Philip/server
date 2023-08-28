const cors = require("cors");
const express = require("express")
const app = express()


app.use(cors({origin: ["http://127.0.0.1:5500", "http://127.0.0.1:5503"],
optionsSuccessStatus: 200}))

module.exports = app