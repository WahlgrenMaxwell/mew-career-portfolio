import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs/internal/observable/from';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken
  });

  getUnreadBooks() {
    const promise = this.client.getEntries({
      content_type: "sacredText",
      "fields.read": false,
      "fields.reading": false
    });
    return from(promise);
  }

  getReadingBooks() {
    const promise = this.client.getEntries({
      content_type: "sacredText",
      "fields.reading": true
    });
    return from(promise);
  }

  getReadBooks() {
    const promise = this.client.getEntries({
      content_type: "sacredText",
      "fields.read": true,
      "fields.reading": false
    });
    return from(promise);
  }

  getEntriesByTypeAndFeature(type: string, query: object) {
    const promise = this.client.getEntries(Object.assign({
      content_type: type
    }, query))
    .then(res => res.items);
    return from(promise);
  }

  getEntriesByType(type: string) {
    const promise = this.client.getEntries({content_type: type});
    return from(promise);
  }

  getEntryById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }
}
