const ring = 15.678;
const coins = 123.965;
const bracelet = 90.2345;

console.log(Math.ceil(ring), Math.floor(ring));
console.log(Math.ceil(coins), Math.floor(coins));
console.log(Math.ceil(bracelet), Math.floor(bracelet));

let productSum = [ring, coins, bracelet].reduce((a, b) => a + b, 0);
let productSumFloor = [Math.floor(ring), Math.floor(coins), Math.floor(bracelet)].reduce((a, b) => a + b, 0);

console.log(productSum);
console.log(productSumFloor);

let productNearestHundred = Math.round(productSumFloor / 100) * 100;
console.log(productNearestHundred);

let productOddOrEven = productSumFloor % 2 ? 'odd' : 'even';
console.log(productOddOrEven);

let productSellChange = 500 - productSum;
console.log(productSellChange);