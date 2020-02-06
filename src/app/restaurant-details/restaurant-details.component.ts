import { Component, OnInit } from '@angular/core';
import {RestaurantService} from './../restaurants/restaurants.service'
import { Restaurant} from '../restaurants/restaurant/restaurant.model'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'mt-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  restaurant: Restaurant
  constructor(private restaurantsService: RestaurantService,
    private route: ActivatedRoute) { }


  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant =>this.restaurant = restaurant)
    console.log("restaurant",this.restaurant)

  }

}
