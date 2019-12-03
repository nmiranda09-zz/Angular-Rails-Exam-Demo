import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
    articles: Article[];

    constructor(
        private articleService: ArticleService,
        private router: Router
    ) { }

    ngOnInit() {
        let t = timer(0, 5000);
        t.subscribe(() => this.getArticles());
    }

    getArticles() {
        this.articleService.getArticles()
        .subscribe(articles => this.articles = articles);
    }

    goToShow(article: Article): void {
        let articleLink = ['/articles', article.id];
        this.router.navigate(articleLink);
    }

}
