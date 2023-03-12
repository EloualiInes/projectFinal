const express = require('express');
const app = express();
const dotenv = require("dotenv");
const { createUser } = require('./controllers/User.controller');
dotenv.config();
// const router = express.Router()

// Faire les routes à part

// Se changera en post
app.get('/user/signup', createUser)

const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server has started at port " + PORT))