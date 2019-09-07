var threeSumClosest = function(nums, target) {

   if(nums == null || nums.length < 3){
      return new Error('Invalid Arguement')
   }

   nums.sort((a,b)=>a-b)
   
   let closest = Number.MAX_VALUE
   
   for(let i = 0; i < nums.length - 2; i++){
       let j = i + 1
       let k = nums.length - 1
       
       while(j < k){
         const sum = nums[i] + nums[j] + nums[k]
         if(sum === target){
            return sum
         }else if(sum < target){
            j++
         }else if(target < sum){
            k--
         }

         if(Math.abs(sum - target) < Math.abs(closest - target)){
            closest = sum
         }
       }
   }
   return closest
};

const a =threeSumClosest([-1,2,1,-4],1)
console.log(a)

// threeSumClosest([-1,2,1,-4],1)