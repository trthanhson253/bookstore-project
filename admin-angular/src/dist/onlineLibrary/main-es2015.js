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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<div class=\"container-fluid-full\">\n  <div class=\"row-fluid\">\n    <app-menu></app-menu>\n    <div id=\"content\" class=\"span10\">\n      <router-outlet></router-outlet>\n    </div>\n\n    <!-- end: Content -->\n  </div>\n  <!--/#content.span10-->\n</div>\n<!--/fluid-row-->\n\n<div class=\"clearfix\"></div>\n\n<footer>\n  <p>\n    <span style=\"text-align:left;float:left\"\n      >Connected as <strong>{{ currentUser.name }}</strong></span\n    >\n  </p>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/adminindex/adminindex.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/adminindex/adminindex.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- start: Content -->\r\n<ul class=\"breadcrumb\">\r\n  <li>\r\n    <i class=\"icon-home\"></i>\r\n    <a [routerLink]=\"['/home']\">Home</a>\r\n    <i class=\"icon-angle-right\"></i>\r\n  </li>\r\n</ul>\r\n\r\n<div class=\"row-fluid sortable\">\r\n  <div class=\"box span12\">\r\n    <div class=\"box-header\">\r\n      <h2>\r\n        <i class=\"fa fa-align-justify\" style=\"color:white\"></i\r\n        ><span class=\"break\"></span>DASHBOARD\r\n      </h2>\r\n\r\n      <div class=\"box-icon\">\r\n        <a href=\"#\" class=\"btn-setting\"\r\n        ><i class=\"fa fa-wrench\" style=\"color:white\"></i></a>\r\n        <a href=\"#\" class=\"btn-minimize\" style=\"color:white\"\r\n        ><i class=\"fa fa-chevron-up\" style=\"color:white\"></i\r\n      ></a>\r\n      <a href=\"#\" class=\"btn-close\"\r\n        ><i class=\"fa fa-remove\" style=\"color:white\"></i\r\n      ></a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"box-content\">\r\n      <button mat-raised-button color=\"warn\">\r\n        +Add New\r\n      </button>\r\n      <br />\r\n      <hr />\r\n     \r\n      <img src=\"../../../../assets/image/theme.jpg\">\r\n     \r\n\r\n      \r\n    </div>\r\n  </div>\r\n  <!--/span-->\r\n</div>\r\n<!--/row-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/books/books.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/books/books.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- start: Content -->\n<ul class=\"breadcrumb\">\n  <li>\n    <i class=\"icon-home\"></i>\n    <a href=\"index.html\">Home</a>\n    <i class=\"icon-angle-right\"></i>\n  </li>\n  <li><a href=\"#\">Book</a></li>\n</ul>\n\n<div class=\"row-fluid sortable\">\n  <div class=\"box span12\">\n    <div class=\"box-header\">\n      <h2>\n        <i class=\"fa fa-align-justify\" style=\"color:white\"></i\n          ><span class=\"break\"></span>BOOK DATABASE\n      </h2>\n      <div class=\"box-icon\">\n        <a href=\"#\" class=\"btn-setting\"\n        ><i class=\"fa fa-wrench\" style=\"color:white\"></i></a>\n        <a href=\"#\" class=\"btn-minimize\" style=\"color:white\"\n        ><i class=\"fa fa-chevron-up\" style=\"color:white\"></i\n      ></a>\n      <a href=\"#\" class=\"btn-close\"\n        ><i class=\"fa fa-remove\" style=\"color:white\"></i\n      ></a>\n      </div>\n    </div>\n    <div class=\"box-content\">\n      <button mat-raised-button color=\"warn\" (click)=\"openDialogAddMyBook()\">\n        +Add New\n      </button>\n      <br />\n      <hr />\n      <mat-form-field>\n        <input\n          matInput\n          (keyup)=\"applyFilter($event.target.value)\"\n          placeholder=\"Filter\"\n        />\n      </mat-form-field>\n\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef>No.</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.id }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"image\">\n          <th mat-header-cell *matHeaderCellDef>Image.</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <img\n              style=\"width: 30px;height: 30px;\"\n              [src]=\"'http://localhost:8184/image/book/' + element.id + '.png'\"\n              (error)=\"img.src = '../../../../assets/image/default.png'\"\n              #img\n              class=\"avatar img-thumbnail\"\n              alt=\"avatar\"\n            />\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"title\">\n          <th mat-header-cell *matHeaderCellDef>Title</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.title }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"author\">\n          <th mat-header-cell *matHeaderCellDef>Author</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.author }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"publisher\">\n          <th mat-header-cell *matHeaderCellDef>Publisher</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.publisher }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"publicationDate\">\n          <th mat-header-cell *matHeaderCellDef>Publication Date</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.publicationDate }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"isbn\">\n          <th mat-header-cell *matHeaderCellDef>ISBN</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.isbn }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"language\">\n          <th mat-header-cell *matHeaderCellDef>Language</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.language }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"numberOfPages\">\n          <th mat-header-cell *matHeaderCellDef>Number Of Pages</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.numberOfPages }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"format\">\n          <th mat-header-cell *matHeaderCellDef>Format</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.format }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"shippingWeight\">\n          <th mat-header-cell *matHeaderCellDef>Shipping Weight</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.shippingWeight }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"listPrice\">\n          <th mat-header-cell *matHeaderCellDef>List Price</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.listPrice }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"ourPrice\">\n          <th mat-header-cell *matHeaderCellDef>Our Price</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.ourPrice }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"inStockNumber\">\n          <th mat-header-cell *matHeaderCellDef>In Stock Number</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.inStockNumber }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"description\">\n          <th mat-header-cell *matHeaderCellDef>Description</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.description }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"category\">\n          <th mat-header-cell *matHeaderCellDef>Category</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.cates.name }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef>Action</th>\n          <td mat-cell *matCellDef=\"let element\" class=\"center\">\n            <a\n              class=\"btn btn-info\"\n              href=\"javascript:;\"\n              (click)=\"openDialogUpdateMyBook(element)\"\n            >\n              <i class=\"fa fa-edit\" style=\"color:white\"></i>\n            </a>\n            &nbsp;\n            <a\n              class=\"btn btn-danger\"\n              href=\"javascript:;\"\n              (click)=\"openDialogDeleteMyBook(element.id)\"\n            >\n              <i class=\"fa fa-trash\" style=\"color:white\"></i>\n            </a>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [pageSizeOptions]=\"[10, 20, 100]\"\n        showFirstLastButtons\n      ></mat-paginator>\n    </div>\n  </div>\n  <!--/span-->\n</div>\n<!--/row-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/books/dialog-add-my-book.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/books/dialog-add-my-book.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add New Book</h1>\r\n<hr />\r\n<div mat-dialog-content>\r\n  <h5>Title:(Require)</h5>\r\n  <input\r\n    id=\"title\"\r\n    type=\"text\"\r\n    required\r\n    [(ngModel)]=\"newBook.title\"\r\n    name=\"title\"\r\n  />\r\n  <br />\r\n  <h5>Author:</h5>\r\n  <input\r\n    id=\"author\"\r\n    type=\"text\"\r\n    required\r\n    [(ngModel)]=\"newBook.author\"\r\n    name=\"author\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Publisher:</h5>\r\n  <input\r\n    id=\"publisher\"\r\n    type=\"text\"\r\n    required\r\n    [(ngModel)]=\"newBook.publisher\"\r\n    name=\"publisher\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Publication Date:</h5>\r\n  <input\r\n    id=\"publicationDate\"\r\n    type=\"text\"\r\n    required\r\n    [(ngModel)]=\"newBook.publicationDate\"\r\n    name=\"publicationDate\"\r\n  />\r\n  <br />\r\n\r\n  <h5>ISBN:(Require)</h5>\r\n  <input\r\n    id=\"isbn\"\r\n    type=\"number\"\r\n    required\r\n    [(ngModel)]=\"newBook.isbn\"\r\n    name=\"isbn\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Language:</h5>\r\n  <input\r\n    id=\"language\"\r\n    type=\"text\"\r\n    required\r\n    [(ngModel)]=\"newBook.language\"\r\n    name=\"language\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Number Of Pages:</h5>\r\n  <input\r\n    id=\"numberOfPages\"\r\n    type=\"number\"\r\n    required\r\n    [(ngModel)]=\"newBook.numberOfPages\"\r\n    name=\"numberOfPages\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Format:</h5>\r\n  <input\r\n    id=\"format\"\r\n    type=\"text\"\r\n    required\r\n    [(ngModel)]=\"newBook.format\"\r\n    name=\"format\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Shipping Weight:</h5>\r\n  <input\r\n    id=\"shippingWeight\"\r\n    type=\"number\"\r\n    required\r\n    [(ngModel)]=\"newBook.shippingWeight\"\r\n    name=\"shippingWeight\"\r\n  />\r\n  <br />\r\n\r\n  <h5>List Price:</h5>\r\n  <input\r\n    id=\"listPrice\"\r\n    type=\"number\"\r\n    required\r\n    [(ngModel)]=\"newBook.listPrice\"\r\n    name=\"listPrice\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Our Price:</h5>\r\n  <input\r\n    id=\"ourPrice\"\r\n    type=\"number\"\r\n    required\r\n    [(ngModel)]=\"newBook.ourPrice\"\r\n    name=\"ourPrice\"\r\n  />\r\n  <br />\r\n\r\n  <h5>In Stock Number:</h5>\r\n  <input\r\n    id=\"inStockNumber\"\r\n    type=\"number\"\r\n    required\r\n    [(ngModel)]=\"newBook.inStockNumber\"\r\n    name=\"inStockNumber\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Description:</h5>\r\n  <input\r\n    id=\"description\"\r\n    type=\"textarea\"\r\n    required\r\n    [(ngModel)]=\"newBook.description\"\r\n    name=\"description\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Choose A Category:(Require)</h5>\r\n  <select select id=\"category\" name=\"category\" [(ngModel)]=\"cateId\">\r\n    <option *ngFor=\"let cate of cates\" value=\"{{ cate.id }}\"\r\n      >{{ cate.name }}</option\r\n    >\r\n  </select>\r\n  <br />\r\n\r\n  <h5>Upload Image:</h5>\r\n  <input\r\n    type=\"file\"\r\n    id=\"bookImage\"\r\n    name=\"bookImage\"\r\n    (change)=\"fileChange($event)\"\r\n  />\r\n  <br />\r\n</div>\r\n<br />\r\n<br />\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n\r\n  <button mat-raised-button color=\"warn\" (click)=\"onAddNewBook()\">\r\n    Add New\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/books/dialog-delete-my-book.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/books/dialog-delete-my-book.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Are you sure you want to delete this book ?</h1>\r\n<hr />\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n\r\n  <button mat-raised-button color=\"warn\" (click)=\"onDeleteBook()\">\r\n    Delete\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/books/dialog-update-my-book.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/books/dialog-update-my-book.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add New Book</h1>\r\n<hr />\r\n<div mat-dialog-content>\r\n  <h5>Title:</h5>\r\n  <input\r\n    id=\"title\"\r\n    type=\"text\"\r\n    required\r\n    [(ngModel)]=\"newBook.title\"\r\n    name=\"title\"\r\n  />\r\n  <br />\r\n  <h5>Author:</h5>\r\n  <input\r\n    id=\"author\"\r\n    type=\"text\"\r\n    required\r\n    [(ngModel)]=\"newBook.author\"\r\n    name=\"author\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Publisher:</h5>\r\n  <input\r\n    id=\"publisher\"\r\n    type=\"text\"\r\n    required\r\n    [(ngModel)]=\"newBook.publisher\"\r\n    name=\"publisher\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Publication Date:</h5>\r\n  <input\r\n    id=\"publicationDate\"\r\n    type=\"text\"\r\n    required\r\n    [(ngModel)]=\"newBook.publicationDate\"\r\n    name=\"publicationDate\"\r\n  />\r\n  <br />\r\n\r\n  <h5>ISBN:</h5>\r\n  <input\r\n    id=\"isbn\"\r\n    type=\"number\"\r\n    required\r\n    [(ngModel)]=\"newBook.isbn\"\r\n    name=\"isbn\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Language:</h5>\r\n  <input\r\n    id=\"language\"\r\n    type=\"text\"\r\n    required\r\n    [(ngModel)]=\"newBook.language\"\r\n    name=\"language\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Number Of Pages:</h5>\r\n  <input\r\n    id=\"numberOfPages\"\r\n    type=\"number\"\r\n    required\r\n    [(ngModel)]=\"newBook.numberOfPages\"\r\n    name=\"numberOfPages\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Format:</h5>\r\n  <input\r\n    id=\"format\"\r\n    type=\"text\"\r\n    required\r\n    [(ngModel)]=\"newBook.format\"\r\n    name=\"format\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Shipping Weight:</h5>\r\n  <input\r\n    id=\"shippingWeight\"\r\n    type=\"number\"\r\n    required\r\n    [(ngModel)]=\"newBook.shippingWeight\"\r\n    name=\"shippingWeight\"\r\n  />\r\n  <br />\r\n\r\n  <h5>List Price:</h5>\r\n  <input\r\n    id=\"listPrice\"\r\n    type=\"number\"\r\n    required\r\n    [(ngModel)]=\"newBook.listPrice\"\r\n    name=\"listPrice\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Our Price:</h5>\r\n  <input\r\n    id=\"ourPrice\"\r\n    type=\"number\"\r\n    required\r\n    [(ngModel)]=\"newBook.ourPrice\"\r\n    name=\"ourPrice\"\r\n  />\r\n  <br />\r\n\r\n  <h5>In Stock Number:</h5>\r\n  <input\r\n    id=\"inStockNumber\"\r\n    type=\"number\"\r\n    required\r\n    [(ngModel)]=\"newBook.inStockNumber\"\r\n    name=\"inStockNumber\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Description:</h5>\r\n  <input\r\n    id=\"description\"\r\n    type=\"textarea\"\r\n    required\r\n    [(ngModel)]=\"newBook.description\"\r\n    name=\"description\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Choose A Category:</h5>\r\n  <select select id=\"category\" name=\"category\" [(ngModel)]=\"newBook.cates.id\">\r\n    <option *ngFor=\"let cate of cates\" value=\"{{ cate.id }}\"\r\n      >{{ cate.name }}</option\r\n    >\r\n  </select>\r\n  <br />\r\n  <img\r\n    style=\"width: 160px;height: 160px;\"\r\n    [src]=\"'http://localhost:8184/image/book/' + newBook.id + '.png'\"\r\n    (error)=\"img.src = '../../../../assets/image/default.png'\"\r\n    #img\r\n    class=\"avatar img-thumbnail\"\r\n    alt=\"avatar\"\r\n  />\r\n  <h5>Upload Image:</h5>\r\n  <input\r\n    type=\"file\"\r\n    id=\"bookImage\"\r\n    name=\"bookImage\"\r\n    (change)=\"fileChange($event)\"\r\n  />\r\n  <br />\r\n</div>\r\n<br />\r\n<br />\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n\r\n  <button\r\n    mat-raised-button\r\n    color=\"warn\"\r\n    (click)=\"onAddNewBook(newBook.cates.id)\"\r\n  >\r\n    Update\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/cates/cates.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/cates/cates.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- start: Content -->\n<ul class=\"breadcrumb\">\n  <li>\n    <i class=\"icon-home\"></i>\n    <a href=\"index.html\">Home</a>\n    <i class=\"icon-angle-right\"></i>\n  </li>\n  <li><a href=\"#\">Category</a></li>\n</ul>\n\n<div class=\"row-fluid sortable\">\n  <div class=\"box span12\">\n    <div class=\"box-header\">\n      <h2>\n        <i class=\"fa fa-align-justify\" style=\"color:white\"></i\n          ><span class=\"break\"></span>CATEGORY DATABASE\n      </h2>\n\n      <div class=\"box-icon\">\n        <a href=\"#\" class=\"btn-setting\"\n        ><i class=\"fa fa-wrench\" style=\"color:white\"></i></a>\n        <a href=\"#\" class=\"btn-minimize\" style=\"color:white\"\n        ><i class=\"fa fa-chevron-up\" style=\"color:white\"></i\n      ></a>\n      <a href=\"#\" class=\"btn-close\"\n        ><i class=\"fa fa-remove\" style=\"color:white\"></i\n      ></a>\n      </div>\n    </div>\n\n    <div class=\"box-content\">\n      <button mat-raised-button color=\"warn\" (click)=\"openDialogAddMyCates()\">\n        +Add New\n      </button>\n      <br />\n      <hr />\n      <mat-form-field>\n        <input\n          matInput\n          (keyup)=\"applyFilter($event.target.value)\"\n          placeholder=\"Filter\"\n        />\n      </mat-form-field>\n\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"position\">\n          <th mat-header-cell *matHeaderCellDef>No.</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.id }}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef>Name</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef>Action</th>\n          <td mat-cell *matCellDef=\"let element\" class=\"center\">\n            <a\n              class=\"btn btn-info\"\n              href=\"javascript:;\"\n              (click)=\"openDialogUpdateMyCates(element)\"\n            >\n            <i class=\"fa fa-edit\" style=\"color:white\"></i>\n            </a>\n            &nbsp;\n            <a\n              class=\"btn btn-danger\"\n              href=\"javascript:;\"\n              (click)=\"openDialogDeleteMyCates(element.id)\"\n            >\n            <i class=\"fa fa-trash\" style=\"color:white\"></i>\n            </a>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [pageSizeOptions]=\"[10, 20, 100]\"\n        showFirstLastButtons\n      ></mat-paginator>\n    </div>\n  </div>\n  <!--/span-->\n</div>\n<!--/row-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/cates/dialog-add-my-cates.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/cates/dialog-add-my-cates.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add My Category</h1>\r\n<hr />\r\n<div mat-dialog-content>\r\n  <h5>Category Name:</h5>\r\n  <input\r\n    type=\"text\"\r\n    class=\"form-control\"\r\n    id=\"name\"\r\n    [(ngModel)]=\"newCates.name\"\r\n    placeholder=\"Add A New Category\"\r\n  />\r\n  <br />\r\n</div>\r\n<br />\r\n<br />\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n\r\n  <button mat-raised-button color=\"warn\" (click)=\"onAddNewCates()\">\r\n    Add New Category\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/cates/dialog-delete-my-cates.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/cates/dialog-delete-my-cates.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>\r\n  Are you sure you want to delete this Category ? Attention ! If you delete this\r\n  category, all of the books belong to it will also be deleted\r\n</h1>\r\n<hr />\r\n\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n\r\n  <button mat-raised-button color=\"warn\" (click)=\"onDeleteCates()\">\r\n    Delete\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/cates/dialog-update-my-cates.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/cates/dialog-update-my-cates.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Update My Category</h1>\r\n<hr />\r\n<div mat-dialog-content>\r\n  <h5>Category Name:</h5>\r\n  <input\r\n    type=\"text\"\r\n    class=\"form-control\"\r\n    id=\"name\"\r\n    [(ngModel)]=\"updateCates.name\"\r\n    placeholder=\"Add A New Category\"\r\n  />\r\n  <br />\r\n</div>\r\n<br />\r\n<br />\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n\r\n  <button mat-raised-button color=\"warn\" (click)=\"onAddNewCates()\">\r\n    Update Category\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/order/dialog-see-my-order.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/order/dialog-see-my-order.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>DETAILS FOR ORDERS: {{order.id}}</h1>\r\n<hr />\r\n<div mat-dialog-content>\r\n  <div class=\"panel panel-default height\">\r\n    <div class=\"panel-heading\"><strong>Billing Details</strong></div>\r\n    <div class=\"panel-body\">\r\n      <span>{{order.orderBillingAddress.billingAddressName}}</span>\r\n      <br />\r\n      <span>{{order.orderBillingAddress.billingAddressStreet}}</span>\r\n      <br />\r\n      <span>{{order.orderBillingAddress.billingAddressCity}}</span>\r\n      <br />\r\n      <span>{{order.orderBillingAddress.billingAddressState}}</span>\r\n      <br />\r\n      <span>{{order.orderBillingAddress.billingAddressCountry}}</span>\r\n      <br />\r\n      <span>{{order.orderBillingAddress.billingAddressZipcode}}</span>\r\n      <br />\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel panel-default height\">\r\n    <div class=\"panel-heading\"><strong>Payment Information</strong></div>\r\n    <div class=\"panel-body\">\r\n      <span>{{order.orderPayment.cardName}}</span>\r\n      <br />\r\n      Visa\r\n      <br />\r\n      <span>{{order.orderPayment.cardNumber}}</span>\r\n      <br />\r\n      <span>Exp Date:</span> <span>{{order.orderPayment.expiryDate}}</span>\r\n      <br />\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel panel-default height\">\r\n    <div class=\"panel-heading\"><strong>Shipping Address</strong></div>\r\n    <div class=\"panel-body\">\r\n      <span>{{order.orderShippingAddress.shippingAddressName}}</span>\r\n      <br />\r\n      <span>{{order.orderShippingAddress.shippingAddressStreet}}</span>\r\n      <br />\r\n      <span>{{order.orderShippingAddress.shippingAddressCity}}</span>\r\n      <br />\r\n      <span>{{order.orderShippingAddress.shippingAddressState}}</span>\r\n      <br />\r\n      <span>{{order.orderShippingAddress.shippingAddressCountry}}</span>\r\n      <br />\r\n      <span>{{order.orderShippingAddress.shippingAddressZipcode}}</span>\r\n      <br />\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"text-center\"><strong>Order summary</strong></h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-condensed\">\r\n          <thead>\r\n            <tr>\r\n              <td><strong>Item Name</strong></td>\r\n              <td class=\"text-center\"><strong>Item Price</strong></td>\r\n              <td class=\"text-center\"><strong>Item Quantity</strong></td>\r\n              <td class=\"text-right\"><strong>Total</strong></td>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let cartItem of order.cartItemList\">\r\n              <td>{{cartItem.book.title}}</td>\r\n              <td class=\"text-center\">{{cartItem.book.ourPrice}}</td>\r\n              <td class=\"text-center\">\r\n                {{cartItem.qty}}\r\n              </td>\r\n              <td class=\"text-right\">{{cartItem.subtotal}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"highrow\"></td>\r\n              <td class=\"highrow\"></td>\r\n              <td class=\"highrow text-center\">\r\n                <strong>Subtotal</strong>\r\n              </td>\r\n              <td class=\"highrow text-right\">{{order.orderTotal}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"emptyrow\"></td>\r\n              <td class=\"emptyrow\"></td>\r\n              <td class=\"emptyrow text-center\"><strong>Tax</strong></td>\r\n              <td class=\"emptyrow text-right\">{{order.orderTotal*0.06}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"emptyrow\"><i class=\"fa fa-barcode iconbig\"></i></td>\r\n              <td class=\"emptyrow\"></td>\r\n              <td class=\"emptyrow text-center\"><strong>Total</strong></td>\r\n              <td class=\"emptyrow text-right\">{{order.orderTotal*1.06}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button color=\"warn\" (click)=\"onNoClick()\">OK</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/order/order.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/order/order.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- start: Content -->\n<ul class=\"breadcrumb\">\n  <li>\n    <i class=\"icon-home\"></i>\n    <a [routerLink]=\"['/admin']\">Home</a>\n    <i class=\"icon-angle-right\"></i>\n  </li>\n  <li><a [routerLink]=\"['/admin/orders']\">Order</a></li>\n</ul>\n\n<div class=\"row-fluid sortable\">\n  <div class=\"box span12\">\n    <div class=\"box-header\">\n      <h2>\n        <i class=\"fa fa-align-justify\" style=\"color:white\"></i\n          ><span class=\"break\"></span>ORDER DATABASE\n      </h2>\n\n      <div class=\"box-icon\">\n        <a href=\"#\" class=\"btn-setting\"\n        ><i class=\"fa fa-wrench\" style=\"color:white\"></i></a>\n        <a href=\"#\" class=\"btn-minimize\" style=\"color:white\"\n        ><i class=\"fa fa-chevron-up\" style=\"color:white\"></i\n      ></a>\n      <a href=\"#\" class=\"btn-close\"\n        ><i class=\"fa fa-remove\" style=\"color:white\"></i\n      ></a>\n      </div>\n    </div>\n\n    <div class=\"box-content\">\n      <mat-form-field>\n        <input\n          matInput\n          (keyup)=\"applyFilter($event.target.value)\"\n          placeholder=\"Filter\"\n        />\n      </mat-form-field>\n\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef>No.:</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.id }}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"orderDate\">\n          <th mat-header-cell *matHeaderCellDef>Order Date:</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.orderDate }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"orderStatus\">\n          <th mat-header-cell *matHeaderCellDef>Order Status:</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.orderStatus }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"orderTotal\">\n          <th mat-header-cell *matHeaderCellDef>Order Total:</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.orderTotal }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef>Action</th>\n          <td mat-cell *matCellDef=\"let element\" class=\"center\">\n            <a\n              class=\"btn btn-info\"\n              href=\"javascript:;\"\n              (click)=\"openDialogSeeMyOrder(element)\"\n            >\n              <i class=\"fa fa-zoom-in\" style=\"color:white\"></i>\n            </a>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [pageSizeOptions]=\"[10, 20, 100]\"\n        showFirstLastButtons\n      ></mat-paginator>\n    </div>\n  </div>\n  <!--/span-->\n</div>\n<!--/row-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/templates/header/header.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/templates/header/header.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- start: Header -->\r\n<div class=\"navbar\">\r\n  <div class=\"navbar-inner\">\r\n    <div class=\"container-fluid\">\r\n      <a\r\n        class=\"btn btn-navbar\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".top-nav.nav-collapse,.sidebar-nav.nav-collapse\"\r\n      >\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </a>\r\n      <a class=\"brand\" href=\"index.html\"><span>BOOK PORTAL | Demo</span></a>\r\n\r\n      <!-- start: Header Menu -->\r\n      <div class=\"nav-no-collapse header-nav\">\r\n        <ul class=\"nav pull-right\">\r\n          <!-- start: User Dropdown -->\r\n          <li class=\"dropdown\">\r\n            <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n              <i class=\"fa fa-user\" style=\"color:white\"></i> {{ currentUser.name }}\r\n              <span class=\"caret\"></span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li class=\"dropdown-menu-title\">\r\n                <span>Account Settings</span>\r\n              </li>\r\n\r\n              <li>\r\n                <a (click)=\"logOut()\" href=\"javascript:;\"\r\n                  ><i class=\"fa fa-off\" style=\"color:white\"></i> Logout</a\r\n                >\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <!-- end: User Dropdown -->\r\n        </ul>\r\n      </div>\r\n      <!-- end: Header Menu -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- start: Header -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/templates/menu/menu.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/templates/menu/menu.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- start: Main Menu -->\r\n<div id=\"sidebar-left\" class=\"span2\">\r\n  <div class=\"nav-collapse sidebar-nav\">\r\n    <ul class=\"nav nav-tabs nav-stacked main-menu\">\r\n      <li>\r\n        <a [routerLink]=\"['/admin']\"\r\n          ><i class=\"icon-bar-chart\"></i\r\n          ><span class=\"hidden-tablet\"> Dashboard</span></a\r\n        >\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['/admin/cates']\"\r\n          ><i class=\"icon-envelope\"></i\r\n          ><span class=\"hidden-tablet\"> Category</span></a\r\n        >\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['/admin/books']\"\r\n          ><i class=\"icon-tasks\"></i><span class=\"hidden-tablet\"> Book</span></a\r\n        >\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['/admin/users']\"\r\n          ><i class=\"icon-eye-open\"></i\r\n          ><span class=\"hidden-tablet\"> User</span></a\r\n        >\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['/admin/orders']\"\r\n          ><i class=\"icon-dashboard\"></i\r\n          ><span class=\"hidden-tablet\"> Order</span></a\r\n        >\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<!-- end: Main Menu -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/users/dialog-add-my-user.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/users/dialog-add-my-user.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add New User</h1>\r\n<hr />\r\n<div mat-dialog-content>\r\n  <h5>Name:</h5>\r\n  <input\r\n    id=\"name\"\r\n    type=\"text\"\r\n    required\r\n    [(ngModel)]=\"newUser.name\"\r\n    name=\"name\"\r\n  />\r\n  <br />\r\n  <h5>Username:</h5>\r\n  <input\r\n    id=\"username\"\r\n    type=\"text\"\r\n    required\r\n    [(ngModel)]=\"newUser.username\"\r\n    name=\"username\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Password:</h5>\r\n  <input\r\n    id=\"publisher\"\r\n    type=\"password\"\r\n    required\r\n    [(ngModel)]=\"newUser.password\"\r\n    name=\"password\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Confirm Password:</h5>\r\n  <input\r\n    id=\"confirmPassword\"\r\n    type=\"password\"\r\n    required\r\n    [(ngModel)]=\"newUser.confirmPassword\"\r\n    name=\"confirmPassword\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Email:</h5>\r\n  <input\r\n    id=\"email\"\r\n    type=\"email\"\r\n    required\r\n    [(ngModel)]=\"newUser.email\"\r\n    name=\"email\"\r\n  />\r\n  <br />\r\n\r\n  <h5>Confirm Email:</h5>\r\n  <input\r\n    id=\"confirmEmail\"\r\n    type=\"email\"\r\n    required\r\n    [(ngModel)]=\"newUser.confirmEmail\"\r\n    name=\"confirmEmail\"\r\n  />\r\n  <br />\r\n\r\n  <!-- <h5>Upload Image:</h5>\r\n  <input type=\"file\" id=\"userImage\" name=\"userImage\" (change)=\"uploadImageUserService.fileChangeEvent($event)\">\r\n  <br /> -->\r\n</div>\r\n<br />\r\n<br />\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n\r\n  <button mat-raised-button color=\"warn\" (click)=\"onAddNewUser()\">\r\n    Add New\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/users/users.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/users/users.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- start: Content -->\n<ul class=\"breadcrumb\">\n  <li>\n    <i class=\"icon-home\"></i>\n    <a [routerLink]=\"['/admin']\">Home</a>\n    <i class=\"icon-angle-right\"></i>\n  </li>\n  <li><a [routerLink]=\"['/admin/users']\">User</a></li>\n</ul>\n\n<div class=\"row-fluid sortable\">\n  <div class=\"box span12\">\n    <div class=\"box-header\">\n      <h2>\n        <i class=\"fa fa-align-justify\" style=\"color:white\"></i\n          ><span class=\"break\"></span>USER DATABASE\n      </h2>\n\n      <div class=\"box-icon\">\n        <a href=\"#\" class=\"btn-setting\"\n        ><i class=\"fa fa-wrench\" style=\"color:white\"></i></a>\n        <a href=\"#\" class=\"btn-minimize\" style=\"color:white\"\n        ><i class=\"fa fa-chevron-up\" style=\"color:white\"></i\n      ></a>\n      <a href=\"#\" class=\"btn-close\"\n        ><i class=\"fa fa-remove\" style=\"color:white\"></i\n      ></a>\n      </div>\n    </div>\n\n    <div class=\"box-content\">\n      <button mat-raised-button color=\"warn\" (click)=\"openDialogAddMyUsers()\">\n        +Add New\n      </button>\n      <br />\n      <hr />\n      <mat-form-field>\n        <input\n          matInput\n          (keyup)=\"applyFilter($event.target.value)\"\n          placeholder=\"Filter\"\n        />\n      </mat-form-field>\n\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef>No.</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.id }}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef>Name</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"username\">\n          <th mat-header-cell *matHeaderCellDef>Username</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.username }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"role\">\n          <th mat-header-cell *matHeaderCellDef>Role</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.role }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef>Action</th>\n          <td mat-cell *matCellDef=\"let element\" class=\"center\">\n            <a\n              class=\"btn btn-info\"\n              href=\"javascript:;\"\n              \n              *ngIf=\"element.role == 'USER'\"\n            >\n            <i class=\"fa fa-edit\" style=\"color:white\"></i>\n            </a>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [pageSizeOptions]=\"[10, 20, 100]\"\n        showFirstLastButtons\n      ></mat-paginator>\n    </div>\n  </div>\n  <!--/span-->\n</div>\n<!--/row-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 style=\"text-align: left;font-size: xx-large;\">\n  <strong>BOOK PORTAL</strong>\n</h1>\n\n<div class=\"loginbox\">\n  <img src=\"../../../assets/image/avatar.png\" class=\"avatar\" />\n  <h1><strong>ADMIN LOGIN</strong></h1>\n  <div class=\"alert alert-warning\" *ngIf=\"errorMessage\">\n    <strong>{{ errorMessage }}</strong>\n  </div>\n  <form (ngSubmit)=\"f.form.valid && onLogin()\" #f=\"ngForm\" novalidate>\n    <p>Username</p>\n    <input\n      type=\"text\"\n      name=\"username\"\n      [(ngModel)]=\"user.username\"\n      #username=\"ngModel\"\n      required\n      id=\"username\"\n      placeholder=\"Enter Username\"\n    />\n    <p>Password</p>\n    <input\n      type=\"password\"\n      name=\"password\"\n      [(ngModel)]=\"user.password\"\n      #password=\"ngModel\"\n      required\n      id=\"password\"\n      placeholder=\"Enter Password\"\n    />\n    <input type=\"submit\" name=\"\" value=\"Login\" />\n    <span>Username: admin</span><br>\n    <span>Password: 123456</span>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"page-wrap d-flex flex-row align-items-center\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-12 text-center\">\n          <span class=\"display-1 d-block\">404</span>\n          <div class=\"mb-4 lead\">\n            Oops! We can't seem to find the page you are looking for.\n          </div>\n          <a href=\"/login\" class=\"btn btn-link\">Back to Home</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/unauthorized/unauthorized.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/unauthorized/unauthorized.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"page-wrap d-flex flex-row align-items-center\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-12 text-center\">\n          <span class=\"display-1 d-block\">401</span>\n          <div class=\"mb-4 lead\">\n            Unathorized! Access to this resource is denied.\n          </div>\n          <a href=\"/login\" class=\"btn btn-link\">Back to Home</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

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

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const adminRoutes = [];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(adminRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-admin",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_templates_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/templates/header/header.component */ "./src/app/admin/components/templates/header/header.component.ts");
/* harmony import */ var _components_templates_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/templates/menu/menu.component */ "./src/app/admin/components/templates/menu/menu.component.ts");
/* harmony import */ var _components_adminindex_adminindex_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/adminindex/adminindex.component */ "./src/app/admin/components/adminindex/adminindex.component.ts");
/* harmony import */ var _components_cates_cates_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cates/cates.component */ "./src/app/admin/components/cates/cates.component.ts");
/* harmony import */ var _components_books_books_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/books/books.component */ "./src/app/admin/components/books/books.component.ts");
/* harmony import */ var _services_cates_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/cates.service */ "./src/app/admin/services/cates.service.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/books.service */ "./src/app/admin/services/books.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/users.service */ "./src/app/admin/services/users.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/admin/components/users/users.component.ts");
/* harmony import */ var _services_upload_book_image_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/upload-book-image.service */ "./src/app/admin/services/upload-book-image.service.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/admin/components/order/order.component.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/order.service */ "./src/app/admin/services/order.service.ts");






