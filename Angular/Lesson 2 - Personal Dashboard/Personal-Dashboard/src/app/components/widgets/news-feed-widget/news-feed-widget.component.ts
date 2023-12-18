import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { RealNewsResponseObject, newsArticle } from 'src/app/utils/news-api-params';


@Component({
  selector: 'app-news-feed-widget',
  templateUrl: './news-feed-widget.component.html',
  styleUrls: ['./news-feed-widget.component.scss'],
})
export class NewsFeedWidgetComponent implements OnInit {
  constructor(private newsService: NewsService) {}
  articles: newsArticle[] = [];

  cleanArticleContent(content: string): string {
    const truncateIndicator = content.lastIndexOf("[+");
    if (truncateIndicator !== -1) {
      return content.substring(0, truncateIndicator);
    }
    return content;
  }
  

  ngOnInit() {
   /*  this.newsService.getNews().subscribe({
      next: (articles) => (this.articles = articles.articles),
      error: (err) => console.error(err),
      complete: () => console.log(this.articles),
    }); */
    this.articles = RealNewsResponseObject
  }
}
