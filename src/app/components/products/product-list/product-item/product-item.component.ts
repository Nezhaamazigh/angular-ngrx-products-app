import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../model/product.model";
import {Store} from "@ngrx/store";
import {
  AddProductAction,
  DeleteProductAction,
  GetProductAction,
  SelectProductAction
} from "../../../../ngrx/products.actions";
import {DialogExample} from "../../../dialog-exemple/dialog-example.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:Product| null=null;
  constructor(private store :Store,private dialog:MatDialog,private route:Router) { }

  ngOnInit(): void {
  }

  onEdit(product: Product) {
    this.route.navigateByUrl("/newProduct/"+product.id)
   // this.store.dispatch(new GetProductAction(product.id));

   this.store.dispatch(new AddProductAction())
  }


  onSelect(p: Product) {
    this.store.dispatch(new SelectProductAction(p));
    this.openDialog("Selected/unselected")
  }

  onDelete(p: Product) {
    this.store.dispatch(new DeleteProductAction(p));
    this.openDialog("Delete")
  }
  openDialog(typeOperation :string) {
    const dialogRef = this.dialog.open(DialogExample, {
      width:'300px',position:({
        top:'12px',
        right:'12px'
      }),
      data:{operationType:typeOperation,yesOrNoConfirm:false}
    });
  }

}
