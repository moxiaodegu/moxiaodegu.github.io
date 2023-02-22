const p = Promise.resolve(true)
// console.log(p)
setTimeout(() => {
  console.log(p)
}, 0)