//Component





//Services



//Material

// import { TableModule } from "primeng/table";












let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
            _components_templates_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _components_templates_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
            _components_adminindex_adminindex_component__WEBPACK_IMPORTED_MODULE_8__["AdminindexComponent"],
            _components_users_users_component__WEBPACK_IMPORTED_MODULE_23__["UsersComponent"],
            _components_books_books_component__WEBPACK_IMPORTED_MODULE_10__["BooksComponent"],
            _components_cates_cates_component__WEBPACK_IMPORTED_MODULE_9__["CatesComponent"],
            _components_cates_cates_component__WEBPACK_IMPORTED_MODULE_9__["DialogAddMyCatesDialog"],
            _components_cates_cates_component__WEBPACK_IMPORTED_MODULE_9__["DialogUpdateMyCatesDialog"],
            _components_cates_cates_component__WEBPACK_IMPORTED_MODULE_9__["DialogDeleteMyCatesDialog"],
            _components_books_books_component__WEBPACK_IMPORTED_MODULE_10__["DialogAddMyBookDialog"],
            _components_books_books_component__WEBPACK_IMPORTED_MODULE_10__["DialogDeleteMyBookDialog"],
            _components_books_books_component__WEBPACK_IMPORTED_MODULE_10__["DialogUpdateMyBookDialog"],
            _components_users_users_component__WEBPACK_IMPORTED_MODULE_23__["DialogAddMyUserDialog"],
            _components_order_order_component__WEBPACK_IMPORTED_MODULE_25__["OrderComponent"],
            _components_order_order_component__WEBPACK_IMPORTED_MODULE_25__["DialogSeeMyOrderDialog"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            // TableModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"]
        ],
        providers: [
            _services_cates_service__WEBPACK_IMPORTED_MODULE_11__["CatesService"],
            _services_books_service__WEBPACK_IMPORTED_MODULE_12__["BooksService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_13__["UsersService"],
            _services_upload_book_image_service__WEBPACK_IMPORTED_MODULE_24__["UploadBookImageService"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_26__["OrderService"]
        ],
        bootstrap: [
            _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
            _components_cates_cates_component__WEBPACK_IMPORTED_MODULE_9__["DialogAddMyCatesDialog"],
            _components_cates_cates_component__WEBPACK_IMPORTED_MODULE_9__["DialogUpdateMyCatesDialog"],
            _components_cates_cates_component__WEBPACK_IMPORTED_MODULE_9__["DialogDeleteMyCatesDialog"],
            _components_books_books_component__WEBPACK_IMPORTED_MODULE_10__["DialogAddMyBookDialog"],
            _components_books_books_component__WEBPACK_IMPORTED_MODULE_10__["DialogDeleteMyBookDialog"],
            _components_books_books_component__WEBPACK_IMPORTED_MODULE_10__["DialogUpdateMyBookDialog"],
            _components_users_users_component__WEBPACK_IMPORTED_MODULE_23__["DialogAddMyUserDialog"],
            _components_order_order_component__WEBPACK_IMPORTED_MODULE_25__["DialogSeeMyOrderDialog"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/components/adminindex/adminindex.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/components/adminindex/adminindex.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYWRtaW5pbmRleC9hZG1pbmluZGV4LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/components/adminindex/adminindex.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/adminindex/adminindex.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminindexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminindexComponent", function() { return AdminindexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminindexComponent = class AdminindexComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminindexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminindex',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adminindex.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/adminindex/adminindex.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adminindex.component.css */ "./src/app/admin/components/adminindex/adminindex.component.css")).default]
    })
], AdminindexComponent);



