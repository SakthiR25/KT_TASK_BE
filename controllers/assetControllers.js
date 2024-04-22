// const Asset = require('./Asset');
// const Asset = require ('../models/Asset')
const Asset = require ('../models/Asset')


const assetController = {};

assetController.getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (error) {
    console.error('Error fetching assets:', error);
    res.status(500).json({ error: 'Error fetching assets' });
  }
};

assetController.addAsset = async (req, res) => {
  try {
    const { serialNumber, make, model, type } = req.body;
    const newAsset = new Asset({ serialNumber, make, model, type });
    const savedAsset = await newAsset.save();
    res.json(savedAsset);
  } catch (error) {
    console.error('Error adding asset:', error);
    res.status(500).json({ error: 'Error adding asset' });
  }
};

module.exports = assetController;
