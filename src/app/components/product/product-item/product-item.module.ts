import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { ProductItemComponent } from './product-item.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ProductItemComponent
  ]
})
export class ProductItemModule { }
