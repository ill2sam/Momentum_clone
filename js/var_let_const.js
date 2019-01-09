/*// 이미 만들어진 변수이름으로 재선언했는데 아무런 문제가 발생하지 않는다.
var a = 'test'
var a = 'test2'

// hoisting으로 인해 ReferenceError에러가 안난다.
c = 'test'
var c

a
console.log(c)*/

// let
let a = 'test'
//let a = 'test2' // Uncaught SyntaxError: Identifier 'a' has already been declared
a = 'test3'     // 가능


// const
const b = 'test'
//const b = 'test2' // Uncaught SyntaxError: Identifier 'a' has already been declared
//b = 'test3'    // Uncaught TypeError:Assignment to constant variable.

console.log(a);