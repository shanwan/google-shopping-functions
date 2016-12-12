var data = require('../products.json');
var arrItems = data.items;

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.length;
}

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(arrItems));
// ========== 1.) getItems(objectData)
//
// input: json object
// returns: an array of items
// Create a function called getItems that simply returns the items array from the google product object.
//
// Note all other functions (below) use the return of this function as their input.
var listItems = [];

function getItems(item) {
  for (var i=0; i<item.length; i+=1) {
    listItems.push(item[i]);
    }
  return listItems;
  }

// console.log("Q1. List Items = ", getItems(arrItems));

// ========== 2.) getItemsByBrand(items, brand)
//
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
//
// Test this function by searching for Sony, Canon, Nikon and Panasonic.
var listItems1 = getItems(arrItems);
var brandList = [];

function getItemsByBrand(items, brand) {
  for (var i=0; i<items.length; i+=1) {
    if (items[i].product.title.includes(brand) === true)
      brandList.push(items[i]);
    }
    return brandList;
  }

// console.log("Q2. All Items of Sony = ", getItemsByBrand(listItems1,'Sony'))

// // ========== 3.) getItemsByAuthor(items, author)
// //
// // input: an array of items, a string of an author to filter with
// // returns: an array of items (of a specific author)
// // Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
// //
// // Test this function by searching for Target, CDW, eBay
var authorList =[];

function getItemsByAuthor(items, author) {
  for (var i=0; i<items.length; i+=1) {
    if (items[i].product.author.name === author)
      authorList.push(items[i]);
      }
    return authorList
  }

// console.log( "Q3. AuthorList = " , getItemsByAuthor(listItems1, 'CDW'))

// // ========== 4.) getAvailableProducts(items)
// //
// // input: an array of items
// // returns: an array of items (that are available)
// // Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)
var availList =[];

function getAvailableProducts(items) {
  for (var i=0; i<items.length; i+=1) {
        if (items[i].product.inventories[0].availability === "inStock") {
         availList.push(items[i]);
       }
    }
  return availList
}

// console.log( "Q4. AvailableList = ", getAvailableProducts(listItems1))
// var availprod = getAvailableProducts(listItems1)
// console.log(availprod.length);
