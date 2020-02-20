import { Component, OnInit, OnDestroy} from "@angular/core";
import { BookService } from "src/app/services/book.service";
import { Params, ActivatedRoute, Router } from "@angular/router";
import { Http } from "@angular/http";
import { Books } from "src/app/models/books";
import { Subscription } from 'rxjs';
import { CatesService } from 'src/app/services/cates.service';
import { Cates } from 'src/app/models/cates';

@Component({
  selector: "app-book-list-category",
  templateUrl: "./book-list-category.component.html",
  styleUrls: ["./book-list-category.component.css"]
})
export class BookListCategoryComponent implements OnInit,OnDestroy {
  // public catesId: number;
  public books: Books = new Books();
  public cate:Cates=new Cates();
  public dataFetched = false;
  public subscription:Subscription;

  constructor(
    public bookService: BookService,
    public http: Http,
    public route: ActivatedRoute,
    public catesService:CatesService
  ) {}


    handleParams(){
     this.subscription= this.route.params.subscribe(data=>{
        let id=data.id;
        this.bookService.getBookListByCategory(id).subscribe(
          res => {
            
            this.books = res.json();
            
            this.dataFetched = true;
          },
          error => {
            
          });
        this.catesService.getCatesDetail(id).subscribe(
          res=>{
            this.cate=res.json();
          },error=>{
           
          }
        );
        
      });
    }

    // handleParamsRouteBySnapshot(){    
    //      let id=(+this.route.snapshot.params['id']);
    //      this.bookService.getBookListByCategory(id).subscribe(
    //        res => {            
    //          this.books = res.json();
    //          this.dataFetched = true;
    //        },
    //        error => {
    //          
    //        }
    //      );  
    //  }


  ngOnInit() {    
      this.handleParams();
      let check=true;
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
