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
var blogpost_service_1 = require('./blogpost.service');
var BlogPostListComponent = (function () {
    function BlogPostListComponent(blogPostService) {
        this.blogPostService = blogPostService;
    }
    BlogPostListComponent.prototype.ngOnInit = function () {
        this.blogPosts = this.blogPostService.getBlogPosts();
    };
    BlogPostListComponent = __decorate([
        core_1.Component({
            selector: 'blogpost-list',
            templateUrl: 'app/blogpost-list.component.html'
        }), 
        __metadata('design:paramtypes', [blogpost_service_1.BlogPostService])
    ], BlogPostListComponent);
    return BlogPostListComponent;
}());
exports.BlogPostListComponent = BlogPostListComponent;
//# sourceMappingURL=blogpost-list.component.js.map