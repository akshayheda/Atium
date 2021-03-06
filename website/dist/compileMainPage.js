/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/MainPage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/MainPage.js":
/*!*************************!*\
  !*** ./src/MainPage.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar config = {\n    apiKey: \"AIzaSyADlbe5mZ62QFaLhPSwnC_ksGTGhBqTyjo\",\n    authDomain: \"atium-e4df2.firebaseapp.com\",\n    databaseURL: \"https://atium-e4df2.firebaseio.com\",\n    projectId: \"atium-e4df2\",\n    storageBucket: \"atium-e4df2.appspot.com\",\n    messagingSenderId: \"254101329920\"\n};\n\nfirebase.initializeApp(config);\n\nvar database = firebase.database();\n\n// database.ref('z4GwaEY5WXZC17998rIuIZojM7D2').once('value')\n//   .then(function(snapshot) {\n//         console.log(snapshot.val());\n//         var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';\n//     });\n\ndatabase.ref('z4GwaEY5WXZC17998rIuIZojM7D2').once(\"value\").then(function (snapshot) {\n    snapshot.forEach(function (childSnapshot) {\n        console.log(childSnapshot.val());\n    });\n});\n\nvar addCard = function addCard(num, project) {\n\n    var myCol = $('<div class=\"col-sm-3 col-md-3 pb-2\"></div>');\n    var myPanel = $('<div class=\"row\" id=\"contentPanel\"><div class=\"col-sm-3 col-md-3 pb-2\"><div class=\"card card-outline-info\" id=\"' + 1 + 'Panel\"><div class=\"card-block\"><a href=\"ProjectView.html\"><button type=\"button\"  id=\"btnGen\" class = \"btn\"><span class=\"float-center\"><i class=\"fa fa-remove\"><h1>' + project + '</h1></i></span></button></a></div></div></div></div>');\n    myPanel.appendTo(myCol);\n    myCol.appendTo('#contentPanel');\n\n    $('.close').on('click', function (e) {\n        e.stopPropagation();\n        var $target = $(this).parents('.col-sm-3');\n        $target.hide('slow', function () {\n            $target.remove();\n        });\n    });\n};\n\n$('#btnGen').click(function () {\n    console.log(\"work\");\n});\n\n//# sourceURL=webpack:///./src/MainPage.js?");

/***/ })

/******/ });