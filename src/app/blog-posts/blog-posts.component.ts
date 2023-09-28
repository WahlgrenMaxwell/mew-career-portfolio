import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) {}

  blogPosts$ : Observable<any> | undefined;
  
  ngOnInit() : void {
    this.blogPosts$ = this.contentfulService.getEntriesByType("blogPost");
  }
}
