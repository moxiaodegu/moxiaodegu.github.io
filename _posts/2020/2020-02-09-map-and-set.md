---
title: Map & Set
tags: 工具
layout: post
---

# Map

- Map是新的集合类型，给js带来了真正的键值存储机智
- Map的键的值改变，依然可找到值，它俩内部的引用是无法修改的

    ![20210721203618](https://cdn.jsdelivr.net/gh/moxiaodegu/ImageHosting/imagesBlogs/20210721203618.png)

## 创建Map

```javascript
let map = new Map(IteratorObject) // 可传入可迭代对象
```

## Map有哪些属性

1.size  
2.constructor

## Map方法

1. clear() 移除所有键值对
2. delete(key) 存在并删除成功 返回true，不存在 false
3. entries() 返回新的Iterator对象
4. get(key) 返回键值对的值，没有则返回undefined
5. has(key) 返回布尔值，判断是否有这个键对应的值
6. keys() 返回Iterator对象,包含Map对象每个元素的键
7. set(key, val) 设置Map对象值，返回Map对象
8. values() 返回Iterator对象,包含Map对象每个元素的值

## 迭代

- forEach
- for...of

## Map与数组的关系

使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象

```javascript
let kvArray = [["key1", "value1"], ["key2", "value2"]];

let myMap = new Map(kvArray);

myMap.get("key1"); // 返回值为 "value1"

```

## 复制或合并 Maps

> 重要：请记住，数据本身未被克隆。
> 合并两个Map对象时，如果有重复的键值，则后面的会覆盖前面的。
> 展开运算符本质上是将Map对象转换成数组。

```javascript
let original = new Map([
  [1, 'one']
]);

let clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false. 浅比较 不为同一个对象的引用

// 合并
let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// 合并两个Map对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开运算符本质上是将Map对象转换成数组。
let merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three

```

## Map VS Object

Map的大部分功能都可用Object替代，但是二者有细微差别

1. Map可用任何数据类型作为键，而Object 只能用数值和字符串或是Symbol
2. Map会维护键值对的插入顺序（有序），而object不会（无序）
3. Map默认没有任何键，object原型链上有
4. Map比Object更少的占用内存
5. Map比Object插入性能更好
6. 查找速度几乎一样，object可能更好一些
7. Map比Object删除性能更好
8. Map可通过size获取长度，object不行

# Set