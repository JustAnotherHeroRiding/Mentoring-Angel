import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay, tap } from 'rxjs';
import { CartItem, MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  cart: CartItem[] = [];
  isLoadingCart = new BehaviorSubject<boolean>(false);
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.isLoadingCart.next(true);
    this.menuService.cart$.pipe(delay(800)).subscribe((cart) => {
      this.cart = cart;
      this.isLoadingCart.next(false);
      this.menuService.initializeCart();
    });
  }

  clearCart() {
    this.menuService.clearCart();
  }
}
