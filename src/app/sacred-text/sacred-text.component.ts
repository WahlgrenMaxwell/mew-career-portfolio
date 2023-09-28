import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Root, GooglebooksService } from '../services/googlebooks.service';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-sacred-text',
  templateUrl: './sacred-text.component.html',
  styleUrls: ['./sacred-text.component.scss']
})
export class SacredTextComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService,
    private googleBooksService: GooglebooksService) { }
  
  book$: Observable<Root> | undefined;
  text$: Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      async params => {
        const id = params['id'];
        const isbn = params['isbn'];
        
        this.text$ = this.contentfulService.getEntryById(id);
        this.book$ = this.googleBooksService.getById(isbn);
      }
    );
  }
}