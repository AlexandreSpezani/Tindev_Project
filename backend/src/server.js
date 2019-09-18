const express = require("express");
const routes = require("./routes");
const server = express();
// const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://spezani:spezani@cluster0-lemfe.mongodb.net/test?retryWrites=true&w=majority",
//   { useNewUrlParser: true }
// );

server.use(express.json());
server.use(routes);

server.listen(3333);
