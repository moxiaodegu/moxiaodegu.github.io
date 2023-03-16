function instanceofFun(left,right) {
  if ( left == null || ( typeof left !== 'function'  && typeof left !== 'object')) {
    return false
  }
  let a = left.__proto__
  const b = right.prototype
  while(true) {
    if (a === b) return true
    if (a === null) return false
    a = a.__proto__
  }
}
console.log(instanceofFun([],Array))