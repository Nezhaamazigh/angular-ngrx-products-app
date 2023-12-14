import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";

import {ProductFormulaireComponent} from "./components/products/products-nav-bar/product-formulaire/product-formulaire.component";

const routes: Routes = [
  {"path":"products",component:ProductsComponent},
  {"path":"newProduct/:id",component:ProductFormulaireComponent},
  {"path":"",component:ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
