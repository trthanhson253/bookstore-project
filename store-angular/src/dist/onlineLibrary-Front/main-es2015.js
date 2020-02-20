(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-all/book-all.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-all/book-all.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n      <h1>ALL BOOKS</h1>\n    </div>\n\n    <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\n      <select\n        id=\"sortBy\"\n        class=\"form-control\"\n        [(ngModel)]=\"sortBy\"\n        (ngModelChange)=\"changed($event)\"\n      >\n        <option>---------------Sort By---------------</option>\n        <option value=\"pricelowtohigh\">Price From Low To High</option>\n        <option value=\"pricehightolow\">Price From High To Low</option>\n        <option value=\"newest\">Newest</option>\n      </select>\n    </div>\n    <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\"></div>\n  </div>\n  <br />\n  <br />\n\n  <div class=\"row\">\n    <div *ngIf=\"!dataFetched\" style=\"margin-top: 50px;\">\n      <div class=\"row\">\n        <div class=\"col-md-2 col-md-offset-5\">\n          <mat-spinner></mat-spinner>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 col-md-4 col-lg-3 mt-4\" *ngFor=\"let book of books\">\n      <div class=\"card\" style=\"height: 550px;\" *ngIf=\"dataFetched\">\n        <a [routerLink]=\"['/books/list', book.id]\"\n          ><img\n            class=\"card-img-top\"\n            style=\"width: 265px;height: 260px;\"\n            src=\"http://hq.recyclist.co/wp-content/uploads/2015/02/books-300x300.jpg\"\n            (error)=\"img.src = '../../../../assets/img/default.png'\"\n            #img\n        /></a>\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">\n            <a [routerLink]=\"['/books/list', book.id]\"> {{ book.title }}</a>\n          </h4>\n          <div class=\"meta\">\n            by <strong>{{ book.author }}</strong>\n          </div>\n          <div class=\"card-text\">\n            Publisher: <strong>{{ book.publisher }}</strong>\n          </div>\n          <div class=\"card-text\">\n            ISBN: <strong>{{ book.isbn }}</strong>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <span class=\"float-right\"\n            ><h3>${{ book.listPrice }}</h3></span\n          >\n          <span><i class=\"\"></i></span>\n        </div>\n      </div>\n    </div>\n    <br />\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-detail/book-detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-detail/book-detail.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n  <div class=\"col-sm-8\">\n    <a [routerLink]=\"['/home']\">Back to Category</a>\n    <br><br>\n    <div data-spy=\"scroll\" class=\"tabbable-panel\">\n      <div class=\"tabbable-line\">\n        <ul class=\"nav nav-tabs \">\n          <li class=\"active\">\n            <a href=\"#tab_default_1\" data-toggle=\"tab\"> About this book </a>\n          </li>\n        </ul>\n        <div class=\"tab-content\">\n          <div class=\"tab-pane active\" id=\"tab_default_1\">\n            <img\n              class=\"card-img-top\"\n              style=\"width: 265px;height: 260px;\"\n              src=\"http://hq.recyclist.co/wp-content/uploads/2015/02/books-300x300.jpg\"\n              (error)=\"img.src = '../../../../assets/img/default.png'\"\n              #img\n            />\n            <h2>\n              {{ book.title }}\n             \n            </h2>\n            <br />\n            <hr />\n            <br />\n            <div class=\"panel-group\">\n              <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">Description</div>\n                <div class=\"panel-body\">{{ book.description }}</div>\n              </div>\n            </div>\n            <hr />\n            <div class=\"container\">\n              <div class=\"col-sm-8\">\n                <div class=\"panel panel-white post panel-shadow\">\n                  <div class=\"post-heading\" style=\"background-color:gainsboro\">\n                    <div class=\"pull-left image\">\n                      <img\n                        src=\"../../../assets/img/book.png\"\n                        class=\"avatar\"\n                        alt=\"user profile image\"\n                      />\n                    </div>\n                    <div class=\"pull-left meta\">\n                      <div class=\"title h5\">\n                        <h3><strong>Customer Review</strong> </h3>\n                      </div>\n                      <h6 class=\"text-muted time\">Write your review</h6>\n                    </div>\n                  </div>\n\n                  <div class=\"post-footer\">\n                    <form (ngSubmit)=\"f.form.valid && onComment()\" #f=\"ngForm\" *ngIf=\"isLoggedIn\">\n                      <div class=\"input-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"Add a comment\"\n                          type=\"text\"\n                          [(ngModel)]=\"commentContent\"\n                          #comment=\"ngModel\"\n                          required\n                          id=\"comment\"\n                          name=\"comment\"\n                          (keydown.enter)=\"openSnackBarForComment('You post your comment successfully', 'OK')\"\n                        />\n                        <span class=\"input-group-addon\">\n                          <a href=\"javascript:;\"><i class=\"fa fa-edit\"></i></a>\n                        </span>\n                      </div>\n                    </form>\n                    <div *ngIf=\"!isLoggedIn\">You must sign in to write review and like comment</div>\n                    <ul class=\"comments-list\">\n                      <li class=\"comment\" *ngFor=\"let comment of commentList\">\n                        <a class=\"pull-left\" href=\"#\">\n                         \n                          <img\n                          \n                          [src]=\"\n                            'http://localhost:8184/image/user/' +\n                            comment.user.id +\n                            '.png'\n                          \"\n                          (error)=\"img.src = '../../../assets/img/default.png'\"\n                          #img\n                          class=\"avatar img-circle\"\n                          alt=\"avatar\"\n                        />\n                        </a>\n                        <div class=\"comment-body\">\n                          <div class=\"comment-heading\">\n                            <h4 class=\"user\">{{comment.user.name}}</h4>\n                            <h5 class=\"time\">- Time </h5>\n                          </div>\n                          <p>{{comment.content}}</p>\n                          \n                      \n\n                          <a href=\"javascript:;\" class=\"info\" (mouseover)=\"getLikesListBasedOnComment(comment.id)\"><img src=\"../../../assets/img/like.png\"><strong>&nbsp;{{comment.likesList.length}}</strong>\n                            <span><div>People who liked this post: <p *ngFor=\"let likesList of likesListBasedOnComment\">- {{likesList.name}}</p></div></span></a>\n                         \n                             \n                            <p><a href=\"javascript:/\" (click)=\"onHitLike(comment.id);\">   \n                              \n                                                 \n                              <span >Like</span></a> \n                              \n                         - <img src=\"../../../assets/img/conversation.png\">&nbsp;<a href=\"javascript:;\" (click)=\"clickReply()\">\n                              <span *ngIf=\"!clickedReply\">Reply</span><span *ngIf=\"clickedReply\">Close</span></a></p>\n                          \n                      \n                        </div>\n                        \n                        <ul class=\"comments-list\" *ngIf=\"clickedReply\">\n                          <form (ngSubmit)=\"g.form.valid && onReplyComment(comment.id)\" #g=\"ngForm\" *ngIf=\"isLoggedIn\">\n                            <div class=\"input-group\">\n                              <input\n                                class=\"form-control\"\n                                placeholder=\"Add a comment\"\n                                type=\"text\"\n                                [(ngModel)]=\"replyCommentContent\"\n                                #replyComment=\"ngModel\"\n                                required\n                                id=\"replyComment\"\n                                name=\"replyComment\"\n                                (keydown.enter)=\"openSnackBarForComment('You post your comment successfully', 'OK')\"\n                              />\n                              <!-- <input type=\"hidden\" id=\"commentId\" name=\"commentId\" [(ngModel)]=\"comment\"> -->\n                              <span class=\"input-group-addon\">\n                                <a href=\"javascript:;\"><i class=\"fa fa-edit\"></i></a>\n                              </span>\n                            </div>\n                          </form>\n                          <li class=\"comment\" *ngFor=\"let replyComment of comment.replyCommentList\" style=\"background-color:azure\">\n                              <a class=\"pull-left\" href=\"#\">\n                                <img\n                          \n                                [src]=\"\n                                  'http://localhost:8184/image/user/' +\n                                  replyComment.user.id +\n                                  '.png'\n                                \"\n                                (error)=\"img.src = '../../../assets/img/default.png'\"\n                                #img\n                                class=\"avatar img-circle\"\n                                alt=\"avatar\"\n                              />\n                              </a>\n                              <div class=\"comment-body\" >\n                                  <div class=\"comment-heading\">\n                                      <h4 class=\"user\">{{replyComment.user.name}}</h4>\n                                      <h5 class=\"time\">Time</h5>\n                                  </div>\n                                  <p>{{replyComment.content}}</p>\n                              </div>\n                          </li> \n                         \n                      </ul>\n\n\n                        <hr>\n                        \n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"panel panel-default\">\n      <div class=\"menu_title\">\n        <div class=\"row\">\n          <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n            <div class=\"text-left\">\n              List Price:\n              <strong style=\"text-decoration:line-through;font-size: medium;\"\n                >${{ book.listPrice }}</strong\n              >\n            </div>\n            <div class=\"text-left\">\n              Our Price:\n              <strong style=\"font-size: x-large;\">${{ book.ourPrice }}</strong>\n            </div>\n            You saved: ${{ book.listPrice - book.ourPrice }}\n          </div>\n\n          <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n            <h4 *ngIf=\"book.inStockNumber > 10\" style=\"color:green;\">\n              In Stock\n            </h4>\n            <h4\n              *ngIf=\"book.inStockNumber < 10 && book.inStockNumber > 0\"\n              style=\"color:green;\"\n            >\n              Only <span>{{ book.inStockNumber }}</span> In Stock\n            </h4>\n            <h4 *ngIf=\"book.inStockNumber == 0\" style=\"color:darkred;\">\n              Unavailable\n            </h4>\n            <span>Qty: </span>\n            <select\n              [(ngModel)]=\"qty\"\n              class=\"browser-default\"\n              style=\"display:inline;width:50px;\"\n            >\n              <option *ngFor=\"let x of numberList\" [ngValue]=\"x\">{{\n                x\n              }}</option>\n            </select>\n          </div>\n          \n        </div>\n        <br />\n        <br />\n        \n        <h4>\n          <span *ngIf=\"qty > book.inStockNumber\" style=\"color:red\"\n            >Oops, only <span>{{ book.inStockNumber }} </span> In Stock.</span\n          >\n        </h4>\n       \n        <span *ngIf=\"isLoggedIn\">\n          <button mat-mini-fab aria-label=\"Example icon-button with a heart icon\" (click)=\"onAddToWishListCart()\"\n          [disabled]=\"isAddedToCartItemList\" \n          >\n            <mat-icon>favorite</mat-icon>\n          </button><span *ngIf=\"!isAddedToCartItemList\">&nbsp; Add To My Favorite List</span>\n          <span *ngIf=\"isAddedToCartItemList\">&nbsp; You added this book to Favorite List</span>\n        </span>\n      \n       \n        <br>\n        <br>\n        <button\n          mat-raised-button\n          color=\"warn\"\n          class=\"btn btn-danger btn-block\"\n          *ngIf=\"isLoggedIn\"\n          [disabled]=\"book.inStockNumber == 0 || qty > book.inStockNumber\"\n          (click)=\"onAddToCart()\"\n          (click)=\"\n            openSnackBar('You Added This Book To Cart Successfully', 'OK')\n          \"\n        >\n          ADD TO CART\n        </button>\n        <button\n          mat-raised-button\n          color=\"warn\"\n          class=\"btn btn-danger btn-block\"\n          *ngIf=\"!isLoggedIn\"\n          (click)=\"needLogIn()\"\n        >\n          You need to login to add items\n        </button>\n       \n      </div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <div class=\"form-group\">\n              <label for=\"email\">Author:</label>{{ book.author }}\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Publisher: </label>\n              {{ book.publisher }}\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">ISBN: </label>\n              {{ book.isbn }}\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"email\">Language: </label>\n              {{ book.language }}\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Number Of Pages: </label>\n              {{ book.numberOfPages }}\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Format: </label>\n              {{ book.format }}\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Shipping Weight: </label>\n              {{ book.shippingWeight }}\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Publication Date: </label>\n              {{ book.publicationDate }}\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Number in Stock: </label>\n              {{ book.inStockNumber }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<br />\n<br />\n<br />\n<div class=\"container\">\n  <h1>Related Books in this category</h1>\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4 col-lg-3 mt-4\" *ngFor=\"let book of bookList\">\n      <div class=\"card\">\n        <a href=\"/books/list/{{book.id}}\"\n          ><img\n            class=\"card-img-top\"\n            style=\"width: 265px;height: 260px;\"\n            src=\"http://hq.recyclist.co/wp-content/uploads/2015/02/books-300x300.jpg\"\n            (error)=\"img.src = '../../../../assets/img/default.png'\"\n            #img\n        /></a>\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">\n            <a href=\"/books/list/{{book.id}}\"> {{ book.title }}</a>\n          </h4>\n          <div class=\"meta\">\n            by <strong>{{ book.author }}</strong>\n          </div>\n          <div class=\"card-text\">\n            Publisher: <strong>{{ book.publisher }}</strong>\n          </div>\n          <div class=\"card-text\">\n            ISBN: <strong>{{ book.isbn }}</strong>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <span class=\"float-right\"\n            ><h3>${{ book.listPrice }}</h3></span\n          >\n          <span><i class=\"\"></i></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<br />\n<br />\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list-category/book-list-category.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list-category/book-list-category.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1>{{ cate.name }}</h1>\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4 col-lg-3 mt-4\" *ngFor=\"let book of books\">\n      <div class=\"card\" style=\"height: 550px;\">\n        <a [routerLink]=\"['/books/list', book.id]\"\n          ><img\n            class=\"card-img-top\"\n            style=\"width: 265px;height: 260px;\"\n            src=\"http://hq.recyclist.co/wp-content/uploads/2015/02/books-300x300.jpg\"\n            (error)=\"img.src = '../../../../assets/img/default.png'\"\n            #img\n        /></a>\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">\n            <a [routerLink]=\"['/books/list', book.id]\"> {{ book.title }}</a>\n          </h4>\n          <div class=\"meta\">\n            by <strong>{{ book.author }}</strong>\n          </div>\n          <div class=\"card-text\">\n            Publisher: <strong>{{ book.publisher }}</strong>\n          </div>\n          <div class=\"card-text\">\n            ISBN: <strong>{{ book.isbn }}</strong>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <span class=\"float-right\"\n            ><h3>${{ book.listPrice }}</h3></span\n          >\n          <span><i class=\"\"></i></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list-search/book-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list-search/book-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1>Result: {{ bookList.length }}</h1>\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4 col-lg-3 mt-4\" *ngFor=\"let book of bookList\">\n      <div class=\"card\" style=\"height: 550px;\">\n        <a [routerLink]=\"['/books/list', book.id]\"\n          ><img\n            class=\"card-img-top\"\n            style=\"width: 265px;height: 260px;\"\n            \n            src=\"http://hq.recyclist.co/wp-content/uploads/2015/02/books-300x300.jpg\"\n            (error)=\"img.src = '../../../../assets/img/default.png'\"\n            #img\n        /></a>\n        <div class=\"card-block\">\n          <h4 class=\"card-title\">\n            <a [routerLink]=\"['/books/list', book.id]\"> {{ book.title }}</a>\n          </h4>\n          <div class=\"meta\">\n            by <strong>{{ book.author }}</strong>\n          </div>\n          <div class=\"card-text\">\n            Publisher: <strong>{{ book.publisher }}</strong>\n          </div>\n          <div class=\"card-text\">\n            ISBN: <strong>{{ book.isbn }}</strong>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <span class=\"float-right\"\n            ><h3>${{ book.listPrice }}</h3></span\n          >\n          <span><i class=\"\"></i></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/check-out/check-out.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/check-out/check-out.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"isLoggedIn\">\n    <div class=\"row\">\n        <div class=\"col-xs-8\">\n            <h2 class=\"section-headline\"><span>Checkout</span></h2>\n        </div>\n       \n    </div>\n    \n    <div class=\"row\">\n        <form (ngSubmit)=\"onSubmit()\" method=\"post\">\n           \n            <div class=\"col-xs-8 \">\n                <div>\n                    <h5 class=\"alert alert-warning \">There are some fields missing. Field with * is required. </h5>\n                </div>\n                <mat-tab-group (selectedIndexChange)=\"selectedChange($event)\" [selectedIndex]=\"selectedTab\">\n                    <!--1. Shipping Address-->\n                    <mat-tab label=\"1. Shipping Address\">\n                        <div class=\"panel panel-default \">\n                            <div class=\"panel-heading \">\n                                <h4 class=\"panel-title \">\n                                    1. Shipping Address\n                            </h4>\n                            </div>\n                            <div class=\"panel-body \">\n                                <div class=\"row\" *ngIf=\"!emptyShippingList \">\n                                    <div class=\"panel-group col-lg-8\" *ngFor=\"let userShipping of userShippingList\">\n                                        <div class=\"panel panel-primary\" *ngIf=\"userShipping.userShippingDefault==1\">                                       \n                                                <div class=\"panel-heading\">Your Default Address</div>\n                                                <div class=\"panel-body\">\n                                                    <p><strong>{{userShipping.userShippingName}}</strong></p>\n                                                    <p>{{userShipping.userShippingStreet}}, {{userShipping.userShippingCity}}, {{userShipping.userShippingState}}, {{userShipping.userShippingZipcode}}\n                                                        , {{userShipping.userShippingCountry}}\n                                                    </p>\n                                                    <p><a class=\"pointer\" (click)=\"setShippingAddress(userShipping)\" href=\"javascript:;\">Use this address</a></p>\n                                                    \n                                                </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                              \n                                <div class=\"form-group \">\n                                    <label for=\"shippingName \">* Name</label>\n                                    <input type=\"text \" class=\"form-control \" id=\"shippingAddressName \" placeholder=\"Receiver Name \" name=\"shippingAddressName \" [(ngModel)]=\"orderShippingAddress.shippingAddressName \" />\n                                </div>\n                                <div class=\"form-group \">\n                                    <label for=\"shippingAddress \">* Street Address</label>\n                                    <input type=\"text \" class=\"form-control \" id=\"shippingAddressStreet \" placeholder=\"Street Address 1 \" name=\"shippingAddressStreet \" [(ngModel)]=\"orderShippingAddress.shippingAddressStreet \" />\n                                </div>\n                                \n                                <div class=\"row \">\n                                    <div class=\"col-xs-4 \">\n                                        <div class=\"form-group \">\n                                            <label for=\"shippingCity \">* City</label>\n                                            <input type=\"text \" class=\"form-control \" id=\"shippingAddressCity \" placeholder=\"Your City \" name=\"shippingAddressCity \" [(ngModel)]=\"orderShippingAddress.shippingAddressCity \" />\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-4 \">\n                                        <div class=\"form-group \">\n                                            <label for=\"shippingState \">* State</label>\n                                            <select id=\"shippingAddressState \" class=\"form-control \" name=\"shippingAddressState \" [(ngModel)]=\"orderShippingAddress.shippingAddressState \">\n                                                <option value=\"\" disabled>-- state --</option>\n                                                <option *ngFor=\"let state of stateList \">{{state}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-4 \">\n                                        <div class=\"form-group \">\n                                            <label for=\"shippingState \">* Country</label>\n                                            <select id=\"shippingAddressCountry \" class=\"form-control \" name=\"shippingAddressCountry \" [(ngModel)]=\"orderShippingAddress.shippingAddressCountry \">\n                                                <option value=\"\" disabled>-- state --</option>\n                                                <option *ngFor=\"let state of stateList \">{{state}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-4 \">\n                                        <div class=\"form-group \">\n                                            <label for=\"shippingZipcode \">* Zipcode</label>\n                                            <input type=\"text \" class=\"form-control \" id=\"shippingAddressZipcode \" placeholder=\"Zipcode \" name=\"shippingAddressZipcode \" [(ngModel)]=\"orderShippingAddress.shippingAddressZipcode \" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <button mat-raised-button type=\"reset\" value=\"Reset\">Clear</button>&nbsp;&nbsp;&nbsp;\n                                <a mat-raised-button class=\"mat-primary\" (click)=\"goToPayment()\">Continue to Payment</a>\n                            </div>\n                        </div>\n                    </mat-tab>\n                    <!--2. Payment Information-->\n                    <mat-tab label=\"2. Payment Information\">\n                        <div class=\"panel panel-default \">\n                            <div class=\"panel-heading \">\n                                <h4 class=\"panel-title \">\n                                    2. Payment Information\n                            </h4>\n                            </div>\n                            <div class=\"panel-body\">\n                                <div class=\"row\" *ngIf=\"!emptyPaymentList \">\n                                    <div class=\"panel-group col-lg-8\" *ngFor=\"let userPayment of userPaymentList\">\n                                        <div class=\"panel panel-primary\" *ngIf=\"userPayment.defaultPayment==1\">                                       \n                                                <div class=\"panel-heading\">Your Default Card</div>\n                                                <div class=\"panel-body\">\n                                                    <p><strong>{{userPayment.cardName}}</strong></p>\n                                                    <p>Card Number: xxxx - {{userPayment.cardNumber | slice:-4}}<p>\n                                                    <p>Expiry Date: {{userPayment.expiryDate}} </p>\n                                                     <p><a class=\"pointer\" (click)=\"setPaymentMethod(userPayment)\" href=\"javascript:;\">Use this card</a></p>\n                                                    \n                                                </div>\n                                        </div>\n                                    </div>\n                                </div>\n                               \n                                <!-- CREDIT CARD FORM STARTS HERE -->\n                                <div class=\"row\">\n                                    <div class=\"col-xs-12\">\n                                        <img src=\"../../../assets/img/creditcard.png\" class=\"img-responsive\" />\n                                        <br/>\n                                       \n                                        <div class=\"form-group\">\n                                            <label for=\"cardHolder\">* Card Holder Name</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"cardHolder\" required=\"required\" placeholder=\"Card Holder Name\" name=\"holderName\" [(ngModel)]=\"orderPayment.cardName\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"cardHolder\">* State</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"state\" required=\"required\" placeholder=\"Card Holder Name\" name=\"state\" [(ngModel)]=\"orderPayment.state\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"cardHolder\">* Zip Code</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"zipCode\" required=\"required\" placeholder=\"Card Holder Name\" name=\"zipCode\" [(ngModel)]=\"orderPayment.zipCode\" />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"cardNumber\">* Card Number</label>\n                                            <div class=\"input-group\">\n                                                <input required=\"required\" id=\"cardNumber\" type=\"tel\" class=\"form-control\" name=\"cardNumber\" placeholder=\"Valid Card Number\" name=\"cardNumber\" [(ngModel)]=\"orderPayment.cardNumber\" />\n                                                <span class=\"input-group-addon\"><i class=\"fa fa-credit-card\"\n                                                                                           aria-hidden=\"true\"></i></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-xs-7 col-mat-7\">\n                                        <div class=\"form-group\">\n                                            <label>* Expiration Date</label>\n                                            <div class=\"row\">\n                                                <div class=\"col-xs-6\">\n                                                    <select class=\"form-control\" name=\"expiryDate\" required=\"required\" [(ngModel)]=\"orderPayment.expiryDate\">\n                                                        <option value=\"\" disabled=\"disabled\">\n                                                            --Month--\n                                                        </option>\n                                                        <option value=\"1\">Jan (01)</option>\n                                                        <option value=\"2\">Feb (02)</option>\n                                                        <option value=\"3\">Mar (03)</option>\n                                                        <option value=\"4\">Apr (04)</option>\n                                                        <option value=\"5\">May (05)</option>\n                                                        <option value=\"6\">June (06)</option>\n                                                        <option value=\"7\">July (07)</option>\n                                                        <option value=\"8\">Aug (08)</option>\n                                                        <option value=\"9\">Sep (09)</option>\n                                                        <option value=\"10\">Oct (10)</option>\n                                                        <option value=\"11\">Nov (11)</option>\n                                                        <option value=\"12\">Dec (12)</option>\n                                                    </select>\n                                                </div>\n                                                \n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-5 col-mat-5 pull-right\">\n                                        <div class=\"form-group\">\n                                            <label for=\"cardCVC\">CV Code</label>\n                                            <input id=\"securityCode\" type=\"tel\" class=\"form-control\" name=\"securityCode\" placeholder=\"CVC\" name=\"securityCode\" [(ngModel)]=\"orderPayment.securityCode\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- CREDIT CARD FORM ENDS HERE -->\n                                <div class=\"checkbox\">\n                                    <label>\n                                        <input id=\"theSameAsShippingAddress\" type=\"checkbox\"\n                                               name=\"billingSameAsShipping\" value=\"true\" (click)=\"setBillingAsShipping($event.target.checked)\" />Same as shipping\n                                        address\n                                    </label>\n                                </div>\n                                <div class=\"form-group \">\n                                    <label for=\"billingAddressName \">* Name</label>\n                                    <input type=\"text \" class=\"form-control billingAddress \" id=\"billingAddressName \" placeholder=\"Name \" name=\"billingAddressName \" [(ngModel)]=\"orderBillingAddress.billingAddressName\" />\n                                </div>\n                                <div class=\"form-group \">\n                                    <label for=\"billingAddressStreet \">* Street Address</label>\n                                    <input type=\"text \" id=\"billingAddressStreet \" class=\"form-control billingAddressStreet \" placeholder=\"Street Address\" name=\"billingAddressStreet1 \" [(ngModel)]=\"orderBillingAddress.billingAddressStreet\" />\n                                </div>\n                                \n                                <div class=\"row \">\n                                    <div class=\"col-xs-4 \">\n                                        <div class=\"form-group \">\n                                            <label for=\"billingAddressCity \">* City</label>\n                                            <input type=\"text \" class=\"form-control billingAddress \" id=\"billingAddressCity \" placeholder=\"City \" name=\"billingAddressCity \" [(ngModel)]=\"orderBillingAddress.billingAddressCity\" />\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-4 \">\n                                        <div class=\"form-group \">\n                                            <label for=\"billingAddressState \">* State</label>\n                                            <select id=\"billingAddressState \" class=\"form-control billingAddress \" name=\"billingAddressState \" [(ngModel)]=\"orderBillingAddress.billingAddressState\">\n                                                <option value=\"\" disabled=\"disabled \">-- state --\n                                                </option>\n                                                <option *ngFor=\"let state of stateList\">{{state}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-4 \">\n                                        <div class=\"form-group \">\n                                            <label for=\"billingZipcode \">* Zipcode</label>\n                                            <input type=\"text \" class=\"form-control billingAddress \" id=\"billingAddressZipcode \" placeholder=\"Zipcode \" name=\"billingAddressZipcode \" [(ngModel)]=\"orderBillingAddress.billingAddressZipcode \" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <a mat-raised-button class=\"mat-primary\" (click)=\"goToReview()\">Next</a>\n                            </div>\n                        </div>\n                    </mat-tab>\n                    <!--3. Review Items and Shipping-->\n                    <mat-tab label=\"3. Review\">\n                        <div class=\"panel panel-default \">\n                            <div class=\"panel-heading \">\n                                <h4 class=\"panel-title \">\n                                    3. Review Items and Shipping\n                            </h4>\n                            </div>\n                            <div class=\"panel-body \">\n                                <h4>Choose your shipping method:</h4>\n                                <div class=\"radio\">\n                                    <label>\n                                        <input type=\"radio\" name=\"shippingMethod\" value=\"groundShipping\" [(ngModel)]=\"shippingMethod\" /> Ground Shipping\n                                    </label>\n                                </div>\n                                <div class=\"radio\">\n                                    <label>\n                                        <input type=\"radio\" name=\"shippingMethod\" value=\"premiumShipping\" [(ngModel)]=\"shippingMethod\" /> Premium Shipping\n                                    </label>\n                                </div>\n                                \n                                <div class=\"row \">\n                                    <div class=\"col-xs-8 \">\n                                        <h4>Products</h4></div>\n                                    <div class=\"col-xs-2 \">\n                                        <h4>Price</h4></div>\n                                    <div class=\"col-xs-2 text-center \">\n                                        <h4>Qty</h4></div>\n                                </div>\n                                <!--*******  display products in cart  ********-->\n                                <div class=\"row \" *ngFor=\"let cartItem of cartItemList \">\n                                    <hr/>\n                                    <div class=\"col-xs-2 \">\n                                        <a mat-button (click)=\"onSelect(cartItem.book)\"><img class=\"img-responsive shelf-book\" src=\"{{serverPath}}/image/book/{{cartItem.book.id}}.png\" style=\"width:70px;\" /></a>\n                                    </div>\n                                    <div class=\"col-xs-6 \">\n                                        <a class=\"pointer\" (click)=\"onSelect(cartItem.book)\"><h4>{{cartItem.book.title}}</h4></a>\n                                        <p *ngIf=\"cartItem.book.inStockNumber > 10\" style=\"color: green;\">In Stock</p>\n                                        <p *ngIf=\"cartItem.book.inStockNumber < 10 && cartItem.book.inStockNumber > 0\" style=\"color: green;\"> Only <span>{{cartItem.book.inStockNumber}}</span> In Stock\n                                        </p>\n                                        <p style=\"color: darkred;\" *ngIf=\"cartItem.book.inStockNumber==0\">Product Unavailable</p>\n                                    </div>\n                                    <div class=\"col-xs-2 \">\n                                        <h5 style=\"color: #db3208; font-size: large;\">$<span [ngClass]=\"{'text-strike': cartItem.book.inStockNumber == 0 }\"\n                                                                             >{{cartItem.book.ourPrice}}</span>\n                        </h5>\n                                    </div>\n                                    <div class=\"col-xs-2 text-center \">\n                                        <h5 style=\"font-size: large \">{{cartItem.qty}}</h5>\n                                    </div>\n                                </div>\n                                <hr/>\n                                <h4 class=\"col-xs-12 text-right\"><Strong style=\"font-size: large\">Total Price (<span\n                        >{{cartItemNumber}}</span> items): </Strong><span\n                        style=\"color: #db3208; font-size: large;\">$<span\n                        ></span>{{shoppingCart.grandTotal}}</span></h4>\n                                <br/>\n                                <br/>\n                                <button mat-raised-button type=\"submit \" class=\"btn-block mat-primary\">Place your order\n                                </button>\n                               \n                            </div>\n                        </div>\n                    </mat-tab>\n                </mat-tab-group>\n            </div>\n            <div class=\"col-xs-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        <button mat-raised-button type=\"submit \" class=\"btn-block mat-primary\">Place your order\n                        </button>\n                       \n                        <hr/>\n                        <h3>Order Summary</h3>\n                        <div class=\"row\">\n                            <div class=\"col-xs-7 text-left\">\n                                Total before tax:\n                            </div>\n                            <div class=\"col-xs-5 text-right\">\n                                $\n                                <span>{{shoppingCart.grandTotal}}</span>\n                            </div>\n                        </div>\n                        <div class=\"row \">\n                            <div class=\"col-xs-7 text-left \">\n                                Estimated tax:\n                            </div>\n                            <div class=\"col-xs-5 text-right \">\n                                $<span>{{shoppingCart.grandTotal*0.06 | number : '1.2-2'}}</span>\n                            </div>\n                        </div>\n                        <hr />\n                        <div class=\"row \">\n                            <div class=\"col-xs-7 text-left \">\n                                <h3 style=\"color:darkred; \"><strong>Order total:</strong></h3>\n                            </div>\n                            <div class=\"col-xs-5 text-right \">\n                                <h3><strong style=\"color:darkred; \">$<span\n                                        >{{shoppingCart.grandTotal*1.06 | number : '1.2-2'}}</span>\n                                </strong></h3>\n                            </div>\n                        </div>\n                        <div class=\"panel-footer \">Shipping and handling haven't applied.</div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n<div class=\"text-center\"  *ngIf=\"!isLoggedIn\" style=\"padding: 50px;\">\n    <div style=\"font-size: large;\"><p>You must <strong><a [routerLink]=\"['/login']\">Sign In</a></strong> to continue checkout.</p>\n        <p>Click <strong><a [routerLink]=\"['/login']\">here</a></strong> if you already have an account.\n        Or click <strong><a [routerLink]=\"['/login']\">here</a></strong> if you want to create a new account.</p></div>\n</div>  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div id=\"footer2\">\n    <div class=\"carousel-section clearfix\"></div>\n    <div class=\"nl-signup clearfix\">\n      <div class=\"subscribe\">\n        <p>Subscribe now for coupons, newsletters, and more!</p>\n        <form\n          action=\"#\"\n          method=\"post\"\n          onsubmit=\"if (!window.__cfRLUnblockHandlers) return false; if(document.getElementById(&#39;nlEmailFooter&#39;).trim() = &#39;&#39;){return false;}else{return gtm_email_sign_up(&#39;sign up&#39;, &#39;footer&#39;);}\"\n        >\n          <label for=\"nlEmailFooter\" class=\"visuallyhidden\"\n            >Enter Your Email for Coupon</label\n          >\n          <input\n            type=\"text\"\n            id=\"nlEmailFooter\"\n            class=\"subscribe-input\"\n            name=\"email\"\n            placeholder=\"Enter Your Email for a $5 Coupon\"\n          />\n          <button\n            type=\"submit\"\n            class=\"btn btn-main btn-lg\"\n            value=\"Sign Up\"\n            id=\"submit-newsletter\"\n            aria-label=\"sign up email\"\n          >\n            Sign Up\n          </button>\n        </form>\n      </div>\n      <div class=\"social\">\n        <p>Let's Get Social</p>\n        <a href=\"#\" target=\"_blank\" rel=\"noopener\"\n          ><img\n            src=\"../../../assets/img/facebook-60.gif\"\n            alt=\"facebook footer\"\n            border=\"0\"\n        /></a>\n        <a href=\"#\" target=\"_blank\" rel=\"noopener\"\n          ><img\n            src=\"../../../assets/img/twitter-60.gif\"\n            alt=\"twitter footer\"\n            border=\"0\"\n        /></a>\n        <a href=\"#\" target=\"_blank\" rel=\"noopener\"\n          ><img\n            src=\"../../../assets/img/pintrest-60.gif\"\n            alt=\"pintrest footer\"\n            border=\"0\"\n        /></a>\n        <a href=\"#\" target=\"_blank\" rel=\"noopener\"\n          ><img\n            src=\"../../../assets/img/blog-60.gif\"\n            alt=\"alibris blog footer\"\n            border=\"0\"\n        /></a>\n      </div>\n    </div>\n    <div\n      style=\"background-color:black;color:white;text-align: center;height: 30px;\"\n    >\n      2020\n    </div>\n    <br />\n  </div>\n  <!-- <p>\n    <img src=\"../../../assets/img/spacer.gif\" class=\"gra-minwidth\" alt=\"\" />\n  </p> -->\n</div>\n\n<div>\n  <script\n    src=\"../../../assets/img/tagcontainer.js.download\"\n    type=\"text/javascript\"\n  ></script>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bea-portal-theme-alibrisInvisible\">\n  <div class=\"bea-portal-book-primary\">\n    <div class=\"bea-portal-book-primary-content\">\n      <div class=\"bea-portal-theme-alibrisMain\">\n        <div class=\"bea-portal-book-invisible\">\n          <div class=\"bea-portal-book-content\">\n            <div class=\"bea-portal-theme-alibrisInvisible\">\n              <div id=\"bea-portal-book-primary\" class=\"bea-portal-book-page\">\n                <div id=\"skip-main\">\n                  <table class=\"bea-portal-layout-grid\" cellspacing=\"0\">\n                    <tbody>\n                      <tr>\n                        <td\n                          class=\"bea-portal-layout-placeholder-container-singleColRightBorder\"\n                          width=\"100%\"\n                        >\n                          <div class=\"bea-portal-layout-placeholder\">\n                            <table\n                              class=\"bea-portal-layout-flow\"\n                              cellspacing=\"0\"\n                            >\n                              <tbody>\n                                <tr>\n                                  <td\n                                    class=\"bea-portal-layout-placeholder-container\"\n                                    width=\"100%\"\n                                  >\n                                    <div class=\"bea-portal-layout-placeholder\">\n                                      <div\n                                        class=\"bea-portal-alert-window\"\n                                        width=\"100%\"\n                                      >\n                                        <div\n                                          class=\"bea-portal-alert-window-titlebar\"\n                                        >\n                                          <div\n                                            class=\"bea-portal-ie-table-buffer-div\"\n                                          >\n                                            <table\n                                              class=\"bea-portal-alert-window-titlebar-container\"\n                                              cellspacing=\"0\"\n                                            >\n                                              <tbody>\n                                                <tr>\n                                                  <td\n                                                    class=\"bea-portal-alert-window-titlebar-buttons\"\n                                                    nowrap=\"nowrap\"\n                                                  ></td>\n                                                </tr>\n                                              </tbody>\n                                            </table>\n                                          </div>\n                                        </div>\n                                        <div\n                                          class=\"bea-portal-alert-window-content\"\n                                        >\n                                          <div id=\"home-container\">\n                                            <h1>\n                                              Your Source of Books, Music &amp;\n                                              Movies\n                                            </h1>\n\n                                            <div\n                                              id=\"mw_hidden_content\"\n                                              style=\"display:none\"\n                                            >\n                                              <div id=\"banner_imgs\">\n                                                <div>\n                                                  <a\n                                                    href=\"#\"\n                                                    ><img\n                                                      data-src=\"/images/promos/red/bts/bts-2019-fall/bts_giftguide_banner_2019_fall.jpg\"\n                                                      alt=\"giftguide banner\"\n                                                  /></a>\n                                                </div>\n                                                <div>\n                                                  <a\n                                                    href=\"#\"\n                                                    ><img\n                                                      data-src=\"/images/promos/red/homepage-slides/free_ship_hero.jpg\"\n                                                      alt=\"free shipping banner\"\n                                                  /></a>\n                                                </div>\n                                              </div>\n                                            </div>\n\n                                            <h2 class=\"tagline\">\n                                              The premier media marketplace\n                                              connecting you to over 260 million\n                                              books, movies, and albums from\n                                              thousands of independent sellers\n                                              worldwide.\n                                            </h2>\n                                            <div class=\"banner category\">\n                                              <h2>Shop By Category</h2>\n                                            </div>\n                                            <div class=\"featured-genres\">\n                                              <ul>\n                                                <li>\n                                                  <h3>Textbooks</h3>\n                                                  <img\n                                                    alt=\"textbooks\"\n                                                    src=\"../../../assets/img/homepage_textbooks_2019_holiday.jpg\"\n                                                  />\n                                                </li>\n                                                <li>\n                                                  <h3>Fiction</h3>\n                                                  <img\n                                                    alt=\"Fiction\"\n                                                    src=\"../../../assets/img/homepage_fiction_2019_holiday.jpg\"\n                                                  />\n                                                </li>\n                                                <li>\n                                                  <h3>Romance</h3>\n                                                  <img\n                                                    alt=\"Romance\"\n                                                    src=\"../../../assets/img/homepage_romance_2019_holiday.jpg\"\n                                                  />\n                                                </li>\n                                                <li>\n                                                  <h3>\n                                                    Business &amp; Finance\n                                                  </h3>\n                                                  <img\n                                                    alt=\"Business Economics\"\n                                                    src=\"../../../assets/img/homepage_business_2019_holiday.jpg\"\n                                                  />\n                                                </li>\n                                                <li>\n                                                  <h3>Cookbooks</h3>\n                                                  <img\n                                                    alt=\"Cooking\"\n                                                    src=\"../../../assets/img/homepage_cookbooks_2019_holiday.jpg\"\n                                                  />\n                                                </li>\n                                                <li>\n                                                  <h3>Children's Books</h3>\n                                                  <img\n                                                    alt=\"Children\"\n                                                    src=\"../../../assets/img/homepage_childrens_2019_holiday.jpg\"\n                                                  />\n                                                </li>\n                                                <li>\n                                                  <h3>Crafts Hobbies</h3>\n                                                  <img\n                                                    alt=\"Photography\"\n                                                    src=\"../../../assets/img/homepage_crafting_2019_holiday.jpg\"\n                                                  />\n                                                </li>\n                                                <li>\n                                                  <h3>Mystery</h3>\n                                                  <img\n                                                    alt=\"Mystery\"\n                                                    src=\"../../../assets/img/homepage_mystery_2019_holiday.jpg\"\n                                                  />\n                                                </li>\n                                              </ul>\n                                              <div class=\"clearfix\"></div>\n                                            </div>\n                                          </div>\n                                          <div class=\"clearfix\"></div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </td>\n                                </tr>\n                              </tbody>\n                            </table>\n                          </div>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"bea-portal-theme-alibrisInvisible\"></div>\n        <div class=\"bea-portal-theme-alibrisInvisible\"></div>\n        <div class=\"bea-portal-theme-alibrisInvisible\"></div>\n        <div class=\"bea-portal-theme-alibrisInvisible\"></div>\n        <div class=\"bea-portal-theme-alibrisInvisible\"></div>\n        <div class=\"bea-portal-theme-alibrisInvisible\"></div>\n        <div class=\"bea-portal-theme-alibrisInvisible\"></div>\n        <div class=\"bea-portal-theme-alibrisInvisible\"></div>\n        <div class=\"bea-portal-theme-alibrisInvisible\"></div>\n        <div class=\"bea-portal-theme-alibrisInvisible\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"bea-portal-theme-alibrisMain\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bea-portal-theme-alibrisInvisible\">\n\n    <div class=\"bea-portal-book-primary\">\n\n        <div class=\"bea-portal-book-primary-content\">\n\n            <div class=\"bea-portal-theme-alibrisMain\">\n\n                <div class=\"bea-portal-book-invisible\">\n\n                    <div class=\"bea-portal-book-content\">\n\n                        <div class=\"bea-portal-theme-alibrisInvisible\">\n                        </div>\n                        <div class=\"bea-portal-theme-alibrisInvisible\">\n                        </div>\n                        <div class=\"bea-portal-theme-alibrisInvisible\">\n                        </div>\n                        <div class=\"bea-portal-theme-alibrisInvisible\">\n                        </div>\n                        <div class=\"bea-portal-theme-alibrisInvisible\">\n                        </div>\n                        <div class=\"bea-portal-theme-alibrisInvisible\">\n                        </div>\n                        <div class=\"bea-portal-theme-alibrisInvisible\">\n                        </div>\n                        <div class=\"bea-portal-theme-alibrisInvisible\">\n                        </div>\n\n                        <div id=\"bea-portal-book-primary\" class=\"bea-portal-book-page\">\n                            <div id=\"skip-main\">\n\n                                <table class=\"bea-portal-layout-grid\" cellspacing=\"0\">\n\n                                    <tbody>\n                                        <tr>\n\n                                            <td class=\"bea-portal-layout-placeholder-container-singleColRightBorder\" width=\"100%\">\n\n                                                <div class=\"bea-portal-layout-placeholder\">\n\n                                                    <table class=\"bea-portal-layout-flow\" cellspacing=\"0\">\n                                                        <tbody>\n                                                            <tr>\n\n                                                                <td class=\"bea-portal-layout-placeholder-container\" width=\"100%\">\n\n                                                                    <div class=\"bea-portal-layout-placeholder\">\n\n                                                                        <!-- w-begin -->\n\n                                                                        <!-- tb-begin -->\n\n                                                                        <!-- tb-end -->\n\n                                                                        <div id=\"login\">\n\n                                                                            <div id=\"loginContainer\">\n\n                                                                                <div class=\"page-intro\">\n                                                                                    <h1>Account Sign-In</h1>\n                                                                                </div>\n                                                                                <p>\n\n                                                                                    <!-- start left div -->\n                                                                                </p>\n\n                                                                                <div class=\"left\">\n                                                                                    <form (ngSubmit)=\"f.form.valid && onLogin()\" #f=\"ngForm\" novalidate *ngIf=\"!isForgotPassword\">\n\n                                                                                        <div>\n                                                                                            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"fillout-form\">\n                                                                                                <tbody>\n                                                                                                    <tr class=\"header-footer\" style=\"font-size: 1.5em;\">\n                                                                                                        <td colspan=\"2\">\n                                                                                                            <h2>Registered users - sign in</h2></td>\n                                                                                                    </tr>\n                                                                                                    <div>\n\n                                                                                                    </div>\n                                                                                                    <tr>\n                                                                                                        <td align=\"right\">\n                                                                                                            <label for=\"email\">Username</label>\n                                                                                                        </td>\n\n                                                                                                        <td>\n                                                                                                            <input name=\"username\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required id=\"username\" type=\"text\" size=\"24\" data-emoji_font=\"true\" style=\"font-family: arial, helvetica, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, Symbola, EmojiSymbols !important;\">\n\n                                                                                                        </td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td align=\"right\">\n                                                                                                            <label for=\"password\">password</label>\n                                                                                                        </td>\n                                                                                                        <td>\n                                                                                                            <input name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required id=\"password\" type=\"password\" size=\"24\">\n\n                                                                                                        </td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td></td>\n                                                                                                        <td><span class=\"label label-danger\" *ngIf=\"loginError\">Sorry! The e-mail address or password you entered was incorrect. Please try again.</span>\n\n                                                                                                        </td>\n\n                                                                                                    </tr>\n                                                                                                    <tr class=\"header-footer\">\n                                                                                                        <td colspan=\"2\" align=\"right\">\n\n                                                                                                            <input type=\"submit\" class=\"btn oneClick\" value=\"Sign In\">\n                                                                                                        </td>\n                                                                                                    </tr>\n                                                                                                </tbody>\n                                                                                            </table>\n                                                                                            <div class=\"smallgreytype\" style=\"text-align:center;\">\n\n                                                                                                <button mat-raised-button color=\"primary\" (click)=\"forgotPassword()\">Forgot your password? Click here</button>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </form>\n\n                                                                                    <form (ngSubmit)=\"onForgotPassword()\" #f=\"ngForm\" novalidate *ngIf=\"isForgotPassword\">\n                                                                                        <div class=\"show-success-panel\" *ngIf=\"emailNotFound\">\n                                                                                            <div class=\"alert alert-success alert-dismissible\">\n                                                                                                <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n                                                                                                <strong>An email with temporary password has been sent to your email address!</strong>\n\n                                                                                            </div>\n                                                                                            <div class=\"smallgreytype\" style=\"text-align:center;\">\n\n                                                                                                <button mat-raised-button color=\"primary\" (click)=\"forgotPassword()\">Back to Sign In</button>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div *ngIf=\"!emailNotFound\">\n                                                                                            <h5> >> Please enter the e-mail address you use for your account, then click the Enter button. \n                                                                                                A new password will be sent to the e-mail address you submit.</h5>\n\n                                                                                            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"fillout-form\">\n                                                                                                <tbody>\n                                                                                                    <tr class=\"header-footer\" style=\"font-size: 1.5em;\">\n                                                                                                        <td colspan=\"2\">\n                                                                                                            <h2>Retrieve your password</h2></td>\n                                                                                                    </tr>\n\n                                                                                                    <tr>\n                                                                                                        <td align=\"right\">\n                                                                                                            <label for=\"email\">Your Email Address</label>\n                                                                                                        </td>\n\n                                                                                                        <td>\n                                                                                                            <input name=\"email\" [(ngModel)]=\"getPasswordEmail\" #email=\"ngModel\" required id=\"email\" type=\"email\" size=\"24\" data-emoji_font=\"true\" style=\"font-family: arial, helvetica, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, Symbola, EmojiSymbols !important;\">\n\n                                                                                                        </td>\n\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td></td>\n                                                                                                        <td><span class=\"label label-danger\" *ngIf=\"emailFound\">We cannot find your email in our database. Please try again! </span>\n\n                                                                                                        </td>\n\n                                                                                                    </tr>\n\n                                                                                                    <tr class=\"header-footer\">\n                                                                                                        <td colspan=\"2\" align=\"right\">\n\n                                                                                                            <button type=\"submit\" class=\"btn oneClick\">Enter</button>\n                                                                                                        </td>\n                                                                                                    </tr>\n                                                                                                </tbody>\n                                                                                            </table>\n                                                                                            <div style=\"text-align:center;\">\n                                                                                                <button mat-raised-button color=\"primary\" (click)=\"forgotPassword()\">Back to Sign In</button>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </form>\n                                                                                    <br>\n                                                                                    <br>\n                                                                                    <br>\n\n                                                                                </div>\n                                                                                <!-- end left div -->\n                                                                                <!-- start right div -->\n\n                                                                                <div class=\"right\">\n\n                                                                                    <form (ngSubmit)=\"f.form.valid && onRegister()\" #f=\"ngForm\">\n\n                                                                                        <div>\n                                                                                            <!-- start new customer form -->\n                                                                                            <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"fillout-form\" *ngIf=\"!isRegisteredSuccess\">\n                                                                                                <tbody>\n                                                                                                    <tr class=\"header-footer\" style=\"font-size: 1.5em;\">\n                                                                                                        <td colspan=\"2\">\n                                                                                                            <h2>Create a new account !</h2></td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td colspan=\"2\">\n                                                                                                            <div class=\"alert alert-warning\">\n                                                                                                                <strong>Your must type all fields below to register</strong>\n                                                                                                            </div>\n                                                                                                        </td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td width=\"42%\" align=\"right\">\n                                                                                                            <label for=\"field0\">your name</label>\n                                                                                                        </td>\n                                                                                                        <td width=\"58%\" align=\"left\" valign=\"top\">\n                                                                                                            <input name=\"name\" [(ngModel)]=\"userRegister.name\" #name=\"ngModel\" required id=\"name\" type=\"text\">\n\n                                                                                                        </td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td align=\"right\">\n                                                                                                            <label for=\"field1\">your username</label>\n                                                                                                        </td>\n                                                                                                        <td align=\"left\" valign=\"top\">\n                                                                                                            <input name=\"username\" [(ngModel)]=\"userRegister.username\" #username=\"ngModel\" required id=\"username\" type=\"text\">\n\n                                                                                                        </td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td></td>\n                                                                                                        <td><span class=\"label label-danger\" *ngIf=\"usernameExists\">Your username is already used</span></td>\n\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td align=\"right\">\n                                                                                                            <label for=\"field1\">your e-mail</label>\n                                                                                                        </td>\n                                                                                                        <td align=\"left\" valign=\"top\">\n                                                                                                            <input name=\"email1\" [(ngModel)]=\"userRegister.email\" #email1=\"ngModel\" required id=\"email1\" type=\"email\">\n\n                                                                                                        </td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td></td>\n                                                                                                        <td><span class=\"label label-danger\" *ngIf=\"emailExists\">Your email is already used</span></td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td align=\"right\">\n                                                                                                            <label for=\"field2\">confirm your e-mail</label>\n                                                                                                        </td>\n                                                                                                        <td align=\"left\" valign=\"top\">\n                                                                                                            <input name=\"confirmEmail\" [(ngModel)]=\"userRegister.confirmEmail\" #confirmEmail=\"ngModel\" required id=\"confirmEmail\" type=\"email\">\n\n                                                                                                        </td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td></td>\n                                                                                                        <td><span class=\"label label-danger\" *ngIf=\"emailNotMatch\">Your email does not match</span></td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td align=\"right\">&nbsp;</td>\n                                                                                                        <td align=\"left\" valign=\"top\"><span class=\"smallgreytype\"><b>Privacy Policy:</b> We do not share your email address.</span></td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td align=\"right\">\n                                                                                                            <label for=\"field3\">select a password</label>\n                                                                                                        </td>\n                                                                                                        <td align=\"left\" valign=\"top\">\n                                                                                                            <input name=\"password\" [(ngModel)]=\"userRegister.password\" #password=\"ngModel\" required id=\"password\" type=\"password\">\n\n                                                                                                        </td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td></td>\n                                                                                                        <td><span class=\"label label-danger\" *ngIf=\"passwordLength\">Your password must be at least 6 characters</span></td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td align=\"right\">&nbsp;</td>\n                                                                                                        <td align=\"left\" valign=\"top\"><span class=\"smallgreytype\">Passwords must contain between 6 and 15 characters,<br> and cannot contain spaces or non-English characters.</span></td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td align=\"right\">\n                                                                                                            <label for=\"field4\">re-enter password</label>\n                                                                                                        </td>\n                                                                                                        <td align=\"left\" valign=\"top\"><span class=\"header\">\n                                                                                                            <input name=\"confirmPassword\"\n                                                                                                            [(ngModel)]=\"userRegister.confirmPassword\" #confirmPassword=\"ngModel\" required\n                                                                                                            id=\"confirmPassword\"\n                                                                                                            type=\"password\">\n\n                                                                                                            </span></td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td></td>\n                                                                                                        <td><span class=\"label label-danger\" *ngIf=\"passwordNotMatch\">Your password does not match</span></td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td align=\"right\">\n                                                                                                            <label for=\"field4\">Upload Image</label>\n                                                                                                        </td>\n                                                                                                        <td align=\"left\" valign=\"top\"><span class=\"header\">\n                                                                                                            <input type=\"file\" id=\"userImage\" name=\"userImage\" (change)=\"uploadImageUserService.fileChangeEvent($event)\">\n\n                                                                                                            </span></td>\n                                                                                                    </tr>\n                                                                                                    <tr>\n                                                                                                        <td colspan=\"2\" align=\"left\" valign=\"top\">\n                                                                                                            <table border=\"0\" class=\"table-btm\">\n                                                                                                                <tbody>\n                                                                                                                    <tr>\n                                                                                                                        <td width=\"15\" align=\"right\" valign=\"top\" style=\"border-width: 0;\">\n\n                                                                                                                            <input type=\"hidden\" name=\"accountwlw-checkbox_key:{actionForm.receiveNewsletters}OldValue\" value=\"false\">\n                                                                                                                            <input type=\"checkbox\" name=\"accountwlw-checkbox_key:{actionForm.receiveNewsletters}\" id=\"field5\" checked=\"\">\n\n                                                                                                                        </td>\n                                                                                                                        <td align=\"left\" valign=\"top\" style=\"border-width: 0;\" class=\"td-wide\">\n                                                                                                                            <label for=\"field5\">\n\n                                                                                                                                <div class=\"nlSign\">I agree to all of terms and services</div>\n                                                                                                                            </label>\n                                                                                                                        </td>\n                                                                                                                    </tr>\n                                                                                                                </tbody>\n                                                                                                            </table>\n                                                                                                        </td>\n                                                                                                    </tr>\n\n                                                                                                    <tr class=\"header-footer\">\n                                                                                                        <td colspan=\"2\" align=\"right\" valign=\"middle\">\n                                                                                                            <input type=\"submit\" name=\"continue2\" class=\"btn oneClick\" aria-label=\"sign in\" value=\"Register\" [disabled]=\"!f.form.valid\">\n                                                                                                        </td>\n                                                                                                    </tr>\n                                                                                                </tbody>\n                                                                                            </table>\n                                                                                            <!-- end new customer form -->\n\n                                                                                        </div>\n                                                                                    </form>\n\n                                                                                    <!-- start new customer form -->\n                                                                                    <table *ngIf=\"isRegisteredSuccess\">\n                                                                                        <tbody>\n                                                                                            <tr>\n                                                                                                <td colspan=\"2\">\n                                                                                                    <div class=\"alert alert-success alert-dismissible\">\n                                                                                                        <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n                                                                                                        <h3>Thank you, <strong>{{newUser.name}}</strong> ! You have been registered your account successfully. A confirmation email has been sent to your email address <strong>{{newUser.email}}</strong>\n                                                                                                            .Please Sign In by using username <strong>{{newUser.username}}</strong>.\n                                                                                                </h3>\n                                                                                                    </div>\n\n                                                                                                </td>\n                                                                                            </tr>\n                                                                                        </tbody>\n                                                                                    </table>\n\n                                                                                </div>\n                                                                                <!-- end right div -->\n\n                                                                                <div class=\"clear-space\"></div>\n                                                                            </div>\n                                                                        </div>\n\n                                                                        <!-- w-end -->\n\n                                                                    </div>\n                                                                </td>\n\n                                                            </tr>\n                                                        </tbody>\n                                                    </table>\n\n                                                </div>\n                                            </td>\n\n                                        </tr>\n\n                                    </tbody>\n                                </table>\n\n                            </div>\n                        </div>\n\n                        <div class=\"bea-portal-theme-alibrisInvisible\">\n                        </div>\n                        <div class=\"bea-portal-theme-alibrisInvisible\">\n                        </div>\n                        <div class=\"bea-portal-theme-alibrisInvisible\">\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n            <div class=\"bea-portal-theme-alibrisMain\">\n            </div>\n\n        </div>\n\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/dialog-how-to-use.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/dialog-how-to-use.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>HOW TO USE - Main Functions</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <h3><strong>Register:</strong></h3>\r\n  <p> - You can register as a member of the site to buy books. To register, you need to type username (username is unique,\r\n    and have not been used ), password (password must be at least 6 characters), email (unique, we need this email \r\n    to reset password if you forgot). After register successfully, a confirmation email will be sent to the email address you\r\n    provided to us.\r\n  </p>\r\n  <h3><strong>Sign In:</strong></h3>\r\n  <p> - To use the site fully, you should sign in by using your username and password when register.\r\n  </p>\r\n  <h3><strong>Forgot password:</strong></h3>\r\n  <p> - If you don't remember your password, please click to the button Forgot password and type your email address. An email with\r\n    the temporary password will be sent. You can use this to sign in and should change to new password in My Account page.\r\n  </p>\r\n\r\n  <h3><strong>Forgot password:</strong></h3>\r\n  <p> - If you don't remember your password, please click to the button Forgot password and type your email address. An email with\r\n    the temporary password will be sent. You can use this to sign in and should change to new password in My Account page.\r\n  </p>\r\n\r\n  <h3><strong>Find Books:</strong></h3>\r\n  <p> You can find your books you want to buy by using our search box and search by 5 categories: Title, Author\r\n    ,ISBN, Publisher or search All.\r\n  </p>\r\n\r\n  <h3><strong>Find by Category:</strong></h3>\r\n  <p> You can find your books you want to buy by click on each category. It will list all of the books in the category\r\n  </p>\r\n\r\n  <h3><strong>Others:</strong></h3>\r\n  <p> You can click ADD TO CART and follow the steps to order books\r\n  </p>\r\n  <p> You can add your books to your Favorite List to see later.\r\n  </p>\r\n  <p> You can write your review on each book but have to sign in first.\r\n  </p>\r\n  <p> You can reply to each comment\r\n  </p>\r\n  <p> You can like to each comment by clicking Like button.\r\n  </p>\r\n  <p> You can view who liked the post by hover your mouse over Like button.\r\n  </p>\r\n\r\n \r\n\r\n  \r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"onNoClick()\">\r\n        Thank you for reading!\r\n    </button>\r\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bea-portal-body-content\" id=\"bea-portal-body-content\">\n  <div class=\"bea-portal-body-header\">\n    <div class=\"bea-portal-book-primary\">\n      <div id=\"alibris-header-red\">\n        <div class=\"offer-bar\">\n          <h2>\n            Welcome to BookStore Demo Page\n          </h2>\n\n          <div class=\"other-sites\">\n            <ul>\n              <li>\n                <a href=\"javascript:;\" (click)=\"openNoticeHowToUse()\"\n                  ><span class=\"glyphicon glyphicon-star-empty\"></span>&nbsp;HOW\n                  TO USE THE SITE\n                </a>\n              </li>\n              <li>\n                <a\n                  href=\"https://bookstore-demo-admin.herokuapp.com/\"\n                  target=\"_blank\"\n                  ><span class=\"glyphicon glyphicon-user\"></span>&nbsp;Go to\n                  Admin Page</a\n                >\n              </li>\n              <li>\n                <a href=\"https://github.com/trthanhson253\" target=\"_blank\"\n                  ><img src=\"../../../assets/img/github.png\" />&nbsp;My\n                  Github</a\n                >\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"navbar yamm\">\n          <div id=\"navbar-collapse-grid\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"alibris-logo\">\n                <a class=\"navbar-brand\" [routerLink]=\"['/home']\"\n                  ><img\n                    src=\"../../../assets/img/logo.png\"\n                    alt=\"logo\"\n                    style=\"margin-top: -50px;\"\n                /></a>\n              </li>\n\n              <li class=\"dropdown yamm-fw\">\n                <a\n                  href=\"javascript:;\"\n                  class=\"dropdown-toggle nav-top\"\n                  style=\"text-decoration: none;\"\n                  ><img src=\"../../../assets/img/list.png\" /> &nbsp;Categories\n                </a>\n                <ul class=\"dropdown-menu\">\n                  <li class=\"grid-subnav\">\n                    <div class=\"row\">\n                      <div class=\"subnav-container\">\n                        <ul class=\"trigger-menu\" role=\"menu\">\n                          <li\n                            class=\"trigger-item maintainHover\"\n                            data-submenu-id=\"books-subjects\"\n                          >\n                            Books List By Subjects\n                            <span class=\"menu-chevron\">&gt;</span>\n                            <div\n                              id=\"books-subjects\"\n                              class=\"popover\"\n                              style=\"display: block; top: 0px; left: 220px;\"\n                              data-original-title=\"\"\n                              title=\"\"\n                            >\n                              <div\n                                *ngIf=\"!dataFetched\"\n                                style=\"margin-top: 50px;\"\n                              >\n                                <div class=\"row\">\n                                  <div class=\"col-md-2 col-md-offset-5\">\n                                    <mat-spinner></mat-spinner>\n                                  </div>\n                                </div>\n                              </div>\n                              <div\n                                class=\"sub-panel-content\"\n                                *ngIf=\"dataFetched\"\n                              >\n                                <div class=\"row\">\n                                  <div class=\"col-sm-2\">\n                                    <ul\n                                      class=\"submenu-inner first clearfix\"\n                                      *ngFor=\"let cate of cates\"\n                                    >\n                                      <li>\n                                        <a\n                                          [routerLink]=\"['cates/list', cate.id]\"\n                                          >{{ cate.name }}</a\n                                        >\n                                      </li>\n                                    </ul>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"dropdown yamm-fw\">\n                <a\n                  [routerLink]=\"['books/all']\"\n                  class=\"dropdown-toggle nav-top\"\n                  style=\"text-decoration: none;\"\n                  ><div style=\"font-family: Arial, Helvetica, sans-serif;\">\n                    <span class=\"glyphicon glyphicon-book\"></span>&nbsp;<strong\n                      >All Books</strong\n                    >\n                  </div>\n                </a>\n              </li>\n            </ul>\n\n            <div class=\"login-nav\">\n              <ul class=\"nav navbar-nav\">\n                <li class=\"dropdown\" *ngIf=\"!isLoggedIn\">\n                  <a [routerLink]=\"['/login']\" class=\"dropdown-toggle sign-in\">\n                    <div class=\"name\" title=\"son\">\n                      <a [routerLink]=\"['/login']\">\n                        <strong>Sign In</strong>\n                      </a>\n                    </div>\n                  </a>\n                </li>\n                <li class=\"dropdown\" *ngIf=\"isLoggedIn\">\n                  <a\n                    [routerLink]=\"['/wishlist-cart']\"\n                    class=\"dropdown-toggle sign-in\"\n                  >\n                    <div class=\"name\" title=\"son\"><span class=\"glyphicon glyphicon-star\"></span>&nbsp;\n                      Favorite List\n                    </div>\n                    <b class=\"caret\"></b>\n                  </a>\n\n                  <ul\n                    class=\"dropdown-menu dropdown-menu-right account \"\n                    style=\"display: none;width: 350px;\"\n                  >\n                    <li>\n                      <div class=\"yamm-content\">\n                        <div class=\"form-group\">\n                          <div\n                            class=\"row\"\n                            style=\"font-family:Arial, Helvetica, sans-serif\"\n                            *ngFor=\"\n                              let wishListCartItem of wishListCartItemList\n                            \"\n                          >\n                            <div class=\"col-lg-12\" style=\"height: 100%;\">\n                              <div class=\"col-lg-4\">\n                                <a\n                                  [routerLink]=\"[\n                                    '/books/list',\n                                    wishListCartItem.book.id\n                                  ]\"\n                                >\n                                  <img\n                                    class=\"card-img-top\"\n                                    style=\"width: 60px;height: 60px;\"\n                                    [src]=\"\n                                      'http://localhost:8184/image/book/' +\n                                      wishListCartItem.book.id +\n                                      '.png'\n                                    \"\n                                    (error)=\"\n                                      img.src =\n                                        '../../../assets/img/default.png'\n                                    \"\n                                    #img\n                                  />\n                                </a>\n                              </div>\n                              <div class=\"col-lg-6\">\n                                <a\n                                  [routerLink]=\"[\n                                    '/books/list',\n                                    wishListCartItem.book.id\n                                  ]\"\n                                  ><strong>{{\n                                    wishListCartItem.book.title\n                                  }}</strong></a\n                                >\n                                <p>by {{ wishListCartItem.book.author }}</p>\n                              </div>\n                              <a\n                                href=\"javascript:;\"\n                                class=\"col-lg-2\"\n                                (click)=\"\n                                  removeWishListCartItem(wishListCartItem.id)\n                                \"\n                                >Remove</a\n                              >\n                              <br />\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                  </ul>\n                </li>\n\n                <li class=\"dropdown\" *ngIf=\"isLoggedIn\">\n                  <a\n                    [routerLink]=\"['/my-account/home']\"\n                    class=\"dropdown-toggle sign-in\"\n                  >\n                    <div class=\"name\" title=\"son\">\n                      <img\n                        [src]=\"\n                          'http://localhost:8184/image/user/' +\n                          currentUser.id +\n                          '.png'\n                        \"\n                        (error)=\"img.src = '../../../assets/img/default.png'\"\n                        #img\n                        border=\"0\"\n                        style=\"height: 15px;width:20px\"\n                      />\n                    </div>\n                    <b class=\"caret\"></b>\n                  </a>\n\n                  <ul\n                    class=\"dropdown-menu dropdown-menu-right account \"\n                    style=\"display: none;\"\n                  >\n                    <li>\n                      <div class=\"yamm-content\">\n                        <div class=\"form-group\">\n                          <p style=\"font-family:Arial, Helvetica, sans-serif\">\n                            Signed in as <strong>{{ name }}</strong>\n                          </p>\n                          <!-- <p style=\"font-family:Arial, Helvetica, sans-serif\">\n                            <strong>.... {{ currentUser.email | slice:8 }}</strong>\n                          </p> -->\n                          <hr />\n\n                          <a [routerLink]=\"['/my-account/home']\">My Account</a>\n\n                          <a [routerLink]=\"['/my-account/shipping']\"\n                            >My Address</a\n                          >\n                          <a [routerLink]=\"['/my-account/payment']\">My Card</a>\n                          <a [routerLink]=\"['/my-account/order']\">My Order</a>\n                          <a [routerLink]=\"['/wishlist-cart']\"\n                            >My Favorite Book</a\n                          >\n\n                          <hr />\n                        </div>\n\n                        <div class=\"form-group\">\n                          <a (click)=\"onLogout()\" class=\"btn btn-lg btn-main\"\n                            >Sign Out</a\n                          >\n                        </div>\n                      </div>\n                    </li>\n                  </ul>\n                </li>\n\n                <li class=\"cart-nav\">\n                  <a\n                    [routerLink]=\"['/shopping-cart']\"\n                    class=\"dropdown-toggle cart\"\n                    ><img\n                      src=\"../../../assets/img/cart.png\"\n                      border=\"0\"\n                      alt=\"View Cart\"\n                    />\n                    (<span id=\"cart-items-text\">{{ cartItemNumber }}</span\n                    >)</a\n                  >\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"search-container\">\n          <form (ngSubmit)=\"onSearch()\">\n            <div class=\"search-nav\">\n              <label for=\"searchBox\" class=\"visuallyhidden\"\n                >Search Your Book Here</label\n              >\n              <span\n                ><input\n                  type=\"text\"\n                  id=\"keyword\"\n                  name=\"keyword\"\n                  class=\"form-control search-input ui-autocomplete-input\"\n                  placeholder=\"Search Your Book Here\"\n                  autocomplete=\"off\"\n                  [(ngModel)]=\"keyword\"\n                  list=\"browsers2\"\n                  (ngModelChange)=\"ketqua($event)\"\n                />\n                <datalist id=\"browsers2\">\n                  <option *ngFor=\"let sach of sachs\">\n                    <strong>{{ sach.title }}</strong>\n                  </option>\n                </datalist></span\n              >\n            </div>\n            <div class=\"selection\">\n              <div class=\"select-style\">\n                <label for=\"mtypeMenu\" class=\"visuallyhidden\"\n                  >Select Book Format Menu</label\n                >\n                <select\n                  class=\"selectpicker\"\n                  name=\"searchOption\"\n                  id=\"searchOption\"\n                  [(ngModel)]=\"searchOption\"\n                  aria-label=\"formats\"\n                >\n                  <option data-icon=\"icon-heart\">Search All</option>\n                  <option data-icon=\"icon-heart\">Search by Title</option>\n                  <option data-icon=\"icon-heart\">Search by Author</option>\n                  <option data-icon=\"icon-heart\">Search by Publisher</option>\n                  <option data-icon=\"icon-heart\">Search by ISBN</option>\n                </select>\n              </div>\n            </div>\n            <input\n              name=\"hs\"\n              id=\"sbSubmit\"\n              type=\"image\"\n              value=\"Submit\"\n              src=\"../../../assets/img/mag-glass.gif\"\n              alt=\"search go button\"\n              (click)=\"onSearch()\"\n            />\n          </form>\n        </div>\n      </div>\n      <hr\n        style=\" height: 12px;\nborder: 0;\nbox-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);\"\n      />\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"page-wrap d-flex flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-12 text-center\">\n            <span class=\"display-1 d-block\">404</span>\n            <div class=\"mb-4 lead\">\n              Oops! We can't seem to find the page you are looking for.\n            </div>\n            <a [routerLink]=\"['/home']\" class=\"btn btn-link\">Back to Home</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-summary/order-summary.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-summary/order-summary.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\" style=\"margin: 120px;\">\n        <div class=\"alert alert-success\">\n            <h3><i class=\"fa fa-check\" style=\"color:limegreen;\"></i> Thank you, your order has been placed. </h3>\n            <h4>The estimated delivery date is <span>{{estimatedDeliveryDate}}</span></h4>\n        </div>\n        <p>Please click <a routerLink=\"['/']\"><strong>here</strong></a> to come back to Home Page</p>\n    </div>\n   \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    \n<div id=\"invoice\">\n\n    <div class=\"toolbar hidden-print\">\n        <div class=\"text-left\">\n            <h2>Your Shopping Cart</h2>\n        </div>\n        <div class=\"text-right\">\n            \n            <button mat-stroked-button color=\"accent\">Continue Shopping</button>&nbsp;&nbsp;&nbsp;\n            <button mat-raised-button color=\"warn\" (click)=\"continueCheckout()\">Check Out</button>\n        </div>\n        \n    </div>\n    <br>\n    <div *ngIf=\"cartItemUpdated\" class=\"alert alert-success\">\n        Cart Item Updated Successfully!\n    </div>\n    <div *ngIf=\"notEnoughStock\" class=\"alert alert-warning\">\n        Oops, some of the products don't have enough stock. Please update product quantity.\n    </div>\n    <div *ngIf=\"emptyCart\" class=\"alert alert-warning\">\n        Oops, your cart is empty. See if you can find what you link in the bookshelf and add them to cart.\n    </div>\n    <div class=\"invoice overflow-auto\">\n        <div style=\"min-width: 600px\">\n           \n            <main>\n               \n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <thead>\n                        <tr>\n                            <th></th>\n                            <th class=\"text-left\">TITLE</th>\n                            <th class=\"text-right\">PRICE</th>\n                            <th class=\"text-right\">QUANTITY</th>\n                            <th class=\"text-right\">TOTAL</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                       \n                        <tr *ngFor=\"let cartItem of cartItemList\">\n                            <td class=\"no\"><a (click)=\"onSelect(cartItem.book)\">Image Here</a></td>\n                            <td class=\"text-left\"><h3>{{cartItem.book.title}}</h3> <p *ngIf=\"cartItem.book.inStockNumber > 10\" style=\"color:green;\">In Stock</p>\n                                <p *ngIf=\"cartItem.book.inStockNumber < 10 && cartItem.book.inStockNumber > 0\" style=\"color:darkred;\">Only <span>{{cartItem.book.inStockNumber}}</span> In Stock</p>\n                                <p *ngIf=\"cartItem.book.inStockNumber == 0\" style=\"color:darkred;\">Product Unavailable</p>\n                                <a href=\"javascript:;\" class=\"pointer\" (click)=\"onRemoveCartItem(cartItem)\">Remove <img src=\"../../../assets/img/delete.png\"></a></td>\n                            <td class=\"unit\"> <h5 style=\"color:#db3208; font-weight: bold;\">$<span [ngClass]=\"{'text-strike': cartItem.book.inStockNumber == 0}\">{{cartItem.book.ourPrice}}</span>\n                            </h5></td>\n                            <td class=\"qty\"><input hidden=\"hidden\" name=\"id\" [(ngModel)]=\"cartItem.id\" />\n                                <input type=\"number\" min=\"1\" id=\"cartItem.id\" name=\"qty\" [disabled]=\"cartItem.book.inStockNumber==0\" class=\"form-control\" [(ngModel)]=\"cartItem.qty\" (ngModelChange)=\"cartItem.toUpdate=true\" />\n                                <br><a class=\"pointer\" href=\"javascript:;\" *ngIf=\"cartItem.toUpdate\" class=\"pointer mat-warn\" (click)=\"onUpdateCartItem(cartItem)\">Update <img src=\"../../../assets/img/reload.png\"></a></td>\n                            <td class=\"total\">${{cartItem.subtotal}}</td>\n                        </tr>\n                       \n                    </tbody>\n                    <tfoot>\n                        <tr>\n                            <td colspan=\"2\"></td>\n                            <td colspan=\"2\">SUBTOTAL (<span><strong>{{cartItemNumber}}</strong></span> items):</td>\n                            <td>${{shoppingCart.grandTotal}}</td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"2\"></td>\n                            <td colspan=\"2\">TAX ESTIMATE (8 %)</td>\n                            <td>${{shoppingCart.grandTotal*0.08 | number : '1.2-2'}}</td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"2\"></td>\n                            <td colspan=\"2\">GRAND TOTAL</td>\n                            <td>${{shoppingCart.grandTotal*1.08 | number : '1.2-2'}}</td>\n                        </tr>\n                    </tfoot>\n                </table>\n                <div class=\"thanks\">Thank you!</div>\n                <div class=\"notices\">\n                    <div>NOTICE:</div>\n                    <div class=\"notice\">A final total will be calculated when check-out</div>\n                </div>\n            </main>\n           \n        </div>\n        <!--DO NOT DELETE THIS div. IT is responsible for showing footer always at the bottom-->\n        <div></div>\n    </div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/unauthorized/unauthorized.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/unauthorized/unauthorized.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"page-wrap d-flex flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-12 text-center\">\n            <span class=\"display-1 d-block\">401</span>\n            <div class=\"mb-4 lead\">\n              Unathorized! Access to this resource is denied.\n            </div>\n            <a [routerLink]=\"['/home']\" class=\"btn btn-link\">Back to Home</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/wish-list-cart/wish-list-cart.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/wish-list-cart/wish-list-cart.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        \n        <div class=\"col-xs-9 col-sm-9 col-md-9 col-lg-9\">\n            <h1>YOUR FAVORITE BOOK</h1>\n        </div>\n\n    </div>\n    <br>\n    <br>\n    \n   \n    <div class=\"row\">\n      <div class=\"col-sm-6 col-md-4 col-lg-3 mt-4\" *ngFor=\"let wishListCartItem of wishListCartItemList\">\n        <div class=\"card\">\n          <a [routerLink]=\"['/books/list', wishListCartItem.book.id]\"\n            ><img\n              class=\"card-img-top\"\n              style=\"width: 265px;height: 260px;\"\n              [src]=\"'http://localhost:8184/image/book/' + wishListCartItem.book.id + '.png'\"\n              (error)=\"img.src = '../../../../assets/img/default.png'\"\n              #img\n          /></a>\n          <div class=\"card-block\">\n            <h4 class=\"card-title\">\n              <a [routerLink]=\"['/books/list', wishListCartItem.book.id]\"> {{ wishListCartItem.book.title }}</a>\n            </h4>\n            <div class=\"meta\">\n              by <strong>{{ wishListCartItem.book.author }}</strong>\n            </div>\n            <div class=\"card-text\">\n              Publisher: <strong>{{ wishListCartItem.book.publisher }}</strong>\n            </div>\n            <div class=\"card-text\">\n              ISBN: <strong>{{ wishListCartItem.book.isbn }}</strong>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <span class=\"float-right\"\n              ><h3>${{ wishListCartItem.book.listPrice }}</h3></span\n            >\n            <span><i class=\"\"></i></span>\n            <br>\n            <a href=\"javascript:;\" (click)=\"removeWishListCartItem(wishListCartItem.id)\">Remove this book</a>\n            <br>\n            <br>\n          </div>\n        </div>\n      </div>\n      <br>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/menu/menu.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/menu/menu.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-3\">\n  <!--left col-->\n\n  <div class=\"text-center\">\n    <img\n      [src]=\"'http://localhost:8184/image/user/' + currentUser.id + '.png'\"\n      (error)=\"img.src = '../../../assets/img/default.png'\"\n      #img\n      class=\"avatar img-circle img-thumbnail\"\n      alt=\"avatar\"\n      style=\"height: 120px;width:120px\"\n    />\n  </div>\n\n  <br />\n  <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" class=\"fillout-form\">\n    <tbody>\n      <tr class=\"header-footer text-center\" style=\"font-size: 1.5em;\">\n        <td colspan=\"2\">\n          <h2>{{ user.name }}</h2>\n        </td>\n      </tr>\n\n      <tr>\n        <div\n          class=\"list-group\"\n          style=\"font-family: Arial, Helvetica, sans-serif;\"\n        >\n          <a\n            [routerLink]=\"['/my-account/home']\"\n            class=\"list-group-item list-group-item-action\"\n            >Account</a\n          >\n          <a\n            [routerLink]=\"['/my-account/photo']\"\n            class=\"list-group-item list-group-item-action\"\n            >Public Profile</a\n          >\n          <a\n            [routerLink]=\"['/my-account/payment']\"\n            class=\"list-group-item list-group-item-action\"\n            >Payment Method</a\n          >\n          <a\n            [routerLink]=\"['/my-account/shipping']\"\n            class=\"list-group-item list-group-item-action\"\n            >Shipping</a\n          >\n          <a\n            [routerLink]=\"['/my-account/order']\"\n            class=\"list-group-item list-group-item-action\"\n            >Order</a\n          >\n        </div>\n      </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-home/dialog-my-email.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-home/dialog-my-email.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Update My Email</h1>\r\n<hr />\r\n<div mat-dialog-content>\r\n  <input type=\"text\" class=\"form-control\" id=\"name\" value=\"{{user.email}}\" [(ngModel)]=\"user.email\"/>\r\n  <h5 *ngIf=\"emailExist\" style=\"color:red\">>> This email already existed in our database. Please try another one! </h5>\r\n</div>\r\n<br />\r\n<br />\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  \r\n  <button mat-raised-button color=\"warn\" (click)=\"updateEmail()\">\r\n    Update\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-home/dialog-my-name.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-home/dialog-my-name.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Update My Name</h1>\r\n<hr />\r\n<div mat-dialog-content>\r\n  <input\r\n    type=\"text\"\r\n    class=\"form-control\"\r\n    id=\"name\"\r\n    value=\"{{user.name}}\"\r\n    [(ngModel)]=\"user.name\"\r\n    \r\n  />\r\n  {{newName}}\r\n</div>\r\n<br />\r\n<br />\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-raised-button color=\"warn\" (click)=\"updateName()\">\r\n    Update\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-home/my-account-home.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-home/my-account-home.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-9\">\n  <table\n    width=\"100%\"\n    border=\"0\"\n    cellspacing=\"0\"\n    cellpadding=\"0\"\n    class=\"fillout-form\"\n  >\n    <tbody>\n      <tr class=\"header-footer text-center\" style=\"font-size: 1.5em;\">\n        <td colspan=\"2\">\n          <h2><strong>My Account</strong></h2>\n          <h5>Edit your account settings and change your password here.</h5>\n        </td>\n      </tr>\n\n      <tr>\n        <td>\n          <div class=\"col-md-2\"></div>\n          <div class=\"col-md-8\">\n            <div class=\"form-group row\">\n              <label for=\"username\" class=\"col-4 col-form-label\"\n                >My Username* :\n              </label>\n              <div class=\"col-8\">\n                <strong>{{ user.username }}</strong>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"name\" class=\"col-4 col-form-label\">My Name:</label>\n              <div class=\"col-8\">\n                <strong>{{ user.name }}</strong>\n                <span\n                  (click)=\"openDialogUpdateName()\"\n                  class=\"btn btn-secondary\"\n                  data-toggle=\"tooltip\"\n                  data-placement=\"top\"\n                  title=\"Update Your Name!\"\n                  ><img src=\"../../../assets/img/pencil.png\"\n                /></span>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label for=\"email\" class=\"col-4 col-form-label\">My Email*</label>\n              <div class=\"col-8\">\n                <strong>{{ user.email }}</strong>\n                <span\n                  (click)=\"openDialogUpdateEmail()\"\n                  class=\"btn btn-secondary\"\n                  data-toggle=\"tooltip\"\n                  data-placement=\"top\"\n                  title=\"Update Your Email!\"\n                  ><img src=\"../../../assets/img/pencil.png\"\n                /></span>\n              </div>\n            </div>\n\n            <div\n              class=\"alert alert-danger alert-dismissible\"\n              *ngIf=\"passwordAndReTypePasswordNotMatch\"\n            >\n              <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\"\n                >&times;</a\n              >\n              <strong\n                >Your new password and Re-type new password does not\n                match.</strong\n              >\n            </div>\n            <div\n              class=\"alert alert-danger alert-dismissible\"\n              *ngIf=\"incorrectCurrentPassword\"\n            >\n              <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\"\n                >&times;</a\n              >\n              <strong\n                >We cannot find your current password in our database.</strong\n              >\n            </div>\n            <div\n              class=\"alert alert-success alert-dismissible\"\n              *ngIf=\"updateSuccess\"\n            >\n              <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\"\n                >&times;</a\n              >\n              <strong\n                >You updated your password successfully. You can use this new\n                password now.</strong\n              >\n            </div>\n            <form (ngSubmit)=\"onChangePassword()\" #f=\"ngForm\">\n              <div class=\"form-group row\">\n                <label for=\"currentPassword\" class=\"col-4 col-form-label\"\n                  >Current Password:\n                </label>\n                <div class=\"col-8\">\n                  <input\n                    id=\"currentPassword\"\n                    name=\"currentPassword\"\n                    placeholder=\"Enter Your Current Password Here\"\n                    class=\"form-control here\"\n                    type=\"password\"\n                    [(ngModel)]=\"currentPassword\"\n                    #currentPassword1=\"ngModel\"\n                    required\n                  />\n                </div>\n              </div>\n\n              <div class=\"form-group row\">\n                <label for=\"newPassword\" class=\"col-4 col-form-label\"\n                  >New Password:\n                </label>\n                <div class=\"col-8\">\n                  <input\n                    id=\"newPassword\"\n                    name=\"newPassword\"\n                    placeholder=\"Enter Your New Password Here\"\n                    class=\"form-control here\"\n                    type=\"password\"\n                    [(ngModel)]=\"newPassword\"\n                    #newPassword1=\"ngModel\"\n                    required\n                  />\n                </div>\n              </div>\n\n              <div class=\"form-group row\">\n                <label for=\"retypePassword\" class=\"col-4 col-form-label\"\n                  >Re-type New Password:\n                </label>\n                <div class=\"col-8\">\n                  <input\n                    id=\"retypePassword\"\n                    name=\"retypePassword\"\n                    placeholder=\"Re-type Your New Password Here\"\n                    class=\"form-control here\"\n                    type=\"password\"\n                    [(ngModel)]=\"retypePassword\"\n                    #retypePassword1=\"ngModel\"\n                    required\n                  />\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"retypePassword\" class=\"col-8 col-form-label\"\n                  >Note:\n                  <strong>Please type 3 fields to change your password</strong>\n                </label>\n              </div>\n\n              <div class=\"form-group row\">\n                <div class=\"text-center\">\n                  <button\n                    mat-raised-button\n                    color=\"warn\"\n                    type=\"submit\"\n                    [disabled]=\"!f.form.valid\"\n                  >\n                    Change Your Password\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n\n          <div class=\"col-md-2\"></div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-order/my-account-order.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-order/my-account-order.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-9\">\n    <table\n      width=\"100%\"\n      border=\"0\"\n      cellspacing=\"0\"\n      cellpadding=\"0\"\n      class=\"fillout-form\"\n    >\n      <tbody>\n        <tr class=\"header-footer text-center\" style=\"font-size: 1.5em;\">\n          <td colspan=\"2\">\n            <h2><strong>Order History</strong></h2>\n            <h5>Review your order</h5>\n          </td>\n        </tr>\n  \n        <tr>\n          <td>\n            <div class=\"col-md-12\">\n              <div class=\"row\">\n                \n                    <div class=\"panel-group\">\n                        <div class=\"panel panel-default panel-faq\" style=\"border: none;\">\n                            <div class=\"panel-body\" style=\"background-color: #ededed; margin-top: 20px;\">\n                                <table class=\"table table-sm table-inverse\">\n                                    <thead>\n                                        <tr>\n                                            <th>Order Date</th>\n                                            <th>Order Number</th>\n                                            <th>Total</th>\n                                            <th>Status</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let order of orderList\">\n                                            <td>\n                                                <a class=\"pointer\" href=\"javascript:;\" (click)=\"onDisplayOrder(order)\"><span\n                                                 >{{order.orderDate}}</span></a>\n                                            </td>\n                                            <td>{{order.id}}</td>\n                                            <td>{{order.orderTotal}}</td>\n                                            <td>{{order.orderStatus}}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <div *ngIf=\"displayOrderDetail\">\n                                    <div class=\"row\">\n                                        <div class=\"col-xs-12\">\n                                            <div class=\"text-center\">\n                                                <h2>Order Detail for purchase #<span>{{order.id}}</span></h2>\n                                            </div>\n                                            <hr/>\n                                            <div class=\"row\">\n                                                <div class=\"col-xs-4\">\n                                                    <div class=\"panel panel-default height\">\n                                                        <div class=\"panel-heading\"><strong>Billing Details</strong>\n                                                        </div>\n                                                        <div class=\"panel-body\">\n                                                            <span>{{order.orderBillingAddress.billingAddressName}}</span>\n                                                            <br/>\n                                                            <span>{{order.orderBillingAddress.billingAddressStreet}}</span>\n                                                            <br/>\n                                                            <span>{{order.orderBillingAddress.billingAddressCity}}</span>\n                                                            <br/>\n                                                            <span>{{order.orderBillingAddress.billingAddressState}}</span>\n                                                            <br/>\n                                                            <span>{{order.orderBillingAddress.billingAddressCountry}}</span>\n                                                            <br/>\n                                                            <span>{{order.orderBillingAddress.billingAddressZipcode}}</span>\n                                                            <br/>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-xs-4\">\n                                                    <div class=\"panel panel-default height\">\n                                                        <div class=\"panel-heading\"><strong>Payment Information</strong>\n                                                        </div>\n                                                        <div class=\"panel-body\">\n                                                            <span>{{order.orderPayment.cardName}}</span>\n                                                            <br/> Visa\n                                                            <br/>\n                                                            <span>{{order.orderPayment.cardNumber}}</span>\n                                                            <br/>\n                                                            <span>Exp Date:</span> <span>{{order.orderPayment.expiryDate}}</span>\n                                                            <br/>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-xs-4\">\n                                                    <div class=\"panel panel-default height\">\n                                                        <div class=\"panel-heading\"><strong>Shipping Address</strong>\n                                                        </div>\n                                                        <div class=\"panel-body\">\n                                                            <span>{{order.orderShippingAddress.shippingAddressName}}</span>\n                                                            <br/>\n                                                            <span>{{order.orderShippingAddress.shippingAddressStreet}}</span>\n                                                            <br/>\n                                                            <span>{{order.orderShippingAddress.shippingAddressCity}}</span>\n                                                            <br/>\n                                                            <span>{{order.orderShippingAddress.shippingAddressState}}</span>\n                                                            <br/>\n                                                            <span>{{order.orderShippingAddress.shippingAddressCountry}}</span>\n                                                            <br/>\n                                                            <span>{{order.orderShippingAddress.shippingAddressZipcode}}</span>\n                                                            <br/>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <div class=\"panel panel-default\">\n                                                <div class=\"panel-heading\">\n                                                    <h3 class=\"text-center\"><strong>Order summary</strong></h3>\n                                                </div>\n                                                <div class=\"panel-body\">\n                                                    <div class=\"table-responsive\">\n                                                        <table class=\"table table-condensed\">\n                                                            <thead>\n                                                                <tr>\n                                                                    <td><strong>Item Name</strong></td>\n                                                                    <td class=\"text-center\"><strong>Item Price</strong></td>\n                                                                    <td class=\"text-center\"><strong>Item Quantity</strong>\n                                                                    </td>\n                                                                    <td class=\"text-right\"><strong>Total</strong></td>\n                                                                </tr>\n                                                            </thead>\n                                                            <tbody>\n                                                                <tr *ngFor=\"let cartItem of order.cartItemList\">\n                                                                    <td>{{cartItem.book.title}}\n                                                                    </td>\n                                                                    <td class=\"text-center\">{{cartItem.book.ourPrice}}\n                                                                    </td>\n                                                                    <td class=\"text-center\">\n                                                                        {{cartItem.qty}}\n                                                                    </td>\n                                                                    <td class=\"text-right\">{{cartItem.subtotal}}\n                                                                    </td>\n                                                                </tr>\n                                                                <tr>\n                                                                    <td class=\"highrow\"></td>\n                                                                    <td class=\"highrow\"></td>\n                                                                    <td class=\"highrow text-center\">\n                                                                        <strong>Subtotal</strong></td>\n                                                                    <td class=\"highrow text-right\">{{order.orderTotal}}\n                                                                    </td>\n                                                                </tr>\n                                                                <tr>\n                                                                    <td class=\"emptyrow\"></td>\n                                                                    <td class=\"emptyrow\"></td>\n                                                                    <td class=\"emptyrow text-center\"><strong>Tax</strong>\n                                                                    </td>\n                                                                    <td class=\"emptyrow text-right\">{{order.orderTotal*0.06}}\n                                                                    </td>\n                                                                </tr>\n                                                                <tr>\n                                                                    <td class=\"emptyrow\"><i class=\"fa fa-barcode iconbig\"></i></td>\n                                                                    <td class=\"emptyrow\"></td>\n                                                                    <td class=\"emptyrow text-center\"><strong>Total</strong>\n                                                                    </td>\n                                                                    <td class=\"emptyrow text-right\">{{order.orderTotal*1.06}}\n                                                                    </td>\n                                                                </tr>\n                                                            </tbody>\n                                                        </table>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                \n              </div>\n              <!-- End row -->\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-payment-method/dialog-add-my-card.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-payment-method/dialog-add-my-card.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add New Card</h1>\r\n<hr />\r\n<div mat-dialog-content>\r\n    <input type=\"number\" class=\"form-control\" id=\"cardNumber\" [(ngModel)]=\"userPayment.cardNumber\" placeholder=\"Card Number\"/><br>\r\n  <input type=\"text\" class=\"form-control\" id=\"cardName\" [(ngModel)]=\"userPayment.cardName\" placeholder=\"Name on Card\" /><br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <input type=\"text\" class=\"form-control\" id=\"expiryDate\" [(ngModel)]=\"userPayment.expiryDate\" placeholder=\"MM/DD\"/><br>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <input type=\"number\" class=\"form-control\" id=\"securityCode\" [(ngModel)]=\"userPayment.securityCode\" placeholder=\"Security Code\"/><br>\r\n        </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        \r\n        <select id=\"state\" class=\"form-control\" required=\"required\" placeholder=\"State\" [(ngModel)]=\"userPayment.state\">\r\n\r\n            <option value=\"\" disabled>--------State--------</option>\r\n            <option *ngFor=\"let state of stateList\">{{state}}</option>\r\n        </select>\r\n        \r\n        <br>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <input type=\"number\" class=\"form-control\" id=\"zipCode\" [(ngModel)]=\"userPayment.zipCode\" placeholder=\"Zip Code\"/><br>\r\n        </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n</div>\r\n<br />\r\n<br />\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  \r\n  <button mat-raised-button color=\"warn\" (click)=\"onAddNewCard()\">\r\n    Add New Card\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-payment-method/dialog-delete-my-card.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-payment-method/dialog-delete-my-card.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Are you sure you want to delete this card ?</h1>\r\n<hr />\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n\r\n  <button mat-raised-button color=\"warn\" (click)=\"onDeleteMyCard()\">\r\n    Delete\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-payment-method/dialog-update-my-card.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-payment-method/dialog-update-my-card.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add New Card</h1>\r\n<hr />\r\n<div mat-dialog-content>\r\n   <h5>Card Number: </h5><input type=\"text\" class=\"form-control\" id=\"cardNumber\" [(ngModel)]=\"userPayment.cardNumber\" placeholder=\"Card Number\"/><br>\r\n   <h5>Name on Card: </h5><input type=\"text\" class=\"form-control\" id=\"cardName\" [(ngModel)]=\"userPayment.cardName\" placeholder=\"Name on Card\" /><br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h5>Expiration Date: </h5><input type=\"text\" class=\"form-control\" id=\"expiryDate\" [(ngModel)]=\"userPayment.expiryDate\" placeholder=\"MM/DD\"/><br>\r\n        </div>\r\n        <h5>Security Code: </h5><div class=\"col-md-6\">\r\n            <input type=\"text\" class=\"form-control\" id=\"securityCode\" [(ngModel)]=\"userPayment.securityCode\" placeholder=\"Security Code\"/><br>\r\n        </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h5>State: </h5>\r\n        <select id=\"state\" class=\"form-control\" required=\"required\" placeholder=\"State\" [(ngModel)]=\"userPayment.state\">\r\n\r\n            <option value=\"\" disabled>--------State--------</option>\r\n            <option *ngFor=\"let state of stateList\">{{state}}</option>\r\n        </select>\r\n        \r\n        <br>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <h5>Zip Code: </h5>\r\n            <input type=\"text\" class=\"form-control\" id=\"zipCode\" [(ngModel)]=\"userPayment.zipCode\" placeholder=\"Zip Code\"/><br>\r\n        </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n</div>\r\n<br />\r\n<br />\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  \r\n  <button mat-raised-button color=\"warn\" (click)=\"onAddNewCard()\">\r\n    Update My Card\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-payment-method/my-account-payment-method.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-payment-method/my-account-payment-method.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-9\">\n  <table\n    width=\"100%\"\n    border=\"0\"\n    cellspacing=\"0\"\n    cellpadding=\"0\"\n    class=\"fillout-form\"\n  >\n    <tbody>\n      <tr class=\"header-footer text-center\" style=\"font-size: 1.5em;\">\n        <td colspan=\"2\">\n          <h2><strong>Payment Method</strong></h2>\n          <h5>Update your credit card information.</h5>\n        </td>\n      </tr>\n\n      <tr>\n        <td>\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <h1>\n                  My Card\n                  <div class=\"btn icon-btn pull-right\">\n                    <button\n                      mat-raised-button\n                      color=\"warn\"\n                      (click)=\"openDialogAddMyCard()\"\n                    >\n                      +Add New Card\n                    </button>\n                  </div>\n                </h1>\n              </div>\n              <br /><br /><br />\n              <hr />\n              <ng-container *ngIf=\"userPayment; else noUserPayment\">\n                <div\n                  class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\"\n                  *ngFor=\"let s of userPayment\"\n                >\n                  <div\n                    class=\"thumbnail\"\n                    [ngStyle]=\"{\n                      'border-color': s.defaultPayment ? 'blue' : 'black'\n                    }\"\n                  >\n                    <div class=\"caption\">\n                      <div class=\"col-lg-12\">\n                        <i class=\"glyphicon glyphicon-credit-card\"></i>\n                        <a href=\"javascript:;\"\n                          ><img\n                            class=\"pull-right\"\n                            src=\"../../../assets/img/rubbish.png\"\n                            (click)=\"openDialogDeleteMyCard(s.id)\"/></a\n                        ><br />\n                      </div>\n                      <div class=\"col-lg-12 well well-add-card\">\n                        <h4>\n                          <strong>xxxx - {{ s.cardNumber | slice: -4 }}</strong>\n                        </h4>\n                      </div>\n                      <div class=\"col-lg-12\">\n                        <p>{{ s.cardName }}</p>\n                        <p>Exp: {{ s.expiryDate }}</p>\n                      </div>\n                      <button\n                        type=\"button\"\n                        class=\"btn btn-primary btn-xs btn-update btn-add-card\"\n                        (click)=\"openDialogUpdateMyCard(s)\"\n                      >\n                        Update\n                      </button>\n                      <button\n                        type=\"button\"\n                        class=\"btn btn-danger btn-xs btn-update btn-add-card\"\n                        (click)=\"setDefaultPayment(s.id)\"\n                        *ngIf=\"s.defaultPayment == 0\"\n                      >\n                        Choose this Card as Your Main Card\n                      </button>\n                      &nbsp;&nbsp;&nbsp;<span *ngIf=\"s.defaultPayment == 1\">\n                        <img src=\"../../../assets/img/success.png\" />\n                      </span>\n                      <img\n                        class=\"pull-right\"\n                        src=\"../../../assets/img/visa.png\"\n                      />&nbsp;&nbsp;\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n              <ng-template #noUserPayment>\n                <div class=\"text-center\">\n                  <h1>There are currently no books in this category</h1>\n                </div>\n              </ng-template>\n            </div>\n            <!-- End row -->\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-photo/my-account-photo.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-photo/my-account-photo.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-9\">\n  <table\n    width=\"100%\"\n    border=\"0\"\n    cellspacing=\"0\"\n    cellpadding=\"0\"\n    class=\"fillout-form\"\n  >\n    <tbody>\n      <tr class=\"header-footer text-center\" style=\"font-size: 1.5em;\">\n        <td colspan=\"2\">\n          <h2><strong>Photo</strong></h2>\n          <h5>Add a nice photo of yourself for your profile.</h5>\n        </td>\n      </tr>\n\n      <tr>\n        <td>\n          <div class=\"col-md-2\"></div>\n          <div class=\"col-md-8\">\n            <form>\n              <div class=\"form-group row text-center\">\n                <img\n                  style=\"width: 250px;height: 250px;\"\n                  [src]=\"\n                    'http://localhost:8184/image/user/' +\n                    currentUser.id +\n                    '.png'\n                  \"\n                  (error)=\"img.src = '../../../assets/img/default.png'\"\n                  #img\n                  class=\"avatar img-circle img-thumbnail\"\n                  alt=\"avatar\"\n                />\n                <h6>Upload your own photo ...</h6>\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label><strong>Upload Image</strong></label>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-btn\">\n                        <span class=\"btn btn-default btn-file\">\n                          Browse…\n                          <input\n                            type=\"file\"\n                            id=\"bookImage\"\n                            (change)=\"\n                              uploadImageUserService.fileChangeEvent($event)\n                            \"\n                          />\n                        </span>\n                      </span>\n                      <input type=\"text\" class=\"form-control\" readonly />\n                    </div>\n                    <img id=\"img-upload\" />\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group row text-center\">\n                <div class=\"offset-4 col-8\">\n                  <button\n                    name=\"submit\"\n                    type=\"submit\"\n                    mat-raised-button\n                    color=\"primary\"\n                    (click)=\"onSubmit()\"\n                    (click)=\"\n                      openSnackBar('You uploaded your photo successfully', 'OK')\n                    \"\n                  >\n                    Change Your Photo\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n\n          <div class=\"col-md-2\"></div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-shipping/dialog-add-my-address.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-shipping/dialog-add-my-address.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add New Address</h1>\r\n<hr />\r\n<div mat-dialog-content>\r\n    <input type=\"text\" class=\"form-control\" id=\"userShippingName\" [(ngModel)]=\"userShipping.userShippingName\" placeholder=\"Shipping Name\"/><br>\r\n  <input type=\"text\" class=\"form-control\" id=\"userShippingStreet\" [(ngModel)]=\"userShipping.userShippingStreet\" placeholder=\"Address\" /><br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <input type=\"text\" class=\"form-control\" id=\"userShippingCity\" [(ngModel)]=\"userShipping.userShippingCity\" placeholder=\"City\"/><br>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n        \r\n            <select id=\"userShippingState\" class=\"form-control\" required=\"required\" placeholder=\"State\" [(ngModel)]=\"userShipping.userShippingState\">\r\n    \r\n                <option value=\"\" disabled>--------State--------</option>\r\n                <option *ngFor=\"let state of stateList\">{{state}}</option>\r\n            </select>\r\n            \r\n            <br>\r\n            </div>\r\n       \r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <select id=\"userShippingCountry\" class=\"form-control\" required=\"required\" [(ngModel)]=\"userShipping.userShippingCountry\">\r\n    \r\n            <option value=\"\" disabled>--------Country--------</option>\r\n            <option *ngFor=\"let state of stateList\">{{state}}</option>\r\n        </select>\r\n    </div>\r\n        <div class=\"col-md-6\">\r\n            <input type=\"text\" class=\"form-control\" id=\"userShippingZipcode\" [(ngModel)]=\"userShipping.userShippingZipcode\" placeholder=\"Zip Code\"/><br>\r\n        </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n</div>\r\n<br />\r\n<br />\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  \r\n  <button mat-raised-button color=\"warn\" (click)=\"onAddNewAddress()\">\r\n    Add New Address\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-shipping/dialog-delete-my-address.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-shipping/dialog-delete-my-address.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>\r\n  Are you sure you want to delete this Shipping Address ?\r\n</h1>\r\n<hr />\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n\r\n  <button mat-raised-button color=\"warn\" (click)=\"onDeleteMyAddress()\">\r\n    Delete\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-shipping/dialog-update-my-address.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-shipping/dialog-update-my-address.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add New Address</h1>\r\n<hr />\r\n<div mat-dialog-content>\r\n    <h5>Shipping Name:</h5><input type=\"text\" class=\"form-control\" id=\"userShippingName\" [(ngModel)]=\"userShipping.userShippingName\" placeholder=\"Shipping Name\"/><br>\r\n    <h5>Shipping Address:</h5><input type=\"text\" class=\"form-control\" id=\"userShippingStreet\" [(ngModel)]=\"userShipping.userShippingStreet\" placeholder=\"Street\" /><br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <h5>City:</h5><input type=\"text\" class=\"form-control\" id=\"userShippingCity\" [(ngModel)]=\"userShipping.userShippingCity\" placeholder=\"City\"/><br>\r\n        </div>\r\n        <h5>State:</h5><div class=\"col-md-6\">\r\n        \r\n            <select id=\"userShippingState\" class=\"form-control\" required=\"required\" placeholder=\"State\" [(ngModel)]=\"userShipping.userShippingState\">\r\n    \r\n                <option value=\"\" disabled>--------State--------</option>\r\n                <option *ngFor=\"let state of stateList\">{{state}}</option>\r\n            </select>\r\n            \r\n            <br>\r\n            </div>\r\n       \r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <h5>Country:</h5><select id=\"userShippingCountry\" class=\"form-control\" required=\"required\" [(ngModel)]=\"userShipping.userShippingCountry\">\r\n    \r\n            <option value=\"\" disabled>--------Country--------</option>\r\n            <option *ngFor=\"let state of stateList\">{{state}}</option>\r\n        </select>\r\n    </div>\r\n    <h5>Zip Code:</h5><div class=\"col-md-6\">\r\n            <input type=\"number\" class=\"form-control\" id=\"userShippingZipcode\" [(ngModel)]=\"userShipping.userShippingZipcode\" placeholder=\"Zip Code\"/><br>\r\n        </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n</div>\r\n<br />\r\n<br />\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  \r\n  <button mat-raised-button color=\"warn\" (click)=\"onAddNewAddress()\">\r\n    Update Card\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-shipping/my-account-shipping.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-shipping/my-account-shipping.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-9\">\n  <table\n    width=\"100%\"\n    border=\"0\"\n    cellspacing=\"0\"\n    cellpadding=\"0\"\n    class=\"fillout-form\"\n  >\n    <tbody>\n      <tr class=\"header-footer text-center\" style=\"font-size: 1.5em;\">\n        <td colspan=\"2\">\n          <h2><strong>Shipping Address</strong></h2>\n          <h5>Update your shipping address information.</h5>\n        </td>\n      </tr>\n\n      <tr>\n        <td>\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <h1>\n                  My Shipping Address\n                  <div class=\"btn icon-btn pull-right\">\n                    <button\n                      mat-raised-button\n                      color=\"warn\"\n                      (click)=\"openDialogAddMyAddress()\"\n                    >\n                      +Add New Address\n                    </button>\n                  </div>\n                </h1>\n              </div>\n              <br /><br />\n              <hr />\n              <div id=\"fancy-list-group\">\n                <div class=\"row\">\n                  <div class=\"list-group\">\n                    <div class=\"col-lg-12\" *ngFor=\"let s of userShipping\">\n                      <li\n                        class=\"list-group-item\"\n                        [ngClass]=\"{\n                          'list-group-item-success': s.userShippingDefault == 1,\n                          'list-group-item-danger': s.userShippingDefault == 0\n                        }\"\n                      >\n                        <div class=\"list-group-item-addon\">\n                          <img src=\"../../../assets/img/house.png\" />\n                        </div>\n                        <div class=\"list-group-item-content\">\n                          <h4 class=\"list-group-item-heading\">\n                            <strong>{{ s.userShippingName }}</strong>\n                          </h4>\n                          <p class=\"list-group-item-text\">\n                            {{ s.userShippingStreet }} ,\n                            {{ s.userShippingCity }} ,\n                            {{ s.userShippingState }}\n                            {{ s.userShippingZipcode }} ,{{\n                              s.userShippingCountry\n                            }}\n                          </p>\n                        </div>\n                        <div class=\"list-group-item-controls\">\n                          <span class=\"label\">Controls</span>\n                          <div class=\"btn-group\">\n                            <a\n                              href=\"javascript:;\"\n                              data-toggle=\"tooltip\"\n                              data-placement=\"top\"\n                              title=\"Update this address\"\n                              ><img\n                                src=\"../../../assets/img/pencil.png\"\n                                (click)=\"openDialogUpdateMyAddress(s)\"\n                            /></a>\n                            <a\n                              href=\"javascript:;\"\n                              data-toggle=\"tooltip\"\n                              data-placement=\"top\"\n                              title=\"Delete this address\"\n                              ><img\n                                src=\"../../../assets/img/bin.png\"\n                                (click)=\"openDialogDeleteMyAddress(s.id)\"\n                            /></a>\n                          </div>\n                        </div>\n                      </li>\n                      <!-- <button\n                        mat-raised-button\n                        class=\"mat-primary\"\n                        type=\"submit\"\n                        (click)=\"setDefaultShipping(s.id)\"\n                        *ngIf=\"s.userShippingDefault == 0\"\n                      > -->\n                      <a\n                        href=\"javascript:;\"\n                        (click)=\"setDefaultShipping(s.id)\"\n                        *ngIf=\"s.userShippingDefault == 0\"\n                        style=\"text-decoration: underline;\"\n                      >\n                        Choose this Address</a\n                      >\n                      <!-- </button> -->\n\n                      <h5 *ngIf=\"s.userShippingDefault == 1\">\n                        <img src=\"../../../assets/img/success.png\" /><strong\n                          >This is your main shipping address</strong\n                        >\n                      </h5>\n\n                      <hr />\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- End row -->\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container bootstrap snippet\">\n  <div class=\"row\">\n    <app-menu></app-menu>\n    <!--/col-3-->\n    <router-outlet></router-outlet>\n  </div>\n\n  <!--/tab-content-->\n</div>\n<!--/col-9-->\n\n<!--/row-->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "Online Book Store";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/log-in/log-in.component */ "./src/app/components/log-in/log-in.component.ts");
/* harmony import */ var _components_book_list_category_book_list_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/book-list-category/book-list-category.component */ "./src/app/components/book-list-category/book-list-category.component.ts");
/* harmony import */ var _components_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/book-detail/book-detail.component */ "./src/app/components/book-detail/book-detail.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_cates_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/cates.service */ "./src/app/services/cates.service.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _my_account_my_account_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./my-account/my-account.module */ "./src/app/my-account/my-account.module.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _services_upload_image_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/upload-image-user.service */ "./src/app/services/upload-image-user.service.ts");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_user_payment_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/user-payment.service */ "./src/app/services/user-payment.service.ts");
/* harmony import */ var _services_user_shipping_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/user-shipping.service */ "./src/app/services/user-shipping.service.ts");
/* harmony import */ var _components_book_list_search_book_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/book-list-search/book-list.component */ "./src/app/components/book-list-search/book-list.component.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var _services_order_shipping_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/order-shipping.service */ "./src/app/services/order-shipping.service.ts");
/* harmony import */ var _services_order_payment_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/order-payment.service */ "./src/app/services/order-payment.service.ts");
/* harmony import */ var _components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/unauthorized/unauthorized.component */ "./src/app/components/unauthorized/unauthorized.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/check-out/check-out.component */ "./src/app/components/check-out/check-out.component.ts");
/* harmony import */ var _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/order-summary/order-summary.component */ "./src/app/components/order-summary/order-summary.component.ts");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _components_book_all_book_all_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/book-all/book-all.component */ "./src/app/components/book-all/book-all.component.ts");
/* harmony import */ var _services_wishlist_cart_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/wishlist-cart.service */ "./src/app/services/wishlist-cart.service.ts");
/* harmony import */ var _components_wish_list_cart_wish_list_cart_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/wish-list-cart/wish-list-cart.component */ "./src/app/components/wish-list-cart/wish-list-cart.component.ts");







































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
            _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_9__["LogInComponent"],
            _components_book_list_category_book_list_category_component__WEBPACK_IMPORTED_MODULE_10__["BookListCategoryComponent"],
            _components_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_11__["BookDetailComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
            _components_book_list_search_book_list_component__WEBPACK_IMPORTED_MODULE_24__["BookListComponent"],
            _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_25__["ShoppingCartComponent"],
            _components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_31__["UnauthorizedComponent"],
            _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__["NotFoundComponent"],
            _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_33__["CheckOutComponent"],
            _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_34__["OrderSummaryComponent"],
            _components_book_all_book_all_component__WEBPACK_IMPORTED_MODULE_36__["BookAllComponent"],
            _components_wish_list_cart_wish_list_cart_component__WEBPACK_IMPORTED_MODULE_38__["WishListCartComponent"],
            _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["DialogHowToUseDialog"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
            _my_account_my_account_module__WEBPACK_IMPORTED_MODULE_18__["MyAccountModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_21__["MatSnackBarModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"]
        ],
        providers: [
            _services_book_service__WEBPACK_IMPORTED_MODULE_13__["BookService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_14__["LoginService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"],
            _services_cates_service__WEBPACK_IMPORTED_MODULE_16__["CatesService"],
            _services_upload_image_user_service__WEBPACK_IMPORTED_MODULE_20__["UploadImageUserService"],
            _services_user_payment_service__WEBPACK_IMPORTED_MODULE_22__["UserPaymentService"],
            _services_user_shipping_service__WEBPACK_IMPORTED_MODULE_23__["UserShippingService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_26__["CartService"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_27__["OrderService"],
            _services_checkout_service__WEBPACK_IMPORTED_MODULE_28__["CheckoutService"],
            _services_order_shipping_service__WEBPACK_IMPORTED_MODULE_29__["OrderShippingService"],
            _services_order_payment_service__WEBPACK_IMPORTED_MODULE_30__["OrderPaymentService"],
            _services_comment_service__WEBPACK_IMPORTED_MODULE_35__["CommentService"],
            _services_wishlist_cart_service__WEBPACK_IMPORTED_MODULE_37__["WishlistCartService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["DialogHowToUseDialog"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_book_list_category_book_list_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/book-list-category/book-list-category.component */ "./src/app/components/book-list-category/book-list-category.component.ts");
/* harmony import */ var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/log-in/log-in.component */ "./src/app/components/log-in/log-in.component.ts");
/* harmony import */ var _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-account/my-account.component */ "./src/app/my-account/my-account.component.ts");
/* harmony import */ var _my_account_my_account_home_my_account_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-account/my-account-home/my-account-home.component */ "./src/app/my-account/my-account-home/my-account-home.component.ts");
/* harmony import */ var _my_account_my_account_photo_my_account_photo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-account/my-account-photo/my-account-photo.component */ "./src/app/my-account/my-account-photo/my-account-photo.component.ts");
/* harmony import */ var _my_account_my_account_payment_method_my_account_payment_method_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-account/my-account-payment-method/my-account-payment-method.component */ "./src/app/my-account/my-account-payment-method/my-account-payment-method.component.ts");
/* harmony import */ var _my_account_my_account_shipping_my_account_shipping_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-account/my-account-shipping/my-account-shipping.component */ "./src/app/my-account/my-account-shipping/my-account-shipping.component.ts");
/* harmony import */ var _my_account_my_account_order_my_account_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-account/my-account-order/my-account-order.component */ "./src/app/my-account/my-account-order/my-account-order.component.ts");
/* harmony import */ var _components_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/book-detail/book-detail.component */ "./src/app/components/book-detail/book-detail.component.ts");
/* harmony import */ var _components_book_list_search_book_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/book-list-search/book-list.component */ "./src/app/components/book-list-search/book-list.component.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/unauthorized/unauthorized.component */ "./src/app/components/unauthorized/unauthorized.component.ts");
/* harmony import */ var _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/check-out/check-out.component */ "./src/app/components/check-out/check-out.component.ts");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/login.guard */ "./src/app/guards/login.guard.ts");
/* harmony import */ var _guards_user_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/user.guard */ "./src/app/guards/user.guard.ts");
/* harmony import */ var _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/order-summary/order-summary.component */ "./src/app/components/order-summary/order-summary.component.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./models/role */ "./src/app/models/role.ts");
/* harmony import */ var _components_book_all_book_all_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/book-all/book-all.component */ "./src/app/components/book-all/book-all.component.ts");
/* harmony import */ var _components_wish_list_cart_wish_list_cart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/wish-list-cart/wish-list-cart.component */ "./src/app/components/wish-list-cart/wish-list-cart.component.ts");
























