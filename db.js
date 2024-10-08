//const mongoose=require('mongoose');
// defint the mongodb connection url 
// const mongoURL='mongodb://localhost:27017/hotel'// relplace mydata basee with your database name 
// //mongoose.connect('mongodb://localhost:27017/mydb');
// mongoose.connect(mongoURL,{
//    useNewUrlParser:true,
//     useUnifiedTopology:true
// });
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hotel');


 const db=mongoose.connection;

// // denfin const listner 
 db.on('connected',()=>{
     console.log('connected to MongoDB server');
  });
  db.on('error',(err)=>{
    console.error('MongoDB connection error:',err);
  })
  db.on('disconnected',() =>{
    console.log('MongoDB disconnected');
  });

   // export the database connection
   
   module.exports=db;