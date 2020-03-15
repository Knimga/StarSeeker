webpackJsonp([1,4],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(379);
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
    DataService.prototype.getGameData = function (routeString) {
        var url = this.url + '/gamedata/' + routeString;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(url, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.getRaceDesc = function () { return this.getGameData('raceDesc'); };
    DataService.prototype.getThemeDesc = function () { return this.getGameData('themeDesc'); };
    DataService.prototype.getClassDesc = function () { return this.getGameData('classDesc'); };
    DataService.prototype.getSkills = function () { return this.getGameData('skills'); };
    DataService.prototype.getBabSaves = function () { return this.getGameData('babSaves'); };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], DataService);
    return DataService;
    var _a;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/data.service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = ".component-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: justify; justify-content: space-between;\r\n    height: 100%;\r\n}\r\n\r\n.container-column-1 {\r\n    width: 400px; height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    background-color: #303030;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.list-column {width: 200px; overflow-y: auto; padding: 10px;}\r\n\r\n.list-group-item:hover {background-color: #202020; color: lightblue;}\r\n\r\n.selected {background-color: #375A7F; color: white; font-weight: bold;}\r\n\r\n.placeholder {\r\n    width: 100%; height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: center; justify-content: center;\r\n    background-color: #303030; color: gray;\r\n    font-size: 150%;\r\n    border-radius: 15px;\r\n    padding-top: 50px;\r\n}\r\n\r\n.selection-detail {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    height: 100%;\r\n}\r\n\r\n.selection-detail > * {margin: 5px;}\r\n\r\n.stat-box-centered {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    background-color: #202020; color: lightgray;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.selection-desc {text-align: center; font-size: 90%; color: lightgray;}\r\n\r\n.select-button-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around; -ms-flex-align: center; align-items: center;\r\n    height: 100%; width: 100%;\r\n    margin: 5% auto;\r\n    -ms-flex-positive: 2;\r\n        flex-grow: 2;\r\n}\r\n\r\n.decisions {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: center;\r\n        justify-content: center; -ms-flex-align: center; align-items: center;\r\n    background-color: #202020;\r\n    border-radius: 15px;\r\n    width: 300px; height: 150px;\r\n}\r\n\r\n.decisions > div {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: center;\r\n        justify-content: center; -ms-flex-align: center; align-items: center;\r\n    width: 90%;\r\n    margin: 5%;\r\n}\r\n\r\n.decisions > div > select {\r\n    width: 90%;\r\n    background-color: #404040; color: white;\r\n}\r\n\r\n.ability-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n}\r\n\r\n.ability-card {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    height: auto; width: auto;\r\n    margin: 2%; padding: 5% 5%;\r\n    border-radius: 10px;\r\n    background-color: #202020;\r\n    color: lightgray;\r\n}\r\n\r\n.ability-card:hover {border: 1px solid gray;}\r\n\r\n.card-label {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: justify; justify-content: space-between;\r\n    color: #6082a6;\r\n    font-weight: bold;\r\n}\r\n\r\n.ability-desc {\r\n    padding: 5px;\r\n    font-size: 85%;\r\n    color: gray;\r\n}\r\n\r\n.ability-box {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    margin: 20px;\r\n}\r\n\r\n.ability-name {padding: 5px;}\r\n.ability-name {background-color: #101010;}\r\n.ability-desc {background-color: #202020; color: lightgray;}"

/***/ }),

/***/ 340:
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

/***/ 398:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 398;


/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(517);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/main.js.map

/***/ }),

