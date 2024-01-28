import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { CartItem, MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  cart: CartItem[] = [];
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.cart$.pipe(delay(800)).subscribe((cart) => {
      this.cart = cart;
      this.menuService.initializeCart();
    });
  }

  clearCart() {
    this.menuService.clearCart();
  }
}
