import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

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

  availablePizzaToppings: PizzaToppingDisplay[] = [];
  ngOnInit(): void {

    const pt = this.pizzSvc.getPizzaToppingsFromTheCloud();
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
