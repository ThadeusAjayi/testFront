webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" class=\"effect mainnav-full\">\r\n  <app-nav></app-nav>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_users_users_component__["a" /* UsersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");


var appRoutes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_1__components_users_users_component__["a" /* UsersComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"navbar\">\r\n  <div id=\"navbar-container\" class=\"boxed\">\r\n      <!--Brand logo & name-->\r\n      <!--================================-->\r\n      <div class=\"navbar-header\">\r\n          <a class=\"navbar-brand\">\r\n              <div class=\"brand-title\">\r\n                  <span class=\"brand-text\">Resources</span>\r\n              </div>\r\n          </a>\r\n      </div>\r\n      <!--================================-->\r\n      <!--End brand logo & name-->\r\n\r\n     \r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"margin-top\">\r\n    <div class=\"eq-height\">\r\n            <div *ngIf = \"addstud\" class=\"col-md-4 eq-box-sm\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <h3 class=\"panel-title\">Add Student</h3>\r\n                    </div>\r\n                    <form (submit)=\"addStudent(name.value, age.value, sex.value, department.value, faculty.value, level.value)\" class=\"form-horizontal\" >\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"form-group\">\r\n                                <!-- <label for=\"\" class=\"col-sm-3 control-label\">Title</label> -->\r\n                                <div class=\"col-sm-12\">\r\n                                    <input type=\"text\" placeholder=\"Student Name\" class=\"form-control\" #name>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <!-- <label for=\"\" class=\"col-sm-3 control-label\">Time</label> -->\r\n                              <div class=\"col-sm-6\">\r\n                                  <div class=\"input-group date\">\r\n                                      <input id=\"\" placeholder=\"Age\" type=\"number\" class=\"form-control\" #age>\r\n                                  </div>\r\n                                  <!-- <small class=\"text-muted\">Refresh page if not loading</small>  -->\r\n                              </div>\r\n                              <div class=\"col-sm-6\">\r\n                                  <div class=\"input-group date\">\r\n                                      <input id=\"\" placeholder=\"Sex\" type=\"text\" class=\"form-control\" #sex>\r\n                                  </div>\r\n                                  <!-- <small class=\"text-muted\">Refresh page if not loading</small>  -->\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <!-- <label for=\"\" class=\"col-sm-3 control-label\">Date</label> -->\r\n                                <div class=\"col-sm-12\">\r\n                                    <div id=\"\">\r\n                                        <div class=\"input-group date\">\r\n                                            <input id=\"\" placeholder=\"Department\" type=\"text\" class=\"form-control\" #department>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- <small class=\"text-muted\">Refresh page if not loading</small>  -->\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                <!-- <label for=\"\" class=\"col-sm-3 control-label\">Description</label> -->\r\n                                <div class=\"col-sm-12\">\r\n                                    <input id=\"\" placeholder=\"Faculty\" type=\"text\" class=\"form-control\" #faculty>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                  <!-- <label for=\"\" class=\"col-sm-3 control-label\">Description</label> -->\r\n                                  <div class=\"col-sm-12\">\r\n                                      <input id=\"\" placeholder=\"Level\" type=\"text\" class=\"form-control\" #level>\r\n                                  </div>\r\n                                </div>\r\n                              <div class=\"form-group\">\r\n                               <!-- <label for=\"\" class=\"col-sm-3 control-label\"></label> -->\r\n                                <div class=\"col-sm-12\">\r\n                                    <input type=\"submit\"  class=\"btn btn-primary\"  value=\"Add Student\"/>\r\n                                </div>\r\n                              </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div *ngIf = \"!addstud\" class=\"col-md-4 eq-box-sm\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-heading\">\r\n                        <h3 class=\"panel-title\">Update {{upstud.name}}</h3>\r\n                    </div>\r\n                    <form (submit)=\"updateStudent(upstud._id, name.value, age.value, sex.value, department.value, faculty.value, level.value)\" class=\"form-horizontal\" >\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"form-group\">\r\n                                <!-- <label for=\"\" class=\"col-sm-3 control-label\">Title</label> -->\r\n                                <div class=\"col-sm-12\">\r\n                                    <input type=\"text\" [(ngModel)]=\"upstud.name\" name=\"name\" placeholder=\"Student Name\" class=\"form-control\" #name>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <!-- <label for=\"\" class=\"col-sm-3 control-label\">Time</label> -->\r\n                              <div class=\"col-sm-6\">\r\n                                  <div class=\"input-group date\">\r\n                                      <input id=\"\" [(ngModel)]=\"upstud.age\" name=\"age\" placeholder=\"Age\" type=\"number\" class=\"form-control\" #age>\r\n                                  </div>\r\n                                  <!-- <small class=\"text-muted\">Refresh page if not loading</small>  -->\r\n                              </div>\r\n                              <div class=\"col-sm-6\">\r\n                                  <div class=\"input-group date\">\r\n                                      <input id=\"\" [(ngModel)]=\"upstud.sex\" name=\"sex\" placeholder=\"Sex\" type=\"text\" class=\"form-control\" #sex>\r\n                                  </div>\r\n                                  <!-- <small class=\"text-muted\">Refresh page if not loading</small>  -->\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <!-- <label for=\"\" class=\"col-sm-3 control-label\">Date</label> -->\r\n                                <div class=\"col-sm-12\">\r\n                                    <div id=\"\">\r\n                                        <div class=\"input-group date\">\r\n                                            <input id=\"\" [(ngModel)]=\"upstud.department\" name=\"department\" placeholder=\"Department\" type=\"text\" class=\"form-control\" #department>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- <small class=\"text-muted\">Refresh page if not loading</small>  -->\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                <!-- <label for=\"\" class=\"col-sm-3 control-label\">Description</label> -->\r\n                                <div class=\"col-sm-12\">\r\n                                    <input id=\"\" [(ngModel)]=\"upstud.faculty\" name=\"faculty\" placeholder=\"Faculty\" type=\"text\" class=\"form-control\" #faculty>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                  <!-- <label for=\"\" class=\"col-sm-3 control-label\">Description</label> -->\r\n                                  <div class=\"col-sm-12\">\r\n                                      <input id=\"\" [(ngModel)]=\"upstud.level\" name=\"level\" placeholder=\"Level\" type=\"text\" class=\"form-control\" #level>\r\n                                  </div>\r\n                                </div>\r\n                              <div class=\"form-group\">\r\n                               <!-- <label for=\"\" class=\"col-sm-3 control-label\"></label> -->\r\n                                <div class=\"col-sm-12\">\r\n                                    <input type=\"submit\"  class=\"btn btn-primary\"  value=\"Update Student\"/>\r\n                                </div>\r\n                              </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-8 eq-box-sm\">\r\n                  <div class=\"panel\">\r\n                      <div class=\"panel-heading\">\r\n                          <h3 class=\"panel-title\">List Of Students</h3>\r\n                      </div>\r\n                      <div class=\"panel-body\">\r\n                          <table class=\"table table-hover table-vcenter\">\r\n                              <thead>\r\n                                  <tr>    \r\n                                    <th>Name</th>\r\n                                    <th>Age</th>\r\n                                    <th>Sex</th>\r\n                                    <th>Department</th>\r\n                                    <th>Faculty</th>\r\n                                    <th>Level</th>\r\n                                    <th>Edit</th>\r\n                                    <th>Delete</th>\r\n                                  </tr>\r\n                              </thead>\r\n                              <tbody>\r\n                                  <tr *ngFor = \"let stud of student ! async\">\r\n                                      <td>{{stud.name}}</td>\r\n                                      <td>{{stud.age}}</td>\r\n                                      <td>{{stud.sex}}</td>\r\n                                      <td>{{stud.department}}</td>\r\n                                      <td>{{stud.faculty}}</td>\r\n                                      <td>{{stud.level}}</td>\r\n                                      <td>\r\n                                          <div class=\"label label-table label-warning\">\r\n                                            <input  class=\"label label-table label-warning\" type=\"submit\" (click)=\"setUpdate(stud)\" value=\"Update\" style=\"border: none;\"/>\r\n                                          </div>\r\n                                      </td>\r\n                                      <td>\r\n                                          <div class=\"label label-table label-danger\">\r\n                                            <input  class=\"label label-table label-danger\" type=\"submit\" (click)=\"deleteStudent(stud._id, stud.name)\" value=\"Delete\" style=\"border: none;\"/>\r\n                                          </div>\r\n                                      </td>\r\n                                  </tr>\r\n                             \r\n                              </tbody>\r\n                          </table>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n       \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(http) {
        this.http = http;
        this.student = [];
        this.addstud = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.student = this.http.get('http://stdresources.herokuapp.com/resources')
            .subscribe(function (data) {
            _this.student = data;
        });
    };
    UsersComponent.prototype.addStudent = function (name, age, sex, department, faculty, level) {
        var _this = this;
        var newStudent = {
            name: name,
            age: age,
            sex: sex,
            department: department,
            faculty: faculty,
            level: level
        };
        this.http.post('http://stdresources.herokuapp.com/resources', newStudent)
            .subscribe(function (data) {
            alert(name + " has been added to students");
            _this.ngOnInit();
        });
    };
    UsersComponent.prototype.updateStudent = function (key, name, age, sex, department, faculty, level) {
        var _this = this;
        var newStudent = {
            name: name,
            age: age,
            sex: sex,
            department: department,
            faculty: faculty,
            level: level
        };
        this.http.put('http://stdresources.herokuapp.com/resources/' + key, newStudent)
            .subscribe(function (data) {
            alert(name + " details has been updated");
            _this.addstud = true;
            _this.ngOnInit();
        });
    };
    UsersComponent.prototype.deleteStudent = function (key, name) {
        var _this = this;
        this.http.delete('http://stdresources.herokuapp.com/resources/' + key)
            .subscribe(function (data) {
            alert(name + " has been removed from student resources");
            _this.ngOnInit();
        });
    };
    UsersComponent.prototype.setUpdate = function (stud) {
        this.addstud = false;
        this.upstud = stud;
        this.ngOnInit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UsersComponent.prototype, "upstud", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/components/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map