// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// const threeSum = function(nums) {
//    let result = []

//    for(let i = 0; i < nums.length -2; i++){
//       for(let j = i + 1; j < nums.length -1; j++){
//          for(let k = j+1; k < nums.length; k++ ){
//             const a = nums[i]
//             const b = nums[j]
//             const c = nums[k]

//             let set = `${a} ${b} ${c}`

//             if(a+b+c === 0 ){
//                if(result.indexOf(set) === -1){
//                   result.push(set)
//                }
//             }
//          }
//       }
//    }
//    console.log(result)
//    return result
// }

// const a = [-5, -1, -4 ,2 ,9, -9 ,-6, -1, -7,]
// const b = [-1,-6 ,-3, -7 ,5 ,-8, 2 ,-8,1]
// threeSum(a)
// threeSum(b)


var threeSum = function(nums, target = 0) {
   const result = [];

   if(nums.length < 3){
      return result
   }

   // sorting is ok because the function is already O(n^2)
    // and sort is O(nlogn)
    // this also lets us stop iterating once weve passed the target value
   nums = nums.sort((a,b)=> a-b)

   // well use i as our anchor as we move through the array
    // we stop at nums.length - 2 to prevent undefined for k
   for(let i = 0; i < nums.length -2; i++){
      // because we sorted the array already
      // we can stop here if the current iterator is greater than the target value
      if(nums[i] > target){
         break
      }

      //if the iterator is the same as the previous value
      //skip it to prevent duplicates
      if(i > 0 && nums[i] === nums[i-1]){
         continue
      }

      // start j at i + 1 
      let j = i + 1

      //start k at the end of array
      let k = nums.length -1 

      // walking j and k towards each other to find all possible values
      // with i as our anchor value

      while(j < k){
         let sum = nums[i] + nums[j] + nums[k]

         if(sum === target){
            result.push([nums[i], nums[j], nums[k]])

            // skip duplicate values of j and k
            while (nums[j] === nums[j + 1]) j++;
            while (nums[k] === nums[k - 1]) k--;

            //move j and k inward
            j++
            k--
            continue
         }

         if(sum < target){
            j++;
            continue
         }

         if(sum > target){
            k--;
            continue
         }

      }

   }

   return result

}

const c =[-1, 0, 1, 2, -1, -4]
console.log(threeSum(c))