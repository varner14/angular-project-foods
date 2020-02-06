import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "./restaurants.service";
import { Restaurant } from "./restaurant/restaurant.model";

@Component({
  selector: "mt-restaurants",
  templateUrl: "./restaurants.component.html"
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService
      .restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }
}