/***/ }),

/***/ "./src/app/admin/components/books/books.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/components/books/books.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  text-align: center;\r\n}\r\ntable,\r\nth,\r\ntd {\r\n  border: 0.5px solid black;\r\n}\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9ib29rcy9ib29rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTs7O0VBR0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9ib29rcy9ib29rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnRhYmxlLFxyXG50aCxcclxudGQge1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/admin/components/books/books.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/books/books.component.ts ***!
  \***********************************************************/
/*! exports provided: BooksComponent, DialogAddMyBookDialog, DialogDeleteMyBookDialog, DialogUpdateMyBookDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddMyBookDialog", function() { return DialogAddMyBookDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDeleteMyBookDialog", function() { return DialogDeleteMyBookDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUpdateMyBookDialog", function() { return DialogUpdateMyBookDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/books.service */ "./src/app/admin/services/books.service.ts");
/* harmony import */ var _models_books__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/books */ "./src/app/admin/models/books.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _services_cates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/cates.service */ "./src/app/admin/services/cates.service.ts");
/* harmony import */ var _services_upload_book_image_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/upload-book-image.service */ "./src/app/admin/services/upload-book-image.service.ts");









let BooksComponent = class BooksComponent {
    constructor(dialog, booksService) {
        this.dialog = dialog;
        this.booksService = booksService;
        this.books = [];
        this.displayedColumns = [
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
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
    }
    applyFilter(filterValue) {
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
    openDialogDeleteMyBook(id) {
        const dialogRef = this.dialog.open(DialogDeleteMyBookDialog, {
            width: "550px",
            data: id
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getBooksList();
        });
    }
    openDialogUpdateMyBook(book) {
        const dialogRef = this.dialog.open(DialogUpdateMyBookDialog, {
            width: "450px",
            data: book
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getBooksList();
        });
    }
    getBooksList() {
        this.booksService.getBooksList().subscribe(res => {
            this.dataSource.data = res.json();
        }, err => {
        });
    }
    ngOnInit() {
        this.getBooksList();
        this.dataSource.paginator = this.paginator;
    }
};
BooksComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true })
], BooksComponent.prototype, "paginator", void 0);
BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-books",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./books.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/books/books.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./books.component.css */ "./src/app/admin/components/books/books.component.css")).default]
    })
], BooksComponent);

