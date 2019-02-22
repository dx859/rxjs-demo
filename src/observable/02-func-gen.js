/*
Observables 作为函数的泛化
 */

/*
function foo() {
  console.log('Hello');
  return 42;
}

var x = foo.call(); // 等同于 foo()
console.log(x);
var y = foo.call(); // 等同于 foo()
console.log(y);

"Hello"
42
"Hello"
42
 */

import {Observable} from "rxjs";

const foo = new Observable(subscriber => {
  subscriber.next(42)
  console.log('Hello')
})

foo.subscribe(x=>{
  console.log(x);
})

foo.subscribe(y=>{
  console.log(y)
})