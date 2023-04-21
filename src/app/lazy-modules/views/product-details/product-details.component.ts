import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnackbarService } from 'src/app/services/components/snackbar.service';
import { ApiService } from 'src/app/services/http/api-service.service';
import { CartStoreService } from 'src/app/services/store/cart-store.service';
import { ProductItem } from 'src/app/shared/models/product-list/models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  itemId: number = 0;
  item: ProductItem = {
    id: 0,
    name: "",
    price: 0,
    url: "",
    description: ""
  };
  
  constructor(private readonly _apiService: ApiService,
    private readonly _queryService: ActivatedRoute)
  {
  }

  ngOnInit(): void{
    this._queryService.params.subscribe((params) => {
      this.itemId = params['id'];
    });
    this._apiService.getShoppingListData().subscribe((data) => {
      const item = data.find(d => d.id == this.itemId);
      if (item)
        this.item = item;
    },
    () => {
      console.log("ERROR!");
    })
  }

  onProductDetails(event: any){
    //do nothing
  }
}
