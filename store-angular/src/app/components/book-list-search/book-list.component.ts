import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public bookList:Books[]=[];
  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if(params['keyword']){
        this.bookList=JSON.parse(params['keyword']);
      }
    })
  }

}
