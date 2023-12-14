import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {
  AddProductAction,
  GetAllProductsAction,
  GetProductAction,
  SaveProductAction
} from "../../../../ngrx/products.actions";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsState, ProductsStateEnum} from "../../../../ngrx/products.reducer";
import {MatDialog} from "@angular/material/dialog";
import {DialogExample} from "../../../dialog-exemple/dialog-example.component";
import {Product} from "../../../../model/product.model";
import {ProductService} from "../../../../services/product.service";

@Component({
  selector: 'app-product-formulaire',
  templateUrl: './product-formulaire.component.html',
  styleUrls: ['./product-formulaire.component.css']
})
export class ProductFormulaireComponent implements OnInit {
  productFormGroup: FormGroup| null=null;
  submitted?: Boolean=false;
  state:ProductsState|null=null;
  productStateEnum=ProductsStateEnum;
  private productId: number;

  constructor( private fb:FormBuilder,private store:Store<any>,private route :Router,private dialog:MatDialog,private activateRoute: ActivatedRoute,private productService :ProductService) {

    this.productId=Number(this.activateRoute.snapshot.params.id);


  }
  ngOnInit(): void {
if (this.productId===0) {
  this.store.dispatch(new AddProductAction({}));
  this.store.subscribe((state) => {
        this.state = state.catalogState;
        if (this.state?.dataState == ProductsStateEnum.NEW) {
          this.productFormGroup = this.fb.group({
            name: ["", Validators.required],
            price: [0, Validators.required],
            quantity: [0, Validators.required],
            selected: [true, Validators.required],
            available: [true, Validators.required],
          });
        }
      }
  )
}else{
  this.store.dispatch(new AddProductAction());
  this.store.dispatch(new GetProductAction(this.productId));

  this.store.subscribe((state) => {
 {
   this.state=state.catalogState;
   if (this.state?.dataState == ProductsStateEnum.NEW || this.state?.dataState == ProductsStateEnum.SUCCESS ) {
      this.productService.getProductById(this.productId).subscribe(product_search => {
        this.productFormGroup = this.fb.group({
          name :[product_search.name, Validators.required],
          price: [product_search.price, Validators.required],
          quantity:[product_search.quantity, Validators.required],
          selected: [product_search.selected, Validators.required],
          available: [product_search.available, Validators.required],
        });
      })

    }
  }}
  )
}
  }
  onSaveProduct() {
   this.store.dispatch(new SaveProductAction(this.productFormGroup?.value));
   this.openDialog();
  }

  onNewProduct() {
    this.store.dispatch(new AddProductAction({}));
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogExample, {
      width:'300px',position:({
        top:'12px',
        right:'12px'
      }),
      data:{operationType:"Save",yesOrNoConfirm:false}
    });
  }
}
