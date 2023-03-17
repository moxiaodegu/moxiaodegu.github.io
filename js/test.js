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

const arr = [1, 2, 3]

// console.log(Array.keys(arr))
// console.log(Array.values(arr))
// console.log(Array.entries(arr))

for (const iterator of arr.entries()) {
  console.log(iterator)
}