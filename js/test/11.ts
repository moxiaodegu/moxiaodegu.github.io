/*
 * @Author: mayanli
 * @Date: 2023-02-01 11:15:11
 * @LastEditors: mayanli
 * @LastEditTime: 2023-02-21 12:15:10
 * @Description: file content
 * @FilePath: /moxiaodegu.github.io/js/test/11.ts
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


const arr = [2,3]
const arr1 = [3,4,5]

[...arr,...arr1].reduce((pre,cur)=>{
  if (pre.includes(cur)) return pre;
  return [...pre,cur]
},[])

instanceof