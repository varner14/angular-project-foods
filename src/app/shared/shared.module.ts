import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ShoppingCartService } from "app/restaurant-details/shopping-cart/shopping-cart.service";
import { OrderService } from "app/order/order.service";
import { RestaurantService } from "app/restaurants/restaurants.service";

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent],
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [ShoppingCartService, OrderService, RestaurantService]
    }
  }
}
