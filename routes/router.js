const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const { createUserData } = require("../controllers/userData.controller");
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.post("/user-data", createUserData);

module.exports = router;
