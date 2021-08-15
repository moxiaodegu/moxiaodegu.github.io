/*
 * @Descripttion: 
 * @version: 
 * @Author: mayanli
 * @Date: 2021-01-06 19:30:51
 * @LastEditors: mayanli
 * @LastEditTime: 2021-08-15 22:37:41
 */

class Iterator {
    constructor(arr) {
        this.arr = arr
    }

    [Symbol.iterator]() {
        let count = 0, arr = this.arr;
        return {
            next() {
                return count < arr.length ? { value: arr[count++], done: false } : { value: undefined, done: true }
            }
        }
    }
}


let iterator = new Iterator([1, 2, 3]);

// console.log(iterator[Symbol.iterator]().next())