/***/ 516:
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
            template: __webpack_require__(705),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/app.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_data_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_char_build_char_build_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_char_build_child_components_char_build_start_char_build_start_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_char_build_child_components_char_build_race_char_build_race_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_char_build_child_components_char_build_theme_char_build_theme_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_char_build_child_components_char_build_class_char_build_class_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_char_build_child_components_char_build_tracker_char_build_tracker_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_char_build_child_components_char_build_as_char_build_as_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_char_build_child_components_char_build_class_choices_char_build_class_choices_component__ = __webpack_require__(520);
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
                __WEBPACK_IMPORTED_MODULE_20__components_char_build_child_components_char_build_class_char_build_class_component__["a" /* CharBuildClassComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_char_build_child_components_char_build_tracker_char_build_tracker_component__["a" /* CharBuildTrackerComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_char_build_child_components_char_build_as_char_build_as_component__["a" /* CharBuildASComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_char_build_child_components_char_build_class_choices_char_build_class_choices_component__["a" /* CharBuildClassChoicesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
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

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(107);
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
    function CharBuildComponent(dataService) {
        this.dataService = dataService;
        this.charObject = {
            charName: String,
            charLevel: Number,
            race: Object,
            theme: Object,
            classes: Array,
            AS: {
                totals: Array,
                race: Array,
                theme: Array,
                pb: Array,
                levelInc: Array
            },
            keyAS: Number,
            HP: Number,
            stamina: Number,
            resolve: Number,
            ini: Number,
            saves: { fort: Number, ref: Number, will: Number },
            bab: { melee: Number, ranged: Number, thrown: Number }
        };
        this.decisionsMade = [];
        this.decisionsToMake = [];
        this.isShown = 'start';
    }
    CharBuildComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.charObject = {
            charName: '',
            charLevel: 1,
            race: null,
            theme: null,
            classes: [],
            AS: {
                totals: [10, 10, 10, 10, 10, 10],
                race: [0, 0, 0, 0, 0, 0],
                theme: [0, 0, 0, 0, 0, 0],
                pb: [0, 0, 0, 0, 0, 0],
                levelInc: [0, 0, 0, 0, 0, 0]
            },
            keyAS: null,
            HP: null,
            stamina: null,
            resolve: null,
            ini: null,
            saves: { fort: null, ref: null, will: null },
            bab: { melee: null, ranged: null, thrown: null }
        };
        this.isLocked = {
            raceThemeClass: true,
            AS: true,
            classChoices: true,
            skills: true,
            feats: true,
            spells: true
        };
        this.isComplete = {
            start: false,
            race: false,
            theme: false,
            class: false,
            AS: false,
            classChoices: false,
            skills: false,
            feats: false,
            spells: false
        };
        this.dataService.getSkills().subscribe(function (skills) {
            _this.skillsData = skills;
        }, function (err) { console.log(err); return false; });
        this.dataService.getBabSaves().subscribe(function (babSaves) {
            _this.babSavesData = babSaves[0];
        }, function (err) { console.log(err); return false; });
    };
    CharBuildComponent.prototype.logCharObject = function () { console.log(this.charObject); }; //dev purposes
    CharBuildComponent.prototype.unlockAS = function () { this.isLocked.AS = false; }; //dev purposes
    CharBuildComponent.prototype.showTab = function (tabName) { this.isShown = tabName; };
    CharBuildComponent.prototype.startGo = function (nameLevel) {
        this.charObject.charName = nameLevel.charName;
        this.charObject.charLevel = nameLevel.startingLevel;
        this.isLocked.raceThemeClass = false;
        this.showTab('race');
    };
    CharBuildComponent.prototype.startUpdate = function (nameLevel) {
        this.charObject.charName = nameLevel.charName;
        this.charObject.charLevel = nameLevel.startingLevel;
        if (this.charObject.classes && this.charObject.classes.length == 1) {
            this.charObject.classes[0].classLevel = this.charObject.charLevel;
            this.statCalc();
        }
    };
    CharBuildComponent.prototype.startComplete = function (boolean) { this.isComplete.start = boolean; };
    CharBuildComponent.prototype.raceComplete = function (boolean) { this.isComplete.race = boolean; this.tabLockCheck(); };
    CharBuildComponent.prototype.themeComplete = function (boolean) { this.isComplete.theme = boolean; this.tabLockCheck(); };
    CharBuildComponent.prototype.classComplete = function (boolean) { this.isComplete.class = boolean; this.tabLockCheck(); };
    CharBuildComponent.prototype.ASComplete = function (boolean) { this.isComplete.AS = boolean; this.tabLockCheck(); };
    CharBuildComponent.prototype.raceUpdate = function (raceInfo) {
        if (raceInfo) {
            this.charObject.race = raceInfo.race;
            this.charObject.AS.race = this.charObject.race.raceData.AS;
            this.updateDecisions('race', raceInfo.decisionsMade, raceInfo.decisionsToMake);
            this.processDecisions();
            this.statCalc();
        }
    };
    CharBuildComponent.prototype.themeUpdate = function (themeInfo) {
        if (themeInfo) {
            this.charObject.theme = themeInfo.theme;
            this.charObject.AS.theme = this.charObject.theme.themeData.AS;
            this.updateDecisions('theme', themeInfo.decisionsMade, themeInfo.decisionsToMake);
            this.processDecisions();
            this.statCalc();
        }
    };
    CharBuildComponent.prototype.classUpdate = function (classInfo) {
        if (classInfo) {
            this.charObject.classes = classInfo.class;
            this.updateDecisions('class', classInfo.decisionsMade, classInfo.decisionsToMake);
            this.processDecisions();
            this.statCalc();
        }
        else {
            this.isComplete.class = false;
        }
    };
    CharBuildComponent.prototype.ASUpdate = function (newAS) { this.charObject.AS = newAS; this.statCalc(); };
    CharBuildComponent.prototype.tabLockCheck = function () {
        if (this.isComplete.race && this.isComplete.theme && this.isComplete.class) {
            this.isLocked.AS = false;
        }
        if (this.isComplete.AS) {
            this.isLocked.classChoices = false;
        }
    };
    CharBuildComponent.prototype.updateDecisions = function (context, decisionsMade, decisionsToMake) {
        this.decisionsMade = this.decisionsMade.filter(function (d) { return d.context != context; });
        this.decisionsToMake = this.decisionsToMake.filter(function (d) { return d.context != context; });
        if (decisionsMade) {
            this.decisionsMade = this.decisionsMade.concat(decisionsMade);
        }
        if (decisionsToMake) {
            this.decisionsToMake = this.decisionsToMake.concat(decisionsToMake);
        }
    };
    CharBuildComponent.prototype.statCalc = function () {
        this.updateAS();
        this.updateKeyAS();
        this.updateStamHPResolve();
        this.updateBabSaves();
        this.updateIni();
    };
    CharBuildComponent.prototype.processDecisions = function () {
        var _this = this;
        this.decisionsMade.forEach(function (d) {
            switch (d.target) {
                case 'AS':
                    if (d.context == 'race')
                        _this.charObject.AS.race = _this.sumArrays([_this.charObject.race.raceData.AS, d.value]);
                    break;
                case 'keyAS':
                    var targetClass = _this.charObject.classes.find(function (c) { return c.className == d.value.className; });
                    targetClass.classData.keyASIndex = d.value.keyASIndex;
                    break;
                default: break;
            }
        });
    };
    CharBuildComponent.prototype.updateKeyAS = function () {
        if (this.charObject.classes.length) {
            this.charObject.keyAS = Math.max.apply(Math, this.charObject.classes.map(function (c) { return c.classData.keyASIndex; }));
        }
    };
    CharBuildComponent.prototype.updateAS = function () {
        var newAS = [10, 10, 10, 10, 10, 10];
        newAS = this.sumArrays([newAS, this.charObject.AS.race, this.charObject.AS.theme, this.charObject.AS.pb, this.charObject.AS.levelInc]);
        this.charObject.AS.totals = newAS;
    };
    CharBuildComponent.prototype.updateStamHPResolve = function () {
        var _this = this;
        if (this.charObject.race && this.charObject.classes) {
            var classHP_1 = 0;
            this.charObject.classes.forEach(function (c) { return classHP_1 += c.classData.HP * c.classLevel; });
            this.charObject.HP = this.charObject.race.raceData.HP + classHP_1;
        }
        if (this.charObject.classes.length) {
            var stamina_1 = 0;
            this.charObject.classes.forEach(function (c) { return stamina_1 += (c.classData.stamina + _this.ASMod(2)) * c.classLevel; });
            this.charObject.stamina = stamina_1;
            var resolve = Math.floor(this.charObject.charLevel / 2) + this.ASMod(this.charObject.keyAS);
            this.charObject.resolve = (resolve < 1) ? 1 : resolve;
        }
    };
    CharBuildComponent.prototype.updateBabSaves = function () {
        var _this = this;
        var bab = 0, fort = 0, ref = 0, will = 0;
        var allBabs = this.charObject.classes.map(function (c) { return _this.babSavesData.bab[c.classData.bab][c.classLevel - 1]; });
        var allForts = this.charObject.classes.map(function (c) { return _this.babSavesData.saves[c.classData.saves.fort][c.classLevel - 1]; });
        var allRefs = this.charObject.classes.map(function (c) { return _this.babSavesData.saves[c.classData.saves.ref][c.classLevel - 1]; });
        var allWills = this.charObject.classes.map(function (c) { return _this.babSavesData.saves[c.classData.saves.will][c.classLevel - 1]; });
        for (var i = 0; i < this.charObject.classes.length; i++) {
            bab += allBabs[i];
            fort += allForts[i];
            ref += allRefs[i];
            will += allWills[i];
        }
        this.charObject.bab = { melee: bab + this.ASMod(0), ranged: bab + this.ASMod(1), thrown: bab + this.ASMod(0) };
        this.charObject.saves = { fort: fort + this.ASMod(2), ref: ref + this.ASMod(1), will: will + this.ASMod(4) };
    };
    CharBuildComponent.prototype.updateIni = function () { this.charObject.ini = this.ASMod(1); };
    CharBuildComponent.prototype.ASMod = function (ASIndex) { return Math.floor((this.charObject.AS.totals[ASIndex] - 10) / 2); };
    CharBuildComponent.prototype.sumArrays = function (arrayOfArrays) {
        var bucket = [0, 0, 0, 0, 0, 0];
        for (var a = 0; a < arrayOfArrays.length; a++) {
            for (var i = 0; i < 6; i++) {
                bucket[i] += arrayOfArrays[a][i];
            }
        }
        return bucket;
    };
    CharBuildComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build',
            template: __webpack_require__(706),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], CharBuildComponent);
    return CharBuildComponent;
    var _a;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharBuildASComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharBuildASComponent = (function () {
    function CharBuildASComponent() {
        this.pbCount = 0;
        this.ASIncTracker = [
            { level: 5, inc: [0, 0, 0, 0, 0, 0] },
            { level: 10, inc: [0, 0, 0, 0, 0, 0] },
            { level: 15, inc: [0, 0, 0, 0, 0, 0] },
            { level: 20, inc: [0, 0, 0, 0, 0, 0] }
        ];
        this.ASUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ASComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CharBuildASComponent.prototype.ngOnInit = function () { };
    CharBuildASComponent.prototype.pbInc = function (value, pbIndex) {
        if (this.validatePb(value, pbIndex)) {
            this.AS.pb[pbIndex] += value;
            this.pbCount += value;
            this.ASUpdate.emit(this.AS);
            this.ASComplete.emit(this.isASComplete());
        }
    };
    CharBuildASComponent.prototype.validatePb = function (value, pbIndex) {
        var tests = [
            this.AS.pb[pbIndex] + value >= 0,
            this.pbCount + value <= 10,
            this.pbCount + value >= 0,
        ];
        if (value > 0) {
            tests.push(this.pb18orBelow(value, pbIndex));
        }
        for (var i = 0; i < tests.length; i++) {
            if (!tests[i])
                return false;
        }
        return true;
    };
    CharBuildASComponent.prototype.pb18orBelow = function (value, pbIndex) {
        var AS = this.sumArrays([[10, 10, 10, 10, 10, 10], this.AS.race, this.AS.theme, this.AS.pb]);
        AS[pbIndex] += value;
        for (var i = 0; i < 6; i++) {
            if (AS[i] > 18)
                return false;
        }
        return true;
    };
    CharBuildASComponent.prototype.getIncArray = function (levelOfInc) { return this.ASIncTracker.find(function (as) { return as.level == levelOfInc; }).inc; };
    CharBuildASComponent.prototype.incValue = function (levelOfInc, ASIndex) { return this.ASIncTracker.find(function (as) { return as.level == levelOfInc; }).inc[ASIndex]; };
    CharBuildASComponent.prototype.ASInc = function (eventTarget, levelOfInc, ASIndex) {
        var targetArray = this.getIncArray(levelOfInc);
        if (eventTarget.checked) {
            if (!this.isIncComplete(levelOfInc)) {
                targetArray[ASIndex] += (this.AS.totals[ASIndex] <= 16) ? 2 : 1;
            }
            else {
                eventTarget.checked = false;
            }
        }
        else {
            targetArray[ASIndex] = 0;
        }
        this.levelIncUpdate();
    };
    CharBuildASComponent.prototype.isIncComplete = function (levelOfInc) {
        var targetArray = this.getIncArray(levelOfInc), counter = 0;
        for (var i = 0; i < 6; i++) {
            if (targetArray[i])
                counter++;
        }
        return (counter < 4) ? false : true;
    };
    CharBuildASComponent.prototype.isASComplete = function () {
        var ASIncComplete = true, levels = this.ASIncLevels();
        if (levels.length) {
            for (var i = 0; i < levels.length; i++) {
                if (!this.isIncComplete(levels[i]))
                    ASIncComplete = false;
            }
        }
        return (this.pbCount == 10 && ASIncComplete) ? true : false;
    };
    CharBuildASComponent.prototype.levelIncUpdate = function () {
        var incLevels = this.ASIncLevels(), arrayBucket = [];
        for (var i = 0; i < incLevels.length; i++) {
            if (!this.isLevelIncDisabled(incLevels[i])) {
                arrayBucket.push(this.getIncArray(incLevels[i]));
            }
            else {
                this.getIncArray(incLevels[i]).fill(0);
            }
        }
        this.AS.levelInc = this.sumArrays(arrayBucket);
        this.ASUpdate.emit(this.AS);
        this.ASComplete.emit(this.isASComplete());
    };
    CharBuildASComponent.prototype.sumArrays = function (arrayOfArrays) {
        var bucket = [0, 0, 0, 0, 0, 0];
        for (var a = 0; a < arrayOfArrays.length; a++) {
            for (var i = 0; i < 6; i++) {
                bucket[i] += arrayOfArrays[a][i];
            }
        }
        return bucket;
    };
    CharBuildASComponent.prototype.ASIncLevels = function () {
        var length = Math.floor(this.charLevel / 5), array = [];
        for (var i = 0; i < length; i++) {
            array[i] = (i + 1) * 5;
        }
        return array;
    };
    CharBuildASComponent.prototype.isLevelIncDisabled = function (levelOfInc) {
        if (levelOfInc != 5) {
            var levels = this.ASIncLevels(), stoppingPoint = levels.indexOf(levelOfInc);
            for (var i = 0; i < stoppingPoint; i++) {
                if (!this.isIncComplete(levels[i]))
                    return true;
            }
        }
        return false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildASComponent.prototype, "AS", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CharBuildASComponent.prototype, "charLevel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], CharBuildASComponent.prototype, "ASUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], CharBuildASComponent.prototype, "ASComplete", void 0);
    CharBuildASComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-as',
            template: __webpack_require__(707),
            styles: [__webpack_require__(692), __webpack_require__(168)]
        }), 
        __metadata('design:paramtypes', [])
    ], CharBuildASComponent);
    return CharBuildASComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-as.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharBuildClassChoicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharBuildClassChoicesComponent = (function () {
    function CharBuildClassChoicesComponent() {
    }
    CharBuildClassChoicesComponent.prototype.ngOnInit = function () {
    };
    CharBuildClassChoicesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-class-choices',
            template: __webpack_require__(708),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [])
    ], CharBuildClassChoicesComponent);
    return CharBuildClassChoicesComponent;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-class-choices.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(107);
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
    function CharBuildClassComponent(dataService) {
        this.dataService = dataService;
        this.viewedClassDecisions = [];
        this.decisionsMade = [];
        this.selectedClasses = [];
        this.selectedClassNames = [];
        this.showDesc = {};
        this.multiclass = false;
        this.classUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.classComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CharBuildClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getClassDesc().subscribe(function (classDesc) {
            _this.classes = classDesc;
        }, function (err) { console.log(err); return false; });
    };
    CharBuildClassComponent.prototype.viewClass = function (clickedClass) {
        this.viewedClass = clickedClass;
        this.showDesc = {};
        if (this.viewedClass.decisions) {
            this.viewedClassDecisions = this.viewedClass.decisions.filter(function (d) { return d.context == 'class'; });
        }
        else {
            this.viewedClassDecisions = [];
        }
        var length = this.viewedClass.classFeatures.length;
        for (var i = 0; i < length; i++) {
            this.showDesc[i] = false;
        }
    };
    CharBuildClassComponent.prototype.selectClass = function (selectedClass) {
        if (this.multiclass) {
            if (this.checkMCLevels(1) && !this.classIsSelected(selectedClass.className)) {
                selectedClass.classLevel = 1;
                this.selectedClasses.push(selectedClass);
                this.updateClassNames();
                this.updateDecisionsUI();
                this.sendUpdate();
            }
        }
        else {
            selectedClass.classLevel = this.charLevel;
            this.selectedClasses = [selectedClass];
            this.updateClassNames();
            this.updateDecisionsUI();
            this.sendUpdate();
        }
        this.validate();
    };
    CharBuildClassComponent.prototype.mcToggle = function () {
        if (!this.multiclass && this.selectedClasses.length) {
            this.selectedClasses = [this.selectedClasses[0]];
            this.selectedClasses[0].classLevel = 1;
            this.sendUpdate();
            this.updateClassNames();
        }
        this.validate();
    };
    CharBuildClassComponent.prototype.checkMCLevels = function (inc) {
        var levelCount = 0;
        this.selectedClasses.map(function (c) { return c.classLevel; }).forEach(function (l) { return levelCount += l; });
        if (levelCount + inc > this.charLevel) {
            this.mcError = "Too many levels";
            return false;
        }
        else {
            this.mcError = "";
            return true;
        }
    };
    CharBuildClassComponent.prototype.inc = function (className, inc) {
        if (this.checkMCLevels(inc)) {
            var targetClass_1 = this.selectedClasses.find(function (c) { return c.className == className; });
            if (targetClass_1.classLevel + inc > 0) {
                targetClass_1.classLevel += inc;
                this.sendUpdate();
            }
            else if (targetClass_1.classLevel + inc == 0) {
                this.selectedClasses = this.selectedClasses.filter(function (c) { return c.className != targetClass_1.className; });
                this.updateClassNames();
            }
        }
        this.validate();
    };
    CharBuildClassComponent.prototype.validate = function () {
        var totalClassLevels = 0;
        for (var i = 0; i < this.selectedClasses.length; i++) {
            totalClassLevels += this.selectedClasses[i].classLevel;
        }
        if (totalClassLevels == this.charLevel && this.decisionsComplete()) {
            this.classComplete.emit(true);
        }
        else {
            this.classComplete.emit(false);
        }
    };
    CharBuildClassComponent.prototype.sendUpdate = function () {
        this.classUpdate.emit({
            class: this.selectedClasses,
            decisionsMade: this.decisionsMade,
            decisionsToMake: this.getDecisionsToMake()
        });
    };
    CharBuildClassComponent.prototype.hideShow = function (i) { this.showDesc[i] = !this.showDesc[i]; };
    CharBuildClassComponent.prototype.updateClassNames = function () { this.selectedClassNames = this.selectedClasses.map(function (c) { return c.className; }); };
    CharBuildClassComponent.prototype.classIsSelected = function (className) { return this.selectedClassNames.includes(className); };
    CharBuildClassComponent.prototype.updateDecisionsUI = function () {
        if (!this.viewedClassDecisions) {
            this.showDecisions = false;
            this.decisionsMade = null;
        }
        else {
            this.showDecisions = true;
        }
    };
    CharBuildClassComponent.prototype.makeDecision = function (decisionName, selectElement) {
        var thisDecision = this.viewedClassDecisions.find(function (d) { return d.name == decisionName; });
        var decisionEffect = thisDecision.selectOptions[selectElement.selectedIndex - 1].effect;
        var decisionObject = {
            name: thisDecision.name,
            context: thisDecision.context,
            target: decisionEffect.target,
            value: decisionEffect.value
        };
        if (this.decisionsMade.find(function (d) { return d.name === decisionName; })) {
            this.decisionsMade = this.decisionsMade.filter(function (d) { return d.name != decisionName; });
        }
        this.decisionsMade.push(decisionObject);
        if (this.decisionsComplete()) {
            this.sendUpdate();
        }
        this.validate();
    };
    CharBuildClassComponent.prototype.getDecisionsToMake = function () {
        var decisionsArray = [];
        this.selectedClasses.forEach(function (c) {
            if (c.decisions)
                decisionsArray.push(c.decisions.filter(function (d) { return d.context != 'class'; }));
        });
        return decisionsArray;
    };
    CharBuildClassComponent.prototype.decisionsComplete = function () {
        var decisionNames = this.viewedClassDecisions.map(function (d) { return d.name; });
        var _loop_1 = function(i) {
            if (!this_1.decisionsMade.find(function (d) { return d.name === decisionNames[i]; })) {
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
    CharBuildClassComponent.prototype.createSkillList = function (classSkillArray) {
        var _this = this;
        return classSkillArray.map(function (s) {
            var skillObject = _this.skillsData.find(function (skill) { return skill.skillId == s; });
            return skillObject.skillName + " (" + skillObject.ASName + ")";
        }).join(', ');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildClassComponent.prototype, "charLevel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildClassComponent.prototype, "skillsData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], CharBuildClassComponent.prototype, "classUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], CharBuildClassComponent.prototype, "classComplete", void 0);
    CharBuildClassComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-class',
            template: __webpack_require__(709),
            styles: [__webpack_require__(694), __webpack_require__(168)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _c) || Object])
    ], CharBuildClassComponent);
    return CharBuildClassComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-class.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(107);
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
        this.decisionsMade = [];
        this.showDesc = {};
        this.raceComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.raceUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CharBuildRaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showDecisions = false;
        this.dataService.getRaceDesc().subscribe(function (raceDesc) {
            _this.races = raceDesc;
        }, function (err) { console.log(err); return false; });
    };
    CharBuildRaceComponent.prototype.viewRace = function (race) {
        this.viewedRace = race;
        this.showDesc = {};
        if (this.viewedRace.decisions) {
            this.viewedRaceDecisions = this.viewedRace.decisions.filter(function (d) { return d.context == 'race'; });
        }
        else {
            this.viewedRaceDecisions = null;
        }
        for (var i = 0; i < this.viewedRace.racialAbilities.length; i++) {
            this.showDesc[i] = false;
        }
    };
    CharBuildRaceComponent.prototype.selectRace = function (race) {
        this.selectedRace = race;
        if (!this.viewedRaceDecisions) {
            this.showDecisions = false;
            this.decisionsMade = null;
            this.raceUpdate.emit({ race: this.selectedRace, decisionsMade: null, decisionsToMake: null });
            this.raceComplete.emit(true);
        }
        else {
            this.raceUpdate.emit({ race: this.selectedRace, decisionsMade: null, decisionsToMake: null });
            this.raceComplete.emit(false);
            this.showDecisions = true;
            this.decisionsMade = [];
        }
    };
    CharBuildRaceComponent.prototype.hideShow = function (i) { this.showDesc[i] = !this.showDesc[i]; };
    CharBuildRaceComponent.prototype.makeDecision = function (decisionName, selectElement) {
        var thisDecision = this.viewedRaceDecisions.find(function (d) { return d.name == decisionName; });
        var decisionEffect = thisDecision.selectOptions[selectElement.selectedIndex - 1].effect;
        var decisionObject = {
            name: thisDecision.name,
            context: thisDecision.context,
            target: decisionEffect.target,
            value: decisionEffect.value
        };
        if (this.decisionsMade.find(function (d) { return d.name === decisionName; })) {
            this.decisionsMade = this.decisionsMade.filter(function (d) { return d.name != decisionName; });
        }
        this.decisionsMade.push(decisionObject);
        if (this.decisionsComplete()) {
            this.raceUpdate.emit({
                race: this.selectedRace,
                decisionsMade: this.decisionsMade,
                decisionsToMake: this.selectedRace.decisions.filter(function (d) { return d.context != 'race'; })
            });
            this.raceComplete.emit(true);
        }
    };
    CharBuildRaceComponent.prototype.decisionsComplete = function () {
        var decisionNames = this.viewedRaceDecisions.map(function (d) { return d.name; });
        var _loop_1 = function(i) {
            if (!this_1.decisionsMade.find(function (d) { return d.name === decisionNames[i]; })) {
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], CharBuildRaceComponent.prototype, "raceUpdate", void 0);
    CharBuildRaceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-race',
            template: __webpack_require__(710),
            styles: [__webpack_require__(695), __webpack_require__(168)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _c) || Object])
    ], CharBuildRaceComponent);
    return CharBuildRaceComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-race.component.js.map

/***/ }),

