import { Component, OnInit } from '@angular/core'
import { BlogPost } from './blogpost'
import { BlogPostService } from './blogpost.service'

@Component({
    selector: 'blogpost',
    templateUrl: 'app/blogpost.component.html'
})
export class BlogPostComponent implements OnInit {
    blogPost: Promise<BlogPost>;
    
    constructor(private blogPostService : BlogPostService) { }
    
    ngOnInit() {
        this.blogPost = this.blogPostService.getBlogPost('whatever right now');
    }
}