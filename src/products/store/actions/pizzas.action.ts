import { Action } from "@ngrx/store"; // Actions have types (and optional payloads)

import { Pizza } from "src/products/models/pizza.model";

/*LOAD PIZZAS*/
//ACTION CONSTANTS
export const LOAD_PIZZAS = "[Products] Load Pizzas"; //add namespace between [] to avoid confusion for bigger apps
export const LOAD_PIZZAS_FAIL = "[Products] Load Pizzas Fail";
export const LOAD_PIZZAS_SUCCESS = "[Products] Load Pizzas Success";

//ACTION CREATORS
export class LoadPizzas implements Action {
  //implement the Action Interface for typechecking purposes
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {} //in the case of failure (and thus an error), we can pass a message (the error) as the payload property
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {} //in the case of success, the payload will be what we actually tried to request, which in this case is an array of Pizzas
}

//ACTION TYPES
//this will allow us to effectively bundle and access all our different actions with one keyword (see pizzas.reducer.ts where we pass this into the reducer function as the action parameter)
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
