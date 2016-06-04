import { Injectable } from '@angular/core'
import { BlogPost } from './blogpost'

@Injectable()
export class BlogPostService {
    
    public getBlogPosts() : Promise<BlogPost[]> {
        return Promise.resolve([
            { 
                id: 'first', 
                title: 'Latest blog post',
                created: new Date(),
                updated: new Date(),
                markdownContent: ''
            },
            { 
                id: 'second', 
                title: 'A bit older one',
                created: new Date(),
                updated: new Date(),
                markdownContent: ''
            }
        ]);
    }
    
    public getBlogPost(id: string) : Promise<BlogPost> {
        return Promise.resolve({ 
            id: 'first', 
            title: 'Latest blog post',
            created: new Date(),
            updated: new Date(),
            markdownContent: ''
        });
    }
}