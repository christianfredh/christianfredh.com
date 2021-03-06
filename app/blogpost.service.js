"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var BlogPostService = (function () {
    function BlogPostService(http) {
        this.http = http;
    }
    BlogPostService.prototype.getBlogPosts = function () {
        var _this = this;
        var sameDate = new Date();
        return this.http
            .get('https://api.github.com/repos/christianfredh/christianfredh.com/contents/blogposts')
            .toPromise()
            .then(function (response) {
            var jsonResult = response.json();
            var blogPosts = [];
            var _loop_1 = function() {
                var element = jsonResult[index];
                var title = element.name.replace('.md', '');
                var blogPost = {
                    id: element.name,
                    title: title,
                    created: sameDate,
                    lastEdited: sameDate,
                    markdownContent: ''
                };
                _this.http
                    .get(element.download_url)
                    .toPromise()
                    .then(function (reponse) {
                    blogPost.markdownContent = reponse.text();
                })
                    .catch(_this.handleError);
                blogPosts.push(blogPost);
            };
            for (var index = 0; index < jsonResult.length; index++) {
                _loop_1();
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
    };
    BlogPostService.prototype.getBlogPost = function (id) {
        var sameDate = new Date();
        return Promise.resolve({
            id: id,
            title: 'Latest blog post ' + id,
            created: sameDate,
            lastEdited: sameDate,
            markdownContent: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        });
    };
    BlogPostService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    BlogPostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BlogPostService);
    return BlogPostService;
}());
exports.BlogPostService = BlogPostService;
//# sourceMappingURL=blogpost.service.js.map