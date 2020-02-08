import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-details/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-details/shopping-cart/cart-item.model";
import { Order, Orderitem } from "./order.model";
import { Observable } from "rxjs/Observable";
import { Http, Headers , RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService{

constructor(private cartService: ShoppingCartService, private http: Http){

}
cartItems(): CartItem[]{
  return this.cartService.items
}

increaseQty(item: CartItem){
  this.cartService.increaseQty(item);
}
decreaseQty(item: CartItem){
  this.cartService.decreaseQty(item);
}

remove(item: CartItem){
  this.cartService.removeItem(item)
}

itensValue(): number{
  return this.cartService.total()
}
clear(){
  this.cartService.clear();
}

checkOrder(order: Order): Observable<string>{
  const headers = new Headers();
  headers.append('Content-Type', 'application/json')
  return this.http.post(`${MEAT_API}/orders`,
   JSON.stringify(order),
   new RequestOptions({headers: headers}))
   .map((resp => resp.json())).map(order => order.id)
}

}
