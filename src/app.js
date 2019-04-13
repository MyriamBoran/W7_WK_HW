const Beer = require("./models/beer.js");
const BeerSelectView = require("./views/beer_select_view.js");
const BeerResultView = require("./views/beer_result_view.js");

document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.querySelector("select#beer-select");
  const selectView = new BeerSelectView(selectElement);
  selectView.bindEvents();

  const listContainer = document.querySelector("#selected-beer");
  const beerListView = new BeerResultView(listContainer);
  beerListView.bindEvents();

  const beer = new Beer();
  beer.bindEvents();
});
