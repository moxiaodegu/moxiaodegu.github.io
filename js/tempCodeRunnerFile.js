const a = 1
function foo() {
  console.log(this.a)
}
const obj = {
  a:2,
  foo
}

foo() // 1

obj.foo() // 2