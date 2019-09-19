const express = require("express");
const routes = express.Router();
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");

routes.get("/", (req, res) => {
  return res.json({ message: `Olá ${req.query.name}` });
});

routes.post("/devs", DevController.store);

routes.post("/devs/:devId/likes", LikeController.store);

routes.post("/devs/:devId/dislikes", DislikeController.store);

routes.get("/devs", DevController.index);

module.exports = routes;

// AlexandreSpezani: 5d82767b7e19d71e64e807f5
// diego3g: 5d826d2d6eb41f2124a24698
// Eriton: 5d83b19c1a494a0704ea1c9f
// David: 5d8260526fe0750fa05214a0
