import { AsyncSubject } from 'rxjs'

/* AsyncSubject so recebe o ultimo valor emitido, e isso depois que for completado() */

const sub = new AsyncSubject()

sub.next(1)
sub.next(2)

sub.subscribe(console.log) // output vazio

sub.complete()

sub.subscribe(console.log) /* output: 2, 2: quando completado, retorna os dois valors do buffer para os dois subscribes*/