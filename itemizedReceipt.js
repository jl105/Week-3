// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

let total = 0;
const logReceipt = function() {
	const args = Array.from(arguments);
	args.forEach(function(receipt) {
		total += receipt.price;
		console.log(`${receipt.descr} - ${receipt.price}`);
		console.log(`Running total: ${total}`);
	});
	console.log(`Total - ${total}`);
}


// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