// ADD NEW BOOK ------------------------------------------------------
let DialogAddMyBookDialog = class DialogAddMyBookDialog {
    constructor(catesService, booksService, uploadBookImageService, dialogRef) {
        this.catesService = catesService;
        this.booksService = booksService;
        this.uploadBookImageService = uploadBookImageService;
        this.dialogRef = dialogRef;
        this.newBook = new _models_books__WEBPACK_IMPORTED_MODULE_4__["Books"]();
    }
    onAddNewBook() {
        this.booksService.sendBook(this.newBook, this.cateId).subscribe(res => {
            this.uploadBookImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
            console.log("ID la " + JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
            console.log(res.json());
            this.dialogRef.close();
        }, err => {
            console.log(err);
        });
    }
    fileChange(e) {
        this.uploadBookImageService.fileChangeEvent(e);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.catesService.getCatesList().subscribe(res => {
            this.cates = res.json();
        }, err => {
        });
    }
};
DialogAddMyBookDialog.ctorParameters = () => [
    { type: _services_cates_service__WEBPACK_IMPORTED_MODULE_7__["CatesService"] },
    { type: _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"] },
    { type: _services_upload_book_image_service__WEBPACK_IMPORTED_MODULE_8__["UploadBookImageService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
DialogAddMyBookDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "add-my-book",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-add-my-book.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/books/dialog-add-my-book.html")).default
    })
], DialogAddMyBookDialog);

// DELETE BOOK POP UP -----------------------------------------------------------------
let DialogDeleteMyBookDialog = class DialogDeleteMyBookDialog {
    constructor(dialogRef, booksService, data) {
        this.dialogRef = dialogRef;
        this.booksService = booksService;
        this.data = data;
        this.id = this.data;
    }
    onDeleteBook() {
        this.booksService.deleteBook(this.id).subscribe(res => {
            this.dialogRef.close();
        }, err => { });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() { }
};
DialogDeleteMyBookDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"] },
    { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogDeleteMyBookDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "delete-my-book",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-delete-my-book.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/books/dialog-delete-my-book.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogDeleteMyBookDialog);

// UPDATE BOOK POP UP -----------------------------------------------------------------
let DialogUpdateMyBookDialog = class DialogUpdateMyBookDialog {
    constructor(dialogRef, catesService, booksService, uploadBookImageService, data) {
        this.dialogRef = dialogRef;
        this.catesService = catesService;
        this.booksService = booksService;
        this.uploadBookImageService = uploadBookImageService;
        this.data = data;
        this.newBook = new _models_books__WEBPACK_IMPORTED_MODULE_4__["Books"]();
        this.newBook = this.data;
    }
    onAddNewBook(catesId) {
        this.booksService.sendBook(this.newBook, catesId).subscribe(res => {
            this.uploadBookImageService.modify(catesId);
            this.dialogRef.close();
        }, err => {
        });
    }
    fileChange(e) {
        this.uploadBookImageService.fileChangeEvent(e);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.catesService.getCatesList().subscribe(res => {
            this.cates = res.json();
        }, err => {
        });
    }
};
DialogUpdateMyBookDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _services_cates_service__WEBPACK_IMPORTED_MODULE_7__["CatesService"] },
    { type: _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"] },
    { type: _services_upload_book_image_service__WEBPACK_IMPORTED_MODULE_8__["UploadBookImageService"] },
    { type: _models_books__WEBPACK_IMPORTED_MODULE_4__["Books"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogUpdateMyBookDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "update-my-book",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-update-my-book.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/books/dialog-update-my-book.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogUpdateMyBookDialog);



/***/ }),

/***/ "./src/app/admin/components/cates/cates.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/components/cates/cates.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9jYXRlcy9jYXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvY2F0ZXMvY2F0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/admin/components/cates/cates.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/cates/cates.component.ts ***!
  \***********************************************************/
/*! exports provided: CatesComponent, DialogAddMyCatesDialog, DialogUpdateMyCatesDialog, DialogDeleteMyCatesDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatesComponent", function() { return CatesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddMyCatesDialog", function() { return DialogAddMyCatesDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUpdateMyCatesDialog", function() { return DialogUpdateMyCatesDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDeleteMyCatesDialog", function() { return DialogDeleteMyCatesDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_cates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cates.service */ "./src/app/admin/services/cates.service.ts");
/* harmony import */ var _models_cates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/cates */ "./src/app/admin/models/cates.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");







