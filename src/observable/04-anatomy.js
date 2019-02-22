/*
1.创建 Observables
Observables 可以使用 new Observable 来创建, 但通常我们使用所谓的创建操作符, 像 of、from、interval、等等。
 */

import {Observable, from} from "rxjs";
//
// const observable = new Observable(subscriber => {
//   const id= setInterval(()=>{
//     subscriber.next('hi')
//   }, 1000)
// })

/*
2.订阅 Observable
订阅 Observable 像是调用函数, 并提供接收数据的回调函数。
 */

// observable.subscribe(x=>console.log(x))

/*
3.执行 Observables
"Next"      通知： 发送一个值，比如数字、字符串、对象，等等。
"Error"     通知： 发送一个 JavaScript 错误 或 异常。
"Complete"  通知： 不再发送任何值。
 */

// const observable = new Observable(subscriber => {
//   try {
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.next(3);
//     subscriber.complete();
//     subscriber.next(4); // 无效
//   }catch (e) {
//     subscriber.error(e) // 错误处理
//   }
// })
//
// observable.subscribe(x=>console.log(x))

/*
4. 清理 Observable 执行
当你订阅了 Observable，你会得到一个 Subscription ，它表示进行中的执行。只要调用 unsubscribe() 方法就可以取消执行。
 */

// const observable = from([10,20,30]);
// const subscription = observable.subscribe(x=>console.log(x))
// subscription.unsubscribe();
const observable = new Observable(subscriber => {
  const timerId = setInterval(()=>{
    subscriber.next('hi');
  }, 1000);

  return function unsubscribe() {
    clearInterval(timerId)
  }
})
const unsubscribe = observable.subscribe({next: (x) => console.log(x)});
unsubscribe.unsubscribe();