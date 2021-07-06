---
title: 判断数据类型的几种方法
tags: 工具
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
- 它的内部机制是通过判断对象的原型链中能否找到类型的prototype
- null instanceof Object // false
  
```javascript
    const str = "str"
    str instanceof String // false
    const str1 = new String("str")
    str1 instanceof String // true
```

**constructor**

当一个函数 F被定义时，JS引擎会为F添加 prototype 原型，然后再在 prototype上添加一个 constructor 属性，并让其指向 F 的引用。

- constructor 是原型prototype的一个属性。
- null undefined 没有constructor属性，所以不能判断
- 函数的 constructor 是不稳定的，这个主要体现在自定义对象上，当开发者重写 prototype 后，原有的 constructor 引用会丢失，constructor 会默认为 Object
  
```javascript
    const str = "str"
    str.constructor === String // true

```

**toString**

toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。

- 对于 Object 对象，直接调用 toString()  就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。
  
```javascript
    Object.prototype.toString.call("123") // "[object String]"
    Object.prototype.toString({}) // "[object Object]"
```

**Arrray.isArray()**

判断是否是一个数组（不管在哪个全局作用域下都能判断）
