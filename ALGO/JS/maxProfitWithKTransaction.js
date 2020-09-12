
function maxProfitWithKTransaction(prices, k) {
   if (!prices.length) return 0; 

   const profits = [];
   for (let t = 0; t < k + 1; t++) {
      const row = new Array(prices.length).fill(0);
      profits.push(row);
   }

   for (let t = 1; t < k + 1; t++) {
      let maxThusFar = -Infinity;
      for( let d = 1; d < prices.length; d++ ) {
         maxThusFar = Math.max(maxThusFar, profits[t - 1][d - 1] - prices[d - 1]);
         profits[t][d] = Math.max(profits[t][d - 1], maxThusFar + prices[d])
      }
   }

   // console.log(profits);
   return profits[k][prices.length - 1];
}

const prices = [5, 11, 3, 50, 60, 90];
const k = 2;
maxProfitWithKTransaction(Array.from(prices), k)