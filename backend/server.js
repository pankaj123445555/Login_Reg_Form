const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config('');

app.use(cors());
app.use(express.json());
const User  = require('./Model/User');
const connectDB = require('./Config/db');
connectDB();
const {registerUser,Login,allUser} = require('./Controller/UserController');
const protect = require('./Middleware/Protect');
const Port = process.env.PORT||5000;

app.use('/api/users', protect);

app.post('/api/login',Login);
app.post('/api/register',registerUser);
app.get('/api/users',allUser);
app.listen(Port,()=>{
    console.log(`server is listen on the port ${Port}`);
})