const express = require("express");
const router = express.Router();
const { updateCart } = require("../controllers/product");

router.patch("/updatecart", updateCart);

module.exports = router;