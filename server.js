const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/todoRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.port || 5656;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.mongodb_url)
  .then(() => console.log("Connected to monogodb successfuly!"))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
