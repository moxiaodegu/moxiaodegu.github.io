---
title: 工厂模式
tags: JavaScript
layout: post
---

工厂模式用于抽象创建特定对象

```javascript
function createObject(name,age) {
    let o = new Object()
    o.name =name
    o.age = age
    return o
}

const obj = createObject("limei",20)
```