const appRoutes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "wishlist-cart",
        component: _components_wish_list_cart_wish_list_cart_component__WEBPACK_IMPORTED_MODULE_23__["WishListCartComponent"],
        canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_19__["UserGuard"]],
        data: { roles: [_models_role__WEBPACK_IMPORTED_MODULE_21__["Role"].USER] }
    },
    {
        path: "books/all",
        component: _components_book_all_book_all_component__WEBPACK_IMPORTED_MODULE_22__["BookAllComponent"]
    },
    {
        path: "cates/list/:id",
        component: _components_book_list_category_book_list_category_component__WEBPACK_IMPORTED_MODULE_4__["BookListCategoryComponent"]
    },
    {
        path: "books/list/:id",
        component: _components_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_12__["BookDetailComponent"],
        canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_19__["UserGuard"]],
        data: { roles: [_models_role__WEBPACK_IMPORTED_MODULE_21__["Role"].USER] }
    },
    {
        path: "login",
        component: _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__["LogInComponent"],
        canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_18__["LoginGuard"]]
    },
    {
        path: "bookList",
        component: _components_book_list_search_book_list_component__WEBPACK_IMPORTED_MODULE_13__["BookListComponent"]
    },
    {
        path: "shopping-cart",
        component: _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_14__["ShoppingCartComponent"],
        canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_19__["UserGuard"]],
        data: { roles: [_models_role__WEBPACK_IMPORTED_MODULE_21__["Role"].USER] }
    },
    {
        path: "check-out",
        component: _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_17__["CheckOutComponent"],
        canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_19__["UserGuard"]],
        data: { roles: [_models_role__WEBPACK_IMPORTED_MODULE_21__["Role"].USER] }
    },
    {
        path: "orderSummary",
        component: _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_20__["OrderSummaryComponent"]
    },
    { path: "404", component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"] },
    { path: "401", component: _components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_16__["UnauthorizedComponent"] },
    {
        path: "my-account",
        component: _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_6__["MyAccountComponent"],
        canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_19__["UserGuard"]],
        data: { roles: [_models_role__WEBPACK_IMPORTED_MODULE_21__["Role"].USER] },
        children: [
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full"
            },
            {
                path: "home",
                component: _my_account_my_account_home_my_account_home_component__WEBPACK_IMPORTED_MODULE_7__["MyAccountHomeComponent"]
            },
            {
                path: "photo",
                component: _my_account_my_account_photo_my_account_photo_component__WEBPACK_IMPORTED_MODULE_8__["MyAccountPhotoComponent"]
            },
            {
                path: "payment",
                component: _my_account_my_account_payment_method_my_account_payment_method_component__WEBPACK_IMPORTED_MODULE_9__["MyAccountPaymentMethodComponent"]
            },
            {
                path: "shipping",
                component: _my_account_my_account_shipping_my_account_shipping_component__WEBPACK_IMPORTED_MODULE_10__["MyAccountShippingComponent"]
            },
            {
                path: "order",
                component: _my_account_my_account_order_my_account_order_component__WEBPACK_IMPORTED_MODULE_11__["MyAccountOrderComponent"]
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
    constructor(router) {
        this.router = router;
        this.router.errorHandler = (error) => {
            this.router.navigate(["/404"]);
        };
    }
};
AppRoutingModule.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/components/book-all/book-all.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/book-all/book-all.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9vay1hbGwvYm9vay1hbGwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/book-all/book-all.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/book-all/book-all.component.ts ***!
  \***********************************************************/
/*! exports provided: BookAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookAllComponent", function() { return BookAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var src_app_models_books__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/books */ "./src/app/models/books.ts");




