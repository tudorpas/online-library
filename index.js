const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
// IMPORT PATHS
const staticPath = __dirname + '/public'; 
const routesPath = __dirname + '/routes';

// IMPORT ROUTERS
const homeRouter = require(routesPath + '/home.js');
const idRouter = require(routesPath + '/bookID.js')


const app = express();
const PORT = 3000;


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://tudorpascariu:KkM8Uv81VXftZZIH@generatiatechproject.rnhpqgn.mongodb.net/?authMechanism=DEFAULT');}

// MAKING /PUBLIC FOLDER STATIC
app.use(express.static(staticPath));
// USE ROUTERS
app.use('/', homeRouter.router);
app.use('/carti', idRouter);

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    main()
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
      });
   });
