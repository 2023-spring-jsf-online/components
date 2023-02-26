import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { Pizza1ToppingsComponent } from './pizza1-toppings/pizza1-toppings.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    Pizza1ToppingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
