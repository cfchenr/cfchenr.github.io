webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Interface.tsx":
/*!**************************************!*\
  !*** ./src/components/Interface.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ \"./node_modules/@material-ui/styles/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _styles_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages */ \"./src/styles/pages/index.ts\");\n/* harmony import */ var _HelloWorld__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HelloWorld */ \"./src/components/HelloWorld.tsx\");\n/* harmony import */ var _Interests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Interests */ \"./src/components/Interests.tsx\");\n/* harmony import */ var _WorkHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WorkHistory */ \"./src/components/WorkHistory.tsx\");\n/* harmony import */ var _Academic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Academic */ \"./src/components/Academic.tsx\");\n/* harmony import */ var _SoftSkills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SoftSkills */ \"./src/components/SoftSkills.tsx\");\n/* harmony import */ var _Languages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Languages */ \"./src/components/Languages.tsx\");\n/* harmony import */ var _OtherExeperiences__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OtherExeperiences */ \"./src/components/OtherExeperiences.tsx\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/ubuntu/cfchenr.github.io/src/components/Interface.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Interface = function Interface(_ref) {\n  _s();\n\n  var color = _ref.color,\n      world = _ref.world;\n  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createMuiTheme\"])({\n    palette: {\n      primary: {\n        // Purple and green play nicely together.\n        main: '#' + color\n      },\n      contrastThreshold: 3\n    },\n    typography: {\n      // Em chinês e japonês os caracteres são geralmente maiores,\n      // então um tamanho de letra menor pode ser apropriado.\n      fontSize: 12\n    }\n  });\n  theme.palette.secondary.main = theme.palette.getContrastText(theme.palette.primary.main);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    document.documentElement.style.setProperty('--primary', '#' + color);\n  }, [color]);\n  return __jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: theme,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(_styles_pages__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(_HelloWorld__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    world: world,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    container: true,\n    spacing: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, __jsx(_WorkHistory__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, __jsx(_OtherExeperiences__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }))), __jsx(_Academic__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }), __jsx(_SoftSkills__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }), __jsx(_Languages__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }), __jsx(_Interests__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Interface, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Interface;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Interface);\n\nvar _c;\n\n$RefreshReg$(_c, \"Interface\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW50ZXJmYWNlLnRzeD9hMmVlIl0sIm5hbWVzIjpbIkludGVyZmFjZSIsImNvbG9yIiwid29ybGQiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiY29udHJhc3RUaHJlc2hvbGQiLCJ0eXBvZ3JhcGh5IiwiZm9udFNpemUiLCJzZWNvbmRhcnkiLCJnZXRDb250cmFzdFRleHQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBMEIsR0FBRyxTQUE3QkEsU0FBNkIsT0FBc0I7QUFBQTs7QUFBQSxNQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3ZELE1BQU1DLEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUMzQkMsV0FBTyxFQUFFO0FBQ1BDLGFBQU8sRUFBRTtBQUNQO0FBQ0FDLFlBQUksRUFBRyxNQUFNTjtBQUZOLE9BREY7QUFLUE8sdUJBQWlCLEVBQUU7QUFMWixLQURrQjtBQVEzQkMsY0FBVSxFQUFFO0FBQ1Y7QUFDQTtBQUNBQyxjQUFRLEVBQUU7QUFIQTtBQVJlLEdBQUQsQ0FBNUI7QUFjQVAsT0FBSyxDQUFDRSxPQUFOLENBQWNNLFNBQWQsQ0FBd0JKLElBQXhCLEdBQStCSixLQUFLLENBQUNFLE9BQU4sQ0FBY08sZUFBZCxDQUM3QlQsS0FBSyxDQUFDRSxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLElBRE8sQ0FBL0I7QUFJQU0seURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFlBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsS0FBekIsQ0FBK0JDLFdBQS9CLENBQ0UsV0FERixFQUVHLE1BQU1oQixLQUZUO0FBSUQsR0FMUSxFQUtOLENBQUNBLEtBQUQsQ0FMTSxDQUFUO0FBT0EsU0FDRSxNQUFDLGlFQUFEO0FBQWUsU0FBSyxFQUFFRSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFZLFNBQUssRUFBRUQsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywrREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBRkYsRUFVRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFhRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixDQURGLENBREY7QUFtQkQsQ0E3Q0Q7O0dBQU1GLFM7O0tBQUFBLFM7QUErQ1NBLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSW50ZXJmYWNlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGNvbG9yOiBzdHJpbmdcbiAgd29ybGQ6IHN0cmluZ1xufVxuXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcydcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9zdHlsZXMvcGFnZXMnXG5pbXBvcnQgSGVsbG9Xb3JsZCBmcm9tICcuL0hlbGxvV29ybGQnXG5pbXBvcnQgSW50ZXJlc3RzIGZyb20gJy4vSW50ZXJlc3RzJ1xuaW1wb3J0IFdvcmtIaXN0b3J5IGZyb20gJy4vV29ya0hpc3RvcnknXG5pbXBvcnQgQWNhZGVtaWMgZnJvbSAnLi9BY2FkZW1pYydcbmltcG9ydCBTb2Z0U2tpbGxzIGZyb20gJy4vU29mdFNraWxscydcbmltcG9ydCBMYW5ndWFnZXMgZnJvbSAnLi9MYW5ndWFnZXMnXG5pbXBvcnQgT3RoZXJFeGVwZXJpZW5jZXMgZnJvbSAnLi9PdGhlckV4ZXBlcmllbmNlcydcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXG5cbmNvbnN0IEludGVyZmFjZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY29sb3IsIHdvcmxkIH0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICAvLyBQdXJwbGUgYW5kIGdyZWVuIHBsYXkgbmljZWx5IHRvZ2V0aGVyLlxuICAgICAgICBtYWluOiAoJyMnICsgY29sb3IpIGFzIHN0cmluZ1xuICAgICAgfSxcbiAgICAgIGNvbnRyYXN0VGhyZXNob2xkOiAzXG4gICAgfSxcbiAgICB0eXBvZ3JhcGh5OiB7XG4gICAgICAvLyBFbSBjaGluw6pzIGUgamFwb27DqnMgb3MgY2FyYWN0ZXJlcyBzw6NvIGdlcmFsbWVudGUgbWFpb3JlcyxcbiAgICAgIC8vIGVudMOjbyB1bSB0YW1hbmhvIGRlIGxldHJhIG1lbm9yIHBvZGUgc2VyIGFwcm9wcmlhZG8uXG4gICAgICBmb250U2l6ZTogMTJcbiAgICB9XG4gIH0pXG4gIHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4gPSB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dChcbiAgICB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAnLS1wcmltYXJ5JyxcbiAgICAgICgnIycgKyBjb2xvcikgYXMgc3RyaW5nXG4gICAgKVxuICB9LCBbY29sb3JdKVxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWxsb1dvcmxkIHdvcmxkPXt3b3JsZH0gLz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8V29ya0hpc3RvcnkgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxPdGhlckV4ZXBlcmllbmNlcyAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8QWNhZGVtaWMgLz5cbiAgICAgICAgPFNvZnRTa2lsbHMgLz5cbiAgICAgICAgPExhbmd1YWdlcyAvPlxuICAgICAgICA8SW50ZXJlc3RzIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJmYWNlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Interface.tsx\n");

/***/ })

})