//Importer Express
const express = require('express');

//Pour rendre le corps de la requqête POST facilement exploitable
const bodyParser = require('body-parser');

const Sequelize = require('sequelize');

    
//Créer une applicaiton Express 
const app = express();

/* 

const db = new Sequelize('groupomania', 'root', 'UserRoot', {
  host: 'localhost',
  dialect: 'mysql'
});

db.authenticate()
.then(() => console.log('Database connected'))
.catch(err => console.log('Error: ' + err))

*/


//Premier middleware général éxécuté par le servre, permet à l'application d'accéder à l'api sans erreur CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}); 

//Transformer le corps de la requête en json utilisable
app.use(bodyParser.json());

//Exporter l'application pour pouvoir y accéder depuis les autres fichiers
module.exports = app;