let BookAllComponent = class BookAllComponent {
    constructor(bookService) {
        this.bookService = bookService;
        this.books = new src_app_models_books__WEBPACK_IMPORTED_MODULE_3__["Books"]();
        this.dataFetched = false;
        this.sortBy = "---------------Sort By---------------";
    }
    getAllBooks() {
        this.bookService.getAllBooks().subscribe(res => {
            this.books = res.json();
            this.dataFetched = true;
        }, err => { });
    }
    changed(e) {
        this.bookService.sortBy(e).subscribe(res => {
            this.books = res.json();
        }, err => { });
    }
    ngOnInit() {
        this.getAllBooks();
    }
};
BookAllComponent.ctorParameters = () => [
    { type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] }
];
BookAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-book-all",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-all.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-all/book-all.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-all.component.css */ "./src/app/components/book-all/book-all.component.css")).default]
    })
], BookAllComponent);



/***/ }),

/***/ "./src/app/components/book-detail/book-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/book-detail/book-detail.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ==========================================================================\r\n   Author's custom styles\r\n   ========================================================================== */\r\n\r\nbody {\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.fb-profile img.fb-image-lg {\r\n  z-index: 0;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.fb-image-profile {\r\n  margin: -90px 10px 20px 80px;\r\n  z-index: 9;\r\n  width: 20%;\r\n}\r\n\r\n/***\r\n   Bootstrap Line Tabs by @keenthemes\r\n   A component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme\r\n   Licensed under MIT\r\n   ***/\r\n\r\n/* Tabs panel */\r\n\r\n.tabbable-panel {\r\n  border: 1px solid #eee;\r\n  padding: 10px;\r\n}\r\n\r\n/* Default mode */\r\n\r\n.tabbable-line > .nav-tabs {\r\n  border: none;\r\n  margin: 0px;\r\n}\r\n\r\n.tabbable-line > .nav-tabs > li {\r\n  margin-right: 2px;\r\n}\r\n\r\n.tabbable-line > .nav-tabs > li > a {\r\n  border: 0;\r\n  margin-right: 0;\r\n  color: #737373;\r\n}\r\n\r\n.tabbable-line > .nav-tabs > li > a > i {\r\n  color: #a6a6a6;\r\n}\r\n\r\n.tabbable-line > .nav-tabs > li.open,\r\n.tabbable-line > .nav-tabs > li:hover {\r\n  border-bottom: 4px solid #fbcdcf;\r\n}\r\n\r\n.tabbable-line > .nav-tabs > li.open > a,\r\n.tabbable-line > .nav-tabs > li:hover > a {\r\n  border: 0;\r\n  background: none !important;\r\n  color: #333333;\r\n}\r\n\r\n.tabbable-line > .nav-tabs > li.open > a > i,\r\n.tabbable-line > .nav-tabs > li:hover > a > i {\r\n  color: #a6a6a6;\r\n}\r\n\r\n.tabbable-line > .nav-tabs > li.open .dropdown-menu,\r\n.tabbable-line > .nav-tabs > li:hover .dropdown-menu {\r\n  margin-top: 0px;\r\n}\r\n\r\n.tabbable-line > .nav-tabs > li.active {\r\n  border-bottom: 4px solid #f3565d;\r\n  position: relative;\r\n}\r\n\r\n.tabbable-line > .nav-tabs > li.active > a {\r\n  border: 0 !important;\r\n  color: #333333;\r\n}\r\n\r\n.tabbable-line > .nav-tabs > li.active > a > i {\r\n  color: #404040;\r\n}\r\n\r\n.tabbable-line > .tab-content {\r\n  margin-top: -3px;\r\n  background-color: #fff;\r\n  border: 0;\r\n  border-top: 1px solid #eee;\r\n  padding: 15px 0;\r\n}\r\n\r\n.portlet .tabbable-line > .tab-content {\r\n  padding-bottom: 0;\r\n}\r\n\r\n/* Below tabs mode */\r\n\r\n.tabbable-line.tabs-below > .nav-tabs > li {\r\n  border-top: 4px solid transparent;\r\n}\r\n\r\n.tabbable-line.tabs-below > .nav-tabs > li > a {\r\n  margin-top: 0;\r\n}\r\n\r\n.tabbable-line.tabs-below > .nav-tabs > li:hover {\r\n  border-bottom: 0;\r\n  border-top: 4px solid #fbcdcf;\r\n}\r\n\r\n.tabbable-line.tabs-below > .nav-tabs > li.active {\r\n  margin-bottom: -2px;\r\n  border-bottom: 0;\r\n  border-top: 4px solid #f3565d;\r\n}\r\n\r\n.tabbable-line.tabs-below > .tab-content {\r\n  margin-top: -10px;\r\n  border-top: 0;\r\n  border-bottom: 1px solid #eee;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.menu_title {\r\n  padding: 15px 10px;\r\n  border-bottom: 1px solid #eee;\r\n  margin: 0 5px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .fb-profile-text > h1 {\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .fb-image-profile {\r\n    margin: -45px 10px 0px 25px;\r\n    z-index: 9;\r\n    width: 20%;\r\n  }\r\n}\r\n\r\n/* ==========================================================================\r\n   Comment box styles\r\n   ========================================================================== */\r\n\r\n.panel-shadow {\r\n  box-shadow: rgba(0, 0, 0, 0.3) 7px 7px 7px;\r\n  width: 90%;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\r\n}\r\n\r\n.panel-white {\r\n  border: 1px solid #dddddd;\r\n}\r\n\r\n.panel-white .panel-heading {\r\n  color: #333;\r\n  background-color: #fff;\r\n  border-color: #ddd;\r\n}\r\n\r\n.panel-white .panel-footer {\r\n  background-color: #fff;\r\n  border-color: #ddd;\r\n}\r\n\r\n.post .post-heading {\r\n  height: 95px;\r\n  padding: 20px 15px;\r\n}\r\n\r\n.post .post-heading .avatar {\r\n  width: 60px;\r\n  height: 60px;\r\n  display: block;\r\n  margin-right: 15px;\r\n}\r\n\r\n.post .post-heading .meta .title {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.post .post-heading .meta .title a {\r\n  color: black;\r\n}\r\n\r\n.post .post-heading .meta .title a:hover {\r\n  color: #aaaaaa;\r\n}\r\n\r\n.post .post-heading .meta .time {\r\n  margin-top: 8px;\r\n  color: #999;\r\n}\r\n\r\n.post .post-image .image {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.post .post-description {\r\n  padding: 15px;\r\n}\r\n\r\n.post .post-description p {\r\n  font-size: 14px;\r\n}\r\n\r\n.post .post-description .stats {\r\n  margin-top: 20px;\r\n}\r\n\r\n.post .post-description .stats .stat-item {\r\n  display: inline-block;\r\n  margin-right: 15px;\r\n}\r\n\r\n.post .post-description .stats .stat-item .icon {\r\n  margin-right: 8px;\r\n}\r\n\r\n.post .post-footer {\r\n  border-top: 1px solid #ddd;\r\n  padding: 15px;\r\n}\r\n\r\n.post .post-footer .input-group-addon a {\r\n  color: #454545;\r\n}\r\n\r\n.post .post-footer .comments-list {\r\n  padding: 0;\r\n  margin-top: 20px;\r\n  list-style-type: none;\r\n}\r\n\r\n.post .post-footer .comments-list .comment {\r\n  display: block;\r\n  width: 100%;\r\n  margin: 20px 0;\r\n}\r\n\r\n.post .post-footer .comments-list .comment .avatar {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n.post .post-footer .comments-list .comment .comment-heading {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.post .post-footer .comments-list .comment .comment-heading .user {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  display: inline;\r\n  margin-top: 0;\r\n  margin-right: 10px;\r\n}\r\n\r\n.post .post-footer .comments-list .comment .comment-heading .time {\r\n  font-size: 12px;\r\n  color: #aaa;\r\n  margin-top: 0;\r\n  display: inline;\r\n}\r\n\r\n.post .post-footer .comments-list .comment .comment-body {\r\n  margin-left: 50px;\r\n}\r\n\r\n.post .post-footer .comments-list .comment > .comments-list {\r\n  margin-left: 50px;\r\n}\r\n\r\n/* CSS CREATE HIEU UNG CHO TOOLTIP SHOW DANH SACH NHUNG NGUOI DA LIKED*/\r\n\r\na.info{\r\n  position:relative; /*this is the key*/\r\n  color:#000;\r\n  text-decoration:none;\r\n  text-align:center;\r\n}\r\n\r\na.info span{display: none}\r\n\r\na.info:hover span{ /*the span will display just on :hover state*/\r\n  display:block;\r\n  position:absolute;\r\n  top:-65px;\r\n  width:15em;\r\n  height: 150px;\r\n  border:5px solid black;\r\n  background-color:black; color:white;\r\n  text-align: center;\r\n  padding:2px;\r\n  bottom:80%;\r\n}\r\n\r\na.info:hover span:after{ /*the span will display just on :hover state*/\r\n  content:'';\r\n  position:absolute;\r\n  bottom:-11px;\r\n  width:10px;\r\n  height:10px;\r\n  border-bottom:1px solid black;\r\n  border-right:1px solid black;\r\n  background:black;\r\n  left:50%;\r\n  margin-left:-5px;\r\n  -webkit-transform:rotate(45deg);\r\n  transform:rotate(45deg);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rLWRldGFpbC9ib29rLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzsrRUFFK0U7O0FBRS9FO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTs7OztNQUlNOztBQUVOLGVBQWU7O0FBQ2Y7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxnQ0FBZ0M7QUFDbEM7O0FBQ0E7O0VBRUUsU0FBUztFQUNULDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCOztBQUNBOztFQUVFLGNBQWM7QUFDaEI7O0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixVQUFVO0VBQ1o7QUFDRjs7QUFFQTs7K0VBRStFOztBQUUvRTtFQUNFLDBDQUEwQztFQUMxQyxVQUFVO0VBQ1Y7QUFDRjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQVFBLHVFQUF1RTs7QUFNdkU7RUFDRSxpQkFBaUIsRUFBRSxrQkFBa0I7RUFDckMsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBSUEsWUFBWSxhQUFhOztBQUV6QixtQkFBbUIsNkNBQTZDO0VBQzlELGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFFLFdBQVc7RUFDbkMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUEseUJBQXlCLDZDQUE2QztFQUNwRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixnQkFBZ0I7RUFFaEIsK0JBQStCO0VBQy9CLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9vay1kZXRhaWwvYm9vay1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEF1dGhvcidzIGN1c3RvbSBzdHlsZXNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZmItcHJvZmlsZSBpbWcuZmItaW1hZ2UtbGcge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZiLWltYWdlLXByb2ZpbGUge1xyXG4gIG1hcmdpbjogLTkwcHggMTBweCAyMHB4IDgwcHg7XHJcbiAgei1pbmRleDogOTtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4vKioqXHJcbiAgIEJvb3RzdHJhcCBMaW5lIFRhYnMgYnkgQGtlZW50aGVtZXNcclxuICAgQSBjb21wb25lbnQgb2YgTWV0cm9uaWMgVGhlbWUgLSAjMSBTZWxsaW5nIEJvb3RzdHJhcCAzIEFkbWluIFRoZW1lIGluIFRoZW1lZm9yZXN0OiBodHRwOi8vai5tcC9tZXRyb25pY3RoZW1lXHJcbiAgIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG4gICAqKiovXHJcblxyXG4vKiBUYWJzIHBhbmVsICovXHJcbi50YWJiYWJsZS1wYW5lbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4vKiBEZWZhdWx0IG1vZGUgKi9cclxuLnRhYmJhYmxlLWxpbmUgPiAubmF2LXRhYnMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4udGFiYmFibGUtbGluZSA+IC5uYXYtdGFicyA+IGxpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxufVxyXG4udGFiYmFibGUtbGluZSA+IC5uYXYtdGFicyA+IGxpID4gYSB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBjb2xvcjogIzczNzM3MztcclxufVxyXG4udGFiYmFibGUtbGluZSA+IC5uYXYtdGFicyA+IGxpID4gYSA+IGkge1xyXG4gIGNvbG9yOiAjYTZhNmE2O1xyXG59XHJcbi50YWJiYWJsZS1saW5lID4gLm5hdi10YWJzID4gbGkub3BlbixcclxuLnRhYmJhYmxlLWxpbmUgPiAubmF2LXRhYnMgPiBsaTpob3ZlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmYmNkY2Y7XHJcbn1cclxuLnRhYmJhYmxlLWxpbmUgPiAubmF2LXRhYnMgPiBsaS5vcGVuID4gYSxcclxuLnRhYmJhYmxlLWxpbmUgPiAubmF2LXRhYnMgPiBsaTpob3ZlciA+IGEge1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLnRhYmJhYmxlLWxpbmUgPiAubmF2LXRhYnMgPiBsaS5vcGVuID4gYSA+IGksXHJcbi50YWJiYWJsZS1saW5lID4gLm5hdi10YWJzID4gbGk6aG92ZXIgPiBhID4gaSB7XHJcbiAgY29sb3I6ICNhNmE2YTY7XHJcbn1cclxuLnRhYmJhYmxlLWxpbmUgPiAubmF2LXRhYnMgPiBsaS5vcGVuIC5kcm9wZG93bi1tZW51LFxyXG4udGFiYmFibGUtbGluZSA+IC5uYXYtdGFicyA+IGxpOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLnRhYmJhYmxlLWxpbmUgPiAubmF2LXRhYnMgPiBsaS5hY3RpdmUge1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjM1NjVkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udGFiYmFibGUtbGluZSA+IC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGEge1xyXG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi50YWJiYWJsZS1saW5lID4gLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYSA+IGkge1xyXG4gIGNvbG9yOiAjNDA0MDQwO1xyXG59XHJcbi50YWJiYWJsZS1saW5lID4gLnRhYi1jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxufVxyXG4ucG9ydGxldCAudGFiYmFibGUtbGluZSA+IC50YWItY29udGVudCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi8qIEJlbG93IHRhYnMgbW9kZSAqL1xyXG5cclxuLnRhYmJhYmxlLWxpbmUudGFicy1iZWxvdyA+IC5uYXYtdGFicyA+IGxpIHtcclxuICBib3JkZXItdG9wOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnRhYmJhYmxlLWxpbmUudGFicy1iZWxvdyA+IC5uYXYtdGFicyA+IGxpID4gYSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4udGFiYmFibGUtbGluZS50YWJzLWJlbG93ID4gLm5hdi10YWJzID4gbGk6aG92ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDA7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNmYmNkY2Y7XHJcbn1cclxuLnRhYmJhYmxlLWxpbmUudGFicy1iZWxvdyA+IC5uYXYtdGFicyA+IGxpLmFjdGl2ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICBib3JkZXItYm90dG9tOiAwO1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjZjM1NjVkO1xyXG59XHJcbi50YWJiYWJsZS1saW5lLnRhYnMtYmVsb3cgPiAudGFiLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIGJvcmRlci10b3A6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5tZW51X3RpdGxlIHtcclxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZiLXByb2ZpbGUtdGV4dCA+IGgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZmItaW1hZ2UtcHJvZmlsZSB7XHJcbiAgICBtYXJnaW46IC00NXB4IDEwcHggMHB4IDI1cHg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIENvbW1lbnQgYm94IHN0eWxlc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLnBhbmVsLXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDdweCA3cHggN3B4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmXHJcbn1cclxuLnBhbmVsLXdoaXRlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG59XHJcbi5wYW5lbC13aGl0ZSAucGFuZWwtaGVhZGluZyB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICNkZGQ7XHJcbn1cclxuLnBhbmVsLXdoaXRlIC5wYW5lbC1mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4ucG9zdCAucG9zdC1oZWFkaW5nIHtcclxuICBoZWlnaHQ6IDk1cHg7XHJcbiAgcGFkZGluZzogMjBweCAxNXB4O1xyXG59XHJcbi5wb3N0IC5wb3N0LWhlYWRpbmcgLmF2YXRhciB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4ucG9zdCAucG9zdC1oZWFkaW5nIC5tZXRhIC50aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ucG9zdCAucG9zdC1oZWFkaW5nIC5tZXRhIC50aXRsZSBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnBvc3QgLnBvc3QtaGVhZGluZyAubWV0YSAudGl0bGUgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNhYWFhYWE7XHJcbn1cclxuLnBvc3QgLnBvc3QtaGVhZGluZyAubWV0YSAudGltZSB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcbi5wb3N0IC5wb3N0LWltYWdlIC5pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5wb3N0IC5wb3N0LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5wb3N0IC5wb3N0LWRlc2NyaXB0aW9uIHAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucG9zdCAucG9zdC1kZXNjcmlwdGlvbiAuc3RhdHMge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnBvc3QgLnBvc3QtZGVzY3JpcHRpb24gLnN0YXRzIC5zdGF0LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnBvc3QgLnBvc3QtZGVzY3JpcHRpb24gLnN0YXRzIC5zdGF0LWl0ZW0gLmljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi5wb3N0IC5wb3N0LWZvb3RlciB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4ucG9zdCAucG9zdC1mb290ZXIgLmlucHV0LWdyb3VwLWFkZG9uIGEge1xyXG4gIGNvbG9yOiAjNDU0NTQ1O1xyXG59XHJcbi5wb3N0IC5wb3N0LWZvb3RlciAuY29tbWVudHMtbGlzdCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4ucG9zdCAucG9zdC1mb290ZXIgLmNvbW1lbnRzLWxpc3QgLmNvbW1lbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcbi5wb3N0IC5wb3N0LWZvb3RlciAuY29tbWVudHMtbGlzdCAuY29tbWVudCAuYXZhdGFyIHtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLnBvc3QgLnBvc3QtZm9vdGVyIC5jb21tZW50cy1saXN0IC5jb21tZW50IC5jb21tZW50LWhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wb3N0IC5wb3N0LWZvb3RlciAuY29tbWVudHMtbGlzdCAuY29tbWVudCAuY29tbWVudC1oZWFkaW5nIC51c2VyIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5wb3N0IC5wb3N0LWZvb3RlciAuY29tbWVudHMtbGlzdCAuY29tbWVudCAuY29tbWVudC1oZWFkaW5nIC50aW1lIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLnBvc3QgLnBvc3QtZm9vdGVyIC5jb21tZW50cy1saXN0IC5jb21tZW50IC5jb21tZW50LWJvZHkge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbi5wb3N0IC5wb3N0LWZvb3RlciAuY29tbWVudHMtbGlzdCAuY29tbWVudCA+IC5jb21tZW50cy1saXN0IHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogQ1NTIENSRUFURSBISUVVIFVORyBDSE8gVE9PTFRJUCBTSE9XIERBTkggU0FDSCBOSFVORyBOR1VPSSBEQSBMSUtFRCovXHJcblxyXG5cclxuXHJcblxyXG5cclxuYS5pbmZve1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlOyAvKnRoaXMgaXMgdGhlIGtleSovXHJcbiAgY29sb3I6IzAwMDtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5hLmluZm8gc3BhbntkaXNwbGF5OiBub25lfVxyXG5cclxuYS5pbmZvOmhvdmVyIHNwYW57IC8qdGhlIHNwYW4gd2lsbCBkaXNwbGF5IGp1c3Qgb24gOmhvdmVyIHN0YXRlKi9cclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDotNjVweDtcclxuICB3aWR0aDoxNWVtO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYm9yZGVyOjVweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrOyBjb2xvcjp3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzoycHg7XHJcbiAgYm90dG9tOjgwJTtcclxufVxyXG5cclxuYS5pbmZvOmhvdmVyIHNwYW46YWZ0ZXJ7IC8qdGhlIHNwYW4gd2lsbCBkaXNwbGF5IGp1c3Qgb24gOmhvdmVyIHN0YXRlKi9cclxuICBjb250ZW50OicnO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGJvdHRvbTotMTFweDtcclxuICB3aWR0aDoxMHB4O1xyXG4gIGhlaWdodDoxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yaWdodDoxcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDpibGFjaztcclxuICBsZWZ0OjUwJTtcclxuICBtYXJnaW4tbGVmdDotNXB4O1xyXG4gIC1tb3otdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/book-detail/book-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/book-detail/book-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_books__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/books */ "./src/app/models/books.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var src_app_models_reply_comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/reply-comment */ "./src/app/models/reply-comment.ts");
/* harmony import */ var src_app_services_wishlist_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/wishlist-cart.service */ "./src/app/services/wishlist-cart.service.ts");











