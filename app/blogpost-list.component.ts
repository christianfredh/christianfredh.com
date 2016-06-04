import { Component, OnInit } from '@angular/core';
import { BlogPost } from './blogpost';
import { BlogPostService } from './blogpost.service'

@Component({
    selector: 'blogpost-list',
    templateUrl: 'app/blogpost-list.component.html'
})
export class BlogPostListComponent implements OnInit {
    blogPosts: Promise<BlogPost[]>;
    
    constructor(private blogPostService: BlogPostService) { }
    
    ngOnInit() {
        this.blogPosts = this.blogPostService.getBlogPosts();
    }
}