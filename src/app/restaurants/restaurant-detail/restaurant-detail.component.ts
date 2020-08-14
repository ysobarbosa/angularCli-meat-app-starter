import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../restaurants.service';
import {Restaurant} from '../restaurant/restaurant.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  constructor( private restaurantService: RestaurantsService,
               private route: ActivatedRoute
              ) { }

  restaurant: Restaurant;

  ngOnInit() {

    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