let BookDetailComponent = class BookDetailComponent {
    constructor(http, _snackBar, router, bookService, cartService, route, commentService, wishlistCartService) {
        this.http = http;
        this._snackBar = _snackBar;
        this.router = router;
        this.bookService = bookService;
        this.cartService = cartService;
        this.route = route;
        this.commentService = commentService;
        this.wishlistCartService = wishlistCartService;
        this.bookList = [];
        this.book = new src_app_models_books__WEBPACK_IMPORTED_MODULE_2__["Books"]();
        this.numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.addBookSuccess = false;
        this.notEnoughStock = false;
        this.commentList = new Comment();
        this.replyCommentList = new src_app_models_reply_comment__WEBPACK_IMPORTED_MODULE_9__["ReplyComment"]();
        // public comment:Comment = new Comment();
        this.qtyLike = 1;
        this.clicked = false;
        this.clickedReply = false;
        this.isAddedToCartItemList = false;
        this.isAlreadyLiked = false;
        this.comment = new Comment();
        this.id = +this.route.snapshot.params["id"];
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 10000
        });
    }
    onAddToCart() {
        this.cartService.addItem(this.id, this.qty).subscribe(res => {
            this.router.navigate(["/shopping-cart"]);
        }, err => {
            this.notEnoughStock = true;
        });
    }
    onAddToWishListCart() {
        this.wishlistCartService.addWishListItem(this.id).subscribe(res => {
            this.isAddedToCartItemList = true;
            location.reload();
        }, err => {
        });
    }
    getWishListCartItem() {
        this.wishlistCartService.getWishListCartItem().subscribe(res => {
            this.wishListCartItemList = res.json();
            for (let wishListCartItem of this.wishListCartItemList) {
                if (wishListCartItem.book.id === this.id) {
                    this.isAddedToCartItemList = true;
                }
            }
        }, err => { });
    }
    onRelatedBooks() {
        this.bookService.relatedBooks(this.id).subscribe(res => {
            this.bookList = res.json();
        }, err => { });
    }
    onComment() {
        this.commentService.addComment(this.commentContent, this.id).subscribe(res => {
            this.getCommentListForBook();
            this.commentContent = "";
        }, err => { });
    }
    onReplyComment(commentId) {
        this.commentService.addReplyComment(this.replyCommentContent, commentId).subscribe(res => {
            this.getCommentListForBook();
            this.replyCommentContent = "";
        }, err => { });
    }
    openSnackBarForComment(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    getCommentListForBook() {
        this.commentService.getCommentListForBook(this.id).subscribe(res => {
            this.commentList = res.json();
        }, err => { });
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
        this.bookService.getCurrentBook(this.id).subscribe(res => {
            this.book = res.json();
        }, err => { });
    }
    needLogIn() {
        this.router.navigate(["/login"]);
    }
    onHitLike(commentId) {
        this.commentService.hitLike(commentId).subscribe(res => {
            this.getCommentListForBook();
            this.isAlreadyLiked = true;
            // this.getLikesList();
        }, err => { });
    }
    getLikesListBasedOnComment(commentId) {
        this.commentService.getLikesListBasedOnComment(commentId).subscribe(res => {
            this.likesListBasedOnComment = res.json();
        }, err => { });
    }
    clickReply() {
        this.clickedReply = !this.clickedReply;
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
        }
        else {
            this.isLoggedIn = false;
        }
    }
};
BookDetailComponent.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_services_comment_service__WEBPACK_IMPORTED_MODULE_8__["CommentService"] },
    { type: src_app_services_wishlist_cart_service__WEBPACK_IMPORTED_MODULE_10__["WishlistCartService"] }
];
BookDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-book-detail",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-detail/book-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-detail.component.css */ "./src/app/components/book-detail/book-detail.component.css")).default]
    })
], BookDetailComponent);



