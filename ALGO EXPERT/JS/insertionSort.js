function insertionSort(arr){
   for(let i = 1; i < arr.length; i++){
      let j = i; 
      
      while(j > 0 && arr[j] < arr[j-1]){
         swap(j, j-1, arr)
         j--
      }
   }
   return arr
}

const swap =(a,b, arr)=>{
   // let temp = arr[b]
   // arr[b] = arr[a]
   // arr[a] = temp
   [arr[a], arr[b]] = [arr[b], arr[a]];
}


const arr1 = [8,7,4,3]

console.log(insertionSort(arr1))