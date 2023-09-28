import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';

export type Root = {
  kind: string
  totalItems: number
  items: Array<{
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: {
      title: string
      subtitle: string
      authors: Array<string>
      publisher: string
      publishedDate: string
      description: string
      industryIdentifiers: Array<{
        type: string
        identifier: string
      }>
      readingModes: {
        text: boolean
        image: boolean
      }
      pageCount: number
      printType: string
      categories: Array<string>
      averageRating: number
      ratingsCount: number
      maturityRating: string
      allowAnonLogging: boolean
      contentVersion: string
      panelizationSummary: {
        containsEpubBubbles: boolean
        containsImageBubbles: boolean
      }
      imageLinks: {
        smallThumbnail: string
        thumbnail: string
      }
      language: string
      previewLink: string
      infoLink: string
      canonicalVolumeLink: string
    }
    saleInfo: {
      country: string
      saleability: string
      isEbook: boolean
      listPrice: {
        amount: number
        currencyCode: string
      }
      retailPrice: {
        amount: number
        currencyCode: string
      }
      buyLink: string
      offers: Array<{
        finskyOfferType: number
        listPrice: {
          amountInMicros: number
          currencyCode: string
        }
        retailPrice: {
          amountInMicros: number
          currencyCode: string
        }
        giftable: boolean
      }>
    }
    accessInfo: {
      country: string
      viewability: string
      embeddable: boolean
      publicDomain: boolean
      textToSpeechPermission: string
      epub: {
        isAvailable: boolean
        acsTokenLink: string
      }
      pdf: {
        isAvailable: boolean
      }
      webReaderLink: string
      accessViewStatus: string
      quoteSharingAllowed: boolean
    }
    searchInfo: {
      textSnippet: string
    }
  }>
}

@Injectable({
  providedIn: 'root'
})
export class GooglebooksService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  public book : Observable<Root> = of();

  getById(volumeId: string): Observable<Root> {
    this.book = this.http.get<Root>(`${this.API_PATH}/?q=isbn:${volumeId}`);
    return this.book;
  }
}