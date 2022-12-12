const ring = 15.678;
const coins = 123.965;
const bracelet = 90.2345;
const storePrices = document.querySelector(".js-store-prices");
const productsCombined = [ring, coins, bracelet];

let largestNumber = Math.max(ring, coins, bracelet);
let smallestNumber = Math.min(ring, coins, bracelet);
let productSum = ring + coins + bracelet;
let productSumFloor = Math.floor(ring) + Math.floor(coins) + Math.floor(bracelet);
let productNearestHundred = Math.round(productSumFloor / 100) * 100;
let productOddOrEven = !(productSumFloor % 2);
let productSellChange = 500 - productSum;
let averagePrice = productSum / productsCombined.length;
let averagePriceReduced = Number(averagePrice).toFixed(2);
let randomProductDiscount = (Math.random() * 10).toFixed(2);
let productCDiscount = (productSum * randomProductDiscount) / 100;
let productCost = productSum / 2;
let storeProfit = productSum - productCost - productCDiscount;

storePrices.innerHTML = `
[${ring}, ${coins}, ${bracelet}] </br><hr>
Максимальне число: ${largestNumber} </br>
Мінімальне число: ${smallestNumber} </br>
Сума вартості товарів: ${productSum} </br>
Сума вартості товарів без копійок і округлене в меншу сторону: ${productSumFloor} </br>
Сума вартості товарів округлена до сотень: ${productNearestHundred} </br>
Парне число?: ${productOddOrEven} </br>
Решта з 500: ${productSellChange} </br>
Середня ціна з округленням до 2 знаків після крапки: ${averagePriceReduced} </br>
Собівартість при ціні зі знижкою при купівлі 3 різних товарів: ${storeProfit} </br>
`;