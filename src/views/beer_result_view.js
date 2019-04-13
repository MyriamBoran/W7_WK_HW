const PubSub = require("../helpers/pub_sub.js");
const BeerInfoView = require("./beer_info_view.js");

const BeerResultView = function(container) {
  this.container = container;
};

BeerResultView.prototype.bindEvents = function() {
  PubSub.subscribe("Beer:beer-ready", evt => {
    this.renderBeerInfoView(evt.detail);
  });
};

BeerResultView.prototype.clearList = function() {
  this.container.innerHTML = "";
};

BeerResultView.prototype.renderBeerInfoView = function(beer) {
  this.clearList();
  const beerItem = new BeerInfoView().createBeerDetail(beer);
  this.container.appendChild(beerItem);
};

module.exports = BeerResultView;
