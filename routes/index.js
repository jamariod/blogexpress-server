var express = require("express");
var router = express.Router();
var postmodel = require("../models/posts");

/* GET home page. */
router.get("/", async function(req, res, next) {
  const postData = await postmodel.getAll();
  res.send(postData).status(200);
});

module.exports = router;
