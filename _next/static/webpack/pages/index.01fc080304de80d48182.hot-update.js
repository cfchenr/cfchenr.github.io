webpackHotUpdate_N_E("pages/index",{

/***/ "./src/assets/languages.js":
/*!*********************************!*\
  !*** ./src/assets/languages.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var academic = [{\n  \"name\": \"Java\",\n  \"rating\": 60\n}, {\n  \"name\": \"Python\",\n  \"rating\": 60\n}, {\n  \"name\": \"JavaScript\",\n  \"rating\": 80\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (academic);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9sYW5ndWFnZXMuanM/ZWQ2MCJdLCJuYW1lcyI6WyJhY2FkZW1pYyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxrREFBTUEsUUFBUSxHQUFHLENBQUM7QUFDZCxVQUFRLE1BRE07QUFFZCxZQUFVO0FBRkksQ0FBRCxFQUdkO0FBQ0MsVUFBUSxRQURUO0FBRUMsWUFBVTtBQUZYLENBSGMsRUFNZDtBQUNDLFVBQVEsWUFEVDtBQUVDLFlBQVU7QUFGWCxDQU5jLENBQWpCO0FBV2VBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9sYW5ndWFnZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhY2FkZW1pYyA9IFt7XG4gICAgXCJuYW1lXCI6IFwiSmF2YVwiLFxuICAgIFwicmF0aW5nXCI6IDYwXG59LCB7XG4gICAgXCJuYW1lXCI6IFwiUHl0aG9uXCIsXG4gICAgXCJyYXRpbmdcIjogNjBcbn0sIHtcbiAgICBcIm5hbWVcIjogXCJKYXZhU2NyaXB0XCIsXG4gICAgXCJyYXRpbmdcIjogODBcbn1dXG5cbmV4cG9ydCBkZWZhdWx0IGFjYWRlbWljIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/languages.js\n");

/***/ }),

/***/ "./src/components/Languages.tsx":
/*!**************************************!*\
  !*** ./src/components/Languages.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _assets_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/languages */ \"./src/assets/languages.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/ubuntu/cfchenr.github.io/src/components/Languages.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Languages = function Languages() {\n  return __jsx(\"div\", {\n    className: \"section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, \"Languages\"), _assets_languages__WEBPACK_IMPORTED_MODULE_2__[\"default\"] ? _assets_languages__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (element, i) {\n    return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      component: \"legend\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 18\n      }\n    }, element.name);\n  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null));\n};\n\n_c = Languages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Languages);\n\nvar _c;\n\n$RefreshReg$(_c, \"Languages\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGFuZ3VhZ2VzLnRzeD83OTNjIl0sIm5hbWVzIjpbIkxhbmd1YWdlcyIsImxhbmd1YWdlcyIsIm1hcCIsImVsZW1lbnQiLCJpIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLFNBQW1CLEdBQUcsU0FBdEJBLFNBQXNCLEdBQU07QUFDaEMsU0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdDLHlEQUFTLEdBQ1JBLHlEQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFDQyxPQUFELEVBQVVDLENBQVYsRUFBZ0I7QUFDNUIsV0FBTyxNQUFDLG9FQUFEO0FBQVksZUFBUyxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0NELE9BQU8sQ0FBQ0UsSUFBeEMsQ0FBUDtBQUNELEdBRkQsQ0FEUSxHQUtSLGtFQVBKLENBREY7QUFZRCxDQWJEOztLQUFNTCxTO0FBZVNBLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTGFuZ3VhZ2VzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcbmltcG9ydCBsYW5ndWFnZXMgZnJvbSAnLi4vYXNzZXRzL2xhbmd1YWdlcydcblxuY29uc3QgTGFuZ3VhZ2VzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgIDxoMj5MYW5ndWFnZXM8L2gyPlxuICAgICAge2xhbmd1YWdlcyA/IChcbiAgICAgICAgbGFuZ3VhZ2VzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJsZWdlbmRcIj57ZWxlbWVudC5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgfSlcbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Languages.tsx\n");

/***/ })

})