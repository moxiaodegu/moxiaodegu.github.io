function object(o) {
  function F() {}
  F.prototype = o
  F.prototype.constructor = F
  return new F()
}

function jsheng(superFun, sonFun) {
  const prototype = object(superFun.prototype)
  prototype.constructor = sonFun
  sonFun.prototype = prototype
}

function Super(name) {
  this.name = '11'
  this.city = ['beijing', name]
}

Super.prototype.sayHi = () => {
  console.log('super')
}

function Son(name) {
  Super.call(this, name)
  this.age = '12'
}

jsheng(Super, Son)

const shile = new Son('shanghai')

console.log(shile.sayHi())

