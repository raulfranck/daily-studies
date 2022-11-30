import { Observable }  from 'rxjs'

/* Promisses armazenam apenas 1 dado */
/* Promisses possuem execussão IMEDIATA (Eager) */
const promise = new Promise(resolve => {
    /* Passando apenas um dado */

    console.log('iniciando Promise')
    setTimeout(() => resolve(10), 3000)
    /* resolve(2) */
})

/* Observables armazenam muitiplos dados */
/* Promisses possuem execussão SOB-DEMANDA (Lazy) */
const obs$ = new Observable((observer) => {
    console.log('iniciando Observable')
    observer.next(3)
    /* observer.next(3)
    observer.next(3) */
})

promise.then(num => console.log('Promise', num))
obs$.subscribe(num => console.log('Observable', num))

setTimeout(() => {
    obs$.subscribe(num => console.log('Observable', num))
    promise.then(num => console.log('Promise', num))
}, 2000)