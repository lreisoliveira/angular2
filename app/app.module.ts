import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppMeuPrimeirocomponente, AppMeuSegundocomponente, AppMeuTerceirocomponente }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppMeuPrimeirocomponente, AppMeuSegundocomponente, AppMeuTerceirocomponente ],
  bootstrap:    [ AppMeuPrimeirocomponente, AppMeuSegundocomponente, AppMeuTerceirocomponente ]
})
export class AppMeuModule { }


