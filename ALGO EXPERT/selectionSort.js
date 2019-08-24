
function selectionSort(arr){
   let currIndex = 0
   while (currIndex < arr.length){
      let smallestIdx = currIndex // keep track of the current index
      for(let i = currIndex+1; i < arr.length; i++){
         if(arr[smallestIdx] > arr[i]){
            smallestIdx = i
         }
      }
      //swap
      [arr[smallestIdx], arr[currIndex]] =  [arr[currIndex], arr[smallestIdx]]
      currIndex++
   }
   return arr
}


console.log(selectionSort([8,5,2,9,5,6,9]))