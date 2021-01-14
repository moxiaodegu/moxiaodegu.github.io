/*
 * @Descripttion: 
 * @version: 
 * @Author: mayanli
 * @Date: 2021-01-06 19:30:51
 * @LastEditors: mayanli
 * @LastEditTime: 2021-01-14 11:23:21
 */


var a = 1;
console.log(a);
function test(a) {
  console.log(a);
  var a = 123;
  console.log(a);
  function a() { }
  console.log(a);
  console.log(b);
  var b = function () { }
  console.log(b);
}
test(2);