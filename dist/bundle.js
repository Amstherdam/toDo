/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* CSS RESET */\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\ninput[type=\"text\"],\ninput[type=\"password\"],\ntextarea,\ninput[type=\"datetime-local\"] {\n  border: 1px solid rgb(133, 133, 133);\n  outline: none;\n}\n\n/* CSS RESET END */\n\n:root {\n  --first-color: #dbe1e4;\n  --second-color: #111;\n  --third-color: #5b1b0c;\n  --sidebar-color: #818181;\n  --sidebarSecond-color: #f1f1f1;\n}\n\nbody {\n  background-color: var(--first-color);\n  color: var(--third-color);\n}\n\nnav {\n  width: 100vw;\n  height: 8vh;\n  background-color: var(--third-color);\n  display: flex;\n  position: sticky;\n  z-index: 20;\n}\n\n#logo {\n  margin: 1.5vh 0 0 3vw;\n}\n\n#logo img {\n  width: 9vh;\n}\n\n#iconFlexDiv {\n  display: flex;\n  justify-content: space-between;\n  width: 90vw;\n  margin: 2.4vh 4vw 0 2vw;\n  font-size: 3vh;\n}\n\n/* ! navbar end */\n\n.sidebar {\n  position: absolute;\n  top: 8vh;\n  background-color: var(--second-color);\n  width: 15vw;\n  height: 92%;\n  display: flex;\n  flex-direction: column;\n  color: var(--sidebar-color);\n  z-index: 1;\n  transition: all 0.5s ease-in-out;\n}\n\n.sidebarItem {\n  color: var(--sidebar-color);\n  text-decoration: none;\n}\n\n.sidebarItem:hover {\n  color: var(--sidebarSecond-color);\n}\n\n.sidebar.active {\n  width: 3vw;\n}\n\n.sidebarItem {\n  position: relative;\n  left: 0;\n  transition: ease-in-out all 0.5s;\n}\n\n.sidebarItem.active {\n  left: -15vw;\n  transition: ease-in-out all 0.5s;\n  text-decoration: none;\n}\n\n#closeBtn {\n  position: relative;\n  top: 12px;\n  left: 18px;\n  font-size: 3.2vh;\n  cursor: pointer;\n  transition: all ease-in-out 0.5s;\n  margin-left: 11vw;\n}\n\n#closeBtn.active {\n  margin-left: 0;\n}\n\n#sidebarIconContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 3vh;\n  margin: 10vh 0 0 3vw;\n  font-size: calc(2.2vh +20px);\n  position: relative;\n  z-index: 5;\n}\n\n#addNewProjectBtn {\n  /*  */\n  margin-left: 0.8vw;\n  cursor: pointer;\n  position: absolute;\n  top: 14.2vh;\n  left: 9vw;\n  font-size: 1.1vw;\n  transition: ease-in-out all 0.5s;\n}\n\n#addNewProjectBtn.active {\n  left: -15vw;\n  text-decoration: none;\n}\n\n#projectsContainer {\n  margin: 2vh 0 0 3.5vw;\n}\n\n#projectsContainer {\n  position: absolute;\n}\n\n.projectsTitle {\n  position: relative;\n  top: 28vh;\n  left: 1vw;\n  transition: ease-in-out all 0.5s;\n  margin-top: 2vh;\n  cursor: pointer;\n}\n\n.projectsTitle.active {\n  left: -15vw;\n  transition: ease-in-out all 0.5s;\n  text-decoration: none;\n}\n\n/*! main  content*/\n\n#mainContent {\n  margin: 8vh 19vw;\n  width: 70vw;\n  transition: ease-in-out 0.5s;\n}\n\n#mainContent.active {\n  margin: 8vh 10vw;\n  width: 82vw;\n}\n\n#mainContentHeader {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.deleteButton { \n  position: absolute;\n  left: 98.5%;\n  cursor: pointer;\n}\n\n#addNewFormBtn {\n  display: flex;\n  align-items: center;\n  margin-top: 3vh;\n  font-size: 3vh;\n  cursor: pointer;\n  color: #0ba71a;\n}\n\n#mainContentH2 {\n  font-size: 6vh;\n  margin-top: 6vh;\n}\n\n/* ! Modal CSS */\n\n#modalDataInput {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: rgba(0, 0, 0, 0.403);\n  color: rgb(90, 90, 90);\n}\n\n.beCloseModal {\n  opacity: 0;\n  display: none;\n}\n\n.modalDataInputOpen {\n  opacity: 1;\n  display: flex;\n}\n\n#modalHeader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2vh 1vw 2vh 1vw;\n}\n\n#modalBG {\n  background-color: #e1e1e1;\n  padding: 2rem;\n  min-width: 40vw;\n  min-height: 40vh;\n  border-radius: 4%;\n  max-height: 60vh;\n}\n\n#modalHeader h3 {\n  font-size: 4vh;\n  margin-top: 1vh;\n  color: black;\n}\n\n#modalHeader i {\n  color: rgb(90, 90, 90);\n  font-size: 2vh;\n  cursor: pointer;\n  transition: ease-in-out 0.2s;\n  padding: 5px;\n}\n\n#modalHeader i:hover {\n  transform: rotate(180deg);\n  color: black;\n}\n\n.formItems {\n  display: flex;\n  flex-direction: column;\n  width: 16vw;\n  padding: 10px 10px 10px 0;\n  font-size: 2vh;\n  letter-spacing: 1.2px;\n}\n\ninput,\ntextarea {\n  padding: 10px;\n  margin: 10px 0 10px 0;\n  border-radius: 8px;\n  font-size: 1.6vh;\n  letter-spacing: 0.8px;\n  line-height: 2.5vh;\n}\n\nselect {\n  font-size: 1em;\n  padding: 10px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 10px 0 10px 0;\n  background: white;\n  color: black;\n  outline: none;\n  border-radius: 8px;\n}\n\ntextarea {\n  min-width: 18vw;\n  min-height: 12vh;\n  max-height: 30vh;\n  max-width: 23vw;\n}\n\n#addNewForm {\n  display: flex;\n  flex-direction: row;\n  gap: 8vw;\n}\n\n.modalBtn {\n  padding: 1vh 3vh;\n  font-size: 2vh;\n  border-radius: 5px;\n  cursor: pointer;\n  border: 0.2px solid rgb(133, 133, 133);\n  transition: ease-in-out 0.3s;\n  margin: 3vh 0 0 1.5vw;\n}\n\n#modalAdddBtn {\n  background-color: rgb(31, 224, 86);\n}\n\n#modalAdddBtn:hover {\n  background-color: rgb(36, 242, 94);\n}\n\n#modalCloseBtn {\n  background-color: rgb(168, 168, 168);\n}\n\n#modalCloseBtn:hover {\n  /* background-color: rgb(195, 192, 192); */\n  background-color: rgb(200, 31, 31);\n  color: whitesmoke;\n}\n\n/* ! newProjectModal */\n\n#newProjectModal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: rgba(0, 0, 0, 0.403);\n  color: rgb(90, 90, 90);\n}\n\n#newProjectModalContainer {\n  background-color: #e1e1e1;\n  padding: 2rem;\n  min-width: 30vw;\n  min-height: 20vh;\n  border-radius: 10px;\n  max-height: 30vh;\n}\n\n#newProjectModalDiv {\n  display: flex;\n  flex-direction: column;\n  margin: 3vh 1vw 0 0;\n}\n\n#newProjectModalContainer h4 {\n  font-size: 2rem;\n  margin: 1vh 0 1vh 0.4vw;\n}\n\n#newProjectModalDiv > label {\n  font-size: 2.2vh;\n}\n\n#newProjectBtn {\n  display: flex;\n  justify-content: flex-end;\n}\n\n#newProjectAddBtn {\n  background-color: rgb(31, 224, 86);\n}\n\n#newProjectAddBtn:hover {\n  background-color: rgb(36, 242, 94);\n}\n\n#newProjectCloseBtn {\n  background-color: rgb(168, 168, 168);\n}\n\n#newProjectCloseBtn:hover {\n  /* background-color: rgb(195, 192, 192); */\n  background-color: rgb(200, 31, 31);\n  color: whitesmoke;\n}\n\n\n/* ! delete project modal  */\n\n#deleteProjectModal { \n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: rgba(0, 0, 0, 0.403);\n  color: rgb(90, 90, 90);  \n}\n\n#deleteProject { \n  background-color: #e1e1e1;\n  margin: 30vh 50vh;\n  padding: 2rem;\n  min-width: 22vw;\n  min-height: 10vh;\n  border-radius: 10px;\n  max-height: 20vh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n#modalClose2 { \n  position: absolute;\n  left: 95%;\n  top: 5%;\n  cursor: pointer;\n}\n\n#deleteProjectHeader { \n  font-size: 2.2vh;\n}\n\n.modalBtn2 { \n  padding: 10px 20px ;\n  border: 1px solid rgb(119, 118, 118);\n  border-radius: 5px;\n  cursor: pointer;\n  transition: ease-in-out 0.2s all;\n}\n\n.modalBtn2:nth-child(2) { \n  margin: 20px 30px;\n}\n\n.modalBtn2:nth-child(2):hover { \n  background-color: #a0a0a0;\n}\n\n.modalBtn2:first-child:hover { \n  background-color: rgb(251, 71, 71);\n}\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://anydo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://anydo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://anydo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://anydo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://anydo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://anydo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://anydo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://anydo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://anydo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://anydo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/constractItem.js":
/*!******************************!*\
  !*** ./src/constractItem.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   todoArr: () => (/* binding */ todoArr)\n/* harmony export */ });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _projectDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDetails */ \"./src/projectDetails.js\");\n\n\n\nlet todoArr = []; //! it is the main array. The array have inside todo objects\n\n// ? the component main function\n\nconst modalAdddBtn = document.querySelector(\"#modalAdddBtn\");\n\nconst taskComponent = function () {\n  modalAdddBtn.addEventListener(\"click\", _projectDetails__WEBPACK_IMPORTED_MODULE_1__.createNewTask);\n  createProjectInside();\n  removeProject();\n};\n\nlet projectNameArr = [];\n\n//! remove Project\n\nconst deleteProjectBtnDlt = document.querySelector(\"#deleteProjectBtnDlt\");\nconst mainContentH2 = document.querySelector(\"#mainContentH2\");\nlet projectsContainer = document.querySelector(\"#projectsContainer\");\nconst sidebarInbox = document.querySelector(\"#sidebarInbox\");\nconst modalNewProject = document.querySelector(\"#modalNewProject\");\n\nconst removeProject = function () {\n  deleteProjectBtnDlt.addEventListener(\"click\", () => {\n    let bre = mainContentH2.innerHTML.slice(0, -1);\n    let indexSpesificItem = projectNameArr.indexOf(bre);\n\n    if (indexSpesificItem > -1) {\n      projectNameArr.splice(indexSpesificItem, 1); // remove item in array\n    }\n\n    while (projectsContainer.firstChild) {\n      projectsContainer.removeChild(projectsContainer.lastChild); // remove project section all items with this loop\n    }\n\n    while (modalNewProject.firstChild) {\n      modalNewProject.removeChild(modalNewProject.lastChild);\n    }\n\n    console.log(todoArr);\n\n    const btn = document.querySelector(\"#btn\");\n\n    projectNameArr.forEach((projectNameArrItem) => {\n      const newProject = document.createElement(\"li\");\n      newProject.classList.add(\"projectsTitle\");\n      newProject.innerHTML = projectNameArrItem;\n      projectsContainer.appendChild(newProject);\n\n      btn.addEventListener(\"click\", () => {\n        newProject.classList.toggle(\"active\");\n      });\n\n      const newProjectInForm = document.createElement(\"option\");\n      newProjectInForm.innerHTML = projectNameArrItem;\n      modalNewProject.appendChild(newProjectInForm);\n    });\n\n    (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    if (projectNameArr[0] == undefined) {\n      mainContentH2.innerHTML = sidebarInbox.innerHTML + \":\";\n    } else {\n      mainContentH2.innerHTML = projectNameArr[0] + \":\";\n    }\n\n    /* console.log(sidebarInbox.innerHTML);\n    console.log(projectNameArr[0] == undefined);\n    console.log(mainContentH2.innerHTML); */\n  });\n};\n\n//  ! create project items\n\nconst createProjectInside = function () {\n  const addProjectBtn = document.querySelector(\"#newProjectAddBtn\");\n  const projectsContainer = document.querySelector(\"#projectsContainer\");\n  const newTitle = document.querySelector(\"#getProjectName\");\n  const btn = document.querySelector(\"#btn\");\n\n  addProjectBtn.addEventListener(\"click\", () => {\n    const newProject = document.createElement(\"li\");\n\n    let newTitleList =\n      newTitle.value.charAt(0).toUpperCase() + newTitle.value.slice(1);\n\n    projectNameArr.push(newTitleList);\n\n    projectNameArr.forEach((projectNameArrItem) => {\n      newProject.classList.add(\"projectsTitle\");\n      newProject.innerHTML = newTitleList;\n      projectsContainer.appendChild(newProject);\n\n      btn.addEventListener(\"click\", () => {\n        newProject.classList.toggle(\"active\");\n      });\n    });\n\n    const newProjectInForm = document.createElement(\"option\");\n    newProjectInForm.innerHTML = newTitleList;\n    modalNewProject.appendChild(newProjectInForm);\n\n    (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    /* buraya baglancak */\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskComponent);\n\n\n//# sourceURL=webpack://anydo/./src/constractItem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://anydo/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//! Modals Open and Close\n\nconst modalContainer = document.querySelector(\"#modalDataInput\");\nconst addNewFormBtn = document.querySelector(\"#addNewFormBtn\");\nconst modalCloseBtn = document.querySelector(\"#modalClose\");\nconst addProjectBtn = document.querySelector(\"#addNewProjectBtn\");\nconst newProjectModal = document.querySelector(\"#newProjectModal\");\nconst newProjectCloseBtn = document.querySelector(\"#newProjectCloseBtn\");\nconst modalCloseBtn2 = document.querySelector(\"#modalCloseBtn\");\n\n\n\n\nconst modalToggle = function () {\n  addNewFormBtn.addEventListener(\"click\", () => {\n    modalContainer.classList.add(\"modalDataInputOpen\");\n  });\n\n  modalCloseBtn.addEventListener(\"click\", () => {\n    modalContainer.classList.remove(\"modalDataInputOpen\");\n  });\n\n  modalCloseBtn2.addEventListener(\"click\", () => {\n    modalContainer.classList.remove(\"modalDataInputOpen\");\n  });\n\n  addProjectBtn.addEventListener(\"click\", () => {\n    newProjectModal.classList.add(\"modalDataInputOpen\");\n  });\n\n  newProjectCloseBtn.addEventListener(\"click\", () => {\n    newProjectModal.classList.remove(\"modalDataInputOpen\");\n  });\n\n  \n\n  \n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalToggle);\n\n\n//# sourceURL=webpack://anydo/./src/modal.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constractItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constractItem */ \"./src/constractItem.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _sidebarToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebarToggle */ \"./src/sidebarToggle.js\");\n\n\n\n\n\n\n//! load page function\n\nfunction load() {\n  (0,_sidebarToggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_constractItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n\n//# sourceURL=webpack://anydo/./src/pageLoad.js?");

