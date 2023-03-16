
function instanceofFun(left,right) {
  const a = left.__proto__
  const b = right.prototype
  if (a === b) return true
  if (a === null) return false
  instanceofFun(a,right)
}

const aa = instanceofFun('',Object)