import { Component, OnInit } from "@angular/core";
import { Books } from "src/app/models/books";
import { Http } from "@angular/http";
import { BookService } from "src/app/services/book.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CartService } from "src/app/services/cart.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { User } from "src/app/models/user";
import { CommentService } from "src/app/services/comment.service";
import { ReplyComment } from 'src/app/models/reply-comment';
import { WishlistCartService } from 'src/app/services/wishlist-cart.service';
import { WishListCartItem } from 'src/app/models/wishlist-cart-item';
import { Likes } from 'src/app/models/likes';

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"]
})
export class BookDetailComponent implements OnInit {
  public bookList: Books[] = [];
  public book: Books = new Books();
  public id: number;
  public numberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public qty: number;
  public addBookSuccess: boolean = false;
  public notEnoughStock: boolean = false;
  public isLoggedIn: boolean;

  public currentUser: User;
  public commentContent: string;
  public commentList:Comment = new Comment();
  public replyCommentList:ReplyComment = new ReplyComment();
  // public comment:Comment = new Comment();
  public qtyLike:number=1;
  public clicked:boolean = false;
  public clickedReply=false;
  public replyCommentContent:string;
  public wishListCartItemList:WishListCartItem[];
  isAddedToCartItemList:boolean=false;
  isAlreadyLiked:boolean=false;
  likesListBasedOnComment:Likes[];
  comment:Comment = new Comment();
  

  constructor(
    public http: Http,
    public _snackBar: MatSnackBar,
    public router: Router,
    public bookService: BookService,
    public cartService: CartService,
    public route: ActivatedRoute,
    public commentService: CommentService,
    public wishlistCartService:WishlistCartService
  ) {
    this.id = +this.route.snapshot.params["id"];
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 10000
    });
  }

  onAddToCart() {
    this.cartService.addItem(this.id, this.qty).subscribe(
      res => {
        this.router.navigate(["/shopping-cart"]);
      },
      err => {
        this.notEnoughStock = true;
      }
    );
  }

  onAddToWishListCart() {
    this.wishlistCartService.addWishListItem(this.id).subscribe(
      res => {
        this.isAddedToCartItemList = true;
        location.reload();
      },
      err => {
        
      }
    );
  }

  getWishListCartItem() {
    this.wishlistCartService.getWishListCartItem().subscribe(
      res => {
       
        this.wishListCartItemList = res.json();      
        
        for (let wishListCartItem of this.wishListCartItemList) {
          if (wishListCartItem.book.id === this.id) {
                 this.isAddedToCartItemList = true;
           }
       }
        
      },
      err => {}
    );
  }

  onRelatedBooks() {
    this.bookService.relatedBooks(this.id).subscribe(
      res => {
        this.bookList = res.json();
      },
      err => {}
    );
  }

  onComment() {
    this.commentService.addComment(this.commentContent, this.id).subscribe(
      res => {
       
        this.getCommentListForBook();
        this.commentContent="";
      },
      err => {}
    );
  }

  onReplyComment(commentId:number) {
    this.commentService.addReplyComment(this.replyCommentContent, commentId).subscribe(
      res => {
        
        this.getCommentListForBook();
        this.replyCommentContent="";
      },
      err => {}
    );
  }

  openSnackBarForComment(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getCommentListForBook() {
    this.commentService.getCommentListForBook(this.id).subscribe(
      res => {
        
        this.commentList=res.json();
      },
      err => {}
    );
  }

  // getReplyCommentListForComment() {
  //   this.commentService.getReplyCommentListForComment(comment).subscribe(
  //     res => {
  //     
  //       this.replyCommentList=res.json();
  //     },
  //     err => {}
  //   );
  // }

  onGetCurrentBooks() {
    this.bookService.getCurrentBook(this.id).subscribe(
      res => {
        this.book = res.json();
      },
      err => {}
    );
  }

  needLogIn() {
    this.router.navigate(["/login"]);
  }

  onHitLike(commentId:number){
    this.commentService.hitLike(commentId).subscribe(
      res=>{
        this.getCommentListForBook();
        this.isAlreadyLiked=true;
        // this.getLikesList();
      },
      err=>{}
    );
  }

  getLikesListBasedOnComment(commentId:number) {
    this.commentService.getLikesListBasedOnComment(commentId).subscribe(
      res => {      
        this.likesListBasedOnComment = res.json();
        
      },
      err => {}
    );
  }

  

  clickReply(){
    this.clickedReply=!this.clickedReply;
  }

  ngOnInit() {
    this.onRelatedBooks();
    this.onGetCurrentBooks();
    this.getCommentListForBook();
    this.getWishListCartItem();
    // this.getLikesList();
    
    // this.getReplyCommentListForComment();
    this.qty = 1;
    if (this.currentUser) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}