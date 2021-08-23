import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getCustomerData(){
    return [
        {productName: "KtKat", productId: 10, quantityOnHand: 500, price: 10, review: "Good" },
        {productName: "5-Star", productId: 11, quantityOnHand: 1000, price: 20, review: "Best" },
        {productName: "Snakkers", productId: 12, quantityOnHand: 700, price: 5, review: "Good" },
        {productName: "Dairy Milk", productId: 15, quantityOnHand: 1500, price: 50, review: "Awosome" },
        {productName: "Bingo", productId: 16, quantityOnHand: 400, price: 10, review: "Good" }    
    ]
}
  constructor() { }
}
