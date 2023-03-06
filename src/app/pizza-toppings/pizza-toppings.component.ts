import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  // Magic DI or dependency Inhjection
  constructor(
    private pizzSvc: PizzaService
  ) {}

  ngOnInit(): void {

    const pt = this.pizzSvc.getPizzaToppingsFromTheCloud();
    console.log(pt);
    
  }
}
