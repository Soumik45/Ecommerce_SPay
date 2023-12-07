const express = require("express")
const app = express()
const color = require("colors")
const dotenv = require("dotenv")
const morgan = require("morgan")
require("./config/db")
const routes = require('./routes/routers')

dotenv.config();




app.use(express.json());
app.use(morgan("dev"));



//routes
app.use("/api", routes);

app.get('/',(req,res)=>{
    res.send("Hello server")
})

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Running at ${PORT}`.bgRed)
})