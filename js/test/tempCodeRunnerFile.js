const info = {
  name1:'lili',
  age:11,
  get name(){
    return this.name1
  },
  set name(n){
    this.name1 = n+'8888'
  },
}
info.name = '3333'
console.log(info.name,info.age)