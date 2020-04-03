const app = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const errorHandler = require("errorhandler");
const router = app.Router();
const jsonParser = bodyParser.json();
const {postDevice} = require('../controllers');

router.use(errorHandler());
router.post("/api/homes/1/devices", jsonParser,  postDevice(req,res,next));
router.get("/api/homes/1/devices", (req, res, next) => {
  //res.send(devices);
  res.json(devices);
  res.sendStatus(200);
  res.end();
});
router.get("/api/homes/1/devices/:id", function(req, res, next) {
  let index = req.params.id - 1;
  if (devices[index]) {
    res.json(devices[index]);
    res.end();
  } else res.sendStatus(404);
});
router.delete("/api/homes/1/devices/:id", function(req, res, next) {
  let index = req.params.id - 1;
  devices.splice(index, 1);
  res.sendStatus(200);
  res.end();
});

router.put("/api/homes/1/devices/:id", jsonParser, function(req, res, next) {
  let index = req.params.id - 1;
  devices[index] = req.body;
  res.sendStatus(204);
  res.end();
});
