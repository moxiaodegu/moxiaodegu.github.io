/*
 * @Descripttion: 
 * @version: 
 * @Author: mayanli
 * @Date: 2021-01-06 19:30:51
 * @LastEditors: mayanli
 * @LastEditTime: 2021-03-04 10:04:28
 */

const column = [
      {
        show: 'template',
        prop: '1',
        children: [
          {
            show: 'template',
            prop: '2',
            children: []
          },
          {
            show: '判断值',
            prop: '123',
            children: []
          }
        ]
      },
      {
        prop: '123',
        children: [
          {
            show: '判断值',
            prop: '123',
            children: []
          }
        ]
      },
      {
        show: '判断值',
        prop: '123',
        children: [
          {
            show: '判断值',
            prop: '123',
            children: [
              {
                show: '判断值',
                prop: '123',
                children: [
                  {
                    show: 'template',
                    prop: '3',
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
var recursiveFunction = function(){
    const arr = [];
    const recursion = function(list) {
        if (!list.length) {
            return []
        }
        list.forEach(e => {
            if (e.show === "template") {
                arr.push(e)
            }
            if (Array.isArray(e.children)) {
                recursion(e.children)
            }
        });
        console.log(arr)
        return arr
    }
    return recursion(column);
}

recursiveFunction()