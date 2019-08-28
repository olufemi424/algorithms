
// go thru the array every single time untill all numbers are swapped to be in their corrrect position

//if the current number we are looking at is greater than the next one, we want to swap the number, and set the while loop condition to me true.


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