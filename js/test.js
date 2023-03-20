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



Function.prototype.apply = (that, arr) => {
  if (!Array.isArray(arr)) {
    return new Error('参数错误')
  }
  that.fn = this;
  return that.fn(...arr)
}


Function.prototype.bind = (that) => {
  if (typeof that !== 'function') {
    return new Error('请在函数后调用')
  }
  const args = [...arguments].slice(1)
  const temp = function () {
    return this.apply(that,args)
  }

  temp.prototype = this.prototype
  return temp

}


const a = 1
function foo() {
  console.log(this.a)
}
const obj = {
  a:2,
  foo
}

foo() // 1

obj.foo() // 2


function factory(Fun) {
  let obj = new Object() // 创建一个对象
  const args = [...arguments].slice(1)
  obj.__proto__ = Fun.prototype // 把对象的__proto__指向构造函数的原型
  obj.constructor = Fun // 对象的constructor指向构造函数本身
  Fun.apply(obj,args) // 将构造函数的this指向对象并执行
  return obj
}