/***/ }),

/***/ "./src/projectDetails.js":
/*!*******************************!*\
  !*** ./src/projectDetails.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewTask: () => (/* binding */ createNewTask)\n/* harmony export */ });\n/* harmony import */ var _constractItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constractItem */ \"./src/constractItem.js\");\n\r\n\r\n// ? the component main function\r\n\r\nconst createNewTask = function (e) {\r\n  e.preventDefault()\r\n\r\n  const title = document.querySelector(\"#modalNewTitle\");\r\n  const description = document.querySelector(\"#modalNewDescription\");\r\n  const dueDate = document.querySelector(\"#modalNewDate\");\r\n  const priority = document.querySelector(\"#modalNewPriority\");\r\n  const project = document.querySelector(\"#modalNewProject\");\r\n\r\n  let object = {\r\n    title: title.value,\r\n    description: description.value,\r\n    dueDate: dueDate.value,\r\n    priority: priority.value,\r\n    project: project.value,\r\n  };\r\n\r\n  _constractItem__WEBPACK_IMPORTED_MODULE_0__.todoArr.push(object);\r\n  console.log(_constractItem__WEBPACK_IMPORTED_MODULE_0__.todoArr);\r\n};\r\n\n\n//# sourceURL=webpack://anydo/./src/projectDetails.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createContentforSidebar = () => {\n  const mainContentH2 = document.querySelector(\"#mainContentH2\");\n  let item = document.querySelectorAll(\".sidebarItem\");\n  let itemProject = document.querySelectorAll(\".projectsTitle\");\n  const mainContentHeader = document.querySelector(\"#mainContentHeader\");\n\n  item.forEach((itemInside) => {\n    itemInside.addEventListener(\"click\", () => {\n      mainContentH2.innerHTML = itemInside.textContent + \":\";\n      let deleteBtns = document.getElementsByClassName(\"deleteButton\");\n      mainContentHeader.removeChild(deleteBtns[0]);\n    });\n  });\n\n  //! leftsidebar  projects' child\n\n  itemProject.forEach((e) => {\n    e.addEventListener(\"click\", () => {\n      mainContentH2.innerHTML = e.textContent + \":\";\n      let deleteBtns = document.getElementsByClassName(\"deleteButton\");\n\n      if (deleteBtns.length > 0) {\n        mainContentHeader.removeChild(deleteBtns[0]);\n        const deleteBtn = document.createElement(\"i\");\n        deleteBtn.classList.add(\"fa-regular\", \"fa-x\", \"deleteButton\");\n        mainContentHeader.appendChild(deleteBtn);\n\n        deleteProjectFontion();\n      } else {\n        const deleteBtn = document.createElement(\"i\");\n        deleteBtn.classList.add(\"fa-regular\", \"fa-x\", \"deleteButton\");\n        mainContentHeader.appendChild(deleteBtn);\n\n        deleteProjectFontion();\n      }\n    });\n  });\n\n  //! Projects child inside delete action\n\n  const deleteProjectFontion = function () {\n    const deleteButton = document.querySelectorAll(\".deleteButton\");\n    const deleteProjectModal = document.querySelector(\"#deleteProjectModal\");\n    const deleteProjectBtnClose = document.querySelector(\n      \"#deleteProjectBtnClose\"\n    );\n    const deleteProjectBtnDlt = document.querySelector('#deleteProjectBtnDlt')\n\n    const modalClose2 = document.querySelector(\"#modalClose2\");\n\n    deleteButton.forEach((item) => {\n      item.addEventListener(\"click\", () => {\n        deleteProjectModal.classList.add(\"modalDataInputOpen\");\n      });\n    });\n\n    deleteProjectBtnClose.addEventListener(\"click\", () => {\n      deleteProjectModal.classList.remove(\"modalDataInputOpen\");\n    });\n\n    deleteProjectBtnDlt.addEventListener(\"click\", () => {\n      deleteProjectModal.classList.remove(\"modalDataInputOpen\");\n    });\n\n    modalClose2.addEventListener(\"click\", () => {\n      deleteProjectModal.classList.remove(\"modalDataInputOpen\");\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContentforSidebar);\n\n\n//# sourceURL=webpack://anydo/./src/sidebar.js?");

