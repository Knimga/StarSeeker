webpackJsonp([1,4],{

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.url = (window.location.origin == 'http://localhost:4200') ? 'http://localhost:3000' : window.location.origin;
    }
    DataService.prototype.getRaceDesc = function () {
        var raceDescUrl = this.url + '/gamedata/raceDesc';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(raceDescUrl, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.getThemeDesc = function () {
        var themeDescUrl = this.url + '/gamedata/themeDesc';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(themeDescUrl, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], DataService);
    return DataService;
    var _a;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/data.service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        var boolean = true;
        Object.keys(user).forEach(function (prop) { return boolean = (user[prop]) ? boolean : false; });
        return boolean;
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/validate.service.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 397;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(516);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/main.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(698),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/app.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_data_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_char_build_char_build_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_char_build_child_components_char_build_start_char_build_start_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_char_build_child_components_char_build_race_char_build_race_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_char_build_child_components_char_build_theme_char_build_theme_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_char_build_child_components_char_build_class_char_build_class_component__ = __webpack_require__(518);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'charBuild', component: __WEBPACK_IMPORTED_MODULE_16__components_char_build_char_build_component__["a" /* CharBuildComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_char_build_char_build_component__["a" /* CharBuildComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_char_build_child_components_char_build_start_char_build_start_component__["a" /* CharBuildStartComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_char_build_child_components_char_build_race_char_build_race_component__["a" /* CharBuildRaceComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_char_build_child_components_char_build_theme_char_build_theme_component__["a" /* CharBuildThemeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_char_build_child_components_char_build_class_char_build_class_component__["a" /* CharBuildClassComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/app.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharBuildComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharBuildComponent = (function () {
    function CharBuildComponent() {
        this.race = {};
        this.theme = {};
    }
    CharBuildComponent.prototype.ngOnInit = function () {
        this.isLocked = {
            raceThemeClass: true,
            AS: true,
            classChoices: true,
            skills: true,
            feats: true,
            spells: true
        };
        this.isShown = {
            start: true,
            race: false,
            theme: false,
            class: false,
            AS: false,
            classChoices: false,
            skills: false,
            feats: false,
            spells: false
        };
    };
    CharBuildComponent.prototype.showTab = function (tabName) {
        for (var tab in this.isShown) {
            this.isShown[tab] = false;
        }
        this.isShown[tabName] = true;
    };
    CharBuildComponent.prototype.startComplete = function (nameLevel) {
        this.charName = nameLevel.charName;
        this.level = nameLevel.startingLevel;
        this.isLocked.raceThemeClass = false;
        this.showTab('race');
    };
    CharBuildComponent.prototype.raceComplete = function (raceObject) {
        this.race = { raceObject: raceObject.race, subdecisions: raceObject.subdecisions };
        console.log(this.race.raceObject.raceName + ' race selected!');
        if (this.race && this.theme && this.class) {
            this.isLocked.AS = false;
        }
    };
    CharBuildComponent.prototype.themeComplete = function (themeObject) {
        this.theme = themeObject;
        console.log(this.theme.themeName + ' theme selected!');
        if (this.race && this.theme && this.class) {
            this.isLocked.AS = false;
        }
    };
    CharBuildComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build',
            template: __webpack_require__(699),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [])
    ], CharBuildComponent);
    return CharBuildComponent;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharBuildClassComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharBuildClassComponent = (function () {
    function CharBuildClassComponent() {
    }
    CharBuildClassComponent.prototype.ngOnInit = function () {
    };
    CharBuildClassComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-class',
            template: __webpack_require__(700),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [])
    ], CharBuildClassComponent);
    return CharBuildClassComponent;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-class.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharBuildRaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharBuildRaceComponent = (function () {
    function CharBuildRaceComponent(dataService) {
        this.dataService = dataService;
        this.selectedRace = {};
        this.subdecisions = [];
        this.raceComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CharBuildRaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSubdecisions = false;
        this.dataService.getRaceDesc().subscribe(function (raceDesc) {
            _this.races = raceDesc;
        }, function (err) { console.log(err); return false; });
    };
    CharBuildRaceComponent.prototype.viewRace = function (race) { this.viewedRace = race; };
    CharBuildRaceComponent.prototype.selectRace = function (race) {
        this.selectedRace = race;
        if (!this.selectedRace.subdecisions) {
            this.showSubdecisions = false;
            this.subdecisions = null;
            this.raceComplete.emit({ race: this.selectedRace, subdecisions: this.subdecisions });
        }
        else {
            this.showSubdecisions = true;
            this.subdecisions = [];
        }
    };
    CharBuildRaceComponent.prototype.makeSubdecision = function (decisionName, selectElement) {
        var decisionObject = this.selectedRace.subdecisions.find(function (d) { return d.decisionName == decisionName; });
        var selectedOption = decisionObject.selectOptions[selectElement.selectedIndex - 1];
        if (this.subdecisions.find(function (d) { return d.decisionName === decisionName; })) {
            var existingDecision = this.subdecisions.find(function (d) { return d.decisionName === decisionName; });
            existingDecision.selectedOption = selectedOption;
        }
        else {
            this.subdecisions.push({ decisionName: decisionName, selectedOption: selectedOption });
        }
        if (this.subdecisionsComplete()) {
            this.raceComplete.emit({ race: this.selectedRace, subdecisions: this.subdecisions });
        }
    };
    CharBuildRaceComponent.prototype.subdecisionsComplete = function () {
        var decisionNames = this.selectedRace.subdecisions.map(function (d) { return d.decisionName; });
        var _loop_1 = function(i) {
            if (!this_1.subdecisions.find(function (d) { return d.decisionName === decisionNames[i]; })) {
                return { value: false };
            }
        };
        var this_1 = this;
        for (var i = 0; i < decisionNames.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object") return state_1.value;
        }
        return true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], CharBuildRaceComponent.prototype, "raceComplete", void 0);
    CharBuildRaceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-race',
            template: __webpack_require__(701),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _b) || Object])
    ], CharBuildRaceComponent);
    return CharBuildRaceComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-race.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharBuildStartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharBuildStartComponent = (function () {
    function CharBuildStartComponent() {
        this.startComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CharBuildStartComponent.prototype.ngOnInit = function () {
    };
    CharBuildStartComponent.prototype.startGo = function () {
        if (!this.charName || !this.startingLevel) {
            this.error = "Omg fill everything in!";
        }
        else {
            this.error = "";
            this.startComplete.emit({ charName: this.charName, startingLevel: this.startingLevel });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildStartComponent.prototype, "charName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildStartComponent.prototype, "startingLevel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], CharBuildStartComponent.prototype, "startComplete", void 0);
    CharBuildStartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-start',
            template: __webpack_require__(702),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [])
    ], CharBuildStartComponent);
    return CharBuildStartComponent;
    var _a;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-start.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharBuildThemeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharBuildThemeComponent = (function () {
    function CharBuildThemeComponent(dataService) {
        this.dataService = dataService;
        this.themeComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CharBuildThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getThemeDesc().subscribe(function (themeDesc) {
            _this.themes = themeDesc;
        }, function (err) { console.log(err); return false; });
    };
    CharBuildThemeComponent.prototype.viewTheme = function (theme) { this.viewedTheme = theme; };
    CharBuildThemeComponent.prototype.selectTheme = function (theme) {
        this.selectedTheme = theme;
        if (!this.selectedTheme.subdecisions) {
            this.themeComplete.emit(this.selectedTheme);
        }
        else {
            console.log('Subdecisions required');
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], CharBuildThemeComponent.prototype, "themeComplete", void 0);
    CharBuildThemeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-theme',
            template: __webpack_require__(703),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _b) || Object])
    ], CharBuildThemeComponent);
    return CharBuildThemeComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-theme.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.redirectCharBuild = function () { this.router.navigate(['/charBuild']); };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(704),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(705),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/home.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//get flashmessage stuff at https://www.youtube.com/watch?v=rt6VSxXL4_w
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            userName: this.userName,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                console.log('You are now logged in!');
                _this.router.navigate(['dashboard']);
            }
            else {
                console.log(data.msg);
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(706),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/login.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        console.log('You are logged out.');
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(707),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(708),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/profile.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            userName: this.userName,
            email: this.email,
            password: this.password
        };
        //req'd fields
        if (!this.validateService.validateRegister(user)) {
            //this.flashMessage.show('Please fill in all the fields', {cssClass: 'alert-danger', timeout: 3000});
            console.log('Please fill in all the fields');
            return false;
        }
        //validate email
        if (!this.validateService.validateEmail(user.email)) {
            //this.flashMessage.show('Invalid email address', {cssClass: 'alert-danger', timeout: 3000});
            console.log('Invalid email address');
            return false;
        }
        //register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                console.log('You are now registered!');
                _this.router.navigate(['/login']);
            }
            else {
                console.log('Something went wrong...');
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(709),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/register.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/environment.js.map

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ".container {\r\n    height: 800px; width: 100%;\r\n    padding: 20px;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: distribute; justify-content: space-around;\r\n}\r\n\r\n.container > * {margin: 10px;}\r\n\r\n.charBuild-area {\r\n    height: 630px; width: 100%;\r\n    background-color: #404040;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n}\r\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ".race-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: justify; justify-content: space-between;\r\n    height: 100%;\r\n}\r\n\r\n.placeholder {\r\n    width: 100%; height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: center; justify-content: center;\r\n    background-color: #303030; color: gray;\r\n    font-size: 150%;\r\n    border-radius: 15px;\r\n    padding-top: 50px;\r\n}\r\n\r\n.race-list {width: 200px; overflow-y: auto; padding: 10px;}\r\n.list-group-item:hover {background-color: #202020; color: lightblue;}\r\n\r\n.selected-race {background-color: #375A7F; color: white; font-weight: bold;}\r\n\r\n.race-detail-container, .race-ability-container {\r\n    width: 400px; height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    background-color: #303030;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n}\r\n\r\n.race-detail-container {-ms-flex-align: center;align-items: center;}\r\n\r\n.race-detail {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    height: 100%;\r\n}\r\n\r\n.race-detail > * {margin: 5px;}\r\n\r\n.race-stat-box {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    background-color: #202020;\r\n    padding: 5px;\r\n}\r\n\r\n.race-desc {text-align: center;}\r\n\r\n.select-button-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around; -ms-flex-align: center; align-items: center;\r\n    height: 100%; width: 100%;\r\n}\r\n\r\n.race-ability-container {overflow-y: auto;}\r\n\r\n.race-ability-box {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    margin: 20px;\r\n}\r\n\r\n.race-ability-name, .race-ability-desc {padding: 5px;}\r\n.race-ability-name {background-color: #101010;}\r\n.race-ability-desc {background-color: #202020; color: lightgray;}\r\n\r\n.subdecisions {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: center;\r\n        justify-content: center; -ms-flex-align: center; align-items: center;\r\n    background-color: #202020;\r\n    border-radius: 15px;\r\n    width: 300px; height: 200px;\r\n}\r\n\r\n.subdecisions > div {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: center;\r\n        justify-content: center; -ms-flex-align: center; align-items: center;\r\n    width: 90%;\r\n}\r\n\r\n.subdecisions > div > select {\r\n    width: 90%;\r\n    background-color: #404040; color: white;\r\n}"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ".start-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: center; justify-content: center;\r\n}\r\n\r\n.name-container, .starting-level-container {display: -ms-flexbox;display: flex;}\r\n\r\n.start-container {height: 100%; margin-top: -50px;}\r\n.inputs > * {margin: 20px;}\r\n\r\ninput {background-color: #303030; color: white; text-align: center; font-size: 125%;}\r\n\r\ninput:focus {background-color: #303030; color: white;}\r\n\r\n.input-group-text {width: 200px;}\r\n\r\n.starting-level > input {width: 75px;}\r\n\r\n.errors {color: pink; height: 0;}"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ".theme-container {display: -ms-flexbox;display: flex; height: 100%; -ms-flex-pack: justify; justify-content: space-between;}\r\n\r\n.placeholder {\r\n    width: 100%; height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: center; justify-content: center;\r\n    background-color: #303030; color: gray;\r\n    font-size: 150%;\r\n    border-radius: 15px;\r\n    padding-top: 50px;\r\n}\r\n\r\n.theme-list {width: 200px; overflow-y: auto; padding: 10px;}\r\n.theme-list > .list-group > li:hover {background-color: #202020; color: lightblue;}\r\n\r\n.theme-detail-container, .theme-ability-container {\r\n    width: 400px; height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    background-color: #303030;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n}\r\n\r\n.theme-detail-container {-ms-flex-align: center;align-items: center;}\r\n\r\n.theme-detail {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    height: 100%;\r\n}\r\n\r\n.theme-detail > * {margin: 5px;}\r\n\r\n.theme-stat-box {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    background-color: #202020;\r\n    padding: 5px;\r\n}\r\n\r\n.theme-desc {text-align: center;}\r\n\r\n.select-button-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    height: 100%;\r\n}\r\n\r\n.theme-ability-container {overflow-y: auto;}\r\n\r\n.theme-ability-box {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    margin: 20px;\r\n}\r\n\r\n.theme-ability-name, .theme-ability-desc {padding: 5px;}\r\n\r\n.theme-ability-name {background-color: #101010;}\r\n.theme-ability-desc {background-color: #202020; color: lightgray;}"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ".dashboard-container {\r\n    width: 100%;\r\n    height: 700px;\r\n}\r\n\r\n.char-container {\r\n    background-color: #404040;\r\n    border-radius: 10px;\r\n    height: 100%; width: 30%;\r\n    padding: 10px;\r\n}\r\n\r\n.char-card {\r\n    height: 80px;\r\n}\r\n\r\n.char-card:hover * {\r\n    background-color: #252525;\r\n    color: white;\r\n}\r\n\r\n.add-char {\r\n    display:-ms-flexbox;\r\n    display:flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: space-evenly; justify-content: space-evenly;\r\n    color: #9c9c9c;\r\n    height: 100%;\r\n}\r\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ".navitem-spacing {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: row; flex-direction: row; \r\n    -ms-flex-pack: distribute; \r\n        justify-content: space-around;\r\n    margin-right: 3%;\r\n}\r\n\r\n.navitem-spacing > * {margin: 10%;}"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <!--<flash-messages></flash-messages>-->\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Character Builder</h3>\n  <div class=\"btn-group\" role=\"group\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"showTab('start')\">Start</button>\n    <button [disabled]=\"isLocked.raceThemeClass\" type=\"button\" class=\"btn btn-secondary\" (click)=\"showTab('race')\">Race</button>\n    <button [disabled]=\"isLocked.raceThemeClass\" type=\"button\" class=\"btn btn-secondary\" (click)=\"showTab('theme')\">Theme</button>\n    <button [disabled]=\"isLocked.raceThemeClass\" type=\"button\" class=\"btn btn-secondary\" (click)=\"showTab('class')\">Class</button>\n    <button disabled type=\"button\" class=\"btn btn-secondary\">Ability Scores</button>\n    <button disabled type=\"button\" class=\"btn btn-secondary\">Class Choices</button>\n    <button disabled type=\"button\" class=\"btn btn-secondary\">Skills</button>\n    <button disabled type=\"button\" class=\"btn btn-secondary\">Feats</button>\n    <button disabled type=\"button\" class=\"btn btn-secondary\">Spells</button>\n  </div>\n  <div class=\"charBuild-area\">\n    <app-char-build-start [hidden]=\"!isShown.start\" (startComplete)=startComplete($event)></app-char-build-start>\n    <app-char-build-race [hidden]=\"!isShown.race\" (raceComplete)=raceComplete($event)></app-char-build-race>\n    <app-char-build-theme [hidden]=\"!isShown.theme\" (themeComplete)=themeComplete($event)></app-char-build-theme>\n    <app-char-build-class [hidden]=\"!isShown.class\"></app-char-build-class>\n  </div>\n</div>\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<p>\n  char-build-class works!\n</p>\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<div class=\"race-container\">\n  <div class=\"race-list\">\n    <ul class=\"list-group\">\n      <li *ngFor=\"let race of races\" class=\"list-group-item {{race.raceName === selectedRace.raceName ? 'selected-race' : ''}}\" (click)=\"viewRace(race)\">{{race.raceName}}</li>\n    </ul>\n  </div>\n  <div class=\"race-detail-container\">\n    <div *ngIf=\"!viewedRace\" class=\"placeholder\">Select a Race...</div>\n    <div *ngIf=\"viewedRace\" class=\"race-detail\">\n      <h4>{{viewedRace.raceName}}</h4>\n      <div class=\"race-stat-box\">\n        <strong>{{viewedRace.AS}}</strong>\n        <strong>HP: {{viewedRace.HP}}</strong>\n        <small>{{viewedRace.sizeType}}</small>\n      </div>\n      <div class=\"race-desc\">{{viewedRace.description}}</div>\n      <div class=\"select-button-container\">\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"selectRace(viewedRace)\">Choose This Race</button>\n        <div *ngIf=\"viewedRace.subdecisions && showSubdecisions\">\n          <div class=\"subdecisions\">\n            <div *ngFor=\"let decision of viewedRace.subdecisions\">\n              <div>{{decision.selectLabel}}</div>\n              <select class=\"custom-select\" (change)=\"makeSubdecision(decision.decisionName,$event.target)\">\n                <option hidden disabled selected>Select</option>\n                <option *ngFor=\"let option of decision.selectOptions\">{{option.name}} ({{option.detail}})</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"race-ability-container\">\n    <div *ngIf=\"!viewedRace\" class=\"placeholder\"></div>\n    <div *ngIf=\"viewedRace\" class=\"race-abilities\">\n      <div *ngFor=\"let ability of viewedRace.racialAbilities\" class=\"race-ability-box\">\n        <div class=\"race-ability-name\">{{ability.name}}</div>\n        <small class=\"race-ability-desc\">{{ability.description}}</small>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div class=\"start-container\">\n  <div class=\"inputs\">\n    <div class=\"name-container\">\n      <div class=\"input-group input-group-lg name\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Character Name</span>\n        </div>\n        <input type=\"text\" [(ngModel)]=\"charName\" name=\"charName\">\n      </div>\n    </div>\n    <div class=\"starting-level-container\">\n      <div class=\"input-group input-group-lg starting-level\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Starting Level</span>\n        </div>\n        <input type=\"text\" [(ngModel)]=\"startingLevel\" name=\"startingLevel\">\n      </div>\n    </div>\n  </div>\n  <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"startGo()\">Go <i class=\"fas fa-arrow-right ml-2\"></i></button>\n  <div class=\"errors mt-3\">{{ error }}</div>\n</div>"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-container\">\n  <div class=\"theme-list\">\n    <ul class=\"list-group\">\n      <li *ngFor=\"let theme of themes\" class=\"list-group-item\" (click)=\"viewTheme(theme)\">{{theme.themeName}}</li>\n    </ul>\n  </div>\n  <div class=\"theme-detail-container\">\n    <div *ngIf=\"!viewedTheme\" class=\"placeholder\">Select a Theme...</div>\n    <div *ngIf=\"viewedTheme\" class=\"theme-detail\">\n      <h4>{{viewedTheme.themeName}}</h4>\n      <div class=\"theme-stat-box\">\n        <strong>{{viewedTheme.AS}}</strong>\n      </div>\n      <div class=\"theme-desc\">{{viewedTheme.description}}</div>\n      <div class=\"select-button-container\">\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"selectTheme(viewedTheme)\">Choose This Theme</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"theme-ability-container\">\n    <div *ngIf=\"!viewedTheme\" class=\"placeholder\"></div>\n    <div *ngIf=\"viewedTheme\" class=\"theme-abilities\">\n      <div *ngFor=\"let ability of viewedTheme.themeAbilities\" class=\"theme-ability-box\">\n        <div class=\"theme-ability-name\">{{ability.name}} - Level {{ability.level}}</div>\n        <small class=\"theme-ability-desc\">{{ability.description}}</small>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<div class=\"dashboard-container\">\n    <div class=\"char-container\">\n        <div class=\"card char-card\">\n            <div class=\"add-char\" (click)=\"redirectCharBuild()\">\n                <i class=\"fas fa-2x fa-plus-circle\"></i>\n                <span>Create Character</span>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron text-center mt-5\">\n  <h1>MEAN Authentication App</h1>\n  <p class=\"lead\">Welcome to our custom MEAN authentication application built from scratch</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div>"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userName\" name=\"userName\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark navbar-default\">\n  <a class=\"navbar-brand\" href=\"#\">MEAN App</a>\n  <ul class=\"navbar-nav mr-auto navbar-left\">\n    <li><a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a></li>\n  </ul>\n  <div class=\"navbar-nav navbar-right navitem-spacing\">\n    <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Login</a>\n    <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/register\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Register</a>\n    <a *ngIf=\"authService.loggedIn()\" routerLink=\"/dashboard\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Dashboard</a>\n    <a *ngIf=\"authService.loggedIn()\" routerLink=\"/profile\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Profile</a>\n    <a *ngIf=\"authService.loggedIn()\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a>\n  </div>\n</nav>"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{ user.name }}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.userName}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header mt-3\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"userName\" name=\"userName\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(398);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () { this.authToken = localStorage.getItem('id_token'); };
    AuthService.prototype.loggedIn = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token'); };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/auth.service.js.map

/***/ })

},[747]);
//# sourceMappingURL=main.bundle.map