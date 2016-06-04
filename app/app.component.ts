import { Component } from '@angular/core';
import { BlogPostListComponent } from './blogpost-list.component'
import { BlogPostService } from './blogpost.service'

@Component({
    selector: 'christian-fredh-com',
    templateUrl: 'app/app.component.html',
    directives: [BlogPostListComponent],
    providers: [BlogPostService],
})
export class AppComponent { }
