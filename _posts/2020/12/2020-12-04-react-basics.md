---
title: React入门基础概念
tags: React
layout: post
---


**jsx**
>react没有采用逻辑和标记语言分离到不同文件，而是采用二者共同存放在组件中

- jsx是html和javaScript的結合，是JavaScript的语法扩展

- 大括号内可以放置任意有效的js代码 ```<h1>{name}</h1>```

- 建议使用括号包裹jsx代码，避免遇到自动插入分号陷阱

- 编译后，jsx表达式会被解析成普通的JavaScript函数调用，并对其取值得到对象。也就是说jsx可以作为参数、值等
    - babel 会把jsx转义为React.createElement()函数调用
    下面两种完全等效
    ```javaScript
    const element = (
        <div>
            <h1>我是一个jsx</h1>
        </div>
    )
    等价于
    const h1 = React.createElement('h1',{text:'我是一个jsx'})
    const element = React.createElement(
        'div',null,h1
    )
    ```

- {}字面量内可以通过大括号传递字面量或属性值或JavaScript表达式

- react dom 使用小驼峰命名

- jsx中使用 `{}` 包裹代码,可嵌入js表达式

- <strong>jsx防止xss攻击</strong>，react dom 在渲染输入内容时，会自动做转义
 
**元素渲染**
>dom标签和自定义组件都是react元素

- 将一个元素渲染成dom元素
在index页面里，```<div id="root"></div>```是react的根dom节点，根dom节点里的所有内容由react dom 管理，如果想react元素渲染到根dom节点可通过ReactDOM.render()
```javascript
const element = <h1>hello,world</h1>
ReactDOM.render(element,document.getElementById('root'))
```

- 更新已渲染的元素
react元素是不可变对象，一旦创建就无法更改。更新ui的唯一方式就是重新创建一个元素，并传入ReactDOM.render()

- react 只更新需要更新的部分
react会将元素和上次的元素进行对比，只会进行必要的更新

**组件&props**
> 注意：
> 1. <strong>组件名首字母必须大写，</strong>react会将首字母小写的组件名当成dom标签处理 
> 2. 组件内的props不可修改

 - 函数组件
    ```javascript
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }
    ```
 - class组件
    ```javascript
    class Welcome extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }
    ```
**state&生命周期**

> state是私有的，并完全受控于当前组件

```javascript
this.setState({
    value: 2
})
```
- 直接修改state不会重新渲染页面，需要通过**setState**修改
- state更新可能是异步的，react处于性能的考虑，可能会将多个setState合并为一个。解决办法是setState接收一个函数，而不是一个对象

    ```javascript
    this.setState((state,props)=>{
        value: state.value
    })
    ```
- state的更新会被合并



**事件处理**
```
<button onClick={activateLasers}>
    Activate Lasers
</button>
```
- react 不能通过```return false```阻止默认事件，需要通过```e.preventDefault() ```阻止

- jsx中回调函数的`this`


**条件渲染**

 - 可通过条件判断返回对应的jsx代码

 - 阻止组件渲染，可以让render方法返回null

 **别表 & key**
```javascript
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
- key帮助react识别哪些元素变了，key只有放到就近的上下文中才有意义

- key只在兄弟节点必须唯一

- key的值只会传给react，不会传给组件，下面的例子，props.id可以读到，props.key读不到

- jsx中，{} 可以嵌入js代码，所以也可以在jsx中内联map返回列表


**表单**

- 受控组件
    > state成为组件唯一数据源，并控制用户输入表单发生的操作，为受控组件
- 非受控组件
    > 不受state控制


**状态提升**

 - 两个组件共享数据，把共享状态提升到父级组件去。