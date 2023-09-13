import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

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
import { DevOfCodesComponent } from './dev-of-codes/dev-of-codes.component';

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
    DevOfCodesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'blog', component: BlogPostsComponent },
      { path: 'blog/:id', component: BlogPostComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'devOfCodes', component: DevOfCodesComponent},
      { path: 'experience', component: ExperienceComponent },
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
