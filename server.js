const express = require("express");

const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
connectDb();
const app = express()

// const port = 5000;
const port = process.env.PORT


app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)


app.listen(port, ()=>{  
    console.log(`helllllllllo port ${port}`);
});