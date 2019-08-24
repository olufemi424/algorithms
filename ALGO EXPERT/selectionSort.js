
//Finding the smallest with insertion sort, starting from the index 0, which is the first item on the list, set it as the current index

//while the current index, which is index 0 is less than the index of the last element in the array. Keep checking the rest of the items for possible item smaller than the items at the current index. 

//if found, swap the current smallest with the new smallest

//go back into the while look to check to the next current number, not considering the last swapped number

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