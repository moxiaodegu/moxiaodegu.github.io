---
title: 单例内置对象
tags: 工具
layout: post
---

## Global

global对象是js中比较特殊的对象，不能直接被访问到。全局作用域中通过 var 创建的变量和函数都会成为global的属性。

1. 全局执行上下文绑定的对象就是global对象
2. isNaN()、parseInt()、parseFloat() 等对象都是global的属性
3. eval()方法是一个完整的js解释器
4. undefined、NaN、Infinty等都是global对象的属性
5. 所有原生引用类型构造函数 如：Object 和 Function ，都是Global对象的属性
6. 虽然es没有规定直接访问global对象，但浏览器降window对象实现为global对象的代理。因此 在全局作用域下的变量和函数，都变成了window对象的属性。 <Strong>window对象不止实现了global对象，还实现了浏览器窗口js的接口</Strong>
7. 当一个函数没有明确指定this值的情况下执行，this值等于global对象，因此调用一个简单返回this的函数是在任何执行上下文中获取global对象的通用方法

## Math

Math是保存计算公式、信息和计算的地方。
Math对象上提供方法比在js实现要快的多，因为Math使用了js中更高的实现和处理器指令。

![20210705155530](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210705155530.png)