/***/ }),

/***/ "./src/app/components/book-list-category/book-list-category.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/book-list-category/book-list-category.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\r\n  font-family: Lato, \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n}\r\n\r\nh5 {\r\n  font-size: 1.28571429em;\r\n  font-weight: 700;\r\n  line-height: 1.2857em;\r\n  margin: 0;\r\n}\r\n\r\n.card {\r\n  font-size: 1em;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  border: none;\r\n  border-radius: 0.28571429rem;\r\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\r\n}\r\n\r\n.card-block {\r\n  font-size: 1em;\r\n  position: relative;\r\n  margin: 0;\r\n  padding: 1em;\r\n  border: none;\r\n  border-top: 1px solid rgba(34, 36, 38, 0.1);\r\n  box-shadow: none;\r\n}\r\n\r\n.card-img-top {\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.card-title {\r\n  font-size: 1.28571429em;\r\n  font-weight: 700;\r\n  line-height: 1.2857em;\r\n}\r\n\r\n.card-text {\r\n  clear: both;\r\n  margin-top: 0.5em;\r\n  color: rgba(0, 0, 0, 0.68);\r\n}\r\n\r\n.card-footer {\r\n  font-size: 1em;\r\n  position: static;\r\n  top: 0;\r\n  left: 0;\r\n  max-width: 100%;\r\n  padding: 0.75em 1em;\r\n  color: rgba(0, 0, 0, 0.4);\r\n  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;\r\n  background: #fff;\r\n}\r\n\r\n.card-inverse .btn {\r\n  border: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.profile {\r\n  position: absolute;\r\n  top: -12px;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  width: 25px;\r\n  height: 25px;\r\n  margin: 0;\r\n  border: 1px solid #fff;\r\n  border-radius: 50%;\r\n}\r\n\r\n.profile-avatar {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.profile-inline {\r\n  position: relative;\r\n  top: 0;\r\n  display: inline-block;\r\n}\r\n\r\n.profile-inline ~ .card-title {\r\n  display: inline-block;\r\n  margin-left: 4px;\r\n  vertical-align: top;\r\n}\r\n\r\n.text-bold {\r\n  font-weight: 700;\r\n}\r\n\r\n.meta {\r\n  font-size: 1em;\r\n  color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.meta a {\r\n  text-decoration: none;\r\n  color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.meta a:hover {\r\n  color: rgba(0, 0, 0, 0.87);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rLWxpc3QtY2F0ZWdvcnkvYm9vay1saXN0LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpRUFBaUU7RUFDakUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7RUFDWiwyQ0FBMkM7RUFDM0MsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sT0FBTztFQUNQLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG9EQUFvRDtFQUNwRCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jvb2stbGlzdC1jYXRlZ29yeS9ib29rLWxpc3QtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI5cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNkNGQ0ZDUsIDAgMCAwIDFweCAjZDRkNGQ1O1xyXG59XHJcblxyXG4uY2FyZC1ibG9jayB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDM0LCAzNiwgMzgsIDAuMSk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbn1cclxuXHJcbi5jYXJkLXRleHQge1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjgpO1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNzVlbSAxZW07XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5jYXJkLWludmVyc2UgLmJ0biB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnByb2ZpbGUtYXZhdGFyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbmxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbmxpbmUgfiAuY2FyZC10aXRsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLnRleHQtYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm1ldGEge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5tZXRhIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4ubWV0YSBhOmhvdmVyIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/book-list-category/book-list-category.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/book-list-category/book-list-category.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BookListCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListCategoryComponent", function() { return BookListCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var src_app_models_books__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/books */ "./src/app/models/books.ts");
/* harmony import */ var src_app_services_cates_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cates.service */ "./src/app/services/cates.service.ts");
/* harmony import */ var src_app_models_cates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/cates */ "./src/app/models/cates.ts");








