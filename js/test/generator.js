

function *generator() {
  yield '1111'
}

const gen = generator()
console.log(gen.next().value)
