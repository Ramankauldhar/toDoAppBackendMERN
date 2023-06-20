const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/todoRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.port || 4045;

mongoose
  .connect(process.env.mongodb_url)
  .then(() => console.log("Connected to monogodb successfuly!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log("Server is running on:" + PORT));