let BookListCategoryComponent = class BookListCategoryComponent {
    constructor(bookService, http, route, catesService) {
        this.bookService = bookService;
        this.http = http;
        this.route = route;
        this.catesService = catesService;
        // public catesId: number;
        this.books = new src_app_models_books__WEBPACK_IMPORTED_MODULE_5__["Books"]();
        this.cate = new src_app_models_cates__WEBPACK_IMPORTED_MODULE_7__["Cates"]();
        this.dataFetched = false;
    }
    handleParams() {
        this.subscription = this.route.params.subscribe(data => {
            let id = data.id;
            this.bookService.getBookListByCategory(id).subscribe(res => {
                this.books = res.json();
                this.dataFetched = true;
            }, error => {
            });
            this.catesService.getCatesDetail(id).subscribe(res => {
                this.cate = res.json();
            }, error => {
            });
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
        let check = true;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
BookListCategoryComponent.ctorParameters = () => [
    { type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_cates_service__WEBPACK_IMPORTED_MODULE_6__["CatesService"] }
];
BookListCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-book-list-category",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-list-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list-category/book-list-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-list-category.component.css */ "./src/app/components/book-list-category/book-list-category.component.css")).default]
    })
], BookListCategoryComponent);



/***/ }),

/***/ "./src/app/components/book-list-search/book-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/book-list-search/book-list.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\r\n  font-family: Lato, \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n  font-size: 14px;\r\n}\r\n\r\nh5 {\r\n  font-size: 1.28571429em;\r\n  font-weight: 700;\r\n  line-height: 1.2857em;\r\n  margin: 0;\r\n}\r\n\r\n.card {\r\n  font-size: 1em;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  border: none;\r\n  border-radius: 0.28571429rem;\r\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\r\n}\r\n\r\n.card-block {\r\n  font-size: 1em;\r\n  position: relative;\r\n  margin: 0;\r\n  padding: 1em;\r\n  border: none;\r\n  border-top: 1px solid rgba(34, 36, 38, 0.1);\r\n  box-shadow: none;\r\n}\r\n\r\n.card-img-top {\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.card-title {\r\n  font-size: 1.28571429em;\r\n  font-weight: 700;\r\n  line-height: 1.2857em;\r\n}\r\n\r\n.card-text {\r\n  clear: both;\r\n  margin-top: 0.5em;\r\n  color: rgba(0, 0, 0, 0.68);\r\n}\r\n\r\n.card-footer {\r\n  font-size: 1em;\r\n  position: static;\r\n  top: 0;\r\n  left: 0;\r\n  max-width: 100%;\r\n  padding: 0.75em 1em;\r\n  color: rgba(0, 0, 0, 0.4);\r\n  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;\r\n  background: #fff;\r\n}\r\n\r\n.card-inverse .btn {\r\n  border: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.profile {\r\n  position: absolute;\r\n  top: -12px;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  width: 25px;\r\n  height: 25px;\r\n  margin: 0;\r\n  border: 1px solid #fff;\r\n  border-radius: 50%;\r\n}\r\n\r\n.profile-avatar {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.profile-inline {\r\n  position: relative;\r\n  top: 0;\r\n  display: inline-block;\r\n}\r\n\r\n.profile-inline ~ .card-title {\r\n  display: inline-block;\r\n  margin-left: 4px;\r\n  vertical-align: top;\r\n}\r\n\r\n.text-bold {\r\n  font-weight: 700;\r\n}\r\n\r\n.meta {\r\n  font-size: 1em;\r\n  color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.meta a {\r\n  text-decoration: none;\r\n  color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.meta a:hover {\r\n  color: rgba(0, 0, 0, 0.87);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rLWxpc3Qtc2VhcmNoL2Jvb2stbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUVBQWlFO0VBQ2pFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1osMkNBQTJDO0VBQzNDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLE9BQU87RUFDUCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixvREFBb0Q7RUFDcEQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib29rLWxpc3Qtc2VhcmNoL2Jvb2stbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICBmb250LXNpemU6IDEuMjg1NzE0MjllbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW07XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2Q0ZDRkNSwgMCAwIDAgMXB4ICNkNGQ0ZDU7XHJcbn1cclxuXHJcbi5jYXJkLWJsb2NrIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMzQsIDM2LCAzOCwgMC4xKTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuMjg1NzE0MjllbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42OCk7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC43NWVtIDFlbTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmNhcmQtaW52ZXJzZSAuYnRuIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcblxyXG4ucHJvZmlsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTEycHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1hdmF0YXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWlubGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5wcm9maWxlLWlubGluZSB+IC5jYXJkLXRpdGxlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4udGV4dC1ib2xkIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubWV0YSB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLm1ldGEgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5tZXRhIGE6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/book-list-search/book-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/book-list-search/book-list.component.ts ***!
  \********************************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let BookListComponent = class BookListComponent {
    constructor(route) {
        this.route = route;
        this.bookList = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['keyword']) {
                this.bookList = JSON.parse(params['keyword']);
            }
        });
    }
};
BookListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/book-list-search/book-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book-list.component.css */ "./src/app/components/book-list-search/book-list.component.css")).default]
    })
], BookListComponent);



/***/ }),

/***/ "./src/app/components/check-out/check-out.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/check-out/check-out.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2stb3V0L2NoZWNrLW91dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/check-out/check-out.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/check-out/check-out.component.ts ***!
  \*************************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/app-constants */ "./src/app/constants/app-constants.ts");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
/* harmony import */ var src_app_models_order_payment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/order-payment */ "./src/app/models/order-payment.ts");
/* harmony import */ var src_app_models_user_payment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user-payment */ "./src/app/models/user-payment.ts");
/* harmony import */ var src_app_models_user_shipping__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/user-shipping */ "./src/app/models/user-shipping.ts");
/* harmony import */ var src_app_models_order_shipping_address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/order-shipping-address */ "./src/app/models/order-shipping-address.ts");
/* harmony import */ var src_app_models_order_billing_address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/order-billing-address */ "./src/app/models/order-billing-address.ts");
/* harmony import */ var src_app_models_shopping_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/shopping-cart */ "./src/app/models/shopping-cart.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_user_shipping_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/user-shipping.service */ "./src/app/services/user-shipping.service.ts");
/* harmony import */ var src_app_services_user_payment_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/user-payment.service */ "./src/app/services/user-payment.service.ts");
/* harmony import */ var src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
















let CheckOutComponent = class CheckOutComponent {
    constructor(router, http, cartService, shippingService, paymentService, checkoutService) {
        this.router = router;
        this.http = http;
        this.cartService = cartService;
        this.shippingService = shippingService;
        this.paymentService = paymentService;
        this.checkoutService = checkoutService;
        this.serverPath = src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConst"].UserPath;
        this.cartItemList = [];
        this.shoppingCart = new src_app_models_shopping_cart__WEBPACK_IMPORTED_MODULE_9__["ShoppingCart"]();
        this.orderShippingAddress = new src_app_models_order_shipping_address__WEBPACK_IMPORTED_MODULE_7__["OrderShippingAddress"]();
        this.orderBillingAddress = new src_app_models_order_billing_address__WEBPACK_IMPORTED_MODULE_8__["OrderBillingAddress"]();
        this.userPayment = new src_app_models_user_payment__WEBPACK_IMPORTED_MODULE_5__["UserPayment"]();
        this.userShipping = new src_app_models_user_shipping__WEBPACK_IMPORTED_MODULE_6__["UserShipping"]();
        // public userBilling: UserBilling = new UserBilling();
        this.userShippingList = [];
        this.userPaymentList = [];
        this.orderPayment = new src_app_models_order_payment__WEBPACK_IMPORTED_MODULE_4__["OrderPayment"]();
        this.emptyShippingList = true;
        this.emptyPaymentList = true;
        this.stateList = [];
        this.order = new src_app_models_order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
    }
    onSelect(book) {
        this.selectedBook = book;
        this.router.navigate(["/bookDetail", this.selectedBook.id]);
    }
    selectedChange(val) {
        this.selectedTab = val;
    }
    goToPayment() {
        this.selectedTab = 1;
    }
    goToReview() {
        this.selectedTab = 2;
    }
    getCartItemList() {
        this.cartService.getCartItemList().subscribe(res => {
            this.cartItemList = res.json();
            this.cartItemNumber = this.cartItemList.length;
        }, error => {
        });
    }
    setShippingAddress(userShipping) {
        this.orderShippingAddress.shippingAddressName =
            userShipping.userShippingName;
        this.orderShippingAddress.shippingAddressStreet =
            userShipping.userShippingStreet;
        this.orderShippingAddress.shippingAddressCity =
            userShipping.userShippingCity;
        this.orderShippingAddress.shippingAddressState =
            userShipping.userShippingState;
        this.orderShippingAddress.shippingAddressCountry =
            userShipping.userShippingCountry;
        this.orderShippingAddress.shippingAddressZipcode =
            userShipping.userShippingZipcode;
    }
    setPaymentMethod(userPayment) {
        this.orderPayment.cardName = userPayment.cardName;
        this.orderPayment.cardNumber = userPayment.cardNumber;
        this.orderPayment.expiryDate = userPayment.expiryDate;
        this.orderPayment.securityCode = userPayment.securityCode;
        this.orderPayment.state = userPayment.state;
        this.orderPayment.zipCode = userPayment.zipCode;
        this.orderPayment.defaultPayment = userPayment.defaultPayment;
    }
    setBillingAsShipping(checked) {
        if (checked) {
            this.orderBillingAddress.billingAddressName = this.orderShippingAddress.shippingAddressName;
            this.orderBillingAddress.billingAddressStreet = this.orderShippingAddress.shippingAddressStreet;
            this.orderBillingAddress.billingAddressCity = this.orderShippingAddress.shippingAddressCity;
            this.orderBillingAddress.billingAddressState = this.orderShippingAddress.shippingAddressState;
            this.orderBillingAddress.billingAddressCountry = this.orderShippingAddress.shippingAddressCountry;
            this.orderBillingAddress.billingAddressZipcode = this.orderShippingAddress.shippingAddressZipcode;
        }
        else {
            this.orderBillingAddress.billingAddressName = "";
            this.orderBillingAddress.billingAddressStreet = "";
            this.orderBillingAddress.billingAddressCity = "";
            this.orderBillingAddress.billingAddressState = "";
            this.orderBillingAddress.billingAddressCountry = "";
            this.orderBillingAddress.billingAddressZipcode = "";
        }
    }
    onSubmit() {
        this.checkoutService
            .checkout(this.orderShippingAddress, this.orderBillingAddress, this.orderPayment, this.shippingMethod)
            .subscribe(res => {
            this.order = res.json();
            let navigationExtras = {
                queryParams: {
                    order: JSON.stringify(this.order)
                }
            };
            this.router.navigate(["/orderSummary"], navigationExtras);
        }, error => {
        });
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (this.currentUser) {
            this.getCartItemList();
            this.cartService.getShoppingCart().subscribe(res => {
                this.shoppingCart = res.json();
            }, error => {
            });
            this.shippingService.getUserShippingList().subscribe(res => {
                this.userShippingList = res.json();
                if (this.userShippingList.length) {
                    this.emptyShippingList = false;
                    // for (let userShipping of this.userShippingList) {
                    //   if (userShipping.userShippingDefault) {
                    //     this.setShippingAddress(userShipping);
                    //     return;
                    //   }
                    // }
                }
            }, error => {
            });
            this.paymentService.getUserPaymentList().subscribe(res => {
                this.userPaymentList = res.json();
                this.emptyPaymentList = false;
                if (this.userPaymentList.length) {
                    this.emptyPaymentList = false;
                    // for (let userPayment of this.userPaymentList) {
                    //   if (userPayment.defaultPayment) {
                    //     this.setPaymentMethod(userPayment);
                    //     return;
                    //   }
                    // }
                }
            }, error => {
            });
            for (let s in src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConst"].usStates) {
                this.stateList.push(s);
            }
            // this.orderPayment.expiryDate = "";
            // this.orderBillingAddress.billingAddressState = "";
            this.orderShippingAddress.shippingAddressName = "";
            this.orderShippingAddress.shippingAddressStreet = "";
            this.orderShippingAddress.shippingAddressCity = "";
            this.orderShippingAddress.shippingAddressState = "";
            this.orderShippingAddress.shippingAddressCountry = "";
            this.orderShippingAddress.shippingAddressZipcode = "";
            this.shippingMethod = "groundShipping";
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    }
};
CheckOutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_15__["Http"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_11__["CartService"] },
    { type: src_app_services_user_shipping_service__WEBPACK_IMPORTED_MODULE_12__["UserShippingService"] },
    { type: src_app_services_user_payment_service__WEBPACK_IMPORTED_MODULE_13__["UserPaymentService"] },
    { type: src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_14__["CheckoutService"] }
];
CheckOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-check-out",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./check-out.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/check-out/check-out.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./check-out.component.css */ "./src/app/components/check-out/check-out.component.css")).default]
    })
], CheckOutComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() { }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/log-in/log-in.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/log-in/log-in.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nLWluL2xvZy1pbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/log-in/log-in.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/log-in/log-in.component.ts ***!
  \*******************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_upload_image_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/upload-image-user.service */ "./src/app/services/upload-image-user.service.ts");







let LogInComponent = class LogInComponent {
    constructor(loginService, userService, router, uploadImageUserService) {
        this.loginService = loginService;
        this.userService = userService;
        this.router = router;
        this.uploadImageUserService = uploadImageUserService;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.userRegister = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.newUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.isRegisteredSuccess = false;
        this.usernameExists = false;
        this.emailExists = false;
        this.passwordLength = false;
        this.passwordNotMatch = false;
        this.emailNotMatch = false;
        this.loginError = false;
        this.isForgotPassword = false;
        this.emailNotFound = false;
        this.emailFound = false;
    }
    onLogin() {
        this.loginService.login(this.user).subscribe(res => {
            localStorage.setItem("currentUser", JSON.stringify(res.json()));
            // this.router.navigateByUrl(`/`).then(() => {
            //   this.router.navigateByUrl("/my-account/home");
            // });
            window.location.href = "/my-account/home";
        }, err => {
            this.loginError = true;
            this.user.password = "";
        });
    }
    onRegister() {
        this.userService.register(this.userRegister).subscribe(res => {
            this.uploadImageUserService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
            this.newUser = res.json();
            this.isRegisteredSuccess = true;
        }, err => {
            let errorMessage = err.text();
            if (errorMessage == "usernameExists")
                this.usernameExists = true;
            if (errorMessage == "emailExists")
                this.emailExists = true;
            if (errorMessage == "passwordLength")
                this.passwordLength = true;
            if (errorMessage == "passwordNotMatch")
                this.passwordNotMatch = true;
            if (errorMessage == "emailNotMatch")
                this.emailNotMatch = true;
        });
    }
    forgotPassword() {
        this.isForgotPassword = !this.isForgotPassword;
    }
    onForgotPassword() {
        this.loginService.retrievePassword(this.getPasswordEmail).subscribe(res => {
            this.emailNotFound = true;
            // this.emailFound = true;
        }, err => {
            let errorMessage = err.text();
            if ((errorMessage = "Email Not Found"))
                this.emailFound = true;
        });
    }
    ngOnInit() { }
};
LogInComponent.ctorParameters = () => [
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_upload_image_user_service__WEBPACK_IMPORTED_MODULE_6__["UploadImageUserService"] }
];
LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-log-in",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./log-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/log-in/log-in.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./log-in.component.css */ "./src/app/components/log-in/log-in.component.css")).default]
    })
], LogInComponent);



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[hidden] {\r\n    display: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbaGlkZGVuXSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent, DialogHowToUseDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogHowToUseDialog", function() { return DialogHowToUseDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_cates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cates.service */ "./src/app/services/cates.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var src_app_models_books__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/books */ "./src/app/models/books.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_wishlist_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/wishlist-cart.service */ "./src/app/services/wishlist-cart.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");











let NavBarComponent = class NavBarComponent {
    constructor(catesService, cartService, loginService, bookService, router, http, wishlistCartService, dialog) {
        this.catesService = catesService;
        this.cartService = cartService;
        this.loginService = loginService;
        this.bookService = bookService;
        this.router = router;
        this.http = http;
        this.wishlistCartService = wishlistCartService;
        this.dialog = dialog;
        this.cates = [];
        this.bookList = [];
        this.searchOption = "Search All";
        this.isLoggedIn = false;
        this.cartItemList = [];
        this.dataFetched = false;
        this.sachs = new src_app_models_books__WEBPACK_IMPORTED_MODULE_6__["Books"]();
        this.searchOption1 = "Search All";
    }
    getCatesList() {
        this.catesService.getCatesList().subscribe(res => {
            this.cates = res.json();
            this.dataFetched = true;
        }, err => { });
    }
    openNoticeHowToUse() {
        const dialogRef = this.dialog.open(DialogHowToUseDialog, {
        // width: "450px"
        });
        dialogRef.afterClosed().subscribe(result => { });
    }
    onLogout() {
        this.loginService.logout().subscribe(res => {
            this.isLoggedIn = false;
            this.router.navigate(["/"]);
        }, error => { });
    }
    onSearch() {
        this.bookService.searchBook(this.keyword, this.searchOption).subscribe(res => {
            this.bookList = res.json();
            let navigationExtras = {
                queryParams: {
                    keyword: JSON.stringify(this.bookList)
                }
            };
            this.router.navigate(["/bookList"], navigationExtras);
        }, err => { });
    }
    ketqua(e) {
        this.bookService.searchBook(e, this.searchOption1).subscribe(res => {
            this.sachs = res.json();
        }, err => { });
    }
    getCartItemList() {
        this.cartService.getCartItemList().subscribe(res => {
            this.cartItemList = res.json();
            this.cartItemNumber = this.cartItemList.length;
        }, error => { });
    }
    getWishListCartItem() {
        this.wishlistCartService.getWishListCartItem().subscribe(res => {
            this.wishListCartItemList = res.json();
        }, err => { });
    }
    removeWishListCartItem(wishListCartItemId) {
        this.wishlistCartService
            .removeWishListCartItem(wishListCartItemId)
            .subscribe(res => {
            this.getWishListCartItem();
        }, err => { });
    }
    ngOnInit() {
        this.getCatesList();
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (this.currentUser) {
            this.isLoggedIn = true;
            this.name = this.currentUser.name;
            this.getCartItemList();
            this.getWishListCartItem();
        }
        else {
            this.isLoggedIn = false;
        }
    }
};
NavBarComponent.ctorParameters = () => [
    { type: src_app_services_cates_service__WEBPACK_IMPORTED_MODULE_2__["CatesService"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_5__["BookService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"] },
    { type: src_app_services_wishlist_cart_service__WEBPACK_IMPORTED_MODULE_9__["WishlistCartService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-nav-bar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")).default]
    })
], NavBarComponent);

let DialogHowToUseDialog = class DialogHowToUseDialog {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() { }
};
DialogHowToUseDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"] }
];
DialogHowToUseDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "how-to-use",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-how-to-use.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-bar/dialog-how-to-use.html")).default
    })
], DialogHowToUseDialog);



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/components/order-summary/order-summary.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/order-summary/order-summary.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/order-summary/order-summary.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/order-summary/order-summary.component.ts ***!
  \*********************************************************************/
/*! exports provided: OrderSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryComponent", function() { return OrderSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/app-constants */ "./src/app/constants/app-constants.ts");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");






let OrderSummaryComponent = class OrderSummaryComponent {
    constructor(checkoutService, route, router) {
        this.checkoutService = checkoutService;
        this.route = route;
        this.router = router;
        this.userPath = src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConst"].UserPath;
        this.order = new src_app_models_order__WEBPACK_IMPORTED_MODULE_5__["Order"]();
        this.cartItemList = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.order = JSON.parse(params['order']);
            let deliveryDate = new Date();
            if (this.order.shippingMethod == "groundShipping") {
                deliveryDate.setDate(deliveryDate.getDate() + 5);
            }
            else {
                deliveryDate.setDate(deliveryDate.getDate() + 3);
            }
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            this.estimatedDeliveryDate = days[deliveryDate.getDay()] + ', ' + deliveryDate.getFullYear() + '/' + deliveryDate.getMonth() + '/' + deliveryDate.getDate();
            this.cartItemList = this.order.cartItemList;
        });
    }
};
OrderSummaryComponent.ctorParameters = () => [
    { type: src_app_services_checkout_service__WEBPACK_IMPORTED_MODULE_2__["CheckoutService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
OrderSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-summary/order-summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-summary.component.css */ "./src/app/components/order-summary/order-summary.component.css")).default]
    })
], OrderSummaryComponent);



/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#invoice{\r\n    padding: 30px;\r\n}\r\n\r\n.invoice {\r\n    position: relative;\r\n    background-color: #FFF;\r\n    height: 100%;\r\n    padding: 15px\r\n}\r\n\r\n.invoice header {\r\n    padding: 10px 0;\r\n    margin-bottom: 20px;\r\n    border-bottom: 1px solid #3989c6\r\n}\r\n\r\n.invoice .company-details {\r\n    text-align: right\r\n}\r\n\r\n.invoice .company-details .name {\r\n    margin-top: 0;\r\n    margin-bottom: 0\r\n}\r\n\r\n.invoice .contacts {\r\n    margin-bottom: 20px\r\n}\r\n\r\n.invoice .invoice-to {\r\n    text-align: left\r\n}\r\n\r\n.invoice .invoice-to .to {\r\n    margin-top: 0;\r\n    margin-bottom: 0\r\n}\r\n\r\n.invoice .invoice-details {\r\n    text-align: right\r\n}\r\n\r\n.invoice .invoice-details .invoice-id {\r\n    margin-top: 0;\r\n    color: #3989c6\r\n}\r\n\r\n.invoice main {\r\n    padding-bottom: 50px\r\n}\r\n\r\n.invoice main .thanks {\r\n    margin-top: -100px;\r\n    font-size: 2em;\r\n    margin-bottom: 50px\r\n}\r\n\r\n.invoice main .notices {\r\n    padding-left: 6px;\r\n    border-left: 6px solid #3989c6\r\n}\r\n\r\n.invoice main .notices .notice {\r\n    font-size: 1.2em\r\n}\r\n\r\n.invoice table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    margin-bottom: 20px\r\n}\r\n\r\n.invoice table td,.invoice table th {\r\n    padding: 15px;\r\n    background: #eee;\r\n    border-bottom: 1px solid #fff\r\n}\r\n\r\n.invoice table th {\r\n    white-space: nowrap;\r\n    font-weight: 400;\r\n    font-size: 16px\r\n}\r\n\r\n.invoice table td h3 {\r\n    margin: 0;\r\n    font-weight: 400;\r\n    color: #3989c6;\r\n    font-size: 1.2em\r\n}\r\n\r\n.invoice table .qty,.invoice table .total,.invoice table .unit {\r\n    text-align: right;\r\n    font-size: 1.2em\r\n}\r\n\r\n.invoice table .no {\r\n    color: #fff;\r\n    font-size: 1.6em;\r\n    background: #3989c6\r\n}\r\n\r\n.invoice table .unit {\r\n    background: #ddd\r\n}\r\n\r\n.invoice table .total {\r\n    background: #3989c6;\r\n    color: #fff\r\n}\r\n\r\n.invoice table tbody tr:last-child td {\r\n    border: none\r\n}\r\n\r\n.invoice table tfoot td {\r\n    background: 0 0;\r\n    border-bottom: none;\r\n    white-space: nowrap;\r\n    text-align: right;\r\n    padding: 10px 20px;\r\n    font-size: 1.2em;\r\n    border-top: 1px solid #aaa\r\n}\r\n\r\n.invoice table tfoot tr:first-child td {\r\n    border-top: none\r\n}\r\n\r\n.invoice table tfoot tr:last-child td {\r\n    color: #3989c6;\r\n    font-size: 1.4em;\r\n    border-top: 1px solid #3989c6\r\n}\r\n\r\n.invoice table tfoot tr td:first-child {\r\n    border: none\r\n}\r\n\r\n.invoice footer {\r\n    width: 100%;\r\n    text-align: center;\r\n    color: #777;\r\n    border-top: 1px solid #aaa;\r\n    padding: 8px 0\r\n}\r\n\r\n@media print {\r\n    .invoice {\r\n        font-size: 11px!important;\r\n        overflow: hidden!important\r\n    }\r\n\r\n    .invoice footer {\r\n        position: absolute;\r\n        bottom: 10px;\r\n        page-break-after: always\r\n    }\r\n\r\n    .invoice>div:last-child {\r\n        page-break-before: always\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDBCQUEwQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7UUFDekI7SUFDSjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1o7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW52b2ljZXtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5pbnZvaWNlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4XHJcbn1cclxuXHJcbi5pbnZvaWNlIGhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzOTg5YzZcclxufVxyXG5cclxuLmludm9pY2UgLmNvbXBhbnktZGV0YWlscyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodFxyXG59XHJcblxyXG4uaW52b2ljZSAuY29tcGFueS1kZXRhaWxzIC5uYW1lIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwXHJcbn1cclxuXHJcbi5pbnZvaWNlIC5jb250YWN0cyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4XHJcbn1cclxuXHJcbi5pbnZvaWNlIC5pbnZvaWNlLXRvIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnRcclxufVxyXG5cclxuLmludm9pY2UgLmludm9pY2UtdG8gLnRvIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwXHJcbn1cclxuXHJcbi5pbnZvaWNlIC5pbnZvaWNlLWRldGFpbHMge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxufVxyXG5cclxuLmludm9pY2UgLmludm9pY2UtZGV0YWlscyAuaW52b2ljZS1pZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6ICMzOTg5YzZcclxufVxyXG5cclxuLmludm9pY2UgbWFpbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweFxyXG59XHJcblxyXG4uaW52b2ljZSBtYWluIC50aGFua3Mge1xyXG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4XHJcbn1cclxuXHJcbi5pbnZvaWNlIG1haW4gLm5vdGljZXMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICMzOTg5YzZcclxufVxyXG5cclxuLmludm9pY2UgbWFpbiAubm90aWNlcyAubm90aWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW1cclxufVxyXG5cclxuLmludm9pY2UgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4XHJcbn1cclxuXHJcbi5pbnZvaWNlIHRhYmxlIHRkLC5pbnZvaWNlIHRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZcclxufVxyXG5cclxuLmludm9pY2UgdGFibGUgdGgge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHhcclxufVxyXG5cclxuLmludm9pY2UgdGFibGUgdGQgaDMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMzk4OWM2O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbVxyXG59XHJcblxyXG4uaW52b2ljZSB0YWJsZSAucXR5LC5pbnZvaWNlIHRhYmxlIC50b3RhbCwuaW52b2ljZSB0YWJsZSAudW5pdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW1cclxufVxyXG5cclxuLmludm9pY2UgdGFibGUgLm5vIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgIGJhY2tncm91bmQ6ICMzOTg5YzZcclxufVxyXG5cclxuLmludm9pY2UgdGFibGUgLnVuaXQge1xyXG4gICAgYmFja2dyb3VuZDogI2RkZFxyXG59XHJcblxyXG4uaW52b2ljZSB0YWJsZSAudG90YWwge1xyXG4gICAgYmFja2dyb3VuZDogIzM5ODljNjtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5pbnZvaWNlIHRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQgdGQge1xyXG4gICAgYm9yZGVyOiBub25lXHJcbn1cclxuXHJcbi5pbnZvaWNlIHRhYmxlIHRmb290IHRkIHtcclxuICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhYWFcclxufVxyXG5cclxuLmludm9pY2UgdGFibGUgdGZvb3QgdHI6Zmlyc3QtY2hpbGQgdGQge1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZVxyXG59XHJcblxyXG4uaW52b2ljZSB0YWJsZSB0Zm9vdCB0cjpsYXN0LWNoaWxkIHRkIHtcclxuICAgIGNvbG9yOiAjMzk4OWM2O1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzk4OWM2XHJcbn1cclxuXHJcbi5pbnZvaWNlIHRhYmxlIHRmb290IHRyIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZVxyXG59XHJcblxyXG4uaW52b2ljZSBmb290ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhO1xyXG4gICAgcGFkZGluZzogOHB4IDBcclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5pbnZvaWNlIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHghaW1wb3J0YW50O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW4haW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgLmludm9pY2UgZm9vdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5c1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnZvaWNlPmRpdjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBwYWdlLWJyZWFrLWJlZm9yZTogYWx3YXlzXHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_shopping_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/shopping-cart */ "./src/app/models/shopping-cart.ts");
/* harmony import */ var src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/app-constants */ "./src/app/constants/app-constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");







