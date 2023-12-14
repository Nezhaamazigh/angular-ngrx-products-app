import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {
  AddProductAction,
  GetAllAvailableProductsAction,
  GetAllProductsAction,
  GetAllSelectedProductsAction,
  SearchProductsAction,
  SearchProductsActionSuccess
} from "../../../ngrx/products.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor(private store:Store<any>,private route:Router) { }

  ngOnInit(): void {
  }

  onGetAvailableProducts() {
    this.route.navigateByUrl("/products")
    this.store.dispatch(new GetAllAvailableProductsAction({}));
  }

  onGetSelectedProducts() {
    this.route.navigateByUrl("/products")
  this.store.dispatch(new GetAllSelectedProductsAction({}))
  }

  onGetAllProducts() {
    this .route.navigateByUrl("/products")
  this.store.dispatch(new GetAllProductsAction({}))
  }



  search(dataForm :any) {
    this .route.navigateByUrl("/Products")
    this.store.dispatch(new SearchProductsAction(dataForm.keyword));
  }

  // onSearchChange(value: any) {
  //   this.store.dispatch(new SearchProductsAction(value.keyword2));
  // }

  save($event: any) {
    this .route.navigateByUrl("/products")
    this.store.dispatch(new SearchProductsAction($event.target.value));
  }

  onNewProduct() {
    this.route.navigateByUrl("/newProduct/")
    this.store.dispatch(new AddProductAction({}));
  }
}
