var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.getUsers);
router.post("/addUser", userController.addUser);

module.exports = router;
