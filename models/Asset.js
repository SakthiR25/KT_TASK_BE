// models/Asset.js
const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  serialNumber: String,
  make: String,
  model: String,
  type: String
});

const Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;
