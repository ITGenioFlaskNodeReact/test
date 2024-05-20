const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", require("./routers/auth-router"));
async function start() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017", {});

    app.listen(PORT, () => {
      console.log("Server started successfully on port", PORT);
    });
  } catch (err) {
    console.error(err);
  }
}

start();
