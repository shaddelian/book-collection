import { Component, OnInit } from '@angular/core';
import { BookService } from  '../services/book-service';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css']
})
export class BookCollectionComponent implements OnInit {

  booksList: Array<any> = [];

  constructor( private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks()
        .subscribe(books => {
          for(let key in books.data){
            this.booksList.push(books.data[key]);
              this.bookService.getphoto(books.data[key].relationships.photos.data[0].id)
                  .subscribe(photo => books.data[key].relationships.photos.links.url = photo.data.attributes.uri);
          }
          console.log(this.booksList);
        });

  }

}
