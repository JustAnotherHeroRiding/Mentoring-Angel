import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subscription,
  of,
  timer,
} from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  isOrdering: boolean;
}

export type OrderStatus =
  | 'Order Placed'
  | 'Preparing'
  | 'Almost Done'
  | 'Delivering'
  | 'Delivered';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  status: OrderStatus;
}

export type Categories = 'Pizza' | 'Pasta' | 'Asian';

export type ExtendedCategories = 'All' | Categories;

export const OrderStatuses: OrderStatus[] = [
  'Order Placed',
  'Preparing',
  'Almost Done',
  'Delivering',
  'Delivered',
];

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menu: Record<Categories, MenuItem[]> = {
    Pizza: [
      { id: 1, name: 'Margherita', price: 10, isOrdering: false },
      { id: 2, name: 'Pepperoni', price: 12, isOrdering: false },
    ],
    Pasta: [
      { id: 3, name: 'Spaghetti Carbonara', price: 15, isOrdering: false },
      { id: 4, name: 'Penne Arrabiata', price: 14, isOrdering: false },
    ],
    Asian: [
      { id: 5, name: 'Rice', price: 8, isOrdering: false },
      { id: 6, name: 'Noodles', price: 9, isOrdering: false },
    ],
  };

  private _cartSubject$ = new BehaviorSubject<CartItem[]>(
    this.getInitialCart()
  );

  public cart$ = this._cartSubject$.asObservable();
  private itemUpdateSubscriptions: Map<number, Subscription> = new Map();

  constructor() {}

  initializeCart(): void {
    this._cartSubject$.value.forEach((item, index) => {
      if (
        item.status !== 'Delivered' &&
        !this.itemUpdateSubscriptions.has(index)
      ) {
        this.startStatusUpdate(index);
      }
    });
  }

  private getInitialCart(): CartItem[] {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }

  getCategories(): Observable<ExtendedCategories[]> {
    return of(Object.keys(this.menu) as ExtendedCategories[]);
  }

  getMenuItems(category: ExtendedCategories): Observable<MenuItem[]> {
    if (category === 'All' || category === undefined) {
      let allItems = Object.values(this.menu).flat();
      return of(allItems).pipe(
        delay(1000),
        tap(() => console.log('Fetched all items.', allItems))
      );
    } else {
      return of(this.menu[category]).pipe(
        delay(1000),
        tap(() => console.log(`Fetched ${category} items`))
      );
    }
  }

  addToCart(item: MenuItem, amount: number): void {
    let currentCart = this._cartSubject$.value;

    currentCart.push({ item, quantity: amount, status: 'Order Placed' });
    this.startStatusUpdate(currentCart.length - 1); // Start status update for the new item

    this._cartSubject$.next(currentCart);
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }

  private startStatusUpdate(cartItemIndex: number): void {
    let currentCart = this._cartSubject$.value;
    let currentItem = currentCart[cartItemIndex];
    let currentStatusIndex = OrderStatuses.indexOf(currentItem.status);

    // Check if the current status is valid and not the last one
    if (
      currentStatusIndex === -1 ||
      currentStatusIndex === OrderStatuses.length - 1
    ) {
      return; // Either the status is not in the array, or it's already 'Delivered'
    }
    // So that refresh spam does not create an instant status update, the timer will start 3 seconds
    // after being initialized
    const updateInterval$ = timer(3000, 3000).pipe(
      tap(() => {
        let item = this._cartSubject$.value[cartItemIndex];

        if (currentStatusIndex < OrderStatuses.length - 1) {
          item.status = OrderStatuses[++currentStatusIndex];
          this._cartSubject$.next(this._cartSubject$.value);
          localStorage.setItem(
            'cart',
            JSON.stringify(this._cartSubject$.value)
          );
        }
      })
    );

    const subscription = updateInterval$.subscribe({
      next: () => {
        if (currentStatusIndex >= OrderStatuses.length - 1) {
          subscription.unsubscribe();
          this.itemUpdateSubscriptions.delete(cartItemIndex);
        }
      },
    });

    this.itemUpdateSubscriptions.set(cartItemIndex, subscription);
  }

  clearCart(): void {
    this._cartSubject$.next([]);
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify([]));
  }

  // Additional methods like removeFromCart, clearCart can be added as needed
}
