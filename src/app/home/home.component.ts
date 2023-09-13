import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) {}

  blogPosts$ : Observable<any> | undefined;
  
  ngOnInit() : void {
    this.blogPosts$ = this.contentfulService.getAllEntries();
  }
}
