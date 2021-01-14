---

title: JavaScript从编译到执行
tags: JavaScript
layout: post

---

JavaScript从编译到执行分为四个步骤
```
词法分析 
语法分析
预编译
解释执行
```
词法分析、语法分析、解释执行是有引擎控制的，预编译由编译器控制。

# 词法分析
词法分析就是将我们写的代码块分解成词法单元。
在《你不知道的js》中是这样描述的：将由字符组成的字符串分解成（对编程语言来说）有意义的代码块，这些代码块被称为词法单元（token）。例如，考虑程序var a = 2;。这段程序通常会被分解成为下面这些词法单元：var、a、=、2 、;。空格是否会被当作词法单元，取决于空格在这门语言中是否具有意义。

# 语法分析
语法分析是将词法单元流（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。这个树被称为“抽象语法树”（Abstract Syntax Tree,AST）。
并检查你的代码有没有什么低级的语法错误，如果有，引擎会停止执行并抛出异常。
# 预编译
## 预编译是在什么时候发生的
大家都知道JavaScript是解释型语言，既然是解释型语言，就是编译一行，执行一行，那预编译是在什么时候发生的呢？一般情况下是在script内代码块（如一个js文件）执行前和函数执行前。

## 实例分析
我们可以来看一个例子：
```javascript
    var a = 1;
    console.log(a);
    function test(a) {
        console.log(a);
        var a = 123;
        console.log(a);
        function a() {}
        console.log(a);
        console.log(b);
        var b = function() {}
        console.log(b);

        function d() {}
    }
    test(2);
```

# 解释执行