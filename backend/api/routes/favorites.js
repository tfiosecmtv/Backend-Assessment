const express = require("express");
const router = express.Router();
let favoriteData = require("../mockData/favoritesData");
var sortJsonArray = require('sort-json-array');

//var json = JSON.parse(favoriteData);

console.log(favoriteData);



//var books = favoriteData.ArrayOf("Books");
console.log(favoriteData.Books);

// var dishes = favoriteData.ArrayOf("Dishes");
// var users = favoriteData.ArrayOf("Users");


sortJsonArray(favoriteData.Books, "title");
sortJsonArray(favoriteData.Dishes, "title");
sortJsonArray(favoriteData.Users, "name");

console.log(favoriteData.Books);
console.log(favoriteData.Dishes);
console.log(favoriteData.Users);

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /favorites",
    favorite: [favoriteData]
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling POST requests to /favorites"
  });
});

module.exports = router;
