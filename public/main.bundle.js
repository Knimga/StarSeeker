webpackJsonp([1,4],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharClassService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharClassService = (function () {
    function CharClassService(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.dataService.getClassFeatures().subscribe(function (classFeatures) {
            _this.classFeatures = classFeatures;
        }, function (err) { console.log(err); return false; });
    }
    CharClassService.prototype.allFeatures = function () { return this.classFeatures; };
    CharClassService.prototype.oneClassFeatures = function (className) { return this.classFeatures.filter(function (f) { return f.className == className; }); };
    CharClassService.prototype.featuresByClassLevel = function (className, classLevel) {
        return this.classFeatures.filter(function (f) { return f.className == className && f.level <= classLevel; });
    };
    CharClassService.prototype.featuresWithDecisions = function (className) {
        return this.classFeatures.filter(function (f) { return f.className == className && f.decisionRequired; });
    };
    CharClassService.prototype.activeFeatures = function (classArray) {
        var _this = this;
        var activeClassFeatures = [];
        classArray.forEach(function (c) {
            return activeClassFeatures = activeClassFeatures.concat(_this.featuresByClassLevel(c.className, c.classLevel));
        });
        return activeClassFeatures;
    };
    CharClassService.prototype.getPassiveEffects = function (activeFeatures, classes) {
        var _this = this;
        var effects = [];
        var _loop_1 = function(f) {
            if (activeFeatures[f].effects) {
                if (typeof activeFeatures[f].effects == 'string')
                    activeFeatures[f].effects = JSON.parse(activeFeatures[f].effects);
                activeFeatures[f].effects.forEach(function (e) {
                    if (e.scaledValue)
                        e.value = e.scaledValue[_this.getClassLevel(activeFeatures[f].className, classes) - 1];
                });
                effects = effects.concat(activeFeatures[f].effects);
            }
        };
        for (var f = 0; f < activeFeatures.length; f++) {
            _loop_1(f);
        }
        return effects;
    };
    CharClassService.prototype.getClassLevel = function (className, classes) { return classes.find(function (c) { return c.className == className; }).classLevel || null; };
    CharClassService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === 'function' && _a) || Object])
    ], CharClassService);
    return CharClassService;
    var _a;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-class.service.js.map

/***/ }),

/***/ 341:
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

/***/ 399:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 399;


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(519);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/main.js.map

/***/ }),

/***/ 518:
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
            template: __webpack_require__(709),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/app.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_data_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_char_class_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_char_build_char_build_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_char_build_child_components_char_build_start_char_build_start_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_char_build_child_components_char_build_race_char_build_race_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_char_build_child_components_char_build_theme_char_build_theme_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_char_build_child_components_char_build_class_char_build_class_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_char_build_child_components_char_build_tracker_char_build_tracker_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_char_build_child_components_char_build_as_char_build_as_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_char_build_child_components_char_build_class_choices_char_build_class_choices_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_char_build_child_components_char_build_skills_char_build_skills_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_char_build_child_components_char_build_feats_char_build_feats_component__ = __webpack_require__(524);
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
    { path: 'charBuild', component: __WEBPACK_IMPORTED_MODULE_17__components_char_build_char_build_component__["a" /* CharBuildComponent */] }
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
                __WEBPACK_IMPORTED_MODULE_17__components_char_build_char_build_component__["a" /* CharBuildComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_char_build_child_components_char_build_start_char_build_start_component__["a" /* CharBuildStartComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_char_build_child_components_char_build_race_char_build_race_component__["a" /* CharBuildRaceComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_char_build_child_components_char_build_theme_char_build_theme_component__["a" /* CharBuildThemeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_char_build_child_components_char_build_class_char_build_class_component__["a" /* CharBuildClassComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_char_build_child_components_char_build_tracker_char_build_tracker_component__["a" /* CharBuildTrackerComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_char_build_child_components_char_build_as_char_build_as_component__["a" /* CharBuildASComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_char_build_child_components_char_build_class_choices_char_build_class_choices_component__["a" /* CharBuildClassChoicesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_char_build_child_components_char_build_skills_char_build_skills_component__["a" /* CharBuildSkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_char_build_child_components_char_build_feats_char_build_feats_component__["a" /* CharBuildFeatsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_16__services_char_class_service__["a" /* CharClassService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/app.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_char_class_service__ = __webpack_require__(109);
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
    function CharBuildComponent(dataService, charClassService) {
        this.dataService = dataService;
        this.charClassService = charClassService;
        this.charObject = {
            charName: String,
            charLevel: Number,
            race: Object,
            theme: Object,
            classes: Array,
            classChoices: Array,
            passiveEffects: Array,
            AS: { totals: Array, race: Array, theme: Array, pb: Array, levelInc: Array },
            keyAS: Number,
            HP: Number,
            stamina: Number,
            resolve: Number,
            ini: Number,
            saves: { fort: Number, ref: Number, will: Number },
            bab: { melee: Number, ranged: Number, thrown: Number },
            skillRanks: Number,
            skills: { classSkills: Array, totals: Array, mod: Array, ranks: Array, trained: Array, bonuses: Array }
        };
        this.decisionsMade = [];
        this.decisionsToMake = [];
        this.classSummary = [];
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
            classChoices: [],
            passiveEffects: [],
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
            bab: { melee: null, ranged: null, thrown: null },
            skillRanks: 0,
            skills: {
                classSkills: Array(20).fill(0),
                totals: Array(20).fill(0),
                mod: Array(20).fill(0),
                ranks: Array(20).fill(0),
                trained: Array(20).fill(0),
                bonuses: Array(20).fill(0)
            }
        };
        this.raceThemeClassASLocked = true;
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
            _this.skillsData = skills.sort(function (a, b) { return (a.skillId > b.skillId) ? 1 : -1; });
        }, function (err) { console.log(err); return false; });
        this.dataService.getBabSaves().subscribe(function (babSaves) {
            _this.babSavesData = babSaves[0];
        }, function (err) { console.log(err); return false; });
        this.dataService.getProficiencies().subscribe(function (proficiencies) {
            _this.proficiencies = proficiencies;
        }, function (err) { console.log(err); return false; });
        this.dataService.getClassAbilities().subscribe(function (classAbilities) {
            _this.classAbilities = classAbilities;
        }, function (err) { console.log(err); return false; });
    };
    CharBuildComponent.prototype.sumOfClassLevels = function () { return this.charObject.classes.map(function (c) { return c.classLevel; }).reduce(function (a, b) { return a + b; }); };
    CharBuildComponent.prototype.log = function () { console.log(this.charObject.passiveEffects); }; //dev purposes
    CharBuildComponent.prototype.logCharObject = function () { console.log(this.charObject); };
    CharBuildComponent.prototype.showTab = function (tabName) { this.isShown = tabName; };
    CharBuildComponent.prototype.startGo = function (nameLevel) {
        this.charObject.charName = nameLevel.charName;
        this.charObject.charLevel = nameLevel.startingLevel;
        this.raceThemeClassASLocked = false;
        this.showTab('race');
    };
    CharBuildComponent.prototype.startComplete = function (boolean) { this.isComplete.start = boolean; };
    CharBuildComponent.prototype.raceComplete = function (boolean) { this.isComplete.race = boolean; };
    CharBuildComponent.prototype.themeComplete = function (boolean) { this.isComplete.theme = boolean; };
    CharBuildComponent.prototype.classComplete = function (boolean) { this.isComplete.class = boolean; };
    CharBuildComponent.prototype.ASComplete = function (boolean) { this.isComplete.AS = boolean; };
    CharBuildComponent.prototype.classChoicesComplete = function (boolean) { this.isComplete.classChoices = boolean; };
    CharBuildComponent.prototype.skillsComplete = function (boolean) { this.isComplete.skills = boolean; };
    CharBuildComponent.prototype.startUpdate = function (nameLevel) {
        if (this.charObject.classes.length && nameLevel.startingLevel != this.charObject.charLevel) {
            if (this.charObject.classes.length == 1) {
                this.charObject.classes[0].classLevel = nameLevel.startingLevel;
                var activeFeatures = this.charClassService.activeFeatures(this.charObject.classes);
                this.updatePassiveEffects('class', this.charClassService.getPassiveEffects(activeFeatures, this.charObject.classes));
                this.statCalc();
            }
            else if (nameLevel.startingLevel < this.sumOfClassLevels()) {
                if (this.charObject.classes[1].classLevel == 1) {
                    this.charObject.classes.pop();
                }
                else {
                    this.charObject.classes[1].classLevel--;
                }
                var activeFeatures = this.charClassService.activeFeatures(this.charObject.classes);
                this.updatePassiveEffects('class', this.charClassService.getPassiveEffects(activeFeatures, this.charObject.classes));
                this.statCalc();
            }
            this.refreshClassSummary();
        }
        this.charObject.charName = nameLevel.charName;
        this.charObject.charLevel = nameLevel.startingLevel;
    };
    CharBuildComponent.prototype.raceUpdate = function (raceInfo) {
        this.charObject.race = raceInfo.race;
        this.charObject.AS.race = this.charObject.race.raceData.AS;
        this.updateDecisions('race', raceInfo.decisionsMade, raceInfo.decisionsToMake);
        this.processDecisions();
        this.updatePassiveEffects('race', raceInfo.passiveEffects);
        this.statCalc();
    };
    CharBuildComponent.prototype.themeUpdate = function (themeInfo) {
        this.charObject.theme = themeInfo.theme;
        this.charObject.AS.theme = this.charObject.theme.themeData.AS;
        this.updateDecisions('theme', themeInfo.decisionsMade, themeInfo.decisionsToMake);
        this.processDecisions();
        this.statCalc();
    };
    CharBuildComponent.prototype.classUpdate = function (classInfo) {
        this.charObject.classes = classInfo.classes;
        this.updateDecisions('class', classInfo.decisionsMade, classInfo.decisionsToMake);
        this.updatePassiveEffects('class', classInfo.passiveEffects);
        this.processDecisions();
        this.statCalc();
        this.refreshClassSummary();
    };
    CharBuildComponent.prototype.classChoicesUpdate = function (abilitiesArray) { this.charObject.classChoices = abilitiesArray; };
    CharBuildComponent.prototype.ASUpdate = function (newAS) { this.charObject.AS = newAS; this.statCalc(); };
    CharBuildComponent.prototype.skillsUpdate = function (skillUpdates) {
        this.charObject.skills.ranks = skillUpdates.ranks;
        this.updateSkillTraining();
        this.updateSkillTotals();
    };
    CharBuildComponent.prototype.statCalc = function () {
        this.updateAS();
        this.updateKeyAS();
        this.updateStamHPResolve();
        this.updateBabSaves();
        this.updateIni();
        this.updateSkills();
        this.applyPassiveEffects();
        this.updateSkillTotals();
    };
    CharBuildComponent.prototype.updateKeyAS = function () {
        var _this = this;
        if (this.charObject.classes.length) {
            var allKeyASIndices = this.charObject.classes.map(function (c) { return c.keyASIndex; });
            var allKeyASScores = allKeyASIndices.map(function (i) { return _this.charObject.AS.totals[i]; });
            var indexOfHighest = allKeyASScores.indexOf(Math.max.apply(Math, allKeyASScores));
            this.charObject.keyAS = allKeyASIndices[indexOfHighest];
        }
    };
    CharBuildComponent.prototype.updateAS = function () {
        var newAS = [10, 10, 10, 10, 10, 10];
        var AS = this.charObject.AS;
        newAS = this.sumArrays([newAS, AS.race, AS.theme, AS.pb, AS.levelInc], 6);
        this.charObject.AS.totals = newAS;
    };
    CharBuildComponent.prototype.updateStamHPResolve = function () {
        var _this = this;
        if (this.charObject.race && this.charObject.classes) {
            var classHP_1 = 0;
            this.charObject.classes.forEach(function (c) { return classHP_1 += c.hp * c.classLevel; });
            this.charObject.HP = this.charObject.race.raceData.HP + classHP_1;
        }
        if (this.charObject.classes.length) {
            var stamina_1 = 0;
            this.charObject.classes.forEach(function (c) { return stamina_1 += (c.stamina + _this.ASMod(2)) * c.classLevel; });
            this.charObject.stamina = stamina_1;
            var resolve = Math.floor(this.charObject.charLevel / 2) + this.ASMod(this.charObject.keyAS);
            this.charObject.resolve = (resolve < 1) ? 1 : resolve;
        }
    };
    CharBuildComponent.prototype.updateBabSaves = function () {
        var _this = this;
        var bab = 0, fort = 0, ref = 0, will = 0;
        var classes = this.charObject.classes;
        var allBabs = classes.map(function (c) { return _this.babSavesData.bab[c.bab][c.classLevel - 1]; });
        var allForts = classes.map(function (c) { return _this.babSavesData.saves[c.fort][c.classLevel - 1]; });
        var allRefs = classes.map(function (c) { return _this.babSavesData.saves[c.ref][c.classLevel - 1]; });
        var allWills = classes.map(function (c) { return _this.babSavesData.saves[c.will][c.classLevel - 1]; });
        for (var i = 0; i < classes.length; i++) {
            bab += allBabs[i];
            fort += allForts[i];
            ref += allRefs[i];
            will += allWills[i];
        }
        this.charObject.bab = { melee: bab + this.ASMod(0), ranged: bab + this.ASMod(1), thrown: bab + this.ASMod(0) };
        this.charObject.saves = { fort: fort + this.ASMod(2), ref: ref + this.ASMod(1), will: will + this.ASMod(4) };
    };
    CharBuildComponent.prototype.updateIni = function () { this.charObject.ini = this.ASMod(1); };
    CharBuildComponent.prototype.updateSkills = function () {
        var _this = this;
        this.updateClassSkills();
        this.charObject.skills.mod = this.skillsData.map(function (s) { return _this.ASMod(s.ASIndex) || 0; });
        this.charObject.skillRanks = this.skillRanks();
        this.updateSkillTraining();
        this.updateSkillBonuses();
    };
    CharBuildComponent.prototype.updateClassSkills = function () {
        var classSkills = Array(this.skillsData.length).fill(0);
        for (var c = 0; c < this.charObject.classes.length; c++) {
            for (var s = 0; s < classSkills.length; s++) {
                if (this.charObject.classes[c].classSkills.includes(this.skillsData[s].skillId))
                    classSkills[s] = 1;
            }
        }
        if (this.charObject.theme) {
            var themeSkillId = this.charObject.theme.themeData.themeSkillId;
            if (themeSkillId) {
                var index = this.getSkillIndex(themeSkillId);
                if (classSkills[index] == 1) {
                    this.themeSkillBonus = true;
                }
                else {
                    classSkills[index] = 1;
                    this.themeSkillBonus = false;
                }
            }
        }
        this.charObject.skills.classSkills = classSkills;
    };
    CharBuildComponent.prototype.updateSkillTraining = function () {
        var trained = Array(20).fill(0);
        for (var i = 0; i < this.skillsData.length; i++) {
            if (this.charObject.skills.classSkills[i] && this.charObject.skills.ranks[i])
                trained[i] = 3;
        }
        this.charObject.skills.trained = trained;
    };
    CharBuildComponent.prototype.updateSkillBonuses = function () {
        var _this = this;
        var bonuses = Array(20).fill(0);
        var skillDecisionsMade = this.decisionsMade.filter(function (d) { return d.effect.target == 'skills'; });
        skillDecisionsMade.forEach(function (d) { return bonuses[_this.getSkillIndex(d.effect.skillId)] += d.effect.value; });
        if (this.themeSkillBonus)
            bonuses[this.getSkillIndex(this.charObject.theme.themeData.themeSkillId)] += 1;
        this.charObject.skills.bonuses = bonuses;
    };
    CharBuildComponent.prototype.skillRanks = function () {
        var bucket = 0;
        var classes = this.charObject.classes;
        for (var i = 0; i < classes.length; i++)
            bucket += ((classes[i].skillRanksPerLvl + this.ASMod(3)) * classes[i].classLevel);
        return bucket;
    };
    CharBuildComponent.prototype.updateSkillTotals = function () {
        var skills = this.charObject.skills;
        var totals = this.sumArrays([skills.mod, skills.ranks, skills.trained, skills.bonuses], 20);
        this.charObject.skills.totals = totals;
    };
    CharBuildComponent.prototype.updateDecisions = function (context, decisionsMade, decisionsToMake) {
        this.decisionsMade = this.decisionsMade.filter(function (d) { return d.context != context; });
        this.decisionsToMake = this.decisionsToMake.filter(function (d) { return d.context != context; });
        if (decisionsMade)
            this.decisionsMade = this.decisionsMade.concat(decisionsMade);
        if (decisionsToMake)
            this.decisionsToMake = this.decisionsToMake.concat(decisionsToMake);
    };
    CharBuildComponent.prototype.updatePassiveEffects = function (context, effects) {
        if (effects.length) {
            this.charObject.passiveEffects = this.charObject.passiveEffects.filter(function (e) { return e.context != context; });
            effects.forEach(function (e) { e.context = context; });
            this.charObject.passiveEffects = this.charObject.passiveEffects.concat(effects);
        }
    };
    CharBuildComponent.prototype.processDecisions = function () {
        var _this = this;
        this.decisionsMade.forEach(function (d) {
            switch (d.effect.target) {
                case 'AS':
                    if (d.context == 'race')
                        _this.charObject.AS.race = _this.sumArrays([_this.charObject.race.raceData.AS, d.effect.value], 6);
                    break;
                case 'keyAS':
                    _this.charObject.classes.find(function (c) { return c.className == d.effect.value.className; }).keyASIndex = d.effect.value.keyASIndex;
                    break;
                case 'themeSkillId':
                    _this.charObject.theme.themeData.themeSkillId = d.effect.value;
                    break;
                default: break;
            }
        });
    };
    CharBuildComponent.prototype.applyPassiveEffects = function () {
        var _this = this;
        this.charObject.passiveEffects.forEach(function (e) {
            switch (e.target) {
                case 'skills':
                    e.skillIds.forEach(function (id) { return _this.charObject.skills.bonuses[_this.getSkillIndex(id)] += e.value; });
                    break;
                case 'skillRanks':
                    _this.charObject.skillRanks += (e.value * _this.charObject.charLevel);
                    break;
                default: break;
            }
        });
    };
    CharBuildComponent.prototype.sumArrays = function (arrayOfArrays, returnedLength) {
        var len = returnedLength;
        var bucket = Array(len).fill(0);
        for (var a = 0; a < arrayOfArrays.length; a++) {
            for (var i = 0; i < len; i++)
                bucket[i] += arrayOfArrays[a][i];
        }
        return bucket;
    };
    CharBuildComponent.prototype.refreshClassSummary = function () {
        var classSummary = [];
        var classes = this.charObject.classes;
        if (classes.length) {
            for (var c = 0; c < classes.length; c++)
                classSummary.push({ className: classes[c].className, classLevel: classes[c].classLevel });
        }
        this.classSummary = classSummary;
    };
    CharBuildComponent.prototype.ASMod = function (ASIndex) { return Math.floor((this.charObject.AS.totals[ASIndex] - 10) / 2); };
    CharBuildComponent.prototype.getSkillIndex = function (skillId) { return this.skillsData.indexOf(this.skillsData.find(function (s) { return s.skillId == skillId; })); };
    CharBuildComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build',
            template: __webpack_require__(710),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_char_class_service__["a" /* CharClassService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_char_class_service__["a" /* CharClassService */]) === 'function' && _b) || Object])
    ], CharBuildComponent);
    return CharBuildComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build.component.js.map

