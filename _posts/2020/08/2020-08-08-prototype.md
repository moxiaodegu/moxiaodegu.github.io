---
title: 原型模式
tags: JavaScript
layout: post
---

每个构造函数都有一个prototype属性对象，也就是通过new 构造函数 创建的对象的原型，这个对象的优点是上面定义的属性和方法可以被对象实例共享

## 原型模式
![20210831195146](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210831195146.png)

```javascript
function Person() {}
Person.prototype.age = 20
Person.prototype.name = "liMei"

let person1 = new Person

console.log(person1.age) // 20
```

## Object.create()

Object.create() 如果不传第二个参数的话类似于原型模式,从下面的图可以看出，在person1的[[prototype]],也就是__proto__中，除了没有constructor之外，其他都是和原型模式是一样的

![20210831200353](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210831200353.png)