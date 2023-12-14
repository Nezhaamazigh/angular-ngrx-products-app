import {Action} from "@ngrx/store";
import {Product} from "../model/product.model";

export enum ProductActionTypes{
  GET_ALL_PRODUCTS="[Product] GET ALL PRODUCTS",
  GET_ALL_PRODUCTS_SUCCESS="[Product] GET ALL PRODUCTS SUCCESS",
  GET_ALL_PRODUCTS_ERROR="[Product] GET ALL PRODUCTS ERROR",
  /*
  * GET PRODUCT
  * */
  GET_PRODUCT="[Product] GET PRODUCT",
  GET_PRODUCT_SUCCESS="[Product] GET PRODUCT SUCCESS",
  GET_PRODUCT_ERROR="[Product] GET PRODUCT ERROR",

  GET_ALL_SELECTED_PRODUCTS="[Product] GET ALL Selected PRODUCTS",
  GET_ALL_SELECTED_PRODUCTS_SUCCESS="[Product] GET ALL Selected PRODUCTS SUCCESS",
  GET_ALL_SELECTED_PRODUCTS_ERROR="[Product] GET ALL Selected PRODUCTS ERROR",

  GET_ALL_AVAILABLE_PRODUCTS="[Product] GET ALL Available PRODUCTS",
  GET_ALL_AVAILABLE_PRODUCTS_SUCCESS="[Product] GET ALL Available PRODUCTS SUCCESS",
  GET_ALL_AVAILABLE_PRODUCTS_ERROR="[Product] GET ALL Available PRODUCTS ERROR",

  SEARCH_PRODUCTS="[Product] Search PRODUCTS",
  SEARCH_PRODUCTS_SUCCESS="[Product] Search PRODUCTS SUCCESS",
  SEARCH_PRODUCTS_ERROR="[Product] Search PRODUCTS ERROR",

  SELECT_PRODUCT="[Product] Select PRODUCT",
  SELECT_PRODUCT_SUCCESS="[Product] Select PRODUCT SUCCESS",
  SELECT_PRODUCT_ERROR="[Product] Select PRODUCT ERROR",

  ADD_PRODUCT="[Product] ADD PRODUCT",
  ADD_PRODUCT_SUCCESS="[Product] ADD PRODUCT SUCCESS",
  ADD_PRODUCT_ERROR="[Product] ADD PRODUCT ERROR",

  SAVE_PRODUCT="[Product] Save PRODUCT",
  SAVE_PRODUCT_SUCCESS="[Product] Save PRODUCT SUCCESS",
  SAVE_PRODUCT_ERROR="[Product] Save PRODUCT ERROR",

  EDIT_PRODUCT="[Product] Edit PRODUCT",
  EDIT_PRODUCT_SUCCESS="[Product] Edit PRODUCT SUCCESS",
  EDIT_PRODUCT_ERROR="[Product] Edit PRODUCT ERROR",

  DELETE_PRODUCT="[Product] Delete PRODUCT",
  DELETE_PRODUCT_SUCCESS="[Product] Delete PRODUCT SUCCESS",
  DELETE_PRODUCT_ERROR="[Product] Delete PRODUCT ERROR",

}
/*
* GET ALL PRODUCTS
* */
export class GetAllProductsAction implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_PRODUCTS;
constructor(public payload:any) {}}

export class GetAllProductsActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS;
constructor(public payload:any) {}}
export class GetAllProductsActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_PRODUCTS_ERROR;
constructor(public payload:string) {}}


/*
* GET ALL PRODUCTS
* */
export class GetProductAction implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_PRODUCT;
constructor(public payload:any) {}}

export class GetProductActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_PRODUCT_SUCCESS;
constructor(public payload:Product) {}}
export class GetProductActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_PRODUCT_ERROR;
constructor(public payload:string) {}}

// /*
//
//
// */
// Selected Products
export class GetAllSelectedProductsAction implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_SELECTED_PRODUCTS;
constructor(public payload:any) {}}

