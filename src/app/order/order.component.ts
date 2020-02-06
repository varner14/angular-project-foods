import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-details/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: "MON" },
    { label: 'Cartão de Debito', value: "DEB" },
    { label: 'Vale Refeição', value: "REF" }
  ]

  constructor(private orderService: OrderService) {
   }

  ngOnInit() {
  }

  cartItems():CartItem[] {
    return this.orderService.cartItems();
  }
  increaseQty(item: CartItem){
    return this.orderService.increaseQty(item)
  }
  decreaseQty(item: CartItem){
    return this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    return this,this.orderService.remove(item)
  }

}
