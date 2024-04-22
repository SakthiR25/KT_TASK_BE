// models/AssetCategory.js
const mongoose = require('mongoose');

const AssetCategorySchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const AssetCategory = mongoose.model('AssetCategory', AssetCategorySchema);

module.exports = AssetCategory;
