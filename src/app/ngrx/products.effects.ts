import {Injectable} from "@angular/core";
import {ProductService} from "../services/product.service";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
    AddProductActionError,
    AddProductActionSuccess,
    DeleteProductActionError,
    DeleteProductActionSuccess,
    EditProductActionError, EditProductActionSuccess,
    GetAllAvailableProductsActionError,
    GetAllAvailableProductsActionSuccess,
    GetAllProductsActionError,
    GetAllProductsActionSuccess,
    GetAllSelectedProductsActionError,
    GetAllSelectedProductsActionSuccess, GetProductActionError, GetProductActionSuccess,
    ProductActionTypes,
    ProductsActions,
    SaveProductActionError,
    SaveProductActionSuccess,
    SearchProductsActionError,
    SearchProductsActionSuccess,
    SelectProductActionError,
    SelectProductActionSuccess
} from "./products.actions";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class ProductsEffects{
  constructor(private productService:ProductService,private effectsActions: Actions) {
  }

  getAllProductsEffects:Observable<ProductsActions>=createEffect(()=>this.effectsActions.pipe(
    ofType(ProductActionTypes.GET_ALL_PRODUCTS),
    mergeMap((action:ProductsActions)=>{
      return this.productService.getProducts().pipe(
        map((products)=>new GetAllProductsActionSuccess(products)),
        catchError((err)=>of(new GetAllProductsActionError(err)))
      )})
  )
  )
  getAllSelectedProductsEffects:Observable<ProductsActions>=createEffect(()=>this.effectsActions.pipe(
    ofType(ProductActionTypes.GET_ALL_SELECTED_PRODUCTS),
    mergeMap((action:ProductsActions)=>{
      return this.productService.getSelectedProducts().pipe(
        map((products)=>new GetAllSelectedProductsActionSuccess(products)),
        catchError((err)=>of(new GetAllSelectedProductsActionError(err)))
      )})
  )
  )
  getAllAvailableProductsEffects:Observable<ProductsActions>=createEffect(()=>this.effectsActions.pipe(
    ofType(ProductActionTypes.GET_ALL_AVAILABLE_PRODUCTS),
    mergeMap((action:ProductsActions)=>{
      return this.productService.getAvailableProducts().pipe(
        map((products)=>new GetAllAvailableProductsActionSuccess(products)),
        catchError((err)=>of(new GetAllAvailableProductsActionError(err)))
      )})
  )
  )
  searchProductsEffects:Observable<ProductsActions>=createEffect(()=>this.effectsActions.pipe(
    ofType(ProductActionTypes.SEARCH_PRODUCTS),
    mergeMap((action:ProductsActions)=>{
      return this.productService.searchProducts(action.payload)
        .pipe(
        map((products)=>new SearchProductsActionSuccess(products)),
        catchError((err)=>of(new SearchProductsActionError(err)))
      )})
  )
  )
    getProductEffects:Observable<ProductsActions>=createEffect(()=>this.effectsActions.pipe(
    ofType(ProductActionTypes.GET_PRODUCT),
    mergeMap((action:ProductsActions)=>{
      return this.productService.getProductById(action.payload)
        .pipe(
        map((product)=>new GetProductActionSuccess(product)),
        catchError((err)=>of(new GetProductActionError(err)))
      )})
  )
  )
  selectProductEffects:Observable<ProductsActions>=createEffect(()=>this.effectsActions.pipe(
    ofType(ProductActionTypes.SELECT_PRODUCT),
    mergeMap((action:ProductsActions)=>{
      return this.productService.setSelected(action.payload)
        .pipe(
        map((product)=>new SelectProductActionSuccess(product)),
        catchError((err)=>of(new SelectProductActionError(err)))
      )})
  )
  )
  addProductEffects:Observable<ProductsActions>=createEffect(()=>this.effectsActions.pipe(
    ofType(ProductActionTypes.ADD_PRODUCT),
    map(value => {
      return new AddProductActionSuccess({})
    })
    // mergeMap((action:ProductsActions)=>{
    //   return this.productService.save(action.payload)
    //     .pipe(
    //     map((product)=>new AddProductActionSuccess(product)),
    //     catchError((err)=>of(new AddProductActionError(err)))
    //   )})
  )
  )
  saveProductEffects:Observable<ProductsActions>=createEffect(()=>this.effectsActions.pipe(
    ofType(ProductActionTypes.SAVE_PRODUCT),
    mergeMap((action:ProductsActions)=>{
      return this.productService.save(action.payload)
        .pipe(
        map((product)=>new SaveProductActionSuccess(product)),
        catchError((err)=>of(new SaveProductActionError(err)))
      )})
  )
  )
    editProductEffects:Observable<ProductsActions>=createEffect(()=>this.effectsActions.pipe(
    ofType(ProductActionTypes.EDIT_PRODUCT),
    mergeMap((action:ProductsActions)=>{
      return this.productService.update(action.payload)
        .pipe(
        map((product)=>new EditProductActionSuccess(product)),
        catchError((err)=>of(new EditProductActionError(err)))
      )})
  )
  )
  deleteProductEffects:Observable<ProductsActions>=createEffect(()=>this.effectsActions.pipe(
    ofType(ProductActionTypes.DELETE_PRODUCT),
    mergeMap((action:ProductsActions)=>{
      return this.productService.delete(action.payload.id)
        .pipe(
        map((product)=>new DeleteProductActionSuccess(action.payload)),
        catchError((err)=>of(new DeleteProductActionError(err)))
      )})
  )
  )
}
