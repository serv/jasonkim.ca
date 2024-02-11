webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/Projects/Projects.js":
/*!*****************************************!*\
  !*** ./components/Projects/Projects.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Projects; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./components/Projects/Project.js\");\n/* harmony import */ var _images_odiobooks_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/odiobooks.png */ \"./components/Projects/images/odiobooks.png\");\n/* harmony import */ var _images_justenough_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/justenough.png */ \"./components/Projects/images/justenough.png\");\n/* harmony import */ var _images_h1b_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/h1b.png */ \"./components/Projects/images/h1b.png\");\n/* harmony import */ var _images_mortgage_calculator_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/mortgage-calculator.png */ \"./components/Projects/images/mortgage-calculator.png\");\n/* harmony import */ var _images_deletelikes_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/deletelikes.png */ \"./components/Projects/images/deletelikes.png\");\nvar _jsxFileName = \"/Users/jasonkim/projects/websites/jasonkim.ca/components/Projects/Projects.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n // TODO: add unlikes\n\nvar projects = [{\n  name: 'Unlike X Tweets',\n  description: 'Mass delete Likes in your Twitter profile.',\n  url: 'projects/unlike-x-tweets',\n  image: _images_deletelikes_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}, {\n  name: 'Mortgage Calculator',\n  description: 'A calculator that calculates the amortization of a mortgage',\n  url: 'http://jasonkim.ca/projects/mortgage-calculator/',\n  image: _images_mortgage_calculator_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}, {\n  name: 'Odiobooks',\n  description: 'Odiobooks allows you to listen to audiobooks and read the books at the same time.',\n  url: 'https://odiobooks.com/',\n  image: _images_odiobooks_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  name: 'H1BHub',\n  description: 'H1BHub is a data pipeline tool that provides you clean H1B data from 2014 to 2018 in local Postgresql database.',\n  url: 'https://github.com/serv/h1bhub',\n  image: _images_h1b_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}, {\n  name: 'Just Enough Ruby To Get By',\n  description: 'Just Enough Ruby To Get By is a free programming book on Ruby.',\n  url: 'http://jasonkim.ca/projects/just_enough_ruby_to_get_by/',\n  image: _images_justenough_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}];\nfunction Projects() {\n  var _this = this;\n\n  var projectsList = projects.map(function (p, index) {\n    return __jsx(_Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      name: p.name,\n      description: p.description,\n      url: p.url,\n      image: p.image,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 7\n      }\n    });\n  });\n  return __jsx(\"div\", {\n    className: \"container mx-auto pb-12\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"text-gray-900 pt-8 pb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"name whitespace-no-wrap text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"hover:underline\",\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, \"Jason Kim\")), __jsx(\"div\", {\n    className: \"blurb text-sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, \"Software engineer working for Microsoft in Redmond, WA\")), __jsx(\"div\", {\n    className: \"text-gray-900 pb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, \"Projects\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, projectsList));\n}\n_c = Projects;\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzLmpzPzJjMTEiXSwibmFtZXMiOlsicHJvamVjdHMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJpbWFnZSIsImRlbGV0ZWxpa2VzIiwibW9ydGdhZ2VDYWxjdWxhdG9yIiwib2Rpb2Jvb2tzSW1nIiwiaDFiSW1nIiwianVzdGVub3VnaEltZyIsIlByb2plY3RzIiwicHJvamVjdHNMaXN0IiwibWFwIiwicCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxNQUFJLEVBQUUsaUJBRFI7QUFFRUMsYUFBVyxFQUFFLDRDQUZmO0FBR0VDLEtBQUcsRUFBRSwwQkFIUDtBQUlFQyxPQUFLLEVBQUVDLCtEQUFXQTtBQUpwQixDQURlLEVBT2Y7QUFDRUosTUFBSSxFQUFFLHFCQURSO0FBRUVDLGFBQVcsRUFBRSw2REFGZjtBQUdFQyxLQUFHLEVBQUUsa0RBSFA7QUFJRUMsT0FBSyxFQUFFRSx1RUFBa0JBO0FBSjNCLENBUGUsRUFhZjtBQUNFTCxNQUFJLEVBQUUsV0FEUjtBQUVFQyxhQUFXLEVBQ1QsbUZBSEo7QUFJRUMsS0FBRyxFQUFFLHdCQUpQO0FBS0VDLE9BQUssRUFBRUcsNkRBQVlBO0FBTHJCLENBYmUsRUFvQmY7QUFDRU4sTUFBSSxFQUFFLFFBRFI7QUFFRUMsYUFBVyxFQUNULGlIQUhKO0FBSUVDLEtBQUcsRUFBRSxnQ0FKUDtBQUtFQyxPQUFLLEVBQUVJLHVEQUFNQTtBQUxmLENBcEJlLEVBNEJmO0FBQ0VQLE1BQUksRUFBRSw0QkFEUjtBQUVFQyxhQUFXLEVBQUUsZ0VBRmY7QUFHRUMsS0FBRyxFQUFFLHlEQUhQO0FBSUVDLE9BQUssRUFBRUssOERBQWFBO0FBSnRCLENBNUJlLENBQWpCO0FBb0NlLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFDakMsTUFBTUMsWUFBWSxHQUFHWCxRQUFRLENBQUNZLEdBQVQsQ0FBYSxVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUM5QyxXQUNFLE1BQUMsZ0RBQUQ7QUFBUyxVQUFJLEVBQUVELENBQUMsQ0FBQ1osSUFBakI7QUFBdUIsaUJBQVcsRUFBRVksQ0FBQyxDQUFDWCxXQUF0QztBQUFtRCxTQUFHLEVBQUVXLENBQUMsQ0FBQ1YsR0FBMUQ7QUFBK0QsV0FBSyxFQUFFVSxDQUFDLENBQUNULEtBQXhFO0FBQStFLFNBQUcsRUFBRVUsS0FBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBR0QsR0FKb0IsQ0FBckI7QUFNQSxTQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGlCQUFiO0FBQStCLFFBQUksRUFBQyxHQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBTkYsQ0FERixFQVVFO0FBQUssYUFBUyxFQUFDLDhFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1ILFlBQU4sQ0FiRixDQURGO0FBaUJEO0tBeEJ1QkQsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IG9kaW9ib29rc0ltZyBmcm9tICcuL2ltYWdlcy9vZGlvYm9va3MucG5nJztcbmltcG9ydCBqdXN0ZW5vdWdoSW1nIGZyb20gJy4vaW1hZ2VzL2p1c3Rlbm91Z2gucG5nJztcbmltcG9ydCBoMWJJbWcgZnJvbSAnLi9pbWFnZXMvaDFiLnBuZyc7XG5pbXBvcnQgbW9ydGdhZ2VDYWxjdWxhdG9yIGZyb20gJy4vaW1hZ2VzL21vcnRnYWdlLWNhbGN1bGF0b3IucG5nJztcbmltcG9ydCBkZWxldGVsaWtlcyBmcm9tICcuL2ltYWdlcy9kZWxldGVsaWtlcy5wbmcnO1xuXG4vLyBUT0RPOiBhZGQgdW5saWtlc1xuY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICBuYW1lOiAnVW5saWtlIFggVHdlZXRzJyxcbiAgICBkZXNjcmlwdGlvbjogJ01hc3MgZGVsZXRlIExpa2VzIGluIHlvdXIgVHdpdHRlciBwcm9maWxlLicsXG4gICAgdXJsOiAncHJvamVjdHMvdW5saWtlLXgtdHdlZXRzJyxcbiAgICBpbWFnZTogZGVsZXRlbGlrZXMsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTW9ydGdhZ2UgQ2FsY3VsYXRvcicsXG4gICAgZGVzY3JpcHRpb246ICdBIGNhbGN1bGF0b3IgdGhhdCBjYWxjdWxhdGVzIHRoZSBhbW9ydGl6YXRpb24gb2YgYSBtb3J0Z2FnZScsXG4gICAgdXJsOiAnaHR0cDovL2phc29ua2ltLmNhL3Byb2plY3RzL21vcnRnYWdlLWNhbGN1bGF0b3IvJyxcbiAgICBpbWFnZTogbW9ydGdhZ2VDYWxjdWxhdG9yLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ09kaW9ib29rcycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnT2Rpb2Jvb2tzIGFsbG93cyB5b3UgdG8gbGlzdGVuIHRvIGF1ZGlvYm9va3MgYW5kIHJlYWQgdGhlIGJvb2tzIGF0IHRoZSBzYW1lIHRpbWUuJyxcbiAgICB1cmw6ICdodHRwczovL29kaW9ib29rcy5jb20vJyxcbiAgICBpbWFnZTogb2Rpb2Jvb2tzSW1nLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0gxQkh1YicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnSDFCSHViIGlzIGEgZGF0YSBwaXBlbGluZSB0b29sIHRoYXQgcHJvdmlkZXMgeW91IGNsZWFuIEgxQiBkYXRhIGZyb20gMjAxNCB0byAyMDE4IGluIGxvY2FsIFBvc3RncmVzcWwgZGF0YWJhc2UuJyxcbiAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vc2Vydi9oMWJodWInLFxuICAgIGltYWdlOiBoMWJJbWcsXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6ICdKdXN0IEVub3VnaCBSdWJ5IFRvIEdldCBCeScsXG4gICAgZGVzY3JpcHRpb246ICdKdXN0IEVub3VnaCBSdWJ5IFRvIEdldCBCeSBpcyBhIGZyZWUgcHJvZ3JhbW1pbmcgYm9vayBvbiBSdWJ5LicsXG4gICAgdXJsOiAnaHR0cDovL2phc29ua2ltLmNhL3Byb2plY3RzL2p1c3RfZW5vdWdoX3J1YnlfdG9fZ2V0X2J5LycsXG4gICAgaW1hZ2U6IGp1c3Rlbm91Z2hJbWcsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgY29uc3QgcHJvamVjdHNMaXN0ID0gcHJvamVjdHMubWFwKChwLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8UHJvamVjdCBuYW1lPXtwLm5hbWV9IGRlc2NyaXB0aW9uPXtwLmRlc2NyaXB0aW9ufSB1cmw9e3AudXJsfSBpbWFnZT17cC5pbWFnZX0ga2V5PXtpbmRleH0gLz5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcGItMTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBwdC04IHBiLTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lIHdoaXRlc3BhY2Utbm8td3JhcCB0ZXh0LXhsIHNtOnRleHQtMnhsIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIEphc29uIEtpbVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1cmIgdGV4dC1zbVwiPlNvZnR3YXJlIGVuZ2luZWVyIHdvcmtpbmcgZm9yIE1pY3Jvc29mdCBpbiBSZWRtb25kLCBXQTwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBwYi0yIHRleHQtbGcgc206dGV4dC14bCBtZDp0ZXh0LTJ4bCBsZzp0ZXh0LTN4bCB0cmFja2luZy13aWRlclwiPlxuICAgICAgICBQcm9qZWN0c1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2Pntwcm9qZWN0c0xpc3R9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Projects/Projects.js\n");

/***/ })

})