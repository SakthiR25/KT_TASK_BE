// controllers/assetCategoryController.js
const AssetCategory = require('../models/AssetCategory');

exports.getAllAssetCategories = async (req, res) => {
  try {
    const categories = await AssetCategory.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAssetCategory = async (req, res) => {
  const { Laptop, price } = req.body;
  try {
    const newCategory = new AssetCategory({ name, price });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
