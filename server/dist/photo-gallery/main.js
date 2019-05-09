(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-detail/image-detail.component */ "./src/app/image-detail/image-detail.component.ts");





var routes = [{
        path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"]
    },
    {
        path: 'image/:id', component: _image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_4__["ImageDetailComponent"]
    },
    {
        path: '', redirectTo: '/gallery', pathMatch: 'full'
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar></app-navbar>\n  <!-- <app-gallery></app-gallery> -->\n  <router-outlet></router-outlet>\n\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'photo-gallery';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image-detail/image-detail.component */ "./src/app/image-detail/image-detail.component.ts");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/image.service */ "./src/app/shared/image.service.ts");
/* harmony import */ var _imagefilter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imagefilter.pipe */ "./src/app/imagefilter.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"],
                _image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_7__["ImageDetailComponent"],
                _imagefilter_pipe__WEBPACK_IMPORTED_MODULE_9__["ImagefilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [_shared_image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"], _imagefilter_pipe__WEBPACK_IMPORTED_MODULE_9__["ImagefilterPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul { padding:0; width:1200px; margin:20px auto}\r\nli { display:inline-block;}\r\n#tn{\r\n margin:6px 6px;\r\n border: 4px solid #eee;\r\n box-shadow:#555 1px 1px 8px 1px;\r\n cursor: pointer\r\n    }\r\n.modal-content {\r\n  width: 1200px !important;\r\n}\r\n.btn{\r\n  /* margin-left: 20px;\r\n  padding: 10px; */\r\n}\r\nh1, h2{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyxTQUFTLEVBQUUsWUFBWSxFQUFFLGdCQUFnQjtBQUM5QyxLQUFLLG9CQUFvQixDQUFDO0FBQ3RCO0NBQ0gsY0FBYztDQUNkLHNCQUFzQjtDQUN0QiwrQkFBK0I7Q0FDL0I7SUFDRztBQUNKO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRTtrQkFDZ0I7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwgeyBwYWRkaW5nOjA7IHdpZHRoOjEyMDBweDsgbWFyZ2luOjIwcHggYXV0b31cclxubGkgeyBkaXNwbGF5OmlubGluZS1ibG9jazt9XHJcbiAgICAjdG57XHJcbiBtYXJnaW46NnB4IDZweDtcclxuIGJvcmRlcjogNHB4IHNvbGlkICNlZWU7XHJcbiBib3gtc2hhZG93OiM1NTUgMXB4IDFweCA4cHggMXB4O1xyXG4gY3Vyc29yOiBwb2ludGVyXHJcbiAgICB9XHJcbi5tb2RhbC1jb250ZW50IHtcclxuICB3aWR0aDogMTIwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bntcclxuICAvKiBtYXJnaW4tbGVmdDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4OyAqL1xyXG59XHJcbmgxLCBoMntcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"filterPhoto('all')\">normal</button>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\" filterPhoto('boats') \">boats</button>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\" filterPhoto('camping') \">camping</button>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\" filterPhoto('library') \">library</button>\n\n  <!-- <ul id=\"thumbnailsList\"> -->\n\n    <!-- <li *ngFor=\"let image of (imageArray | imagefilter : filterBy)\" >\n       <a [routerLink]=\"['/image',image.id]\" routerLinkActive=\"router-link-active\" >\n      <img src=\"{{image.url}}\" class=\"tn\" width=\"200\" height=\"160\">\n    </a>\n    </li> -->\n    <!-- {{apiArray[0].hits[0].webformatURL  }} -->\n    <!-- <div *ngFor=\"let image of (apiArray | imagefilter : filterBy)\" > -->\n\n      <!-- {{image[0] | json}} -->\n      <!-- todo make function in ts -->\n      <!-- <a [routerLink]=\"['0/image',image.id]\" routerLinkActive=\"router-link-active\" > -->\n        <!-- <li *ngFor=\"let item of image.hits\"> -->\n          <!-- {{item | json}} -->\n        <!-- <img src=\"{{ item.webformatURL}}\" class=\"tn\" width=\"200\" height=\"160\"> -->\n      <!-- </li> -->\n    <!-- </div> -->\n<!-- </ul> -->\n<ul class=\"col\" id=\"thumbnailsList\">\n\n      <li *ngFor=\"let image of (apiArray)\">\n        <img src=\"{{ image.webformatURL}}\" id=\"tn\" width=\"200\" height=\"160\">\n      </li>\n\n</ul>\n\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/image.service */ "./src/app/shared/image.service.ts");



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(imgService) {
        this.imgService = imgService;
        this.apiArray = [];
        this.filterBy = "all";
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.imageArray =  this.imgService.getImage();
        // console.log(this.imageArray);
        this.imgService.getfromApi().subscribe(function (res) {
            _this.apiArray = res['hits'];
        });
    };
    GalleryComponent.prototype.filterPhoto = function (arg) {
        // console.log(arg==='all'?true:false);
        var _this = this;
        if (arg === 'all') {
            this.imgService.getfromApi().subscribe(function (res) {
                _this.apiArray = res['hits'];
            });
            return this.apiArray;
        }
        else {
            this.imgService.getImagebyfilter(arg).subscribe(function (res) {
                _this.apiArray = res['hits'];
            });
        }
        //   this.imgService.getfromApi().subscribe((res)=>{
        //     this.apiArray.push(res);
        //   console.log(res);
        // });
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/image-detail/image-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/image-detail/image-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-container{\r\n  margin:24px;\r\n  box-shadow:#555 1px 2px 8px 1px;\r\n  min-height: 660px;\r\n  min-width: 900px;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  align-content: center;\r\n}\r\n\r\n#caption{\r\nfont-size: 1.5em;\r\nfont-family: \"Montserrat\", sans-serif;\r\npadding: 18px;\r\ncolor: #222;\r\nbackground-color: #f5f5f5;\r\nborder: 1px solid #bbb;\r\nwidth: 900px;\r\n}\r\n\r\n.caption-row{\r\npadding: 24px;\r\ntext-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UtZGV0YWlsL2ltYWdlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLHFDQUFxQztBQUNyQyxhQUFhO0FBQ2IsV0FBVztBQUNYLHlCQUF5QjtBQUN6QixzQkFBc0I7QUFDdEIsWUFBWTtBQUNaOztBQUVBO0FBQ0EsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLWRldGFpbC9pbWFnZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY29udGFpbmVye1xyXG4gIG1hcmdpbjoyNHB4O1xyXG4gIGJveC1zaGFkb3c6IzU1NSAxcHggMnB4IDhweCAxcHg7XHJcbiAgbWluLWhlaWdodDogNjYwcHg7XHJcbiAgbWluLXdpZHRoOiA5MDBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjYXB0aW9ue1xyXG5mb250LXNpemU6IDEuNWVtO1xyXG5mb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbnBhZGRpbmc6IDE4cHg7XHJcbmNvbG9yOiAjMjIyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xyXG53aWR0aDogOTAwcHg7XHJcbn1cclxuXHJcbi5jYXB0aW9uLXJvd3tcclxucGFkZGluZzogMjRweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/image-detail/image-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/image-detail/image-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=col-md-12>\n    <div [ngStyle]=\"{'background-image':'url('+ image.url +')'}\" class=\"img-container paper\">\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12 caption-row\">\n      <span id=\"caption\">\n        {{image.caption}}\n      </span>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/image-detail/image-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-detail/image-detail.component.ts ***!
  \********************************************************/
/*! exports provided: ImageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDetailComponent", function() { return ImageDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/image.service */ "./src/app/shared/image.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ImageDetailComponent = /** @class */ (function () {
    function ImageDetailComponent(imgService, route) {
        this.imgService = imgService;
        this.route = route;
    }
    ImageDetailComponent.prototype.ngOnInit = function () {
        this.image = this.imgService.getImagebyID(+this.route.snapshot.params['id']);
    };
    ImageDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-detail',
            template: __webpack_require__(/*! ./image-detail.component.html */ "./src/app/image-detail/image-detail.component.html"),
            styles: [__webpack_require__(/*! ./image-detail.component.css */ "./src/app/image-detail/image-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ImageDetailComponent);
    return ImageDetailComponent;
}());



/***/ }),

/***/ "./src/app/imagefilter.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/imagefilter.pipe.ts ***!
  \*************************************/
/*! exports provided: ImagefilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagefilterPipe", function() { return ImagefilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/image.service */ "./src/app/shared/image.service.ts");



