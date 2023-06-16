const express = require("express");
const router = express.Router();
const { register, login, logout, allUser } = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/users", allUser);

module.exports = router;