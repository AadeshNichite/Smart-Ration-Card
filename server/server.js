const express =require('express');
const connectDB = require('./config/db')

const app = express();

//Connect Database
connectDB();

app.get('/', (req,res)=>res.send('API is Running'));
//Define Routes

app.use('./routes/api/users ', require('./routes/api/users'));
app.use('./routes/api/auth', require('./routes/api/auth'));
app.use('./routes/api/profile', require('./routes/api/profile'));
app.use('./routes/api/post', require('./routes/api/post'));

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {console.log(`Port ${PORT} running on browser...`)});


  