import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BlogPost } from './blogpost';

@Injectable()
export class BlogPostService {
    
    constructor(private http : Http) {
        
    }
    
    public getBlogPosts() : Promise<BlogPost[]> {
        
        var sameDate = new Date();
        
        return this.http
            .get('https://api.github.com/repos/christianfredh/christianfredh.com/contents/blogposts')
            .toPromise()
            .then(response => {
                let jsonResult = response.json();
                let blogPosts: BlogPost[] = [];
                
                for (var index = 0; index < jsonResult.length; index++) {
                    let element = jsonResult[index];
                    
                    let title = element.name.replace('.md', '');
                    
                    let blogPost : BlogPost = {
                        id: element.name, 
                        title: title,
                        created: sameDate,
                        lastEdited: sameDate,
                        markdownContent: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                    };
                    
                    this.http
                        .get(element.download_url)
                        .toPromise()
                        .then(reponse => {
                            blogPost.markdownContent = reponse.text();
                        })
                        .catch(this.handleError);
                    
                    
                    blogPosts.push(blogPost);
                    
                } 
                return blogPosts;
            })
            .catch(this.handleError);
        
        // var sameDate = new Date();
        
        // return Promise.resolve([
        //     { 
        //         id: 'first', 
        //         title: 'Latest blog post',
        //         created: sameDate,
        //         lastEdited: sameDate,
        //         markdownContent: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        //     },
        //     { 
        //         id: 'second', 
        //         title: 'A bit older one',
        //         created: new Date(),
        //         lastEdited: new Date(),
        //         markdownContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        //     }
        // ]);
    }
    
    public getBlogPost(id: string) : Promise<BlogPost> {
        
        var sameDate = new Date();
        return Promise.resolve({ 
            id: id, 
            title: 'Latest blog post ' + id,
            created: sameDate,
            lastEdited: sameDate,
            markdownContent: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        });
    }
    
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}