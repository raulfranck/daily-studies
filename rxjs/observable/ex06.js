import { BehaviorSubject, Observable } from 'rxjs';
/* Mantem um estado onde recebe sempre o ultimo valor */

const sub = new BehaviorSubject(0)
sub.next(2)

sub.subscribe(console.log)

sub.next(10)
sub.next(11)

sub.subscribe(console.log)