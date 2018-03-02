import { Component, OnInit } from '@angular/core';
import { BookService } from  '../services/book-service';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {
    ToRead: Array<any> = [];

    constructor() { }

    ngOnInit() {
        this.ToRead = JSON.parse(localStorage.getItem('ToRead'));
    }


}
