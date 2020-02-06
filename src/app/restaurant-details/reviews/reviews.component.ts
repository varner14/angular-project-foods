import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantService: RestaurantService,
          private routes : ActivatedRoute
    ) { }

  ngOnInit() {
    this.reviews =this.restaurantService.reviewsOfRestaurants(this.routes.parent.snapshot.params['id'])
  }

}
