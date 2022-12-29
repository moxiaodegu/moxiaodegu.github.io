const obj = {
  name:'lllllllll'
}

const handler = {
  get(){
    return 'mmmmm'
  }
}

const proxy = new Proxy(obj,handler)

console.log(proxy.name)

console.log(obj.name)