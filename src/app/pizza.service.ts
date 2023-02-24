import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingFromTheCloud() {
    // pretend we make a web service call here.
    const toppingsFromWebService = [
      {
        name: 'Olives'
        , price: 2.25
      }
      , {
        name: 'Sauage'
        , price: 1.75
      }
      , {
        name: 'pineapple'
        , price: 1.50
      }
    ];

    return toppingsFromWebService;
    
  }
}
