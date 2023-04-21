import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartStoreService } from 'src/app/services/store/cart-store.service';
import { ProductItem, ProductItemWithAmount } from 'src/app/shared/models/product-list/models';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  items: ProductItemWithAmount[] = [];
  totalValue = 0;
  
  constructor(private readonly _cartService: CartStoreService,
    private readonly _routerService: Router){

  }

  ngOnInit(): void {

      this._cartService.getItems().subscribe((items) => {
        if(items)
          this.items = items;
        this.totalValue = this._cartService.getTotalValue();
      })
    }
        

  onProductDetails(event: any){
    //do nothing
  }

  onCheckout(){
    if(this._cartService.getTotalValue() > 0)
      this._routerService.navigateByUrl('/checkout');
  }
}
