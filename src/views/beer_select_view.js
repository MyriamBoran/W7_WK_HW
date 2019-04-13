const PubSub = require("../helpers/pub_sub");

const BeerSelectView = function(selectElement) {
  this.selectElement = selectElement;
};

BeerSelectView.prototype.bindEvents = function() {
  PubSub.subscribe("Beer:data-ready", evt => {
    this.populateSelect(evt.detail);
  });

  this.selectElement.addEventListener("change", evt => {
    const selectedIndex = evt.target.value;
    PubSub.publish("SelectBeer:select", selectedIndex);
  });
};

BeerSelectView.prototype.populateSelect = function(beers) {
  beers.forEach((beer, index) => {
    const option = this.createBeerOption(beer, index);
    this.selectElement.appendChild(option);
  });
};

BeerSelectView.prototype.createBeerOption = function(beer, index) {
  const option = document.createElement("option");
  option.textContent = beer.name;
  option.value = index;
  return option;
};

module.exports = BeerSelectView;