let ShoppingCartComponent = class ShoppingCartComponent {
    constructor(router, http, cartService) {
        this.router = router;
        this.http = http;
        this.cartService = cartService;
        this.serverPath = src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath;
        this.cartItemList = [];
        this.shoppingCart = new src_app_models_shopping_cart__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"]();
        // this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    onSelect(book) {
        this.selectedBook = book;
        this.router.navigate(["/books", this.selectedBook.id]);
    }
    onRemoveCartItem(cartItem) {
        this.cartService.removeCartItem(cartItem.id).subscribe(res => {
            this.getCartItemList();
            this.getShoppingCart();
        }, error => {
        });
    }
    onUpdateCartItem(cartItem) {
        this.cartService.updateCartItem(cartItem.id, cartItem.qty).subscribe(res => {
            this.cartItemUpdated = true;
            this.getShoppingCart();
            this.getCartItemList();
        }, error => {
            this.notEnoughStock = true;
        });
    }
    getCartItemList() {
        this.cartService.getCartItemList().subscribe(res => {
            this.cartItemList = res.json();
            this.cartItemNumber = this.cartItemList.length;
        }, error => {
        });
    }
    getShoppingCart() {
        this.cartService.getShoppingCart().subscribe(res => {
            this.shoppingCart = res.json();
        }, error => {
        });
    }
    continueCheckout() {
        this.router.navigate(["/check-out"]);
    }
    //   onCheckout() {
    //   	if(this.cartItemNumber==0) {
    //   		this.emptyCart=true;
    //   	} else {
    //   		for (let item of this.cartItemList) {
    //   			if (item.qty > item.book.inStockNumber) {
    //   				
    //   				this.notEnoughStock=true;
    //   				return;
    //   			}
    //   		}
    //   	}
    //   }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (this.currentUser) {
            this.getCartItemList();
            this.getShoppingCart();
        }
    }
};
ShoppingCartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-shopping-cart",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/components/shopping-cart/shopping-cart.component.css")).default]
    })
], ShoppingCartComponent);



/***/ }),

/***/ "./src/app/components/unauthorized/unauthorized.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/unauthorized/unauthorized.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/unauthorized/unauthorized.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/unauthorized/unauthorized.component.ts ***!
  \*******************************************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return UnauthorizedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UnauthorizedComponent = class UnauthorizedComponent {
    constructor() { }
    ngOnInit() {
    }
};
UnauthorizedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unauthorized',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unauthorized.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/unauthorized/unauthorized.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unauthorized.component.css */ "./src/app/components/unauthorized/unauthorized.component.css")).default]
    })
], UnauthorizedComponent);



/***/ }),

/***/ "./src/app/components/wish-list-cart/wish-list-cart.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/wish-list-cart/wish-list-cart.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lzaC1saXN0LWNhcnQvd2lzaC1saXN0LWNhcnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/wish-list-cart/wish-list-cart.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/wish-list-cart/wish-list-cart.component.ts ***!
  \***********************************************************************/
/*! exports provided: WishListCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListCartComponent", function() { return WishListCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var src_app_services_wishlist_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/wishlist-cart.service */ "./src/app/services/wishlist-cart.service.ts");




let WishListCartComponent = class WishListCartComponent {
    constructor(http, wishlistCartService) {
        this.http = http;
        this.wishlistCartService = wishlistCartService;
    }
    getWishListCartItem() {
        this.wishlistCartService.getWishListCartItem().subscribe(res => {
            this.wishListCartItemList = res.json();
        }, err => { });
    }
    removeWishListCartItem(wishListCartItemId) {
        this.wishlistCartService.removeWishListCartItem(wishListCartItemId).subscribe(res => {
            this.getWishListCartItem();
        }, err => { });
    }
    ngOnInit() {
        this.getWishListCartItem();
    }
};
WishListCartComponent.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: src_app_services_wishlist_cart_service__WEBPACK_IMPORTED_MODULE_3__["WishlistCartService"] }
];
WishListCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wish-list-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wish-list-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/wish-list-cart/wish-list-cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wish-list-cart.component.css */ "./src/app/components/wish-list-cart/wish-list-cart.component.css")).default]
    })
], WishListCartComponent);



/***/ }),

/***/ "./src/app/constants/app-constants.ts":
/*!********************************************!*\
  !*** ./src/app/constants/app-constants.ts ***!
  \********************************************/
/*! exports provided: AppConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConst", function() { return AppConst; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AppConst {
}
AppConst.AdminPath = "https://bookstore-demo-backend.herokuapp.com/api/admin";
AppConst.UserPath = "https://bookstore-demo-backend.herokuapp.com/api/user";
AppConst.usStates = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'American Samoa': 'AS',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'District Of Columbia': 'DC',
    'Federated States Of Micronesia': 'FM',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Guam': 'GU',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Marshall Islands': 'MH',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Northern Mariana Islands': 'MP',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Palau': 'PW',
    'Pennsylvania': 'PA',
    'Puerto Rico': 'PR',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virgin Islands': 'VI',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY'
};


/***/ }),

/***/ "./src/app/guards/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/guards/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthService = class AuthService {
    constructor() {
        this.isLogin = false;
        this.isUser = false;
    }
    getIsLogin() {
        return this.isLogin;
    }
    checkLogin() {
        var localUser = localStorage.getItem("currentUser");
        if (localUser) {
            this.isLogin = true;
            return JSON.parse(localUser);
        }
        else {
            this.isLogin = false;
        }
    }
    getIsUser() {
        return this.isUser;
    }
    checkUser() {
        let localUser = this.checkLogin();
        if (localUser) {
            if (localUser.role === "USER") {
                this.isUser = true;
            }
            else {
                this.isUser = false;
            }
        }
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthService);



/***/ }),

/***/ "./src/app/guards/login.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/guards/auth.service.ts");




let LoginGuard = class LoginGuard {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    canActivate(next, state) {
        this._auth.checkLogin();
        if (this._auth.getIsLogin()) {
            this._router.navigate(["/my-account"]);
            return false;
        }
        else {
            return true;
        }
    }
};
LoginGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], LoginGuard);



/***/ }),

/***/ "./src/app/guards/user.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/user.guard.ts ***!
  \**************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/guards/auth.service.ts");




let UserGuard = class UserGuard {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    canActivate(route, state) {
        this._auth.checkLogin();
        if (this._auth.getIsLogin()) {
            if (route.data.roles &&
                route.data.roles.indexOf(this.currentUser.role) === -1) {
                this._router.navigate(["/401"]);
                return false;
            }
            return true;
        }
        this._router.navigate(["/login"]);
        return false;
    }
};
UserGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], UserGuard);



/***/ }),

/***/ "./src/app/models/books.ts":
/*!*********************************!*\
  !*** ./src/app/models/books.ts ***!
  \*********************************/
/*! exports provided: Books */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Books", function() { return Books; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Books {
}


/***/ }),

/***/ "./src/app/models/cates.ts":
/*!*********************************!*\
  !*** ./src/app/models/cates.ts ***!
  \*********************************/
/*! exports provided: Cates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cates", function() { return Cates; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Cates {
}


/***/ }),

/***/ "./src/app/models/order-billing-address.ts":
/*!*************************************************!*\
  !*** ./src/app/models/order-billing-address.ts ***!
  \*************************************************/
/*! exports provided: OrderBillingAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBillingAddress", function() { return OrderBillingAddress; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class OrderBillingAddress {
}


/***/ }),

/***/ "./src/app/models/order-payment.ts":
/*!*****************************************!*\
  !*** ./src/app/models/order-payment.ts ***!
  \*****************************************/
/*! exports provided: OrderPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPayment", function() { return OrderPayment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class OrderPayment {
}


/***/ }),

/***/ "./src/app/models/order-shipping-address.ts":
/*!**************************************************!*\
  !*** ./src/app/models/order-shipping-address.ts ***!
  \**************************************************/
/*! exports provided: OrderShippingAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderShippingAddress", function() { return OrderShippingAddress; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class OrderShippingAddress {
}


/***/ }),

/***/ "./src/app/models/order.ts":
/*!*********************************!*\
  !*** ./src/app/models/order.ts ***!
  \*********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Order {
}


/***/ }),

/***/ "./src/app/models/reply-comment.ts":
/*!*****************************************!*\
  !*** ./src/app/models/reply-comment.ts ***!
  \*****************************************/
/*! exports provided: ReplyComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyComment", function() { return ReplyComment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ReplyComment {
}


/***/ }),

/***/ "./src/app/models/role.ts":
/*!********************************!*\
  !*** ./src/app/models/role.ts ***!
  \********************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/models/shopping-cart.ts":
/*!*****************************************!*\
  !*** ./src/app/models/shopping-cart.ts ***!
  \*****************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ShoppingCart {
}


/***/ }),

/***/ "./src/app/models/user-payment.ts":
/*!****************************************!*\
  !*** ./src/app/models/user-payment.ts ***!
  \****************************************/
/*! exports provided: UserPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPayment", function() { return UserPayment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserPayment {
}


/***/ }),

/***/ "./src/app/models/user-shipping.ts":
/*!*****************************************!*\
  !*** ./src/app/models/user-shipping.ts ***!
  \*****************************************/
/*! exports provided: UserShipping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShipping", function() { return UserShipping; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserShipping {
}


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/app/my-account/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/my-account/menu/menu.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWFjY291bnQvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/my-account/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/my-account/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");





let MenuComponent = class MenuComponent {
    constructor(userService, http) {
        this.userService = userService;
        this.http = http;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    getCurrentUser() {
        this.userService.getCurrentUser().subscribe(res => {
            this.user = res.json();
        }, err => { });
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (this.currentUser) {
            this.getCurrentUser();
        }
    }
};
MenuComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-menu",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/my-account/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/my-account/my-account-home/my-account-home.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/my-account/my-account-home/my-account-home.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC1ob21lL215LWFjY291bnQtaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/my-account/my-account-home/my-account-home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/my-account/my-account-home/my-account-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: MyAccountHomeComponent, DialogMyNameDialog, DialogMyEmailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountHomeComponent", function() { return MyAccountHomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMyNameDialog", function() { return DialogMyNameDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMyEmailDialog", function() { return DialogMyEmailDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");







let MyAccountHomeComponent = class MyAccountHomeComponent {
    constructor(userService, http, dialog, router) {
        this.userService = userService;
        this.http = http;
        this.dialog = dialog;
        this.router = router;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.updateSuccess = false;
        this.passwordAndReTypePasswordNotMatch = false;
        this.incorrectCurrentPassword = false;
    }
    getCurrentUser() {
        this.userService.getCurrentUser().subscribe(res => {
            this.user = res.json();
        }, err => { });
    }
    openDialogUpdateName() {
        const dialogRef = this.dialog.open(DialogMyNameDialog, {
            width: "450px"
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getCurrentUser();
            this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
                this.router.navigate(["/my-account/home"]);
            });
        });
    }
    openDialogUpdateEmail() {
        const dialogRef = this.dialog.open(DialogMyEmailDialog, {
            width: "550px"
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getCurrentUser();
            this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
                this.router.navigate(["/my-account/home"]);
            });
        });
    }
    onChangePassword() {
        this.userService
            .changePassword(this.newPassword, this.currentPassword, this.retypePassword)
            .subscribe(res => {
            this.updateSuccess = true;
            this.newPassword = "";
            this.currentPassword = "";
            this.retypePassword = "";
        }, err => {
            let errorMessage = err.text();
            if (errorMessage == "PasswordAndReTypePasswordNotMatch") {
                this.passwordAndReTypePasswordNotMatch = true;
            }
            if (errorMessage == "IncorrectCurrentPassword") {
                this.incorrectCurrentPassword = true;
            }
            this.retypePassword = "";
            this.newPassword = "";
            this.currentPassword = "";
        });
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (this.currentUser) {
            this.getCurrentUser();
        }
    }
};
MyAccountHomeComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
MyAccountHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-my-account-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-account-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-home/my-account-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-account-home.component.css */ "./src/app/my-account/my-account-home/my-account-home.component.css")).default]
    })
], MyAccountHomeComponent);

let DialogMyNameDialog = class DialogMyNameDialog {
    constructor(dialogRef, userService) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    getCurrentUser() {
        this.userService.getCurrentUser().subscribe(res => {
            this.user = res.json();
        }, err => { });
    }
    updateName() {
        this.userService.updateName(this.user.name).subscribe(res => {
            this.dialogRef.close();
        }, err => {
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.getCurrentUser();
    }
};
DialogMyNameDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
DialogMyNameDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "dialog-my-name",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-my-name.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-home/dialog-my-name.html")).default
    })
], DialogMyNameDialog);

let DialogMyEmailDialog = class DialogMyEmailDialog {
    constructor(dialogRef, userService) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.emailExist = false;
    }
    getCurrentUser() {
        this.userService.getCurrentUser().subscribe(res => {
            this.user = res.json();
        }, err => { });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    updateEmail() {
        this.userService.updateEmail(this.user.email).subscribe(res => {
            this.dialogRef.close();
        }, err => {
            let errorMessage = err.text();
            if ((errorMessage = "Email already existed"))
                this.emailExist = true;
        });
    }
    ngOnInit() {
        this.getCurrentUser();
    }
};
DialogMyEmailDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
DialogMyEmailDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "dialog-my-email",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-my-email.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-home/dialog-my-email.html")).default
    })
], DialogMyEmailDialog);



/***/ }),

/***/ "./src/app/my-account/my-account-order/my-account-order.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/my-account/my-account-order/my-account-order.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC1vcmRlci9teS1hY2NvdW50LW9yZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/my-account/my-account-order/my-account-order.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/my-account/my-account-order/my-account-order.component.ts ***!
  \***************************************************************************/
/*! exports provided: MyAccountOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountOrderComponent", function() { return MyAccountOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");





let MyAccountOrderComponent = class MyAccountOrderComponent {
    constructor(orderService, router) {
        this.orderService = orderService;
        this.router = router;
        this.orderList = [];
        this.order = new src_app_models_order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
    }
    onDisplayOrder(order) {
        this.order = order;
        this.displayOrderDetail = true;
    }
    ngOnInit() {
        this.orderService.getOrderList().subscribe(res => {
            this.orderList = res.json();
        }, error => {
        });
    }
};
MyAccountOrderComponent.ctorParameters = () => [
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MyAccountOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-my-account-order",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-account-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-order/my-account-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-account-order.component.css */ "./src/app/my-account/my-account-order/my-account-order.component.css")).default]
    })
], MyAccountOrderComponent);



/***/ }),

/***/ "./src/app/my-account/my-account-payment-method/my-account-payment-method.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/my-account/my-account-payment-method/my-account-payment-method.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".well {\r\n    min-height: 18px;\r\n    padding: 0px;\r\n    margin-bottom: 20px;\r\n    background-color:grey;\r\n    \r\n    border: 1px solid #D9D9D9;\r\n    border-radius: 0px;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n    padding-left: 15px;\r\n    border:0px;\r\n}\r\n.thumbnail .caption {\r\n    padding: 9px;\r\n    color: white;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n.icon-style\r\n{\r\n    margin-right:15px;\r\n    font-size:18px;\r\n    margin-top:20px;\r\n}\r\np\r\n{\r\n    margin:3px;\r\n}\r\n.well-add-card\r\n{\r\n    margin-bottom:10px;\r\n    \r\n}\r\n.btn-add-card\r\n{\r\n    margin-top:20px;\r\n}\r\n.thumbnail {\r\n    display: block;\r\n    padding: 4px;\r\n    margin-bottom: 20px;\r\n    line-height: 1.42857143;\r\n    background-color: #fff;\r\n    border: 4px solid black;\r\n    border-radius: 15px;\r\n    -webkit-transition: border .2s ease-in-out;\r\n    transition: border .2s ease-in-out;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n.btn\r\n{\r\n    border-radius:0px;\r\n}\r\n.btn-update\r\n{\r\n    margin-left:15px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktYWNjb3VudC9teS1hY2NvdW50LXBheW1lbnQtbWV0aG9kL215LWFjY291bnQtcGF5bWVudC1tZXRob2QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjs7SUFFckIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUVsQiwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksVUFBVTtBQUNkO0FBQ0E7O0lBRUksa0JBQWtCOztBQUV0QjtBQUNBOztJQUVJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFFMUMsa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9teS1hY2NvdW50L215LWFjY291bnQtcGF5bWVudC1tZXRob2QvbXktYWNjb3VudC1wYXltZW50LW1ldGhvZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGwge1xyXG4gICAgbWluLWhlaWdodDogMThweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7XHJcbiAgICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgYm9yZGVyOjBweDtcclxufVxyXG4udGh1bWJuYWlsIC5jYXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbi5pY29uLXN0eWxlXHJcbntcclxuICAgIG1hcmdpbi1yaWdodDoxNXB4O1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxucFxyXG57XHJcbiAgICBtYXJnaW46M3B4O1xyXG59XHJcbi53ZWxsLWFkZC1jYXJkXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIFxyXG59XHJcbi5idG4tYWRkLWNhcmRcclxue1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcbi50aHVtYm5haWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXIgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYm9yZGVyIC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlciAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG4uYnRuXHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6MHB4O1xyXG59XHJcbi5idG4tdXBkYXRlXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/my-account/my-account-payment-method/my-account-payment-method.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/my-account/my-account-payment-method/my-account-payment-method.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MyAccountPaymentMethodComponent, DialogAddMyCardDialog, DialogUpdateMyCardDialog, DialogDeleteMyCardDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPaymentMethodComponent", function() { return MyAccountPaymentMethodComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddMyCardDialog", function() { return DialogAddMyCardDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUpdateMyCardDialog", function() { return DialogUpdateMyCardDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDeleteMyCardDialog", function() { return DialogDeleteMyCardDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/app-constants */ "./src/app/constants/app-constants.ts");
/* harmony import */ var src_app_models_user_payment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user-payment */ "./src/app/models/user-payment.ts");
/* harmony import */ var src_app_services_user_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user-payment.service */ "./src/app/services/user-payment.service.ts");







let MyAccountPaymentMethodComponent = class MyAccountPaymentMethodComponent {
    constructor(dialog, router, userPaymentService) {
        this.dialog = dialog;
        this.router = router;
        this.userPaymentService = userPaymentService;
        this.userPayment = new src_app_models_user_payment__WEBPACK_IMPORTED_MODULE_5__["UserPayment"]();
    }
    openDialogAddMyCard() {
        const dialogRef = this.dialog.open(DialogAddMyCardDialog, {
            width: "450px"
        });
        dialogRef.afterClosed().subscribe(result => {
            this.onGetUserPaymentList();
        });
    }
    setDefaultPayment(id) {
        this.defaultPaymentSet = false;
        this.userPaymentService.setDefaultPayment(id).subscribe(res => {
            this.onGetUserPaymentList();
            this.defaultPaymentSet = true;
        }, error => {
        });
    }
    openDialogUpdateMyCard(payment) {
        const dialogRef = this.dialog.open(DialogUpdateMyCardDialog, {
            width: "450px",
            data: payment
        });
        dialogRef.afterClosed().subscribe(result => {
            this.onGetUserPaymentList();
        });
    }
    openDialogDeleteMyCard(id) {
        const dialogRef = this.dialog.open(DialogDeleteMyCardDialog, {
            width: "550px",
            data: id
        });
        dialogRef.afterClosed().subscribe(result => {
            this.onGetUserPaymentList();
        });
    }
    onGetUserPaymentList() {
        this.userPaymentService.getUserPaymentList().subscribe(res => {
            this.userPayment = res.json();
        }, err => { });
    }
    ngOnInit() {
        this.onGetUserPaymentList();
    }
};
MyAccountPaymentMethodComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_user_payment_service__WEBPACK_IMPORTED_MODULE_6__["UserPaymentService"] }
];
MyAccountPaymentMethodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-my-account-payment-method",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-account-payment-method.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-payment-method/my-account-payment-method.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-account-payment-method.component.css */ "./src/app/my-account/my-account-payment-method/my-account-payment-method.component.css")).default]
    })
], MyAccountPaymentMethodComponent);

let DialogAddMyCardDialog = class DialogAddMyCardDialog {
    constructor(dialogRef, userPaymentService) {
        this.dialogRef = dialogRef;
        this.userPaymentService = userPaymentService;
        this.stateList = [];
        this.userPayment = new src_app_models_user_payment__WEBPACK_IMPORTED_MODULE_5__["UserPayment"]();
    }
    onAddNewCard() {
        this.userPaymentService.addNewCard(this.userPayment).subscribe(res => {
            this.dialogRef.close();
        }, err => { });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        for (let s in src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConst"].usStates) {
            this.stateList.push(s);
        }
    }
};
DialogAddMyCardDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_services_user_payment_service__WEBPACK_IMPORTED_MODULE_6__["UserPaymentService"] }
];
DialogAddMyCardDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "add-my-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-add-my-card.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-payment-method/dialog-add-my-card.html")).default
    })
], DialogAddMyCardDialog);

let DialogUpdateMyCardDialog = class DialogUpdateMyCardDialog {
    constructor(dialogRef, userPaymentService, data) {
        this.dialogRef = dialogRef;
        this.userPaymentService = userPaymentService;
        this.data = data;
        this.stateList = [];
        this.userPayment = new src_app_models_user_payment__WEBPACK_IMPORTED_MODULE_5__["UserPayment"]();
        this.userPayment = this.data;
    }
    onAddNewCard() {
        this.userPaymentService.addNewCard(this.userPayment).subscribe(res => {
            this.dialogRef.close();
        }, err => { });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() { }
};
DialogUpdateMyCardDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_services_user_payment_service__WEBPACK_IMPORTED_MODULE_6__["UserPaymentService"] },
    { type: src_app_models_user_payment__WEBPACK_IMPORTED_MODULE_5__["UserPayment"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogUpdateMyCardDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "update-my-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-update-my-card.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-payment-method/dialog-update-my-card.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogUpdateMyCardDialog);

let DialogDeleteMyCardDialog = class DialogDeleteMyCardDialog {
    constructor(dialogRef, userPaymentService, data) {
        this.dialogRef = dialogRef;
        this.userPaymentService = userPaymentService;
        this.data = data;
        this.id = this.data;
    }
    onDeleteMyCard() {
        this.userPaymentService.deleteMyCard(this.id).subscribe(res => {
            this.dialogRef.close();
        }, err => { });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() { }
};
DialogDeleteMyCardDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_services_user_payment_service__WEBPACK_IMPORTED_MODULE_6__["UserPaymentService"] },
    { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogDeleteMyCardDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "delete-my-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-delete-my-card.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-payment-method/dialog-delete-my-card.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogDeleteMyCardDialog);



/***/ }),

/***/ "./src/app/my-account/my-account-photo/my-account-photo.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/my-account/my-account-photo/my-account-photo.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-file {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.btn-file input[type=\"file\"] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  font-size: 100px;\r\n  text-align: right;\r\n  filter: alpha(opacity=0);\r\n  opacity: 0;\r\n  outline: none;\r\n  background: white;\r\n  cursor: inherit;\r\n  display: block;\r\n}\r\n#img-upload {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktYWNjb3VudC9teS1hY2NvdW50LXBob3RvL215LWFjY291bnQtcGhvdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC1waG90by9teS1hY2NvdW50LXBob3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWZpbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG4tZmlsZSBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY3Vyc29yOiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jaW1nLXVwbG9hZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/my-account/my-account-photo/my-account-photo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/my-account/my-account-photo/my-account-photo.component.ts ***!
  \***************************************************************************/
/*! exports provided: MyAccountPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPhotoComponent", function() { return MyAccountPhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_upload_image_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/upload-image-user.service */ "./src/app/services/upload-image-user.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");






let MyAccountPhotoComponent = class MyAccountPhotoComponent {
    constructor(uploadImageUserService, userService, router, _snackBar) {
        this.uploadImageUserService = uploadImageUserService;
        this.userService = userService;
        this.router = router;
        this._snackBar = _snackBar;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    onSubmit() {
        this.uploadImageUserService.modify(this.currentUser.id);
        this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
            this.router.navigate(["/my-account/photo"]);
        });
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
    ngOnInit() { }
};
MyAccountPhotoComponent.ctorParameters = () => [
    { type: src_app_services_upload_image_user_service__WEBPACK_IMPORTED_MODULE_2__["UploadImageUserService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
MyAccountPhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-my-account-photo",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-account-photo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-photo/my-account-photo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-account-photo.component.css */ "./src/app/my-account/my-account-photo/my-account-photo.component.css")).default]
    })
], MyAccountPhotoComponent);



/***/ }),

