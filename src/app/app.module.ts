import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ToHtmlPipe } from './to-html.pipe';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { SacredTextsComponent } from './sacred-texts/sacred-texts.component';
import { SacredTextComponent } from './sacred-text/sacred-text.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    HomeComponent,
    FooterComponent,
    BlogPostComponent,
    ToHtmlPipe,
    BlogPostsComponent,
    SacredTextsComponent,
    SacredTextComponent,
    WrongRouteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog', component: BlogPostsComponent },
      { path: 'blog/:id', component: BlogPostComponent },
      { path: 'sacredtexts', component: SacredTextsComponent },
      { path: 'sacredtext/:id/:isbn', component: SacredTextComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: '**', component: WrongRouteComponent }
      ],
      {
        scrollPositionRestoration: 'enabled'
      }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
