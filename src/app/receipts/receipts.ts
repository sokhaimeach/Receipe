import { Component } from '@angular/core';

@Component({
  selector: 'app-receipts',
  imports: [],
  templateUrl: './receipts.html',
  styleUrl: './receipts.css'
})
export class Receipts {
  receipt = [{
    id: 1,
    address: "122 St, Sensok, Phonm Penh",
    date: '2025-06-05',
    manager: "Sokhai",
    product: [
      {
        descripttion: "Orange Juice",
        price: 2.15
      },
      {
        descripttion: "Apple",
        price: 3.50
      },
      {
        descripttion: "Tomato",
        price: 2.40
      },
      {
        descripttion: "Fish",
        price: 6.99
      },
      {
        descripttion: "Beef",
        price: 12.49
      },
      {
        descripttion: "Onion",
        price: 1.25
      },
      {
        descripttion: "Cheese",
        price: 3.40
      }
    ],
    totals: () => {
      let total_price = 0;
      this.receipt[0].product.forEach(item => {
        total_price += item.price;
      });
      return total_price;
    },
    barcode: "1234567890123"
  }];
}
