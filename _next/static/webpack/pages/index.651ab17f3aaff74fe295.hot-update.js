webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Languages.tsx":
/*!**************************************!*\
  !*** ./src/components/Languages.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Stepper */ \"./node_modules/@material-ui/core/esm/Stepper/index.js\");\n/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Step */ \"./node_modules/@material-ui/core/esm/Step/index.js\");\n/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/StepLabel */ \"./node_modules/@material-ui/core/esm/StepLabel/index.js\");\n/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Check */ \"./node_modules/@material-ui/icons/Check.js\");\n/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/StepConnector */ \"./node_modules/@material-ui/core/esm/StepConnector/index.js\");\n\n\nvar _jsxFileName = \"/home/ubuntu/cfchenr.github.io/src/components/Languages.tsx\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar QontoConnector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  alternativeLabel: {\n    top: 10,\n    left: 'calc(-50% + 16px)',\n    right: 'calc(50% + 16px)'\n  },\n  active: {\n    '& $line': {\n      borderColor: '#784af4'\n    }\n  },\n  completed: {\n    '& $line': {\n      borderColor: '#784af4'\n    }\n  },\n  line: {\n    borderColor: '#eaeaf0',\n    borderTopWidth: 3,\n    borderRadius: 1\n  }\n})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\nvar useQontoStepIconStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  root: {\n    display: 'flex',\n    height: 22,\n    alignItems: 'center'\n  },\n  active: {\n    color: '#784af4'\n  },\n  circle: {\n    width: 8,\n    height: 8,\n    borderRadius: '50%',\n    backgroundColor: 'currentColor'\n  },\n  completed: {\n    color: '#784af4',\n    zIndex: 1,\n    fontSize: 18\n  }\n});\n\nfunction QontoStepIcon(props) {\n  _s();\n\n  var classes = useQontoStepIconStyles();\n  var active = props.active,\n      completed = props.completed;\n  return __jsx(\"div\", {\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(classes.root, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, classes.active, active)),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }\n  }, completed ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    className: classes.completed,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }) : __jsx(\"div\", {\n    className: classes.circle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(QontoStepIcon, \"zRam3KVaNpVBlW51GPG1kex6cwg=\", false, function () {\n  return [useQontoStepIconStyles];\n});\n\n_c = QontoStepIcon;\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"createStyles\"])({\n    root: {\n      width: '100%'\n    },\n    button: {\n      marginRight: theme.spacing(1)\n    },\n    instructions: {\n      marginTop: theme.spacing(1),\n      marginBottom: theme.spacing(1)\n    }\n  });\n});\n\nfunction getSteps() {\n  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];\n}\n\nfunction getStepContent(step) {\n  switch (step) {\n    case 1:\n      return 'Written ';\n\n    case 2:\n      return 'Spoken (+Written)';\n\n    case 3:\n      return 'Native';\n  }\n}\n\nvar Languages = function Languages() {\n  _s2();\n\n  var classes = useStyles();\n  return __jsx(\"div\", {\n    className: \"section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }\n  }, \"Languages\"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    container: true,\n    spacing: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    alternativeLabel: true,\n    activeStep: 1,\n    connector: __jsx(QontoConnector, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 26\n      }\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 13\n    }\n  }, [1, 2, 3].map(function (label) {\n    return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      key: label,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 17\n      }\n    }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      StepIconComponent: QontoStepIcon,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 19\n      }\n    }, getStepContent(label)));\n  }))))));\n};\n\n_s2(Languages, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c2 = Languages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Languages);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"QontoStepIcon\");\n$RefreshReg$(_c2, \"Languages\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGFuZ3VhZ2VzLnRzeD83OTNjIl0sIm5hbWVzIjpbIlFvbnRvQ29ubmVjdG9yIiwid2l0aFN0eWxlcyIsImFsdGVybmF0aXZlTGFiZWwiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJhY3RpdmUiLCJib3JkZXJDb2xvciIsImNvbXBsZXRlZCIsImxpbmUiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlclJhZGl1cyIsIlN0ZXBDb25uZWN0b3IiLCJ1c2VRb250b1N0ZXBJY29uU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiY2lyY2xlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJmb250U2l6ZSIsIlFvbnRvU3RlcEljb24iLCJwcm9wcyIsImNsYXNzZXMiLCJjbHN4IiwidXNlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJidXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJpbnN0cnVjdGlvbnMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJnZXRTdGVwcyIsImdldFN0ZXBDb250ZW50Iiwic3RlcCIsIkxhbmd1YWdlcyIsIm1hcCIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxjQUFjLEdBQUdDLDJFQUFVLENBQUM7QUFDaENDLGtCQUFnQixFQUFFO0FBQ2hCQyxPQUFHLEVBQUUsRUFEVztBQUVoQkMsUUFBSSxFQUFFLG1CQUZVO0FBR2hCQyxTQUFLLEVBQUU7QUFIUyxHQURjO0FBTWhDQyxRQUFNLEVBQUU7QUFDTixlQUFXO0FBQ1RDLGlCQUFXLEVBQUU7QUFESjtBQURMLEdBTndCO0FBV2hDQyxXQUFTLEVBQUU7QUFDVCxlQUFXO0FBQ1RELGlCQUFX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cy9MYW5ndWFnZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xuaW1wb3J0IGxhbmd1YWdlcyBmcm9tICcuLi9hc3NldHMvbGFuZ3VhZ2VzJ1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcblxuaW1wb3J0IHtcbiAgbWFrZVN0eWxlcyxcbiAgVGhlbWUsXG4gIGNyZWF0ZVN0eWxlcyxcbiAgd2l0aFN0eWxlc1xufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IFN0ZXBwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlcidcbmltcG9ydCBTdGVwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXAnXG5pbXBvcnQgU3RlcExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbCdcbmltcG9ydCBDaGVjayBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2snXG5pbXBvcnQgU3RlcENvbm5lY3RvciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwQ29ubmVjdG9yJ1xuaW1wb3J0IHsgU3RlcEljb25Qcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBJY29uJ1xuXG5jb25zdCBRb250b0Nvbm5lY3RvciA9IHdpdGhTdHlsZXMoe1xuICBhbHRlcm5hdGl2ZUxhYmVsOiB7XG4gICAgdG9wOiAxMCxcbiAgICBsZWZ0OiAnY2FsYygtNTAlICsgMTZweCknLFxuICAgIHJpZ2h0OiAnY2FsYyg1MCUgKyAxNnB4KSdcbiAgfSxcbiAgYWN0aXZlOiB7XG4gICAgJyYgJGxpbmUnOiB7XG4gICAgICBib3JkZXJDb2xvcjogJyM3ODRhZjQnXG4gICAgfVxuICB9LFxuICBjb21wbGV0ZWQ6IHtcbiAgICAnJiAkbGluZSc6IHtcbiAgICAgIGJvcmRlckNvbG9yOiAnIzc4NGFmNCdcbiAgICB9XG4gIH0sXG4gIGxpbmU6IHtcbiAgICBib3JkZXJDb2xvcjogJyNlYWVhZjAnLFxuICAgIGJvcmRlclRvcFdpZHRoOiAzLFxuICAgIGJvcmRlclJhZGl1czogMVxuICB9XG59KShTdGVwQ29ubmVjdG9yKVxuXG5jb25zdCB1c2VRb250b1N0ZXBJY29uU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgaGVpZ2h0OiAyMixcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBhY3RpdmU6IHtcbiAgICBjb2xvcjogJyM3ODRhZjQnXG4gIH0sXG4gIGNpcmNsZToge1xuICAgIHdpZHRoOiA4LFxuICAgIGhlaWdodDogOCxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgY29tcGxldGVkOiB7XG4gICAgY29sb3I6ICcjNzg0YWY0JyxcbiAgICB6SW5kZXg6IDEsXG4gICAgZm9udFNpemU6IDE4XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIFFvbnRvU3RlcEljb24ocHJvcHM6IFN0ZXBJY29uUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVFvbnRvU3RlcEljb25TdHlsZXMoKVxuICBjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xuICAgICAgICBbY2xhc3Nlcy5hY3RpdmVdOiBhY3RpdmVcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIHtjb21wbGV0ZWQgPyAoXG4gICAgICAgIDxDaGVjayBjbGFzc05hbWU9e2NsYXNzZXMuY29tcGxldGVkfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2lyY2xlfSAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKVxuICAgIH0sXG4gICAgaW5zdHJ1Y3Rpb25zOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSlcbiAgICB9XG4gIH0pXG4pXG5cbmZ1bmN0aW9uIGdldFN0ZXBzKCkge1xuICByZXR1cm4gWydTZWxlY3QgY2FtcGFpZ24gc2V0dGluZ3MnLCAnQ3JlYXRlIGFuIGFkIGdyb3VwJywgJ0NyZWF0ZSBhbiBhZCddXG59XG5cbmZ1bmN0aW9uIGdldFN0ZXBDb250ZW50KHN0ZXA6IG51bWJlcikge1xuICBzd2l0Y2ggKHN0ZXApIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gJ1dyaXR0ZW4gJ1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiAnU3Bva2VuICgrV3JpdHRlbiknXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuICdOYXRpdmUnXG4gIH1cbn1cblxuY29uc3QgTGFuZ3VhZ2VzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgIDxoMj5MYW5ndWFnZXM8L2gyPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezN9PjwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICB7Lyoge2xhbmd1YWdlcyA/IChcbiAgICAgICAgICAgIGxhbmd1YWdlcy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgey8qIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImxlZ2VuZFwiPntlbGVtZW50Lm5hbWV9PC9UeXBvZ3JhcGh5PiAqL31cbiAgICAgICAgICAgIDxTdGVwcGVyXG4gICAgICAgICAgICAgIGFsdGVybmF0aXZlTGFiZWxcbiAgICAgICAgICAgICAgYWN0aXZlU3RlcD17MX1cbiAgICAgICAgICAgICAgY29ubmVjdG9yPXs8UW9udG9Db25uZWN0b3IgLz59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtbMSwgMiwgM10ubWFwKGxhYmVsID0+IChcbiAgICAgICAgICAgICAgICA8U3RlcCBrZXk9e2xhYmVsfT5cbiAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWwgU3RlcEljb25Db21wb25lbnQ9e1FvbnRvU3RlcEljb259PlxuICAgICAgICAgICAgICAgICAgICB7Z2V0U3RlcENvbnRlbnQobGFiZWwpfVxuICAgICAgICAgICAgICAgICAgPC9TdGVwTGFiZWw+XG4gICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU3RlcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+PC8+XG4gICAgICAgICAgKX0gKi99XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZXNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Languages.tsx\n");

/***/ })

})