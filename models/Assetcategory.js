const mongoose = require('mongoose');

const assetCategorySchema = new mongoose.Schema({
  Laptop: {
    type: String,
    required: true,
    unique: true
  },
  MobilePhone: {
    type: String,
    required: true
  },
  Computer: {
    type: String,
    required: true
  },
  Macbook: {
    type: String,
    required: true
  }
  
});

const AssetCategory = mongoose.model('AssetCategory', assetCategorySchema);

module.exports = AssetCategory;
