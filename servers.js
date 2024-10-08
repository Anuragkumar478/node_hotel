const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.get('/', function (req, res) {
  res.send('welocme to my hotel...menus ');
})

// import the router file
 const personRoutes=require('./routes/personRoutes');
 const MenuItemRoutes=require('./routes/menuItemRoutes');
  
 // use the routers
 app.use('/person' ,personRoutes);
 app.use('/menu',MenuItemRoutes);
app.listen(3000, () => {
  console.log('listening on part 3000');
})