---
title: 理解原型和继承
tags: JavaScript
layout: post
---

每个函数在创建时，都会添加一个prototype属性指向它的原型对象，这个原型对象会自动添加一个constructor属性指向这个构造函数，两者循环引用，其他方法继承来自Object

## 理解原型

每次通过new调用构造函数创建一个新实例时，实例的隐式原型[[prototype]]指针会指向构造函数的原型对象，如：Person.prototype。在浏览器会暴露一个`__proto__` 来访问隐式原型[[prototype]]

> 实例和构造函数没有直接联系，而是和构造函数的原型有直接联系

```javascript
function Person() {} //声明之后就有一个与之关联的原型对象,可通过Person.prototype访问

let person =  new Person

// 一条原型链

// 实例对象的__proto__指向构造函数的原型对象
console.log(person.__proto__ == Person.prototype) // true

// 构造函数原型的__proto__指向Object构造函数的原型
console.log(Person.prototype.__proto__ == Object.prototype) // true

// Object原型的__proto__指向null
console.log(Object.prototype.__proto__ == null) // true

```

*总结*

- 大部分原型都会终止于Object的原型对象，Object的原型对象指向null
- 实例通过__proto__ 指针指向构造函数的原型对象prototype，__proto__ 就是隐式原型[[prototype]]
- 构造函数通过prototype属性指向原型
- 
