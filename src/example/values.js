// 值

import {scan, throttleTime, map} from "rxjs/operators";
import {fromEvent} from "rxjs";

const button = document.querySelector('button')

fromEvent(button, 'click').pipe(
  throttleTime(1000),
  map(event => event.clientX),
  scan((count, clientX) => count + clientX, 0)
).subscribe((count) => console.log(`Click ${count}`))