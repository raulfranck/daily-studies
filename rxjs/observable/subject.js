import { Subject, from } from 'rxjs'

const sub = new Subject();

const sub1 = sub.subscribe({
  next: num => console.log('subject 1: ', num),
  error: error => console.log(error),
  complete: () => console.log('complete')
})

const sub2 = sub.subscribe({
  next: num => console.log('subject 2: ', num),
  error: error => console.log(error),
  complete: () => console.log('complete')
})

sub.next(1)
sub.next(2)

/* console.log(sub1)
console.log(sub2) */