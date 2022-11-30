import { Observable } from "rxjs";

const obs$ = new Observable(subs => {
    subs.next('RxJS')
    subs.next('teste')
    subs.next('teste1')
    subs.next('teste2')

    if(Math.random() > 0.5) {
        throw "Chamando erro"
    } else {
        subs.complete()
    }
    
})

obs$.subscribe(
    text => console.log(text),
    err => console.log(err),
    () => console.log('fim')
)