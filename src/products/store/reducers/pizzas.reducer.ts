import * as fromPizzas from "../actions/pizzas.action"; //import all the different actions we've defined under a single variable -> fromPizzas

import { Pizza } from "src/products/models/pizza.model";

//defining our (slice of) Pizza state
export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

//setting the initialState (in this case, the initialState has a collection of pizzas so we can add PizzaState to it to enable type checking)
export const initialState: PizzaState = {
  data: [
    {
      name: "Blazin' Inferno",
      toppings: [
        {
          id: 10,
          name: "pepperoni",
        },
        {
          id: 9,
          name: "pepper",
        },
        {
          id: 3,
          name: "basil",
        },
        {
          id: 4,
          name: "chili",
        },
        {
          id: 7,
          name: "olive",
        },
        {
          id: 2,
          name: "bacon",
        },
      ],
      id: 1,
    },
  ],
  loaded: false,
  loading: false,
};

//reducer function is basically: Original State + Action = New State
//so it'll take a state and action parameter and will merge them into a new state object and return that.
export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction //import all the actions in one go so we can typecheck them (e.g. you can only pass an action into this function if it's defined in this PizzaAction type, otherwise typescript will complain)
): PizzaState {
  //Switchcase over the action types
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        //return a brand new object that consists of the merging of the previous states (...state), but with the loading property now set to true
        ...state,
        loading: true,
      };
    }
    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }
    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

//Export levels of state
export const getPizzasLoading = (state: PizzaState) => state.loading; //return the loading, loaded and data properties from the PizzaState
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;
