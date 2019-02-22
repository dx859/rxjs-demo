/*
      生产者	                        消费者
拉取	  被动的: 当被请求时产生数据。	  主动的: 决定何时请求数据。
推送	  主动的: 按自己的节奏产生数据。	被动的: 对收到的数据做出反应。

	    单个值	    多个值
拉取	  Function	Iterator
推送	  Promise	  Observable

Function 是惰性的评估运算，调用时会同步地返回一个单一值。
Generator 是惰性的评估运算，调用时会同步地返回零到(有可能的)无限多个值。
Promise 是最终可能(或可能不)返回单个值的运算。
Observable 是惰性的评估运算，它可以从它被调用的时刻起同步或异步地返回零到(有可能的)无限多个值。
 */

import {Observable} from "rxjs";
// 示例 - 当订阅下面代码中的 Observable 的时候会立即(同步地)推送值1、2、3，然后1秒后会推送值4，再然后是完成流：
// Observables 传递值可以是同步的，也可以是异步的。
const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
  }, 1000)
})

// 要调用 Observable 并看到这些值，我们需要订阅 Observable：
console.log('just before subscribe');
observable.subscribe({
  next(x) {
    console.log('got value ' + x);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  }
})
console.log('just after subscribe');