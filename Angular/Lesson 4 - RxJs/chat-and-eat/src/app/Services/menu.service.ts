import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';

export interface MenuItem {
  name: string;
  price: number;
}

interface CartItem {
  item: MenuItem;
  quantity: number;
}

export type Categories = 'Pizza' | 'Pasta' | 'Asian';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menu: Record<Categories, MenuItem[]> = {
    Pizza: [
      { name: 'Margherita', price: 10 },
      { name: 'Pepperoni', price: 12 },
    ],
    Pasta: [
      { name: 'Spaghetti Carbonara', price: 15 },
      { name: 'Penne Arrabiata', price: 14 },
    ],
    Asian: [
      { name: 'Rice', price: 8 },
      { name: 'Noodles', price: 9 },
    ],
  };

  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  public cart$ = this.cartSubject.asObservable();

  constructor() {}

  getCategories(): Observable<Categories[]> {
    return of(Object.keys(this.menu) as Categories[]);
  }

  getMenuItems(category?: Categories): Observable<MenuItem[]> {
    if (category) {
      return of(this.menu[category]).pipe(
        delay(1000),
        tap(() => console.log(`Fetched ${category} items`))
      );
    } else {
      let allItems = Object.values(this.menu).flat();
      return of(allItems).pipe(
        delay(1000),
        tap(() => console.log('Fetched all items.', allItems))
      );
    }
  }

  addToCart(item: MenuItem): void {
    let currentCart = this.cartSubject.value;
    let foundItem = currentCart.find(
      (cartItem) => cartItem.item.name === item.name
    );

    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      currentCart.push({ item, quantity: 1 });
    }

    this.cartSubject.next(currentCart);
    console.log(`Added ${item.name} to cart`);
  }

  // Additional methods like removeFromCart, clearCart can be added as needed
}
