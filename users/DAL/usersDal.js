const jsonfile = require("jsonfile");
const usersData = "data/productsData.json";

const getUsers = async () => {
  try {
    const users = await jsonfile.readFile(usersData);
    return Promise.resolve(users);
  } catch (error) {
    return Promise.reject(error);
  }
};

const writeUsers = async (users) => {
  try {
    await jsonfile.writeFile(usersData, users);
    return Promise.resolve(users);
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = { getUsers, writeUsers };
