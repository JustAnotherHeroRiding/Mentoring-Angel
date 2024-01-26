import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay, tap } from 'rxjs';
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
  cart: CartItem[] = [];
  _isMenuLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  categories: ExtendedCategories[] = [];

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

    this.menuService.cart$
      .pipe(
        delay(800)
      )
      .subscribe((cart) => {
        this.cart = cart;
      });
  }

  getCategory(category: ExtendedCategories) {
    this._isMenuLoading$.next(true);
    this.menuService.getMenuItems(category).subscribe((items) => {
      this.menu = items;
      this._isMenuLoading$.next(false);
    });
  }

  addToCart(item: MenuItem) {
    this.menuService.addToCart(item);
  }
}
