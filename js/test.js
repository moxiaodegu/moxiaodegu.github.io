function foo(name) {
    let obj = {};
    Object.setPrototypeOf(obj,foo.prototype)
    
    return obj;
}

foo.prototype.say = function() {
    console.log('22')
}

let obj = foo(2)
console.log(obj)