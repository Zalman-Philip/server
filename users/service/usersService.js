const bcrypt = require("bcrypt");
const {v4: newId} = require("uuid")
const{getUsers, writeUsers} = require("../DAL/usersDal");

const sendAllUsers = async () => {
  try {
    const users = await getUsers();
    return Promise.resolve(users);
  } catch (error) {
    return Promise.reject(error)
  }
};
const sendUserById = async (userId) => {
  try {
    const users = await getUsers();
    const user = users.find((user) => user.id === userId);
    if (!user) throw new Error("user not found");
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error)
  }
};

const createUser = async (user) => {
    try {
        const users = await getUsers();
        user.id = newId();
        user.password = bcrypt.hashSync(user.password, 10);
        user.isAdmin = false
        users.push(user);
      await writeUsers(users);
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error)
    }
}

const editUser = async (userId) => {
  try {
    const users = await getUsers();
    const user = users.find((user) => user.id === +userId)
    if(!user) throw new Error ("user not found")
    const index = users.indexOf(user)
    users[index] = req.body
    await writeUsers(users)
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error)
  }
}
module.exports = { sendAllUsers, sendUserById, createUser };
