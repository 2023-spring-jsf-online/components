import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromTheCloud() {
    // Pretend we make a web service call here
    const toppingsFromWebService = [
      {
        name: 'Olives',
        prices: 2.25
      }, {
        name: 'Pepperoni',
        prices: 1.50
      }, {
        name: 'Sausage',
        prices: 1.75
      },
    ];

    return toppingsFromWebService;
  }
}
