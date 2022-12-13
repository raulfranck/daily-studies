import {Observable} from "rxjs";

const observer = new Observable(observer => {
  console.log('iniciando o observable');

  let i = 1;
  const interval = setInterval(() => observer.next(i++), 1000);
  setTimeout(() => observer.error(new Error('error disparado')), 5000);

  return () => clearInterval(interval)
})

const subscription = observer.subscribe(
  {
    next: (num) => console.log('Observeble', num),
    error: (err) => console.log(err),
    complete: () => console.log('Complete')
  }
)

const subscription2 = observer.subscribe(
  {
    next: (num) => console.log('Observeble', num),
    error: (err) => console.log(err),
    complete: () => console.log('Complete')
  }
)

subscription.add(subscription2);
subscription.remove(subscription2)

setTimeout(() => {
  subscription.unsubscribe()
}, 3000)