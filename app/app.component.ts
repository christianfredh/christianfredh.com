import { Component } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated'
import { HTTP_PROVIDERS } from '@angular/http';
import { BlogPostListComponent } from './blogpost-list.component'
import { BlogPostComponent } from './blogpost.component'
import { BlogPostService } from './blogpost.service'

@Component({
    selector: 'christian-fredh-com',
    templateUrl: 'app/app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        BlogPostListComponent
    ],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        BlogPostService
    ],
})
@RouteConfig([
    { path: '/', name: 'BlogPosts', component: BlogPostListComponent, useAsDefault: true },
    { path: '/:id', name: 'BlogPost', component: BlogPostComponent }
])
export class AppComponent { }
