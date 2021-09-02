---
title: 理解原型和继承
tags: JavaScript
layout: post
---

每个函数在创建时，都会添加一个prototype属性指向它的原型对象，这个原型对象会自动添加一个constructor属性指向这个构造函数，两者循环引用，其他方法继承来自Object

## 1. 理解原型

每次通过new调用构造函数创建一个新实例时，实例的隐式原型[[prototype]]指针会指向构造函数的原型对象，如：Person.prototype。在浏览器会暴露一个`__proto__` 来访问隐式原型[[prototype]]

> 实例和构造函数没有直接联系，而是和构造函数的原型有直接联系

```javascript
function Person() {} //声明之后就有一个与之关联的原型对象,可通过Person.prototype访问

let person1 =  new Person
let person2 =  new Person

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
console.log(person1.__proto__.constructor == Person)

// 构造函数的多个实例共享构造函数的原型
console.log(person1.__proto__ == person2.__proto__)

/*
 * 是否包含指定构造函数的原型：
 */ 
console.log(person1 instanceof Person); // true 
console.log(person1 instanceof Object); // true 
console.log(Person.prototype instanceof Object); // true

```

*总结*

- 大部分原型都会终止于Object的原型对象，Object的原型对象指向null
- 实例通过__proto__ 指针指向构造函数的原型对象prototype，__proto__ 就是隐式原型[[prototype]]
- 构造函数通过prototype属性指向原型
- 同一个构造函数创建多个实例，多个实例共享这个构造函数的原型


![20210902100026](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210902100026.png)

## 2. 原型的两个判断方法

- isPrototypeOf(实例) 查看实例的__proto__是不是指向这个原型

    ```javascript
        Person.prototype.isPrototypeOf(person1) // true
    ```

- Object.getPrototypeOf() 返回传入对象的__proto__指向的原型对象

    ```javascript
        Object.getPrototypeOf(person1) == person1.__proto__ == Person.prototype
    ```

    ![20210902102632](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210902102632.png)

## 3. 原型层级

> 在通过对象访问属性时，先在对象实例本身查找，找不到会通过__proto__指针进入到原型对象，通过原型链一级一级往上查找，直到找到返回或到原型链顶端

- 实例属性和原型属性名称一致，实例属性会覆盖原型属性，但是不会更改原型属性,通过delete删除掉实例属性，原型属性还是会通过原型链被找到

    ```javascript
    function Person() {}

    Person.prototype.name = "limei"

    let person1 = new Person

    console.log(person1.name) // limei

    person1.name = "hanmeimei"

    console.log(person1.name) // hanmeimei

    /**
     * {
     * name: hanmeimei
     * __proto__: {
     * name:limei
     * constructor:Person
     * __proto__:Object
     * }
     * }
    */
    console.log(person1) 

    delete person1.name

    console.log(person1.name) // limei

    /**
     * {
     * __proto__: {
     * name:limei
     * constructor:Person
     * __proto__:Object
     * }
     * }
    */
    console.log(person1) 

    
    ```

## 4. 判断属性归属

- hasOwnPropertyOf() 判断属性在实例上还是在原型上

```javascript
person1.hasOwnPropertyOf("name") // 判断name属性是不是在实例person1上
```

## 5. 原型和in操作符

- for-in 循环

  - 循环返回可枚举属性

- in操作符

  - 无论属性在实力上还是原型上都会返回true

    ```javascript
      "name" in person1 

      // 判断某个属性在不在原型上
      function hasPrototypeProperty(object,name) {
          return !object.hasOwnPropertyOf(name) && (name in object)
      }
    ```

## 6. 重写原型

*对象字面量重写*

```javascript
Person.prototype = {
    name: "Nicholas", 
    age: 29, 
    job: "Software Engineer", 
    sayName() { 
    console.log(this.name); 
    } 
};

Person.prototype.constructor == Object
```

相当于把Person.prototype 重新赋值了一个新对象，这样会导致一个问题，就是原本的prototype对象有一个constructor属性指向Perosion，现在指向了Object

*解决办法*

```javascript
// 恢复 constructor 属性
Object.defineProperty(Person.prototype, "constructor", { 
    enumerable: false,  // 不可枚举
    value: Person 
});
```

## 7. 原型的动态性

实例的__proto__ 指针指向原型对象，而不是保存了副本，当原型对象有更改会立即反应到所有实例对象上

```javascript
let friend = new Person(); 
Person.prototype.sayHi = function() { 
 console.log("hi"); 
}; 
friend.sayHi(); // "hi"，没问题！

```

但是重写原型后，实例的__proto__ 指针依旧指向最初的原型，所以不会动态同步


```javascript
function Person() {} 
let friend = new Person(); 
Person.prototype = { 
 constructor: Person, 
 name: "Nicholas", 
 age: 29, 
 job: "Software Engineer", 
 sayName() { 
 console.log(this.name); 
 } 
}; 
friend.sayName(); // 错误

```

![20210902143730](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210902143730.png)


## 8. 原型的问题

1. 弱化构造函数传递参数的能力
2. 所有实例在原型上取得相同的属性值。更改属性值同步所有实例。