/***/ }),

/***/ 521:
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
    //constructor() {}
    CharBuildASComponent.prototype.ngOnInit = function () { };
    CharBuildASComponent.prototype.pbInc = function (value, pbIndex) {
        var _this = this;
        if (this.validatePb(value, pbIndex)) {
            this.AS.pb[pbIndex] += value;
            this.pbCount += value;
            this.ASUpdate.emit(this.AS);
            this.ASComplete.emit(this.isASComplete());
        }
        if (this.pbCount != 10 && this.charLevel >= 5) {
            this.ASIncLevels().forEach(function (l) { return _this.clearASInc(l); });
            this.levelIncUpdate();
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
        return !AS.some(function (abScore) { return abScore > 18; });
    };
    CharBuildASComponent.prototype.getIncArray = function (levelOfInc) { return this.ASIncTracker.find(function (as) { return as.level == levelOfInc; }).inc; };
    CharBuildASComponent.prototype.incValue = function (levelOfInc, ASIndex) { return this.ASIncTracker.find(function (as) { return as.level == levelOfInc; }).inc[ASIndex]; };
    CharBuildASComponent.prototype.clearASInc = function (levelOfInc) { this.ASIncTracker.find(function (as) { return as.level == levelOfInc; }).inc.fill(0); };
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
        var targetArray = this.getIncArray(levelOfInc);
        var counter = 0;
        for (var i = 0; i < 6; i++) {
            if (targetArray[i])
                counter++;
        }
        return !(counter < 4);
    };
    CharBuildASComponent.prototype.isASComplete = function () {
        var ASIncComplete = true;
        var levels = this.ASIncLevels();
        if (levels.length) {
            for (var i = 0; i < levels.length; i++) {
                if (!this.isIncComplete(levels[i]))
                    ASIncComplete = false;
            }
        }
        return this.pbCount == 10 && ASIncComplete;
    };
    CharBuildASComponent.prototype.levelIncUpdate = function () {
        var incLevels = this.ASIncLevels();
        var arrayBucket = [];
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
        var length = Math.floor(this.charLevel / 5);
        var array = [];
        for (var i = 0; i < length; i++)
            array[i] = (i + 1) * 5;
        return array;
    };
    CharBuildASComponent.prototype.isLevelIncDisabled = function (levelOfInc) {
        if (levelOfInc != 5) {
            var levels = this.ASIncLevels(), stoppingPoint = levels.indexOf(levelOfInc);
            for (var i = 0; i < stoppingPoint; i++)
                if (!this.isIncComplete(levels[i]))
                    return true;
        }
        else {
            return (this.pbCount != 10);
        }
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
            template: __webpack_require__(711),
            styles: [__webpack_require__(696), __webpack_require__(87)]
        }), 
        __metadata('design:paramtypes', [])
    ], CharBuildASComponent);
    return CharBuildASComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-as.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_char_class_service__ = __webpack_require__(109);
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
    function CharBuildClassChoicesComponent(charClassService) {
        this.charClassService = charClassService;
        this.decisionTracker = [];
        this.clickedId = '';
        this.showDesc = {};
        this.classChoicesComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.classChoicesUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._classes = [];
    }
    Object.defineProperty(CharBuildClassChoicesComponent.prototype, "classes", {
        get: function () { return this._classes; },
        set: function (classes) {
            if (classes != this._classes) {
                this._classes = classes;
                this.resetSelectionList();
                this.filterData();
                this.refreshDecisionTracker();
            }
        },
        enumerable: true,
        configurable: true
    });
    CharBuildClassChoicesComponent.prototype.ngOnInit = function () { this.resetSelectionList(); };
    CharBuildClassChoicesComponent.prototype.resetSelectionList = function () { this.selectionList = { options: [], selectionCount: 1, selectLabel: '' }; };
    CharBuildClassChoicesComponent.prototype.log = function () { console.log(this.decisionTracker); };
    CharBuildClassChoicesComponent.prototype.refreshDecisionTracker = function () {
        if (this.classes.length) {
            var decisionTracker = [];
            var _loop_1 = function(i) {
                var className = this_1.classes[i].className, classLevel = this_1.classes[i].classLevel;
                var decisions = Object.assign([], this_1.filteredFeatures.filter(function (f) { return f.className == className; }));
                var trackerObject = { className: className, classLevel: classLevel, decisions: [] };
                if (decisions.length) {
                    for (var d = 0; d < decisions.length; d++) {
                        var decision = { name: decisions[d].featureName, id: decisions[d].id, slots: [] };
                        var lvlsRcvd = JSON.parse(decisions[d].levelsReceived).filter(function (l) { return l <= classLevel; });
                        for (var l = 0; l < lvlsRcvd.length; l++) {
                            decision.slots.push({ level: lvlsRcvd[l], selection: null });
                        }
                        trackerObject.decisions.push(decision);
                    }
                }
                decisionTracker.push(trackerObject);
            };
            var this_1 = this;
            for (var i = 0; i < this.classes.length; i++) {
                _loop_1(i);
            }
            this.decisionTracker = decisionTracker;
            this.classChoicesValidate();
        }
        else {
            this.decisionTracker = [];
        }
        this.clickedId = '';
    };
    CharBuildClassChoicesComponent.prototype.filterData = function () {
        this.filteredFeatures = [], this.filteredAbilities = [];
        var _loop_2 = function(i) {
            var className = this_2.classes[i].className, classLevel = this_2.classes[i].classLevel;
            var features = Object.assign([], this_2.charClassService.featuresWithDecisions(className));
            features = features.filter(function (f) { return JSON.parse(f.levelsReceived).some(function (l) { return classLevel >= l; }); });
            var abilities = Object.assign([], this_2.classAbilities.filter(function (a) { return a.className == className; }));
            abilities = abilities.filter(function (a) { return (a.level) ? Number(a.level) <= classLevel : true; });
            this_2.filteredFeatures = this_2.filteredFeatures.concat(features);
            this_2.filteredAbilities = this_2.filteredAbilities.concat(abilities);
        };
        var this_2 = this;
        for (var i = 0; i < this.classes.length; i++) {
            _loop_2(i);
        }
    };
    CharBuildClassChoicesComponent.prototype.clickSlot = function (className, decision, level) {
        this.clickedId = this.createId(decision.name, level);
        this.clicked = { className: className, decisionName: decision.name, level: level };
        this.populateSelections(decision.id, level);
    };
    CharBuildClassChoicesComponent.prototype.populateSelections = function (featureId, level) {
        this.showDesc = {};
        var feature = this.filteredFeatures.find(function (f) { return f.id == featureId; });
        var options;
        var label = 'SELECT ONE';
        switch (feature.decisionType) {
            case 'ability':
                options = this.filteredAbilities.filter(function (a) { return a.featureId == feature.id && ((a.level) ? a.level <= level : true); });
                break;
            case 'skillList':
                options = this.skillSelectionList(feature.skillIds, feature.featureName);
                break;
            default: break;
        }
        this.selectionList = { options: options, selectionCount: 1, selectLabel: label };
        for (var i = 0; i < this.selectionList.options.length; i++) {
            this.showDesc[i] = false;
        }
    };
    CharBuildClassChoicesComponent.prototype.selectAbility = function (abilityObject) {
        var _this = this;
        if (this.canSelect(abilityObject)) {
            this.decisionTracker
                .find(function (c) { return c.className == _this.clicked.className; }).decisions
                .find(function (d) { return d.name == _this.clicked.decisionName; }).slots
                .find(function (s) { return s.level == _this.clicked.level; }).selection = abilityObject;
        }
        this.classChoicesValidate();
    };
    CharBuildClassChoicesComponent.prototype.removeAbility = function (className, decisionName, level) {
        this.decisionTracker.find(function (c) { return c.className == className; }).decisions
            .find(function (d) { return d.name == decisionName; }).slots
            .find(function (s) { return s.level == level; }).selection = null;
        this.classChoicesValidate();
    };
    CharBuildClassChoicesComponent.prototype.canSelect = function (abilityObject) {
        var _this = this;
        var tests = [];
        if (abilityObject.id)
            tests.push(this.timesChosen(abilityObject.id) < (abilityObject.stack ? abilityObject.stack : 1));
        if (abilityObject.preReqs)
            JSON.parse(abilityObject.preReqs).forEach(function (p) { return tests.push(_this.timesChosen(p) > 0); });
        return (tests.some(function (t) { return !t; })) ? false : true;
    };
    CharBuildClassChoicesComponent.prototype.hasRemoveOption = function (className, decision, level) {
        var tests = [
            this.isClicked(decision.name, level),
            this.selectionFilled(className, decision.name, level),
            !this.isPreReqToOther(className, decision.name, level)
        ];
        return (tests.some(function (t) { return !t; })) ? false : true;
    };
    CharBuildClassChoicesComponent.prototype.isPreReqToOther = function (className, decisionName, level) {
        var ability = this.getSelection(className, decisionName, level);
        if (ability) {
            var preReqIds = [];
            for (var c = 0; c < this.decisionTracker.length; c++) {
                for (var d = 0; d < this.decisionTracker[c].decisions.length; d++) {
                    for (var s = 0; s < this.decisionTracker[c].decisions[d].slots.length; s++) {
                        if (this.decisionTracker[c].decisions[d].slots[s].selection) {
                            var ability_1 = this.decisionTracker[c].decisions[d].slots[s].selection;
                            if (ability_1.preReqs)
                                preReqIds = preReqIds.concat(JSON.parse(ability_1.preReqs));
                        }
                    }
                }
            }
            return (preReqIds.indexOf(ability.id) != -1) ? true : false;
        }
        else {
            return false;
        }
    };
    CharBuildClassChoicesComponent.prototype.timesChosen = function (abilityId) {
        var counter = 0;
        for (var c = 0; c < this.decisionTracker.length; c++) {
            for (var d = 0; d < this.decisionTracker[c].decisions.length; d++) {
                for (var s = 0; s < this.decisionTracker[c].decisions[d].slots.length; s++) {
                    if (this.decisionTracker[c].decisions[d].slots[s].selection && !this.isClicked(this.decisionTracker[c].decisions[d].name, this.decisionTracker[c].decisions[d].slots[s].level))
                        if (this.decisionTracker[c].decisions[d].slots[s].selection.id == abilityId)
                            counter++;
                }
            }
        }
        return counter;
    };
    CharBuildClassChoicesComponent.prototype.selectionFilled = function (className, decisionName, level) { return (this.getSelection(className, decisionName, level)) ? true : false; };
    CharBuildClassChoicesComponent.prototype.getSelection = function (className, decisionName, level) {
        return this.decisionTracker
            .find(function (c) { return c.className == className; }).decisions
            .find(function (d) { return d.name == decisionName; }).slots
            .find(function (s) { return s.level == level; }).selection;
    };
    CharBuildClassChoicesComponent.prototype.noChoicesToMake = function () {
        var counter = 0;
        for (var c = 0; c < this.decisionTracker.length; c++) {
            for (var d = 0; d < this.decisionTracker[c].decisions.length; d++) {
                for (var s = 0; s < this.decisionTracker[c].decisions[d].slots.length; s++)
                    counter++;
            }
        }
        return (counter) ? false : true;
    };
    CharBuildClassChoicesComponent.prototype.classChoicesValidate = function () {
        var boolean = true;
        for (var c = 0; c < this.decisionTracker.length; c++) {
            for (var d = 0; d < this.decisionTracker[c].decisions.length; d++) {
                for (var s = 0; s < this.decisionTracker[c].decisions[d].slots.length; s++) {
                    if (!this.decisionTracker[c].decisions[d].slots[s].selection)
                        boolean = false;
                }
            }
        }
        this.classChoicesComplete.emit(boolean);
        this.sendToParent();
        return boolean;
    };
    CharBuildClassChoicesComponent.prototype.sendToParent = function () {
        var abilities = [];
        for (var c = 0; c < this.decisionTracker.length; c++) {
            for (var d = 0; d < this.decisionTracker[c].decisions.length; d++) {
                for (var s = 0; s < this.decisionTracker[c].decisions[d].slots.length; s++) {
                    if (this.decisionTracker[c].decisions[d].slots[s].selection) {
                        abilities.push(this.decisionTracker[c].decisions[d].slots[s].selection);
                    }
                }
            }
        }
        this.classChoicesUpdate.emit(abilities);
    };
    CharBuildClassChoicesComponent.prototype.skillSelectionList = function (skillIdArray, featureName) {
        skillIdArray = JSON.parse(skillIdArray);
        var options = [];
        var _loop_3 = function(i) {
            var skill = this_3.skillsData.find(function (s) { return s.skillId == skillIdArray[i]; });
            options.push({ featureName: featureName, optionName: skill.skillName + " (" + skill.ASName + ")" });
        };
        var this_3 = this;
        for (var i = 0; i < skillIdArray.length; i++) {
            _loop_3(i);
        }
        return options;
    };
    CharBuildClassChoicesComponent.prototype.slotPlaceholderText = function (decisionName, slotLevel) {
        return (this.isClicked(decisionName, slotLevel)) ? this.selectionList.selectLabel : 'Click to begin...';
    };
    CharBuildClassChoicesComponent.prototype.hideShow = function (i) { this.showDesc[i] = !this.showDesc[i]; };
    CharBuildClassChoicesComponent.prototype.createId = function (decisionName, level) { return (decisionName + level).toString().replace(/\s/g, ''); };
    CharBuildClassChoicesComponent.prototype.isClicked = function (decisionName, slotLevel) { return this.clickedId == this.createId(decisionName, slotLevel); };
    CharBuildClassChoicesComponent.prototype.classLevel = function (className) { return this.classes.find(function (c) { return c.className == className; }).classLevel; };
    CharBuildClassChoicesComponent.prototype.numToString = function (num) { return ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'][num - 1]; };
    CharBuildClassChoicesComponent.prototype.solarianModeClass = function (solarianMode) { return (solarianMode == 'Photon') ? 'orange' : 'purple'; };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], CharBuildClassChoicesComponent.prototype, "classChoicesComplete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], CharBuildClassChoicesComponent.prototype, "classChoicesUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildClassChoicesComponent.prototype, "skillsData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildClassChoicesComponent.prototype, "classAbilities", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], CharBuildClassChoicesComponent.prototype, "classes", null);
    CharBuildClassChoicesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-class-choices',
            template: __webpack_require__(712),
            styles: [__webpack_require__(697), __webpack_require__(87)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_char_class_service__["a" /* CharClassService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_char_class_service__["a" /* CharClassService */]) === 'function' && _c) || Object])
    ], CharBuildClassChoicesComponent);
    return CharBuildClassChoicesComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-class-choices.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_char_class_service__ = __webpack_require__(109);
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
    function CharBuildClassComponent(dataService, charClassService) {
        this.dataService = dataService;
        this.charClassService = charClassService;
        this.viewedClassDecisions = [];
        this.decisionsMade = [];
        this.selectedClasses = [];
        this.selectedClassNames = [];
        this.activeClassFeatures = [];
        this.showDesc = {};
        this.multiclass = false;
        this.classUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.classComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(CharBuildClassComponent.prototype, "charLevel", {
        get: function () { return this._charLevel; },
        set: function (charLevel) {
            var _this = this;
            this._charLevel = charLevel;
            if (this.selectedClasses.length > 1) {
                var _loop_1 = function(i) {
                    if (!this_1.classSummary.find(function (c) { return c.className == _this.selectedClasses[i].className; }))
                        this_1.selectedClasses.splice(i, 1);
                };
                var this_1 = this;
                for (var i = 0; i < this.selectedClasses.length; i++) {
                    _loop_1(i);
                }
            }
            if (this.charLevel == 1)
                this.multiclass = false;
            this.updateClassNames();
            this.activeClassFeatures = this.charClassService.activeFeatures(this.selectedClasses);
        },
        enumerable: true,
        configurable: true
    });
    CharBuildClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getClasses().subscribe(function (classes) {
            _this.classes = classes;
        }, function (err) { console.log(err); return false; });
    };
    CharBuildClassComponent.prototype.ngOnChanges = function () { this.validate(); };
    CharBuildClassComponent.prototype.log = function () { console.log(this.activeClassFeatures); };
    CharBuildClassComponent.prototype.viewClass = function (clickedClass) {
        this.viewedClass = clickedClass;
        this.showDesc = {};
        if (this.viewedClass.decisions) {
            this.viewedClassDecisions = this.viewedClass.decisions.filter(function (d) { return d.context == 'class'; });
        }
        else {
            this.viewedClassDecisions = [];
        }
        this.viewedClassFeatures = this.charClassService.oneClassFeatures(this.viewedClass.className);
        this.viewedClassFeatures.sort(function (a, b) { return (a.level > b.level) ? 1 : -1; });
        for (var i = 0; i < this.viewedClassFeatures.length; i++)
            this.showDesc[i] = false;
    };
    CharBuildClassComponent.prototype.logAll = function () {
        var bucket = [];
        for (var propName in this) {
            bucket.push({ name: propName, value: this[propName] });
        }
        console.log(bucket);
    };
    CharBuildClassComponent.prototype.selectClass = function (selectedClass) {
        if (this.multiclass) {
            if (this.checkMCLevels(1) && !this.classIsSelected(selectedClass.className)) {
                selectedClass.classLevel = 1;
                this.selectedClasses.push(selectedClass);
                this.updateClassNames();
                this.activeClassFeatures = this.charClassService.activeFeatures(this.selectedClasses);
                this.updateDecisionsUI();
                this.sendUpdate();
            }
        }
        else {
            selectedClass.classLevel = this.charLevel;
            this.selectedClasses = [selectedClass];
            this.decisionsMade = [];
            this.updateClassNames();
            this.activeClassFeatures = this.charClassService.activeFeatures(this.selectedClasses);
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
                this.activeClassFeatures = this.charClassService.activeFeatures(this.selectedClasses);
                this.sendUpdate();
            }
            else if (targetClass_1.classLevel + inc == 0) {
                this.selectedClasses = this.selectedClasses.filter(function (c) { return c.className != targetClass_1.className; });
                this.decisionsMade = this.decisionsMade.filter(function (d) { return d.effect.value.className != targetClass_1.className; });
                this.activeClassFeatures = this.charClassService.activeFeatures(this.selectedClasses);
                this.sendUpdate();
                this.updateClassNames();
            }
        }
        this.validate();
    };
    CharBuildClassComponent.prototype.validate = function () {
        var totalClassLevels = 0;
        for (var i = 0; i < this.selectedClasses.length; i++)
            totalClassLevels += this.selectedClasses[i].classLevel;
        if (totalClassLevels == this.charLevel && this.decisionsComplete()) {
            this.classComplete.emit(true);
        }
        else {
            this.classComplete.emit(false);
        }
    };
    CharBuildClassComponent.prototype.sendUpdate = function () {
        this.classUpdate.emit({
            classes: this.selectedClasses,
            decisionsMade: this.decisionsMade,
            decisionsToMake: this.getDecisionsToMake(),
            passiveEffects: this.charClassService.getPassiveEffects(this.activeClassFeatures, this.selectedClasses)
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
        var decisionObject = {
            name: thisDecision.name,
            context: thisDecision.context,
            effect: thisDecision.selectOptions[selectElement.selectedIndex - 1].effect
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
        var _loop_2 = function(i) {
            if (!this_2.decisionsMade.find(function (d) { return d.name === decisionNames[i]; })) {
                return { value: false };
            }
        };
        var this_2 = this;
        for (var i = 0; i < decisionNames.length; i++) {
            var state_2 = _loop_2(i);
            if (typeof state_2 === "object") return state_2.value;
        }
        return true;
    };
    CharBuildClassComponent.prototype.createSkillList = function (classSkillArray) {
        var _this = this;
        return classSkillArray.map(function (s) {
            var skill = _this.skillsData.find(function (skill) { return skill.skillId == s; });
            return skill.skillName + " (" + skill.ASName + ")";
        }).join(', ');
    };
    CharBuildClassComponent.prototype.createProfList = function (profArray) {
        var _this = this;
        return profArray.map(function (p) {
            return _this.proficiencies.find(function (prof) { return prof.id == p; }).profName;
        }).join(', ');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildClassComponent.prototype, "classSummary", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildClassComponent.prototype, "skillsData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildClassComponent.prototype, "proficiencies", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], CharBuildClassComponent.prototype, "charLevel", null);
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
            template: __webpack_require__(713),
            styles: [__webpack_require__(698), __webpack_require__(87)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_char_class_service__["a" /* CharClassService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_char_class_service__["a" /* CharClassService */]) === 'function' && _d) || Object])
    ], CharBuildClassComponent);
    return CharBuildClassComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-class.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharBuildFeatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharBuildFeatsComponent = (function () {
    function CharBuildFeatsComponent() {
    }
    CharBuildFeatsComponent.prototype.ngOnInit = function () {
    };
    CharBuildFeatsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-feats',
            template: __webpack_require__(714),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [])
    ], CharBuildFeatsComponent);
    return CharBuildFeatsComponent;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-feats.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(81);
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
        this.decisionsToMake = [];
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
    CharBuildRaceComponent.prototype.log = function () { console.log(this.decisionsMade); };
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
        if (!this.hasDecisions(race)) {
            this.showDecisions = false;
            this.decisionsMade = null;
            this.decisionsToMake = null;
            this.raceUpdate.emit({ race: this.selectedRace, decisionsMade: null, decisionsToMake: null, passiveEffects: this.getPassiveEffects(race) });
            this.raceComplete.emit(true);
        }
        else {
            this.raceUpdate.emit({ race: this.selectedRace, decisionsMade: null, decisionsToMake: null, passiveEffects: this.getPassiveEffects(race) });
            this.raceComplete.emit(false);
            this.showDecisions = true;
            this.openDecisionCards();
            this.decisionsMade = [];
            this.decisionsToMake = this.getDecisionsToMake(race);
        }
    };
    CharBuildRaceComponent.prototype.hideShow = function (i) {
        if (this.showDecisions) {
            if (!this.abilityHasDecisions(i))
                this.showDesc[i] = !this.showDesc[i];
        }
        else {
            this.showDesc[i] = !this.showDesc[i];
        }
    };
    CharBuildRaceComponent.prototype.openDecisionCards = function () {
        if (this.selectedRace) {
            var abilities = this.selectedRace.racialAbilities;
            for (var i = 0; i < abilities.length; i++)
                if (abilities[i].decision)
                    this.showDesc[i] = true;
        }
    };
    CharBuildRaceComponent.prototype.makeDecision = function (decision, selectElement, selectionCountIndex) {
        var decisionObject = {
            name: decision.name,
            context: decision.context,
            effect: decision.selectOptions[selectElement.selectedIndex - 1].effect,
            selectionCountIndex: null
        };
        if (decision.selectionCount) {
            decisionObject.selectionCountIndex = selectionCountIndex;
            var matchingDecision_1 = this.decisionsMade.find(function (d) { return d.name == decision.name && d.selectionCountIndex == selectionCountIndex; });
            if (matchingDecision_1)
                this.decisionsMade = this.decisionsMade.filter(function (d) { return d != matchingDecision_1; });
        }
        else if (this.decisionsMade.find(function (d) { return d.name == decision.name; })) {
            this.decisionsMade = this.decisionsMade.filter(function (d) { return d.name != decision.name; });
        }
        this.decisionsMade.push(decisionObject);
        if (this.decisionsComplete()) {
            this.raceUpdate.emit({
                race: this.selectedRace,
                decisionsMade: this.decisionsMade,
                decisionsToMake: this.decisionsToMake,
                passiveEffects: this.getPassiveEffects(this.selectedRace)
            });
            this.raceComplete.emit(true);
        }
    };
    CharBuildRaceComponent.prototype.hasDecisions = function (race) {
        var hasRaceDecisions = false, hasAbilityDecisions = false;
        if (race.decisions)
            hasRaceDecisions = race.decisions.some(function (d) { return d.context == 'race'; });
        for (var i = 0; i < race.racialAbilities.length; i++)
            if (race.racialAbilities[i].decision) {
                if (race.racialAbilities[i].decision.context == 'race')
                    hasAbilityDecisions = true;
            }
        return (hasRaceDecisions || hasAbilityDecisions);
    };
    CharBuildRaceComponent.prototype.decisionsComplete = function () {
        var decisionNames = this.getDecisions(this.selectedRace).map(function (d) { return d.name; });
        var _loop_1 = function(i) {
            if (!this_1.decisionsMade.find(function (d) { return d.name === decisionNames[i]; }))
                return { value: false };
        };
        var this_1 = this;
        for (var i = 0; i < decisionNames.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object") return state_1.value;
        }
        return true;
    };
    CharBuildRaceComponent.prototype.getDecisionsToMake = function (race) {
        var decisionsToMake = [];
        if (race.decisions) {
            for (var i = 0; i < race.decisions.length; i++)
                if (race.decisions[i].context != 'race')
                    decisionsToMake.push(race.decisions[i]);
        }
        for (var a = 0; a < race.racialAbilities.length; a++)
            if (race.racialAbilities[a].decision) {
                if (race.racialAbilities[a].decision.context != 'race')
                    decisionsToMake.push(race.racialAbilities[a].decision);
            }
        return decisionsToMake;
    };
    CharBuildRaceComponent.prototype.getDecisions = function (race) {
        var raceDecisions = [], racialAbilityDecisions = [];
        if (race.decisions)
            raceDecisions = race.decisions.filter(function (d) { return d.context == 'race'; });
        for (var i = 0; i < race.racialAbilities.length; i++) {
            if (race.racialAbilities.decision)
                racialAbilityDecisions.push(race.racialAbilities.decision);
        }
        return raceDecisions.concat(racialAbilityDecisions);
    };
    CharBuildRaceComponent.prototype.getPassiveEffects = function (race) {
        var effects = [];
        var abilities = race.racialAbilities;
        for (var i = 0; i < abilities.length; i++)
            if (abilities[i].effects)
                effects = effects.concat(abilities[i].effects);
        return effects;
    };
    CharBuildRaceComponent.prototype.makeArray = function (number) { return Array(number).fill(0); };
    CharBuildRaceComponent.prototype.abilityHasDecisions = function (i) { return (this.selectedRace.racialAbilities[i].decision) ? true : false; };
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
            template: __webpack_require__(715),
            styles: [__webpack_require__(87)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _c) || Object])
    ], CharBuildRaceComponent);
    return CharBuildRaceComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-race.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_src_facade_async__ = __webpack_require__(411);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharBuildSkillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharBuildSkillsComponent = (function () {
    function CharBuildSkillsComponent() {
        this.skillsUpdate = new __WEBPACK_IMPORTED_MODULE_1__angular_common_src_facade_async__["a" /* EventEmitter */]();
        this.skillsComplete = new __WEBPACK_IMPORTED_MODULE_1__angular_common_src_facade_async__["a" /* EventEmitter */]();
    }
    Object.defineProperty(CharBuildSkillsComponent.prototype, "skillRanks", {
        get: function () { return this._skillRanks; },
        set: function (skillRanks) {
            this._skillRanks = skillRanks;
            this.skillsComplete.emit(this.tabComplete());
        },
        enumerable: true,
        configurable: true
    });
    //constructor() { }
    CharBuildSkillsComponent.prototype.ngOnInit = function () {
        this.ranksSpent = 0;
        this.ranks = Array(20).fill(0);
    };
    CharBuildSkillsComponent.prototype.rankInc = function (value, rankIndex) {
        if (this.canInc(value, rankIndex)) {
            this.ranks[rankIndex] += value;
            this.ranksSpent += value;
        }
        this.skillsUpdate.emit({ ranks: this.ranks });
        this.skillsComplete.emit(this.tabComplete());
    };
    CharBuildSkillsComponent.prototype.canInc = function (value, rankIndex) {
        var newRanksSpent = this.ranksSpent + value;
        var newRankValue = this.ranks[rankIndex] + value;
        var tests = [newRankValue <= this.charLevel, newRankValue >= 0];
        if (value == 1)
            tests.push(newRanksSpent <= this.skillRanks);
        return !tests.some(function (t) { return !t; });
    };
    CharBuildSkillsComponent.prototype.resetRanks = function () {
        this.ranks.fill(0);
        this.ranksSpent = 0;
        this.skillsUpdate.emit({ ranks: this.ranks });
        this.skillsComplete.emit(false);
    };
    CharBuildSkillsComponent.prototype.tabComplete = function () { return this.ranksSpent == this.skillRanks; };
    CharBuildSkillsComponent.prototype.tooManyRanks = function () { return this.ranksSpent > this.skillRanks; };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildSkillsComponent.prototype, "skillsData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], CharBuildSkillsComponent.prototype, "charLevel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildSkillsComponent.prototype, "charSkills", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], CharBuildSkillsComponent.prototype, "skillRanks", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_src_facade_async__["a" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common_src_facade_async__["a" /* EventEmitter */]) === 'function' && _a) || Object)
    ], CharBuildSkillsComponent.prototype, "skillsUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_src_facade_async__["a" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common_src_facade_async__["a" /* EventEmitter */]) === 'function' && _b) || Object)
    ], CharBuildSkillsComponent.prototype, "skillsComplete", void 0);
    CharBuildSkillsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-skills',
            template: __webpack_require__(716),
            styles: [__webpack_require__(700), __webpack_require__(87)]
        }), 
        __metadata('design:paramtypes', [])
    ], CharBuildSkillsComponent);
    return CharBuildSkillsComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-skills.component.js.map

