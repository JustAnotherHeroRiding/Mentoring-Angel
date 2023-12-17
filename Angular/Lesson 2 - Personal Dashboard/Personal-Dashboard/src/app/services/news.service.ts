import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface NewsArticle {
  id: number;
  title: string;
  content: string;
  author: string;
  datePublished: Date;
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private mockNews: NewsArticle[] = [
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
      datePublished: new Date()
    }
  ];

  constructor() {}

  getNews(): Observable<NewsArticle[]> {
    return of(this.mockNews);
  }

  getNewsById(id: number): Observable<NewsArticle | undefined> {
    const news = this.mockNews.find((article) => article.id === id);
    return of(news);
  }
}