export class GetAllSelectedProductsActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_SELECTED_PRODUCTS_SUCCESS;
constructor(public payload:any) {}}
export class GetAllSelectedProductsActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_SELECTED_PRODUCTS_ERROR;
constructor(public payload:string) {}}


// AVAILABLE Products
export class GetAllAvailableProductsAction implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_AVAILABLE_PRODUCTS;
constructor(public payload:any) {}}

export class GetAllAvailableProductsActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_AVAILABLE_PRODUCTS_SUCCESS;
constructor(public payload:any) {}}
export class GetAllAvailableProductsActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.GET_ALL_AVAILABLE_PRODUCTS_ERROR;
constructor(public payload:string) {}}

// /*
// SEARCH PRODUCTS
// */
export class SearchProductsAction implements Action{
  type: ProductActionTypes=ProductActionTypes.SEARCH_PRODUCTS;
  constructor(public payload:string) {}}

export class SearchProductsActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {}}
export class SearchProductsActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload:string) {}}

// /*
// Select PRODUCT
// */
export class SelectProductAction implements Action{
  type: ProductActionTypes=ProductActionTypes.
      SELECT_PRODUCT;
  constructor(public payload:Product) {}}

export class SelectProductActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.SELECT_PRODUCT_SUCCESS;
  constructor(public payload:Product) {}}
export class SelectProductActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.SELECT_PRODUCT_ERROR;
  constructor(public payload:string) {}}

/*
* ADD PRODUCT
* */
export class AddProductAction implements Action{
  type: ProductActionTypes=ProductActionTypes.ADD_PRODUCT;
  constructor(public payload:any="") {

  }}

export class AddProductActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.ADD_PRODUCT_SUCCESS;
  constructor(public payload:any="") {

  }}
export class AddProductActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.ADD_PRODUCT_ERROR;
  constructor(public payload:string) {}}
/*
* EDIT PRODUCT
*
* */
export class EditProductAction implements Action{
  type: ProductActionTypes=ProductActionTypes.EDIT_PRODUCT;
  constructor(public payload:Product) {

  }}

export class EditProductActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.EDIT_PRODUCT_SUCCESS;
  constructor(public payload:Product) {

  }}
export class EditProductActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.EDIT_PRODUCT_ERROR;
  constructor(public payload:string) {}}
/*
* Save PRODUCT
* */
export class SaveProductAction implements Action{
  type: ProductActionTypes=ProductActionTypes.SAVE_PRODUCT;
  constructor(public payload:Product) {}}

export class SaveProductActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.SAVE_PRODUCT_SUCCESS;
  constructor(public payload:Product) {

  }}
export class SaveProductActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.SAVE_PRODUCT_ERROR;
  constructor(public payload:string) {}}



// /*
// Delete PRODUCT
// */
export class DeleteProductAction implements Action{
  type: ProductActionTypes=ProductActionTypes.DELETE_PRODUCT;
  constructor(public payload:Product) {}}

export class DeleteProductActionSuccess implements Action{
  type: ProductActionTypes=ProductActionTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload:Product) {}}
export class DeleteProductActionError implements Action{
  type: ProductActionTypes=ProductActionTypes.DELETE_PRODUCT_ERROR;
  constructor(public payload:string) {}}

export type ProductsActions=
  GetAllProductsAction|GetAllProductsActionSuccess|GetAllProductsActionError|
  SearchProductsAction|SearchProductsActionSuccess|SearchProductsActionError|
  SelectProductAction|SelectProductActionSuccess|SelectProductActionError|
  GetProductAction|GetProductActionSuccess|GetProductActionError|
  AddProductAction|AddProductActionSuccess|AddProductActionError|
  SaveProductAction|SaveProductActionSuccess|SaveProductActionError|
  EditProductAction|EditProductActionSuccess|EditProductActionError|
  DeleteProductAction|DeleteProductActionSuccess|DeleteProductActionError|
  GetAllSelectedProductsAction|GetAllSelectedProductsActionSuccess|GetAllSelectedProductsActionError|
  GetAllAvailableProductsAction|GetAllAvailableProductsActionSuccess|GetAllAvailableProductsActionError;
