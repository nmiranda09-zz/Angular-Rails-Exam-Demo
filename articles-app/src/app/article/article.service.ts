import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Article } from './article';


@Injectable()

export class ArticleService {
    headers: Headers;
    options: RequestOptions;

    private articlesUrl = 'http://localhost:3000/articles';

    constructor (private http: Http) {
        this.headers = new Headers({'Content-Type':'application/json'});
        this.options = new RequestOptions({headers: this.headers});
    }

    getArticles(): Observable<Article[]> {
        return this.http.get(this.articlesUrl)
        .pipe(map((response: Response) => <Article[]>response.json()));
    }

    getArticle(id: number) {
        return this.http.get(this.articlesUrl + "/" + id + '.json');
    }

    createArticle(article: Article): Observable<Article[]> {
        return this.http.post(this.articlesUrl, JSON.stringify(article),
            this.options).pipe(map((response: Response) => response.json()));
    }

    deleteArticle(id: number):  Observable<Article> {
        const url = `${this.articlesUrl}/${id}`;
        
        return this.http.delete(url, this.options)
        .pipe(map(this.extractData),catchError(this.handleError));
    }

    updateArticle(article: Article):  Observable<Article> {
        const url = `${this.articlesUrl}/${article.id}`;

        return this.http.put(url,  JSON.stringify(article),
        this.options).pipe(map(this.extractData),catchError(this.handleError));
    }

    private extractData(response: Response) {
        let body = response.json();
        return body || {};
    }

    private handleError(error: any): Promise<any> {
       console.log('An error occured.', error);
       return Promise.reject(error.message || error);
    }
}

