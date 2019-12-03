import { Component} from '@angular/core';
import { throwError } from 'rxjs';
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
    selector: 'app-article-new',
    templateUrl: './article-new.component.html',
    styleUrls: ['./article.component.css']
})

export class ArticleNewComponent {

    article = new Article;
    submitted: boolean = false;

    constructor(private articleService: ArticleService) {}

    createArticle(article: Article) {
        this.submitted = true;
        this.articleService.createArticle(article)
            .subscribe(data => { return true },
                error => {
                    return throwError(error);
                });
    }
}