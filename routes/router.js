const express = require('express');
const router = express.Router();
const { createUserData } = require("../controller/userData.controller");

router.get("/", (req,res)=>{
    res.send("Hello World");
});
router.post("/user-data", createUserData);

module.exports = router;
