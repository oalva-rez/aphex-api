const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();

const mongoString = process.env.MONGO_CONN;
const indexRouter = require("./routes/index");

const app = express();

mongoose.set("strictQuery", true);
mongoose.connect(mongoString);
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.listen(3005, () => {
  console.log("Example app listening on port 3005!");
});
module.exports = app;
