import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-app',
  templateUrl: './product-app.component.html',
  styleUrls: ['./product-app.component.css']
})
export class ProductAppComponent implements OnInit {

  id:number = 0;
  ProductName:String = "";
  quantityOnHnads:number = 0;
  price:number = 0;
  comments:String ="";

  display = false;
  lable = "Add";

  constructor() { }

  ngOnInit(): void {

  }

  add(){
    this.display = true;
  }
  show(){

    if(this.display == true){
        this.display = false;
        this.lable = "Add"
    }
    else{
        this.display = true;
        this.lable = "Remove"

    }
}

}
