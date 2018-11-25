webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\n    <div class=\"container\">\n        <header>\n            <h3><span class=\"glyphicon glyphicon-info-sign\"></span> About</h3>\n        </header>\n        <br />\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"span2\">Created by:</div>\n                <div class=\"span9\"><a href=\"http://twitter.com/DanWahlin\" target=\"_blank\">Dan Wahlin</a></div>\n            </div>\n            <br />\n            <div class=\"row\">\n                <div class=\"span2\">Blog:</div>\n                <div class=\"span9\"><a href=\"http://weblogs.asp.net/dwahlin\" target=\"_blank\">weblogs.asp.net/dwahlin</a></div>\n            </div>\n            <br />\n            <div class=\"row\">\n                <div class=\"span2\">GitHub:</div>\n                <div class=\"span9\"><a href=\"https://github.com/DanWahlin/CustomerManagerStandard\" target=\"_blank\">https://github.com/DanWahlin/CustomerManagerStandard</a></div>\n            </div>\n            <br />\n            <div class=\"row\">\n                <div class=\"span2\">Training:</div>\n                <div class=\"span9\"><a href=\"mailto:training@wahlinconsulting.com\" target=\"_blank\">Interested in hands-on AngularJS Training? Contact us for details.</a></div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customers_customers_component__ = __webpack_require__("./src/app/customers/customers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'customers', component: __WEBPACK_IMPORTED_MODULE_4__customers_customers_component__["a" /* CustomersComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar  navbarHeaderStyle\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n     <img src=\"assets\\images\\people.png\" height=\"42\" width=\"42\">\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a class =\"menuStyle\" style=\"font-size:18px\" href=\"#\">CustomerManagement</a></li>\n      <li><a class =\"menuStyle\" href=\"/customers\">customers</a> </li>\n      <li><a class =\"menuStyle\" href=\"#\">Orders</a></li>\n      <li><a class =\"menuStyle\" routerLink=\"/about\">About</a></li>\n       <li><a class =\"menuStyle\" routerLink=\"/login\">Login</a></li>\n    </ul>\n  </div>\n</nav>\n <div>\n<router-outlet></router-outlet>\n</div> \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customers_customers_component__ = __webpack_require__("./src/app/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customer_data_service__ = __webpack_require__("./src/app/customer-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__customers_customers_component__["a" /* CustomersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome__["a" /* AngularFontAwesomeModule */], __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__customer_data_service__["a" /* CustomerDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerDataService = /** @class */ (function () {
    function CustomerDataService() {
        this.customers = [];
        this.lastId = 0;
    }
    CustomerDataService.prototype.addCustomer = function (customer) {
        if (!customer.customerId) {
            customer.customerId = ++this.lastId;
        }
        this.customers.push(customer);
        return this;
    };
    // Simulate DELETE /todos/:id
    CustomerDataService.prototype.deleteCustomerById = function (id) {
        this.customers = this.customers
            .filter(function (customer) { return customer.customerId !== id; });
        return this;
    };
    // Simulate PUT /todos/:id
    CustomerDataService.prototype.updateCustomerById = function (id, values) {
        if (values === void 0) { values = {}; }
        var customer = this.getCustomerById(id);
        if (!customer) {
            return null;
        }
        Object.assign(customer, values);
        return customer;
    };
    // Simulate GET /todos
    CustomerDataService.prototype.getAllCustomers = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.customers);
    };
    // Simulate GET /todos/:id
    CustomerDataService.prototype.getCustomerById = function (id) {
        return this.customers
            .filter(function (customer) { return customer.customerId === id; })
            .pop();
    };
    // Toggle todo complete
    CustomerDataService.prototype.toggleCustomerComplete = function (customer) {
        var updatedTodo = this.updateCustomerById(customer.customerId, {
            complete: !customer.complete
        });
        return updatedTodo;
    };
    CustomerDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CustomerDataService);
    return CustomerDataService;
}());



/***/ }),

