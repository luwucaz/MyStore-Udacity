import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SnackbarService } from 'src/app/services/components/snackbar.service';
import { CartStoreService } from 'src/app/services/store/cart-store.service';
import { ProductItem } from 'src/app/shared/models/product-list/models';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  constructor(
    private readonly _cartService: CartStoreService,
    private readonly _snackBarService: SnackbarService){}
  
    ngOnInit(): void {}

  @Output() onItemClickEvent: EventEmitter<ProductItem> = new EventEmitter();
  @Input() item: ProductItem = {
    id: 0,
    name: "",
    price: 0,
    url: "",
    description: ""
  };
  @Input() showButton = true;
  @Input() amount = 1;

    onItemClick(item: ProductItem): void {
        this.onItemClickEvent.emit(item);
    }

    onAddToCartClick(item: ProductItem): void {
      this._snackBarService.openSuccessSnackBar("Added to cart");
      this._cartService.addToCart(item);
    }

    onRemoveFromCartClick(item: any): void {
      this._snackBarService.openErrorSnackBar("Removed from cart");
      this._cartService.removeFromCart(item);
    }
}