/***/ }),

/***/ "./src/sidebarToggle.js":
/*!******************************!*\
  !*** ./src/sidebarToggle.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//! Toggle active \n\nconst sidebarToggle = function () {\n  const btn = document.querySelector('#btn');\n  const sideBar = document.querySelector('.sidebar');\n  let item = document.querySelectorAll('.sidebarItem');\n  const sidebarIcon = document.querySelector('#sidebarIconContainer');\n  const closeBtn = document.querySelector('#closeBtn');\n  const mainContentArea = document.querySelector('#mainContent');\n  const addNewProjectBtn =document.querySelector('#addNewProjectBtn')\n  const projectsTitle = document.querySelectorAll('.projectsTitle')\n\n  btn.addEventListener('click', () => {\n    sideBar.classList.toggle('active');\n    item.forEach((item2) => {\n      item2.classList.toggle('active');\n    });\n    sidebarIcon.classList.toggle('active');\n    closeBtn.classList.toggle('active');\n    mainContentArea.classList.toggle('active');\n    addNewProjectBtn.classList.toggle('active')\n    projectsTitle.forEach((projectsTitleItem) => {\n      projectsTitleItem.classList.toggle('active')\n    })\n\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebarToggle);\n\n\n//# sourceURL=webpack://anydo/./src/sidebarToggle.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;