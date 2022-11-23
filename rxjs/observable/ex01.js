import { interval } from 'rxjs'

const intervalo$ = interval(100)

const subscription1 = intervalo$.subscribe(num => console.log(num))

const subscription2 = intervalo$.subscribe(num => console.log(num * 100))

setTimeout(() => {
    subscription1.unsubscribe()
    subscription2.unsubscribe()
}, 600)
