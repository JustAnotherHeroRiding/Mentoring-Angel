import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NEWS_API_KEY } from 'src/env';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NewsArticleMock, newsArticle, mockNews } from '../utils/news-api-params';



interface newsResponse {
  articles: newsArticle[];
}



/* https://newsapi.org/docs/endpoints/top-headlines API Docs */
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private readonly endpoint = 'https://newsapi.org/v2/top-headlines';
  private readonly API_KEY = NEWS_API_KEY;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = this.createHeaders();
  }

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-Api-Key': this.API_KEY,
    });
  }

  getNews(country = 'us'): Observable<newsResponse> {
    const headers = this.headers;
    return this.http.get<any>(`${this.endpoint}?country=${country}`, {
      headers,
    });
  }

  getNewsMock(): Observable<NewsArticleMock[]> {
    return of(mockNews);
  }

  getNewsById(id: number): Observable<NewsArticleMock | undefined> {
    const news = mockNews.find((article) => article.id === id);
    return of(news);
  }
}
