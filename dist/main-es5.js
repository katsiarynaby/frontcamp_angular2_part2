function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app-footer\">\n  <p class=\"footer-left\">Powered by NewsAPI</p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-line\">\n  <span class=\"logo\">Aggregator Logo</span>\n  <div class=\"login-form\">\n    <button type=\"button\" (click)=\"onLogIn()\">Log In</button>\n    <button type=\"button\" (click)=\"onLogOut()\">Log Out</button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main\">\n    <div class=\"source-line\">\n        <h1 class=\"source-line__text\"> {{title}} </h1>\n    </div>\n    <div class=\"filter\">\n        <div class=\"filter__dropdown-list\">\n            <form>\n                <select #source (change)=\"onChangeObj(source)\">\n                    <option *ngFor=\"let source of sources\" [value]=\"source.id\">\n                         {{source.name}}\n                    </option>\n                </select>\n            </form>\n        </div>\n        <div class=\"filter__search-form\">\n            <input type=\"text\" placeholder=\"Type your text...\" [(ngModel)]=\"text\"/>\n            <button type=\"submit\" (click)=\"onFilter()\">Filter </button>\n        </div>\n        <div class=\"filter__checkbox\">\n          <input\n            type=\"checkbox\"\n            id=\"onlyCreatedByMe\"\n            (change)=\"onCreatedByMeChange($event)\"\n          >\n          <label for=\"onlyCreatedByMe\">Only created by me</label>\n        </div>\n        <div class=\"filter__button\">\n            <button\n            type=\"button\"\n            (click)=\"onGoToEdit()\"\n            > Add article </button>\n        </div>\n    </div>\n        <div class=\"source\">\n            <div *ngIf=\"articles\">\n                <div class=\"news\" *ngFor=\"let article of articles\">\n                    <div class=\"newsWrapper\">\n                        <img [src]=\"article.urlToImage\">\n                        <div class=\"text\">\n                            <p>{{article.title}}</p>\n                            <p>{{article.description}}</p>\n                            <a [href]=\"article.url\">Read more</a>\n                        </div>\n                        <div class=\"date\">\n                            <p>{{article.publishedAt | date:'shortTime' }}</p>\n                        </div>\n                        <div class=\"control\" *ngIf=\"article.createdByMe\">\n                            <button class=\"button\">Edit</button>\n                            <button class=\"button\">Delete</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"loadMore\" *ngIf=\"isAdded; else disabledButton\">\n                    <button  (click)=\"loadMore()\">Load more</button>\n                </div>\n\n                <ng-template #disabledButton>\n                    <div class=\"loadMore\">\n                        <button disabled>Load more</button>\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news-form/news-form.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news-form/news-form.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsFormNewsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container main-container\">\n<form class=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSaveNews()\">\n  <label class=\"field\">\n      Heading\n      <input type=\"text\" class=\"userInput\" formControlName=\"title\" name=\"title\" />\n  </label>\n  <label class=\"field\">\n      Short description\n      <input type=\"text\" class=\"userInput\" formControlName=\"description\" name=\"description\" />\n  </label>\n  <label class=\"field\">\n      Image URL\n      <input type=\"text\" class=\"userInput\" formControlName=\"imageUrl\" name=\"imageUrl\" />\n  </label>\n  <label class=\"field\">\n      Date\n      <input type=\"date\" class=\"userInput\" formControlName=\"date\" name=\"date\" />\n  </label>\n  <label class=\"field\">\n      Source URL\n      <input type=\"text\" class=\"userInput\" formControlName=\"url\" name=\"url\" />\n  </label>\n  <div class=\"controls\">\n      <button type=\"button\" (click)=\"onSaveNews()\" [disabled]=\"!form.valid\" >Save</button>\n      <button type=\"button\" (click)=\"onGoBack()\">Cancel</button>\n  </div>\n</form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>404</h3>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/api/api.service.ts":
  /*!************************************!*\
    !*** ./src/app/api/api.service.ts ***!
    \************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var apiKey = '&apiKey=6b1899f90da8470b95bca82a0aa026e0';
    var baseUrl = 'https://newsapi.org/';

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
      }

      _createClass(ApiService, [{
        key: "getSources",
        value: function getSources() {
          var url = baseUrl + 'v2/sources?country=gb' + apiKey;
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (obj) {
            return obj.sources;
          }));
        }
      }, {
        key: "getArticles",
        value: function getArticles(id, page) {
          var url = baseUrl + "v2/top-headlines?sources=".concat(id, "&page=").concat(page, "&pageSize=5") + apiKey;
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (obj) {
            return obj.articles;
          }));
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main */
    "./src/app/main/index.ts");
    /* harmony import */


    var _not_found__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./not-found */
    "./src/app/not-found/index.ts");
    /* harmony import */


    var _news_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./news-form */
    "./src/app/news-form/index.ts");

    var routes = [{
      path: '',
      component: _main__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
    }, {
      path: 'edit/:NewsID',
      component: _news_form__WEBPACK_IMPORTED_MODULE_5__["NewsFormComponent"]
    }, {
      path: 'edit',
      component: _news_form__WEBPACK_IMPORTED_MODULE_5__["NewsFormComponent"]
    }, {
      path: '404',
      component: _not_found__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    }, {
      path: '**',
      redirectTo: '404'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/elements */
    "./node_modules/@angular/elements/fesm2015/elements.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./footer */
    "./src/app/footer/index.ts");
    /* harmony import */


    var _header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./header */
    "./src/app/header/index.ts");
    /* harmony import */


    var _main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./main */
    "./src/app/main/index.ts");
    /* harmony import */


    var _not_found__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./not-found */
    "./src/app/not-found/index.ts");
    /* harmony import */


    var _news_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./news-form */
    "./src/app/news-form/index.ts");
    /* harmony import */


    var _pipes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pipes */
    "./src/app/pipes/index.ts");

    var AppModule =
    /*#__PURE__*/
    function () {
      function AppModule(injector) {
        _classCallCheck(this, AppModule);

        this.injector = injector;
      }

      _createClass(AppModule, [{
        key: "ngDoBootstrap",
        value: function ngDoBootstrap() {
          var footerComponent = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_footer__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], {
            injector: this.injector
          });
          customElements.define('app-footer', footerComponent);
        }
      }]);

      return AppModule;
    }();

    AppModule.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
      }];
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _footer__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _header__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _main__WEBPACK_IMPORTED_MODULE_12__["MainComponent"], _not_found__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"], _news_form__WEBPACK_IMPORTED_MODULE_14__["NewsFormComponent"], _pipes__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"],
        useValue: '/'
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
      exports: [_pipes__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-footer {\n  background: #D4D2D2;\n  height: 80px;\n  border: 1px solid #eee;\n  padding: 25px;\n}\n\n.footer-left {\n  text-align: right;\n  font-size: 15px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXRzaWFyeW5ha2FuYW5jaHVrL2Zyb250Y2FtcF9hbmd1bGFyMl9wYXJ0Mi9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjRDREMkQyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG4uZm9vdGVyLWxlZnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuIiwiLmFwcC1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjRDREMkQyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5mb290ZXItbGVmdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = function FooterComponent() {
      _classCallCheck(this, FooterComponent);
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/footer/index.ts":
  /*!*********************************!*\
    !*** ./src/app/footer/index.ts ***!
    \*********************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return _footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"];
    });
    /***/

  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-line {\n  border: 1px solid black;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXRzaWFyeW5ha2FuYW5jaHVrL2Zyb250Y2FtcF9hbmd1bGFyMl9wYXJ0Mi9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1saW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIiwiLmhlYWRlci1saW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { Router } from '@angular/router';


    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() // private router: Router,
      {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogIn",
        value: function onLogIn() {
          console.log('To Log In'); // this.router.navigate(['/login']);
        }
      }, {
        key: "onLogOut",
        value: function onLogOut() {
          console.log('To Log Out');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit($event) {
          console.log($event);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/header/index.ts":
  /*!*********************************!*\
    !*** ./src/app/header/index.ts ***!
    \*********************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header.component */
    "./src/app/header/header.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return _header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"];
    });
    /***/

  },

  /***/
  "./src/app/main/index.ts":
  /*!*******************************!*\
    !*** ./src/app/main/index.ts ***!
    \*******************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main.component */
    "./src/app/main/main.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return _main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"];
    });
    /***/

  },

  /***/
  "./src/app/main/main.component.scss":
  /*!******************************************!*\
    !*** ./src/app/main/main.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".filter * {\n  display: inline-block;\n  margin: 5px;\n}\n\n.filter {\n  text-align: center;\n  border: 1px solid black;\n  height: 50%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.source-line {\n  border: 1px solid black;\n  text-align: center;\n  background-color: lightgrey;\n}\n\n.source-line__text {\n  margin: 0;\n}\n\n.source {\n  text-align: center;\n}\n\n.news {\n  border: 1px solid black;\n  padding: 0 20px;\n  margin: 5px 0;\n}\n\n.newsWrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\nimg {\n  margin: 5px;\n  max-width: 200px;\n  max-height: 170px;\n  min-width: 200px;\n  min-height: 170px;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.text {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  padding: 5px;\n}\n\n.date {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.loadMore {\n  width: 20%;\n  margin: 0 auto 10px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXRzaWFyeW5ha2FuYW5jaHVrL2Zyb250Y2FtcF9hbmd1bGFyMl9wYXJ0Mi9zcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0NGOztBRENFO0VBQ0UsU0FBQTtBQ0NKOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLG1CQUFBO1VBQUEsWUFBQTtBQ0FGOztBREdBO0VBRUUsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBRUUsbUJBQUE7VUFBQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyICoge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZmlsdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc291cmNlLWxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG5cbiAgJl9fdGV4dCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5zb3VyY2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLm5ld3NXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5pbWcge1xuICBtYXJnaW46IDVweDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWF4LWhlaWdodDogMTcwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDE3MHB4O1xuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4udGV4dCB7XG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmRhdGUge1xuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ubG9hZE1vcmUge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuIiwiLmZpbHRlciAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmZpbHRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogNTAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNvdXJjZS1saW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufVxuLnNvdXJjZS1saW5lX190ZXh0IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc291cmNlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5uZXdzV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaW1nIHtcbiAgbWFyZ2luOiA1cHg7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDE3MHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtaW4taGVpZ2h0OiAxNzBweDtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnRleHQge1xuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5kYXRlIHtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmxvYWRNb3JlIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(apiService, router) {
        _classCallCheck(this, MainComponent);

        this.apiService = apiService;
        this.router = router;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.title = 'Please, choose source';
          this.text = '';
          this.apiService.getSources().subscribe(function (res) {
            _this.sources = res;
            console.log(_this.sources);
          });
        }
      }, {
        key: "onGoToEdit",
        value: function onGoToEdit() {
          this.router.navigate(['/edit']);
        }
      }, {
        key: "onChangeObj",
        value: function onChangeObj(selectedSource) {
          var _this2 = this;

          console.log(selectedSource);
          this.sourceId = selectedSource.value;
          this.apiService.getArticles(this.sourceId, 1).subscribe(function (res) {
            if (res.length > 0) {
              _this2.articles = res;
              _this2.articlePage = 1;
              _this2.isAdded = true;
            } else {
              console.log('News Api is broken');
            }
          });
          this.title = this.sources.find(function (i) {
            return i.id === _this2.sourceId;
          }).name;
        }
      }, {
        key: "loadMore",
        value: function loadMore() {
          var _this3 = this;

          this.articlePage++;
          this.apiService.getArticles(this.sourceId, this.articlePage).subscribe(function (res) {
            if (res.length > 0) {
              var _this3$articles;

              (_this3$articles = _this3.articles).push.apply(_this3$articles, _toConsumableArray(res));
            } else {
              _this3.isAdded = false;
            }
          });
        }
      }, {
        key: "onCreatedByMeChange",
        value: function onCreatedByMeChange(event) {
          console.log(event.target.checked);
          this.createdByMeParam = event.target.checked;
        }
      }, {
        key: "onFilter",
        value: function onFilter() {
          console.log(this.text);
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MainComponent.prototype, "isAdded", void 0);
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.scss */
      "./src/app/main/main.component.scss")).default]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/models/article.ts":
  /*!***********************************!*\
    !*** ./src/app/models/article.ts ***!
    \***********************************/

  /*! exports provided: ArticleModel */

  /***/
  function srcAppModelsArticleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleModel", function () {
      return ArticleModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ArticleModel = function ArticleModel() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var urlToImage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var description = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var publishedAt = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
      var createdByMe = arguments.length > 6 ? arguments[6] : undefined;

      _classCallCheck(this, ArticleModel);

      this.id = id;
      this.urlToImage = urlToImage;
      this.url = url;
      this.title = title;
      this.description = description;
      this.publishedAt = publishedAt;
      this.createdByMe = createdByMe;
      this.id = id;
      this.urlToImage = urlToImage;
      this.title = title;
      this.description = description;
      this.publishedAt = publishedAt;
      this.createdByMe = createdByMe;
    };
    /***/

  },

  /***/
  "./src/app/news-form/index.ts":
  /*!************************************!*\
    !*** ./src/app/news-form/index.ts ***!
    \************************************/

  /*! exports provided: NewsFormComponent */

  /***/
  function srcAppNewsFormIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _news_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./news-form.component */
    "./src/app/news-form/news-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NewsFormComponent", function () {
      return _news_form_component__WEBPACK_IMPORTED_MODULE_1__["NewsFormComponent"];
    });
    /***/

  },

  /***/
  "./src/app/news-form/news-form.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/news-form/news-form.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsFormNewsFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-container {\n  margin: 10px;\n}\n.main-container .form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 35rem;\n  margin: 0 auto;\n}\n.main-container .field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  margin-bottom: 1rem;\n}\n.main-container .userInput {\n  min-width: 20rem;\n  max-width: 20rem;\n}\n.main-container .userInput.ng-invalid {\n  border: 1px solid red;\n}\n.main-container .button {\n  height: 2rem;\n  display: block;\n  margin: 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXRzaWFyeW5ha2FuYW5jaHVrL2Zyb250Y2FtcF9hbmd1bGFyMl9wYXJ0Mi9zcmMvYXBwL25ld3MtZm9ybS9uZXdzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25ld3MtZm9ybS9uZXdzLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0o7QURFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREdFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUU7RUFDRSxxQkFBQTtBQ0ZKO0FES0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL25ld3MtZm9ybS9uZXdzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xuICBtYXJnaW46IDEwcHg7XG5cbiAgLmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMzVyZW07XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cblxuICAudXNlcklucHV0IHtcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgIG1heC13aWR0aDogMjByZW07XG4gIH1cblxuICAudXNlcklucHV0Lm5nLWludmFsaWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuXG4gIC5idXR0b24ge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgfVxufVxuXG4iLCIubWFpbi1jb250YWluZXIge1xuICBtYXJnaW46IDEwcHg7XG59XG4ubWFpbi1jb250YWluZXIgLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1haW4tY29udGFpbmVyIC5maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubWFpbi1jb250YWluZXIgLnVzZXJJbnB1dCB7XG4gIG1pbi13aWR0aDogMjByZW07XG4gIG1heC13aWR0aDogMjByZW07XG59XG4ubWFpbi1jb250YWluZXIgLnVzZXJJbnB1dC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuLm1haW4tY29udGFpbmVyIC5idXR0b24ge1xuICBoZWlnaHQ6IDJyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDFyZW0gMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/news-form/news-form.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/news-form/news-form.component.ts ***!
    \**************************************************/

  /*! exports provided: NewsFormComponent */

  /***/
  function srcAppNewsFormNewsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsFormComponent", function () {
      return NewsFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/article */
    "./src/app/models/article.ts");
    /* harmony import */


    var _pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../pipes */
    "./src/app/pipes/index.ts");

    var NewsFormComponent =
    /*#__PURE__*/
    function () {
      function NewsFormComponent(fb, router, datePipe) {
        _classCallCheck(this, NewsFormComponent);

        this.fb = fb;
        this.router = router;
        this.datePipe = datePipe;
      }

      _createClass(NewsFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Article = new _models_article__WEBPACK_IMPORTED_MODULE_4__["ArticleModel"]();
          this.form = this.fb.group({
            title: [this.Article.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            description: [this.Article.description],
            imageUrl: [this.Article.urlToImage],
            date: [this.Article.publishedAt && this.datePipe.transform(new Date(this.Article.publishedAt))],
            url: [this.Article.url]
          });
        }
      }, {
        key: "onSaveNews",
        value: function onSaveNews() {
          var Article = Object.assign({}, this.form.value);
          console.log(Article);
          this.onGoBack();
        }
      }, {
        key: "onGoBack",
        value: function onGoBack() {
          this.router.navigate(['/']);
        }
      }]);

      return NewsFormComponent;
    }();

    NewsFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _pipes__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
      }];
    };

    NewsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-news-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./news-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news-form/news-form.component.html")).default,
      providers: [_pipes__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./news-form.component.scss */
      "./src/app/news-form/news-form.component.scss")).default]
    })], NewsFormComponent);
    /***/
  },

  /***/
  "./src/app/not-found/index.ts":
  /*!************************************!*\
    !*** ./src/app/not-found/index.ts ***!
    \************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return _not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"];
    });
    /***/

  },

  /***/
  "./src/app/not-found/not-found.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/not-found/not-found.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotFoundNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\n  font-size: 36px;\n  padding: 30px 40px;\n  text-transform: uppercase;\n  color: #5e0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXRzaWFyeW5ha2FuYW5jaHVrL2Zyb250Y2FtcF9hbmd1bGFyMl9wYXJ0Mi9zcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcbiAgZm9udC1zaXplOiAzNnB4O1xuICBwYWRkaW5nOiAzMHB4IDQwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNWUwMDAwO1xufVxuIiwiaDMge1xuICBmb250LXNpemU6IDM2cHg7XG4gIHBhZGRpbmc6IDMwcHggNDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM1ZTAwMDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent = function NotFoundComponent() {
      _classCallCheck(this, NotFoundComponent);
    };

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.scss */
      "./src/app/not-found/not-found.component.scss")).default]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/pipes/date.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/pipes/date.pipe.ts ***!
    \************************************/

  /*! exports provided: DatePipe */

  /***/
  function srcAppPipesDatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatePipe", function () {
      return DatePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DatePipe =
    /*#__PURE__*/
    function () {
      function DatePipe() {
        _classCallCheck(this, DatePipe);
      }

      _createClass(DatePipe, [{
        key: "transform",
        value: function transform(value) {
          return value.toISOString().substr(0, 10);
        }
      }]);

      return DatePipe;
    }();

    DatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'DatePipe'
    })], DatePipe);
    /***/
  },

  /***/
  "./src/app/pipes/index.ts":
  /*!********************************!*\
    !*** ./src/app/pipes/index.ts ***!
    \********************************/

  /*! exports provided: DatePipe */

  /***/
  function srcAppPipesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./date.pipe */
    "./src/app/pipes/date.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DatePipe", function () {
      return _date_pipe__WEBPACK_IMPORTED_MODULE_1__["DatePipe"];
    });
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/katsiarynakananchuk/frontcamp_angular2_part2/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map