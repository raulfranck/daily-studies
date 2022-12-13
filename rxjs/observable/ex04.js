import { Observable } from 'rxjs'

const obs$ = new Observable(subs => {
    subs.next('Adicionado string')
}).pipe(
    share()
)

obs$.subscribe(value => console.log(value))