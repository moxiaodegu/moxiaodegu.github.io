/*
 * @Descripttion: 
 * @version: 
 * @Author: mayanli
 * @Date: 2021-01-06 19:30:51
 * @LastEditors: mayanli
 * @LastEditTime: 2021-01-07 17:24:51
 */


for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    })(i)
}