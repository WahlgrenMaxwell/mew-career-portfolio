import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sacred-texts',
  templateUrl: './sacred-texts.component.html',
  styleUrls: ['./sacred-texts.component.scss']
})
export class SacredTextsComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) {}

  unreadTexts$: Observable<any> | undefined;
  readingText$: Observable<any> | undefined;
  sacredTexts$ : Observable<any> | undefined;
  
  ngOnInit() : void {
    this.unreadTexts$ = this.contentfulService.getUnreadBooks();
    this.readingText$ = this.contentfulService.getReadingBooks();
    this.sacredTexts$ = this.contentfulService.getReadBooks();
  }
}