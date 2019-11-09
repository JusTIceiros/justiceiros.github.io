(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Mapa de denúncias\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n              <ion-item>\n                  <ion-label>Tipo de denúncia</ion-label>\n                  <ion-select placeholder=\"Selecione um\">\n                      <ion-select-option value=\"f\">Todos</ion-select-option>\n                    <ion-select-option value=\"f\">Violência contra mulher</ion-select-option>\n                    <ion-select-option value=\"m\">Tráfico de drogas</ion-select-option>\n                    <ion-select-option value=\"m\">Homicídio</ion-select-option>\n                    <ion-select-option value=\"m\">Crimes contra patrimônio</ion-select-option>\n                  </ion-select>\n                </ion-item>\n          </ion-col>\n          <ion-col>\n              <ion-item>\n                  <ion-label>Município</ion-label>\n                  <ion-select placeholder=\"Selecione um\">\n                      <ion-select-option value=\"f\">Todos</ion-select-option>\n                    <ion-select-option value=\"f\">Salvador</ion-select-option>\n                    <ion-select-option value=\"m\">Lauro de Freitas</ion-select-option>\n                    <ion-select-option value=\"m\">Simões Filho</ion-select-option>\n                    <ion-select-option value=\"m\">Feira de Santana</ion-select-option>\n                  </ion-select>\n                </ion-item>\n          </ion-col>\n        \n        </ion-row>\n        <ion-row>\n          <ion-col>\n              <ion-button color=\"primary\"(click)=\"getMap()\">Consulta</ion-button>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n\n    <ion-card>\n      <!-- <img src=\"/assets/logo-mp.svg\" alt=\"\" /> -->\n      <img  [src]=\"mapUrl\" alt=\"\" />\n\n      <!-- <img style=\"width:400px;height:400px;\" [src]=\"sanitize(mapUrl)\" /> -->\n    \n\n    </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGhhY2hhdGhvbk1QQkFcXHByb2pldG9zXFxoYWNrYXRob25NUEJBRnJvbnRlbmQvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let HomePage = class HomePage {
    constructor(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
    }
    getMap() {
        let url = 'https://esb-hom.trt5.jus.br/justiceiros/service/healthcheck';
        this.mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=sao%20marcos,salvador,bahia,brasil&zoom=12&size=700x700&maptype=roadmap&markers=rua%20raul%20leite%20990%20ap%20404,BA&markers=largo%202%20de%20julho,BA&markers=rio%20vermelho,BA&markers=patamares,BA&markers=paralela,BA&key=AIzaSyAwXgvxWrgfpqDSXL0_iTarEY18N09y1RM';
        //this.http.get(url, null).toPromise().then((response) => {
        //  let novoResponse: any = response;
        // let blob1 = new Blob([novoResponse._body], {type: 'image/png'})
        // this.mapUrl = URL.createObjectURL(blob1)
        //    var blob = new Blob([novoResponse._body], {
        //   type: 'image/png'
        // });
        //this.mapUrl = 'data:image/png;base64,'+ novoResponse._body;
        // this.sanitizer.bypassSecurityTrustHtml(this.mapUrl)
        // var reader = new FileReader();
        //     reader.readAsDataURL(blob);
        //     reader.onloadend = () => {
        //       this.mapUrl = reader.result;
        //       console.log(this.mapUrl);
        //     }
        // })
    }
    sanitize(url) {
        //return url;
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map