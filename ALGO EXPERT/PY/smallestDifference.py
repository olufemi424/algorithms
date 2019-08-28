def smallestDifference(arrayOne, arrayTwo):
   arrayOne.sort()
   arrayTwo.sort()
   idxOne = 0
   idxTwo = 0
   smallest = float('inf')
   current = float('inf')
   smallestPair = []
   while idxOne < len(arrayOne) and idxTwo < len(arrayTwo):
      firstNum = arrayOne[idxOne]
      secondNum = arrayTwo[idxTwo]
      if firstNum < secondNum:
         current = secondNum - firstNum
         idxOne += 1
      elif secondNum < firstNum:
         current = firstNum - secondNum
         idxTwo += 1
      else: 
         return [firstNum, secondNum]
      
      if smallest > current:
         smallest = current
         smallestPair = [firstNum, secondNum]
   return smallestPair



a = smallestDifference([2,3,4,1,13,5,8,2],[10,6,7,32,81,32,7,14])
print(a)