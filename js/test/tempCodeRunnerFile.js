var twoSum = function (nums, target) {
  // 获取小于值target的数组
  let retList = []
  const arr = nums.sort().filter(num => num < target)
  for (const i = 0; i < arr.length; i++) {
    for (const j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(i, j)
        retList = [i, j]
        return
      }
    }
    return
  }
  console.log(retList)
  return 

};

console.log(twoSum([2, 7, 11, 15], 9))