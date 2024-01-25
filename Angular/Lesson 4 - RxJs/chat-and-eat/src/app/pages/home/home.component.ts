import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  Categories,
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
  cart = [];
  _isMenuLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  categories: Categories[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe((items) => {
      this.menu = items;
      this._isMenuLoading$.next(false);
    });
    this.menuService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getCategory(category: Categories) {
    this._isMenuLoading$.next(true);
    this.menuService.getMenuItems(category).subscribe((items) => {
      this.menu = items;
      this._isMenuLoading$.next(false);
    });
  }
}
