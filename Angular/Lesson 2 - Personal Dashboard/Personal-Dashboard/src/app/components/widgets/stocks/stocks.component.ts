import { Component } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';
import { getYesterdayDate } from 'src/app/utils/dates';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
})
export class StocksComponent {
  stocksData: any;
  tickers: string[] = [];
  constructor(private stocksService: StocksService) {}

  getYesterday() {
    return getYesterdayDate();
  }

  getOpenClose(stockTicker: string, date: string) {
    this.stocksService.getDailyOpenClose(stockTicker, date).subscribe({
      next: (data) => {
        this.stocksData = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getAllTickers() {
    this.stocksService.getAllTickers().subscribe({
      next: (data) => {
        this.tickers = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
