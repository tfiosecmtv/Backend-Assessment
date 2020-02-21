const express = require("express");
const router = express.Router();
let sample = require("../mockData/sample");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /sample",
    sampleData: [sample]
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling POST requests to /sample"
  });
});

module.exports = router;