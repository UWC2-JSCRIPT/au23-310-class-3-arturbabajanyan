// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

let tax = 6.5; //MA tax

const logReceipt = (...items) => {
  let total = 0;
  items.forEach((item) => {
    total += item.price
    console.log(item.descr + " - $" + item.price);
  })

  console.log("--------------\nTotal - $" + total);
  let taxAmount = +((total * tax / 100).toFixed(2));
  console.log(`--------------\nTax ${tax}% - $${taxAmount}`);
  let grandTotal = total + taxAmount;
  console.log("Grand total - $" + grandTotal.toFixed(2)); //if I don't use toFixed(2) grand total is 13.270000000000001
}


// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 },
  { descr: 'Coffee', price: 1.49 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97


//old version
// function logReceipt(burrito, price, sprite) {
//   console.log(`${burrito.descr} - $${burrito.price}`);
//   console.log(`${price.descr} - $${price.price}`);
//   console.log(`${sprite.descr} - $${sprite.price}`);
//   console.log("---------------------");
//   console.log(`Total - $${burrito.price + price.price + sprite.price}`);
//   console.log(`Tax - ${tax}%`);
//   console.log(`Grand total - $${((burrito.price + price.price + sprite.price) * (100 + tax)/100).toFixed(2)}`);
// }