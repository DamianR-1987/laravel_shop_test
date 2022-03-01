/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/delete.js":
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
/***/ (() => {

eval("$(function () {\n  $('.delete').on(\"click\", function () {\n    var _this = this;\n\n    Swal.fire({\n      title: confirmDelete,\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonText: 'Tak',\n      cancelButtonText: 'Nie'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire('Oops...', data.responseJSON.message, data.responseJSON.status);\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwibmFtZXMiOlsiJCIsIm9uIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImNvbmZpcm1EZWxldGUiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJkZWxldGVVcmwiLCJkYXRhIiwiZG9uZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmFpbCIsInJlc3BvbnNlSlNPTiIsIm1lc3NhZ2UiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUMsWUFBVztBQUNUQSxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBVztBQUFBOztBQUNoQ0MsSUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsTUFBQUEsS0FBSyxFQUFFQyxhQUREO0FBRU5DLE1BQUFBLElBQUksRUFBRSxTQUZBO0FBR05DLE1BQUFBLGdCQUFnQixFQUFFLElBSFo7QUFJTkMsTUFBQUEsaUJBQWlCLEVBQUUsS0FKYjtBQUtOQyxNQUFBQSxnQkFBZ0IsRUFBRTtBQUxaLEtBQVYsRUFNR0MsSUFOSCxDQU1RLFVBQUNDLE1BQUQsRUFBWTtBQUNoQixVQUFJQSxNQUFNLENBQUNDLFdBQVgsRUFBd0I7QUFDcEJaLFFBQUFBLENBQUMsQ0FBQ2EsSUFBRixDQUFPO0FBQ0NDLFVBQUFBLE1BQU0sRUFBRSxRQURUO0FBRUNDLFVBQUFBLEdBQUcsRUFBRUMsU0FBUyxHQUFHaEIsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFRaUIsSUFBUixDQUFhLElBQWI7QUFGbEIsU0FBUCxFQUlLQyxJQUpMLENBSVUsVUFBU0QsSUFBVCxFQUFlO0FBQ2pCRSxVQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0gsU0FOTCxFQU9LQyxJQVBMLENBT1UsVUFBU0wsSUFBVCxFQUFlO0FBQ2pCZixVQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVSxTQUFWLEVBQXFCYyxJQUFJLENBQUNNLFlBQUwsQ0FBa0JDLE9BQXZDLEVBQWdEUCxJQUFJLENBQUNNLFlBQUwsQ0FBa0JFLE1BQWxFO0FBQ0gsU0FUTDtBQVVIO0FBQ0osS0FuQkQ7QUFxQkgsR0F0QkQ7QUF1QkgsQ0F4QkEsQ0FBRCIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XG4gICAgJCgnLmRlbGV0ZScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogY29uZmlybURlbGV0ZSxcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1RhaycsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTmllJ1xuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBkZWxldGVVcmwgKyAkKHRoaXMpLmRhdGEoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZmFpbChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoJ09vcHMuLi4nLCBkYXRhLnJlc3BvbnNlSlNPTi5tZXNzYWdlLCBkYXRhLnJlc3BvbnNlSlNPTi5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH0pO1xufSk7Il0sImZpbGUiOiIuL3Jlc291cmNlcy9qcy9kZWxldGUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/delete.js"]();
/******/ 	
/******/ })()
;