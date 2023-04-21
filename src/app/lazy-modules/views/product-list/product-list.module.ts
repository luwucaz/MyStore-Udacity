import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductItemModule } from 'src/app/components/product/product-item/product-item.module';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { ToolbarModule } from 'src/app/components/layout/toolbar/toolbar.module';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MatListModule,
    ProductItemModule,
    MatGridListModule
  ]
})
export class ProductListModule { }
