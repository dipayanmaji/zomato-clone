const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const authRoute = require("./routes/auth");
const productAuth = require("./routes/product");

app.use('/api/auth/', authRoute);
app.use('/api/product/', productAuth);

//manage for invalid route entry
app.all("*", (req, res) => {
    res.status(404).json({
        status: "Error",
        message: "Invalid route"
    });
})
module.exports = app;