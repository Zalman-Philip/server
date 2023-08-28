const express = require("express");
const app = express();
const morgan = require("morgan");
const chalk = require("chalk");
const router = require("./router/router");
const cors = require("./cors");
const update = require("./products/service/updateData");


app.use(morgan("tiny"));
app.use(cors);

app.use(express.json());

app.use(router);

app.use((error, req, res, next) => {
  if (error) console.log(error.message);
  res.status(500).send(error.message);
});

const PORT = 7160;
app.listen(PORT, () => {
  update()
  console.log(chalk.yellowBright(`listen on port: ${PORT}`));
});
