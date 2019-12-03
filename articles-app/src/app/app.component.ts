import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title = 'articles-app';
    private toggle : boolean = false;

    clickEvent(event){
        this.toggle = !this.toggle;       
     }
}