let CatesComponent = class CatesComponent {
    constructor(catesService, dialog) {
        this.catesService = catesService;
        this.dialog = dialog;
        this.cates = [];
        this.displayedColumns = ["position", "name", "action"];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getCatesList() {
        this.catesService.getCatesList().subscribe(res => {
            this.dataSource.data = res.json();
        }, err => {
        });
    }
    openDialogAddMyCates() {
        let dialogRef = this.dialog.open(DialogAddMyCatesDialog, {
            width: "450px"
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getCatesList();
        });
    }
    openDialogUpdateMyCates(cates) {
        const dialogRef = this.dialog.open(DialogUpdateMyCatesDialog, {
            width: "450px",
            data: cates
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getCatesList();
        });
    }
    openDialogDeleteMyCates(id) {
        const dialogRef = this.dialog.open(DialogDeleteMyCatesDialog, {
            width: "550px",
            data: id
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getCatesList();
        });
    }
    ngOnInit() {
        this.getCatesList();
        this.dataSource.paginator = this.paginator;
    }
};
CatesComponent.ctorParameters = () => [
    { type: _services_cates_service__WEBPACK_IMPORTED_MODULE_2__["CatesService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
], CatesComponent.prototype, "paginator", void 0);
CatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-cates",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cates.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/cates/cates.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cates.component.css */ "./src/app/admin/components/cates/cates.component.css")).default]
    })
], CatesComponent);

