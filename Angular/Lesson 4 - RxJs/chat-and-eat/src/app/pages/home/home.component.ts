import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay, tap, Subject, of, switchMap } from 'rxjs';
import {
  CartItem,
  Categories,
  ExtendedCategories,
  MenuItem,
  MenuService,
} from 'src/app/Services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  menu: MenuItem[] = [];
  cart: CartItem[] | undefined = undefined;
  _isMenuLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  private categoryChangeSubject = new Subject<ExtendedCategories>();

  categories: ExtendedCategories[] = [];

  private itemSubjects: Map<number, Subject<MenuItem>> = new Map();

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuItems('All').subscribe((items) => {
      this.menu = items;
      this._isMenuLoading$.next(false);
    });
    this.menuService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.categories.push('All');
    });

    this.menuService.cart$.pipe(delay(800)).subscribe((cart) => {
      this.cart = cart;
    });

    this.categoryChangeSubject
      .pipe(
        switchMap((category: ExtendedCategories) => {
          this._isMenuLoading$.next(true);
          return this.menuService.getMenuItems(category);
        })
      )
      .subscribe((items) => {
        this.menu = items;
        this._isMenuLoading$.next(false);
      });
  }

  getCategory(category: ExtendedCategories) {
    this.categoryChangeSubject.next(category);
  }

  addToCart(item: MenuItem): void {
    if (!this.itemSubjects.has(item.id)) {
      const itemSubject = new Subject<MenuItem>();
      this.itemSubjects.set(item.id, itemSubject);

      itemSubject
        .pipe(
          switchMap((selectedItem: MenuItem) => {
            this.setOrderingStateForItem(selectedItem.id, true);
            return of(selectedItem).pipe(
              delay(800),
              tap(() => {
                this.menuService.addToCart(selectedItem);
                this.setOrderingStateForItem(selectedItem.id, false);
              })
            );
          })
        )
        .subscribe();
    }

    this.itemSubjects.get(item.id)?.next(item);
  }

  private setOrderingStateForItem(itemId: number, orderingState: boolean) {
    this.menu = this.menu.map((menuItem) => {
      if (menuItem.id === itemId) {
        return { ...menuItem, isOrdering: orderingState };
      }
      return menuItem;
    });
  }
}
