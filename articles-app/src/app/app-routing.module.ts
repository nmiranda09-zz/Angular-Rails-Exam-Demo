import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { ArticleShowComponent } from './article/article-show.component';
import { ArticleNewComponent } from './article/article-new.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'articles', component: ArticleComponent },
    { path: 'articles/new', component: ArticleNewComponent },
    { path: 'articles/:id', component: ArticleShowComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}