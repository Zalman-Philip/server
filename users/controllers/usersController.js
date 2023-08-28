const handelError = require("../../util/errorHandler");
const { sendAllUsers, sendUserById, createUser } = require("../service/usersService")
const {validateUser, validateUserPatch} = require("../../validation/validation")
const {genToken, validToken} = require("../../config/config")
const getAllUsers = async(req, res) => {
  try {
    const users = await sendAllUsers()
    res.send(users)
  } catch (error) {
    handelError(res, 500, error.message)
  }
};
const getUserById = async(req, res) => {
  try {
    const userId = req.params.id
    const user = await sendUserById(userId)
    res.send(user)
  } catch (error) {
    handelError(res, 500, error.message)
  }
};
const signIn = async(req, res) => {
    // const {error} = validateUser(req.body)
    // if(error) throw new Error(error.details.message)
    const user = await createUser(req.body)
  const token = genToken(user)
    res.send(token)
  try {
  } catch (error) {
    handelError(res, 500, error.message)
  }
};
const updateUserPartly = async(req, res) => {
  try {
    const {error} = validateUserPatch(req.body)
    if(error) throw new Error(error.details.message)
    const user  = await editUser(req.body)
    res.send(user)
  } catch (error) {
    handelError(res, 400, error.message)
  }
};
const updateUser = async (req, res) => {
  try {
  } catch (error) {}
};
const deleteUser = async(req, res) => {
  try {
  } catch (error) {}
};


//  const login = () => {
    
//  }

// const controllerAdmin = async (req, res, next) => {
// try {
//   const userId = req.params.id; 
//   const users = await sendAllUsers();
//   const user = users.find((user) => user.id === userId && user.isAdmin === true)
//   if (!user) throw new Error ("Not authorized")
//   next()
// } catch (error) {
//   handelError(res, 400, error.message)
// }
// }

// const controllerById = async (req, res, next) => {
//   try {
//     const userId = req.params.id; 
 
//     const users = await sendAllUsers();
//     const user = users.find((user) => user.id === userId)
//     if (!user) throw new Error ("Not authorized")
//     next()
//   } catch (error) {
    
//   }
// }
module.exports = {getAllUsers,getUserById,signIn,updateUserPartly,updateUser,deleteUser}