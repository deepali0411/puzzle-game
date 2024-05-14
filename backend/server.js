const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const errorHandler = require("../../backend-api/middleware/errorHandler");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
// app.use(express.json());
app.use(bodyParser.json());
app.use("/api",require("./routes/apiRoutes"));
app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`server ${port}`)
})
