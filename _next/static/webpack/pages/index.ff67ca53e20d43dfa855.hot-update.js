webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SoftSkills.tsx":
/*!***************************************!*\
  !*** ./src/components/SoftSkills.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _assets_softSkills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/softSkills */ \"./src/assets/softSkills.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ \"./node_modules/@material-ui/core/esm/LinearProgress/index.js\");\n/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Radio */ \"./node_modules/@material-ui/core/esm/Radio/index.js\");\n/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ \"./node_modules/@material-ui/core/esm/RadioGroup/index.js\");\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"./node_modules/@material-ui/core/esm/FormControlLabel/index.js\");\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControl */ \"./node_modules/@material-ui/core/esm/FormControl/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/ubuntu/cfchenr.github.io/src/components/SoftSkills.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar BorderLinearProgress = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"createStyles\"])({\n    root: {\n      height: 10,\n      borderRadius: 5\n    },\n    colorPrimary: {\n      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]\n    },\n    bar: {\n      borderRadius: 5,\n      backgroundColor: theme.palette.primary.main\n    }\n  });\n})(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])({\n  root: {\n    flexGrow: 1,\n    textAlign: 'center'\n  },\n  disabled: {\n    color: '#fff !important',\n    marginRight: '8px !important'\n  }\n});\n\nvar SoftSkills = function SoftSkills() {\n  _s();\n\n  var classes = useStyles();\n  return __jsx(\"div\", {\n    className: \"section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, \"Soft Skills\"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    container: true,\n    spacing: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, _assets_softSkills__WEBPACK_IMPORTED_MODULE_2__[\"default\"] ? _assets_softSkills__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (element2, i2) {\n    return __jsx(\"div\", {\n      className: classes.root,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 15\n      }\n    }, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }\n    }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      component: \"legend\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }\n    }, element2.name), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      component: \"fieldset\",\n      key: i2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }\n    }, __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      \"aria-label\": \"gender\",\n      name: \"gender2\",\n      value: element2.rating,\n      row: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 19\n      }\n    }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      value: \"1\",\n      classes: {\n        disabled: classes.disabled // nome da classe, p.ex. `disabled-x`\n\n      },\n      control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 32\n        }\n      }),\n      label: \"\",\n      disabled: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 21\n      }\n    }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      value: \"2\",\n      classes: {\n        disabled: classes.disabled // nome da classe, p.ex. `disabled-x`\n\n      },\n      control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 32\n        }\n      }),\n      label: \"\",\n      disabled: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 21\n      }\n    }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      value: \"3\",\n      classes: {\n        disabled: classes.disabled // nome da classe, p.ex. `disabled-x`\n\n      },\n      control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 32\n        }\n      }),\n      label: \"\",\n      disabled: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 21\n      }\n    }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      value: \"4\",\n      classes: {\n        disabled: classes.disabled // nome da classe, p.ex. `disabled-x`\n\n      },\n      control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 32\n        }\n      }),\n      label: \"\",\n      disabled: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 21\n      }\n    }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      value: \"5\",\n      classes: {\n        disabled: classes.disabled // nome da classe, p.ex. `disabled-x`\n\n      },\n      control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 32\n        }\n      }),\n      label: \"\",\n      disabled: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 21\n      }\n    }))));\n  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)));\n};\n\n_s(SoftSkills, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = SoftSkills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SoftSkills);\n\nvar _c;\n\n$RefreshReg$(_c, \"SoftSkills\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU29mdFNraWxscy50c3g/YjU3NCJdLCJuYW1lcyI6WyJCb3JkZXJMaW5lYXJQcm9ncmVzcyIsIndpdGhTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJjb2xvclByaW1hcnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiZ3JleSIsInR5cGUiLCJiYXIiLCJwcmltYXJ5IiwibWFpbiIsIkxpbmVhclByb2dyZXNzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImZsZXhHcm93IiwidGV4dEFsaWduIiwiZGlzYWJsZWQiLCJjb2xvciIsIm1hcmdpblJpZ2h0IiwiU29mdFNraWxscyIsImNsYXNzZXMiLCJzb2Z0U2tpbGxzIiwibWFwIiwiZWxlbWVudDIiLCJpMiIsIm5hbWUiLCJyYXRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDdENDLDZFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLFlBQU0sRUFBRSxFQURKO0FBRUpDLGtCQUFZLEVBQUU7QUFGVixLQURLO0FBS1hDLGdCQUFZLEVBQUU7QUFDWkMscUJBQWUsRUFDYk4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLElBQWQsQ0FBbUJSLEtBQUssQ0FBQ08sT0FBTixDQUFjRSxJQUFkLEtBQXVCLE9BQXZCLEdBQWlDLEdBQWpDLEdBQXVDLEdBQTFEO0FBRlUsS0FMSDtBQVNYQyxPQUFHLEVBQUU7QUFDSE4sa0JBQVksRUFBRSxDQURYO0FBRUhFLHFCQUFlLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjSSxPQUFkLENBQXNCQztBQUZwQztBQVRNLEdBQUQsQ0FEMEI7QUFBQSxDQUFELENBQVYsQ0FlM0JDLHdFQWYyQixDQUE3QjtBQWlCQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JiLE1BQUksRUFBRTtBQUNKYyxZQUFRLEVBQUUsQ0FETjtBQUVKQyxhQUFTLEVBQUU7QUFGUCxHQURxQjtBQUszQkMsVUFBUSxFQUFFO0FBQ1JDLFNBQUssRUFBRSxpQkFEQztBQUVSQyxlQUFXLEVBQUU7QUFGTDtBQUxpQixDQUFELENBQTVCOztBQVdBLElBQU1DLFVBQW9CLEdBQUcsU0FBdkJBLFVBQXVCLEdBQU07QUFBQTs7QUFDakMsTUFBTUMsT0FBTyxHQUFHUixTQUFTLEVBQXpCO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUUsTUFBQyw4REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVHUywwREFBVSxHQUNUQSwwREFBVSxDQUFDQyxHQUFYLENBQWUsVUFBQ0MsUUFBRCxFQUFXQyxFQUFYLEVBQWtCO0FBQy9CLFdBQ0U7QUFBSyxlQUFTLEVBQUVKLE9BQU8sQ0FBQ3BCLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLG9FQUFEO0FBQVksZUFBUyxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0N1QixRQUFRLENBQUNFLElBQXpDLENBRkYsRUFHRSxNQUFDLHFFQUFEO0FBQWEsZUFBUyxFQUFDLFVBQXZCO0FBQWtDLFNBQUcsRUFBRUQsRUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0VBQUQ7QUFDRSxvQkFBVyxRQURiO0FBRUUsVUFBSSxFQUFDLFNBRlA7QUFHRSxXQUFLLEVBQUVELFFBQVEsQ0FBQ0csTUFIbEI7QUFJRSxTQUFHLE1BSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1FLE1BQUMsMEVBQUQ7QUFDRSxXQUFLLEVBQUMsR0FEUjtBQUVFLGFBQU8sRUFBRTtBQUNQVixnQkFBUSxFQUFFSSxPQUFPLENBQUNKLFFBRFgsQ0FDb0I7O0FBRHBCLE9BRlg7QUFLRSxhQUFPLEVBQUUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTFg7QUFNRSxXQUFLLEVBQUMsRUFOUjtBQU9FLGNBQVEsTUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsRUFlRSxNQUFDLDBFQUFEO0FBQ0UsV0FBSyxFQUFDLEdBRFI7QUFFRSxhQUFPLEVBQUU7QUFDUEEsZ0JBQVEsRUFBRUksT0FBTyxDQUFDSixRQURYLENBQ29COztBQURwQixPQUZYO0FBS0UsYUFBTyxFQUFFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxYO0FBTUUsV0FBSyxFQUFDLEVBTlI7QUFPRSxjQUFRLE1BUFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWZGLEVBd0JFLE1BQUMsMEVBQUQ7QUFDRSxXQUFLLEVBQUMsR0FEUjtBQUVFLGFBQU8sRUFBRTtBQUNQQSxnQkFBUSxFQUFFSSxPQUFPLENBQUNKLFFBRFgsQ0FDb0I7O0FBRHBCLE9BRlg7QUFLRSxhQUFPLEVBQUUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTFg7QUFNRSxXQUFLLEVBQUMsRUFOUjtBQU9FLGNBQVEsTUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BeEJGLEVBaUNFLE1BQUMsMEVBQUQ7QUFDRSxXQUFLLEVBQUMsR0FEUjtBQUVFLGFBQU8sRUFBRTtBQUNQQSxnQkFBUSxFQUFFSSxPQUFPLENBQUNKLFFBRFgsQ0FDb0I7O0FBRHBCLE9BRlg7QUFLRSxhQUFPLEVBQUUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTFg7QUFNRSxXQUFLLEVBQUMsRUFOUjtBQU9FLGNBQVEsTUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BakNGLEVBMENFLE1BQUMsMEVBQUQ7QUFDRSxXQUFLLEVBQUMsR0FEUjtBQUVFLGFBQU8sRUFBRTtBQUNQQSxnQkFBUSxFQUFFSSxPQUFPLENBQUNKLFFBRFgsQ0FDb0I7O0FBRHBCLE9BRlg7QUFLRSxhQUFPLEVBQUUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTFg7QUFNRSxXQUFLLEVBQUMsRUFOUjtBQU9FLGNBQVEsTUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BMUNGLENBREYsQ0FIRixDQURGO0FBNERELEdBN0RELENBRFMsR0FnRVQsa0VBbEVKLENBRkYsQ0FERjtBQTJFRCxDQTdFRDs7R0FBTUcsVTtVQUNZUCxTOzs7S0FEWk8sVTtBQStFU0EseUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Tb2Z0U2tpbGxzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcbmltcG9ydCBzb2Z0U2tpbGxzIGZyb20gJy4uL2Fzc2V0cy9zb2Z0U2tpbGxzJ1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcblxuaW1wb3J0IHtcbiAgbWFrZVN0eWxlcyxcbiAgY3JlYXRlU3R5bGVzLFxuICB3aXRoU3R5bGVzLFxuICBUaGVtZVxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnXG5pbXBvcnQgUmFkaW8gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW8nXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJ1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCdcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCdcblxuY29uc3QgQm9yZGVyTGluZWFyUHJvZ3Jlc3MgPSB3aXRoU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgaGVpZ2h0OiAxMCxcbiAgICAgIGJvcmRlclJhZGl1czogNVxuICAgIH0sXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgIHRoZW1lLnBhbGV0dGUuZ3JleVt0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAyMDAgOiA3MDBdXG4gICAgfSxcbiAgICBiYXI6IHtcbiAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9XG4gIH0pXG4pKExpbmVhclByb2dyZXNzKVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBjb2xvcjogJyNmZmYgIWltcG9ydGFudCcsXG4gICAgbWFyZ2luUmlnaHQ6ICc4cHggIWltcG9ydGFudCdcbiAgfVxufSlcblxuY29uc3QgU29mdFNraWxsczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgPGgyPlNvZnQgU2tpbGxzPC9oMj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fT5cbiAgICAgICAgey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9PiAqL31cbiAgICAgICAge3NvZnRTa2lsbHMgPyAoXG4gICAgICAgICAgc29mdFNraWxscy5tYXAoKGVsZW1lbnQyLCBpMikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwibGVnZW5kXCI+e2VsZW1lbnQyLm5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIGtleT17aTJ9PlxuICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImdlbmRlclwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5kZXIyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsZW1lbnQyLnJhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgcm93XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2xhc3Nlcy5kaXNhYmxlZCAvLyBub21lIGRhIGNsYXNzZSwgcC5leC4gYGRpc2FibGVkLXhgXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2xhc3Nlcy5kaXNhYmxlZCAvLyBub21lIGRhIGNsYXNzZSwgcC5leC4gYGRpc2FibGVkLXhgXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2xhc3Nlcy5kaXNhYmxlZCAvLyBub21lIGRhIGNsYXNzZSwgcC5leC4gYGRpc2FibGVkLXhgXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2xhc3Nlcy5kaXNhYmxlZCAvLyBub21lIGRhIGNsYXNzZSwgcC5leC4gYGRpc2FibGVkLXhgXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2xhc3Nlcy5kaXNhYmxlZCAvLyBub21lIGRhIGNsYXNzZSwgcC5leC4gYGRpc2FibGVkLXhgXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gLz59XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PjwvPlxuICAgICAgICApfVxuICAgICAgICB7LyogPC9HcmlkPiAqL31cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb2Z0U2tpbGxzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SoftSkills.tsx\n");

/***/ })

})