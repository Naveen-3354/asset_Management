const express = require("express");
const app = express.Router();
const { Op } = require("sequelize");
const AssetIssue = require("../models/issueAsset");
const Assets = require("../models/assets");
const Employee = require("../models/employee");

app.get("/", async (req, res) => {
  try {
    let assetIssues = await AssetIssue.findAll();
    assetIssues = assetIssues.filter(asset=> asset.status === "ISSUED")
    const employees = await Employee.findAll();
    const assets = await Assets.findAll();
    res.render("assetIssue/assetIssueList", {
      title:"issue",
      assetIssues,
      employees,
      assets
    });
  } catch (error) {
    res.status(500).render("error", { message: error.message });
  }
});

app.get("/returnList", async (req, res) => {
  try {
    let assetIssues = await AssetIssue.findAll();
    assetIssues = assetIssues.filter(asset=> asset.returnStatus === "RETURNED")
    const employees = await Employee.findAll();
    const assets = await Assets.findAll();
    res.render("assetIssue/assetIssueList", {
      title:"return",
      assetIssues,
      employees,
      assets
    });
  } catch (error) {
    res.status(500).render("error", { message: error.message });
  }
});


app.get("/scrapList", async (req, res) => {
  try {
    let assetIssues = await AssetIssue.findAll();
    assetIssues = assetIssues.filter(asset=> asset.returnStatus === "SCRAP")
    const employees = await Employee.findAll();
    const assets = await Assets.findAll();
    res.render("assetIssue/assetIssueList", {
      title:"scrap",
      assetIssues,
      employees,
      assets,
      action: true
    });
  } catch (error) {
    res.status(500).render("error", { message: error.message });
  }
});

app.get("/history", async (req, res) => {
  try {
    let assetIssues = await AssetIssue.findAll();
    const employees = await Employee.findAll();
    const assets = await Assets.findAll();
    res.render("history/index", {
      assetIssues,
      employees,
      assets,
      action: true
    });
  } catch (error) {
    res.status(500).render("error", { message: error.message });
  }
});

app.get("/issue", async (req, res) => {
  try {
    const employees = await Employee.findAll();
    const assets = await Assets.findAll();
    res.render("assetIssue/issue-asset", { 
      title:"issue",
      employees, assets });
  } catch (error) {
    res.status(500).render("error", { message: error.message });
  }
});

app.get("/return/:id", async (req, res) => {
  try {
    const assetIssue = await AssetIssue.findByPk(req.params.id);
    await AssetIssue.update(
      {...assetIssue, "status":"RETURNED"},
     { where: { id: req.params.id }}
    )
    res.redirect("/assetIssue")
  } catch (error) {
    res.status(500).render("error", { message: error.message });
  }
});
app.get("/scrap/:id", async (req, res) => {
  try {
    const assetIssue = await AssetIssue.findByPk(req.params.id);
    await AssetIssue.update(
      {...assetIssue, "status":"SCRAP"},
     { where: { id: req.params.id }}
    )
    res.redirect("/assetIssue")
  } catch (error) {
    res.status(500).render("error", { message: error.message });
  }
});
app.post("/create", async (req, res) => {
  console.log(req.body);
  
  try {
    await AssetIssue.create({...req.body,"status": "ISSUED"});
    res.redirect("/assetIssue")
  } catch (error) {
    res.status(500).render("error", { message: error.message });
  }
});

module.exports = app;
