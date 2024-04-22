const Asset = require('../models/Assetcategoryselector');
exports.getAssetsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
      const assets = await Asset.find({ category });
      res.json(assets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  // Controller function to create a new asset
  exports.createAsset = async (req, res) => {
    const {  Laptop,
        MobilePhone,
        HardDisk,
        Computer,
        Macbook} = req.body;
    try {
      const asset = new Asset({
        Laptop,
        MobilePhone,
        HardDisk,
        Computer,
        Macbook
        
      });
      await asset.save();
      res.status(201).json({ message: 'Asset created successfully', asset });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };