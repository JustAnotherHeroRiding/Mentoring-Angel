import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';

export interface MenuItem {
  name: string;
  price: number;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export type Categories = 'Pizza' | 'Pasta' | 'Asian';

export type ExtendedCategories = 'All' | Categories;

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

  private _cartSubject$ = new BehaviorSubject<CartItem[]>([]);
  public cart$ = this._cartSubject$.asObservable();

  constructor() {}

  getCategories(): Observable<ExtendedCategories[]> {
    return of(Object.keys(this.menu) as ExtendedCategories[]);
  }

  getMenuItems(category: ExtendedCategories): Observable<MenuItem[]> {
    if (category === 'All' || category === undefined) {
      // Flatten the menu items into a single array if 'All' or no category is specified
      let allItems = Object.values(this.menu).flat();
      return of(allItems).pipe(
        delay(1000),
        tap(() => console.log('Fetched all items.', allItems))
      );
    } else {
      // Fetch items for the specified category
      return of(this.menu[category]).pipe(
        delay(1000),
        tap(() => console.log(`Fetched ${category} items`))
      );
    }
  }

  addToCart(item: MenuItem): void {
    let currentCart = this._cartSubject$.value;
    let foundItem = currentCart.find(
      (cartItem) => cartItem.item.name === item.name
    );

    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      currentCart.push({ item, quantity: 1 });
    }

    this._cartSubject$.next(currentCart);
    console.log(`Added ${item.name} to cart`);
  }

  // Additional methods like removeFromCart, clearCart can be added as needed
}
