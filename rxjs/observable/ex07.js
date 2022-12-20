import { ReplaySubject, Observable } from 'rxjs';

const sub = new ReplaySubject(2) // Recebe a quantidade de valor que sera passado para os subscritos, no caso: 4
sub.next(11)
sub.next(12)
sub.next(13)
sub.next(14)
sub.next(15)
sub.next(16)
sub.next(17)

/* Podemos usar o replay para limitar um tempo de consulta no buffer, para fazer algum cache ou algo do tipo */

sub.subscribe(console.log)

sub.next(18)
sub.next(19)


setInterval(() => {
  sub.subscribe(console.log)
}, 100)

/* Output:
  14
  15
  16
  17
*/