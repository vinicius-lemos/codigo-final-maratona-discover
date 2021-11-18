const express = require("express")
const routes = express.Router()

const basePath = __dirname + "/views/"

routes.get("/", (req, res) => res.sendFile(basePath + "index.html"))

module.exports = routes;