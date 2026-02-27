const express = require("express");
const app = express();

// load config form env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json req body 
app.use(express.json());

// import routes for todo api

const todoRoutes = require("./routers/todos.js");

//mount the todo api routes
app.use("/api/v1", todoRoutes);

// start server 
app.listen(PORT, () => {
    console.log(`Server startes Successfully at ${PORT}`);
})

//connect to database 
const dbConnect = require("./config/database");

dbConnect();

//default Route it's all depend on you to create it or not 
//do practice
app.get("/", (req,res) => {
    res.send(`<h1> this is HomePage baby`);
})