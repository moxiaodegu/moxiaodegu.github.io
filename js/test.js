/*
 * @Descripttion: 
 * @version: 
 * @Author: mayanli
 * @Date: 2021-01-06 19:30:51
 * @LastEditors: mayanli
 * @LastEditTime: 2021-08-16 19:38:40
 */

// class Iterator {
//     constructor(arr) {
//         this.arr = arr
//     }

//     [Symbol.iterator]() {
//         let count = 0, arr = this.arr;
//         return {
//             next() {
//                 return count < arr.length ? { value: arr[count++], done: false } : { value: undefined, done: true }
//             }
//         }
//     }
// }


// let iterator = new Iterator([1, 2, 3]);

// console.log(iterator[Symbol.iterator]().next())


// function generatorFn(n) {
//     if (n>0) {       
//         generatorFn(n-1)
//     } 
//     console.log(n)
// }

// generatorFn(3)

// for ( let i of generatorFn(3)) {
//     console.log(i)
// }

const Person = function(name,age) {
    this.name = name
    this.age = age
    this.sayName = function() {
        console.log(name)
    }
}

// 构造函数调用
const person1 = new Person("limei",20)
person1.sayName()


