for (const iterator of object) {

}

let map = new Map([
  [1, 2],
  [2, 3]
])

for (const [key, value] of map) {
  console.log(key, value)
}

// const arr = [1, 2, 3]
// const arrR = arr.reduce((pre, cur, item, array) => {
//   pre.push(++cur)
//   return pre
// }, [])

// console.log(arrR)

// const arr = [1, 2, 3]

// console.log(Array.keys(arr))
// console.log(Array.values(arr))
// console.log(Array.entries(arr))

// for (const iterator of arr.entries()) {
//   console.log(iterator)
// }


function insertSort(arr) {
  const len = arr.length
  let preIndex, current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1; // 初始化扫描指针(默认数组第一位)
    current = arr[i] // 当前值
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    if (preIndex + 1 != i) {
      arr[preIndex + 1] = current
    }
  }
  return arr
}

const arr = [3, 1, 56, 7, 8, 90, 234, 54, 6, 88, 234]

function selectSort(arr) {
  const len = arr.length
  let minIndex, temp;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr
}

console.log(selectSort(arr))