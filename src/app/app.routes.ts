import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { MenuComponent } from './restaurant-details/menu/menu.component';
import { ReviewsComponent } from './restaurant-details/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export const ROUTES: Routes =[
    {path: '', component: HomeComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'order', loadChildren: './order/order.module#OrderModule'},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'restaurants/:id', component: RestaurantDetailsComponent,
    children:[
      {path: '', redirectTo:'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent},

    ]
  }
]