/***/ 523:
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
        var _this = this;
        this.startingLevel = 1;
        this.startData = function () {
            return { charName: _this.charName, startingLevel: _this.startingLevel };
        };
        this.startComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.startUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.startGo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CharBuildStartComponent.prototype.ngOnInit = function () { };
    CharBuildStartComponent.prototype.go = function () {
        if (this.validate())
            this.startGo.emit(this.startData());
    };
    CharBuildStartComponent.prototype.updateParent = function () {
        if (this.validate())
            this.startUpdate.emit(this.startData());
    };
    CharBuildStartComponent.prototype.inc = function (value) {
        var newLevel = this.startingLevel + value;
        if (newLevel > 0 && newLevel < 21) {
            this.startingLevel = newLevel;
            this.updateParent();
        }
    };
    CharBuildStartComponent.prototype.validate = function () {
        if (!this.charName) {
            this.error = "Provide a character name";
            this.startComplete.emit(false);
            this.startUpdate.emit(this.startData());
            return false;
        }
        else {
            this.error = "";
            this.startComplete.emit(true);
            return true;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], CharBuildStartComponent.prototype, "startComplete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], CharBuildStartComponent.prototype, "startUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], CharBuildStartComponent.prototype, "startGo", void 0);
    CharBuildStartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-start',
            template: __webpack_require__(711),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [])
    ], CharBuildStartComponent);
    return CharBuildStartComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-start.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(107);
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
        this.selectedTheme = {};
        this.decisionsMade = [];
        this.showDesc = {};
        this.themeComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.themeUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CharBuildThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showDecisions = false;
        this.dataService.getThemeDesc().subscribe(function (themeDesc) {
            _this.themes = themeDesc;
        }, function (err) { console.log(err); return false; });
    };
    CharBuildThemeComponent.prototype.viewTheme = function (theme) {
        this.viewedTheme = theme;
        this.showDesc = {};
        if (this.viewedTheme.decisions) {
            this.viewedThemeDecisions = this.viewedTheme.decisions.filter(function (d) { return d.context == 'theme'; });
        }
        else {
            this.viewedThemeDecisions = null;
        }
        var length = this.viewedTheme.themeAbilities.length;
        for (var i = 0; i < length; i++) {
            this.showDesc[i] = false;
        }
    };
    CharBuildThemeComponent.prototype.selectTheme = function (theme) {
        this.selectedTheme = theme;
        if (!this.viewedThemeDecisions) {
            this.showDecisions = false;
            this.decisionsMade = null;
            this.themeUpdate.emit({ theme: this.selectedTheme, decisionsMade: null, decisionsRemaining: null });
            this.themeComplete.emit(true);
        }
        else {
            this.themeUpdate.emit({ theme: this.selectedTheme, decisionsMade: null, decisionsRemaining: null });
            this.themeComplete.emit(false);
            this.showDecisions = true;
            this.decisionsMade = [];
        }
    };
    CharBuildThemeComponent.prototype.hideShow = function (i) { this.showDesc[i] = !this.showDesc[i]; };
    CharBuildThemeComponent.prototype.makeDecision = function (decisionName, selectElement) {
        var thisDecision = this.viewedThemeDecisions.find(function (d) { return d.name == decisionName; });
        var decisionEffect = thisDecision.selectOptions[selectElement.selectedIndex - 1].effect;
        var decisionObject = {
            name: thisDecision.name,
            context: thisDecision.context,
            target: decisionEffect.target,
            value: decisionEffect.value
        };
        if (this.decisionsMade.find(function (d) { return d.name === decisionName; })) {
            this.decisionsMade = this.decisionsMade.filter(function (d) { return d.name != decisionName; });
        }
        this.decisionsMade.push(decisionObject);
        if (this.decisionsComplete()) {
            this.themeUpdate.emit({
                theme: this.selectedTheme,
                decisionsMade: this.decisionsMade,
                decisionsRemaining: this.selectedTheme.decisions.filter(function (d) { return d.context != 'theme'; })
            });
            this.themeComplete.emit(true);
        }
    };
    CharBuildThemeComponent.prototype.decisionsComplete = function () {
        var decisionNames = this.viewedThemeDecisions.map(function (d) { return d.name; });
        var _loop_1 = function(i) {
            if (!this_1.decisionsMade.find(function (d) { return d.name === decisionNames[i]; })) {
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
    ], CharBuildThemeComponent.prototype, "themeComplete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], CharBuildThemeComponent.prototype, "themeUpdate", void 0);
    CharBuildThemeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-theme',
            template: __webpack_require__(712),
            styles: [__webpack_require__(697), __webpack_require__(168)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _c) || Object])
    ], CharBuildThemeComponent);
    return CharBuildThemeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-theme.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharBuildTrackerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharBuildTrackerComponent = (function () {
    function CharBuildTrackerComponent() {
        this.charObject = {};
    }
    CharBuildTrackerComponent.prototype.ngOnInit = function () {
    };
    CharBuildTrackerComponent.prototype.classString = function () {
        if (this.charObject.classes) {
            if (this.charObject.classes.length == 1) {
                return this.charObject.classes[0].className;
            }
            else {
                return this.charObject.classes.map(function (c) { return (c.className + " (" + c.classLevel + ")"); }).join(', ');
            }
        }
    };
    CharBuildTrackerComponent.prototype.ASMod = function (abilityScore) { return Math.floor((abilityScore - 10) / 2); };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildTrackerComponent.prototype, "charObject", void 0);
    CharBuildTrackerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-tracker',
            template: __webpack_require__(713),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [])
    ], CharBuildTrackerComponent);
    return CharBuildTrackerComponent;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-tracker.component.js.map

