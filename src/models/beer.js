const RequestHelper = require("../helpers/request_helper.js");
const PubSub = require("../helpers/pub_sub.js");

const Beer = function() {
  this.beerData = [];
};

Beer.prototype.bindEvents = function() {
  const request = new RequestHelper(`https://api.punkapi.com/v2/beers`);
  request.get().then(data => {
    this.beerData = data;
    PubSub.publish("Beer:data-ready", this.beerData);
  });

  PubSub.subscribe("SelectBeer:select", evt => {
    const selectedBeer = this.beerData[evt.detail];
    PubSub.publish("Beer:beer-ready", selectedBeer);
  });
};

module.exports = Beer;
