import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { BlogPost } from './blogpost';
import { BlogPostService } from './blogpost.service';

@Component({
    selector: 'blogpost',
    templateUrl: 'app/blogpost.component.html',
})
export class BlogPostComponent implements OnInit {
    blogPost: BlogPost;
    
    constructor(
        private routeParams : RouteParams,
        private blogPostService : BlogPostService
    ) { }
    
    ngOnInit() {
        let id = this.routeParams.get('id');
        
        this.blogPostService
            .getBlogPost(id)
            .then(blogPost => this.blogPost = blogPost);
    }
}