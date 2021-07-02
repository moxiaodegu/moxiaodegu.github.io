---
title: 基本类型和引用类型有哪些不同
tags: 工具
layout: post
---


## 基本数据类型

基本数据类型的值又叫原始值

1. 原始值是简单的数据
2. 原始值是按值访问的
3. 原始值不可改变

    任何方法都不可以改变原始值，如：

    ```javascript
        let str = "str";
        str.repeat(3);
        console.log(str) // str
    ```

    str并没有改变，而是返回了一个新的字符串。
4. 原始值不可以被添加属性和方法，尽管添加之后不会报错

    ```javascript
        let name = "name"
        name.age = 15
        name.fuc = function() {

        }
        console.log(name) // name
    ```

5. 原始值保存在栈内存中，
6. 原始值复制是值得复制，不存在深浅拷贝问题

   ![20210702131512](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210702131512.png)
7. 函数传参原始值和原始值变量复制一致

## 引用数据类型

1. 引用值是有多个值构成的对象
2. 引用值是按照引用访问的（js不允许直接访问内存）
3. 引用值保存在堆内存中，在栈内存存放一个指针指向堆内存存储值
4. 引用值复制只复制在栈内存的指针，指向存储在堆内存的对象。复制完成后，实际上是指向同一个对象，存在深浅拷贝问题。
   ![20210702131432](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210702131432.png)
5. 函数传参和引用值变量复制一致
