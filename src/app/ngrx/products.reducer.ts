import {Product} from "../model/product.model";
import {ProductActionTypes, ProductsActions} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductsStateEnum{
  LOADING= " Loading" ,
  SUCCESS= "Success" ,
  ERROR= "Error" ,
  INITIAL=" Initial",
  NEW="New",
  EDIT="Edit",
  "DELETE"="Delete"
}
export interface ProductsState{
  products : Product [ ] ,
  errormessage : string,
  dataState:ProductsStateEnum
}
const initState:ProductsState={
  dataState: ProductsStateEnum.INITIAL,
  errormessage: "",
  products: []
}
export function ProductsReducer(this: { catalogState: (state: ProductsState, action: Action) => ProductsState; }, state:ProductsState=initState,action:Action):ProductsState{
switch (action.type){
  //GET ALL PRODUCTS
  case ProductActionTypes.GET_ALL_PRODUCTS:
    return {...state,dataState:ProductsStateEnum.LOADING}
  case ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS:
    return {...state,dataState:ProductsStateEnum.SUCCESS,errormessage:"",products:(<ProductsActions>action).payload}
  case ProductActionTypes.GET_ALL_PRODUCTS_ERROR:
    return {...state,dataState:ProductsStateEnum.ERROR,errormessage:(<ProductsActions>action).payload}
//GET SELECTED PRODUCTS
  case ProductActionTypes.GET_ALL_SELECTED_PRODUCTS:
    return {...state,dataState:ProductsStateEnum.LOADING}
  case ProductActionTypes.GET_ALL_SELECTED_PRODUCTS_SUCCESS:
    return {...state,dataState:ProductsStateEnum.SUCCESS,errormessage:"",products:(<ProductsActions>action).payload}
  case ProductActionTypes.GET_ALL_SELECTED_PRODUCTS_ERROR:
    return {...state,dataState:ProductsStateEnum.ERROR,errormessage:(<ProductsActions>action).payload}
//GET AVAILABLE PRODUCTS
  case ProductActionTypes.GET_ALL_AVAILABLE_PRODUCTS:
    return {...state,dataState:ProductsStateEnum.LOADING}
  case ProductActionTypes.GET_ALL_AVAILABLE_PRODUCTS_SUCCESS:
    return {...state,dataState:ProductsStateEnum.SUCCESS,errormessage:"",products:(<ProductsActions>action).payload}
  case ProductActionTypes.GET_ALL_AVAILABLE_PRODUCTS_ERROR:
    return {...state,dataState:ProductsStateEnum.ERROR,errormessage:(<ProductsActions>action).payload}

//SEARCH PRODUCTS
  case ProductActionTypes.SEARCH_PRODUCTS:
    return {...state,dataState:ProductsStateEnum.LOADING}
  case ProductActionTypes.SEARCH_PRODUCTS_SUCCESS:
    return {...state,dataState:ProductsStateEnum.SUCCESS,errormessage:"",products:(<ProductsActions>action).payload}
  case ProductActionTypes.SEARCH_PRODUCTS_ERROR:
    return {...state,dataState:ProductsStateEnum.ERROR,errormessage:(<ProductsActions>action).payload}


  // SELECT PRODUCT
  case ProductActionTypes.SELECT_PRODUCT:
    return {...state,dataState:ProductsStateEnum.LOADING}
  case ProductActionTypes.SELECT_PRODUCT_SUCCESS:
    let product:Product=(<ProductsActions>action).payload;
    let listProducts=[...state.products];//on ne peut pas changer le state on fait une copie du state
    let dataResult=listProducts.map(p=>p.id==product.id?product:p);//chercher le product pour que si le p est meme que product qui vient du backend return product
    return {...state,dataState:ProductsStateEnum.SUCCESS,errormessage:"",products:dataResult}
  case ProductActionTypes.SELECT_PRODUCT_ERROR:
    return {...state,dataState:ProductsStateEnum.ERROR,errormessage:(<ProductsActions>action).payload}

  // ADD PRODUCT
  case ProductActionTypes.ADD_PRODUCT:
    return {...state,dataState:ProductsStateEnum.LOADING}
  case ProductActionTypes.ADD_PRODUCT_SUCCESS:
     return {...state,dataState:ProductsStateEnum.NEW}
  case ProductActionTypes.ADD_PRODUCT_ERROR:
    return {...state,dataState:ProductsStateEnum.ERROR,errormessage:(<ProductsActions>action).payload}

    //GET PRODUCT
  case ProductActionTypes.GET_PRODUCT:
    return {...state,dataState:ProductsStateEnum.LOADING}
  case ProductActionTypes.GET_PRODUCT_SUCCESS:
    return {...state,dataState:ProductsStateEnum.NEW,products:(<ProductsActions>action).payload}
  case ProductActionTypes.GET_PRODUCT_ERROR:
    return {...state,dataState:ProductsStateEnum.ERROR,errormessage:(<ProductsActions>action).payload}

    // SAVE PRODUCT
  case ProductActionTypes.SAVE_PRODUCT:
    return {...state,dataState:ProductsStateEnum.LOADING}
  case ProductActionTypes.SAVE_PRODUCT_SUCCESS:
    let prods:Product[]=[...state.products]
    prods.push((<ProductsActions>action).payload);
     return {...state,dataState:ProductsStateEnum.SUCCESS,errormessage:"",products:prods}
  case ProductActionTypes.SAVE_PRODUCT_ERROR:
    return {...state,dataState:ProductsStateEnum.ERROR,errormessage:(<ProductsActions>action).payload}

// SAVE PRODUCT
  case ProductActionTypes.EDIT_PRODUCT:
    return {...state,dataState:ProductsStateEnum.LOADING}
  case ProductActionTypes.EDIT_PRODUCT_SUCCESS:
    let products:Product[]=[...state.products];
    let newList=products.map(p=>p.id==(<ProductsActions>action).payload.id?(<ProductsActions>action).payload:p);
     return {...state,dataState:ProductsStateEnum.SUCCESS,errormessage:"",products:newList}
  case ProductActionTypes.EDIT_PRODUCT_ERROR:
    return {...state,dataState:ProductsStateEnum.ERROR,errormessage:(<ProductsActions>action).payload}

  // DELETE PRODUCT
  case ProductActionTypes.DELETE_PRODUCT:
    return {...state,dataState:ProductsStateEnum.LOADING}
  case ProductActionTypes.DELETE_PRODUCT_SUCCESS:
    let productDeleted:Product=(<ProductsActions>action).payload;
    let listP=[...state.products];//on ne peut pas changer le state on fait une copie du state
    let index=state.products.indexOf(productDeleted);
    listP.splice(index,1);
    return {...state,dataState:ProductsStateEnum.SUCCESS,errormessage:"",products:listP}
  case ProductActionTypes.DELETE_PRODUCT_ERROR:
    return {...state,dataState:ProductsStateEnum.ERROR,errormessage:(<ProductsActions>action).payload}

  default:{
    return {...state}
  }
}
}
