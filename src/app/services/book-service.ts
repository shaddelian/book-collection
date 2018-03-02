import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../book';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/vnd.api+json' })
};


@Injectable()
export class BookService {

  private booksUrl = 'http://localhost:8080/v1/books?include=photos';

  constructor(private http: HttpClient) { }

    getBooks (): Observable<Book[]> {
        return this.http.get<Book[]>(this.booksUrl)
            .pipe(
                map(books => books)
            );
    }

    getphoto (id){
        return this.http.get('http://localhost:8080/v1/photos/'+ id)
            .pipe(
                map(photo => photo)
            );
    }


    getAuthor (id){
        return this.http.get('http://localhost:8080/v1/authors/'+ id)
            .pipe(
                map(author => author)
            );
    }

}
