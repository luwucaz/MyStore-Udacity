import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartStoreService } from 'src/app/services/store/cart-store.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  ngOnInit(): void {
      
  }
  
  constructor(
    private readonly _routerService: Router,
    private readonly _cartStore: CartStoreService){
  }

  onCartClick() {
    this._routerService.navigateByUrl('cart');
  }

  onTitleClick(){
    this._routerService.navigateByUrl('');
  }

  getTotalItems(){
    return this._cartStore.getTotalProducts();
  }
}
