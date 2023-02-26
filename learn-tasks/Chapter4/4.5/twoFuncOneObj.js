// Возможно ли создать функции A и B, чтобы new A() == new B()?

// Ответ да
function A() {}
function B() {}

let a = new A();
let b = new B();

alert(a == b); // true