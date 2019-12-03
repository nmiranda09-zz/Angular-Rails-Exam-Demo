import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Article } from './article';
import { ArticleService } from './article.service';
import { flatMap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
    selector: 'app-article-show',
    templateUrl: './article-show.component.html',
    styleUrls: ['./article.component.css']
})
  
export class ArticleShowComponent implements OnInit {

    id: number;
    routeId: any;
    errorMessage: any;
    updateBtnClicked: boolean = false;
    editBtnClicked: boolean = true;
    returnUrl: string;

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router,
        private articleService: ArticleService
    ){}

    @Input() article: Article;

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.returnUrl = params['returnUrl'] || '/articles';
        });

        this.routeId = this.route.params.subscribe(
            params => {
                this.id = +params['id'];
            }
        )

        let articleRequest = this.route.params.pipe(flatMap((params: Params) => 
            this.articleService.getArticle(+params['id'])));

        articleRequest.subscribe(response => this.article = response.json());
    }

    update(article: Article) {
        this.updateBtnClicked = true;
        this.editBtnClicked = true;

        this.articleService.updateArticle(article)
            .subscribe(data => {return true },
                error => {
                    return throwError(error);
                });
    }

    delete(article: Article) {
        this.articleService.deleteArticle(this.article.id)
            .subscribe(data => { 
                this.router.navigate([this.returnUrl]) 
                }, error => this.errorMessage = error);
    }
}