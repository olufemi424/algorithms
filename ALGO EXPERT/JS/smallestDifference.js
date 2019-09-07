// O(n)

function smallestDifference(arrayOne, arrayTwo){
   arrayOne.sort((a,b)=>a-b)
   arrayTwo.sort((a,b)=>a-b)

   let idxOne = 0
   let idxTwo = 0
   let smallest = Number.MAX_VALUE
   let current = Number.MAX_VALUE
   let smallestPair = []

   while(idxOne < arrayOne.length && idxTwo < arrayTwo.length){
      const firstNum = arrayOne[idxOne]
      const secondNum = arrayTwo[idxTwo]

      if(firstNum < secondNum){
         current = secondNum - firstNum
         idxOne+=1
      }else if(secondNum < firstNum){
         current = firstNum - secondNum
         idxTwo+=1
      }else{
         return [firstNum, secondNum]
      }

      if(smallest > current){
         smallest = current
         smallestPair = [firstNum, secondNum]
      }
   }
return smallestPair

}

const a = smallestDifference([1,2,3], [4,5,6])
console.log(a)