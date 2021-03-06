'use strict';

var orderedProducts = [];

function Product(name, id, path) {
  this.name = name;
  this.id = id;
  this.path = path;
}
var bag = new Product('Bag', 'bag', 'img/bag.jpg');
var banana = new Product('Banana Slicer', 'banana', 'img/banana.jpg');
var bathroom = new Product('Bathroom appliance','bathroom', 'img/bathroom.jpg');
var boots = new Product('Boots','boots', 'img/boots.jpg');
var breakfast = new Product('All-in-1 Breakfast','breakfast', 'img/breakfast.jpg');
var bubblegum = new Product('Meatball bubblegum', 'bubblegum', 'img/bubblegum.jpg');
var chair = new Product('Red chair', 'chair', 'img/chair.jpg');
var cthulhu = new Product('Cthulhu', 'cthulhu', 'img/cthulhu.jpg');
var dogDuck = new Product('Dog duckbill', 'dogDuck', 'img/dog-duck.jpg');
var dragon = new Product('Dragon meat', 'dragon', 'img/dragon.jpg');
var pen = new Product('Utensil pen caps', 'pen', 'img/pen.jpg');
var petSweep = new Product('Pet sweeper shoes','petSweep', 'img/pet-sweep.jpg');
var scissors = new Product('Pizza scissors','scissors', 'img/scissors.jpg');
var shark = new Product('Shark sleeping bag', 'shark', 'img/shark.jpg');
var sweep = new Product('Baby sweeper pajamas', 'sweep', 'img/sweep.png');
var tauntaun = new Product('Tauntaun sleeping bag', 'tauntaun', 'img/tauntaun.jpg');
var unicorn = new Product('Unicorn meat', 'unicorn', 'img/unicorn.jpg');
var usb = new Product('Octopus usb drive', 'usb', 'img/usb.gif');
var waterCan = new Product('Artistic watering can', 'waterCan', 'img/water-can.jpg');
var wineGlass = new Product('Wine glass', 'wineGlass', 'img/wine-glass.jpg');

var productArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

//check to see if there are any ordered products in local storage
function ordersPresent(){
  if (localStorage.getItem('ordered')){
    orderedProducts = JSON.parse(localStorage.getItem('ordered'));
  }
  // else {
  //   var body = document.getElementById('cart');
  //   var p = document.createElement('p');
  //   p.innerText = 'Your cart is empty. To select a product go back to the order form.';
  //   body.appendChild(p);
  // }
}
ordersPresent();
// for every item in the orderedProducts array do this process:
var body = document.getElementById('cart');
for (var i = 0; i < orderedProducts.length; i++){
// create div to hold ordered product info and add to body
  var div = document.createElement('div');
  div.setAttribute('class', orderedProducts[i].id);
  var image = document.createElement('img');
  image.setAttribute('src', orderedProducts[i].path);
  var prodInfo = document.createElement('div');
  prodInfo.setAttribute('class', 'prodInfo');
  var prodName = document.createElement('p');
  prodName.innerText = 'Product: ' + orderedProducts[i].name;
  var quantity = document.createElement('p');
  quantity.innerText = 'Quantity: ' + orderedProducts[i].quantity;
  var button = document.createElement('button');
  button.setAttribute('class', 'remove');
  button.innerText = 'Remove from cart';
  button.setAttribute('id', orderedProducts[i].id);
  button.addEventListener('click', deleteItem);
  prodInfo.appendChild(prodName);
  prodInfo.appendChild(quantity);
  div.appendChild(button);
  div.appendChild(image);
  div.appendChild(prodInfo);
  body.appendChild(div);
}

// button to remove item from cart
function deleteItem(event){
  var id = event.target.id;
  for (var i = 0; i < orderedProducts.length; i++){
    if (orderedProducts[i].id === id) {
      var item = document.getElementsByClassName(orderedProducts[i].id)[0];
      body.removeChild(item);
      orderedProducts.splice(i, 1);
      localStorage.setItem('ordered', JSON.stringify(orderedProducts));
      location.reload();
    }
  }
}
