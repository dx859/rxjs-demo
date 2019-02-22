// 流动性

import {fromEvent} from "rxjs";
import {scan, throttleTime} from "rxjs/operators";

const button = document.querySelector('button')

fromEvent(button, 'click').pipe(
  throttleTime(1000),
  scan(count => count + 1, 0)
).subscribe((count) => console.log(`Click ${count}`))