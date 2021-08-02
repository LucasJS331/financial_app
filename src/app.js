const express = require("express");
const app = express();
const port = 3000;
const router = require("../routes/router");

//configurações basicas
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(router);

module.exports = app;