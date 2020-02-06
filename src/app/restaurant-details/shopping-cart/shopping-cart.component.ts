import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor( private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {

  }

  clear(){
    return this.shoppingCartService.clear();
  }

  items():any[]{
    return this.shoppingCartService.items;

  }

  total(): number{
    return this.shoppingCartService.total()
  }

  removeItem(item: any){
    return this.shoppingCartService.removeItem(item)
  }

  addItem(item: any){
    return this.shoppingCartService.addItem(item);
  }

}
