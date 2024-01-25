import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  menu: string[] = [];
  cart = [];
  isMenuLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe((items) => {
      this.menu = items;
      this.isMenuLoading.next(false);
    });
  }
}
