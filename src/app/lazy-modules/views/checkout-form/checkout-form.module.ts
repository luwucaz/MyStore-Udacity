import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { CheckoutFormRoutingModule } from './checkout-form-routing.module';
import { CheckoutFormComponent } from './checkout-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CheckoutFormComponent
  ],
  imports: [
    CommonModule,
    CheckoutFormRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class CheckoutFormModule { }
