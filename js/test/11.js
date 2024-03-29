/*
 * @Author: mayanli
 * @Date: 2023-02-01 11:15:11
 * @LastEditors: mayanli
 * @LastEditTime: 2023-03-16 14:48:54
 * @Description: file content
 * @FilePath: /GitHub/moxiaodegu.github.io/js/test/11.ts
 */

window.aa = '22222'
const obj = {
  aa: '4444'
}

const obj1 = {
  aa: '5555'
}

const foo = () => {
  console.log(this.aa)
}

function foo1() {
  console.log(this.aa)
  console.log(...arguments)

}
foo()

foo.call(obj)
foo.apply(obj1)

const fooB = foo.bind(obj)
fooB()

foo1()

foo1.call(obj)
foo1.apply(obj1)

const fooB1 = foo1.bind(obj)
fooB1()

Function.prototype.apply1= function(that){
  that.fn= this
  const args = arguments[1] || []
  return that.fn(...args)
}

Function.prototype.call1= function(that){
  that.fn= this
  const args = [...arguments].slice(1)
  return that.fn(...args)
}


Function.prototype.bind1= function(that) {
  const args = [...arguments].slice(1)
  const temp = function() {
    return this.apply(that,args)
  }
  temp.prototype = this.prototype
  return temp
}





const p = Promise.resolve(true)
console.log(p)
setTimeout(() => {
  console.log(p)
}, 0)




// function instanceofFun(left,right) {
//   const a = left.__proto__
//   const b = right.prototype
//   console.log(a)

//   if (a === b) return true
//   if (a === null) return false
//   instanceofFun(a,right)
// }

// console.log(instanceofFun('',Object))


function new_instance_of(leftVaule, rightVaule) { 
  let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
  leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
  while (true) {
    if (leftVaule === null) {
          return false;	
      }
      if (leftVaule === rightProto) {
          return true;	
      } 
      leftVaule = leftVaule.__proto__ 
  }
}

console.log(new_instance_of({},Array))



function instanceofFun(left,right) {
  if ( left == null || ( typeof left !== 'function'  && typeof left !== 'object')) {
    return false
  }
  let a = left.__proto__
  const b = right.prototype
  while(true) {
    if (a === b) return true
    if (a === null) return false
    a = a.__proto__
  }
}
console.log(instanceofFun([],Array))
