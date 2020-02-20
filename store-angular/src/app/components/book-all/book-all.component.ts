import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/services/book.service";
import { Books } from "src/app/models/books";

@Component({
  selector: "app-book-all",
  templateUrl: "./book-all.component.html",
  styleUrls: ["./book-all.component.css"]
})
export class BookAllComponent implements OnInit {
  public books: Books = new Books();
  dataFetched = false;
  sortBy: string = "---------------Sort By---------------";
  constructor(public bookService: BookService) {}

  getAllBooks() {
    this.bookService.getAllBooks().subscribe(
      res => {
        this.books = res.json();
        this.dataFetched = true;
      },
      err => {}
    );
  }

  changed(e) {
    this.bookService.sortBy(e).subscribe(
      res => {
        this.books = res.json();
      },
      err => {}
    );
  }

  ngOnInit() {
    this.getAllBooks();
  }
}
