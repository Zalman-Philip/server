const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');

const secret = "zelma's"

const  genToken = (user) => {
    return jwt.sign({id: user.userId}, secret, { expiresIn: '60mins' });
}

const validToken = (token) => {
    return jwt.verify(token, secret)
}

const sendToken = (token) => {
    sessionStorage.setItem({T:token})
}

const getToken = () => {
    sessionStorage.getItem({T:token})
}
module.exports = {genToken, validToken}