/***/ }),

/***/ 526:
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
            template: __webpack_require__(714),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 527:
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
            template: __webpack_require__(715),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/home.component.js.map

/***/ }),

/***/ 528:
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
            template: __webpack_require__(716),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/login.component.js.map

/***/ }),

/***/ 529:
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
            template: __webpack_require__(717),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 530:
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
            template: __webpack_require__(718),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/profile.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(340);
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
            template: __webpack_require__(719),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/register.component.js.map

/***/ }),

/***/ 532:
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

/***/ 533:
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

/***/ 690:
/***/ (function(module, exports) {

module.exports = ".container-fluid {height: 100%;}"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ".charbuild-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: start; justify-content: flex-start;\r\n    width: 100%; height: 800px;\r\n}\r\n\r\n.central-container {\r\n    height: 100%; width: 1100px;\r\n    padding: 1% 0 0 1%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: justify; justify-content: space-between;\r\n    -ms-flex-negative: 1;\r\n        flex-shrink: 1;\r\n}\r\n\r\n/* this has margin-top b/c this div randomly started smushing against \r\nthe top nav buttons and I couldn't figure out why */\r\n.charBuild-area {\r\n    min-height: 650px;\r\n    height: 100%; width: 100%;\r\n    background-color: #404040;\r\n    border-radius: 10px 0 0 10px;\r\n    padding: 1%;\r\n    margin-top: 1%;\r\n}\r\n\r\n.sidebar-right {\r\n    height: 100%; width: 400px;\r\n    padding: 1%;\r\n    background-color: #202020;\r\n    border: 2px solid #404040; border-top: none;\r\n    border-radius: 0 0 10px;\r\n}\r\n\r\n.tab-complete {background-color: #375A7F; color: white; font-weight: bold;}\r\n\r\n.current-tab {border-bottom: 2px solid white;}\r\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ".component-container {-ms-flex-pack: center;justify-content: center; -ms-flex-align: center; align-items: center;}\r\n\r\n.as-area {\r\n    width: 100%; height: 80%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: center; justify-content: center; -ms-flex-align: center; align-items: center;\r\n}\r\n\r\n.as-area > * {margin: 0.5%;}\r\n.as-area > .col-op, .as-inc-container {margin: 0;}\r\n\r\n.col-half, .col-single, .col-double, .col-auto, .col-pb {\r\n    height: 75%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: space-evenly; justify-content: space-evenly;\r\n    background-color: #202020; color: lightgray;\r\n    border-radius: 10px;\r\n}\r\n\r\n.col-half {width: 5%;}\r\n.col-single {width: 7%;}\r\n.col-double {width: 14%;}\r\n.col-auto {width: -webkit-min-content;width: -moz-min-content;width: min-content;}\r\n.col-pb {width: 10%;}\r\n\r\n.col-op {\r\n    height: 75%; width: auto;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: space-evenly; justify-content: space-evenly;\r\n    color: lightgray;\r\n}\r\n\r\n.col-op > small {min-height: 5%;}\r\n\r\n.center {-ms-flex-pack: center;justify-content: center;}\r\n\r\ndiv > small {width: 100%; text-align: center; margin-top: 0.5em; color: #407cbd}\r\n\r\n.as-row {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: distribute; justify-content: space-around; -ms-flex-align: center; align-items: center;\r\n    width: 100%; height: 17%;\r\n    padding: 5%;\r\n}\r\n\r\n.as-row > * {width: 50%; text-align: center;}\r\n\r\n.dark-box {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: center; justify-content: center; \r\n    width: auto; min-width: 2em;\r\n    background-color: #101010;\r\n    font-size: 125%;\r\n    border-radius: 10%;\r\n}\r\n\r\n.med-font {font-size: 125%;}\r\n.big-font {font-size: 175%;}\r\n.gray {background-color: gray;}\r\n\r\n.pb-row {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: center; justify-content: center; -ms-flex-align: center; align-items: center;\r\n    width: 100%; height: 17%;\r\n}\r\n\r\n.input-group {width: auto;}\r\n\r\ninput {\r\n    background-color: #303030; color: lightgray; \r\n    border-color: #808080;\r\n    font-size: 125%; text-align: center;\r\n    width: 2em;\r\n    border-radius: 10% 0 0 10%;\r\n}\r\ninput:focus {background-color: #303030; color: white;}\r\n\r\n.increment-button {display: -ms-flexbox;display: flex; -ms-flex-pack: center; justify-content: center; background-color: #202020; width: 40%;}\r\n.increment-button:hover {background-color: #101010;}\r\n\r\n.as-inc-container {\r\n    height: 75%; width: auto; min-width: 5%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: start; justify-content: flex-start;\r\n    margin-left: 0;\r\n}\r\n\r\n.as-area > .as-inc-container {margin-left: 0;}\r\n\r\n.as-inc-container > .col-op {height: 100%;}\r\n.as-inc-container > .col-double {height: 100%; width: 4em; margin-left: 10%;}\r\n.as-inc-container > .col-single > .as-row {-ms-flex-align: center;align-items: center;}\r\n\r\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ".multiclass-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    padding: 5%;\r\n    margin-bottom: 5%;\r\n    background-color: #303030;\r\n    border-radius: 10px;\r\n}\r\n\r\n.multiclass-checkbox {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n        justify-content: center; -ms-flex-align: center; align-items: center;\r\n    color: lightgray;\r\n}\r\n\r\n.multiclass-checkbox > * {margin: 5%;}\r\n\r\n.mc-on {background-color: #202020;height: 25%;}\r\n.mc-classlist {margin-left: 5%; color: lightgray;}\r\n.mc-classlist-item {display: -ms-flexbox;display: flex; -ms-flex-pack: justify; justify-content: space-between;}\r\n.mc-classlevel {display: -ms-flexbox;display: flex; -ms-flex-align: center; align-items: center;}\r\n.mc-selected {color: #6082a6; font-weight: bold;}\r\n.mc-placeholder {color: gray; margin-left: 5%;}\r\n.mc-error {color: pink; text-align: center;}\r\n.mc-charlevel {display: -ms-flexbox;display: flex; -ms-flex-pack: justify; justify-content: space-between; margin: auto 5%;}\r\n\r\nhr {border-color: white; margin-bottom: 0;}\r\n\r\n.increment-button {\r\n    display: -ms-flexbox;\r\n    display: flex; \r\n    -ms-flex-pack: center; \r\n        justify-content: center; -ms-flex-align: center; align-items: center;\r\n    height: 15px; width: 15px;\r\n    padding: 0;\r\n}\r\n\r\n.class-detail {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: center; justify-content: center;\r\n    width: 90%;\r\n    text-align: center;\r\n    margin: 3%;\r\n}\r\n\r\n/* this is here b/c I couldn't figure out why the decisions container\r\nwas smushed against the select class button... */\r\n.decisions {margin-top: 3%;} "

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ".start-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: center; justify-content: center;\r\n}\r\n\r\n.name-container, .starting-level-container {display: -ms-flexbox;display: flex;}\r\n\r\n.start-container {height: 100%;}\r\n\r\n.inputs {margin-top: -10%;}\r\n.inputs > * {margin: 20px; height: 45px;}\r\n\r\ninput {background-color: #303030; color: white; text-align: center; font-size: 125%;}\r\n\r\ninput:focus {background-color: #303030; color: white;}\r\n\r\n.input-group-text {width: 200px;}\r\n\r\n.starting-level > input {width: 75px;}\r\n\r\n.increment-button {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: center; justify-content: center;\r\n    background-color: #202020;\r\n}\r\n\r\n.increment-button:hover {background-color: #101010;}\r\n\r\n.error {position: absolute; bottom: 30%; color: pink;}\r\n\r\n/* hides the increment buttons on number-type inputs */\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    margin: 0; \r\n}"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ".tracker-column {\r\n    width: 100%; height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    background-color: #303030;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n}\r\n\r\n.tracker-column > * {margin: 1% 0;}\r\n\r\n.rounded-box {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: space-evenly; justify-content: space-evenly;\r\n    width: 100%; min-height: 2em;\r\n    background-color: #202020; color: lightgray;\r\n    border-radius: 15px;\r\n    padding: 1% 5%;\r\n    font-size: 90%;\r\n}\r\n\r\n.box-inner-row {display: -ms-flexbox;display: flex; -ms-flex-pack: justify; justify-content: space-between; min-height: 1em;}\r\n\r\n.box-column {display: -ms-flexbox;display: flex; -ms-flex-direction: column; flex-direction: column; -ms-flex-pack: justify; justify-content: space-between;}\r\n.box-column > * {margin: 2% auto;}\r\n.box-row {display: -ms-flexbox;display: flex;}\r\n\r\n.normal-font {font-size: 100%;}\r\n.flex-column {-ms-flex-direction: column;flex-direction: column;}\r\n.space-around {-ms-flex-pack: distribute;justify-content: space-around;}\r\n.space-between {-ms-flex-pack: justify;justify-content: space-between;}\r\n\r\n.hp-stam-res {display: -ms-flexbox;display: flex; -ms-flex-direction: column; flex-direction: column; -ms-flex-align: center; align-items: center;}\r\n.hp-stam-res > strong {font-size: 110%; -ms-flex-positive: 1; flex-grow: 1; min-height: 1em;}\r\n\r\n.hp {color: darksalmon;}\r\n.stamina {color: darkseagreen;}\r\n.resolve {color: lightblue;}\r\n\r\n.w-30 {width: 29%;}\r\n.w-40 {width: 39%;}\r\n\r\n.AS > .box-inner-row {-ms-flex-pack: justify;justify-content: space-between;}\r\n.saves > .box-inner-row, .AC > .box-inner-row {-ms-flex-pack: distribute;justify-content: space-around;}\r\n.attack-bonuses {-ms-flex-positive: 1;flex-grow: 1;}\r\n.initiative {-ms-flex-positive: 0.5;flex-grow: 0.5;}"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ".dashboard-container {\r\n    width: 100%;\r\n    height: 700px;\r\n}\r\n\r\n.char-container {\r\n    background-color: #404040;\r\n    border-radius: 10px;\r\n    height: 100%; width: 30%;\r\n    padding: 10px;\r\n}\r\n\r\n.char-card {\r\n    height: 80px;\r\n}\r\n\r\n.char-card:hover * {\r\n    background-color: #252525;\r\n    color: white;\r\n}\r\n\r\n.add-char {\r\n    display:-ms-flexbox;\r\n    display:flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: space-evenly; justify-content: space-evenly;\r\n    color: #9c9c9c;\r\n    height: 100%;\r\n}\r\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ".navitem-spacing {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: row; flex-direction: row; \r\n    -ms-flex-pack: distribute; \r\n        justify-content: space-around;\r\n    margin-right: 3%;\r\n}\r\n\r\n.navitem-spacing > * {margin: 10%;}"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<div class=\"charbuild-container\">\n  <div class=\"central-container\">\n    <h3>Character Builder</h3>\n    <div class=\"btn-group\" role=\"group\">\n      <button type=\"button\" class=\"btn btn-secondary {{isComplete.start ? 'tab-complete' : ''}} {{isShown == 'start' ? 'current-tab' : ''}}\" (click)=\"showTab('start')\">Start</button>\n      <button [disabled]=\"isLocked.raceThemeClass\" type=\"button\" class=\"btn btn-secondary {{isComplete.race ? 'tab-complete' : ''}} {{isShown == 'race' ? 'current-tab' : ''}}\" (click)=\"showTab('race')\">Race</button>\n      <button [disabled]=\"isLocked.raceThemeClass\" type=\"button\" class=\"btn btn-secondary {{isComplete.theme ? 'tab-complete' : ''}} {{isShown == 'theme' ? 'current-tab' : ''}}\" (click)=\"showTab('theme')\">Theme</button>\n      <button [disabled]=\"isLocked.raceThemeClass\" type=\"button\" class=\"btn btn-secondary {{isComplete.class ? 'tab-complete' : ''}} {{isShown == 'class' ? 'current-tab' : ''}}\" (click)=\"showTab('class')\">Class</button>\n      <button [disabled]=\"isLocked.AS\" type=\"button\" class=\"btn btn-secondary {{isComplete.AS ? 'tab-complete' : ''}} {{isShown == 'AS' ? 'current-tab' : ''}}\" (click)=\"showTab('AS')\">Ability Scores</button>\n      <button [disabled]=\"isLocked.classChoices\" type=\"button\" class=\"btn btn-secondary {{isComplete.classChoices ? 'tab-complete' : ''}} {{isShown == 'classChoices' ? 'current-tab' : ''}}\" (click)=\"showTab('classChoices')\">Class Choices</button>\n      <button disabled type=\"button\" class=\"btn btn-secondary\">Skills</button>\n      <button disabled type=\"button\" class=\"btn btn-secondary\">Feats</button>\n      <button disabled type=\"button\" class=\"btn btn-secondary\">Spells</button>\n    </div>\n    <div class=\"charBuild-area\">\n      <app-char-build-start [hidden]=\"isShown != 'start'\" (startComplete)=startComplete($event) (startGo)=startGo($event) (startUpdate)=startUpdate($event)></app-char-build-start>\n      <app-char-build-race [hidden]=\"isShown != 'race'\" (raceComplete)=raceComplete($event) (raceUpdate)=raceUpdate($event)></app-char-build-race>\n      <app-char-build-theme [hidden]=\"isShown != 'theme'\" (themeComplete)=themeComplete($event) (themeUpdate)=themeUpdate($event)></app-char-build-theme>\n      <app-char-build-class [hidden]=\"isShown != 'class'\" (classComplete)=classComplete($event) (classUpdate)=classUpdate($event) [charLevel]=\"charObject.charLevel\" [skillsData]=\"skillsData\"></app-char-build-class>\n      <app-char-build-as [hidden]=\"isShown != 'AS'\" (ASComplete)=ASComplete($event) (ASUpdate)=ASUpdate($event) [AS]=\"charObject.AS\" [charLevel]=\"charObject.charLevel\"></app-char-build-as>\n      <app-char-build-class-choices [hidden]=\"isShown != 'classChoices'\"></app-char-build-class-choices>\n    </div>\n  </div>\n  <div class=\"sidebar-right\">\n    <app-char-build-tracker [charObject]=\"charObject\"></app-char-build-tracker>\n    <!-- DEBUGGING BUTTONS; REMOVE FOR PROD \n    <button type=\"button\" (click)=\"logCharObject()\">Log charObject</button>\n    <button type=\"button\" (click)=\"unlockAS()\">Unlock AS</button>\n    -->\n  </div>\n</div>\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container\">\n  <div class=\"as-area\">\n    <div class=\"col-double\">\n      <small>Scores</small>\n      <div class=\"as-row\">\n        <strong>STR</strong><div class=\"dark-box big-font\">{{AS.totals[0]}}</div>\n      </div>\n      <div class=\"as-row\">\n        <strong>DEX</strong><div class=\"dark-box big-font\">{{AS.totals[1]}}</div>\n      </div>\n      <div class=\"as-row\">\n        <strong>CON</strong><div class=\"dark-box big-font\">{{AS.totals[2]}}</div>\n      </div>\n      <div class=\"as-row\">\n        <strong>INT</strong><div class=\"dark-box big-font\">{{AS.totals[3]}}</div>\n      </div>\n      <div class=\"as-row\">\n        <strong>WIS</strong><div class=\"dark-box big-font\">{{AS.totals[4]}}</div>\n      </div>\n      <div class=\"as-row\">\n        <strong>CHA</strong><div class=\"dark-box big-font\">{{AS.totals[5]}}</div>\n      </div>\n    </div>\n    <div class=\"col-op\"><small></small><div *ngFor=\"let n of [1,2,3,4,5,6]\" class=\"as-row\">=</div></div>\n    <div class=\"col-half\">\n      <small>Base</small>\n      <div class=\"as-row med-font\">10</div>\n      <div class=\"as-row med-font\">10</div>\n      <div class=\"as-row med-font\">10</div>\n      <div class=\"as-row med-font\">10</div>\n      <div class=\"as-row med-font\">10</div>\n      <div class=\"as-row med-font\">10</div>\n    </div>\n    <div class=\"col-op\"><small></small><div *ngFor=\"let n of [1,2,3,4,5,6]\" class=\"as-row\">+</div></div>\n    <div class=\"col-half\">\n      <small>Race</small>\n      <div *ngFor=\"let raceAS of AS.race; let i = index\" class=\"as-row med-font\">{{AS.race[i] || ''}}</div>\n    </div>\n    <div class=\"col-op\"><small></small><div *ngFor=\"let n of [1,2,3,4,5,6]\" class=\"as-row\">+</div></div>\n    <div class=\"col-half\">\n      <small>Theme</small>\n      <div *ngFor=\"let themeAS of AS.theme; let i = index\" class=\"as-row med-font\">{{AS.theme[i] || ''}}</div>\n    </div>\n    <div class=\"col-op\"><small></small><div *ngFor=\"let n of [1,2,3,4,5,6]\" class=\"as-row\">+</div></div>\n    <div class=\"col-pb\">\n      <small>Point Buy ({{pbCount}}/10)</small>\n      <div *ngFor=\"let pb of AS.pb; let i = index\" class=\"pb-row\">\n        <div class=\"input-group input-group-lg\">\n          <input disabled type=\"number\" [(ngModel)]=\"AS.pb[i]\" name=\"AS.pb[i]\">\n          <div class=\"btn-group-vertical\">\n            <button type=\"button\" class=\"btn btn-sm btn-secondary increment-button\" (click)=\"pbInc(1,i)\">\n              <i class=\"fas fa-caret-up\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-secondary increment-button\" (click)=\"pbInc(-1,i)\">\n              <i class=\"fas fa-caret-down\"></i>\n            </button>\n          </div>      \n        </div>\n      </div>\n    </div>\n    <div *ngFor=\"let level of ASIncLevels()\" class=\"as-inc-container\">\n      <div class=\"col-op\"><small></small><div *ngFor=\"let n of [1,2,3,4,5,6]\" class=\"as-row\">+</div></div>\n      <div class=\"col-double\">\n        <small>Level {{level}}:</small>\n        <div *ngFor=\"let n of [1,2,3,4,5,6]; let i = index\" class=\"as-row\">\n          <span *ngIf=\"incValue(level,i)\" class=\"med-font\">{{incValue(level,i)}}</span>\n          <input type=\"checkbox\" [disabled]=\"isLevelIncDisabled(level)\" [checked]=\"incValue(level,i)\" (change)=\"ASInc($event.target,level,i)\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<p>\n  char-build-class-choices works!\n</p>\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container\">\n  <div class=\"list-column\">\n    <div *ngIf=\"charLevel > 1\" class=\"multiclass-container {{multiclass ? 'mc-on' : ''}}\">\n      <div class=\"multiclass-checkbox\">\n        <input type=\"checkbox\" id=\"multiclassCheck\" [(ngModel)]=\"multiclass\" name=\"multiclass\" (change)=\"mcToggle()\">\n        <label class=\"{{multiclass ? 'mc-selected' : ''}}\" for=\"multiclassCheck\">Multiclass</label>\n      </div>\n      <div *ngIf=\"multiclass\">\n        <div class=\"mc-placeholder\" *ngIf=\"!selectedClasses.length\">Select a class...</div>\n        <div class=\"mc-classlist\" *ngIf=\"selectedClasses.length\">\n          <div *ngFor=\"let class of selectedClasses\" class=\"mc-classlist-item\">\n            <div>{{class.className}}</div>\n            <div class=\"mc-classlevel\">\n              <div>{{class.classLevel}}</div>\n              <div class=\"btn-group ml-1\">\n                <button type=\"button\" class=\"btn btn-sm btn-secondary increment-button\" (click)=\"inc(class.className,1)\">\n                  <i class=\"fas fa-xs fa-caret-up\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-sm btn-secondary increment-button\" (click)=\"inc(class.className,-1)\">\n                  <i class=\"fas fa-xs fa-caret-down\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"mc-placeholder\" *ngIf=\"selectedClasses.length == 1\">Select another class...</div>\n        <div class=\"mc-footer\">\n          <hr>\n          <div class=\"mc-charlevel\">\n            <small>Character Level</small><small>{{charLevel}}</small>\n          </div>\n          <div class=\"mc-error\">\n            <small *ngIf=\"mcError\">{{mcError}}</small>\n          </div>\n        </div>\n      </div>\n    </div>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let class of classes\" class=\"list-group-item {{selectedClassNames.includes(class.className) ? 'selected' : ''}}\" (click)=\"viewClass(class)\">{{class.className}}</li>\n    </ul>\n  </div>\n  <div class=\"container-column-1\">\n    <div *ngIf=\"!viewedClass\" class=\"placeholder\">Select a Class...</div>\n    <div *ngIf=\"viewedClass\" class=\"selection-detail\">\n      <h4>{{viewedClass.className}}</h4>\n      <div class=\"stat-box-centered\">\n        <strong>Stamina: {{viewedClass.classData.stamina}} + Con mod</strong>\n        <strong>HP: {{viewedClass.classData.HP}}</strong>\n      </div>\n      <div class=\"selection-desc\">{{viewedClass.description}}</div>\n      <div class=\"stat-box-centered\">\n        <div class=\"class-detail\">\n          <strong>Key Ability Score:</strong>\n          <small>{{viewedClass.keyABDesc}}</small>\n        </div>\n        <div class=\"class-detail\">\n          <strong>Skills:</strong>\n          <span>Ranks per Level: {{viewedClass.classData.skillRanksPerLvl}}</span>\n          <small>{{createSkillList(viewedClass.classData.skills)}}</small>\n        </div>\n        <div class=\"class-detail\">\n          <strong>Proficiencies:</strong>\n          <div class=\"proficiencies\">\n            <small><strong>Armor:</strong> {{viewedClass.classData.proficiencies.armor.join(', ')}}</small>\n          </div>\n          <div class=\"proficiencies\">\n            <small><strong>Weapons:</strong> {{viewedClass.classData.proficiencies.weapons.join(', ')}}</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"select-button-container\">\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"selectClass(viewedClass)\">Choose This Class</button>\n        <div *ngIf=\"classIsSelected(viewedClass.className) && viewedClassDecisions.length\">\n          <div class=\"decisions\">\n            <div *ngFor=\"let decision of viewedClassDecisions\">\n              <div>{{decision.selectLabel}}</div>\n              <select class=\"custom-select\" (change)=\"makeDecision(decision.name,$event.target)\">\n                <option hidden disabled selected>Select</option>\n                <option *ngFor=\"let option of decision.selectOptions\">{{option.name}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-column-1\">\n    <div *ngIf=\"!viewedClass\" class=\"placeholder\"></div>\n    <div *ngIf=\"viewedClass\" class=\"ability-container\">\n      <div *ngFor=\"let feature of viewedClass.classFeatures; let i = index\" class=\"card ability-card\" (click)=\"hideShow(i)\">\n        <div class=\"card-label\">\n          <div>{{feature.name}}</div><div>Level {{feature.level}}</div>\n        </div>\n        <div class=\"ability-desc\" *ngIf=\"showDesc[i]\">\n          {{feature.desc}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container\">\n  <div class=\"list-column\">\n    <ul class=\"list-group\">\n      <li *ngFor=\"let race of races\" class=\"list-group-item {{race.raceName === selectedRace.raceName ? 'selected' : ''}}\" (click)=\"viewRace(race)\">{{race.raceName}}</li>\n    </ul>\n  </div>\n  <div class=\"container-column-1\">\n    <div *ngIf=\"!viewedRace\" class=\"placeholder\">Select a Race...</div>\n    <div *ngIf=\"viewedRace\" class=\"selection-detail\">\n      <h4>{{viewedRace.raceName}}</h4>\n      <div class=\"stat-box-centered\">\n        <strong>{{viewedRace.ASDesc}}</strong>\n        <strong>HP: {{viewedRace.raceData.HP}}</strong>\n        <small>{{viewedRace.sizeType}}</small>\n      </div>\n      <div class=\"selection-desc\">{{viewedRace.description}}</div>\n      <div class=\"select-button-container\">\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"selectRace(viewedRace)\">Choose This Race</button>\n        <div *ngIf=\"viewedRace.raceName === selectedRace.raceName && viewedRaceDecisions && showDecisions\">\n          <div class=\"decisions\">\n            <div *ngFor=\"let decision of viewedRaceDecisions\">\n              <div>{{decision.selectLabel}}</div>\n              <select class=\"custom-select\" (change)=\"makeDecision(decision.name,$event.target)\">\n                <option hidden disabled selected>Select</option>\n                <option *ngFor=\"let option of decision.selectOptions\">{{option.name}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-column-1\">\n    <div *ngIf=\"!viewedRace\" class=\"placeholder\"></div>\n    <div *ngIf=\"viewedRace\" class=\"ability-container\">\n      <div *ngFor=\"let ability of viewedRace.racialAbilities; let i = index\" class=\"card ability-card\" (click)=\"hideShow(i)\">\n        <div class=\"card-label\">\n          <div>{{ability.name}}</div>\n        </div>\n        <div class=\"ability-desc\" *ngIf=\"showDesc[i]\">\n          {{ability.description}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<div class=\"start-container\">\n  <div class=\"inputs\">\n    <div class=\"name-container\">\n      <div class=\"input-group input-group-lg name\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Character Name</span>\n        </div>\n        <input type=\"text\" [(ngModel)]=\"charName\" name=\"charName\" (change)=\"updateParent()\">\n      </div>\n    </div>\n    <div class=\"starting-level-container\">\n      <div class=\"input-group input-group-lg starting-level\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Starting Level</span>\n        </div>\n        <input disabled type=\"number\" [(ngModel)]=\"startingLevel\" name=\"startingLevel\">\n        <div class=\"btn-group-vertical\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary increment-button\" (click)=\"inc(1)\">\n            <i class=\"fas fa-caret-up\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-sm btn-secondary increment-button\" (click)=\"inc(-1)\">\n            <i class=\"fas fa-caret-down\"></i>\n          </button>\n        </div>      \n      </div>\n    </div>\n  </div>\n  <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"go()\">Go <i class=\"fas fa-arrow-right ml-2\"></i></button>\n  <div *ngIf=\"error\" class=\"error mt-3\">{{ error }}</div>\n</div>"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container\">\n  <div class=\"list-column\">\n    <ul class=\"list-group\">\n      <li *ngFor=\"let theme of themes\" class=\"list-group-item {{theme.themeName === selectedTheme.themeName ? 'selected' : ''}}\" (click)=\"viewTheme(theme)\">{{theme.themeName}}</li>\n    </ul>\n  </div>\n  <div class=\"container-column-1\">\n    <div *ngIf=\"!viewedTheme\" class=\"placeholder\">Select a Theme...</div>\n    <div *ngIf=\"viewedTheme\" class=\"selection-detail\">\n      <h4>{{viewedTheme.themeName}}</h4>\n      <div class=\"stat-box-centered\">\n        <strong>{{viewedTheme.ASDesc}}</strong>\n      </div>\n      <div class=\"selection-desc\">{{viewedTheme.description}}</div>\n      <div class=\"select-button-container\">\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"selectTheme(viewedTheme)\">Choose This Theme</button>\n        <div *ngIf=\"viewedThemeDecisions && showDecisions\">\n          <div class=\"decisions\">\n            <div *ngFor=\"let decision of viewedThemeDecisions\">\n              <div>{{decision.selectLabel}}</div>\n              <select class=\"custom-select\" (change)=\"makeDecision(decision.name,$event.target)\">\n                <option hidden disabled selected>Select</option>\n                <option *ngFor=\"let option of decision.selectOptions\">{{option.name}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-column-1\">\n    <div *ngIf=\"!viewedTheme\" class=\"placeholder\"></div>\n    <div *ngIf=\"viewedTheme\" class=\"ability-container\">\n      <div *ngFor=\"let ability of viewedTheme.themeAbilities; let i = index\" class=\"card ability-card\" (click)=\"hideShow(i)\">\n          <div class=\"card-label\">\n            <div>{{ability.name}}</div><div>Level {{ability.level}}</div>\n          </div>\n          <div class=\"ability-desc\" *ngIf=\"showDesc[i]\">\n            {{ability.description}}\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<div class=\"tracker-column\">\n  <div class=\"rounded-box normal-font\">\n    <div *ngIf=\"charObject.charName && charObject.charLevel\">\n      <span>{{charObject.charName}}, Level {{charObject.charLevel}}</span>\n    </div>\n  </div>\n  <div class=\"rounded-box flex-column\">\n    <div class=\"box-inner-row\">\n      <span>Race:</span><div *ngIf=\"charObject.race\"><span>{{charObject.race.raceName}}</span></div>\n    </div>\n    <div class=\"box-inner-row\">\n      <span>Theme:</span><div *ngIf=\"charObject.theme\"><span>{{charObject.theme.themeName}}</span></div>\n    </div>\n    <div class=\"box-inner-row\">\n      <span>Class:</span><span>{{classString()}}</span>\n    </div>\n  </div>\n  <div class=\"rounded-box flex-column\">\n    <div class=\"box-inner-row space-around\">\n      <span *ngIf=\"charObject.race\">Size: {{charObject.race.raceData.size}}</span>\n      <span *ngIf=\"charObject.race\">Speed: {{charObject.race.raceData.speed}}ft</span>\n    </div>\n  </div>\n  <div class=\"rounded-box flex-column\">\n    <div class=\"box-inner-row space-around\">\n      <div class=\"hp-stam-res stamina\">\n        <strong>{{charObject.stamina}}</strong>\n        <small>Stamina</small>\n      </div>\n      <div class=\"hp-stam-res hp\">\n        <strong>{{charObject.HP}}</strong>\n        <small>HP</small>\n      </div>\n      <div class=\"hp-stam-res resolve\">\n        <strong>{{charObject.resolve}}</strong>\n        <small>Resolve</small>\n      </div>\n    </div>\n  </div>\n  <div class=\"box-row space-between\">\n    <div class=\"rounded-box flex-column w-40 AS\">\n      <div class=\"box-inner-row\">\n        <span>Str</span><strong>{{charObject.AS.totals[0]}} ({{ASMod(charObject.AS.totals[0])}})</strong>\n      </div>\n      <div class=\"box-inner-row\">\n        <span>Dex</span><strong>{{charObject.AS.totals[1]}} ({{ASMod(charObject.AS.totals[1])}})</strong>\n      </div>\n      <div class=\"box-inner-row\">\n        <span>Con</span><strong>{{charObject.AS.totals[2]}} ({{ASMod(charObject.AS.totals[2])}})</strong>\n      </div>\n      <div class=\"box-inner-row\">\n        <span>Int</span><strong>{{charObject.AS.totals[3]}} ({{ASMod(charObject.AS.totals[3])}})</strong>\n      </div>\n      <div class=\"box-inner-row\">\n        <span>Wis</span><strong>{{charObject.AS.totals[4]}} ({{ASMod(charObject.AS.totals[4])}})</strong>\n      </div>\n      <div class=\"box-inner-row\">\n        <span>Cha</span><strong>{{charObject.AS.totals[5]}} ({{ASMod(charObject.AS.totals[5])}})</strong>\n      </div>\n    </div>\n    <div class=\"box-column w-30\">\n      <div class=\"rounded-box flex-column saves\">\n        <div class=\"box-inner-row\">\n          <small>Fort (Con)</small><strong>{{charObject.saves.fort}}</strong>\n        </div>\n        <div class=\"box-inner-row\">\n          <small>Ref (Dex)</small><strong>{{charObject.saves.ref}}</strong>\n        </div>\n        <div class=\"box-inner-row\">\n          <small>Will (Wis)</small><strong>{{charObject.saves.will}}</strong>\n        </div>\n      </div>\n      <div class=\"rounded-box flex-column AC\">\n        <div class=\"box-inner-row\">\n          <small>EAC</small><strong>19</strong>\n        </div>\n        <div class=\"box-inner-row\">\n          <small>KAC</small><strong>20</strong>\n        </div>\n        <div class=\"box-inner-row\">\n          <small>vs. CM</small><strong>28</strong>\n        </div>\n      </div>\n    </div>\n    <div class=\"box-column w-30\">\n      <div class=\"rounded-box flex-column attack-bonuses\">\n        <div class=\"box-inner-row space-around\">\n          <small>Attack Bonuses</small>\n        </div>\n        <div class=\"box-inner-row\">\n          <small>Melee (Str)</small><strong>{{charObject.bab.melee}}</strong>\n        </div>\n        <div class=\"box-inner-row\">\n          <small>Ranged (Dex)</small><strong>{{charObject.bab.ranged}}</strong>\n        </div>\n        <div class=\"box-inner-row\">\n          <small>Thrown (Str)</small><strong>{{charObject.bab.thrown}}</strong>\n        </div>\n      </div>\n      <div class=\"rounded-box flex-column initiative\">\n        <div class=\"box-inner-row\">\n          <span>Initiative:</span><strong>{{charObject.ini}}</strong>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<div class=\"dashboard-container\">\n    <div class=\"char-container\">\n        <div class=\"card char-card\">\n            <div class=\"add-char\" (click)=\"redirectCharBuild()\">\n                <i class=\"fas fa-2x fa-plus-circle\"></i>\n                <span>Create Character</span>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron text-center mt-5\">\n    <h1>StarSeeker</h1>\n    <p class=\"lead\">A hub for all things Starfinder</p>\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3>Character Builder</h3>\n      <p>Build your own character from scratch:</p>\n      <button class=\"btn btn-primary\" [routerLink]=\"['/charBuild']\">Character Builder</button>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Create & Manage Campaigns</h3>\n      <p>Create campaigns and invite friends. Use StarSeeker as a hub for your character sheets and party inventories. Allow your players to make in-game purchases of gear in a controlled setting. Distribute loot without all the manual bookkeeping.</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>All Things Starfinder</h3>\n      <p>In addition to characters, create starships, computers, and mechanic drones. Manage your equipment and more easliy track ammunition, charges, encumbrance, and item upgrades.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userName\" name=\"userName\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark navbar-default\">\n  <a class=\"navbar-brand\" href=\"#\">StarSeeker</a>\n  <ul class=\"navbar-nav mr-auto navbar-left\">\n    <li><a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a></li>\n  </ul>\n  <div class=\"navbar-nav navbar-right navitem-spacing\">\n    <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Login</a>\n    <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/register\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Register</a>\n    <a *ngIf=\"authService.loggedIn()\" routerLink=\"/dashboard\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Dashboard</a>\n    <a *ngIf=\"authService.loggedIn()\" routerLink=\"/profile\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Profile</a>\n    <a *ngIf=\"authService.loggedIn()\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a>\n  </div>\n</nav>"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{ user.name }}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.userName}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header mt-3\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"userName\" name=\"userName\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(399);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(534);
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
        this.url = (window.location.origin == 'http://localhost:4200') ? 'http://localhost:3000' : window.location.origin;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.url + '/users/profile', { headers: headers })
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

},[757]);
//# sourceMappingURL=main.bundle.map