// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const employeeController = require('./controllers/employeeController');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://KT:ppIOjoD0Fk19Quqj@cluster0.dconihp.mongodb.net/KTTASK?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(error => console.error('Error connecting to MongoDB:', error));

// // Routes
// app.get('/api/employees', employeeController.getEmployees);
// app.post('/api/employees', employeeController.addEmployee);
// app.delete('/api/employees/:id', employeeController.deleteEmployee);
// app.put('/api/employees/:id', employeeController.toggleActive);





// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeController = require('./controllers/employeeController');
const assetController =require ('./controllers/assetControllers');
const assetCategoryController =require('./controllers/Assetgategory');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://KT:ppIOjoD0Fk19Quqj@cluster0.dconihp.mongodb.net/KTTASK?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));


///Employee Master APi
app.get('/api/employeemaster', employeeController.getAllEmployees);
app.post('/api/employeemaster', employeeController.addEmployee);
app.delete('/api/employeemaster/:id', employeeController.deleteEmployee);
app.put('/:id/toggleInactive', employeeController.toggleActiveStatus);
///Employee Master APi


///Assetcategory




///Asset Controller master
app.get('/api/assets', assetController.getAllAssets);
app.post('/api/assets', assetController.addAsset);



///ASSET Category
// app.get('/api/assetCategories', assetCategoryController.createAsset);
// app.post('/api/assetCategories', assetCategoryController.getAssetsByCategory);
app.get('/assetCategories', assetCategoryController.getAllAssetCategories);
app.post('/assetCategoriess', assetCategoryController.createAssetCategory);



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
