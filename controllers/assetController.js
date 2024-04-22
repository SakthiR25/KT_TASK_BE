// controllers/assetController.js

const Asset = require('../models/Asset');

exports.getAllAssets = (req, res) => {
  res.json(Asset.getAll());
};

exports.addAsset = (req, res) => {
  const newAsset = new Asset(req.body);
  const savedAsset = newAsset.save();
  res.status(201).json(savedAsset);
};
