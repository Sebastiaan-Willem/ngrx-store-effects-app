import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromStore from "../../store";

import { Pizza } from "../../models/pizza.model";

@Component({
  selector: "products",
  styleUrls: ["products.component.scss"],
  template: `
    <div class="products">
      <div class="products__new">
        <a class="btn btn__ok" routerLink="./new"> New Pizza </a>
      </div>
      <div class="products__list">
        <div *ngIf="!(pizzas$ | async)?.length">
          No pizzas, add one to get started.
        </div>
        <pizza-item *ngFor="let pizza of pizzas$ | async" [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  // $ at the end here is used to indicate this contains an observable (convention)
  pizzas$: Observable<Pizza[]>;

  //remove calls to the service and import the store instead - > we get the ProductsState here so we can typecheck anything we access here to make sure it belongs to the ProductsState.
  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
  }
}
