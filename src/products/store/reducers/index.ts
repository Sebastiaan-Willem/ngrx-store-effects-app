import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store"; //used to typecheck
import * as fromPizzas from "./pizzas.reducer";

//statetree???
//create an interface that uses another interface one layer deeper. ProductState interface HAS a slice of state called pizzas, which we fill in with the PizzaState from our pizzas.reducer.ts file
export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

//register our reducers, assign a reducer to a specific slice of state
//we can use the ActionReducerMap to typecheck the properties by passing a type, in this case ProductState. -> ProductState HAS a pizzas property so now this reducer MUST also have one.
export const reducers: ActionReducerMap<ProductsState> = {
  //pizzas = slice of state here -> is managed by a specific reducer
  pizzas: fromPizzas.reducer,
};

//this is a constant that holds a selector (aka it'll GET data from the store) for our entire lazy loaded module
export const getProductsState =
  createFeatureSelector<ProductsState>("products"); //products here as defined in our products.module.ts

//pizza state
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

//pizza selectors
export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
);
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading
);
