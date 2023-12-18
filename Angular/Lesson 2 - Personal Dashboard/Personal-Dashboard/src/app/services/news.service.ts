import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NEWS_API_KEY } from 'src/env';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { newsArticle } from '../utils/news-api-params';

export interface NewsArticleMock {
  id: number;
  title: string;
  content: string;
  author: string;
  datePublished: Date;
}

interface newsResponse {
  articles: newsArticle[];
}

const mockNews: NewsArticleMock[] = [
  {
    id: 1,
    title: 'First News',
    content: 'Content of the first news',
    author: 'Author 1',
    datePublished: new Date(),
  },
  {
    id: 2,
    title: 'Second News',
    content: 'Content of the second news',
    author: 'Author 2',
    datePublished: new Date(),
  },
  {
    id: 3,
    title: 'Third News',
    content: 'Content of the third news',
    author: 'Author 3',
    datePublished: new Date(),
  },
];
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
