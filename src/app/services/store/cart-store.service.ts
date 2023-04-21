import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductItem, ProductItemWithAmount } from 'src/app/shared/models/product-list/models';

@Injectable({
  providedIn: 'root'
})
export class CartStoreService {

  constructor() 
  { 
    const items = localStorage.getItem("items");
    if(items){
      const itemArray: ProductItemWithAmount[] = JSON.parse(items);
      this.items.next(itemArray);
    }
  }

  private items = new BehaviorSubject<ProductItemWithAmount[] | undefined>(undefined);

  addToCart(item: ProductItem){
    const items = localStorage.getItem("items");
    let itemArray: ProductItemWithAmount[] = []

    if (items){
      itemArray = JSON.parse(items);
      const newItemIndex = itemArray.findIndex(i => i.id === item.id);
      if(newItemIndex > -1){
        itemArray[newItemIndex].amount += 1;
        localStorage.setItem("items", JSON.stringify(itemArray));  
        this.items.next(itemArray);
        return;
      }
    }

    itemArray.push({...item, amount: 1});
    localStorage.setItem("items", JSON.stringify(itemArray));  
    this.items.next(itemArray);
  }

  removeFromCart(item: ProductItem){
    const items = localStorage.getItem("items");
    let itemArray: ProductItemWithAmount[] = []

    if (items){
      itemArray = JSON.parse(items);
      const indexToDelete = itemArray.findIndex(pi => pi.id === item.id);
      if (indexToDelete > -1){
        if(itemArray[indexToDelete].amount > 1)
          itemArray[indexToDelete].amount -= 1
        else
          itemArray.splice(indexToDelete, 1);
      }
      
      localStorage.setItem("items", JSON.stringify(itemArray));
      this.items.next(itemArray);
    }
  }

  removeAll(){
    this.items.next([]);
    localStorage.removeItem("items");
  }

  getItems(): Observable<ProductItemWithAmount[] | undefined>{
    return this.items.asObservable();
  }

  getTotalProducts(): number{
    let total = 0;
    this.items.asObservable().subscribe((items) => {
      items?.forEach(item => {
        total += item.amount;
      })
    });

    return total;
  }

  getTotalValue(): number{
    let value = 0;
    this.items.asObservable().subscribe((items) => {
      items?.forEach(item => {
        value += item.price * item.amount;
      });
      
    })
    return value;
  }
}
