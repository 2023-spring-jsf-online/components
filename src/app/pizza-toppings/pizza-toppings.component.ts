import { Component } from '@angular/core';
import {PizzaService } from '../Pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent {

  //Magic DI... Dependency injection.

  constructor(
    private pizzaSvc: PizzaService
  ) { } 

  ngOnInit(): void {

    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud();
    console.log(pt);

  }

}
