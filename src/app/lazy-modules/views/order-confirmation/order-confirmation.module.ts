import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderConfirmationRoutingModule } from './order-confirmation-routing.module';
import { OrderConfirmationComponent } from './order-confirmation.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductItemModule } from 'src/app/components/product/product-item/product-item.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    OrderConfirmationComponent
  ],
  imports: [
    CommonModule,
    OrderConfirmationRoutingModule,
    MatGridListModule,
    ProductItemModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class OrderConfirmationModule { }
