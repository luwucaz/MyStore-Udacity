import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./lazy-modules/views/product-list/product-list-routing.module').then(m => m.ProductListRoutingModule)},
  {path: 'checkout', loadChildren: () => import('./lazy-modules/views/checkout-form/checkout-form-routing.module').then(m => m.CheckoutFormRoutingModule)},
  {path: 'details', loadChildren: () => import('./lazy-modules/views/product-details/product-details-routing.module').then(m => m.ProductDetailsRoutingModule)},
  {path: 'cart', loadChildren: () => import('./lazy-modules/views/shopping-cart/shopping-cart-routing.module').then(m => m.ShoppingCartRoutingModule)},
  {path: 'order-confirmation', loadChildren: () => import('./lazy-modules/views/order-confirmation/order-confirmation-routing.module').then(m => m.OrderConfirmationRoutingModule)},
  {path: '**', loadChildren: () => import('./lazy-modules/views/product-list/product-list-routing.module').then(m => m.ProductListRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  static forRoot(): ModuleWithProviders<AppRoutingModule>{
    return {
      ngModule: AppRoutingModule
    }
  }
}
