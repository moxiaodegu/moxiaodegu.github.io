
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