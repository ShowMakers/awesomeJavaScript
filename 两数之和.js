
let nums = [2,11,15,7];
let target = 9;
var twoSum = function(nums, target) {
  const map = new Map();
  for(let i = 0, len = nums.length;i < len;i++) {
      if(map.has(target - nums[i])) {
        console.log(map.has(target - nums[i]),map.get(target - nums[i]),target - nums[i],map,i,"map1");
          return [map.get(target - nums[i]), i];
      }
      map.set(nums[i], i);
      console.log(map,"map2");
  }
  return [];
};

console.log(twoSum(nums,target));