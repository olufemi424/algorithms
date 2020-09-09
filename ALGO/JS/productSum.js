const a = [5,2,[7,-1],3,[6,[-13,8],4]]

// O(n) = time || O(d) = space d-> debth of sub array
function findTheProductSum(arr, multiplier = 1){

   let sum = 0

   if (arr.length - 1 === 0){
      return arr[0]
   }else{
      for(let item of arr){
         if(Array.isArray(item)){
            sum+=  findTheProductSum(item, multiplier + 1)
         }else{
            sum += item
         }
      }
      return sum * multiplier
   }

}

// console.log(findTheProductSum(a))

