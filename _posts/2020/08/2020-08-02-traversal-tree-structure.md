---
title: js遍历树形结构并合并相同节点
tags: 数据结构和算法
layout: post
---

今天看到一道题，如下图，左边的树形结构合相同节点成右边的树形结构。

![WechatIMG72695.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/80adb16cf807417a830df4ebe29cf10e~tplv-k3u1fbpfcp-watermark.image?)

我看了下可以用递归解决。代码如下：

```js
interface ITreeIterator {
  name: string;
  children: any[]
}

const arr = [
  {
    name: '1',
    children: [
      {
        name: '1.1',
        children: [
          { name: '1.1.1', children: [] },
          { name: '1.1.1', children: [] },
        ]
      },
      { name: '1.1', children: [] },
    ]
  },
  {
    name: '1',
    children: [
      { name: '1.3', children: [] },
      { name: '1.2', children: [] },
      { name: '1.2', children: [] },
    ]
  },
  {
    name: '2',
    children: [
      {
        name: '2.1',
        children: [
          { name: '2.1.1', children: [] },
          { name: '2.1.1', children: [] },
        ]
      },
      { name: '2.2', children: [] },
      { name: '2.2', children: [] },
    ]
  }
]

function treeIterator(tree: ITreeIterator[]) {
  const arr: ITreeIterator[] = [];
  if (!Array.isArray(tree) || !tree.length) return arr;
  tree.forEach((e: ITreeIterator) => {
    const index = arr.findIndex(i => i.name == e.name)
    if (index > -1) {
      arr[index].children = treeIterator([...arr[index].children, ...e.children])
    } else {
      arr.push({ ...e, children: treeIterator(e.children) })
    }
  });

  return arr;
}

const s = treeIterator(arr)
console.log(JSON.stringify(s))



```