const express = require("express")
const app = express.Router()
const AssetCategory = require("../models/AssetCategory")


app.get('/', async (req, res) => {
    try {
        const assetCategories = await AssetCategory.findAll();

        res.render('assetCategory/assetCategoryList', {
            assetCategories
        });
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
});


app.get('/create', (req, res) => {
    res.render('assetCategory/newAssetCategory', {title:"Create"});
});

app.get('/:id',async (req, res) => {
    try {
        const assetCategory = await AssetCategory.findByPk(req.params.id);
        if (assetCategory) {
            res.send(assetCategory);
        } else {
            res.status(404).send('error', { message: 'AssetCategory not found' });
        }
    } catch (error) {
        res.status(500).send('error', { message: error.message });
    }
});

app.get('/edit/:id',async (req, res) => {
    try {
        const assetCategory = await AssetCategory.findByPk(req.params.id);
        if (assetCategory) {
            res.render('assetCategory/newAssetCategory', { assetCategory, title:"Edit" });
        } else {
            res.status(404).render('error', { message: 'AssetCategory not found' });
        }
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
});

app.post('/', async (req, res) => {
    try {
        console.log(req.body);

        await AssetCategory.create(req.body);
        res.redirect('/assetCategory');
    } catch (error) {
        res.status(400).render('error', { message: error.message });
    }
});

app.post('/:id/edit', async (req, res) => {
    try {
        const [updated] = await AssetCategory.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            res.redirect('/assetCategory');
        } else {
            res.status(404).render('error', { message: 'AssetCategory not found' });
        }
    } catch (error) {
        res.status(400).render('error', { message: error.message });
    }
});

app.post('/:id/delete', async (req, res) => {
    try {
        const deleted = await AssetCategory.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.redirect('/assetCategory');
        } else {
            res.status(404).render('error', { message: 'AssetCategory not found' });
        }
    } catch (error) {
        res.status(500).render('error', { message: error.message });
    }
});

app.post("/all", async(req, res)=>{
    try{
        await AssetCategory.bulkCreate(
            
        )
        res.send("created...")
    }catch(error){
        console.log(error);
        
    }
})

module.exports = app;