let DialogAddMyCatesDialog = class DialogAddMyCatesDialog {
    constructor(dialogRef, catesService) {
        this.dialogRef = dialogRef;
        this.catesService = catesService;
        this.newCates = new _models_cates__WEBPACK_IMPORTED_MODULE_3__["Cates"]();
    }
    onAddNewCates() {
        this.catesService.sendCates(this.newCates).subscribe(res => {
            this.dialogRef.close();
        }, err => { });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() { }
};
DialogAddMyCatesDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: _services_cates_service__WEBPACK_IMPORTED_MODULE_2__["CatesService"] }
];
DialogAddMyCatesDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "add-my-cates",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-add-my-cates.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/cates/dialog-add-my-cates.html")).default
    })
], DialogAddMyCatesDialog);

// UPDATE CATEGORY POP UP -----------------------------------------------------------------
let DialogUpdateMyCatesDialog = class DialogUpdateMyCatesDialog {
    constructor(dialogRef, catesService, data) {
        this.dialogRef = dialogRef;
        this.catesService = catesService;
        this.data = data;
        this.updateCates = new _models_cates__WEBPACK_IMPORTED_MODULE_3__["Cates"]();
        this.updateCates = this.data;
    }
    onAddNewCates() {
        this.catesService.sendCates(this.updateCates).subscribe(res => {
            this.dialogRef.close();
        }, err => { });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() { }
};
DialogUpdateMyCatesDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: _services_cates_service__WEBPACK_IMPORTED_MODULE_2__["CatesService"] },
    { type: _models_cates__WEBPACK_IMPORTED_MODULE_3__["Cates"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] }
];
DialogUpdateMyCatesDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "update-my-cates",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-update-my-cates.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/cates/dialog-update-my-cates.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]))
], DialogUpdateMyCatesDialog);

