import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/components/snackbar.service';
import { ApiService } from 'src/app/services/http/api-service.service';
import { CartStoreService } from 'src/app/services/store/cart-store.service';
import { ProductItem } from 'src/app/shared/models/product-list/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  data: ProductItem[] = [];

  constructor(
    private readonly _apiService: ApiService,
    private readonly _routerService: Router){}

  ngOnInit(): void{
    this._apiService.getShoppingListData().subscribe((apiData) => {
      this.data = apiData;
      console.log(this.data);
    },
    () => {
      console.log("Error retrieving shopping list data");
    });
  }

  onProductDetails(event: any){
    this._routerService.navigateByUrl(`details/${event.id}`);
  }
}
