const BeerInfoView = function() {};

BeerInfoView.prototype.createBeerDetail = function(beer) {
  const beerDetail = document.createElement("div");
  beerDetail.classList.add("beer-detail");

  const name = document.createElement("h3");
  name.textContent = beer.name;
  beerDetail.appendChild(name);

  const detailsList = document.createElement("ul");
  const meaning = this.createDetailListItem("Tagline", beer.tagline);
  detailsList.appendChild(meaning);

  const description = this.createDetailListItem(
    "Description",
    beer.description
  );
  detailsList.appendChild(description);

  const img = document.createElement("img");
  img.classList.add("beer-img");
  img.src = beer.image_url;
  detailsList.appendChild(img);

  beerDetail.appendChild(detailsList);
  return beerDetail;
};

BeerInfoView.prototype.createDetailListItem = function(label, property) {
  const element = document.createElement("li");
  element.classList.add("list");
  element.textContent = `${label}: ${property}`;
  return element;
};

module.exports = BeerInfoView;
