import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-currently-reading',
  templateUrl: './currently-reading.component.html',
  styleUrls: ['./currently-reading.component.css']
})
export class CurrentlyReadingComponent implements OnInit {

    ToRead: Array<any> = [];

  constructor() { }

    ngOnInit() {
        this.ToRead = localStorage.getItem('ToRead');
    }


}
