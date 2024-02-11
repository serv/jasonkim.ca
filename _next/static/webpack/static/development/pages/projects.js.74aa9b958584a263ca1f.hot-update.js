webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/Projects/Projects.js":
/*!*****************************************!*\
  !*** ./components/Projects/Projects.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Projects; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./components/Projects/Project.js\");\n/* harmony import */ var _images_odiobooks_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/odiobooks.png */ \"./components/Projects/images/odiobooks.png\");\n/* harmony import */ var _images_justenough_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/justenough.png */ \"./components/Projects/images/justenough.png\");\n/* harmony import */ var _images_h1b_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/h1b.png */ \"./components/Projects/images/h1b.png\");\n/* harmony import */ var _images_mortgage_calculator_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/mortgage-calculator.png */ \"./components/Projects/images/mortgage-calculator.png\");\nvar _jsxFileName = \"/Users/jasonkim/projects/websites/jasonkim.ca/components/Projects/Projects.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar projects = [{\n  name: 'Unlike X Tweets',\n  description: 'Mass delete Likes in your Twitter profile.',\n  url: '',\n  image: null\n}, {\n  name: 'Mortgage Calculator',\n  description: 'A calculator that calculates the amortization of a mortgage',\n  url: 'http://jasonkim.ca/projects/mortgage-calculator/',\n  image: _images_mortgage_calculator_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}, {\n  name: 'Odiobooks',\n  description: 'Odiobooks allows you to listen to audiobooks and read the books at the same time.',\n  url: 'https://odiobooks.com/',\n  image: _images_odiobooks_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  name: 'H1BHub',\n  description: 'H1BHub is a data pipeline tool that provides you clean H1B data from 2014 to 2018 in local Postgresql database.',\n  url: 'https://github.com/serv/h1bhub',\n  image: _images_h1b_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}, {\n  name: 'Just Enough Ruby To Get By',\n  description: 'Just Enough Ruby To Get By is a free programming book on Ruby.',\n  url: 'http://jasonkim.ca/projects/just_enough_ruby_to_get_by/',\n  image: _images_justenough_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}];\nfunction Projects() {\n  var _this = this;\n\n  var projectsList = projects.map(function (p, index) {\n    return __jsx(_Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      name: p.name,\n      description: p.description,\n      url: p.url,\n      image: p.image,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 7\n      }\n    });\n  });\n  return __jsx(\"div\", {\n    className: \"container mx-auto pb-12\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"text-gray-900 pt-8 pb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"name whitespace-no-wrap text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"hover:underline\",\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, \"Jason Kim\")), __jsx(\"div\", {\n    className: \"blurb text-sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, \"Software engineer working for Coupang in Seattle, WA\")), __jsx(\"div\", {\n    className: \"text-gray-900 pb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, \"Projects\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, projectsList));\n}\n_c = Projects;\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzLmpzPzJjMTEiXSwibmFtZXMiOlsicHJvamVjdHMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJpbWFnZSIsIm1vcnRnYWdlQ2FsY3VsYXRvciIsIm9kaW9ib29rc0ltZyIsImgxYkltZyIsImp1c3Rlbm91Z2hJbWciLCJQcm9qZWN0cyIsInByb2plY3RzTGlzdCIsIm1hcCIsInAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxNQUFJLEVBQUUsaUJBRFI7QUFFRUMsYUFBVyxFQUFFLDRDQUZmO0FBR0VDLEtBQUcsRUFBRSxFQUhQO0FBSUVDLE9BQUssRUFBRTtBQUpULENBRGUsRUFPZjtBQUNFSCxNQUFJLEVBQUUscUJBRFI7QUFFRUMsYUFBVyxFQUFFLDZEQUZmO0FBR0VDLEtBQUcsRUFBRSxrREFIUDtBQUlFQyxPQUFLLEVBQUVDLHVFQUFrQkE7QUFKM0IsQ0FQZSxFQWFmO0FBQ0VKLE1BQUksRUFBRSxXQURSO0FBRUVDLGFBQVcsRUFDVCxtRkFISjtBQUlFQyxLQUFHLEVBQUUsd0JBSlA7QUFLRUMsT0FBSyxFQUFFRSw2REFBWUE7QUFMckIsQ0FiZSxFQW9CZjtBQUNFTCxNQUFJLEVBQUUsUUFEUjtBQUVFQyxhQUFXLEVBQ1QsaUhBSEo7QUFJRUMsS0FBRyxFQUFFLGdDQUpQO0FBS0VDLE9BQUssRUFBRUcsdURBQU1BO0FBTGYsQ0FwQmUsRUE0QmY7QUFDRU4sTUFBSSxFQUFFLDRCQURSO0FBRUVDLGFBQVcsRUFBRSxnRUFGZjtBQUdFQyxLQUFHLEVBQUUseURBSFA7QUFJRUMsT0FBSyxFQUFFSSw4REFBYUE7QUFKdEIsQ0E1QmUsQ0FBakI7QUFvQ2UsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUNqQyxNQUFNQyxZQUFZLEdBQUdWLFFBQVEsQ0FBQ1csR0FBVCxDQUFhLFVBQUNDLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQzlDLFdBQ0UsTUFBQyxnREFBRDtBQUFTLFVBQUksRUFBRUQsQ0FBQyxDQUFDWCxJQUFqQjtBQUF1QixpQkFBVyxFQUFFVyxDQUFDLENBQUNWLFdBQXRDO0FBQW1ELFNBQUcsRUFBRVUsQ0FBQyxDQUFDVCxHQUExRDtBQUErRCxXQUFLLEVBQUVTLENBQUMsQ0FBQ1IsS0FBeEU7QUFBK0UsU0FBRyxFQUFFUyxLQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFHRCxHQUpvQixDQUFyQjtBQU1BLFNBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxvRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBK0IsUUFBSSxFQUFDLEdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FERixFQU1FO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0REFORixDQURGLEVBVUU7QUFBSyxhQUFTLEVBQUMsOEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUgsWUFBTixDQWJGLENBREY7QUFpQkQ7S0F4QnVCRCxRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgb2Rpb2Jvb2tzSW1nIGZyb20gJy4vaW1hZ2VzL29kaW9ib29rcy5wbmcnO1xuaW1wb3J0IGp1c3Rlbm91Z2hJbWcgZnJvbSAnLi9pbWFnZXMvanVzdGVub3VnaC5wbmcnO1xuaW1wb3J0IGgxYkltZyBmcm9tICcuL2ltYWdlcy9oMWIucG5nJztcbmltcG9ydCBtb3J0Z2FnZUNhbGN1bGF0b3IgZnJvbSAnLi9pbWFnZXMvbW9ydGdhZ2UtY2FsY3VsYXRvci5wbmcnO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIG5hbWU6ICdVbmxpa2UgWCBUd2VldHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnTWFzcyBkZWxldGUgTGlrZXMgaW4geW91ciBUd2l0dGVyIHByb2ZpbGUuJyxcbiAgICB1cmw6ICcnLFxuICAgIGltYWdlOiBudWxsLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ01vcnRnYWdlIENhbGN1bGF0b3InLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBjYWxjdWxhdG9yIHRoYXQgY2FsY3VsYXRlcyB0aGUgYW1vcnRpemF0aW9uIG9mIGEgbW9ydGdhZ2UnLFxuICAgIHVybDogJ2h0dHA6Ly9qYXNvbmtpbS5jYS9wcm9qZWN0cy9tb3J0Z2FnZS1jYWxjdWxhdG9yLycsXG4gICAgaW1hZ2U6IG1vcnRnYWdlQ2FsY3VsYXRvcixcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdPZGlvYm9va3MnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ09kaW9ib29rcyBhbGxvd3MgeW91IHRvIGxpc3RlbiB0byBhdWRpb2Jvb2tzIGFuZCByZWFkIHRoZSBib29rcyBhdCB0aGUgc2FtZSB0aW1lLicsXG4gICAgdXJsOiAnaHR0cHM6Ly9vZGlvYm9va3MuY29tLycsXG4gICAgaW1hZ2U6IG9kaW9ib29rc0ltZyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdIMUJIdWInLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0gxQkh1YiBpcyBhIGRhdGEgcGlwZWxpbmUgdG9vbCB0aGF0IHByb3ZpZGVzIHlvdSBjbGVhbiBIMUIgZGF0YSBmcm9tIDIwMTQgdG8gMjAxOCBpbiBsb2NhbCBQb3N0Z3Jlc3FsIGRhdGFiYXNlLicsXG4gICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL3NlcnYvaDFiaHViJyxcbiAgICBpbWFnZTogaDFiSW1nLFxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiAnSnVzdCBFbm91Z2ggUnVieSBUbyBHZXQgQnknLFxuICAgIGRlc2NyaXB0aW9uOiAnSnVzdCBFbm91Z2ggUnVieSBUbyBHZXQgQnkgaXMgYSBmcmVlIHByb2dyYW1taW5nIGJvb2sgb24gUnVieS4nLFxuICAgIHVybDogJ2h0dHA6Ly9qYXNvbmtpbS5jYS9wcm9qZWN0cy9qdXN0X2Vub3VnaF9ydWJ5X3RvX2dldF9ieS8nLFxuICAgIGltYWdlOiBqdXN0ZW5vdWdoSW1nLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XG4gIGNvbnN0IHByb2plY3RzTGlzdCA9IHByb2plY3RzLm1hcCgocCwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFByb2plY3QgbmFtZT17cC5uYW1lfSBkZXNjcmlwdGlvbj17cC5kZXNjcmlwdGlvbn0gdXJsPXtwLnVybH0gaW1hZ2U9e3AuaW1hZ2V9IGtleT17aW5kZXh9IC8+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHBiLTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgcHQtOCBwYi02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZSB3aGl0ZXNwYWNlLW5vLXdyYXAgdGV4dC14bCBzbTp0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bCB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICBKYXNvbiBLaW1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdXJiIHRleHQtc21cIj5Tb2Z0d2FyZSBlbmdpbmVlciB3b3JraW5nIGZvciBDb3VwYW5nIGluIFNlYXR0bGUsIFdBPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIHBiLTIgdGV4dC1sZyBzbTp0ZXh0LXhsIG1kOnRleHQtMnhsIGxnOnRleHQtM3hsIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgIFByb2plY3RzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+e3Byb2plY3RzTGlzdH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects/Projects.js\n");

/***/ })

})