
// go thru the array every single time untill all numbers are swapped to be in their corrrect position

function bubbleSort(arr){
   let isSorted = true

   while(isSorted){
      isSorted = false
      for(let i = 0; i < arr.length; i++){
         if(arr[i] > arr[i + 1]){
            [arr[i], arr[i+1]] =  [arr[i+1], arr[i]]
            isSorted = true
         }
      }
   }

   return arr
}

console.log(bubbleSort([8,5,2,9,5,6,9]))