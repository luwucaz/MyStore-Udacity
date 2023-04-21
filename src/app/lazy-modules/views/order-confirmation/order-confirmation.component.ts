import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartStoreService } from 'src/app/services/store/cart-store.service';
import { ProductItem, ProductItemWithAmount } from 'src/app/shared/models/product-list/models';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit, OnDestroy{
  data: ProductItemWithAmount[] = [];
  
  constructor(
    private readonly _cartStore: CartStoreService
  ){}
  
  ngOnInit(): void {
      this._cartStore.getItems().subscribe((items) => {
        if(items)
          this.data = items;
      })
  }
  onProductDetails(event: any){
   //do nothing
  }

  ngOnDestroy(): void{
    this._cartStore.removeAll();
  }
}
