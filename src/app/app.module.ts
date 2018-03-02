import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CurrentlyReadingComponent } from './currently-reading/currently-reading.component';
import { UserBooksComponent } from './user-books/user-books.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { UserLibraryComponent } from './user-library/user-library.component';


import { BookService } from './services/book-service';


@NgModule({
  declarations: [
    AppComponent,
    CurrentlyReadingComponent,
    UserBooksComponent,
    BookCollectionComponent,
    UserLibraryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ BookService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
