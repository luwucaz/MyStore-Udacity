import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListModule } from './lazy-modules/views/product-list/product-list.module';
import { ProductDetailsModule } from './lazy-modules/views/product-details/product-details.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ShoppingCartModule } from './lazy-modules/views/shopping-cart/shopping-cart.module';
import { ToolbarModule } from './components/layout/toolbar/toolbar.module';
import { CheckoutFormModule } from './lazy-modules/views/checkout-form/checkout-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OrderConfirmationModule } from './lazy-modules/views/order-confirmation/order-confirmation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    ProductListModule,
    ProductDetailsModule,
    ShoppingCartModule,
    ToolbarModule,
    CheckoutFormModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    OrderConfirmationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
