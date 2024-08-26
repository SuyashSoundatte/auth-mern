const express = require("express");
const app = express();
require("dotenv").config()
const cors = require("cors");
const bodyParser = require("body-parser");
require("./models/db")
const authRoute = require("./routes/auth.routes")

app.use(bodyParser.json());
app.use(cors())
app.use("/auth", authRoute)

const port = process.env.PORT || 8080;


app.get("/ping", (req, res)=>{
  res.send("Hello");
})

app.listen(port, ()=>{
  console.log("Server stared!");
})