// DELETE CATEGORY POP UP -----------------------------------------------------------------
let DialogDeleteMyCatesDialog = class DialogDeleteMyCatesDialog {
    constructor(dialogRef, catesService, data) {
        this.dialogRef = dialogRef;
        this.catesService = catesService;
        this.data = data;
        this.id = this.data;
    }
    onDeleteCates() {
        this.catesService.deleteCates(this.id).subscribe(res => {
            this.dialogRef.close();
        }, err => { });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() { }
};
DialogDeleteMyCatesDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: _services_cates_service__WEBPACK_IMPORTED_MODULE_2__["CatesService"] },
    { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] }
];
DialogDeleteMyCatesDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "delete-my-cates",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-delete-my-cates.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/cates/dialog-delete-my-cates.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]))
], DialogDeleteMyCatesDialog);



/***/ }),

/***/ "./src/app/admin/components/order/order.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/components/order/order.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9vcmRlci9vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/admin/components/order/order.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/order/order.component.ts ***!
  \***********************************************************/
/*! exports provided: OrderComponent, DialogSeeMyOrderDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSeeMyOrderDialog", function() { return DialogSeeMyOrderDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/admin/services/order.service.ts");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/order */ "./src/app/admin/models/order.ts");







let OrderComponent = class OrderComponent {
    constructor(dialog, orderService) {
        this.dialog = dialog;
        this.orderService = orderService;
        this.displayedColumns = [
            "id",
            "orderDate",
            "orderStatus",
            "orderTotal",
            "action"
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getOrderList() {
        this.orderService.getOrderList().subscribe(res => {
            this.dataSource.data = res.json();
        }, err => {
        });
    }
    openDialogSeeMyOrder(order) {
        const dialogRef = this.dialog.open(DialogSeeMyOrderDialog, {
            width: "750px",
            data: order
        });
        dialogRef.afterClosed().subscribe(result => { });
    }
    ngOnInit() {
        this.getOrderList();
        this.dataSource.paginator = this.paginator;
    }
};
OrderComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
], OrderComponent.prototype, "paginator", void 0);
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-order",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/order/order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.css */ "./src/app/admin/components/order/order.component.css")).default]
    })
], OrderComponent);

let DialogSeeMyOrderDialog = class DialogSeeMyOrderDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.order = new _models_order__WEBPACK_IMPORTED_MODULE_6__["Order"]();
        this.order = this.data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() { }
};
DialogSeeMyOrderDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _models_order__WEBPACK_IMPORTED_MODULE_6__["Order"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogSeeMyOrderDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "see-my-order",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-see-my-order.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/order/dialog-see-my-order.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogSeeMyOrderDialog);



/***/ }),

/***/ "./src/app/admin/components/templates/header/header.component.css":
/*!************************************************************************!*\
  !*** ./src/app/admin/components/templates/header/header.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdGVtcGxhdGVzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/components/templates/header/header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/templates/header/header.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_admin_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/services/login.service */ "./src/app/admin/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    logOut() {
        this.loginService.logout().subscribe(res => {
            this.router.navigate(["/login"]);
        });
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_admin_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-header",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/templates/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/admin/components/templates/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/admin/components/templates/menu/menu.component.css":
/*!********************************************************************!*\
  !*** ./src/app/admin/components/templates/menu/menu.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdGVtcGxhdGVzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/components/templates/menu/menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/templates/menu/menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/templates/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/admin/components/templates/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/admin/components/users/users.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/components/users/users.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/admin/components/users/users.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/users/users.component.ts ***!
  \***********************************************************/
/*! exports provided: UsersComponent, DialogAddMyUserDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddMyUserDialog", function() { return DialogAddMyUserDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/admin/services/users.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/user */ "./src/app/admin/models/user.ts");







let UsersComponent = class UsersComponent {
    constructor(usersService, dialog) {
        this.usersService = usersService;
        this.dialog = dialog;
        this.displayedColumns = ["id", "name", "username", "role", "action"];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getUsersList() {
        this.usersService.getUsersList().subscribe(res => {
            this.dataSource.data = res.json();
        }, err => {
        });
    }
    openDialogAddMyUsers() {
        let dialogRef = this.dialog.open(DialogAddMyUserDialog, {
            width: "450px"
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getUsersList();
        });
    }
    ngOnInit() {
        this.getUsersList();
        this.dataSource.paginator = this.paginator;
    }
};
UsersComponent.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
], UsersComponent.prototype, "paginator", void 0);
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-users",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/users/users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/admin/components/users/users.component.css")).default]
    })
], UsersComponent);

// ADD NEW USER ------------------------------------------------------
let DialogAddMyUserDialog = class DialogAddMyUserDialog {
    constructor(usersService, dialogRef) {
        this.usersService = usersService;
        this.dialogRef = dialogRef;
        this.newUser = new _models_user__WEBPACK_IMPORTED_MODULE_6__["User"]();
    }
    onAddNewUser() {
        this.usersService.sendUser(this.newUser).subscribe(res => {
            this.dialogRef.close();
        }, err => { });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() { }
};
DialogAddMyUserDialog.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
DialogAddMyUserDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "add-my-user",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-add-my-user.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/users/dialog-add-my-user.html")).default
    })
], DialogAddMyUserDialog);



/***/ }),

/***/ "./src/app/admin/constants/app-constants.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/constants/app-constants.ts ***!
  \**************************************************/
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


/***/ }),

/***/ "./src/app/admin/models/books.ts":
/*!***************************************!*\
  !*** ./src/app/admin/models/books.ts ***!
  \***************************************/
/*! exports provided: Books */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Books", function() { return Books; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Books {
}


/***/ }),

/***/ "./src/app/admin/models/cates.ts":
/*!***************************************!*\
  !*** ./src/app/admin/models/cates.ts ***!
  \***************************************/
/*! exports provided: Cates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cates", function() { return Cates; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Cates {
}


/***/ }),

/***/ "./src/app/admin/models/order.ts":
/*!***************************************!*\
  !*** ./src/app/admin/models/order.ts ***!
  \***************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Order {
}


/***/ }),

/***/ "./src/app/admin/models/role.ts":
/*!**************************************!*\
  !*** ./src/app/admin/models/role.ts ***!
  \**************************************/
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

/***/ "./src/app/admin/models/user.ts":
/*!**************************************!*\
  !*** ./src/app/admin/models/user.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/app/admin/services/books.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/services/books.service.ts ***!
  \*************************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/admin/constants/app-constants.ts");




let BooksService = class BooksService {
    constructor(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
    }
    getBooksList() {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath + "/books/all";
        return this.http.get(url, { headers: this.headers });
    }
    deleteBook(id) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath + "/books/delete";
        return this.http.post(url, JSON.stringify(id), { headers: this.headers });
    }
    sendBook(book, cateId) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath + "/books/add/" + cateId;
        // let bookContent = {
        //   book: book,
        //   cateId: cateId
        // };
        return this.http.post(url, book, { headers: this.headers });
    }
};
BooksService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
BooksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], BooksService);



/***/ }),

/***/ "./src/app/admin/services/cates.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/services/cates.service.ts ***!
  \*************************************************/
