import { Injectable } from '@angular/core';
import { POLYGON_API_KEY } from 'src/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { openCloseResult } from '../utils/stock-data-types';

/* API DOCS https://polygon.io/docs/stocks/getting-started */

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  private readonly API_KEY = POLYGON_API_KEY;
  private readonly endpoint = 'https://api.polygon.io';
  private readonly headers: HttpHeaders;
  private readonly dailyOpenClose = '/v1/open-close/';
  private readonly allTickers = '/v3/reference/tickers';

  constructor(private http: HttpClient) {
    this.headers = this.createHeaders();
  }

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.API_KEY}`,
    });
  }

  /*
  The stock ticker is the short name of the stock, like AAPL or MSFT 
  The date of the requested open/close in the format YYYY-MM-DD.
 */
  getDailyOpenClose(stockTicker: string, date: string): Observable<any> {
    return this.http.get(
      `${this.endpoint}${this.dailyOpenClose}${stockTicker}/${date}?adjusted=true&apiKey=${this.API_KEY}`
    );
  }

  getAllTickers(): Observable<any> {
    return this.http.get(`${this.endpoint}${this.allTickers}`, {
      headers: this.headers,
    });
  }
}
