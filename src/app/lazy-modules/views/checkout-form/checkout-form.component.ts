import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartStoreService } from 'src/app/services/store/cart-store.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit{
  form!: UntypedFormGroup;
  totalValue = 0;
  constructor(
    private fb: UntypedFormBuilder, 
    private readonly _cartStore: CartStoreService, 
    private readonly _routerService: Router) {  
  }

  emailAvailable = true;

  ngOnInit(): void {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        name: ['', [Validators.required]],
        address: ['', [Validators.required]]
      });

      this.totalValue = this._cartStore.getTotalValue();
  }

  isValidForm(){
    return this.form.valid && this.emailAvailable;
  }

  onSubmit(){
    this._routerService.navigateByUrl('order-confirmation');
  }

  onEmailChange(event: any){
    this.emailAvailable = event !== "example@email.com";
  }

  getEmailErrorMessage(){
    return "Email already in use";
  }
}