/***/ }),

/***/ 527:
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
    CharBuildStartComponent.prototype.go = function () { if (this.validate())
        this.startGo.emit(this.startData()); };
    CharBuildStartComponent.prototype.name = function () {
        this.charName = this.charName.charAt(0).toUpperCase() + this.charName.slice(1);
        this.updateParent();
    };
    CharBuildStartComponent.prototype.updateParent = function () { if (this.validate())
        this.startUpdate.emit(this.startData()); };
    CharBuildStartComponent.prototype.levelInc = function (value) {
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
            template: __webpack_require__(717),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [])
    ], CharBuildStartComponent);
    return CharBuildStartComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-start.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(81);
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
        var decisionObject = {
            name: thisDecision.name,
            context: thisDecision.context,
            effect: thisDecision.selectOptions[selectElement.selectedIndex - 1].effect
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
            template: __webpack_require__(718),
            styles: [__webpack_require__(87)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _c) || Object])
    ], CharBuildThemeComponent);
    return CharBuildThemeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-theme.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_char_class_service__ = __webpack_require__(109);
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
    function CharBuildTrackerComponent(charClassService) {
        this.charClassService = charClassService;
        this.charObject = {};
        this._classes = [];
    }
    Object.defineProperty(CharBuildTrackerComponent.prototype, "classes", {
        get: function () { return this._classes; },
        set: function (classes) {
            if (classes != this._classes) {
                this._classes = classes;
                this.refreshCurrentFeatures();
            }
        },
        enumerable: true,
        configurable: true
    });
    CharBuildTrackerComponent.prototype.ngOnInit = function () { };
    CharBuildTrackerComponent.prototype.log = function () { console.log(this.currentFeatures); };
    CharBuildTrackerComponent.prototype.refreshCurrentFeatures = function () {
        if (this.classes.length) {
            var filteredClassFeatures = [];
            for (var i = 0; i < this.classes.length; i++) {
                var thisClassFeatures = this.charClassService.oneClassFeatures(this.classes[i].className);
                filteredClassFeatures = filteredClassFeatures.concat(thisClassFeatures);
            }
            filteredClassFeatures.sort(function (a, b) { return (a.level > b.level) ? 1 : -1; });
            this.currentFeatures = filteredClassFeatures;
        }
        else {
            this.currentFeatures = [];
        }
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
    CharBuildTrackerComponent.prototype.getClassLevel = function (className) { return this.classes.find(function (c) { return c.className == className; }).classLevel; };
    CharBuildTrackerComponent.prototype.ASMod = function (abilityScore) { return Math.floor((abilityScore - 10) / 2); };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildTrackerComponent.prototype, "charObject", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CharBuildTrackerComponent.prototype, "skillsData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], CharBuildTrackerComponent.prototype, "classes", null);
    CharBuildTrackerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-char-build-tracker',
            template: __webpack_require__(719),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_char_class_service__["a" /* CharClassService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_char_class_service__["a" /* CharClassService */]) === 'function' && _a) || Object])
    ], CharBuildTrackerComponent);
    return CharBuildTrackerComponent;
    var _a;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/char-build-tracker.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(65);
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
            template: __webpack_require__(720),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 531:
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
            template: __webpack_require__(721),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/home.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
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
            template: __webpack_require__(722),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/login.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
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
            template: __webpack_require__(723),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
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
            template: __webpack_require__(724),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/profile.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(65);
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
            template: __webpack_require__(725),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/register.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(65);
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

