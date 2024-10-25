const express = require("express")
const app = express.Router()
const Assets = require("../models/assets")
const AssetCategory = require("../models/AssetCategory")
const AssetIssue = require("../models/issueAsset")


app.get('/', async (req, res) => {
    try {
        const assets = await Assets.findAll();

        res.render('assets/assetsList', {
            assets
        });
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
});


app.get('/create', (req, res) => {
    res.render('assets/newAssets', {title:"Create"});
});

app.get('/edit/:id',async (req, res) => {
    try {
        const assets = await Assets.findByPk(req.params.id);
        console.log(assets);
        
        if (assets) {
            res.render('assets/newAssets', { assets, title:"Edit" });
        } else {
            res.status(404).render('error', { message: 'Assets not found' });
        }
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
});

app.post('/', async (req, res) => {
    try {
        console.log(req.body);

        await Assets.create(req.body);
        res.redirect('/assets');
    } catch (error) {
        res.status(400).render('error', { message: error.message });
    }
});

app.post('/:id/edit', async (req, res) => {
    try {
        const [updated] = await Assets.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            res.redirect('/assets');
        } else {
            res.status(404).render('error', { message: 'Assets not found' });
        }
    } catch (error) {
        res.status(400).render('error', { message: error.message });
    }
});

app.post('/:id/delete', async (req, res) => {
    try {
        const deleted = await Assets.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.redirect('/assets');
        } else {
            res.status(404).render('error', { message: 'Assets not found' });
        }
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
});


app.get('/view/:id',async (req, res) => {
    try {
        const asset = await Assets.findByPk(req.params.id);
        console.log(asset);

        const assetCategory = await AssetCategory.findByPk(asset.categoryId)
        const assetIssue = await AssetIssue.findAll({
            where: { assetId: asset.id }
        })
        console.log(assetIssue);
        if (asset && assetCategory && assetIssue) {
            res.render('stock/index', { asset, assetCategory, assetIssue});
        } else {
            res.status(404).render('error', { message: 'Assets not found' });
        }
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
});


module.exports = app;