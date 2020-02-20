import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { BooksService } from "../../services/books.service";
import { Books } from "../../models/books";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { CatesService } from "../../services/cates.service";
import { UploadBookImageService } from "../../services/upload-book-image.service";
import { Cates } from "../../models/cates";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  public books: Books[] = [];
  constructor(public dialog: MatDialog, public booksService: BooksService) {}

  displayedColumns: string[] = [
    "id",
    "image",
    "title",
    "author",
    "publisher",
    "publicationDate",
    "isbn",
    "language",
    "numberOfPages",
    "format",
    "shippingWeight",
    "listPrice",
    "ourPrice",
    "inStockNumber",
    "description",
    "category",
    "action"
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogAddMyBook() {
    let dialogRef = this.dialog.open(DialogAddMyBookDialog, {
      width: "450px"
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getBooksList();
    });
  }

  openDialogDeleteMyBook(id: number): void {
    const dialogRef = this.dialog.open(DialogDeleteMyBookDialog, {
      width: "550px",
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getBooksList();
    });
  }

  openDialogUpdateMyBook(book: Books): void {
    const dialogRef = this.dialog.open(DialogUpdateMyBookDialog, {
      width: "450px",
      data: book
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getBooksList();
    });
  }

  getBooksList() {
    this.booksService.getBooksList().subscribe(
      res => {
        
        this.dataSource.data = res.json();
      },
      err => {
        
      }
    );
  }

  ngOnInit() {
    this.getBooksList();
    this.dataSource.paginator = this.paginator;
  }
}

// ADD NEW BOOK ------------------------------------------------------

@Component({
  selector: "add-my-book",
  templateUrl: "dialog-add-my-book.html"
})
export class DialogAddMyBookDialog implements OnInit {
  public newBook: Books = new Books();
  public cates: Cates[];
  public cateId: number;

  constructor(
    public catesService: CatesService,
    public booksService: BooksService,
    public uploadBookImageService: UploadBookImageService,
    public dialogRef: MatDialogRef<DialogAddMyBookDialog>
  ) {}

  onAddNewBook() {
    this.booksService.sendBook(this.newBook, this.cateId).subscribe(
      res => {
        
        this.uploadBookImageService.upload(
          
          JSON.parse(JSON.parse(JSON.stringify(res))._body).id
        );
        console.log(
          "ID la " + JSON.parse(JSON.parse(JSON.stringify(res))._body).id
        );
        console.log(res.json());
        this.dialogRef.close();
      },
      err => {
        console.log(err);
      }
    );
  }
  fileChange(e) {
    
    this.uploadBookImageService.fileChangeEvent(e);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.catesService.getCatesList().subscribe(
      res => {
        this.cates = res.json();
      },
      err => {
        
      }
    );
  }
}

// DELETE BOOK POP UP -----------------------------------------------------------------

@Component({
  selector: "delete-my-book",
  templateUrl: "dialog-delete-my-book.html"
})
export class DialogDeleteMyBookDialog implements OnInit {
  public id: number;
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteMyBookDialog>,
    public booksService: BooksService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {
    this.id = this.data;
  }

  onDeleteBook(): void {
    this.booksService.deleteBook(this.id).subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {}
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}

// UPDATE BOOK POP UP -----------------------------------------------------------------

@Component({
  selector: "update-my-book",
  templateUrl: "dialog-update-my-book.html"
})
export class DialogUpdateMyBookDialog implements OnInit {
  public newBook: Books = new Books();
  public cates: Cates[];
  public cateId: number;

  constructor(
    public dialogRef: MatDialogRef<DialogUpdateMyBookDialog>,
    public catesService: CatesService,
    public booksService: BooksService,
    public uploadBookImageService: UploadBookImageService,
    @Inject(MAT_DIALOG_DATA) public data: Books
  ) {
    this.newBook = this.data;
  }

  onAddNewBook(catesId: number) {
    this.booksService.sendBook(this.newBook, catesId).subscribe(
      res => {
        this.uploadBookImageService.modify(catesId);
        this.dialogRef.close();
      },
      err => {
       
      }
    );
  }
  fileChange(e) {
    
    this.uploadBookImageService.fileChangeEvent(e);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.catesService.getCatesList().subscribe(
      res => {
        this.cates = res.json();
      },
      err => {
      }
    );
  }
}