/***/ 537:
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

/***/ 694:
/***/ (function(module, exports) {

module.exports = ".container-fluid {height: 100%;}"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ".charbuild-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: start; justify-content: flex-start;\r\n    width: 100%; height: 800px;\r\n}\r\n\r\n.central-container {\r\n    height: 100%; width: 1100px;\r\n    padding: 1% 0 0 1%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: justify; justify-content: space-between;\r\n    -ms-flex-negative: 1;\r\n        flex-shrink: 1;\r\n}\r\n\r\n/* this has margin-top b/c this div randomly started smushing against \r\nthe top nav buttons and I couldn't figure out why */\r\n.charBuild-area {\r\n    min-height: 650px;\r\n    height: 100%; width: 100%;\r\n    background-color: #404040;\r\n    border-radius: 10px 0 0 10px;\r\n    padding: 1%;\r\n    margin-top: 1%;\r\n}\r\n\r\n.sidebar-right {\r\n    height: 100%; width: 400px;\r\n    padding: 1%;\r\n    background-color: #202020;\r\n    border: 2px solid #404040; border-top: none;\r\n    border-radius: 0 0 10px;\r\n}\r\n\r\n.tab-complete {background-color: #375A7F; color: white; font-weight: bold;}\r\n\r\n.current-tab {border-bottom: 2px solid white;}\r\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ".component-container {-ms-flex-pack: center;justify-content: center; -ms-flex-align: center; align-items: center;}\r\n\r\n.as-area {\r\n    width: 100%; height: 80%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: center; justify-content: center; -ms-flex-align: center; align-items: center;\r\n}\r\n\r\n.as-area > * {margin: 0.5%;}\r\n.as-area > .col-op, .as-inc-container {margin: 0;}\r\n\r\n.col-half, .col-single, .col-double, .col-auto, .col-pb {\r\n    height: 75%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: space-evenly; justify-content: space-evenly;\r\n    background-color: #202020; color: lightgray;\r\n    border-radius: 10px;\r\n}\r\n\r\n.col-half {width: 5%;}\r\n.col-single {width: 7%;}\r\n.col-double {width: 14%;}\r\n.col-auto {width: -webkit-min-content;width: -moz-min-content;width: min-content;}\r\n.col-pb {width: 10%;}\r\n\r\n.col-op {\r\n    height: 75%; width: auto;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: space-evenly; justify-content: space-evenly;\r\n    color: lightgray;\r\n}\r\n\r\n.col-op > small {min-height: 5%;}\r\n\r\n.center {-ms-flex-pack: center;justify-content: center;}\r\n\r\ndiv > small {width: 100%; text-align: center; margin-top: 0.5em; color: #407cbd}\r\n\r\n.as-row {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: distribute; justify-content: space-around; -ms-flex-align: center; align-items: center;\r\n    width: 100%; height: 17%;\r\n    padding: 5%;\r\n}\r\n\r\n.as-row > * {width: 50%; text-align: center;}\r\n\r\n.dark-box {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: center; justify-content: center; \r\n    width: auto; min-width: 2em;\r\n    background-color: #101010;\r\n    font-size: 125%;\r\n    border-radius: 10%;\r\n}\r\n\r\n.med-font {font-size: 125%;}\r\n.big-font {font-size: 175%;}\r\n.gray {background-color: gray;}\r\n\r\n.pb-row {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: center; justify-content: center; -ms-flex-align: center; align-items: center;\r\n    width: 100%; height: 17%;\r\n}\r\n\r\n.input-group {width: auto;}\r\n\r\ninput {\r\n    background-color: #303030; color: lightgray; \r\n    border-color: #808080;\r\n    font-size: 125%; text-align: center;\r\n    width: 2em;\r\n    border-radius: 10% 0 0 10%;\r\n}\r\ninput:focus {background-color: #303030; color: white;}\r\n\r\n.increment-button {display: -ms-flexbox;display: flex; -ms-flex-pack: center; justify-content: center; background-color: #202020; width: 40%;}\r\n.increment-button:hover {background-color: #101010;}\r\n\r\n.as-inc-container {\r\n    height: 75%; width: auto; min-width: 5%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: start; justify-content: flex-start;\r\n    margin-left: 0;\r\n}\r\n\r\n.as-area > .as-inc-container {margin-left: 0;}\r\n\r\n.as-inc-container > .col-op {height: 100%;}\r\n.as-inc-container > .col-double {height: 100%; width: 4em; margin-left: 10%;}\r\n.as-inc-container > .col-single > .as-row {-ms-flex-align: center;align-items: center;}\r\n\r\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ".component-container {color: lightgray;}\r\n\r\n.container-column-1 > * {margin: 1% 0;}\r\n\r\n.selection-list-placeholder {\r\n    height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    background-color: #202020; color: gray;\r\n    border-radius: 15px;\r\n}\r\n\r\n.selection-list-placeholder > * {margin: 40% 0;}\r\n\r\n.select-label {-ms-flex-item-align: center;-ms-grid-row-align: center;align-self: center; font-weight: bold; font-size: 125%;}\r\n\r\n.ability-select {\r\n    background-color: darkgreen;\r\n    color: lightgreen;\r\n    margin-top: 4%;\r\n    width: 30%;\r\n}\r\n.ability-select:hover {color: white; border: 1px solid lightgreen;}\r\n.ability-select:disabled {background-color: gray; color: lightgray;}\r\n.ability-select:disabled:hover {color: white; border: 1px solid white;}\r\n\r\n.card-label > div {white-space: nowrap;}\r\n\r\n.show-hide {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: end;\r\n        align-items: flex-end;\r\n}\r\n\r\n.class-choices-column {\r\n    -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n    height: 100%;\r\n    padding: 10px;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: start;\r\n        justify-content: flex-start;\r\n    overflow-y: auto;\r\n}\r\n\r\n.class-card {   \r\n    width: 100%; height: auto;\r\n    background-color: #303030;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n    margin: 3%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: space-evenly;\r\n        justify-content: space-evenly;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n}\r\n\r\n.class-name {font-weight: bold;}\r\n\r\n.decision-group {\r\n    width: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: center; justify-content: center;\r\n    margin: 3% 0;\r\n    background-color: #202020;\r\n    border-radius: 15px;\r\n    padding-top: 2%;\r\n}\r\n\r\n.ability-slot {\r\n    width: 90%; min-height: 10%;\r\n    background-color: #303030;\r\n    color: gray;\r\n    border-radius: 15px;\r\n    padding: 10px; margin: 3%;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    border: 1px solid gray;\r\n}\r\n\r\n.clicked {\r\n    border: 3px solid lightgray; \r\n    color: #407cbd;\r\n    background-color: #101010;\r\n}\r\n\r\n.filled {color: #407cbd;}\r\n\r\n.ability-slot:hover {border: 2px solid lightgray; color: lightgray;}\r\n\r\n.ability-slot.clicked:hover {\r\n    border: 3px solid lightgray; \r\n    color: #6ca3df;\r\n    background-color: black;\r\n}\r\n.remove {color: darkred;}\r\n.remove:hover {color: pink;}\r\n\r\n.slot-label {\r\n    font-size: 110%;\r\n    font-weight: bold;\r\n    white-space: nowrap;\r\n}\r\n\r\n.orange {color: goldenrod;}\r\n.purple {color: rebeccapurple;}\r\n.gray {color: gray;}\r\n\r\n.fa-circle {margin-right: 2%;}\r\n\r\n.italic {font-style: italic;}"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ".multiclass-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    padding: 5%;\r\n    margin-bottom: 5%;\r\n    background-color: #303030;\r\n    border-radius: 10px;\r\n}\r\n\r\n.multiclass-checkbox {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n        justify-content: center; -ms-flex-align: center; align-items: center;\r\n    color: lightgray;\r\n}\r\n\r\n.multiclass-checkbox > * {margin: 5%;}\r\n\r\n.mc-on {background-color: #202020;height: 25%;}\r\n.mc-classlist {margin-left: 5%; color: lightgray;}\r\n.mc-classlist-item {display: -ms-flexbox;display: flex; -ms-flex-pack: justify; justify-content: space-between;}\r\n.mc-classlevel {display: -ms-flexbox;display: flex; -ms-flex-align: center; align-items: center;}\r\n.mc-selected {color: #6082a6; font-weight: bold;}\r\n.mc-placeholder {color: gray; margin-left: 5%;}\r\n.mc-error {color: pink; text-align: center;}\r\n.mc-charlevel {display: -ms-flexbox;display: flex; -ms-flex-pack: justify; justify-content: space-between; margin: auto 5%;}\r\n\r\nhr {border-color: white; margin-bottom: 0;}\r\n\r\n.increment-button {\r\n    display: -ms-flexbox;\r\n    display: flex; \r\n    -ms-flex-pack: center; \r\n        justify-content: center; -ms-flex-align: center; align-items: center;\r\n    height: 15px; width: 15px;\r\n    padding: 0;\r\n}\r\n\r\n.class-detail {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: center; justify-content: center;\r\n    width: 90%;\r\n    text-align: center;\r\n    margin: 3%;\r\n}\r\n\r\n.viewed-class {border-right: 2px solid white;}\r\n\r\n/* this is here b/c I couldn't figure out why the decisions container\r\nwas smushed against the select class button... */\r\n.decisions {margin-top: 3%;} "

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ".rounded-box {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: center; justify-content: center;\r\n    background-color: #303030; color: lightgray;\r\n    border-radius: 15px;\r\n    padding: 0.5%;\r\n    height: 100%; width: 100%;\r\n}\r\n\r\n.rounded-box > * {margin: 0 1%;}\r\n\r\n.container-1 {\r\n    width: 50%; height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between; -ms-flex-align: center; align-items: center;\r\n}\r\n\r\n.ranks-remaining {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: justify; justify-content: space-between;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    width: 55%;\r\n    background-color: #202020; color: #6082a6;\r\n    font-weight: bold;\r\n    padding: 1% 2%;\r\n    border-radius: 10px;\r\n}\r\n.ranks-remaining > button {color: lightgray;}\r\n\r\n.skills-column {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n    width: 100%;\r\n    -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n}\r\n\r\n.skill-row, .labels-row {width: 100%; display: -ms-flexbox; display: flex; -ms-flex-pack: justify; justify-content: space-between; -ms-flex-align: center; align-items: center;}\r\n.labels-row {height: 3%;}\r\n.skill-row > * {margin: 0 1%;}\r\n.labels-row > * {font-size: 80%; position: absolute;}\r\n\r\n.totals-label {left: 31.9%;}\r\n.ranks-label {left: 36.9%;}\r\n.mod-label {left: 42.85%;}\r\n.trained-label {left: 46.7%;}\r\n.bonus-label {left: 51.15%;}\r\n\r\n.skill-header, .skill-breakdown {\r\n    display: -ms-flexbox;\r\n    display: flex; \r\n    -ms-flex-pack: justify; \r\n        justify-content: space-between; -ms-flex-align: center; align-items: center;\r\n    background-color: #202020;\r\n    border-radius: 10px;\r\n}\r\n\r\n.skill-header {width: 39%; padding: 0 1%; margin-right: 3%;}\r\n.skill-breakdown {-ms-flex-positive: 1;flex-grow: 1; padding: 0 4%;}\r\n\r\n.skill-label {display: -ms-flexbox;display: flex; -ms-flex-pack: start; justify-content: flex-start; -ms-flex-align: center; align-items: center; white-space: nowrap;}\r\n.skill-label > * {margin: 0 2%;}\r\n\r\n.skill-total {font-size: 120%; font-weight: bold; margin-right: 2%;}\r\n\r\n/* this has absolute width, because I can't fucking figure out how to get it to just fit content */\r\n.rank-inc-group {display: -ms-flexbox;display: flex; -ms-flex-align: center; align-items: center; -ms-flex-preferred-size: auto; flex-basis: auto; width: 58px;}\r\n\r\n.rank-value {\r\n    width: 40%;\r\n    background-color: #404040;\r\n    border: 2px solid #202020;\r\n    padding: 0 10%;\r\n    font-size: 110%;\r\n    border-radius: 30% 0 0 30%;\r\n    text-align: center;\r\n}\r\n\r\n.increment-button {display: -ms-flexbox;display: flex; -ms-flex-pack: center; justify-content: center; background-color: #202020; width: 10px; height: 28px;}\r\n.increment-button:hover {background-color: #101010;}\r\n.right-inc {border-radius: 0 30% 30% 0;}\r\n.left-inc {border-left: none; border-radius: 0;}\r\n\r\n.highlight {color: lightsteelblue;}\r\n.lightgray {color: lightgray;}\r\n.bold {font-weight: bold;}\r\n.error {color: indianred;}"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ".start-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: center; justify-content: center;\r\n}\r\n\r\n.name-container, .starting-level-container {display: -ms-flexbox;display: flex;}\r\n\r\n.start-container {height: 100%;}\r\n\r\n.inputs {margin-top: -10%;}\r\n.inputs > * {margin: 20px; height: 45px;}\r\n\r\ninput {background-color: #303030; color: white; text-align: center; font-size: 125%;}\r\n\r\ninput:focus {background-color: #303030; color: white;}\r\n\r\n.input-group-text {width: 200px;}\r\n\r\n.starting-level > input {width: 75px;}\r\n\r\n.increment-button {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: center; justify-content: center;\r\n    background-color: #202020;\r\n}\r\n\r\n.increment-button:hover {background-color: #101010;}\r\n\r\n.error {position: absolute; bottom: 30%; color: pink;}\r\n\r\n/* hides the increment buttons on number-type inputs */\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button { \r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    margin: 0; \r\n}"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ".tracker-column {\r\n    width: 100%; height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    background-color: #303030;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n}\r\n\r\n.tracker-column > * {margin: 1% 0;}\r\n\r\n.rounded-box {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: space-evenly; justify-content: space-evenly;\r\n    width: 100%; \r\n    min-height: 2em;\r\n    background-color: #202020; color: lightgray;\r\n    border-radius: 15px;\r\n    padding: 1% 5%;\r\n    font-size: 90%;\r\n}\r\n\r\n.rounded-box.features {padding: 2%;}\r\n.rounded-box.class-features {-ms-flex-pack: start;justify-content: flex-start;}\r\n\r\n.box-inner-row {\r\n    display: -ms-flexbox;\r\n    display: flex; \r\n    -ms-flex-pack: justify; \r\n        justify-content: space-between;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    min-height: 1em;\r\n    white-space: nowrap;\r\n}\r\n\r\n.box-column {display: -ms-flexbox;display: flex; -ms-flex-direction: column; flex-direction: column; -ms-flex-pack: justify; justify-content: space-between;}\r\n.box-column > * {margin: 2%;}\r\n.box-row {display: -ms-flexbox;display: flex;}\r\n\r\n.normal-font {font-size: 100%;}\r\n.small-font {font-size: 90%;}\r\n.flex-column {-ms-flex-direction: column;flex-direction: column;}\r\n\r\n.space-around {-ms-flex-pack: distribute;justify-content: space-around;}\r\n.space-between {-ms-flex-pack: justify;justify-content: space-between;}\r\n\r\n.hp-stam-res {display: -ms-flexbox;display: flex; -ms-flex-direction: column; flex-direction: column; -ms-flex-align: center; align-items: center;}\r\n.hp-stam-res > strong {font-size: 110%; -ms-flex-positive: 1; flex-grow: 1; min-height: 1em;}\r\n\r\n.hp {color: darksalmon;}\r\n.stamina {color: darkseagreen;}\r\n.resolve {color: lightblue;}\r\n\r\n.gray {color: gray;}\r\n.highlight {color: lightsteelblue;}\r\n\r\n.dark {background-color: #191919;}\r\n\r\n.w-30 {width: 29%;}\r\n.w-40 {width: 39%;}\r\n.w-50 {width: 49%;}\r\n\r\n.AS > .box-inner-row {-ms-flex-pack: justify;justify-content: space-between;}\r\n.saves > .box-inner-row, .AC > .box-inner-row {-ms-flex-pack: distribute;justify-content: space-around;}\r\n.attack-bonuses {-ms-flex-positive: 1;flex-grow: 1;}\r\n.initiative {-ms-flex-positive: 0.5;flex-grow: 0.5;}\r\n\r\n.class-features {max-height: 33%;}\r\n.feature-list {overflow-y: auto; max-height: 100%; overflow-x: hidden;}\r\n\r\n.feature-row {\r\n    border-radius: 7px;\r\n    margin-right: 2%;\r\n    padding: 0 3%;\r\n}\r\n.feature-row:hover {border: 1px solid gray;}\r\n\r\n::-webkit-scrollbar {\r\n    width: 3%;  /* set to 0px to hide scrollbar */\r\n    background: transparent;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    background: gray;\r\n    border-radius: 10px;\r\n    background-color: #777;\r\n}"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = ".dashboard-container {\r\n    width: 100%;\r\n    height: 700px;\r\n}\r\n\r\n.char-container {\r\n    background-color: #404040;\r\n    border-radius: 10px;\r\n    height: 100%; width: 30%;\r\n    padding: 10px;\r\n}\r\n\r\n.char-card {\r\n    height: 80px;\r\n}\r\n\r\n.char-card:hover * {\r\n    background-color: #252525;\r\n    color: white;\r\n}\r\n\r\n.add-char {\r\n    display:-ms-flexbox;\r\n    display:flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center; -ms-flex-pack: space-evenly; justify-content: space-evenly;\r\n    color: #9c9c9c;\r\n    height: 100%;\r\n}\r\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = ".navitem-spacing {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: row; flex-direction: row; \r\n    -ms-flex-pack: distribute; \r\n        justify-content: space-around;\r\n    margin-right: 3%;\r\n}\r\n\r\n.navitem-spacing > * {margin: 10%;}"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<div class=\"charbuild-container\">\n  <div class=\"central-container\">\n    <h3>Character Builder</h3>\n    <div class=\"btn-group\" role=\"group\">\n      <button type=\"button\" class=\"btn btn-secondary {{isComplete.start ? 'tab-complete' : ''}} {{isShown == 'start' ? 'current-tab' : ''}}\" (click)=\"showTab('start')\">Start</button>\n      <button [disabled]=\"raceThemeClassASLocked\" type=\"button\" class=\"btn btn-secondary {{isComplete.race ? 'tab-complete' : ''}} {{isShown == 'race' ? 'current-tab' : ''}}\" (click)=\"showTab('race')\">Race</button>\n      <button [disabled]=\"raceThemeClassASLocked\" type=\"button\" class=\"btn btn-secondary {{isComplete.theme ? 'tab-complete' : ''}} {{isShown == 'theme' ? 'current-tab' : ''}}\" (click)=\"showTab('theme')\">Theme</button>\n      <button [disabled]=\"raceThemeClassASLocked\" type=\"button\" class=\"btn btn-secondary {{isComplete.class ? 'tab-complete' : ''}} {{isShown == 'class' ? 'current-tab' : ''}}\" (click)=\"showTab('class')\">Class</button>\n      <button [disabled]=\"raceThemeClassASLocked\" type=\"button\" class=\"btn btn-secondary {{isComplete.AS ? 'tab-complete' : ''}} {{isShown == 'AS' ? 'current-tab' : ''}}\" (click)=\"showTab('AS')\">Ability Scores</button>\n      <button [disabled]=\"!isComplete.class\" type=\"button\" class=\"btn btn-secondary {{isComplete.classChoices ? 'tab-complete' : ''}} {{isShown == 'classChoices' ? 'current-tab' : ''}}\" (click)=\"showTab('classChoices')\">Class Choices</button>\n      <button [disabled]=\"!isComplete.classChoices\" type=\"button\" class=\"btn btn-secondary {{isComplete.skills ? 'tab-complete' : ''}} {{isShown == 'skills' ? 'current-tab' : ''}}\" (click)=\"showTab('skills')\">Skills</button>\n      <button [disabled]=\"!isComplete.skills\" type=\"button\" class=\"btn btn-secondary {{isComplete.feats ? 'tab-complete' : ''}} {{isShown == 'feats' ? 'current-tab' : ''}}\" (click)=\"showTab('feats')\">Feats</button>\n      <button disabled type=\"button\" class=\"btn btn-secondary\">Spells</button>\n    </div>\n    <div class=\"charBuild-area\">\n      <app-char-build-start [hidden]=\"isShown != 'start'\" (startComplete)=startComplete($event) (startGo)=startGo($event) (startUpdate)=startUpdate($event)></app-char-build-start>\n      <app-char-build-race [hidden]=\"isShown != 'race'\" (raceComplete)=raceComplete($event) (raceUpdate)=raceUpdate($event)></app-char-build-race>\n      <app-char-build-theme [hidden]=\"isShown != 'theme'\" (themeComplete)=themeComplete($event) (themeUpdate)=themeUpdate($event)></app-char-build-theme>\n      <app-char-build-class [hidden]=\"isShown != 'class'\" (classComplete)=classComplete($event) (classUpdate)=classUpdate($event) [charLevel]=\"charObject.charLevel\" [skillsData]=\"skillsData\" [proficiencies]=\"proficiencies\" [classSummary]=\"classSummary\"></app-char-build-class>\n      <app-char-build-as [hidden]=\"isShown != 'AS'\" (ASComplete)=ASComplete($event) (ASUpdate)=ASUpdate($event) [AS]=\"charObject.AS\" [charLevel]=\"charObject.charLevel\"></app-char-build-as>\n      <app-char-build-class-choices [hidden]=\"isShown != 'classChoices'\" (classChoicesComplete)=classChoicesComplete($event) [classes]=\"classSummary\" [classAbilities]=\"classAbilities\" [skillsData]=\"skillsData\" (classChoicesComplete)=classChoicesComplete($event) (classChoicesUpdate)=classChoicesUpdate($event)></app-char-build-class-choices>\n      <app-char-build-skills [hidden]=\"isShown != 'skills'\" [skillsData]=\"skillsData\" [charSkills]=\"charObject.skills\" [skillRanks]=\"charObject.skillRanks\" [charLevel]=\"charObject.charLevel\" (skillsUpdate)=skillsUpdate($event) (skillsComplete)=skillsComplete($event)></app-char-build-skills>\n      <app-char-build-feats [hidden]=\"isShown != 'feats'\"></app-char-build-feats>\n    </div>\n  </div>\n  <div class=\"sidebar-right\">\n    <app-char-build-tracker [charObject]=\"charObject\" [classes]=\"classSummary\" [skillsData]=\"skillsData\"></app-char-build-tracker>\n    <!-- DEBUGGING BUTTONS; REMOVE FOR PROD \n    <button type=\"button\" (click)=\"logCharObject()\">logCharObject()</button>\n    <button type=\"button\" (click)=\"log()\">Log()</button>\n    -->\n  </div>\n</div>\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container\">\n  <div class=\"as-area\">\n    <div class=\"col-double\">\n      <small>Scores</small>\n      <div class=\"as-row\">\n        <strong>STR</strong><div class=\"dark-box big-font\">{{AS.totals[0]}}</div>\n      </div>\n      <div class=\"as-row\">\n        <strong>DEX</strong><div class=\"dark-box big-font\">{{AS.totals[1]}}</div>\n      </div>\n      <div class=\"as-row\">\n        <strong>CON</strong><div class=\"dark-box big-font\">{{AS.totals[2]}}</div>\n      </div>\n      <div class=\"as-row\">\n        <strong>INT</strong><div class=\"dark-box big-font\">{{AS.totals[3]}}</div>\n      </div>\n      <div class=\"as-row\">\n        <strong>WIS</strong><div class=\"dark-box big-font\">{{AS.totals[4]}}</div>\n      </div>\n      <div class=\"as-row\">\n        <strong>CHA</strong><div class=\"dark-box big-font\">{{AS.totals[5]}}</div>\n      </div>\n    </div>\n    <div class=\"col-op\"><small></small><div *ngFor=\"let n of [1,2,3,4,5,6]\" class=\"as-row\">=</div></div>\n    <div class=\"col-half\">\n      <small>Base</small>\n      <div class=\"as-row med-font\">10</div>\n      <div class=\"as-row med-font\">10</div>\n      <div class=\"as-row med-font\">10</div>\n      <div class=\"as-row med-font\">10</div>\n      <div class=\"as-row med-font\">10</div>\n      <div class=\"as-row med-font\">10</div>\n    </div>\n    <div class=\"col-op\"><small></small><div *ngFor=\"let n of [1,2,3,4,5,6]\" class=\"as-row\">+</div></div>\n    <div class=\"col-half\">\n      <small>Race</small>\n      <div *ngFor=\"let raceAS of AS.race; let i = index\" class=\"as-row med-font\">{{AS.race[i] || ''}}</div>\n    </div>\n    <div class=\"col-op\"><small></small><div *ngFor=\"let n of [1,2,3,4,5,6]\" class=\"as-row\">+</div></div>\n    <div class=\"col-half\">\n      <small>Theme</small>\n      <div *ngFor=\"let themeAS of AS.theme; let i = index\" class=\"as-row med-font\">{{AS.theme[i] || ''}}</div>\n    </div>\n    <div class=\"col-op\"><small></small><div *ngFor=\"let n of [1,2,3,4,5,6]\" class=\"as-row\">+</div></div>\n    <div class=\"col-pb\">\n      <small>Point Buy ({{pbCount}}/10)</small>\n      <div *ngFor=\"let pb of AS.pb; let i = index\" class=\"pb-row\">\n        <div class=\"input-group input-group-lg\">\n          <input disabled type=\"number\" [(ngModel)]=\"AS.pb[i]\" name=\"AS.pb[i]\">\n          <div class=\"btn-group-vertical\">\n            <button type=\"button\" class=\"btn btn-sm btn-secondary increment-button\" (click)=\"pbInc(1,i)\">\n              <i class=\"fas fa-caret-up\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-secondary increment-button\" (click)=\"pbInc(-1,i)\">\n              <i class=\"fas fa-caret-down\"></i>\n            </button>\n          </div>      \n        </div>\n      </div>\n    </div>\n    <div *ngFor=\"let level of ASIncLevels()\" class=\"as-inc-container\">\n      <div class=\"col-op\"><small></small><div *ngFor=\"let n of [1,2,3,4,5,6]\" class=\"as-row\">+</div></div>\n      <div class=\"col-double\">\n        <small>Level {{level}}:</small>\n        <div *ngFor=\"let n of [1,2,3,4,5,6]; let i = index\" class=\"as-row\">\n          <span *ngIf=\"incValue(level,i)\" class=\"med-font\">{{incValue(level,i)}}</span>\n          <input type=\"checkbox\" [disabled]=\"isLevelIncDisabled(level)\" [checked]=\"incValue(level,i)\" (change)=\"ASInc($event.target,level,i)\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container\">\n  <div class=\"container-column-1\">\n    <div class=\"selection-list\">\n      <div *ngFor=\"let ability of selectionList.options; let i = index\" class=\"ability-card card\" (click)=\"hideShow(i)\">\n        <div class=\"card-label\">\n          <div>\n            <span><i *ngIf=\"ability.solarianMode\" class=\"fas fa-circle fa-xs {{solarianModeClass(ability.solarianMode)}}\" title=\"{{ability.solarianMode}}\"></i>{{ability.optionName}}</span>\n            <span>{{(ability.level) ? ' (Level '+ability.level+')' : ''}}</span>\n          </div>\n          <div *ngIf=\"!showDesc[i]\"><i class=\"fas fa-caret-down\"></i></div>\n          <div *ngIf=\"showDesc[i]\"><i class=\"fas fa-caret-left\"></i></div>\n        </div>\n        <div class=\"show-hide\" *ngIf=\"showDesc[i]\">\n          <div class=\"ability-desc\" >{{ability.desc || ''}}</div>\n          <button class=\"btn btn secondary ability-select\" [disabled]=!canSelect(ability) (click)=\"selectAbility(selectionList.options[i])\" title=\"{{(!canSelect(ability)) ? 'You cannot choose this.' : ''}}\" type=\"button\">Select <i class=\"fas fa-angle-double-right fa-lg\"></i></button>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"!selectionList.options.length\" class=\"selection-list-placeholder\"><span class=\"italic\">Click an ability slot...</span></div>\n  </div>\n  <div class=\"class-choices-column\">\n    <div *ngFor=\"let class of decisionTracker\" class=\"class-card\">\n      <div class=\"class-name\">{{class.className}}, Level {{class.classLevel}}</div>\n      <div *ngIf=\"noChoicesToMake()\" class=\"italic gray\">(No choices to make yet!)</div>\n      <div *ngFor=\"let decision of class.decisions\" class=\"decision-group\">\n        <div class=\"class-name\">{{decision.name}}</div>\n        <button *ngFor=\"let slot of decision.slots\" (click)=\"clickSlot(class.className,decision,slot.level)\" class=\"btn btn-secondary ability-slot {{(isClicked(decision.name,slot.level)) ? 'clicked' : ''}} {{(slot.selection) ? 'filled' : ''}}\" type=\"button\">\n          <i class=\"fas fa-angle-double-left fa-lg {{hasRemoveOption(class.className,decision,slot.level) ? 'remove' : ''}}\" title=\"{{hasRemoveOption(class.className,decision,slot.level) ? 'Remove' : ''}}\" (click)=\"hasRemoveOption(class.className,decision,slot.level) && removeAbility(class.className,decision.name,slot.level)\"></i>\n          <div class=\"{{(slot.selection) ? 'slot-label' : 'italic'}}\">\n            <span *ngIf=\"slot.selection\">\n              <i *ngIf=\"slot.selection.solarianMode\" class=\"fas fa-circle fa-xs {{solarianModeClass(slot.selection.solarianMode)}}\" title=\"{{slot.selection.solarianMode}}\"></i>{{slot.selection.optionName}}\n            </span>\n            <span *ngIf=\"!slot.selection\">{{slotPlaceholderText(decision.name,slot.level)}}</span>\n          </div>\n          <div>Level {{slot.level}}</div> \n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <button type=\"button\" (click)=\"log()\">Log()</button> -->"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container\">\n  <div class=\"list-column\">\n    <div *ngIf=\"charLevel > 1\" class=\"multiclass-container {{multiclass ? 'mc-on' : ''}}\">\n      <div class=\"multiclass-checkbox\">\n        <input type=\"checkbox\" id=\"multiclassCheck\" [(ngModel)]=\"multiclass\" name=\"multiclass\" (change)=\"mcToggle()\">\n        <label class=\"{{multiclass ? 'mc-selected' : ''}}\" for=\"multiclassCheck\">Multiclass</label>\n      </div>\n      <div *ngIf=\"multiclass\">\n        <div class=\"mc-placeholder\" *ngIf=\"!selectedClasses.length\">Select a class...</div>\n        <div class=\"mc-classlist\" *ngIf=\"selectedClasses.length\">\n          <div *ngFor=\"let class of selectedClasses\" class=\"mc-classlist-item\">\n            <div>{{class.className}}</div>\n            <div class=\"mc-classlevel\">\n              <div>{{class.classLevel}}</div>\n              <div class=\"btn-group ml-1\">\n                <button type=\"button\" class=\"btn btn-sm btn-secondary increment-button\" (click)=\"inc(class.className,1)\">\n                  <i class=\"fas fa-xs fa-caret-up\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-sm btn-secondary increment-button\" (click)=\"inc(class.className,-1)\">\n                  <i class=\"fas fa-xs fa-caret-down\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"mc-placeholder\" *ngIf=\"selectedClasses.length == 1\">Select another class...</div>\n        <div class=\"mc-footer\">\n          <hr>\n          <div class=\"mc-charlevel\">\n            <small>Character Level</small><small>{{charLevel}}</small>\n          </div>\n          <div class=\"mc-error\">\n            <small *ngIf=\"mcError\">{{mcError}}</small>\n          </div>\n        </div>\n      </div>\n    </div>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let class of classes\" class=\"list-group-item {{selectedClassNames.includes(class.className) ? 'selected' : ''}} {{(viewedClass == class) ? 'viewed-class' : ''}}\" (click)=\"viewClass(class)\">{{class.className}}</li>\n    </ul>\n  </div>\n  <div class=\"container-column-1\">\n    <div *ngIf=\"!viewedClass\" class=\"placeholder\">Select a Class...</div>\n    <div *ngIf=\"viewedClass\" class=\"selection-detail\">\n      <h4>{{viewedClass.className}}</h4>\n      <div class=\"stat-box-centered\">\n        <strong>Stamina: {{viewedClass.stamina}} + Con mod</strong>\n        <strong>HP: {{viewedClass.hp}}</strong>\n      </div>\n      <div class=\"selection-desc\">{{viewedClass.desc}}</div>\n      <div class=\"stat-box-centered\">\n        <div class=\"class-detail\">\n          <strong>Key Ability Score:</strong>\n          <small>{{viewedClass.keyABDesc}}</small>\n        </div>\n        <div class=\"class-detail\">\n          <strong>Skills:</strong>\n          <span>Ranks per Level: {{viewedClass.skillRanksPerLvl}} + Int mod</span>\n          <small>{{createSkillList(viewedClass.classSkills)}}</small>\n        </div>\n        <div class=\"class-detail\">\n          <strong>Proficiencies:</strong>\n          <div class=\"proficiencies\">\n            <small><strong>Armor:</strong> {{createProfList(viewedClass.armorProf)}}</small>\n          </div>\n          <div class=\"proficiencies\">\n            <small><strong>Weapons:</strong> {{createProfList(viewedClass.weapProf)}}</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"select-button-container\">\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"selectClass(viewedClass)\">Choose This Class</button>\n        <div *ngIf=\"classIsSelected(viewedClass.className) && viewedClassDecisions.length\">\n          <div class=\"decisions\">\n            <div *ngFor=\"let decision of viewedClassDecisions\">\n              <div>{{decision.selectLabel}}</div>\n              <select class=\"custom-select dark-select\" (change)=\"makeDecision(decision.name,$event.target)\">\n                <option hidden disabled selected>Select</option>\n                <option *ngFor=\"let option of decision.selectOptions\">{{option.name}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-column-1\">\n    <div *ngIf=\"!viewedClass\" class=\"placeholder\"></div>\n    <h4 *ngIf=\"viewedClass\" class=\"ability-section-header\">Class Features</h4>\n    <div *ngIf=\"viewedClass\" class=\"ability-container\">\n      <div *ngFor=\"let feature of viewedClassFeatures; let i = index\" class=\"card ability-card\" (click)=\"hideShow(i)\">\n        <div class=\"card-label\">\n          <div>{{feature.featureName}} (Level {{feature.level}})</div>\n          <div *ngIf=\"!showDesc[i]\"><i class=\"fas fa-caret-down\"></i></div>\n          <div *ngIf=\"showDesc[i]\"><i class=\"fas fa-caret-left\"></i></div>\n        </div>\n        <div class=\"ability-desc\" *ngIf=\"showDesc[i]\">\n          {{feature.desc}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button type=\"button\" (click)=\"log()\">log()</button>"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<p>\n  char-build-feats works!\n</p>\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container\">\n  <div class=\"list-column\">\n    <ul class=\"list-group\">\n      <li *ngFor=\"let race of races\" class=\"list-group-item {{race.raceName === selectedRace.raceName ? 'selected' : ''}}\" (click)=\"viewRace(race)\">{{race.raceName}}</li>\n    </ul>\n  </div>\n  <div class=\"container-column-1\">\n    <div *ngIf=\"!viewedRace\" class=\"placeholder\">Select a Race...</div>\n    <div *ngIf=\"viewedRace\" class=\"selection-detail\">\n      <h4>{{viewedRace.raceName}}</h4>\n      <div class=\"stat-box-centered\">\n        <strong>{{viewedRace.ASDesc}}</strong>\n        <strong>HP: {{viewedRace.raceData.HP}}</strong>\n        <small>{{viewedRace.sizeType}}</small>\n      </div>\n      <div class=\"selection-desc\">{{viewedRace.description}}</div>\n      <div class=\"select-button-container\">\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"selectRace(viewedRace)\">Choose This Race</button>\n        <div *ngIf=\"viewedRace.raceName === selectedRace.raceName && viewedRaceDecisions && showDecisions\">\n          <div class=\"decisions\">\n            <div *ngFor=\"let decision of viewedRaceDecisions\">\n              <div>{{decision.selectLabel}}</div>\n              <select class=\"custom-select dark-select\" (change)=\"makeDecision(decision,$event.target)\">\n                <option hidden disabled selected>Select</option>\n                <option *ngFor=\"let option of decision.selectOptions\">{{option.name}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-column-1\">\n    <div *ngIf=\"!viewedRace\" class=\"placeholder\"></div>\n    <h4 *ngIf=\"viewedRace\" class=\"ability-section-header\">Racial Abilities</h4>\n    <div *ngIf=\"viewedRace\" class=\"ability-container\">\n      <div *ngFor=\"let ability of viewedRace.racialAbilities; let i = index\" class=\"card ability-card\" (click)=\"hideShow(i)\">\n        <div class=\"card-label\">\n          <div>{{ability.name}}</div>\n          <div *ngIf=\"!showDesc[i]\"><i class=\"fas fa-caret-down\"></i></div>\n          <div *ngIf=\"showDesc[i]\"><i class=\"fas fa-caret-left\"></i></div>\n        </div>\n        <div class=\"ability-desc\" *ngIf=\"showDesc[i]\">\n          <div>{{ability.description}}</div>\n          <div *ngIf=\"viewedRace.raceName === selectedRace.raceName && ability.decision\">\n            <div class=\"decisions\">\n              <div>{{ability.decision.selectLabel}}</div>\n              <select *ngFor=\"let selection of makeArray(ability.decision.selectionCount); let i = index\" class=\"custom-select dark-select\" (change)=\"makeDecision(ability.decision,$event.target,i)\">\n                <option hidden disabled selected>Select</option>\n                <option *ngFor=\"let option of ability.decision.selectOptions\">{{option.name}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <button type=\"button\" (click)=\"log()\">log()</button> -->"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container\">\n  <div class=\"rounded-box\">\n    <div class=\"container-1\">\n      <div class=\"ranks-remaining {{tooManyRanks() ? 'error' : ''}}\">\n        <span>Ranks Remaining: {{ranksSpent}} / {{skillRanks}}</span>\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"resetRanks()\">Reset</button>\n      </div>\n      <div class=\"labels-row\">\n        <span class=\"totals-label\">Totals</span>\n        <span class=\"ranks-label\">Ranks</span>\n        <span class=\"mod-label\">Mod</span>\n        <span class=\"trained-label\">Trained</span>\n        <span class=\"bonus-label\">Bonus</span>\n      </div>\n      <div class=\"skills-column\">\n        <div *ngFor=\"let skill of skillsData; let s = index\" class=\"skill-row\">\n          <div class=\"skill-header {{(charSkills.classSkills[s]) ? 'bold highlight' : ''}}\">\n            <div class=\"skill-label\">\n              <i class=\"{{(charSkills.classSkills[s]) ? 'fas' : 'far'}} fa-circle fa-xs\"></i>\n              <span>{{skill.skillName}}</span>\n              <span class=\"badge badge-secondary {{(charSkills.classSkills[s]) ? 'highlight' : 'lightgray'}}\">{{skill.ASName}}</span>\n            </div>\n            <strong class=\"skill-total\">{{charSkills.totals[s]}}</strong>\n          </div>\n          <div>=</div>\n          <div class=\"rank-inc-group\">\n            <div class=\"rank-value {{(ranks[s]) ? 'highlight bold' : ''}}\">{{ranks[s]}}</div>\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-sm btn-secondary increment-button left-inc\" (click)=\"rankInc(1,s)\">\n                <i class=\"fas fa-caret-up fa-xs\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-sm btn-secondary increment-button right-inc\" (click)=\"rankInc(-1,s)\">\n                <i class=\"fas fa-caret-down fa-xs\"></i>\n              </button>\n            </div> \n          </div>\n          <div>+</div>\n          <div class=\"skill-breakdown\">\n            <div>{{charSkills.mod[s]}}</div>\n            <div>+</div>\n            <div>{{charSkills.trained[s]}}</div>\n            <div>+</div>\n            <div>{{charSkills.bonuses[s]}}</div>\n          </div>\n        </div>   \n      </div>     \n    </div>   \n  </div>\n</div>\n<!-- <button type=\"button\" (click)=\"log()\">skillLog()</button> -->"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<div class=\"start-container\">\n  <div class=\"inputs\">\n    <div class=\"name-container\">\n      <div class=\"input-group input-group-lg name\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Character Name</span>\n        </div>\n        <input type=\"text\" [(ngModel)]=\"charName\" name=\"charName\" (input)=\"name()\">\n      </div>\n    </div>\n    <div class=\"starting-level-container\">\n      <div class=\"input-group input-group-lg starting-level\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Starting Level</span>\n        </div>\n        <input disabled type=\"number\" [(ngModel)]=\"startingLevel\" name=\"startingLevel\">\n        <div class=\"btn-group-vertical\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary increment-button\" (click)=\"levelInc(1)\">\n            <i class=\"fas fa-caret-up\"></i>\n          </button>\n          <button type=\"button\" class=\"btn btn-sm btn-secondary increment-button\" (click)=\"levelInc(-1)\">\n            <i class=\"fas fa-caret-down\"></i>\n          </button>\n        </div>      \n      </div>\n    </div>\n  </div>\n  <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"go()\">Go <i class=\"fas fa-arrow-right ml-2\"></i></button>\n  <div *ngIf=\"error\" class=\"error mt-3\">{{ error }}</div>\n</div>"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<div class=\"component-container\">\n  <div class=\"list-column\">\n    <ul class=\"list-group\">\n      <li *ngFor=\"let theme of themes\" class=\"list-group-item {{theme.themeName === selectedTheme.themeName ? 'selected' : ''}}\" (click)=\"viewTheme(theme)\">{{theme.themeName}}</li>\n    </ul>\n  </div>\n  <div class=\"container-column-1\">\n    <div *ngIf=\"!viewedTheme\" class=\"placeholder\">Select a Theme...</div>\n    <div *ngIf=\"viewedTheme\" class=\"selection-detail\">\n      <h4>{{viewedTheme.themeName}}</h4>\n      <div class=\"stat-box-centered\">\n        <strong>{{viewedTheme.ASDesc}}</strong>\n      </div>\n      <div class=\"selection-desc\">{{viewedTheme.description}}</div>\n      <div class=\"select-button-container\">\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"selectTheme(viewedTheme)\">Choose This Theme</button>\n        <div *ngIf=\"viewedThemeDecisions && showDecisions\">\n          <div class=\"decisions\">\n            <div *ngFor=\"let decision of viewedThemeDecisions\">\n              <div>{{decision.selectLabel}}</div>\n              <select class=\"custom-select dark-select\" (change)=\"makeDecision(decision.name,$event.target)\">\n                <option hidden disabled selected>Select</option>\n                <option *ngFor=\"let option of decision.selectOptions\">{{option.name}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-column-1\">\n    <div *ngIf=\"!viewedTheme\" class=\"placeholder\"></div>\n    <h4 *ngIf=\"viewedTheme\" class=\"ability-section-header\">Theme Abilities</h4>\n    <div *ngIf=\"viewedTheme\" class=\"ability-container\">\n      <div *ngFor=\"let ability of viewedTheme.themeAbilities; let i = index\" class=\"card ability-card\" (click)=\"hideShow(i)\">\n          <div class=\"card-label\">\n            <div>{{ability.name}} (Level {{ability.level}})</div>\n            <div>\n              <div *ngIf=\"!showDesc[i]\"><i class=\"fas fa-caret-down\"></i></div>\n              <div *ngIf=\"showDesc[i]\"><i class=\"fas fa-caret-left\"></i></div>\n            </div>\n          </div>\n          <div class=\"ability-desc\" *ngIf=\"showDesc[i]\">\n            {{ability.description}}\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<div class=\"tracker-column\">\n  <div class=\"rounded-box normal-font\">\n    <div *ngIf=\"charObject.charName && charObject.charLevel\">\n      <span>{{charObject.charName}}</span>\n    </div>\n  </div>\n  <div class=\"box-row space-between\">\n    <div class=\"rounded-box flex-column mr-2\">\n      <div class=\"box-inner-row\">\n        <span>Race:</span><div><span>{{(charObject.race) ? charObject.race.raceName : '-'}}</span></div>\n      </div>\n      <div class=\"box-inner-row\">\n        <span>Theme:</span><div><span>{{(charObject.theme) ? charObject.theme.themeName : '-'}}</span></div>\n      </div>\n      <div class=\"box-inner-row\">\n        <span>Class:</span><span class=\"{{(classes.length > 1) ? 'small-font' : ''}}\">{{(classString()) ? classString() : '-'}}</span>\n      </div>\n    </div>\n    <div class=\"rounded-box flex-column w-30\">\n      <div class=\"box-inner-row space-around\">\n        <div class=\"hp-stam-res\">\n          <strong>{{charObject.charLevel}}</strong>\n          <small title=\"Character Level\">Level</small>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"box-row space-between\">\n    <div class=\"rounded-box flex-column mr-2\">\n      <div class=\"box-inner-row space-around\">\n        <div class=\"hp-stam-res stamina\">\n          <strong>{{charObject.stamina || '-'}}</strong>\n          <small>Stamina</small>\n        </div>\n        <div class=\"hp-stam-res hp\">\n          <strong>{{charObject.HP || '-'}}</strong>\n          <small>HP</small>\n        </div>\n        <div class=\"hp-stam-res resolve\">\n          <strong>{{charObject.resolve || '-'}}</strong>\n          <small>Resolve</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"rounded-box flex-column w-50\">\n      <div class=\"box-inner-row space-around\">\n        <div class=\"hp-stam-res\">\n          <span>{{(charObject.race) ? charObject.race.raceData.size : ' -'}}</span>\n          <small>Size</small>\n        </div>\n        <div class=\"hp-stam-res\">\n            <span>{{(charObject.race) ? charObject.race.raceData.speed+'ft' : ' -'}}</span>\n            <small>Speed</small>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"box-row space-between\">\n    <div class=\"rounded-box flex-column w-40 AS\">\n      <div class=\"box-inner-row\">\n        <span>Str</span><strong>{{charObject.AS.totals[0]}} ({{ASMod(charObject.AS.totals[0])}})</strong>\n      </div>\n      <div class=\"box-inner-row\">\n        <span>Dex</span><strong>{{charObject.AS.totals[1]}} ({{ASMod(charObject.AS.totals[1])}})</strong>\n      </div>\n      <div class=\"box-inner-row\">\n        <span>Con</span><strong>{{charObject.AS.totals[2]}} ({{ASMod(charObject.AS.totals[2])}})</strong>\n      </div>\n      <div class=\"box-inner-row\">\n        <span>Int</span><strong>{{charObject.AS.totals[3]}} ({{ASMod(charObject.AS.totals[3])}})</strong>\n      </div>\n      <div class=\"box-inner-row\">\n        <span>Wis</span><strong>{{charObject.AS.totals[4]}} ({{ASMod(charObject.AS.totals[4])}})</strong>\n      </div>\n      <div class=\"box-inner-row\">\n        <span>Cha</span><strong>{{charObject.AS.totals[5]}} ({{ASMod(charObject.AS.totals[5])}})</strong>\n      </div>\n    </div>\n    <div class=\"box-column w-30\">\n      <div class=\"rounded-box flex-column saves\">\n        <div class=\"box-inner-row\">\n          <small>Fort (Con)</small><strong>{{charObject.saves.fort || 0}}</strong>\n        </div>\n        <div class=\"box-inner-row\">\n          <small>Ref (Dex)</small><strong>{{charObject.saves.ref || 0}}</strong>\n        </div>\n        <div class=\"box-inner-row\">\n          <small>Will (Wis)</small><strong>{{charObject.saves.will || 0}}</strong>\n        </div>\n      </div>\n      <div class=\"rounded-box flex-column AC\">\n        <div class=\"box-inner-row\">\n          <small>EAC</small><strong>19</strong>\n        </div>\n        <div class=\"box-inner-row\">\n          <small>KAC</small><strong>20</strong>\n        </div>\n        <div class=\"box-inner-row\">\n          <small>vs. CM</small><strong>28</strong>\n        </div>\n      </div>\n    </div>\n    <div class=\"box-column w-30\">\n      <div class=\"rounded-box flex-column attack-bonuses\">\n        <div class=\"box-inner-row space-around\">\n          <small>Attack Bonuses</small>\n        </div>\n        <div class=\"box-inner-row\">\n          <small>Melee (Str)</small><strong>{{charObject.bab.melee || 0}}</strong>\n        </div>\n        <div class=\"box-inner-row\">\n          <small>Ranged (Dex)</small><strong>{{charObject.bab.ranged || 0}}</strong>\n        </div>\n        <div class=\"box-inner-row\">\n          <small>Thrown (Str)</small><strong>{{charObject.bab.thrown || 0}}</strong>\n        </div>\n      </div>\n      <div class=\"rounded-box flex-column initiative\">\n        <div class=\"box-inner-row\">\n          <span>Initiative:</span><strong>{{charObject.ini || 0}}</strong>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"box-row space-between\">\n    <div class=\"rounded-box w-50 flex-column mr-2\">\n      <div class=\"box-inner-row {{(charObject.skills.classSkills[s]) ? 'highlight' : ''}}\" *ngFor=\"let skill of skillsData; let s = index\">\n        <small><i class=\"{{(charObject.skills.classSkills[s]) ? 'fas' : 'far'}} fa-circle fa-xs\"></i> {{skill.skillName}} ({{skill.ASName}})</small>\n        <strong>{{charObject.skills.totals[s]}}</strong>\n      </div>\n    </div>    \n    <div class=\"rounded-box w-50 features\">\n      <div class=\"rounded-box flex-column dark class-features\">\n        <div class=\"box-inner-row space-around mb-1\">\n          <strong>Class Features</strong>\n        </div>\n        <div class=\"feature-list\">\n          <div *ngFor=\"let feature of currentFeatures\" class=\"box-inner-row feature-row {{(feature.level > getClassLevel(feature.className)) ? 'gray' : ''}}\" title=\"{{(charObject.classes.length > 1) ? feature.className+': ' : ''}} {{feature.desc}}\">\n            <small>{{feature.level}}</small><span class=\"small-font\">{{feature.featureName}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<div class=\"dashboard-container\">\n    <div class=\"char-container\">\n        <div class=\"card char-card\">\n            <div class=\"add-char\" (click)=\"redirectCharBuild()\">\n                <i class=\"fas fa-2x fa-plus-circle\"></i>\n                <span>Create Character</span>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron text-center mt-5\">\n    <h1>StarSeeker</h1>\n    <p class=\"lead\">A hub for all things Starfinder</p>\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3>Character Builder</h3>\n      <p>Build your own character from scratch:</p>\n      <button class=\"btn btn-primary\" [routerLink]=\"['/charBuild']\">Character Builder</button>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Create & Manage Campaigns</h3>\n      <p>Create campaigns and invite friends. Use StarSeeker as a hub for your character sheets and party inventories. Allow your players to make in-game purchases of gear in a controlled setting. Distribute loot without all the manual bookkeeping.</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>All Things Starfinder</h3>\n      <p>In addition to characters, create starships, computers, and mechanic drones. Manage your equipment and more easliy track ammunition, charges, encumbrance, and item upgrades.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userName\" name=\"userName\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark navbar-default\">\n  <a class=\"navbar-brand\" href=\"#\">StarSeeker</a>\n  <ul class=\"navbar-nav mr-auto navbar-left\">\n    <li><a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a></li>\n  </ul>\n  <div class=\"navbar-nav navbar-right navitem-spacing\">\n    <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Login</a>\n    <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/register\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Register</a>\n    <a *ngIf=\"authService.loggedIn()\" routerLink=\"/dashboard\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Dashboard</a>\n    <a *ngIf=\"authService.loggedIn()\" routerLink=\"/profile\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Profile</a>\n    <a *ngIf=\"authService.loggedIn()\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a>\n  </div>\n</nav>"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{ user.name }}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.userName}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header mt-3\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"userName\" name=\"userName\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(400);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(538);
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

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(380);
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
    DataService.prototype.getSkills = function () { return this.getGameData('skills'); };
    DataService.prototype.getBabSaves = function () { return this.getGameData('babSaves'); };
    DataService.prototype.getProficiencies = function () { return this.getGameData('proficiencies'); };
    DataService.prototype.getClasses = function () { return this.getGameData('classes'); };
    DataService.prototype.getClassFeatures = function () { return this.getGameData('classFeatures'); };
    DataService.prototype.getClassAbilities = function () { return this.getGameData('classAbilities'); };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], DataService);
    return DataService;
    var _a;
}());
//# sourceMappingURL=D:/StarSeeker/StarSeeker-1/angular-src/src/data.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports = ".component-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: justify; justify-content: space-between;\r\n    height: 100%;\r\n}\r\n\r\n.container-column-1 {\r\n    width: 400px; height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    background-color: #303030;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.container-column-1::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px black;\r\n    border-radius: 10px;\r\n    background-color: #404040;\r\n}\r\n.container-column-1::-webkit-scrollbar {\r\n    width: 12px;\r\n    border-radius: 10px;\r\n    background-color: #404040;\r\n}\r\n.container-column-1::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n    background-color: #777;\r\n}\r\n\r\n.list-column {width: 200px; overflow-y: auto; padding: 10px;}\r\n\r\n.list-group-item:hover {background-color: #202020; color: lightblue;}\r\n\r\n.selected {background-color: #375A7F; color: white; font-weight: bold;}\r\n\r\n.placeholder {\r\n    width: 100%; height: 100%;\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: center; justify-content: center;\r\n    background-color: #303030; color: gray;\r\n    font-size: 150%;\r\n    border-radius: 15px;\r\n    padding-top: 50px;\r\n}\r\n\r\n.selection-detail {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    height: 100%;\r\n}\r\n\r\n.selection-detail > * {margin: 5px;}\r\n\r\n.stat-box-centered {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    text-align: center;\r\n    background-color: #202020; color: lightgray;\r\n    padding: 5%;\r\n    border-radius: 10px;\r\n}\r\n\r\n.selection-desc {text-align: center; font-size: 90%; color: lightgray;}\r\n\r\n.select-button-container {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around; -ms-flex-align: center; align-items: center;\r\n    height: 100%; width: 100%;\r\n    margin: 5% auto;\r\n    -ms-flex-positive: 2;\r\n        flex-grow: 2;\r\n}\r\n\r\n.decisions {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: center;\r\n        justify-content: center; -ms-flex-align: center; align-items: center;\r\n    border-radius: 15px;\r\n    width: 300px;\r\n}\r\n\r\n.decisions > div {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: center;\r\n        justify-content: center; -ms-flex-align: center; align-items: center;\r\n    width: 90%;\r\n    margin: 5%;\r\n}\r\n\r\n.dark-select {width: 90%; background-color: #404040; color: white;}\r\n\r\n.ability-section-header {-ms-flex-item-align: center;-ms-grid-row-align: center;align-self: center; color: lightgray;}\r\n\r\n.ability-container {display: -ms-flexbox;display: flex; -ms-flex-direction: column; flex-direction: column;}\r\n\r\n.ability-card {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-direction: column; flex-direction: column;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    height: auto; width: auto;\r\n    margin: 2%; padding: 5% 5%;\r\n    border-radius: 10px;\r\n    background-color: #202020;\r\n    color: lightgray;\r\n}\r\n\r\n.ability-card:hover {border: 1px solid gray;}\r\n\r\n.card-label {\r\n    display: -ms-flexbox;\r\n    display: flex; -ms-flex-pack: justify; justify-content: space-between;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    color: #6082a6;\r\n    font-weight: bold;\r\n}\r\n\r\n.ability-desc {padding: 5px; font-size: 85%; color: gray;}\r\n\r\n.ability-box {display: -ms-flexbox;display: flex; -ms-flex-direction: column; flex-direction: column; margin: 20px;}\r\n\r\n.ability-name {padding: 5px;}\r\n.ability-name {background-color: #101010;}\r\n.ability-desc {background-color: #202020; color: lightgray;}"

/***/ })

},[763]);
//# sourceMappingURL=main.bundle.map