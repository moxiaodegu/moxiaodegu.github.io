---
title: 判断数据类型的几种方法
tags: JavaScript
layout: post
---

**typeof**

适用于判断基本数据类型

- 对于基本类型，除 null 以外，均可以返回正确的结果。
- 对于引用类型，除 function 以外，一律返回 object 类型。
- 对于 null ，返回 object 类型。
- 对于 function 返回  function 类型

```javascript
    const str = "str"
    typeof str // "string"
```

**instanceof**

通过原型链判断A是否为B的实例，表达式为：A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false。

- 能准确判断引用数据类型，不能判断基本数据类型
- 它的内部机制是通过判断A的原型链上是否有B的原型
- null instanceof Object // false
  
```javascript
    const str = "str"
    str instanceof String // false
    const str1 = new String("str")
    str1 instanceof String // true
```

**如何实现一个instanceof**

```javascript
  function instanceofFun(left,right) {
    // 基础类型都返回false
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
```

**constructor**

当一个函数 F被定义时，JS引擎会为F添加 prototype 原型，然后再在 prototype上添加一个 constructor 属性，并让其指向 F 的引用。

判断实例的指向原型的constructor的值是否是某个构造函数

- constructor 是原型prototype的一个属性。
- null undefined 没有constructor属性，所以不能判断
- constructor 容易被改写
  
```javascript
    const str = "str"
    str.constructor === String // true
```

**toString**

toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。
  
```javascript
    Object.prototype.toString.call("123") // "[object String]"
```

**isPrototypeOf**

等同于instanceof

原型方法，只适用于引用类型，判断当前实例的__proto__是否指向原型链上的原型，

```javascript
    const a = new String('aa')
    String.prototype.isPrototypeof(a)
```

**其他方法**

- Array.isArray() 判断是否是一个数组（不管在哪个全局作用域下都能判断）