/***/ "./src/app/customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(values) {
        if (values === void 0) { values = {}; }
        this.complete = false;
        Object.assign(this, values);
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/customers/customers.component.css":
/***/ (function(module, exports) {

module.exports = ".cardImage{\n\theight: 50px;\n\n}\n.cardHeader{\n\tbackground-color: blue;\n\t\n}\n.cardBody{\n\n    display: inline;\n}\n.clearfix{\n\t display: inline;\n}\n.card{\n\t display: inline;\n}\n\n"

/***/ }),

/***/ "./src/app/customers/customers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"customersView\" >\n\n<div class=\"container\">\n        <header>\n            <h3><span class=\"glyphicon glyphicon-user\"></span> Customers</h3>\n        </header>\n        <div class=\"row\">\n            <div class=\"col-md-10\">\n                <div class=\"navbar\">\n                    <ul class=\"nav navbar-nav\">\n                        <li data-ng-class=\"{active: !show\" class=\"toolbaritem\">\n                            <a (click)=\"changeDisplayMode()\">\n                                <span class=\"glyphicon glyphicon-th-large\"></span> Card View\n                                <p>{{show}}</p>\n                            </a>\n                        </li>\n                        <li data-ng-class=\"{active:show}\" class=\"toolbaritem\">\n                            <a (click)=\"changeDisplayMode()\">\n                                <span class=\"glyphicon glyphicon-align-justify\"></span> List View\n                            </a>\n                        </li>\n                        <li class=\"toolbaritem\">\n                            <a (click)=\"changeFormDisplayMode()\" >\n                                <span class=\"glyphicon glyphicon-plus\"></span> Add Customer\n                            </a>\n                        </li>\n                    </ul>\n                    <form class=\"navbar-form navbar-right\">\n                        <div class=\"form-group\">\n                            <label class=\"navbarText col-sm-2\">Filter:</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"text\"\n                                       data-ng-model=\"vm.searchText\"\n                                       data-ng-change=\"vm.searchTextChanged()\"\n                                       class=\"novalidate form-control\" />\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    \n</div>\n\n<section *ngIf=\"!showForm\">\n\n Customer Form\n\n FirstName : <input class=\"newCustomer\"   [(ngModel)]=\"newCustomer.firstName\" ><br>\n\n LastName : <input class=\"newCustomer\"   [(ngModel)]=\"newCustomer.lastName\" ><br>\n\n  Gender : <input class=\"newCustomer\"   [(ngModel)]=\"newCustomer.gender\" ><br>\n\n city : <input class=\"newCustomer\"   [(ngModel)]=\"newCustomer.city\" ><br>\n\n state : <input class=\"newCustomer\"   [(ngModel)]=\"newCustomer.state\" ><br>\n\n Zip : <input class=\"newCustomer\"   [(ngModel)]=\"newCustomer.zip\" ><br>\n\n orderCount : <input class=\"newCustomer\"   [(ngModel)]=\"newCustomer.orderCount\" ><br>\n\n<button  (click)=\"addCustomer()\" > submit </button>\n\n</section>\n\n <section *ngIf=\"show\">\n<p>Card view </p>\n <ul class=\"cusotmer-list\">\n<table>\n<li *ngFor=\"let customer of customers\" class=\"card\">\n<tr><td colspan=\"2\">\n    <div class=\"cardHeader\"><a href=\"#/customeredit/{{customer.id}}\" class=\"white\">{{customer.firstName + ' ' + customer.lastName}} <i class=\"icon-edit icon-white editIcon\"></i></a></div>\n\n    </td><td></td>\n   </tr>        \n<tr>\n\n\n            \n                    <td>\n                                <div class=\"card\">\n                                    <a href=\"#/customeredit/{{customer.id}}\" class=\"white\"><img src=\"assets\\images\\{{customer.gender | lowercase}}.png\" class=\"cardImage\" /></a>\n                                </div>\n                    </td>\n\n                    <td>\n                                <div class=\"card\">\n                                    <div class=\"cardBodyContent\">{{customer.city}}, {{customer.state}}</div>\n                                    <div>\n                                        <a href=\"#/customerorders/{{customer.id}}\" class=\"btn-link\">\n                                            {{ customer.orderCount }} \n                                            <span data-ng-pluralize count=\"customer.orderCount\"\n                                                  when=\"{'1': 'Order','other': 'Orders'}\">\n                                            </span>\n                                        </a>\n                                    </div>\n                                </div>\n                    </td> \n \n\n  </tr>\n</li>\n</table>\n</ul>\n</section> \n\n<section *ngIf=\"!show\">\n\n<p> Listview view </p>\n\n\n\n\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_data_service__ = __webpack_require__("./src/app/customer-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer__ = __webpack_require__("./src/app/customer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(customerDataService) {
        this.customerDataService = customerDataService;
        this.show = false;
        this.showForm = false;
        this.colorName = "Show";
        this.newCustomer = new __WEBPACK_IMPORTED_MODULE_2__customer__["a" /* Customer */]();
        var customer = new __WEBPACK_IMPORTED_MODULE_2__customer__["a" /* Customer */]();
        customer.customerId = 1;
        customer.firstName = "sandeep";
        customer.lastName = "singh";
        customer.city = "varanasi";
        customer.email = "sandeep12747@gmail.com";
        customer.complete = false;
        customer.gender = "male";
        customer.state = "up";
        customer.orderCount = 7;
        customer.zip = 221002;
        customerDataService.addCustomer(customer);
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    CustomersComponent.prototype.changeFormDisplayMode = function () {
        this.showForm = !this.showForm;
    };
    CustomersComponent.prototype.changeDisplayMode = function () {
        console.log("changeDisplayMode");
        this.show = !this.show;
    };
    CustomersComponent.prototype.addCustomer = function () {
        this.customerDataService.addCustomer(this.newCustomer);
        this.newCustomer = new __WEBPACK_IMPORTED_MODULE_2__customer__["a" /* Customer */]();
    };
    CustomersComponent.prototype.toggleTodoComplete = function (customer) {
        this.customerDataService.toggleCustomerComplete(customer);
    };
    CustomersComponent.prototype.removeTodo = function (customer) {
        this.customerDataService.deleteCustomerById(customer);
    };
    CustomersComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerDataService.getAllCustomers().subscribe(function (customers) { return _this.customers = customers; });
    };
    CustomersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customers',
            template: __webpack_require__("./src/app/customers/customers.component.html"),
            styles: [__webpack_require__("./src/app/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__customer_data_service__["a" /* CustomerDataService */]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\n    <div class=\"container\">\n        <header>\n            <h3><span class=\"glyphicon glyphicon-lock\"></span> Login</h3>\n        </header>\n        <form name=\"loginForm\" novalidate>\n            <div class=\"login\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        Email:\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"email\" name=\"email\" class=\"inputTypeStyle\"  />\n                        <span class=\"errorMessage\" ng-show=\"loginForm.email.$touched && loginForm.email.$invalid\" >\n                            Email is required\n                        </span>\n                    </div>\n                </div>\n                <br />\n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        Password:\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"password\" name=\"password\" class=\"\" />\n                        <span class=\"errorMessage\" >\n                            Password is required\n                        </span>\n                    </div>\n                </div>\n                <br />\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <button type=\"submit\" class=\"btn btn-primary\" >\n                            Login\n                        </button>\n                    </div>\n                </div>\n                <br />\n                <!-- <div class=\"statusRow\">\n                    <br />\n                    <div class=\"label label-important\" data-ng-show=\"vm.errorMessage\">\n                        <span class=\"glyphicon glyphicon-thumbs-down icon-white\"></span>&nbsp;&nbsp;Error: {{ vm.errorMessage }}\n                    </div>\n                </div> -->\n            </div>\n        </form>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map