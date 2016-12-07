import { Component } from '@angular/core';

@Component({
  selector: 'my-primeiroApp',
  template: '<h1>Chamei {{name}} {{sobrenome}} com {{variavel}}</h1>',
})
export class AppMeuPrimeirocomponente  {
  name      = 'Leandro';
  sobrenome = 'Rails';
  variavel = ' meu primeiro componente';
}

@Component({
  selector: 'my-segundoApp',
  template: '<h2>{{variavel}} </h2>',
})
export class AppMeuSegundocomponente  {
  variavel = 'Aqui chamei também meu segundo componente no mesmo template';
}

@Component({
  selector: 'my-terceiroApp',
  template: '<h2>{{variavel}} </h2>',
})
export class AppMeuTerceirocomponente  {
  variavel = 'Aqui chamei também meu terceiro (que não é o André) componente';
}
