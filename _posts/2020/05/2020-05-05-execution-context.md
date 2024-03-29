---
title: 执行上下文和作用域
tags: JavaScript
layout: post
---

## 执行上下文

执行上下文可以理解为当前代码的执行环境，它会形成一个作用域。JavaScript中的运行环境大概包括三种情况：

（1）全局环境：JavaScript代码运行起来会首先进入该环境

（2）函数环境：当函数被调用时，会进入当前函数中执行代码

（3）块级环境：当let、const声明变量时

（4）eval（不建议使用，忽略）

只要遇到以上三种情况，都会生成一个执行上下文，放入栈中。

上文提到，JavaScript引擎会以栈的方式处理执行上下文，这个栈被称为调用栈（call stack）。栈是先入后出的方式，所以栈底永远是全局上下文（global context），栈顶是当前正在执行的上下文。栈顶的上下文执行完毕后，会自动出栈。全局上下文在浏览器窗口关闭后出栈。

执行上下文的一些结论：

（1）单线程

（2）同步执行，只有栈顶的上下文处于执行中，其它上下文需要等待

（3）全局上下文只有唯一的一个，在浏览器关闭后出栈

（4）函数的执行上下文没有限制

（5）每次某个函数被调用，就会有个新的执行上下位为其创建，即使是调用自身的函数，也是如此

（6）每个上下文都有一个关联的的变量对象，上下文中定义的变量函数都存在这个变量上，window对象就是全局上下文关联的对象，因此，通过var 定义的变量和函数都会成为window对象的属性和方法，let、const声明的则不会

（7）变量的执行上下文用来确定什么时候释放内存

## 作用域

创建一个执行上下文就会创建一个作用域，执行上下文中的代码在执行的时候，会创建变量对象的作用域链，这个作用域链决定了各级执行上下文访问变量和函数的顺序

1.作用域链是单向的，里边可以访问外边，外边不可以访问里边  
2.当代码执行流进入到每一个上下文，都会创建一条作用域链
