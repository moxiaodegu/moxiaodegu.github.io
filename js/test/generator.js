var twoSum = function (nums, target) {
  // 获取小于值target的数组
  // const arr = nums.sort().filter(num => num < target)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i!==j) {
        return [i, j]
      }
    }
  }
};

  console.log(twoSum([3,2,4], 6))