var ImagefilterPipe = /** @class */ (function () {
    function ImagefilterPipe(Service) {
        this.Service = Service;
        this.finalres = [];
    }
    ImagefilterPipe.prototype.transform = function (value, args) {
        var _this = this;
        if (args === 'all') {
            console.log(args);
            this.Service.getfromApi().subscribe(function (res) {
                // console.log(res);
                return _this.finalres = res;
            });
            console.log('your res', this.finalres);
        }
        else {
            console.log(args);
            this.Service.getImagebyfilter(args).subscribe(function (res) {
                // console.log(res)
                return _this.finalres = res;
            });
            console.log('your res', this.finalres);
            //   return value.filter((item)=>{
            //  return item.category == args;
            // })
        }
        // return this.finalres;
    };
    ImagefilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'imagefilter'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
    ], ImagefilterPipe);
    return ImagefilterPipe;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Image Gallery</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/image.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/image.service.ts ***!
  \*****************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
        this.selectedImage = [];
    }
    ImageService.prototype.getImage = function () {
        return this.selectedImage = IMAGES.slice(0);
    };
    ImageService.prototype.getImagebyID = function (id) {
        return IMAGES.slice(0).find(function (arg) { return arg.id == id; });
    };
    ImageService.prototype.getfromApi = function () {
        return this.http.get("https://pixabay.com/api/?key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_KEY + "&image_type=photo&pretty=true");
    };
    ImageService.prototype.getImagebyfilter = function (query) {
        return this.http.get("https://pixabay.com/api/?key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_KEY + "&q=" + query + "&image_type=photo&pretty=true");
    };
    ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ImageService);
    return ImageService;
}());

var IMAGES = [
    { "id": 1, "category": "boats", "caption": "View from the boat", "url": "assets/img/boat_01.jpeg" },
    { "id": 3, "category": "boats", "caption": "The water was nice", "url": "assets/img/boat_03.jpeg" },
    { "id": 6, "category": "camping", "caption": "Camping Trip '17'", "url": "assets/img/camping_01.jpeg" },
    { "id": 7, "category": "camping", "caption": "Kim and Jessie", "url": "assets/img/camping_02.jpeg" },
    { "id": 13, "category": "library", "caption": "Big library", "url": "assets/img/library_01.jpeg" },
    { "id": 14, "category": "library", "caption": "Stacks", "url": "assets/img/library_02.jpeg" },
];


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_KEY: '12387168-13fb4c103079c3a3c51c1ac5b'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\photo-gallery\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map