import {Observable} from "rxjs";


const observable = new Observable(subscriber => {
  let id = setInterval(() => {
    subscriber.next('hi')
  }, 1000)
})

observable.subscribe(x => console.log(x))