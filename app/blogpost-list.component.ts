import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated'
import { BlogPost } from './blogpost';
import { BlogPostService } from './blogpost.service'

@Component({
    selector: 'blogpost-list',
    templateUrl: 'app/blogpost-list.component.html',
    directives: [ROUTER_DIRECTIVES],
})
export class BlogPostListComponent implements OnInit {
    blogPosts: Promise<BlogPost[]>;
    
    constructor(private blogPostService: BlogPostService) { }
    
    ngOnInit() {
        this.blogPosts = this.blogPostService.getBlogPosts();
    }
}