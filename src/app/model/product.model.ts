
export interface Product {
  id:number;
  name:string;
  price:number;
  quantity:number;
  selected:boolean;
  available:boolean;
}
export interface DialogData {
  operationType: 'Add' | 'Editing' | 'Deleting'|'Save';
  yesOrNoConfirm:boolean;
}