/*! exports provided: CatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatesService", function() { return CatesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/admin/constants/app-constants.ts");




let CatesService = class CatesService {
    constructor(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
    }
    getCatesList() {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath + "/cates/all";
        return this.http.get(url, { headers: this.headers });
    }
    deleteCates(id) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath + "/cates/delete/" + id;
        return this.http.delete(url, { headers: this.headers });
    }
    sendCates(cates) {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].AdminPath + "/cates/add";
        return this.http.post(url, JSON.stringify(cates), {
            headers: this.headers
        });
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

/***/ "./src/app/admin/services/login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/services/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/admin/constants/app-constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
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
    register(user) {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json"
        });
        return this.http.post(_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/registration", JSON.stringify(user), { headers: headers });
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

/***/ "./src/app/admin/services/order.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/services/order.service.ts ***!
  \*************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/admin/constants/app-constants.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");




let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    getOrderList() {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConst"].UserPath + "/order/all";
        this.tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
        return this.http.get(url, { headers: this.tokenHeader });
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
];
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], OrderService);



/***/ }),

/***/ "./src/app/admin/services/upload-book-image.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/services/upload-book-image.service.ts ***!
  \*************************************************************/
/*! exports provided: UploadBookImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadBookImageService", function() { return UploadBookImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/admin/constants/app-constants.ts");



let UploadBookImageService = class UploadBookImageService {
    constructor() {
        this.filesToUpload = [];
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    upload(bookId) {
        this.makeFileRequest(_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConst"].AdminPath + "/books/add/image?id=" + bookId, [], this.filesToUpload).then(result => {
        }, error => {
        });
    }
    modify(catesId) {
        if (this.filesToUpload.length > 0) {
            this.makeFileRequest(_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConst"].AdminPath + "/books/update/image?id=" + catesId, [], this.filesToUpload).then(result => {
            }, error => {
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
            // xhr.setRequestHeader("Authorization", "Bearer " + this.currentUser.token);
            xhr.send(formData);
        });
    }
};
UploadBookImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], UploadBookImageService);



/***/ }),

/***/ "./src/app/admin/services/users.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/services/users.service.ts ***!
  \*************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/app-constants */ "./src/app/admin/constants/app-constants.ts");




let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.tokenHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + this.currentUser.token
        });
    }
    getUsersList() {
        let url = _constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/all";
        return this.http.get(url, { headers: this.tokenHeaders });
    }
    sendUser(user) {
        return this.http.post(_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConst"].UserPath + "/add", user, {
            headers: this.tokenHeaders
        });
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], UsersService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _admin_components_adminindex_adminindex_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/components/adminindex/adminindex.component */ "./src/app/admin/components/adminindex/adminindex.component.ts");
/* harmony import */ var _admin_components_books_books_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/components/books/books.component */ "./src/app/admin/components/books/books.component.ts");
/* harmony import */ var _admin_components_cates_cates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/components/cates/cates.component */ "./src/app/admin/components/cates/cates.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _admin_models_role__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/models/role */ "./src/app/admin/models/role.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./src/app/unauthorized/unauthorized.component.ts");
/* harmony import */ var _admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/components/users/users.component */ "./src/app/admin/components/users/users.component.ts");
/* harmony import */ var _admin_components_order_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/components/order/order.component */ "./src/app/admin/components/order/order.component.ts");














const routes = [
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    { path: "404", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"] },
    { path: "401", component: _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_11__["UnauthorizedComponent"] },
    {
        path: "admin",
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        data: { roles: [_admin_models_role__WEBPACK_IMPORTED_MODULE_9__["Role"].ADMIN] },
        children: [
            {
                path: "",
                redirectTo: "index",
                pathMatch: "full"
            },
            {
                path: "index",
                component: _admin_components_adminindex_adminindex_component__WEBPACK_IMPORTED_MODULE_5__["AdminindexComponent"]
            },
            {
                path: "cates",
                component: _admin_components_cates_cates_component__WEBPACK_IMPORTED_MODULE_7__["CatesComponent"]
            },
            {
                path: "books",
                component: _admin_components_books_books_component__WEBPACK_IMPORTED_MODULE_6__["BooksComponent"]
            },
            {
                path: "users",
                component: _admin_components_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"]
            },
            {
                path: "orders",
                component: _admin_components_order_order_component__WEBPACK_IMPORTED_MODULE_13__["OrderComponent"]
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
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
        this.title = 'Online Library';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _admin_services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/services/login.service */ "./src/app/admin/services/login.service.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./src/app/unauthorized/unauthorized.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _login_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
            _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_12__["UnauthorizedComponent"]
        ],
        imports: [
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_4__["AdminModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [_admin_services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin/services/login.service */ "./src/app/admin/services/login.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
    canActivate(route, state) {
        if (this.currentUser) {
            if (route.data.roles &&
                route.data.roles.indexOf(this.currentUser.role) === -1) {
                this.router.navigate(["/401"]);
                return false;
            }
            return true;
        }
        this.router.navigate(["/login"]);
        return false;
    }
    canActivateChild(next, state) {
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _admin_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/login/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/login/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loginbox {\r\n  width: 320px;\r\n  height: 420px;\r\n  background: #000;\r\n  color: #fff;\r\n  top: 50%;\r\n  left: 50%;\r\n  position: absolute;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  box-sizing: border-box;\r\n  padding: 70px 30px;\r\n}\r\n\r\n.avatar {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: -50px;\r\n  left: calc(50% - 50px);\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  padding: 0 0 20px;\r\n  text-align: center;\r\n  font-size: 22px;\r\n}\r\n\r\n.loginbox p {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: bold;\r\n}\r\n\r\n.loginbox input {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.loginbox input[type=\"text\"],\r\ninput[type=\"password\"] {\r\n  border: none;\r\n  border-bottom: 1px solid #fff;\r\n  background: transparent;\r\n  outline: none;\r\n  height: 40px;\r\n  color: #fff;\r\n  font-size: 16px;\r\n}\r\n\r\n.loginbox input[type=\"submit\"] {\r\n  border: none;\r\n  outline: none;\r\n  height: 40px;\r\n  background: #fb2525;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.loginbox input[type=\"submit\"]:hover {\r\n  cursor: pointer;\r\n  background: #ffc107;\r\n  color: #000;\r\n}\r\n\r\n.loginbox a {\r\n  text-decoration: none;\r\n  font-size: 12px;\r\n  line-height: 20px;\r\n  color: darkgrey;\r\n}\r\n\r\n.loginbox a:hover {\r\n  color: #ffc107;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luYm94IHtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgaGVpZ2h0OiA0MjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiA3MHB4IDMwcHg7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNTBweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMCAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5sb2dpbmJveCBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxvZ2luYm94IGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubG9naW5ib3ggaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubG9naW5ib3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmYjI1MjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmxvZ2luYm94IGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5sb2dpbmJveCBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiBkYXJrZ3JleTtcclxufVxyXG5cclxuLmxvZ2luYm94IGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZjMTA3O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_admin_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/services/login.service */ "./src/app/admin/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_admin_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/models/user */ "./src/app/admin/models/user.ts");





let LoginComponent = class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.user = new src_app_admin_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    ngOnInit() { }
    onLogin() {
        this.loginService.login(this.user).subscribe(res => {
            localStorage.setItem('currentUser', JSON.stringify(res.json()));
            this.router.navigate(["/admin/index"]);
        }, err => {
            this.errorMessage = "Username or password is incorrect";
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_admin_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/unauthorized/unauthorized.component.css":
/*!*********************************************************!*\
  !*** ./src/app/unauthorized/unauthorized.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuYXV0aG9yaXplZC91bmF1dGhvcml6ZWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/unauthorized/unauthorized.component.ts":
/*!********************************************************!*\
  !*** ./src/app/unauthorized/unauthorized.component.ts ***!
  \********************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unauthorized.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/unauthorized/unauthorized.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unauthorized.component.css */ "./src/app/unauthorized/unauthorized.component.css")).default]
    })
], UnauthorizedComponent);



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

module.exports = __webpack_require__(/*! D:\Demo\bookstore-demo-admin-deploy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map