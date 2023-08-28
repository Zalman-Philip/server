const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController")
const {getAllUsers,getUserById,signIn,updateUserPartly,updateUser,deleteUser} = require("../controllers/usersController")



router.get("/user",getAllUsers);

router.get("/user/:id", getUserById);

router.post("/user", signIn);

router.patch("/user/:id", updateUserPartly);

router.put("/user/:id",updateUser);

router.delete("/user/:id", deleteUser);


// router.use("",(req, res) => {
// res.status(404).send("page not found")
// })
module.exports = router