function SuperFun() {
  this.name = 'lining'
  // this.setName = ()=>{
  //   this.name = 'mamma'
  // }
}

// SuperFun.prototype.setName = ()=>{
//   this.name = 'mamma'
// }

function SubFun(){
  SuperFun.call(this) // 盗用构造函数

  this.setName = ()=>{
    this.name = 'mamma'
  }
}
SubFun.prototype = new SuperFun() // 原型模式

const a = new SubFun()

console.log(a.name) // lining
a.setName()
console.log(a.name) // mamma

const b = new SubFun()
console.log(b.name) // mamma