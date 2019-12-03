import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleShowComponent } from './article/article-show.component';
import { ArticleNewComponent } from './article/article-new.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleService } from './article/article.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleShowComponent,
    ArticleNewComponent,
    HomepageComponent,   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
