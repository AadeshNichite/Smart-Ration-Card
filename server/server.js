const express =require('express');
const uri = "mongodb+srv://Aadesh:nMM8ilJlC0TJvz6O@cluster0-qvy1m.mongodb.net/test?retryWrites=true&w=majority";
const app = express();
const port = process.env.PORT || 8800;
const mongoose = require('mongoose');
const cors=require('cors');
const bodyparser=require('body-parser');
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());// mongoose connection estblished
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
                    .then(() => console.log('Connected to MongoDB Successfully......'))
                    .catch(err => console.log('Error occured while connecting MongoDB '+err));
console.log("connect");// set path for router file
// app.use('/', require('./route'));// listening port
app.listen(port, () => {
console.log("Port 8800 running on browser...");
});