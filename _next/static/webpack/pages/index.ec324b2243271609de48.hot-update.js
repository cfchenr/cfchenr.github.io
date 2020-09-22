webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Interface.tsx":
/*!**************************************!*\
  !*** ./src/components/Interface.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ \"./node_modules/@material-ui/styles/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _styles_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages */ \"./src/styles/pages/index.ts\");\n/* harmony import */ var _HelloWorld__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HelloWorld */ \"./src/components/HelloWorld.tsx\");\n/* harmony import */ var _Interests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Interests */ \"./src/components/Interests.tsx\");\n/* harmony import */ var _WorkHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WorkHistory */ \"./src/components/WorkHistory.tsx\");\n/* harmony import */ var _Academic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Academic */ \"./src/components/Academic.tsx\");\n/* harmony import */ var _SoftSkills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SoftSkills */ \"./src/components/SoftSkills.tsx\");\n/* harmony import */ var _Languages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Languages */ \"./src/components/Languages.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/home/ubuntu/cfchenr.github.io/src/components/Interface.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nvar Interface = function Interface(_ref) {\n  _s();\n\n  var color = _ref.color,\n      company = _ref.company;\n  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createMuiTheme\"])({\n    palette: {\n      primary: {\n        // Purple and green play nicely together.\n        main: '#' + color\n      },\n      contrastThreshold: 3\n    },\n    typography: {\n      // Em chinês e japonês os caracteres são geralmente maiores,\n      // então um tamanho de letra menor pode ser apropriado.\n      fontSize: 12\n    }\n  });\n  theme.palette.secondary.main = theme.palette.getContrastText(theme.palette.primary.main);\n  theme.palette.primary.contrastText = '#00ff00';\n  theme.palette.primary.dark = '#00ff00';\n  theme.palette.action.disabled = '#00ff00';\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.documentElement.style.setProperty('--primary', '#' + color);\n  }, [color]);\n  return __jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: theme,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, __jsx(_styles_pages__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(_HelloWorld__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    companyName: company,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }), __jsx(_WorkHistory__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }), __jsx(_Academic__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }), __jsx(_SoftSkills__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }), __jsx(_Languages__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }), __jsx(_Interests__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Interface, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Interface;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Interface);\n\nvar _c;\n\n$RefreshReg$(_c, \"Interface\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW50ZXJmYWNlLnRzeD9hMmVlIl0sIm5hbWVzIjpbIkludGVyZmFjZSIsImNvbG9yIiwiY29tcGFueSIsInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb250cmFzdFRocmVzaG9sZCIsInR5cG9ncmFwaHkiLCJmb250U2l6ZSIsInNlY29uZGFyeSIsImdldENvbnRyYXN0VGV4dCIsImNvbnRyYXN0VGV4dCIsImRhcmsiLCJhY3Rpb24iLCJkaXNhYmxlZCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUEwQixHQUFHLFNBQTdCQSxTQUE2QixPQUF3QjtBQUFBOztBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDekQsTUFBTUMsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxXQUFPLEVBQUU7QUFDUEMsYUFBTyxFQUFFO0FBQ1A7QUFDQUMsWUFBSSxFQUFHLE1BQU1OO0FBRk4sT0FERjtBQUtQTyx1QkFBaUIsRUFBRTtBQUxaLEtBRGtCO0FBUTNCQyxjQUFVLEVBQUU7QUFDVjtBQUNBO0FBQ0FDLGNBQVEsRUFBRTtBQUhBO0FBUmUsR0FBRCxDQUE1QjtBQWNBUCxPQUFLLENBQUNFLE9BQU4sQ0FBY00sU0FBZCxDQUF3QkosSUFBeEIsR0FBK0JKLEtBQUssQ0FBQ0UsT0FBTixDQUFjTyxlQUFkLENBQzdCVCxLQUFLLENBQUNFLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsSUFETyxDQUEvQjtBQUlBSixPQUFLLENBQUNFLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQk8sWUFBdEIsR0FBcUMsU0FBckM7QUFDQVYsT0FBSyxDQUFDRSxPQUFOLENBQWNDLE9BQWQsQ0FBc0JRLElBQXRCLEdBQTZCLFNBQTdCO0FBQ0FYLE9BQUssQ0FBQ0UsT0FBTixDQUFjVSxNQUFkLENBQXFCQyxRQUFyQixHQUFnQyxTQUFoQztBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsWUFBUSxDQUFDQyxlQUFULENBQXlCQyxLQUF6QixDQUErQkMsV0FBL0IsQ0FDRSxXQURGLEVBRUcsTUFBTXBCLEtBRlQ7QUFJRCxHQUxRLEVBS04sQ0FBQ0EsS0FBRCxDQUxNLENBQVQ7QUFPQSxTQUNFLE1BQUMsaUVBQUQ7QUFBZSxTQUFLLEVBQUVFLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQVksZUFBVyxFQUFFRCxPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsQ0FERjtBQVlELENBMUNEOztHQUFNRixTOztLQUFBQSxTO0FBNENTQSx3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0ludGVyZmFjZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjb2xvcjogc3RyaW5nXG4gIGNvbXBhbnk6IHN0cmluZ1xufVxuXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcydcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9zdHlsZXMvcGFnZXMnXG5pbXBvcnQgSGVsbG9Xb3JsZCBmcm9tICcuL0hlbGxvV29ybGQnXG5pbXBvcnQgSW50ZXJlc3RzIGZyb20gJy4vSW50ZXJlc3RzJ1xuaW1wb3J0IFdvcmtIaXN0b3J5IGZyb20gJy4vV29ya0hpc3RvcnknXG5pbXBvcnQgQWNhZGVtaWMgZnJvbSAnLi9BY2FkZW1pYydcbmltcG9ydCBTb2Z0U2tpbGxzIGZyb20gJy4vU29mdFNraWxscydcbmltcG9ydCBMYW5ndWFnZXMgZnJvbSAnLi9MYW5ndWFnZXMnXG5cbmNvbnN0IEludGVyZmFjZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY29sb3IsIGNvbXBhbnkgfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIC8vIFB1cnBsZSBhbmQgZ3JlZW4gcGxheSBuaWNlbHkgdG9nZXRoZXIuXG4gICAgICAgIG1haW46ICgnIycgKyBjb2xvcikgYXMgc3RyaW5nXG4gICAgICB9LFxuICAgICAgY29udHJhc3RUaHJlc2hvbGQ6IDNcbiAgICB9LFxuICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgIC8vIEVtIGNoaW7DqnMgZSBqYXBvbsOqcyBvcyBjYXJhY3RlcmVzIHPDo28gZ2VyYWxtZW50ZSBtYWlvcmVzLFxuICAgICAgLy8gZW50w6NvIHVtIHRhbWFuaG8gZGUgbGV0cmEgbWVub3IgcG9kZSBzZXIgYXByb3ByaWFkby5cbiAgICAgIGZvbnRTaXplOiAxMlxuICAgIH1cbiAgfSlcbiAgdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbiA9IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KFxuICAgIHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gIClcblxuICB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0ID0gJyMwMGZmMDAnXG4gIHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrID0gJyMwMGZmMDAnXG4gIHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkID0gJyMwMGZmMDAnXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAnLS1wcmltYXJ5JyxcbiAgICAgICgnIycgKyBjb2xvcikgYXMgc3RyaW5nXG4gICAgKVxuICB9LCBbY29sb3JdKVxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWxsb1dvcmxkIGNvbXBhbnlOYW1lPXtjb21wYW55fSAvPlxuICAgICAgICA8V29ya0hpc3RvcnkgLz5cbiAgICAgICAgPEFjYWRlbWljIC8+XG4gICAgICAgIDxTb2Z0U2tpbGxzIC8+XG4gICAgICAgIDxMYW5ndWFnZXMgLz5cbiAgICAgICAgPEludGVyZXN0cyAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyZmFjZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Interface.tsx\n");

/***/ })

})