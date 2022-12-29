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

// const Person = function(name,age) {
//     this.name = name
//     this.age = age
//     this.sayName = function() {
//         console.log(name)
//     }
// }

// // 构造函数调用
// const person1 = new Person("limei",20)
// console.log(person1)

//------------------------------------


// function Person() {}
// Person.prototype.age = 20
// Person.prototype.name = "liMei"

// let person1 = new Person

// console.log(person1)

const Person = {
  age: 20,
  name: "liMei"
}

const person1 = Object.create(Person)

console.log(person1)


function Person() {

}



function Person() {} //声明之后就有一个与之关联的原型对象,可通过Person.prototype访问

let person1 = new Person
let person2 = new Person

/*
 * 一条原型链
 */

// 实例对象的__proto__指向构造函数的原型对象
console.log(person1.__proto__ == Person.prototype) // true

// 构造函数原型的__proto__指向Object构造函数的原型
console.log(Person.prototype.__proto__ == Object.prototype) // true

// Object原型的__proto__指向null
console.log(Object.prototype.__proto__ == null) // true

// 构造函数 的原型constructor 指向构造函数
console.log(person1.__proto__.constructor == Person) // true

// 构造函数的多个实例共享构造函数的原型
console.log(person1.__proto__ == person2.__proto__) // true

/*
 * 是否包含指定构造函数的原型：
 */
console.log(person1 instanceof Person); // true 
console.log(person1 instanceof Object); // true 
console.log(Person.prototype instanceof Object); // true


function SuperFun() {
  this.name = 'lining'
  // this.setName = ()=>{
  //   this.name = 'mamma'
  // }
}

// SuperFun.prototype.setName = ()=>{
//   this.name = 'mamma'
// }

function SubFun() {
  SuperFun.call(this) // 盗用构造函数

  this.setName = () => {
    this.name = 'mamma'
  }
}
SubFun.prototype = new SuperFun() // 原型模式

const a = new SubFun()

console.log(a.name) // lining
a.setName()
console.log(a.name) // mamma

const b = new SubFun()
console.log(b.name) // mamma


function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

// let person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"]
// };
// let anotherPerson = object(person);
// anotherPerson.name = "Greg";
// anotherPerson.friends.push("Rob");
// let yetAnotherPerson = object(person);
// yetAnotherPerson.name = "Linda";
// yetAnotherPerson.friends.push("Barbie");
// console.log(person.name); // "Shelby, Court, Van, Rob, Barbie"









const info = {
  age:11,
  get name(){
    return this.name1
  },
  set name(n){
    this.name1 = n+'8888'
  },
}
console.log(info.name,info.age)
info.name = '3333'
console.log(info.name,info.age)

function Super() {
  this.name = 'mlili'
}
Super.prototype.say = function(){
  console.log(this.name)
}

const son = new Super()
// console.log(son.name)
son.say()


class Person {
  name ='4444'
  constructor(age) {
    this.age_ = age;
  }
  sayAge() {
    console.log(Person.name,999999);
  }
  static create() {
    // 使用随机年龄创建并返回一个Person实例
    return new Person(Math.floor(Math.random() * 100),44444);
  }
  static create1() {
    // 使用随机年龄创建并返回一个Person实例
    return new Person(Math.floor(Math.random() * 100),44444);
  }
}
// console.log(Person.create()); // Person { age_: ... }

const aa = new Person(22)
console.log(Person.create1())


function Fun() {
  this.name='00000'
}

class Cla extends Fun{
  constructor() {
    super()
    this.age = 23
  }
}

const dd = new Cla()

console.log(dd)


class Person {
  constructor() {
    return {
      name:'name'
    }
  }
}
 
console.log(Person.prototype.constructor === Person)

const person = new Person()
console.log(person instanceof Person)
console.log(person.__proto__ == Object.prototype)
console.log(typeof Person)

const wa =  {
 name: '333'
}
console.log(ç.__proto__ == Object.prototype)

const aaa = new Object({name:111})

console.log(aaa.__proto__)

new class Person1{
  constructor(x){
    console.log(x)
  }
}('lll')

class Person {
  // name = 6
  constructor(){
    this.name='6'
  }

  getname() {
    return this.name
  }
}
const aa1 = new Person
console.log(aa1.name);
console.log(aa1.getname());


class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    print();
  }
}

let b2 = new B();
b2.m() 


const obj = {
  name:'lllllllll'
}

const handler = {
  get(){
    return 'mmmmm'
  }
}

const proxy = new Proxy(obj,handler)

console.log(proxy.name)

console.log(obj.name)




