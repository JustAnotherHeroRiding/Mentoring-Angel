import { Component, OnInit } from '@angular/core';
import { NewsArticle, NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-feed-widget',
  templateUrl: './news-feed-widget.component.html',
  styleUrls: ['./news-feed-widget.component.scss'],
})
export class NewsFeedWidgetComponent implements OnInit {
  constructor(private newsService: NewsService) {}
  articles: NewsArticle[] = [];

  ngOnInit() {
    this.newsService.getNews().subscribe({
      next: (articles) => (this.articles = articles),
      error: (err) => console.error(err),
    });
  }
}
