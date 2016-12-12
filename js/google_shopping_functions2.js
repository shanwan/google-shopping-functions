// 5.) Use your functions
//
// Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.
//
// All items made by Sony.
// All items made by Sony that are available.
// All available items by the author "Adorama Camera"
// All items made by Nikon with the author eBay.
// Example Function Usage
//
// //verbose -- outputs all cannon products
// var items = getItems(data);
// var cannonItems = getItemsByBrand(items, 'Cannon');
// console.log(cannonItems);
//
// //single line version -- does the same as above
// console.log(getItemsByBrand(getItems(data), 'Cannon'));

var data = require('../products.json');
var arrItems = data.items;

var listItems = [];

function getItems(item) {
  for (var i=0; i<item.length; i+=1) {
    listItems.push(item[i]);
    }
  return listItems;
  }

  var listItems1 = getItems(arrItems);

  // var brandList = [];

  function getItemsByBrand(items, brand) {
    var brandList = [];
    for (var i=0; i<items.length; i+=1) {
      if (items[i].product.brand === brand)
        brandList.push(items[i]);
      }
      return brandList;
    }

var sonyList = getItemsByBrand (listItems1, "Sony");
// console.log(sonyList);

// var availList =[];

function getAvailableProducts(items) {
  var availList =[];
  for (var i=0; i<items.length; i+=1) {
        if (items[i].product.inventories[0].availability === "inStock") {
         availList.push(items[i]);
       }
    }
  return availList
}

var availSonyList = getAvailableProducts(sonyList);
// console.log(availSonyList);

function getItemsByAuthor(items, author) {
  var authorList =[];
  for (var i=0; i<items.length; i+=1) {
    if (items[i].product.author.name.includes(author))
      authorList.push(items[i]);
      }
    return authorList
  }
var authorAdoCam = getItemsByAuthor(listItems1, "Adorama Camera");
// console.log(authorAdocam);

var availAdoCam = getAvailableProducts(authorAdoCam);
// console.log(availAdoCam);

var nikonItems = getItemsByBrand (listItems1, "Nikon")
// console.log(nikonItems);

var nikonItemseBay = getItemsByAuthor(nikonItems, "eBay")
// console.log(nikonItemseBay);
