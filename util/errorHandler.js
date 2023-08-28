const chalk = require("chalk")

const handelError = (res, status, message="") => {
console.log(chalk.redBright(message));
return res.status(status).send(message)
}

module.exports = handelError