/***/ "./src/app/my-account/my-account-shipping/my-account-shipping.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/my-account/my-account-shipping/my-account-shipping.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#fancy-list-group .list-group li.list-group-item {\r\n    margin-bottom: 10px;\r\n    padding: 0;\r\n    border: 0;\r\n    position: relative;\r\n    display: table;\r\n    border-collapse: separate;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item .list-group-item-addon {\r\n    display: table-cell;\r\n    width: 1%;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    padding: 10px 20px;\r\n    line-height: 1;\r\n    text-align: center;\r\n    border-right: 0;\r\n    border-top-left-radius : 4px;\r\n    border-bottom-left-radius: 4px;\r\n    border: 1px solid #444;\r\n    background-color: #444;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item.list-group-item-success .list-group-item-addon {\r\n    border: 1px solid #3c763d;\r\n    background-color: #3c763d;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item.list-group-item-info .list-group-item-addon {\r\n    border: 1px solid #31708f;\r\n    background-color: #31708f;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item.list-group-item-warning .list-group-item-addon {\r\n    border: 1px solid #8a6d3b;\r\n    background-color: #8a6d3b;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item.list-group-item-danger .list-group-item-addon {\r\n    border: 1px solid #a94442;\r\n    background-color: #a94442;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item .list-group-item-addon span {\r\n    font-size: 40px;\r\n    font-weight: normal;\r\n    color: #fff;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item .list-group-item-content {\r\n    display: table-cell;\r\n    border-radius: 0;\r\n    position: relative;\r\n    z-index: 2;\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    border: 1px solid #444;\r\n    border-right: 0;\r\n    padding: 10px;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item.list-group-item-success .list-group-item-content {\r\n    border-color: #3c763d;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item.list-group-item-info .list-group-item-content {\r\n    border-color: #31708f;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item.list-group-item-warning .list-group-item-content {\r\n    border-color: #8a6d3b;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item.list-group-item-danger .list-group-item-content {\r\n    border-color: #a94442;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item .list-group-item-controls {\r\n    display: table-cell;\r\n    width: 1%;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    padding: 0 10px;\r\n    line-height: 1;\r\n    text-align: center;\r\n    border-left: 0;\r\n    background-color: #444;\r\n    border: 1px solid #444;\r\n    border-top-right-radius : 4px;\r\n    border-bottom-right-radius: 4px;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item .list-group-item-controls .label {\r\n    display: block;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    background-color: #fff;\r\n    color: #444;\r\n    text-transform: uppercase;\r\n    font-weight: normal;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item.list-group-item-success .list-group-item-controls .label {\r\n    background-color: #3c763d;\r\n    color: #fff;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item.list-group-item-info .list-group-item-controls .label {\r\n    background-color: #31708f;\r\n    color: #fff;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item.list-group-item-warning .list-group-item-controls .label {\r\n    background-color: #8a6d3b;\r\n    color: #fff;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item.list-group-item-danger .list-group-item-controls .label {\r\n    background-color: #a94442;\r\n    color: #fff;\r\n  }\r\n  #fancy-list-group .list-group li.list-group-item .list-group-item-controls a {\r\n    color : #fff;\r\n    font-size: 20px;\r\n    margin: 0 3px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktYWNjb3VudC9teS1hY2NvdW50LXNoaXBwaW5nL215LWFjY291bnQtc2hpcHBpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGFBQWE7RUFDZjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC1zaGlwcGluZy9teS1hY2NvdW50LXNoaXBwaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmFuY3ktbGlzdC1ncm91cCAubGlzdC1ncm91cCBsaS5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgfVxyXG4gICNmYW5jeS1saXN0LWdyb3VwIC5saXN0LWdyb3VwIGxpLmxpc3QtZ3JvdXAtaXRlbSAubGlzdC1ncm91cC1pdGVtLWFkZG9uIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogMSU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyA6IDRweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG4gIH1cclxuICAjZmFuY3ktbGlzdC1ncm91cCAubGlzdC1ncm91cCBsaS5saXN0LWdyb3VwLWl0ZW0ubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgLmxpc3QtZ3JvdXAtaXRlbS1hZGRvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2M3NjNkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjNzYzZDtcclxuICB9XHJcbiAgI2ZhbmN5LWxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAgbGkubGlzdC1ncm91cC1pdGVtLmxpc3QtZ3JvdXAtaXRlbS1pbmZvIC5saXN0LWdyb3VwLWl0ZW0tYWRkb24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMxNzA4ZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTcwOGY7XHJcbiAgfVxyXG4gICNmYW5jeS1saXN0LWdyb3VwIC5saXN0LWdyb3VwIGxpLmxpc3QtZ3JvdXAtaXRlbS5saXN0LWdyb3VwLWl0ZW0td2FybmluZyAubGlzdC1ncm91cC1pdGVtLWFkZG9uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YTZkM2I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE2ZDNiO1xyXG4gIH1cclxuICAjZmFuY3ktbGlzdC1ncm91cCAubGlzdC1ncm91cCBsaS5saXN0LWdyb3VwLWl0ZW0ubGlzdC1ncm91cC1pdGVtLWRhbmdlciAubGlzdC1ncm91cC1pdGVtLWFkZG9uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhOTQ0NDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTk0NDQyO1xyXG4gIH1cclxuICAjZmFuY3ktbGlzdC1ncm91cCAubGlzdC1ncm91cCBsaS5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS1hZGRvbiBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgI2ZhbmN5LWxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAgbGkubGlzdC1ncm91cC1pdGVtIC5saXN0LWdyb3VwLWl0ZW0tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAjZmFuY3ktbGlzdC1ncm91cCAubGlzdC1ncm91cCBsaS5saXN0LWdyb3VwLWl0ZW0ubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgLmxpc3QtZ3JvdXAtaXRlbS1jb250ZW50IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzNjNzYzZDtcclxuICB9XHJcbiAgI2ZhbmN5LWxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAgbGkubGlzdC1ncm91cC1pdGVtLmxpc3QtZ3JvdXAtaXRlbS1pbmZvIC5saXN0LWdyb3VwLWl0ZW0tY29udGVudCB7XHJcbiAgICBib3JkZXItY29sb3I6ICMzMTcwOGY7XHJcbiAgfVxyXG4gICNmYW5jeS1saXN0LWdyb3VwIC5saXN0LWdyb3VwIGxpLmxpc3QtZ3JvdXAtaXRlbS5saXN0LWdyb3VwLWl0ZW0td2FybmluZyAubGlzdC1ncm91cC1pdGVtLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOGE2ZDNiO1xyXG4gIH1cclxuICAjZmFuY3ktbGlzdC1ncm91cCAubGlzdC1ncm91cCBsaS5saXN0LWdyb3VwLWl0ZW0ubGlzdC1ncm91cC1pdGVtLWRhbmdlciAubGlzdC1ncm91cC1pdGVtLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYTk0NDQyO1xyXG4gIH1cclxuICAjZmFuY3ktbGlzdC1ncm91cCAubGlzdC1ncm91cCBsaS5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS1jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDElO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyA6IDRweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gICNmYW5jeS1saXN0LWdyb3VwIC5saXN0LWdyb3VwIGxpLmxpc3QtZ3JvdXAtaXRlbSAubGlzdC1ncm91cC1pdGVtLWNvbnRyb2xzIC5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgI2ZhbmN5LWxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAgbGkubGlzdC1ncm91cC1pdGVtLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzIC5saXN0LWdyb3VwLWl0ZW0tY29udHJvbHMgLmxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzc2M2Q7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgI2ZhbmN5LWxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAgbGkubGlzdC1ncm91cC1pdGVtLmxpc3QtZ3JvdXAtaXRlbS1pbmZvIC5saXN0LWdyb3VwLWl0ZW0tY29udHJvbHMgLmxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTcwOGY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgI2ZhbmN5LWxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAgbGkubGlzdC1ncm91cC1pdGVtLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nIC5saXN0LWdyb3VwLWl0ZW0tY29udHJvbHMgLmxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YTZkM2I7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgI2ZhbmN5LWxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAgbGkubGlzdC1ncm91cC1pdGVtLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIgLmxpc3QtZ3JvdXAtaXRlbS1jb250cm9scyAubGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E5NDQ0MjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAjZmFuY3ktbGlzdC1ncm91cCAubGlzdC1ncm91cCBsaS5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS1jb250cm9scyBhIHtcclxuICAgIGNvbG9yIDogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/my-account/my-account-shipping/my-account-shipping.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/my-account/my-account-shipping/my-account-shipping.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MyAccountShippingComponent, DialogAddMyAddressDialog, DialogUpdateMyAddressDialog, DialogDeleteMyAddressDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountShippingComponent", function() { return MyAccountShippingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddMyAddressDialog", function() { return DialogAddMyAddressDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUpdateMyAddressDialog", function() { return DialogUpdateMyAddressDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDeleteMyAddressDialog", function() { return DialogDeleteMyAddressDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_user_shipping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user-shipping */ "./src/app/models/user-shipping.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants/app-constants */ "./src/app/constants/app-constants.ts");
/* harmony import */ var src_app_services_user_shipping_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user-shipping.service */ "./src/app/services/user-shipping.service.ts");







let MyAccountShippingComponent = class MyAccountShippingComponent {
    constructor(dialog, router, userShippingService) {
        this.dialog = dialog;
        this.router = router;
        this.userShippingService = userShippingService;
        this.userShipping = new src_app_models_user_shipping__WEBPACK_IMPORTED_MODULE_2__["UserShipping"]();
        this.defaultShippingSet = false;
    }
    setDefaultShipping(id) {
        this.defaultShippingSet = false;
        this.userShippingService.setDefaultShipping(id).subscribe(res => {
            this.onGetUserShippingList();
            this.defaultShippingSet = true;
        }, error => {
        });
    }
    openDialogAddMyAddress() {
        const dialogRef = this.dialog.open(DialogAddMyAddressDialog, {
            width: "450px"
        });
        dialogRef.afterClosed().subscribe(result => {
            this.onGetUserShippingList();
        });
    }
    openDialogUpdateMyAddress(shipping) {
        const dialogRef = this.dialog.open(DialogUpdateMyAddressDialog, {
            width: "450px",
            data: shipping
        });
        dialogRef.afterClosed().subscribe(result => {
            this.onGetUserShippingList();
        });
    }
    openDialogDeleteMyAddress(id) {
        const dialogRef = this.dialog.open(DialogDeleteMyAddressDialog, {
            width: "550px",
            data: id
        });
        dialogRef.afterClosed().subscribe(result => {
            this.onGetUserShippingList();
        });
    }
    onGetUserShippingList() {
        this.userShippingService.getUserShippingList().subscribe(res => {
            this.userShipping = res.json();
            for (let index in this.userShipping) {
                if (this.userShipping[index].userShippingDefault) {
                    this.defaultUserShippingId = this.userShipping[index].id;
                    break;
                }
            }
        }, err => { });
    }
    ngOnInit() {
        this.onGetUserShippingList();
        this.defaultShippingSet = false;
    }
};
MyAccountShippingComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_user_shipping_service__WEBPACK_IMPORTED_MODULE_6__["UserShippingService"] }
];
MyAccountShippingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-my-account-shipping",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-account-shipping.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-shipping/my-account-shipping.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-account-shipping.component.css */ "./src/app/my-account/my-account-shipping/my-account-shipping.component.css")).default]
    })
], MyAccountShippingComponent);

let DialogAddMyAddressDialog = class DialogAddMyAddressDialog {
    constructor(dialogRef, userShippingService) {
        this.dialogRef = dialogRef;
        this.userShippingService = userShippingService;
        this.stateList = [];
        this.userShipping = new src_app_models_user_shipping__WEBPACK_IMPORTED_MODULE_2__["UserShipping"]();
    }
    onAddNewAddress() {
        this.userShippingService.addNewAddress(this.userShipping).subscribe(res => {
            this.dialogRef.close();
        }, err => { });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        for (let s in src_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConst"].usStates) {
            this.stateList.push(s);
        }
    }
};
DialogAddMyAddressDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: src_app_services_user_shipping_service__WEBPACK_IMPORTED_MODULE_6__["UserShippingService"] }
];
DialogAddMyAddressDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "add-my-address",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-add-my-address.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-shipping/dialog-add-my-address.html")).default
    })
], DialogAddMyAddressDialog);

let DialogUpdateMyAddressDialog = class DialogUpdateMyAddressDialog {
    constructor(dialogRef, userShippingService, data) {
        this.dialogRef = dialogRef;
        this.userShippingService = userShippingService;
        this.data = data;
        this.stateList = [];
        this.userShipping = new src_app_models_user_shipping__WEBPACK_IMPORTED_MODULE_2__["UserShipping"]();
        this.userShipping = this.data;
    }
    onAddNewAddress() {
        this.userShippingService.addNewAddress(this.userShipping).subscribe(res => {
            this.dialogRef.close();
        }, err => { });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() { }
};
DialogUpdateMyAddressDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: src_app_services_user_shipping_service__WEBPACK_IMPORTED_MODULE_6__["UserShippingService"] },
    { type: src_app_models_user_shipping__WEBPACK_IMPORTED_MODULE_2__["UserShipping"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
DialogUpdateMyAddressDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "update-my-address",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-update-my-address.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-shipping/dialog-update-my-address.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DialogUpdateMyAddressDialog);

let DialogDeleteMyAddressDialog = class DialogDeleteMyAddressDialog {
    constructor(dialogRef, userShippingService, data) {
        this.dialogRef = dialogRef;
        this.userShippingService = userShippingService;
        this.data = data;
        this.id = this.data;
    }
    onDeleteMyAddress() {
        this.userShippingService.deleteMyAddress(this.id).subscribe(res => {
            this.dialogRef.close();
        }, err => { });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() { }
};
DialogDeleteMyAddressDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: src_app_services_user_shipping_service__WEBPACK_IMPORTED_MODULE_6__["UserShippingService"] },
    { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
DialogDeleteMyAddressDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "delete-my-address",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-delete-my-address.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account-shipping/dialog-delete-my-address.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DialogDeleteMyAddressDialog);



/***/ }),

/***/ "./src/app/my-account/my-account.component.css":
/*!*****************************************************!*\
  !*** ./src/app/my-account/my-account.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/my-account/my-account.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-account/my-account.component.ts ***!
  \****************************************************/
/*! exports provided: MyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return MyAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let MyAccountComponent = class MyAccountComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
};
MyAccountComponent.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
MyAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-my-account",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-account.component.css */ "./src/app/my-account/my-account.component.css")).default]
    })
], MyAccountComponent);



/***/ }),

/***/ "./src/app/my-account/my-account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.module.ts ***!
  \*************************************************/
/*! exports provided: MyAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountModule", function() { return MyAccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _my_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-account.component */ "./src/app/my-account/my-account.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _my_account_home_my_account_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-account-home/my-account-home.component */ "./src/app/my-account/my-account-home/my-account-home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/my-account/menu/menu.component.ts");
/* harmony import */ var _my_account_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-account.routing */ "./src/app/my-account/my-account.routing.ts");
/* harmony import */ var _my_account_photo_my_account_photo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-account-photo/my-account-photo.component */ "./src/app/my-account/my-account-photo/my-account-photo.component.ts");
/* harmony import */ var _my_account_payment_method_my_account_payment_method_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-account-payment-method/my-account-payment-method.component */ "./src/app/my-account/my-account-payment-method/my-account-payment-method.component.ts");
/* harmony import */ var _my_account_order_my_account_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-account-order/my-account-order.component */ "./src/app/my-account/my-account-order/my-account-order.component.ts");
/* harmony import */ var _my_account_shipping_my_account_shipping_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-account-shipping/my-account-shipping.component */ "./src/app/my-account/my-account-shipping/my-account-shipping.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");

















let MyAccountModule = class MyAccountModule {
};
MyAccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _my_account_component__WEBPACK_IMPORTED_MODULE_3__["MyAccountComponent"],
            _my_account_home_my_account_home_component__WEBPACK_IMPORTED_MODULE_5__["MyAccountHomeComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
            _my_account_photo_my_account_photo_component__WEBPACK_IMPORTED_MODULE_8__["MyAccountPhotoComponent"],
            _my_account_payment_method_my_account_payment_method_component__WEBPACK_IMPORTED_MODULE_9__["MyAccountPaymentMethodComponent"],
            _my_account_order_my_account_order_component__WEBPACK_IMPORTED_MODULE_10__["MyAccountOrderComponent"],
            _my_account_shipping_my_account_shipping_component__WEBPACK_IMPORTED_MODULE_11__["MyAccountShippingComponent"],
            _my_account_home_my_account_home_component__WEBPACK_IMPORTED_MODULE_5__["DialogMyNameDialog"],
            _my_account_home_my_account_home_component__WEBPACK_IMPORTED_MODULE_5__["DialogMyEmailDialog"],
            _my_account_payment_method_my_account_payment_method_component__WEBPACK_IMPORTED_MODULE_9__["DialogAddMyCardDialog"],
            _my_account_payment_method_my_account_payment_method_component__WEBPACK_IMPORTED_MODULE_9__["DialogUpdateMyCardDialog"],
            _my_account_shipping_my_account_shipping_component__WEBPACK_IMPORTED_MODULE_11__["DialogAddMyAddressDialog"],
            _my_account_shipping_my_account_shipping_component__WEBPACK_IMPORTED_MODULE_11__["DialogUpdateMyAddressDialog"],
            _my_account_payment_method_my_account_payment_method_component__WEBPACK_IMPORTED_MODULE_9__["DialogDeleteMyCardDialog"],
            _my_account_shipping_my_account_shipping_component__WEBPACK_IMPORTED_MODULE_11__["DialogDeleteMyAddressDialog"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _my_account_routing__WEBPACK_IMPORTED_MODULE_7__["myAccountRouting"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"]
        ],
        bootstrap: [
            _my_account_component__WEBPACK_IMPORTED_MODULE_3__["MyAccountComponent"],
            _my_account_home_my_account_home_component__WEBPACK_IMPORTED_MODULE_5__["DialogMyNameDialog"],
            _my_account_home_my_account_home_component__WEBPACK_IMPORTED_MODULE_5__["DialogMyEmailDialog"],
            _my_account_payment_method_my_account_payment_method_component__WEBPACK_IMPORTED_MODULE_9__["DialogAddMyCardDialog"],
            _my_account_payment_method_my_account_payment_method_component__WEBPACK_IMPORTED_MODULE_9__["DialogUpdateMyCardDialog"],
            _my_account_shipping_my_account_shipping_component__WEBPACK_IMPORTED_MODULE_11__["DialogAddMyAddressDialog"],
            _my_account_shipping_my_account_shipping_component__WEBPACK_IMPORTED_MODULE_11__["DialogUpdateMyAddressDialog"],
            _my_account_payment_method_my_account_payment_method_component__WEBPACK_IMPORTED_MODULE_9__["DialogDeleteMyCardDialog"],
            _my_account_shipping_my_account_shipping_component__WEBPACK_IMPORTED_MODULE_11__["DialogDeleteMyAddressDialog"]
        ]
    })
], MyAccountModule);



/***/ }),

/***/ "./src/app/my-account/my-account.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/my-account/my-account.routing.ts ***!
  \**************************************************/
/*! exports provided: myAccountRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myAccountRouting", function() { return myAccountRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


const myAccountRoutes = [];
const myAccountRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(myAccountRoutes);


/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/constants/app-constants.ts");




let BookService = class BookService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8"
        });
    }
    getAllBooks() {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath + "/books/all";
        return this.http.get(url, { headers: this.headers });
    }
    getBookListByCategory(id) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath + "/cates/list/" + id;
        return this.http.get(url, { headers: this.headers });
    }
    searchBook(keyword, searchOption) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath + "/books/searchBook";
        let searchInfo = {
            "keyword": keyword,
            "searchOption": searchOption
        };
        return this.http.post(url, JSON.stringify(searchInfo), { headers: this.headers });
    }
    sortBy(keyword) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath + "/books/sortBy";
        return this.http.post(url, keyword, { headers: this.headers });
    }
    relatedBooks(id) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath + "/books/relatedBooks/" + id;
        return this.http.get(url, { headers: this.headers });
    }
    getCurrentBook(id) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath + "/books/" + id;
        return this.http.get(url, { headers: this.headers });
    }
};
BookService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], BookService);



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/constants/app-constants.ts");




let CartService = class CartService {
    constructor(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    addItem(id, qty) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/cart/add";
        let cartItemInfo = {
            "bookId": id,
            "qty": qty
        };
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Bearer " + this.currentUser.token
        });
        return this.http.post(url, cartItemInfo, { headers: this.tokenHeader });
    }
    getCartItemList() {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/cart/getCartItemList";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Bearer " + this.currentUser.token
        });
        return this.http.get(url, { headers: this.tokenHeader });
    }
    getShoppingCart() {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/cart/getShoppingCart";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Bearer " + this.currentUser.token
        });
        return this.http.get(url, { headers: this.tokenHeader });
    }
    updateCartItem(cartItemId, qty) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/cart/updateCartItem";
        let cartItemInfo = {
            "cartItemId": cartItemId,
            "qty": qty
        };
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Bearer " + this.currentUser.token
        });
        return this.http.post(url, cartItemInfo, { headers: this.tokenHeader });
    }
    removeCartItem(id) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/cart/removeItem";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Bearer " + this.currentUser.token
        });
        return this.http.post(url, id, { headers: this.tokenHeader });
    }
};
CartService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/services/cates.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/cates.service.ts ***!
  \*******************************************/
/*! exports provided: CatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatesService", function() { return CatesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/constants/app-constants.ts");




let CatesService = class CatesService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8"
        });
    }
    getCatesList() {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath + "/cates/all";
        return this.http.get(url, { headers: this.headers });
    }
    getCatesDetail(id) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath + "/cates/" + id;
        return this.http.get(url, { headers: this.headers });
    }
};
CatesService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
CatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], CatesService);



/***/ }),

/***/ "./src/app/services/checkout.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/checkout.service.ts ***!
  \**********************************************/
/*! exports provided: CheckoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return CheckoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/constants/app-constants.ts");




let CheckoutService = class CheckoutService {
    constructor(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    checkout(orderShippingAddress, orderBillingAddress, orderPayment, shippingMethod) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/checkout";
        let order = {
            orderShippingAddress: orderShippingAddress,
            orderBillingAddress: orderBillingAddress,
            orderPayment: orderPayment,
            shippingMethod: shippingMethod
        };
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.post(url, order, { headers: this.tokenHeader });
    }
};
CheckoutService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
CheckoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], CheckoutService);



/***/ }),

/***/ "./src/app/services/comment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/comment.service.ts ***!
  \*********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/constants/app-constants.ts");




let CommentService = class CommentService {
    constructor(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    addComment(commentContent, bookId) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/comment/add";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        let info = {
            "bookId": bookId,
            "commentContent": commentContent
        };
        return this.http.post(url, info, {
            headers: this.tokenHeader
        });
    }
    getCommentListForBook(bookId) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/comment/getCommentListForBook/" + bookId;
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8"
        });
        return this.http.get(url, { headers: this.tokenHeader });
    }
    hitLike(commentId) {
        // let url = AppConst.UserPath +"/comment/statusLike";
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/likes/add";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        // let info = {
        //   "commentId":commentId,
        //   "qtyLike":qtyLike
        // }
        return this.http.post(url, commentId, { headers: this.tokenHeader });
    }
    addReplyComment(replyCommentContent, commentId) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/comment/replyComment/add";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        let info = {
            "replyCommentContent": replyCommentContent,
            "commentId": commentId
        };
        return this.http.post(url, info, {
            headers: this.tokenHeader
        });
    }
    // getReplyCommentListForComment(commentId:number) {
    // 	let url = AppConst.UserPath +"comment/replyComment/getReplyCommentListForComment/"+commentId;
    //   this.tokenHeader = new Headers({
    //     "Content-Type": "application/json; charset=UTF-8",
    //     Authorization: "Bearer " + this.currentUser.token
    //   });
    // 	return this.http.get(url, {headers: this.tokenHeader});
    // }
    getLikesListBasedOnComment(commentId) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/likes/getLikesListBasedOnComment/" + commentId;
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.get(url, { headers: this.tokenHeader });
    }
};
CommentService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], CommentService);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/constants/app-constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.headers1 = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8"
        });
    }
    login(user) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/login";
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            Authorization: "Basic " + btoa(user.username + ":" + user.password)
        });
        return this.http.get(url, { headers: headers });
    }
    logout() {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/logout";
        return this.http.post(url, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            localStorage.removeItem("currentUser");
            return response;
        }));
    }
    retrievePassword(email) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/forgotPassword";
        return this.http.post(url, email, { headers: this.headers1 });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], LoginService);



/***/ }),

/***/ "./src/app/services/order-payment.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/order-payment.service.ts ***!
  \***************************************************/
/*! exports provided: OrderPaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPaymentService", function() { return OrderPaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderPaymentService = class OrderPaymentService {
    constructor() { }
};
OrderPaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderPaymentService);



/***/ }),

/***/ "./src/app/services/order-shipping.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/order-shipping.service.ts ***!
  \****************************************************/
/*! exports provided: OrderShippingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderShippingService", function() { return OrderShippingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderShippingService = class OrderShippingService {
    constructor() { }
};
OrderShippingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderShippingService);



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/constants/app-constants.ts");




let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
    }
    getOrderList() {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/order/getOrderList";
        return this.http.get(url, { headers: this.tokenHeader });
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "./src/app/services/upload-image-user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/upload-image-user.service.ts ***!
  \*******************************************************/
/*! exports provided: UploadImageUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageUserService", function() { return UploadImageUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/constants/app-constants.ts");



let UploadImageUserService = class UploadImageUserService {
    constructor() {
        this.filesToUpload = [];
    }
    upload(userId) {
        this.makeFileRequest(_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConst"].UserPath + "/add/image?id=" + userId, [], this.filesToUpload).then(result => {
        }, error => {
        });
    }
    modify(userId) {
        if (this.filesToUpload.length > 0) {
            this.makeFileRequest(_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConst"].UserPath + "/update/image?id=" + userId, [], this.filesToUpload).then((result) => {
            }, (error) => {
            });
        }
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
    makeFileRequest(url, params, files) {
        return new Promise((resolve, reject) => {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            // xhr.setRequestHeader("x-auth-token", localStorage.getItem("xAuthToken"));
            xhr.send(formData);
        });
    }
};
UploadImageUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], UploadImageUserService);



/***/ }),

/***/ "./src/app/services/user-payment.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-payment.service.ts ***!
  \**************************************************/
/*! exports provided: UserPaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPaymentService", function() { return UserPaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/constants/app-constants.ts");




let UserPaymentService = class UserPaymentService {
    constructor(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    addNewCard(userPayment) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/payment/add";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.post(url, JSON.stringify(userPayment), {
            headers: this.tokenHeader
        });
    }
    getUserPaymentList() {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/payment/getCurrentUserPaymentList";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.get(url, {
            headers: this.tokenHeader
        });
    }
    deleteMyCard(id) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/payment/delete";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.post(url, id, {
            headers: this.tokenHeader
        });
    }
    setDefaultPayment(id) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/payment/setDefault";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.post(url, id, { headers: this.tokenHeader });
    }
};
UserPaymentService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
UserPaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], UserPaymentService);



/***/ }),

/***/ "./src/app/services/user-shipping.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/user-shipping.service.ts ***!
  \***************************************************/
/*! exports provided: UserShippingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShippingService", function() { return UserShippingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/constants/app-constants.ts");




let UserShippingService = class UserShippingService {
    constructor(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    getUserShippingList() {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/shipping/getCurrentUserShippingList";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.get(url, {
            headers: this.tokenHeader
        });
    }
    addNewAddress(userShipping) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/shipping/add";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.post(url, JSON.stringify(userShipping), {
            headers: this.tokenHeader
        });
    }
    deleteMyAddress(id) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/shipping/delete";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.post(url, id, {
            headers: this.tokenHeader
        });
    }
    setDefaultShipping(id) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/shipping/setDefault";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.post(url, id, { headers: this.tokenHeader });
    }
};
UserShippingService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
UserShippingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], UserShippingService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/constants/app-constants.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    register(user) {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8"
        });
        return this.http.post(_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/add", user, {
            headers: headers
        });
    }
    getCurrentUser() {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/getCurrentUser";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.get(url, { headers: this.tokenHeader });
    }
    updateName(name) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/updateName";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.post(url, name, {
            headers: this.tokenHeader
        });
    }
    updateEmail(email) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/updateEmail";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.post(url, email, {
            headers: this.tokenHeader
        });
    }
    changePassword(newPassword, currentPassword, retypePassword) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/changePassword";
        let passwordInfo = {
            currentPassword: currentPassword,
            newPassword: newPassword,
            retypePassword: retypePassword
        };
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.post(url, JSON.stringify(passwordInfo), {
            headers: this.tokenHeader
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], UserService);



/***/ }),

/***/ "./src/app/services/wishlist-cart.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/wishlist-cart.service.ts ***!
  \***************************************************/
/*! exports provided: WishlistCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistCartService", function() { return WishlistCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/constants/app-constants.ts");




let WishlistCartService = class WishlistCartService {
    constructor(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    addWishListItem(bookId) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/wishlistcart/add";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Bearer " + this.currentUser.token
        });
        return this.http.post(url, bookId, { headers: this.tokenHeader });
    }
    getWishListCartItem() {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/wishlistcart/getWishListCartItemList";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Bearer " + this.currentUser.token
        });
        return this.http.get(url, { headers: this.tokenHeader });
    }
    removeWishListCartItem(wishListCartItemId) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/wishlistcart/removeItem";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Bearer " + this.currentUser.token
        });
        return this.http.post(url, wishListCartItemId, { headers: this.tokenHeader });
    }
};
WishlistCartService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
WishlistCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WishlistCartService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Demo\bookstore-demo-front-deploy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map