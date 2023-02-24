import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class pizzaToppingsComponent implements OnInit {

  //Magic DI... Dependency injection.

  constructor(
    private pizzaSvc: PizzaService
  ) { } 

  ngOnInit(): void {

    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud();
    console.log(pt);

    this.availablePizzaToppings = pt.map(
      x => ({
        ...x
        , checked: false
      })
    );

    console.log(this.availablePizzaToppings);

  }

}
