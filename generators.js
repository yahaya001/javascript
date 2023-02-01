// generators are created by generator function function* f(){}
// generators do not execute its body immediately when they are invoked
// generators can pause midway and resumes their executions where their paused
// the yield statement pauses the execution of a generator and returns a value
// generators are iterable so you can use them with the for...loop.

function* generate() {
    console.log('invoked at the yield 1')
    yield 1;
    console.log('invoked at the yield 2')
    yield 2;
    console.log('invoked at the yield 3')
    yield 3;
    console.log('invoked at the yield 4')
    yield 4;
}

let gen = generate()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())