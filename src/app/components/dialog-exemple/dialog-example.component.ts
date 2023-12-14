import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {DialogData} from "../../model/product.model";

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css'],
  //standalone: true,

})

export class DialogExample implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogExample>,
  @Inject(MAT_DIALOG_DATA) public data:DialogData) {}

  ngOnInit(): void {
  }

  onNoClose() {
    this.dialogRef.close();
  }

  onNoClick() {

  }
}
