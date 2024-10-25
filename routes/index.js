const express = require("express")
const app = express.Router()
const employee = require("../services/employeeService")
const assetCategory = require("../services/assetCategorysService")
const assets = require("../services/assetsService")
const assetsIssue = require("../services/assetIssueService")

app.get("/", (req, res)=> res.render("index"))
app.use("/employees", employee)
app.use("/assetCategory",assetCategory)
app.use("/assets",assets)
app.use("/assetIssue", assetsIssue)

app.get("*", (req, res)=> res.render("error"))



module.exports = app;