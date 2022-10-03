/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --header-height: 3rem;\r\n  --font-medium: 500;\r\n  --basic-color: #5361ff;\r\n  --dark-color: #2a3b47;\r\n  --white-color: #fafaff;\r\n  --text-color: #697477;\r\n  --body-font: \"Nunito\", sans-serif;\r\n  --big-font-size: 4rem;\r\n  --medium-font-size: 1.3rem;\r\n  --normal-font-size: 1rem;\r\n  --small-font-size: 0.8rem;\r\n  --mb-1: 0.5rem;\r\n  --mb-2: 1rem;\r\n  --mb-3: 1.5rem;\r\n  --mb-4: 2rem;\r\n  --mb-5: 2.5rem;\r\n  --z-fixed: 100;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  :root {\r\n    --big-font-size: 6.25rem;\r\n    --medium-font-size: 1.3rem;\r\n    --normal-font-size: 1rem;\r\n    --small-font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  margin: var(--header-height) 0 0 0;\r\n  color: var(--text-color);\r\n  font-family: var(--body-font);\r\n  font-size: var(--normal-font-size);\r\n  font-weight: var(--font-medium);\r\n  line-height: 1.6;\r\n}\r\n\r\nh1,\r\nh2,\r\np,\r\nul {\r\n  margin: 0;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--text-color);\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n  display: block;\r\n}\r\n\r\n.section {\r\n  padding: 3rem 0;\r\n}\r\n\r\n.section-title {\r\n  position: relative;\r\n  margin: var(--mb-4) 0;\r\n  text-align: center;\r\n  color: var(--dark-color);\r\n  font-size: var(--medium-font-size);\r\n}\r\n\r\n.section-title::after {\r\n  position: absolute;\r\n  margin: auto;\r\n  content: \"\";\r\n  width: 32px;\r\n  height: 0.18rem;\r\n  left: 0;\r\n  right: 0;\r\n  top: 2rem;\r\n  background-color: var(--basic-color);\r\n}\r\n\r\n.bd-grid {\r\n  display: grid;\r\n  max-width: 1024px;\r\n  grid-template-columns: 100%;\r\n  grid-column-gap: 2rem;\r\n  width: calc(100% - 2rem);\r\n  margin-left: var(--mb-2);\r\n  margin-right: var(--mb-2);\r\n}\r\n\r\n.l-header {\r\n  width: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: var(--z-fixed);\r\n  background-color: var(--basic-color);\r\n}\r\n\r\n.nav {\r\n  height: var(--header-height);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .nav-menu {\r\n    position: fixed;\r\n    top: var(--header-height);\r\n    right: -100%;\r\n    height: 100%;\r\n    width: 80%;\r\n    padding: 2rem;\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n    transition: 0.5s;\r\n    backdrop-filter: blur(10px);\r\n  }\r\n}\r\n\r\n.nav-item {\r\n  margin-bottom: var(--mb-4);\r\n}\r\n\r\n.nav-link {\r\n  position: relative;\r\n  color: var(--dark-color);\r\n}\r\n\r\n.nav-link:hover {\r\n  color: var(--basic-color);\r\n}\r\n\r\n.nav-logo {\r\n  color: var(--white-color);\r\n}\r\n\r\n.nav-toggle {\r\n  color: var(--white-color);\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.show {\r\n  right: 0;\r\n}\r\n\r\n.active::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 100%;\r\n  height: 0.2rem;\r\n  left: 0;\r\n  top: 1.5rem;\r\n  background-color: var(--basic-color);\r\n}\r\n\r\n.home {\r\n  overflow: hidden;\r\n  position: relative;\r\n  background-color: var(--basic-color);\r\n}\r\n\r\n.home-container {\r\n  height: calc(100vh - var(--header-height));\r\n  row-gap: 5rem;\r\n}\r\n\r\n.home-title {\r\n  align-self: flex-end;\r\n  font-size: var(--big-font-size);\r\n  color: var(--white-color);\r\n  line-height: 0.8;\r\n}\r\n\r\n.home-title span {\r\n  text-shadow: 0 20px 25px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.home-scroll {\r\n  align-self: flex-end;\r\n  padding-bottom: var(--mb-4);\r\n}\r\n\r\n.home-scroll-link {\r\n  writing-mode: vertical-lr;\r\n  transform: rotate(-180deg);\r\n  color: var(--white-color);\r\n}\r\n\r\n.home-img {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 280px;\r\n}\r\n\r\n.about-img {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 120px;\r\n  height: 120px;\r\n}\r\n\r\n.about-img img {\r\n  border-radius: 50%;\r\n}\r\n\r\n.about-container {\r\n  justify-items: center;\r\n  text-align: center;\r\n  row-gap: 2rem;\r\n}\r\n\r\n.about-subtitle {\r\n  color: var(--basic-color);\r\n  font-size: var(--medium-font-size);\r\n  margin-bottom: var(--mb-2);\r\n}\r\n\r\n.about-prof {\r\n  margin-bottom: var(--mb-4);\r\n  display: block;\r\n}\r\n\r\n.about-text {\r\n  margin-bottom: var(--mb-4);\r\n}\r\n\r\n.about-social-icon {\r\n  font-size: 1.4rem;\r\n  margin: 0 var(--mb-1);\r\n}\r\n\r\n.skills-container {\r\n  row-gap: 2rem;\r\n}\r\n\r\n.skills-subtitle {\r\n  color: var(--basic-color);\r\n  margin-bottom: var(--mb-3);\r\n}\r\n\r\n.skills-name {\r\n  display: inline-block;\r\n  font-size: var(--small-font-size);\r\n  margin-right: var(--mb-2);\r\n  margin-bottom: var(--mb-3);\r\n  padding: 0.25rem 0.5rem;\r\n  background-color: var(--white-color);\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.skills-name:hover {\r\n  background-color: var(--basic-color);\r\n  color: var(--white-color);\r\n}\r\n\r\n.skills-img img {\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.projects {\r\n  background-color: var(--white-color);\r\n}\r\n\r\n.projects-container {\r\n  row-gap: 2rem;\r\n  justify-items: center;\r\n}\r\n\r\n.project-img {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.project-img img {\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.project-link {\r\n  position: absolute;\r\n  bottom: -100%;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n  backdrop-filter: blur(10px);\r\n  transition: 0.3s;\r\n}\r\n\r\n.project-img:hover .project-link {\r\n  bottom: 0;\r\n}\r\n\r\n.project-link-name {\r\n  font-size: var(--medium-font-size);\r\n  color: black;\r\n}\r\n\r\n.contact-container {\r\n  row-gap: 2rem;\r\n}\r\n\r\n.contact-subtitle {\r\n  color: var(--basic-color);\r\n  font-size: var(--normal-font-size);\r\n}\r\n\r\n.contact-text {\r\n  display: inline-block;\r\n  margin-bottom: var(--mb-2);\r\n}\r\n\r\n.contact-inputs {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  column-gap: 1rem;\r\n}\r\n\r\n.contact-input {\r\n  padding: 0.8rem;\r\n  outline: none;\r\n  width: 100%;\r\n  margin-bottom: var(--mb-4);\r\n  font-size: var(--normal-font-size);\r\n  border: 1.5px solid var(--dark-color);\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.contact-button {\r\n  display: block;\r\n  background-color: var(--basic-color);\r\n  color: var(--white-color);\r\n  padding: 0.75rem 2.5rem;\r\n  border-radius: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n  font-size: var(--normal-font-size);\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  background-color: var(--dark-color);\r\n}\r\n\r\n.footer-container {\r\n  row-gap: 2rem;\r\n}\r\n\r\n.footer-title {\r\n  color: var(--white-color);\r\n  font-size: var(--normal-font-size);\r\n  margin-bottom: var(--mb-2);\r\n}\r\n\r\n.footer-link {\r\n  padding: 0.25rem 0;\r\n}\r\n\r\n.footer-link:hover {\r\n  color: var(--basic-color);\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  body {\r\n    margin: 0;\r\n  }\r\n\r\n  .section {\r\n    padding-top: 4rem;\r\n  }\r\n\r\n  .section-title {\r\n    margin-bottom: 3rem;\r\n  }\r\n\r\n  .section-title::after {\r\n    width: 64px;\r\n    top: 3rem;\r\n  }\r\n\r\n  .nav {\r\n    height: calc(var(header-height) + 1rem);\r\n  }\r\n\r\n  .nav-list {\r\n    display: flex;\r\n  }\r\n\r\n  .nav-item {\r\n    margin-left: var(--mb-4);\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .nav-toggle {\r\n    display: none;\r\n  }\r\n\r\n  .nav-link {\r\n    color: var(--white-color);\r\n  }\r\n\r\n  .nav-link:hover {\r\n    color: var(--white-color);\r\n  }\r\n\r\n  .active::after {\r\n    background-color: var(--white-color);\r\n  }\r\n\r\n  .home-container {\r\n    height: 100vh;\r\n    grid-template-rows: 1.7fr 1fr;\r\n    row-gap: 0;\r\n  }\r\n\r\n  .home-img {\r\n    width: 524px;\r\n    right: 10%;\r\n  }\r\n\r\n  .about-container {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    align-items: center;\r\n    text-align: initial;\r\n    padding: 4rem 0;\r\n  }\r\n\r\n  .about-img {\r\n    width: 180px;\r\n    height: 180px;\r\n  }\r\n\r\n  .about-img img {\r\n    width: 165px;\r\n  }\r\n\r\n  .skills-container {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    align-items: center;\r\n  }\r\n\r\n  .projects-container {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    column-gap: 2rem;\r\n  }\r\n\r\n  .contact-container {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    justify-items: center;\r\n  }\r\n\r\n  .contact-form {\r\n    width: 380px;\r\n  }\r\n\r\n  .footer-container {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    justify-items: center;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .bd-grid {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --header-height: 3rem;\r\n  --font-medium: 500;\r\n  --basic-color: #5361ff;\r\n  --dark-color: #2a3b47;\r\n  --white-color: #fafaff;\r\n  --text-color: #697477;\r\n  --body-font: \"Nunito\", sans-serif;\r\n  --big-font-size: 4rem;\r\n  --medium-font-size: 1.3rem;\r\n  --normal-font-size: 1rem;\r\n  --small-font-size: 0.8rem;\r\n  --mb-1: 0.5rem;\r\n  --mb-2: 1rem;\r\n  --mb-3: 1.5rem;\r\n  --mb-4: 2rem;\r\n  --mb-5: 2.5rem;\r\n  --z-fixed: 100;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  :root {\r\n    --big-font-size: 6.25rem;\r\n    --medium-font-size: 1.3rem;\r\n    --normal-font-size: 1rem;\r\n    --small-font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  margin: var(--header-height) 0 0 0;\r\n  color: var(--text-color);\r\n  font-family: var(--body-font);\r\n  font-size: var(--normal-font-size);\r\n  font-weight: var(--font-medium);\r\n  line-height: 1.6;\r\n}\r\n\r\nh1,\r\nh2,\r\np,\r\nul {\r\n  margin: 0;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--text-color);\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n  display: block;\r\n}\r\n\r\n.section {\r\n  padding: 3rem 0;\r\n}\r\n\r\n.section-title {\r\n  position: relative;\r\n  margin: var(--mb-4) 0;\r\n  text-align: center;\r\n  color: var(--dark-color);\r\n  font-size: var(--medium-font-size);\r\n}\r\n\r\n.section-title::after {\r\n  position: absolute;\r\n  margin: auto;\r\n  content: \"\";\r\n  width: 32px;\r\n  height: 0.18rem;\r\n  left: 0;\r\n  right: 0;\r\n  top: 2rem;\r\n  background-color: var(--basic-color);\r\n}\r\n\r\n.bd-grid {\r\n  display: grid;\r\n  max-width: 1024px;\r\n  grid-template-columns: 100%;\r\n  grid-column-gap: 2rem;\r\n  width: calc(100% - 2rem);\r\n  margin-left: var(--mb-2);\r\n  margin-right: var(--mb-2);\r\n}\r\n\r\n.l-header {\r\n  width: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: var(--z-fixed);\r\n  background-color: var(--basic-color);\r\n}\r\n\r\n.nav {\r\n  height: var(--header-height);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .nav-menu {\r\n    position: fixed;\r\n    top: var(--header-height);\r\n    right: -100%;\r\n    height: 100%;\r\n    width: 80%;\r\n    padding: 2rem;\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n    transition: 0.5s;\r\n    backdrop-filter: blur(10px);\r\n  }\r\n}\r\n\r\n.nav-item {\r\n  margin-bottom: var(--mb-4);\r\n}\r\n\r\n.nav-link {\r\n  position: relative;\r\n  color: var(--dark-color);\r\n}\r\n\r\n.nav-link:hover {\r\n  color: var(--basic-color);\r\n}\r\n\r\n.nav-logo {\r\n  color: var(--white-color);\r\n}\r\n\r\n.nav-toggle {\r\n  color: var(--white-color);\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.show {\r\n  right: 0;\r\n}\r\n\r\n.active::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 100%;\r\n  height: 0.2rem;\r\n  left: 0;\r\n  top: 1.5rem;\r\n  background-color: var(--basic-color);\r\n}\r\n\r\n.home {\r\n  overflow: hidden;\r\n  position: relative;\r\n  background-color: var(--basic-color);\r\n}\r\n\r\n.home-container {\r\n  height: calc(100vh - var(--header-height));\r\n  row-gap: 5rem;\r\n}\r\n\r\n.home-title {\r\n  align-self: flex-end;\r\n  font-size: var(--big-font-size);\r\n  color: var(--white-color);\r\n  line-height: 0.8;\r\n}\r\n\r\n.home-title span {\r\n  text-shadow: 0 20px 25px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.home-scroll {\r\n  align-self: flex-end;\r\n  padding-bottom: var(--mb-4);\r\n}\r\n\r\n.home-scroll-link {\r\n  writing-mode: vertical-lr;\r\n  transform: rotate(-180deg);\r\n  color: var(--white-color);\r\n}\r\n\r\n.home-img {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 280px;\r\n}\r\n\r\n.about-img {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 120px;\r\n  height: 120px;\r\n}\r\n\r\n.about-img img {\r\n  border-radius: 50%;\r\n}\r\n\r\n.about-container {\r\n  justify-items: center;\r\n  text-align: center;\r\n  row-gap: 2rem;\r\n}\r\n\r\n.about-subtitle {\r\n  color: var(--basic-color);\r\n  font-size: var(--medium-font-size);\r\n  margin-bottom: var(--mb-2);\r\n}\r\n\r\n.about-prof {\r\n  margin-bottom: var(--mb-4);\r\n  display: block;\r\n}\r\n\r\n.about-text {\r\n  margin-bottom: var(--mb-4);\r\n}\r\n\r\n.about-social-icon {\r\n  font-size: 1.4rem;\r\n  margin: 0 var(--mb-1);\r\n}\r\n\r\n.skills-container {\r\n  row-gap: 2rem;\r\n}\r\n\r\n.skills-subtitle {\r\n  color: var(--basic-color);\r\n  margin-bottom: var(--mb-3);\r\n}\r\n\r\n.skills-name {\r\n  display: inline-block;\r\n  font-size: var(--small-font-size);\r\n  margin-right: var(--mb-2);\r\n  margin-bottom: var(--mb-3);\r\n  padding: 0.25rem 0.5rem;\r\n  background-color: var(--white-color);\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.skills-name:hover {\r\n  background-color: var(--basic-color);\r\n  color: var(--white-color);\r\n}\r\n\r\n.skills-img img {\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.projects {\r\n  background-color: var(--white-color);\r\n}\r\n\r\n.projects-container {\r\n  row-gap: 2rem;\r\n  justify-items: center;\r\n}\r\n\r\n.project-img {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.project-img img {\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.project-link {\r\n  position: absolute;\r\n  bottom: -100%;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n  border-radius: 0.5rem;\r\n  cursor: pointer;\r\n  backdrop-filter: blur(10px);\r\n  transition: 0.3s;\r\n}\r\n\r\n.project-img:hover .project-link {\r\n  bottom: 0;\r\n}\r\n\r\n.project-link-name {\r\n  font-size: var(--medium-font-size);\r\n  color: black;\r\n}\r\n\r\n.contact-container {\r\n  row-gap: 2rem;\r\n}\r\n\r\n.contact-subtitle {\r\n  color: var(--basic-color);\r\n  font-size: var(--normal-font-size);\r\n}\r\n\r\n.contact-text {\r\n  display: inline-block;\r\n  margin-bottom: var(--mb-2);\r\n}\r\n\r\n.contact-inputs {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  column-gap: 1rem;\r\n}\r\n\r\n.contact-input {\r\n  padding: 0.8rem;\r\n  outline: none;\r\n  width: 100%;\r\n  margin-bottom: var(--mb-4);\r\n  font-size: var(--normal-font-size);\r\n  border: 1.5px solid var(--dark-color);\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.contact-button {\r\n  display: block;\r\n  background-color: var(--basic-color);\r\n  color: var(--white-color);\r\n  padding: 0.75rem 2.5rem;\r\n  border-radius: 0.5rem;\r\n  border: none;\r\n  outline: none;\r\n  font-size: var(--normal-font-size);\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  background-color: var(--dark-color);\r\n}\r\n\r\n.footer-container {\r\n  row-gap: 2rem;\r\n}\r\n\r\n.footer-title {\r\n  color: var(--white-color);\r\n  font-size: var(--normal-font-size);\r\n  margin-bottom: var(--mb-2);\r\n}\r\n\r\n.footer-link {\r\n  padding: 0.25rem 0;\r\n}\r\n\r\n.footer-link:hover {\r\n  color: var(--basic-color);\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  body {\r\n    margin: 0;\r\n  }\r\n\r\n  .section {\r\n    padding-top: 4rem;\r\n  }\r\n\r\n  .section-title {\r\n    margin-bottom: 3rem;\r\n  }\r\n\r\n  .section-title::after {\r\n    width: 64px;\r\n    top: 3rem;\r\n  }\r\n\r\n  .nav {\r\n    height: calc(var(header-height) + 1rem);\r\n  }\r\n\r\n  .nav-list {\r\n    display: flex;\r\n  }\r\n\r\n  .nav-item {\r\n    margin-left: var(--mb-4);\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .nav-toggle {\r\n    display: none;\r\n  }\r\n\r\n  .nav-link {\r\n    color: var(--white-color);\r\n  }\r\n\r\n  .nav-link:hover {\r\n    color: var(--white-color);\r\n  }\r\n\r\n  .active::after {\r\n    background-color: var(--white-color);\r\n  }\r\n\r\n  .home-container {\r\n    height: 100vh;\r\n    grid-template-rows: 1.7fr 1fr;\r\n    row-gap: 0;\r\n  }\r\n\r\n  .home-img {\r\n    width: 524px;\r\n    right: 10%;\r\n  }\r\n\r\n  .about-container {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    align-items: center;\r\n    text-align: initial;\r\n    padding: 4rem 0;\r\n  }\r\n\r\n  .about-img {\r\n    width: 180px;\r\n    height: 180px;\r\n  }\r\n\r\n  .about-img img {\r\n    width: 165px;\r\n  }\r\n\r\n  .skills-container {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    align-items: center;\r\n  }\r\n\r\n  .projects-container {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    column-gap: 2rem;\r\n  }\r\n\r\n  .contact-container {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    justify-items: center;\r\n  }\r\n\r\n  .contact-form {\r\n    width: 380px;\r\n  }\r\n\r\n  .footer-container {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    justify-items: center;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .bd-grid {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/style.css */ "./src/style.css?1315"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./index.js */ "./src/index.js?dfde"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/skills.png */ "./src/assets/images/skills.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/thanos.jpg */ "./src/assets/images/thanos.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/todo.png */ "./src/assets/images/todo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/tic.png */ "./src/assets/images/tic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/aueb.jpg */ "./src/assets/images/aueb.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/mobile.png */ "./src/assets/images/mobile.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\r\n    <link\r\n      href=\"https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css\"\r\n      rel=\"stylesheet\"\r\n    />\r\n    <title>Thanos Trifonis</title>\r\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" defer><" + "/script>\r\n  </head>\r\n  <body>\r\n    <header class=\"l-header\">\r\n      <nav class=\"nav bd-grid\">\r\n        <div><a href=\"#\" class=\"nav-logo\">Thanos Trifonis</a></div>\r\n        <div class=\"nav-menu\" id=\"nav-menu\">\r\n          <ul class=\"nav-list\">\r\n            <li class=\"nav-item\">\r\n              <a href=\"#home\" class=\"nav-link active\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a href=\"#about\" class=\"nav-link\">About Me</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a href=\"#projects\" class=\"nav-link\">Projects</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a href=\"#skills\" class=\"nav-link\">Skills</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a href=\"#contact\" class=\"nav-link\">Contact</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"nav-toggle\" id=\"nav-toggle\">\r\n          <i class=\"bx bx-menu\"></i>\r\n        </div>\r\n      </nav>\r\n    </header>\r\n    <main class=\"l-main\">\r\n      <section class=\"home\" id=\"home\">\r\n        <div class=\"home-container bd-grid\">\r\n          <h1 class=\"home-title\"><span>Welcome</span><br />kind visitor!</h1>\r\n          <div class=\"home-scroll\">\r\n            <a href=\"#about\" class=\"home-scroll-link\"\r\n              ><i class=\"bx bx-up-arrow-alt\">Scroll down</i></a\r\n            >\r\n          </div>\r\n          <img\r\n            src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n            alt=\"arrow down\"\r\n            class=\"home-img\"\r\n          />\r\n        </div>\r\n      </section>\r\n      <section class=\"about section\" id=\"about\">\r\n        <h2 class=\"section-title\">About Me</h2>\r\n        <div class=\"about-container bd-grid\">\r\n          <div class=\"about-img\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"profile picture\" />\r\n          </div>\r\n          <div>\r\n            <h2 class=\"about-subtitle\">My name is Thanos Trifonis</h2>\r\n            <span class=\"about-prof\">Software Engineer</span>\r\n            <p class=\"about-text\">\r\n              I'm a computer science student who loves utilizing programming to\r\n              solve problems. Currently i practice web development.\r\n            </p>\r\n            <p class=\"about-text\">\r\n              This is my 3<sup>rd</sup> year in Computer Science department at\r\n              Athens University of Economics and Business.<br />\r\n              You can take a look into my GitHub and LinkedIn below.\r\n            </p>\r\n            <div class=\"about-social\">\r\n              <a\r\n                href=\"https://www.linkedin.com/in/thanos-trifonis/\"\r\n                class=\"about-social-icon\"\r\n                ><i class=\"bx bxl-linkedin bx-lg\" style=\"color: #0072b1\"></i></a\r\n              ><a\r\n                href=\"https://github.com/TrifonisAth\"\r\n                class=\"about-social-icon\"\r\n                ><i class=\"bx bxl-github bx-lg\" style=\"color: #333333\"></i\r\n              ></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"projects section\" id=\"projects\">\r\n        <h2 class=\"section-title\">Projects</h2>\r\n        <div class=\"projects-container bd-grid\">\r\n          <div class=\"project-img\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" />\r\n            <div class=\"project-link\">\r\n              <a\r\n                href=\"https://trifonisath.github.io/ToDo_List/\"\r\n                class=\"project-link-name\"\r\n                >ToDo app live demo</a\r\n              >\r\n            </div>\r\n          </div>\r\n          <div class=\"project-img\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"project image\" />\r\n            <div class=\"project-link\">\r\n              <a\r\n                href=\"https://trifonisath.github.io/TicTacToe/\"\r\n                class=\"project-link-name\"\r\n                >Tic Tac Toe live demo</a\r\n              >\r\n            </div>\r\n          </div>\r\n          <div class=\"project-img\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"project image\" />\r\n            <div class=\"project-link\">\r\n              <a\r\n                href=\"https://github.com/TrifonisAth/University_Projects\"\r\n                class=\"project-link-name\"\r\n                >University Projects Repo</a\r\n              >\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"skills section\" id=\"skills\">\r\n        <h2 class=\"section-title\">Skills</h2>\r\n        <div class=\"skills-container bd-grid\">\r\n          <div class=\"skills-box\">\r\n            <h3 class=\"skills-subtitle\">Languages and Technologies</h3>\r\n            <span class=\"skills-name\">JavaScript</span\r\n            ><span class=\"skills-name\">HTML</span\r\n            ><span class=\"skills-name\">CSS</span\r\n            ><span class=\"skills-name\">Python</span\r\n            ><span class=\"skills-name\">Java</span\r\n            ><span class=\"skills-name\">BootStrap</span\r\n            ><span class=\"skills-name\">PostgreSQL</span\r\n            ><span class=\"skills-name\">Sass</span>\r\n            <div class=\"skills-img\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"picture\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"contact section\" id=\"contact\">\r\n        <h2 class=\"section-title\">Contact</h2>\r\n        <div class=\"contact-container bd-grid\">\r\n          <div class=\"contact-info\">\r\n            <h3 class=\"contact-subtitle\">Address</h3>\r\n            <span class=\"contact-text\">Athens, Greece</span>\r\n            <h3 class=\"contact-subtitle\">Email</h3>\r\n            <span class=\"contact-text\">ath.trifonis@gmail.com</span>\r\n          </div>\r\n          <form action=\"\" class=\"contact-form\">\r\n            <div class=\"contact-inputs\">\r\n              <input type=\"text\" class=\"contact-input\" placeholder=\"Name\" />\r\n              <input\r\n                type=\"mail\"\r\n                class=\"contact-input\"\r\n                placeholder=\"Email\"\r\n                required\r\n              />\r\n            </div>\r\n            <textarea\r\n              name=\"\"\r\n              id=\"\"\r\n              cols=\"0\"\r\n              rows=\"10\"\r\n              class=\"contact-input\"\r\n            ></textarea>\r\n            <input type=\"submit\" class=\"contact-button\" value=\"Submit\" />\r\n          </form>\r\n        </div>\r\n      </section>\r\n    </main>\r\n    <footer class=\"footer section\">\r\n      <div class=\"footer-container bd-grid\">\r\n        <div class=\"footer-data\">\r\n          <h2 class=\"footer-title\">Thanos Trifonis</h2>\r\n          <p class=\"footer-text\">\r\n            I'm Thanos Trifonis and this is my portfolio.\r\n          </p>\r\n        </div>\r\n        <div class=\"footer-data\">\r\n          <h2 class=\"footer-title\">Explore</h2>\r\n          <ul>\r\n            <li><a href=\"#home\" class=\"footer-link\">Home</a></li>\r\n            <li><a href=\"#about\" class=\"footer-link\">About Me</a></li>\r\n            <li><a href=\"#projects\" class=\"footer-link\">Projects</a></li>\r\n            <li><a href=\"#skills\" class=\"footer-link\">Skilss</a></li>\r\n            <li><a href=\"#contact\" class=\"footer-link\">Contact</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js":
/*!*******************************************************************!*\
  !*** ./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var is_dom_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-dom-node */ "./node_modules/is-dom-node/dist/is-dom-node.es.js");
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/


function isDomNodeList(x) {
	var prototypeToString = Object.prototype.toString.call(x);
	var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;

	return typeof window.NodeList === 'object'
		? x instanceof window.NodeList
		: x !== null &&
				typeof x === 'object' &&
				typeof x.length === 'number' &&
				regex.test(prototypeToString) &&
				(x.length === 0 || (0,is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"])(x[0]))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDomNodeList);


/***/ }),

/***/ "./node_modules/is-dom-node/dist/is-dom-node.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/is-dom-node/dist/is-dom-node.es.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
function isDomNode(x) {
	return typeof window.Node === 'object'
		? x instanceof window.Node
		: x !== null &&
				typeof x === 'object' &&
				typeof x.nodeType === 'number' &&
				typeof x.nodeName === 'string'
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDomNode);


/***/ }),

/***/ "./node_modules/miniraf/dist/miniraf.es.js":
/*!*************************************************!*\
  !*** ./node_modules/miniraf/dist/miniraf.es.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var polyfill = (function () {
	var clock = Date.now();

	return function (callback) {
		var currentTime = Date.now();
		if (currentTime - clock > 16) {
			clock = currentTime;
			callback(currentTime);
		} else {
			setTimeout(function () { return polyfill(callback); }, 0);
		}
	}
})();

var index = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	polyfill;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/rematrix/dist/rematrix.es.js":
/*!***************************************************!*\
  !*** ./node_modules/rematrix/dist/rematrix.es.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "format": () => (/* binding */ format),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleX": () => (/* binding */ scaleX),
/* harmony export */   "scaleY": () => (/* binding */ scaleY),
/* harmony export */   "scaleZ": () => (/* binding */ scaleZ),
/* harmony export */   "skew": () => (/* binding */ skew),
/* harmony export */   "skewX": () => (/* binding */ skewX),
/* harmony export */   "skewY": () => (/* binding */ skewY),
/* harmony export */   "toString": () => (/* binding */ toString),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "translateX": () => (/* binding */ translateX),
/* harmony export */   "translateY": () => (/* binding */ translateY),
/* harmony export */   "translateZ": () => (/* binding */ translateZ)
/* harmony export */ });
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
/**
 * @module Rematrix
 */

/**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function format(source) {
	if (source.constructor !== Array) {
		throw new TypeError('Expected array.')
	}
	if (source.length === 16) {
		return source
	}
	if (source.length === 6) {
		var matrix = identity();
		matrix[0] = source[0];
		matrix[1] = source[1];
		matrix[4] = source[2];
		matrix[5] = source[3];
		matrix[12] = source[4];
		matrix[13] = source[5];
		return matrix
	}
	throw new RangeError('Expected array with either 6 or 16 values.')
}

/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */
function identity() {
	var matrix = [];
	for (var i = 0; i < 16; i++) {
		i % 5 == 0 ? matrix.push(1) : matrix.push(0);
	}
	return matrix
}

/**
 * Returns a matrix describing the inverse transformation of the source
 * matrix. The product of any matrix multiplied by its inverse will be the
 * identity matrix.
 *
 * > **Tip:** Similar to how `5 * (1/5) === 1`, where `1/5` is the inverse.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function inverse(source) {
	var m = format(source);

	var s0 = m[0] * m[5] - m[4] * m[1];
	var s1 = m[0] * m[6] - m[4] * m[2];
	var s2 = m[0] * m[7] - m[4] * m[3];
	var s3 = m[1] * m[6] - m[5] * m[2];
	var s4 = m[1] * m[7] - m[5] * m[3];
	var s5 = m[2] * m[7] - m[6] * m[3];

	var c5 = m[10] * m[15] - m[14] * m[11];
	var c4 = m[9] * m[15] - m[13] * m[11];
	var c3 = m[9] * m[14] - m[13] * m[10];
	var c2 = m[8] * m[15] - m[12] * m[11];
	var c1 = m[8] * m[14] - m[12] * m[10];
	var c0 = m[8] * m[13] - m[12] * m[9];

	var determinant = 1 / (s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0);

	if (isNaN(determinant) || determinant === Infinity) {
		throw new Error('Inverse determinant attempted to divide by zero.')
	}

	return [
		(m[5] * c5 - m[6] * c4 + m[7] * c3) * determinant,
		(-m[1] * c5 + m[2] * c4 - m[3] * c3) * determinant,
		(m[13] * s5 - m[14] * s4 + m[15] * s3) * determinant,
		(-m[9] * s5 + m[10] * s4 - m[11] * s3) * determinant,

		(-m[4] * c5 + m[6] * c2 - m[7] * c1) * determinant,
		(m[0] * c5 - m[2] * c2 + m[3] * c1) * determinant,
		(-m[12] * s5 + m[14] * s2 - m[15] * s1) * determinant,
		(m[8] * s5 - m[10] * s2 + m[11] * s1) * determinant,

		(m[4] * c4 - m[5] * c2 + m[7] * c0) * determinant,
		(-m[0] * c4 + m[1] * c2 - m[3] * c0) * determinant,
		(m[12] * s4 - m[13] * s2 + m[15] * s0) * determinant,
		(-m[8] * s4 + m[9] * s2 - m[11] * s0) * determinant,

		(-m[4] * c3 + m[5] * c1 - m[6] * c0) * determinant,
		(m[0] * c3 - m[1] * c1 + m[2] * c0) * determinant,
		(-m[12] * s3 + m[13] * s1 - m[14] * s0) * determinant,
		(m[8] * s3 - m[9] * s1 + m[10] * s0) * determinant
	]
}

/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */
function multiply(m, x) {
	var fm = format(m);
	var fx = format(x);
	var product = [];

	for (var i = 0; i < 4; i++) {
		var row = [fm[i], fm[i + 4], fm[i + 8], fm[i + 12]];
		for (var j = 0; j < 4; j++) {
			var k = j * 4;
			var col = [fx[k], fx[k + 1], fx[k + 2], fx[k + 3]];
			var result =
				row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];

			product[i + k] = result;
		}
	}

	return product
}

/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */
function parse(source) {
	if (typeof source === 'string') {
		var match = source.match(/matrix(3d)?\(([^)]+)\)/);
		if (match) {
			var raw = match[2].split(', ').map(parseFloat);
			return format(raw)
		}
	}
	return identity()
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * > **Tip:** This is just an alias for `Rematrix.rotateZ` for parity with CSS
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotate(angle) {
	return rotateZ(angle)
}

/**
 * Returns a 4x4 matrix describing X-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[5] = matrix[10] = Math.cos(theta);
	matrix[6] = matrix[9] = Math.sin(theta);
	matrix[9] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[10] = Math.cos(theta);
	matrix[2] = matrix[8] = Math.sin(theta);
	matrix[2] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateZ(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[5] = Math.cos(theta);
	matrix[1] = matrix[4] = Math.sin(theta);
	matrix[4] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */
function scale(scalar, scalarY) {
	var matrix = identity();

	matrix[0] = scalar;
	matrix[5] = typeof scalarY === 'number' ? scalarY : scalar;

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleX(scalar) {
	var matrix = identity();
	matrix[0] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleY(scalar) {
	var matrix = identity();
	matrix[5] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleZ(scalar) {
	var matrix = identity();
	matrix[10] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing shear. The first argument
 * defines X-axis shearing, and an optional second argument
 * defines Y-axis shearing.
 *
 * @param  {number} angleX   - Measured in degrees.
 * @param  {number} [angleY] - Measured in degrees.
 * @return {array}
 */
function skew(angleX, angleY) {
	var thetaX = Math.PI / 180 * angleX;
	var matrix = identity();

	matrix[4] = Math.tan(thetaX);

	if (angleY) {
		var thetaY = Math.PI / 180 * angleY;
		matrix[1] = Math.tan(thetaY);
	}

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis shear.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function skewX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[4] = Math.tan(theta);

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis shear.
 *
 * @param  {number} angle - Measured in degrees
 * @return {array}
 */
function skewY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[1] = Math.tan(theta);

	return matrix
}

/**
 * Returns a CSS Transform property value equivalent to the source matrix.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {string}
 */
function toString(source) {
	return ("matrix3d(" + (format(source).join(', ')) + ")")
}

/**
 * Returns a 4x4 matrix describing 2D translation. The first
 * argument defines X-axis translation, and an optional second
 * argument defines Y-axis translation.
 *
 * @param  {number} distanceX   - Measured in pixels.
 * @param  {number} [distanceY] - Measured in pixels.
 * @return {array}
 */
function translate(distanceX, distanceY) {
	var matrix = identity();
	matrix[12] = distanceX;

	if (distanceY) {
		matrix[13] = distanceY;
	}

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateX(distance) {
	var matrix = identity();
	matrix[12] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateY(distance) {
	var matrix = identity();
	matrix[13] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateZ(distance) {
	var matrix = identity();
	matrix[14] = distance;
	return matrix
}




/***/ }),

/***/ "./node_modules/scrollreveal/dist/scrollreveal.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/scrollreveal/dist/scrollreveal.es.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tealight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tealight */ "./node_modules/tealight/dist/tealight.es.js");
/* harmony import */ var rematrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rematrix */ "./node_modules/rematrix/dist/rematrix.es.js");
/* harmony import */ var miniraf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! miniraf */ "./node_modules/miniraf/dist/miniraf.es.js");
/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/




var defaults = {
	delay: 0,
	distance: '0',
	duration: 600,
	easing: 'cubic-bezier(0.5, 0, 0, 1)',
	interval: 0,
	opacity: 0,
	origin: 'bottom',
	rotate: {
		x: 0,
		y: 0,
		z: 0
	},
	scale: 1,
	cleanup: false,
	container: document.documentElement,
	desktop: true,
	mobile: true,
	reset: false,
	useDelay: 'always',
	viewFactor: 0.0,
	viewOffset: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	afterReset: function afterReset() {},
	afterReveal: function afterReveal() {},
	beforeReset: function beforeReset() {},
	beforeReveal: function beforeReveal() {}
};

function failure() {
	document.documentElement.classList.remove('sr');

	return {
		clean: function clean() {},
		destroy: function destroy() {},
		reveal: function reveal() {},
		sync: function sync() {},
		get noop() {
			return true
		}
	}
}

function success() {
	document.documentElement.classList.add('sr');

	if (document.body) {
		document.body.style.height = '100%';
	} else {
		document.addEventListener('DOMContentLoaded', function () {
			document.body.style.height = '100%';
		});
	}
}

var mount = { success: success, failure: failure };

function isObject(x) {
	return (
		x !== null &&
		x instanceof Object &&
		(x.constructor === Object ||
			Object.prototype.toString.call(x) === '[object Object]')
	)
}

function each(collection, callback) {
	if (isObject(collection)) {
		var keys = Object.keys(collection);
		return keys.forEach(function (key) { return callback(collection[key], key, collection); })
	}
	if (collection instanceof Array) {
		return collection.forEach(function (item, i) { return callback(item, i, collection); })
	}
	throw new TypeError('Expected either an array or object literal.')
}

function logger(message) {
	var details = [], len = arguments.length - 1;
	while ( len-- > 0 ) details[ len ] = arguments[ len + 1 ];

	if (this.constructor.debug && console) {
		var report = "%cScrollReveal: " + message;
		details.forEach(function (detail) { return (report += "\n — " + detail); });
		console.log(report, 'color: #ea654b;'); // eslint-disable-line no-console
	}
}

function rinse() {
	var this$1 = this;

	var struct = function () { return ({
		active: [],
		stale: []
	}); };

	var elementIds = struct();
	var sequenceIds = struct();
	var containerIds = struct();

	/**
	 * Take stock of active element IDs.
	 */
	try {
		each((0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-sr-id]'), function (node) {
			var id = parseInt(node.getAttribute('data-sr-id'));
			elementIds.active.push(id);
		});
	} catch (e) {
		throw e
	}
	/**
	 * Destroy stale elements.
	 */
	each(this.store.elements, function (element) {
		if (elementIds.active.indexOf(element.id) === -1) {
			elementIds.stale.push(element.id);
		}
	});

	each(elementIds.stale, function (staleId) { return delete this$1.store.elements[staleId]; });

	/**
	 * Take stock of active container and sequence IDs.
	 */
	each(this.store.elements, function (element) {
		if (containerIds.active.indexOf(element.containerId) === -1) {
			containerIds.active.push(element.containerId);
		}
		if (element.hasOwnProperty('sequence')) {
			if (sequenceIds.active.indexOf(element.sequence.id) === -1) {
				sequenceIds.active.push(element.sequence.id);
			}
		}
	});

	/**
	 * Destroy stale containers.
	 */
	each(this.store.containers, function (container) {
		if (containerIds.active.indexOf(container.id) === -1) {
			containerIds.stale.push(container.id);
		}
	});

	each(containerIds.stale, function (staleId) {
		var stale = this$1.store.containers[staleId].node;
		stale.removeEventListener('scroll', this$1.delegate);
		stale.removeEventListener('resize', this$1.delegate);
		delete this$1.store.containers[staleId];
	});

	/**
	 * Destroy stale sequences.
	 */
	each(this.store.sequences, function (sequence) {
		if (sequenceIds.active.indexOf(sequence.id) === -1) {
			sequenceIds.stale.push(sequence.id);
		}
	});

	each(sequenceIds.stale, function (staleId) { return delete this$1.store.sequences[staleId]; });
}

var getPrefixedCssProp = (function () {
	var properties = {};
	var style = document.documentElement.style;

	function getPrefixedCssProperty(name, source) {
		if ( source === void 0 ) source = style;

		if (name && typeof name === 'string') {
			if (properties[name]) {
				return properties[name]
			}
			if (typeof source[name] === 'string') {
				return (properties[name] = name)
			}
			if (typeof source[("-webkit-" + name)] === 'string') {
				return (properties[name] = "-webkit-" + name)
			}
			throw new RangeError(("Unable to find \"" + name + "\" style property."))
		}
		throw new TypeError('Expected a string.')
	}

	getPrefixedCssProperty.clearCache = function () { return (properties = {}); };

	return getPrefixedCssProperty
})();

function style(element) {
	var computed = window.getComputedStyle(element.node);
	var position = computed.position;
	var config = element.config;

	/**
	 * Generate inline styles
	 */
	var inline = {};
	var inlineStyle = element.node.getAttribute('style') || '';
	var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];

	inline.computed = inlineMatch ? inlineMatch.map(function (m) { return m.trim(); }).join('; ') + ';' : '';

	inline.generated = inlineMatch.some(function (m) { return m.match(/visibility\s?:\s?visible/i); })
		? inline.computed
		: inlineMatch.concat( ['visibility: visible']).map(function (m) { return m.trim(); }).join('; ') + ';';

	/**
	 * Generate opacity styles
	 */
	var computedOpacity = parseFloat(computed.opacity);
	var configOpacity = !isNaN(parseFloat(config.opacity))
		? parseFloat(config.opacity)
		: parseFloat(computed.opacity);

	var opacity = {
		computed: computedOpacity !== configOpacity ? ("opacity: " + computedOpacity + ";") : '',
		generated: computedOpacity !== configOpacity ? ("opacity: " + configOpacity + ";") : ''
	};

	/**
	 * Generate transformation styles
	 */
	var transformations = [];

	if (parseFloat(config.distance)) {
		var axis = config.origin === 'top' || config.origin === 'bottom' ? 'Y' : 'X';

		/**
		 * Let’s make sure our our pixel distances are negative for top and left.
		 * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
		 */
		var distance = config.distance;
		if (config.origin === 'top' || config.origin === 'left') {
			distance = /^-/.test(distance) ? distance.substr(1) : ("-" + distance);
		}

		var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
		var value = ref[0];
		var unit = ref[1];

		switch (unit) {
			case 'em':
				distance = parseInt(computed.fontSize) * value;
				break
			case 'px':
				distance = value;
				break
			case '%':
				/**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distance calculation
				 */
				distance =
					axis === 'Y'
						? (element.node.getBoundingClientRect().height * value) / 100
						: (element.node.getBoundingClientRect().width * value) / 100;
				break
			default:
				throw new RangeError('Unrecognized or missing distance unit.')
		}

		if (axis === 'Y') {
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.translateY)(distance));
		} else {
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.translateX)(distance));
		}
	}

	if (config.rotate.x) { transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.rotateX)(config.rotate.x)); }
	if (config.rotate.y) { transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.rotateY)(config.rotate.y)); }
	if (config.rotate.z) { transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.rotateZ)(config.rotate.z)); }
	if (config.scale !== 1) {
		if (config.scale === 0) {
			/**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.scale)(0.0002));
		} else {
			transformations.push((0,rematrix__WEBPACK_IMPORTED_MODULE_1__.scale)(config.scale));
		}
	}

	var transform = {};
	if (transformations.length) {
		transform.property = getPrefixedCssProp('transform');
		/**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */
		transform.computed = {
			raw: computed[transform.property],
			matrix: (0,rematrix__WEBPACK_IMPORTED_MODULE_1__.parse)(computed[transform.property])
		};

		transformations.unshift(transform.computed.matrix);
		var product = transformations.reduce(rematrix__WEBPACK_IMPORTED_MODULE_1__.multiply);

		transform.generated = {
			initial: ((transform.property) + ": matrix3d(" + (product.join(', ')) + ");"),
			final: ((transform.property) + ": matrix3d(" + (transform.computed.matrix.join(', ')) + ");")
		};
	} else {
		transform.generated = {
			initial: '',
			final: ''
		};
	}

	/**
	 * Generate transition styles
	 */
	var transition = {};
	if (opacity.generated || transform.generated.initial) {
		transition.property = getPrefixedCssProp('transition');
		transition.computed = computed[transition.property];
		transition.fragments = [];

		var delay = config.delay;
		var duration = config.duration;
		var easing = config.easing;

		if (opacity.generated) {
			transition.fragments.push({
				delayed: ("opacity " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ("opacity " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		if (transform.generated.initial) {
			transition.fragments.push({
				delayed: ((transform.property) + " " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ((transform.property) + " " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		/**
		 * The default computed transition property should be undefined, or one of:
		 * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
		 */
		var hasCustomTransition =
			transition.computed && !transition.computed.match(/all 0s|none 0s/);

		if (hasCustomTransition) {
			transition.fragments.unshift({
				delayed: transition.computed,
				instant: transition.computed
			});
		}

		var composed = transition.fragments.reduce(
			function (composition, fragment, i) {
				composition.delayed += i === 0 ? fragment.delayed : (", " + (fragment.delayed));
				composition.instant += i === 0 ? fragment.instant : (", " + (fragment.instant));
				return composition
			},
			{
				delayed: '',
				instant: ''
			}
		);

		transition.generated = {
			delayed: ((transition.property) + ": " + (composed.delayed) + ";"),
			instant: ((transition.property) + ": " + (composed.instant) + ";")
		};
	} else {
		transition.generated = {
			delayed: '',
			instant: ''
		};
	}

	return {
		inline: inline,
		opacity: opacity,
		position: position,
		transform: transform,
		transition: transition
	}
}

/**
 * apply a CSS string to an element using the CSSOM (element.style) rather
 * than setAttribute, which may violate the content security policy.
 *
 * @param {Node}   [el]  Element to receive styles.
 * @param {string} [declaration] Styles to apply.
 */
function applyStyle (el, declaration) {
	declaration.split(';').forEach(function (pair) {
		var ref = pair.split(':');
		var property = ref[0];
		var value = ref.slice(1);
		if (property && value) {
			el.style[property.trim()] = value.join(':');
		}
	});
}

function clean(target) {
	var this$1 = this;

	var dirty;
	try {
		each((0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(target), function (node) {
			var id = node.getAttribute('data-sr-id');
			if (id !== null) {
				dirty = true;
				var element = this$1.store.elements[id];
				if (element.callbackTimer) {
					window.clearTimeout(element.callbackTimer.clock);
				}
				applyStyle(element.node, element.styles.inline.generated);
				node.removeAttribute('data-sr-id');
				delete this$1.store.elements[id];
			}
		});
	} catch (e) {
		return logger.call(this, 'Clean failed.', e.message)
	}

	if (dirty) {
		try {
			rinse.call(this);
		} catch (e) {
			return logger.call(this, 'Clean failed.', e.message)
		}
	}
}

function destroy() {
	var this$1 = this;

	/**
	 * Remove all generated styles and element ids
	 */
	each(this.store.elements, function (element) {
		applyStyle(element.node, element.styles.inline.generated);
		element.node.removeAttribute('data-sr-id');
	});

	/**
	 * Remove all event listeners.
	 */
	each(this.store.containers, function (container) {
		var target =
			container.node === document.documentElement ? window : container.node;
		target.removeEventListener('scroll', this$1.delegate);
		target.removeEventListener('resize', this$1.delegate);
	});

	/**
	 * Clear all data from the store
	 */
	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};
}

function deepAssign(target) {
	var sources = [], len = arguments.length - 1;
	while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

	if (isObject(target)) {
		each(sources, function (source) {
			each(source, function (data, key) {
				if (isObject(data)) {
					if (!target[key] || !isObject(target[key])) {
						target[key] = {};
					}
					deepAssign(target[key], data);
				} else {
					target[key] = data;
				}
			});
		});
		return target
	} else {
		throw new TypeError('Target must be an object literal.')
	}
}

function isMobile(agent) {
	if ( agent === void 0 ) agent = navigator.userAgent;

	return /Android|iPhone|iPad|iPod/i.test(agent)
}

var nextUniqueId = (function () {
	var uid = 0;
	return function () { return uid++; }
})();

function initialize() {
	var this$1 = this;

	rinse.call(this);

	each(this.store.elements, function (element) {
		var styles = [element.styles.inline.generated];

		if (element.visible) {
			styles.push(element.styles.opacity.computed);
			styles.push(element.styles.transform.generated.final);
			element.revealed = true;
		} else {
			styles.push(element.styles.opacity.generated);
			styles.push(element.styles.transform.generated.initial);
			element.revealed = false;
		}

		applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
	});

	each(this.store.containers, function (container) {
		var target =
			container.node === document.documentElement ? window : container.node;
		target.addEventListener('scroll', this$1.delegate);
		target.addEventListener('resize', this$1.delegate);
	});

	/**
	 * Manually invoke delegate once to capture
	 * element and container dimensions, container
	 * scroll position, and trigger any valid reveals
	 */
	this.delegate();

	/**
	 * Wipe any existing `setTimeout` now
	 * that initialization has completed.
	 */
	this.initTimeout = null;
}

function animate(element, force) {
	if ( force === void 0 ) force = {};

	var pristine = force.pristine || this.pristine;
	var delayed =
		element.config.useDelay === 'always' ||
		(element.config.useDelay === 'onload' && pristine) ||
		(element.config.useDelay === 'once' && !element.seen);

	var shouldReveal = element.visible && !element.revealed;
	var shouldReset = !element.visible && element.revealed && element.config.reset;

	if (force.reveal || shouldReveal) {
		return triggerReveal.call(this, element, delayed)
	}

	if (force.reset || shouldReset) {
		return triggerReset.call(this, element)
	}
}

function triggerReveal(element, delayed) {
	var styles = [
		element.styles.inline.generated,
		element.styles.opacity.computed,
		element.styles.transform.generated.final
	];
	if (delayed) {
		styles.push(element.styles.transition.generated.delayed);
	} else {
		styles.push(element.styles.transition.generated.instant);
	}
	element.revealed = element.seen = true;
	applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
	registerCallbacks.call(this, element, delayed);
}

function triggerReset(element) {
	var styles = [
		element.styles.inline.generated,
		element.styles.opacity.generated,
		element.styles.transform.generated.initial,
		element.styles.transition.generated.instant
	];
	element.revealed = false;
	applyStyle(element.node, styles.filter(function (s) { return s !== ''; }).join(' '));
	registerCallbacks.call(this, element);
}

function registerCallbacks(element, isDelayed) {
	var this$1 = this;

	var duration = isDelayed
		? element.config.duration + element.config.delay
		: element.config.duration;

	var beforeCallback = element.revealed
		? element.config.beforeReveal
		: element.config.beforeReset;

	var afterCallback = element.revealed
		? element.config.afterReveal
		: element.config.afterReset;

	var elapsed = 0;
	if (element.callbackTimer) {
		elapsed = Date.now() - element.callbackTimer.start;
		window.clearTimeout(element.callbackTimer.clock);
	}

	beforeCallback(element.node);

	element.callbackTimer = {
		start: Date.now(),
		clock: window.setTimeout(function () {
			afterCallback(element.node);
			element.callbackTimer = null;
			if (element.revealed && !element.config.reset && element.config.cleanup) {
				clean.call(this$1, element.node);
			}
		}, duration - elapsed)
	};
}

function sequence(element, pristine) {
	if ( pristine === void 0 ) pristine = this.pristine;

	/**
	 * We first check if the element should reset.
	 */
	if (!element.visible && element.revealed && element.config.reset) {
		return animate.call(this, element, { reset: true })
	}

	var seq = this.store.sequences[element.sequence.id];
	var i = element.sequence.index;

	if (seq) {
		var visible = new SequenceModel(seq, 'visible', this.store);
		var revealed = new SequenceModel(seq, 'revealed', this.store);

		seq.models = { visible: visible, revealed: revealed };

		/**
		 * If the sequence has no revealed members,
		 * then we reveal the first visible element
		 * within that sequence.
		 *
		 * The sequence then cues a recursive call
		 * in both directions.
		 */
		if (!revealed.body.length) {
			var nextId = seq.members[visible.body[0]];
			var nextElement = this.store.elements[nextId];

			if (nextElement) {
				cue.call(this, seq, visible.body[0], -1, pristine);
				cue.call(this, seq, visible.body[0], +1, pristine);
				return animate.call(this, nextElement, { reveal: true, pristine: pristine })
			}
		}

		/**
		 * If our element isn’t resetting, we check the
		 * element sequence index against the head, and
		 * then the foot of the sequence.
		 */
		if (
			!seq.blocked.head &&
			i === [].concat( revealed.head ).pop() &&
			i >= [].concat( visible.body ).shift()
		) {
			cue.call(this, seq, i, -1, pristine);
			return animate.call(this, element, { reveal: true, pristine: pristine })
		}

		if (
			!seq.blocked.foot &&
			i === [].concat( revealed.foot ).shift() &&
			i <= [].concat( visible.body ).pop()
		) {
			cue.call(this, seq, i, +1, pristine);
			return animate.call(this, element, { reveal: true, pristine: pristine })
		}
	}
}

function Sequence(interval) {
	var i = Math.abs(interval);
	if (!isNaN(i)) {
		this.id = nextUniqueId();
		this.interval = Math.max(i, 16);
		this.members = [];
		this.models = {};
		this.blocked = {
			head: false,
			foot: false
		};
	} else {
		throw new RangeError('Invalid sequence interval.')
	}
}

function SequenceModel(seq, prop, store) {
	var this$1 = this;

	this.head = [];
	this.body = [];
	this.foot = [];

	each(seq.members, function (id, index) {
		var element = store.elements[id];
		if (element && element[prop]) {
			this$1.body.push(index);
		}
	});

	if (this.body.length) {
		each(seq.members, function (id, index) {
			var element = store.elements[id];
			if (element && !element[prop]) {
				if (index < this$1.body[0]) {
					this$1.head.push(index);
				} else {
					this$1.foot.push(index);
				}
			}
		});
	}
}

function cue(seq, i, direction, pristine) {
	var this$1 = this;

	var blocked = ['head', null, 'foot'][1 + direction];
	var nextId = seq.members[i + direction];
	var nextElement = this.store.elements[nextId];

	seq.blocked[blocked] = true;

	setTimeout(function () {
		seq.blocked[blocked] = false;
		if (nextElement) {
			sequence.call(this$1, nextElement, pristine);
		}
	}, seq.interval);
}

function reveal(target, options, syncing) {
	var this$1 = this;
	if ( options === void 0 ) options = {};
	if ( syncing === void 0 ) syncing = false;

	var containerBuffer = [];
	var sequence$$1;
	var interval = options.interval || defaults.interval;

	try {
		if (interval) {
			sequence$$1 = new Sequence(interval);
		}

		var nodes = (0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(target);
		if (!nodes.length) {
			throw new Error('Invalid reveal target.')
		}

		var elements = nodes.reduce(function (elementBuffer, elementNode) {
			var element = {};
			var existingId = elementNode.getAttribute('data-sr-id');

			if (existingId) {
				deepAssign(element, this$1.store.elements[existingId]);

				/**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */
				applyStyle(element.node, element.styles.inline.computed);
			} else {
				element.id = nextUniqueId();
				element.node = elementNode;
				element.seen = false;
				element.revealed = false;
				element.visible = false;
			}

			var config = deepAssign({}, element.config || this$1.defaults, options);

			if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
				if (existingId) {
					clean.call(this$1, element);
				}
				return elementBuffer // skip elements that are disabled
			}

			var containerNode = (0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(config.container)[0];
			if (!containerNode) {
				throw new Error('Invalid container.')
			}
			if (!containerNode.contains(elementNode)) {
				return elementBuffer // skip elements found outside the container
			}

			var containerId;
			{
				containerId = getContainerId(
					containerNode,
					containerBuffer,
					this$1.store.containers
				);
				if (containerId === null) {
					containerId = nextUniqueId();
					containerBuffer.push({ id: containerId, node: containerNode });
				}
			}

			element.config = config;
			element.containerId = containerId;
			element.styles = style(element);

			if (sequence$$1) {
				element.sequence = {
					id: sequence$$1.id,
					index: sequence$$1.members.length
				};
				sequence$$1.members.push(element.id);
			}

			elementBuffer.push(element);
			return elementBuffer
		}, []);

		/**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 */
		each(elements, function (element) {
			this$1.store.elements[element.id] = element;
			element.node.setAttribute('data-sr-id', element.id);
		});
	} catch (e) {
		return logger.call(this, 'Reveal failed.', e.message)
	}

	/**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */
	each(containerBuffer, function (container) {
		this$1.store.containers[container.id] = {
			id: container.id,
			node: container.node
		};
	});
	if (sequence$$1) {
		this.store.sequences[sequence$$1.id] = sequence$$1;
	}

	/**
	 * If reveal wasn't invoked by sync, we want to
	 * make sure to add this call to the history.
	 */
	if (syncing !== true) {
		this.store.history.push({ target: target, options: options });

		/**
		 * Push initialization to the event queue, giving
		 * multiple reveal calls time to be interpreted.
		 */
		if (this.initTimeout) {
			window.clearTimeout(this.initTimeout);
		}
		this.initTimeout = window.setTimeout(initialize.bind(this), 0);
	}
}

function getContainerId(node) {
	var collections = [], len = arguments.length - 1;
	while ( len-- > 0 ) collections[ len ] = arguments[ len + 1 ];

	var id = null;
	each(collections, function (collection) {
		each(collection, function (container) {
			if (id === null && container.node === node) {
				id = container.id;
			}
		});
	});
	return id
}

/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */
function sync() {
	var this$1 = this;

	each(this.store.history, function (record) {
		reveal.call(this$1, record.target, record.options, true);
	});

	initialize.call(this);
}

var polyfill = function (x) { return (x > 0) - (x < 0) || +x; };
var mathSign = Math.sign || polyfill;

function getGeometry(target, isContainer) {
	/**
	 * We want to ignore padding and scrollbars for container elements.
	 * More information here: https://goo.gl/vOZpbz
	 */
	var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
	var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;

	var offsetTop = 0;
	var offsetLeft = 0;
	var node = target.node;

	do {
		if (!isNaN(node.offsetTop)) {
			offsetTop += node.offsetTop;
		}
		if (!isNaN(node.offsetLeft)) {
			offsetLeft += node.offsetLeft;
		}
		node = node.offsetParent;
	} while (node)

	return {
		bounds: {
			top: offsetTop,
			right: offsetLeft + width,
			bottom: offsetTop + height,
			left: offsetLeft
		},
		height: height,
		width: width
	}
}

function getScrolled(container) {
	var top, left;
	if (container.node === document.documentElement) {
		top = window.pageYOffset;
		left = window.pageXOffset;
	} else {
		top = container.node.scrollTop;
		left = container.node.scrollLeft;
	}
	return { top: top, left: left }
}

function isElementVisible(element) {
	if ( element === void 0 ) element = {};

	var container = this.store.containers[element.containerId];
	if (!container) { return }

	var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
	var viewOffset = element.config.viewOffset;

	var elementBounds = {
		top: element.geometry.bounds.top + element.geometry.height * viewFactor,
		right: element.geometry.bounds.right - element.geometry.width * viewFactor,
		bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
		left: element.geometry.bounds.left + element.geometry.width * viewFactor
	};

	var containerBounds = {
		top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
		right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
		bottom:
			container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
		left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
	};

	return (
		(elementBounds.top < containerBounds.bottom &&
			elementBounds.right > containerBounds.left &&
			elementBounds.bottom > containerBounds.top &&
			elementBounds.left < containerBounds.right) ||
		element.styles.position === 'fixed'
	)
}

function delegate(
	event,
	elements
) {
	var this$1 = this;
	if ( event === void 0 ) event = { type: 'init' };
	if ( elements === void 0 ) elements = this.store.elements;

	(0,miniraf__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
		var stale = event.type === 'init' || event.type === 'resize';

		each(this$1.store.containers, function (container) {
			if (stale) {
				container.geometry = getGeometry.call(this$1, container, true);
			}
			var scroll = getScrolled.call(this$1, container);
			if (container.scroll) {
				container.direction = {
					x: mathSign(scroll.left - container.scroll.left),
					y: mathSign(scroll.top - container.scroll.top)
				};
			}
			container.scroll = scroll;
		});

		/**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */
		each(elements, function (element) {
			if (stale || element.geometry === undefined) {
				element.geometry = getGeometry.call(this$1, element);
			}
			element.visible = isElementVisible.call(this$1, element);
		});

		each(elements, function (element) {
			if (element.sequence) {
				sequence.call(this$1, element);
			} else {
				animate.call(this$1, element);
			}
		});

		this$1.pristine = false;
	});
}

function isTransformSupported() {
	var style = document.documentElement.style;
	return 'transform' in style || 'WebkitTransform' in style
}

function isTransitionSupported() {
	var style = document.documentElement.style;
	return 'transition' in style || 'WebkitTransition' in style
}

var version = "4.0.9";

var boundDelegate;
var boundDestroy;
var boundReveal;
var boundClean;
var boundSync;
var config;
var debug;
var instance;

function ScrollReveal(options) {
	if ( options === void 0 ) options = {};

	var invokedWithoutNew =
		typeof this === 'undefined' ||
		Object.getPrototypeOf(this) !== ScrollReveal.prototype;

	if (invokedWithoutNew) {
		return new ScrollReveal(options)
	}

	if (!ScrollReveal.isSupported()) {
		logger.call(this, 'Instantiation failed.', 'This browser is not supported.');
		return mount.failure()
	}

	var buffer;
	try {
		buffer = config
			? deepAssign({}, config, options)
			: deepAssign({}, defaults, options);
	} catch (e) {
		logger.call(this, 'Invalid configuration.', e.message);
		return mount.failure()
	}

	try {
		var container = (0,tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(buffer.container)[0];
		if (!container) {
			throw new Error('Invalid container.')
		}
	} catch (e) {
		logger.call(this, e.message);
		return mount.failure()
	}

	config = buffer;

	if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
		logger.call(
			this,
			'This device is disabled.',
			("desktop: " + (config.desktop)),
			("mobile: " + (config.mobile))
		);
		return mount.failure()
	}

	mount.success();

	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};

	this.pristine = true;

	boundDelegate = boundDelegate || delegate.bind(this);
	boundDestroy = boundDestroy || destroy.bind(this);
	boundReveal = boundReveal || reveal.bind(this);
	boundClean = boundClean || clean.bind(this);
	boundSync = boundSync || sync.bind(this);

	Object.defineProperty(this, 'delegate', { get: function () { return boundDelegate; } });
	Object.defineProperty(this, 'destroy', { get: function () { return boundDestroy; } });
	Object.defineProperty(this, 'reveal', { get: function () { return boundReveal; } });
	Object.defineProperty(this, 'clean', { get: function () { return boundClean; } });
	Object.defineProperty(this, 'sync', { get: function () { return boundSync; } });

	Object.defineProperty(this, 'defaults', { get: function () { return config; } });
	Object.defineProperty(this, 'version', { get: function () { return version; } });
	Object.defineProperty(this, 'noop', { get: function () { return false; } });

	return instance ? instance : (instance = this)
}

ScrollReveal.isSupported = function () { return isTransformSupported() && isTransitionSupported(); };

Object.defineProperty(ScrollReveal, 'debug', {
	get: function () { return debug || false; },
	set: function (value) { return (debug = typeof value === 'boolean' ? value : debug); }
});

ScrollReveal();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollReveal);


/***/ }),

/***/ "./src/style.css?7163":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/tealight/dist/tealight.es.js":
/*!***************************************************!*\
  !*** ./node_modules/tealight/dist/tealight.es.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var is_dom_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-dom-node */ "./node_modules/is-dom-node/dist/is-dom-node.es.js");
/* harmony import */ var is_dom_node_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-dom-node-list */ "./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js");
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/



function tealight(target, context) {
  if ( context === void 0 ) context = document;

  if (target instanceof Array) { return target.filter(is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"]); }
  if ((0,is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"])(target)) { return [target]; }
  if ((0,is_dom_node_list__WEBPACK_IMPORTED_MODULE_1__["default"])(target)) { return Array.prototype.slice.call(target); }
  if (typeof target === "string") {
    try {
      var query = context.querySelectorAll(target);
      return Array.prototype.slice.call(query);
    } catch (err) {
      return [];
    }
  }
  return [];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tealight);


/***/ }),

/***/ "./src/style.css?1315":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57011448dc08b9372b5e.css";

/***/ }),

/***/ "./src/assets/images/aueb.jpg":
/*!************************************!*\
  !*** ./src/assets/images/aueb.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9db42c506663c3e242d1.jpg";

/***/ }),

/***/ "./src/assets/images/mobile.png":
/*!**************************************!*\
  !*** ./src/assets/images/mobile.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f175238bb8f220de6256.png";

/***/ }),

/***/ "./src/assets/images/skills.png":
/*!**************************************!*\
  !*** ./src/assets/images/skills.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76972d9721ec4a6d7a08.png";

/***/ }),

/***/ "./src/assets/images/thanos.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/thanos.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30c0c234c143afa4e985.jpg";

/***/ }),

/***/ "./src/assets/images/tic.png":
/*!***********************************!*\
  !*** ./src/assets/images/tic.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69d4eebfc4aa8f60cc08.png";

/***/ }),

/***/ "./src/assets/images/todo.png":
/*!************************************!*\
  !*** ./src/assets/images/todo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94193ae76d85ae713036.png";

/***/ }),

/***/ "./src/index.js?dfde":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de425ac9d243fd57ea63.js";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css?7163");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var scrollreveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scrollreveal */ "./node_modules/scrollreveal/dist/scrollreveal.es.js");




const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Close menu, mobile.
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((el) => el.addEventListener("click", linkAction));

// Scroll sections active link.
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
      // Match href with .nav-menu ancestor, containing sectionId.
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

const sr = (0,scrollreveal__WEBPACK_IMPORTED_MODULE_2__["default"])({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home-title", {});
sr.reveal(".home-scroll", { delay: 400 });
sr.reveal(".home-img", { origin: "right", delay: 600 });

sr.reveal(".about-img", { origin: "left", delay: 400 });
sr.reveal(".about-subtitle", { delay: 300 });
sr.reveal(".about-prof", { delay: 400 });
sr.reveal(".about-text", { delay: 500 });
sr.reveal(".about-social-icon", { delay: 600, interval: 300 });

sr.reveal(".project-img", { delay: 200, interval: 500 });

sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-name", { delay: 150, distance: "20px", interval: 150 });
sr.reveal(".skills-img", { origin: "left", delay: 500 });

sr.reveal(".contact-subtitle", {});
sr.reveal(".contact-text", { interval: 300 });
sr.reveal(".contact-input", { delay: 400 });
sr.reveal(".contact-button", { interval: 300 });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsNEJBQTRCLHlCQUF5Qiw2QkFBNkIsNEJBQTRCLDZCQUE2Qiw0QkFBNEIsMENBQTBDLDRCQUE0QixpQ0FBaUMsK0JBQStCLGdDQUFnQyxxQkFBcUIsbUJBQW1CLHFCQUFxQixtQkFBbUIscUJBQXFCLHFCQUFxQixLQUFLLDhDQUE4QyxhQUFhLGlDQUFpQyxtQ0FBbUMsaUNBQWlDLGtDQUFrQyxPQUFPLEtBQUssb0NBQW9DLDZCQUE2QixLQUFLLGNBQWMsOEJBQThCLEtBQUssY0FBYyx5Q0FBeUMsK0JBQStCLG9DQUFvQyx5Q0FBeUMsc0NBQXNDLHVCQUF1QixLQUFLLGdDQUFnQyxnQkFBZ0IsS0FBSyxZQUFZLGlCQUFpQix1QkFBdUIsS0FBSyxXQUFXLDRCQUE0QiwrQkFBK0IsS0FBSyxhQUFhLHNCQUFzQixtQkFBbUIscUJBQXFCLEtBQUssa0JBQWtCLHNCQUFzQixLQUFLLHdCQUF3Qix5QkFBeUIsNEJBQTRCLHlCQUF5QiwrQkFBK0IseUNBQXlDLEtBQUssK0JBQStCLHlCQUF5QixtQkFBbUIsb0JBQW9CLGtCQUFrQixzQkFBc0IsY0FBYyxlQUFlLGdCQUFnQiwyQ0FBMkMsS0FBSyxrQkFBa0Isb0JBQW9CLHdCQUF3QixrQ0FBa0MsNEJBQTRCLCtCQUErQiwrQkFBK0IsZ0NBQWdDLEtBQUssbUJBQW1CLGtCQUFrQixzQkFBc0IsYUFBYSxjQUFjLDhCQUE4QiwyQ0FBMkMsS0FBSyxjQUFjLG1DQUFtQyxvQkFBb0IscUNBQXFDLDBCQUEwQixLQUFLLDhDQUE4QyxpQkFBaUIsd0JBQXdCLGtDQUFrQyxxQkFBcUIscUJBQXFCLG1CQUFtQixzQkFBc0IsbURBQW1ELHlCQUF5QixvQ0FBb0MsT0FBTyxLQUFLLG1CQUFtQixpQ0FBaUMsS0FBSyxtQkFBbUIseUJBQXlCLCtCQUErQixLQUFLLHlCQUF5QixnQ0FBZ0MsS0FBSyxtQkFBbUIsZ0NBQWdDLEtBQUsscUJBQXFCLGdDQUFnQyxzQkFBc0Isd0JBQXdCLEtBQUssZUFBZSxlQUFlLEtBQUssd0JBQXdCLHlCQUF5QixvQkFBb0Isa0JBQWtCLHFCQUFxQixjQUFjLGtCQUFrQiwyQ0FBMkMsS0FBSyxlQUFlLHVCQUF1Qix5QkFBeUIsMkNBQTJDLEtBQUsseUJBQXlCLGlEQUFpRCxvQkFBb0IsS0FBSyxxQkFBcUIsMkJBQTJCLHNDQUFzQyxnQ0FBZ0MsdUJBQXVCLEtBQUssMEJBQTBCLGtEQUFrRCxLQUFLLHNCQUFzQiwyQkFBMkIsa0NBQWtDLEtBQUssMkJBQTJCLGdDQUFnQyxpQ0FBaUMsZ0NBQWdDLEtBQUssbUJBQW1CLHlCQUF5QixlQUFlLGdCQUFnQixtQkFBbUIsS0FBSyxvQkFBb0Isb0JBQW9CLDhCQUE4QixtQkFBbUIsb0JBQW9CLEtBQUssd0JBQXdCLHlCQUF5QixLQUFLLDBCQUEwQiw0QkFBNEIseUJBQXlCLG9CQUFvQixLQUFLLHlCQUF5QixnQ0FBZ0MseUNBQXlDLGlDQUFpQyxLQUFLLHFCQUFxQixpQ0FBaUMscUJBQXFCLEtBQUsscUJBQXFCLGlDQUFpQyxLQUFLLDRCQUE0Qix3QkFBd0IsNEJBQTRCLEtBQUssMkJBQTJCLG9CQUFvQixLQUFLLDBCQUEwQixnQ0FBZ0MsaUNBQWlDLEtBQUssc0JBQXNCLDRCQUE0Qix3Q0FBd0MsZ0NBQWdDLGlDQUFpQyw4QkFBOEIsMkNBQTJDLDZCQUE2QixLQUFLLDRCQUE0QiwyQ0FBMkMsZ0NBQWdDLEtBQUsseUJBQXlCLDRCQUE0QixLQUFLLG1CQUFtQiwyQ0FBMkMsS0FBSyw2QkFBNkIsb0JBQW9CLDRCQUE0QixLQUFLLHNCQUFzQix5QkFBeUIsdUJBQXVCLEtBQUssMEJBQTBCLDRCQUE0QixLQUFLLHVCQUF1Qix5QkFBeUIsb0JBQW9CLGtCQUFrQixtQkFBbUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsaURBQWlELDRCQUE0QixzQkFBc0Isa0NBQWtDLHVCQUF1QixLQUFLLDBDQUEwQyxnQkFBZ0IsS0FBSyw0QkFBNEIseUNBQXlDLG1CQUFtQixLQUFLLDRCQUE0QixvQkFBb0IsS0FBSywyQkFBMkIsZ0NBQWdDLHlDQUF5QyxLQUFLLHVCQUF1Qiw0QkFBNEIsaUNBQWlDLEtBQUsseUJBQXlCLG9CQUFvQiw0Q0FBNEMsdUJBQXVCLEtBQUssd0JBQXdCLHNCQUFzQixvQkFBb0Isa0JBQWtCLGlDQUFpQyx5Q0FBeUMsNENBQTRDLDRCQUE0QixLQUFLLHlCQUF5QixxQkFBcUIsMkNBQTJDLGdDQUFnQyw4QkFBOEIsNEJBQTRCLG1CQUFtQixvQkFBb0IseUNBQXlDLHNCQUFzQixLQUFLLGlCQUFpQiwwQ0FBMEMsS0FBSywyQkFBMkIsb0JBQW9CLEtBQUssdUJBQXVCLGdDQUFnQyx5Q0FBeUMsaUNBQWlDLEtBQUssc0JBQXNCLHlCQUF5QixLQUFLLDRCQUE0QixnQ0FBZ0MsS0FBSyw4Q0FBOEMsWUFBWSxrQkFBa0IsT0FBTyxvQkFBb0IsMEJBQTBCLE9BQU8sMEJBQTBCLDRCQUE0QixPQUFPLGlDQUFpQyxvQkFBb0Isa0JBQWtCLE9BQU8sZ0JBQWdCLGdEQUFnRCxPQUFPLHFCQUFxQixzQkFBc0IsT0FBTyxxQkFBcUIsaUNBQWlDLHlCQUF5QixPQUFPLHVCQUF1QixzQkFBc0IsT0FBTyxxQkFBcUIsa0NBQWtDLE9BQU8sMkJBQTJCLGtDQUFrQyxPQUFPLDBCQUEwQiw2Q0FBNkMsT0FBTywyQkFBMkIsc0JBQXNCLHNDQUFzQyxtQkFBbUIsT0FBTyxxQkFBcUIscUJBQXFCLG1CQUFtQixPQUFPLDRCQUE0Qiw4Q0FBOEMsNEJBQTRCLDRCQUE0Qix3QkFBd0IsT0FBTyxzQkFBc0IscUJBQXFCLHNCQUFzQixPQUFPLDBCQUEwQixxQkFBcUIsT0FBTyw2QkFBNkIsOENBQThDLDRCQUE0QixPQUFPLCtCQUErQiw4Q0FBOEMseUJBQXlCLE9BQU8sOEJBQThCLDhDQUE4Qyw4QkFBOEIsT0FBTyx5QkFBeUIscUJBQXFCLE9BQU8sNkJBQTZCLDhDQUE4Qyw4QkFBOEIsT0FBTyxLQUFLLCtDQUErQyxnQkFBZ0IsMEJBQTBCLDJCQUEyQixPQUFPLEtBQUssV0FBVyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxRQUFRLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHNDQUFzQztBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrQ0FBa0M7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsd0RBQVk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkI7QUFDM0IsNEJBQTRCLFlBQVk7QUFDeEMseUJBQXlCLDZCQUE2QjtBQUN0RDtBQUNBLDBCQUEwQiw0QkFBNEI7QUFDdEQsK0JBQStCLFlBQVk7QUFDM0MsMkJBQTJCLFlBQVk7QUFDdkMsMkJBQTJCLFlBQVk7QUFDdkMsa0NBQWtDLDJCQUEyQjtBQUM3RDtBQUNBLDRCQUE0QiwyQkFBMkI7QUFDdkQ7QUFDQSxnQ0FBZ0M7QUFDaEMsNEJBQTRCLDZDQUE2QztBQUN6RSwyQkFBMkIsNEJBQTRCO0FBQ3ZEO0FBQ0EsaUNBQWlDO0FBQ2pDLDZCQUE2QixlQUFlO0FBQzVDLDhCQUE4QixZQUFZO0FBQzFDLCtCQUErQixlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9pcy1kb20tbm9kZS1saXN0L2Rpc3QvaXMtZG9tLW5vZGUtbGlzdC5lcy5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvaXMtZG9tLW5vZGUvZGlzdC9pcy1kb20tbm9kZS5lcy5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbWluaXJhZi9kaXN0L21pbmlyYWYuZXMuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3JlbWF0cml4L2Rpc3QvcmVtYXRyaXguZXMuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3Njcm9sbHJldmVhbC9kaXN0L3Njcm9sbHJldmVhbC5lcy5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvdGVhbGlnaHQvZGlzdC90ZWFsaWdodC5lcy5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215X3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215X3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0taGVhZGVyLWhlaWdodDogM3JlbTtcXHJcXG4gIC0tZm9udC1tZWRpdW06IDUwMDtcXHJcXG4gIC0tYmFzaWMtY29sb3I6ICM1MzYxZmY7XFxyXFxuICAtLWRhcmstY29sb3I6ICMyYTNiNDc7XFxyXFxuICAtLXdoaXRlLWNvbG9yOiAjZmFmYWZmO1xcclxcbiAgLS10ZXh0LWNvbG9yOiAjNjk3NDc3O1xcclxcbiAgLS1ib2R5LWZvbnQ6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1iaWctZm9udC1zaXplOiA0cmVtO1xcclxcbiAgLS1tZWRpdW0tZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAtLW5vcm1hbC1mb250LXNpemU6IDFyZW07XFxyXFxuICAtLXNtYWxsLWZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgLS1tYi0xOiAwLjVyZW07XFxyXFxuICAtLW1iLTI6IDFyZW07XFxyXFxuICAtLW1iLTM6IDEuNXJlbTtcXHJcXG4gIC0tbWItNDogMnJlbTtcXHJcXG4gIC0tbWItNTogMi41cmVtO1xcclxcbiAgLS16LWZpeGVkOiAxMDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICA6cm9vdCB7XFxyXFxuICAgIC0tYmlnLWZvbnQtc2l6ZTogNi4yNXJlbTtcXHJcXG4gICAgLS1tZWRpdW0tZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIC0tbm9ybWFsLWZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgLS1zbWFsbC1mb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG46OmJlZm9yZSxcXHJcXG46OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiB2YXIoLS1oZWFkZXItaGVpZ2h0KSAwIDAgMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LW1lZGl1bSk7XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5wLFxcclxcbnVsIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDNyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luOiB2YXIoLS1tYi00KSAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tZWRpdW0tZm9udC1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGU6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgd2lkdGg6IDMycHg7XFxyXFxuICBoZWlnaHQ6IDAuMThyZW07XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNpYy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5iZC1ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBtYXgtd2lkdGg6IDEwMjRweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXHJcXG4gIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYi0yKTtcXHJcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbWItMik7XFxyXFxufVxcclxcblxcclxcbi5sLWhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiB2YXIoLS16LWZpeGVkKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubmF2LW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxyXFxuICAgIHJpZ2h0OiAtMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1iLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbms6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sb2dvIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3cge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmU6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDAuMnJlbTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDEuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXHJcXG4gIHJvdy1nYXA6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRpdGxlIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1iaWctZm9udC1zaXplKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBsaW5lLWhlaWdodDogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10aXRsZSBzcGFuIHtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDIwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5ob21lLXNjcm9sbCB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1tYi00KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtc2Nyb2xsLWxpbmsge1xcclxcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDI4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaW1nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWcgaW1nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICByb3ctZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtc3VidGl0bGUge1xcclxcbiAgY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbWVkaXVtLWZvbnQtc2l6ZSk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXByb2Yge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItNCk7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItNCk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1zb2NpYWwtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIG1hcmdpbjogMCB2YXIoLS1tYi0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxscy1jb250YWluZXIge1xcclxcbiAgcm93LWdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxscy1zdWJ0aXRsZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFzaWMtY29sb3IpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItMyk7XFxyXFxufVxcclxcblxcclxcbi5za2lsbHMtbmFtZSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQtc2l6ZSk7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1iLTIpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItMyk7XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5za2lsbHMtbmFtZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNpYy1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGxzLWltZyBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXHJcXG4gIHJvdy1nYXA6IDJyZW07XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWltZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pbWcgaW1nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGluayB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IC0xMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaW1nOmhvdmVyIC5wcm9qZWN0LWxpbmsge1xcclxcbiAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saW5rLW5hbWUge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tZWRpdW0tZm9udC1zaXplKTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gIHJvdy1nYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXN1YnRpdGxlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYXNpYy1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC10ZXh0IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1iLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbnB1dHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAwLjhyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi00KTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxyXFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWRhcmstY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1idXR0b24ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNpYy1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMC43NXJlbSAyLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXIge1xcclxcbiAgcm93LWdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci10aXRsZSB7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1iLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxpbmsge1xcclxcbiAgcGFkZGluZzogMC4yNXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxpbms6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VjdGlvbiB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlY3Rpb24tdGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlY3Rpb24tdGl0bGU6OmFmdGVyIHtcXHJcXG4gICAgd2lkdGg6IDY0cHg7XFxyXFxuICAgIHRvcDogM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYge1xcclxcbiAgICBoZWlnaHQ6IGNhbGModmFyKGhlYWRlci1oZWlnaHQpICsgMXJlbSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1iLTQpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi10b2dnbGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGluazpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWN0aXZlOjphZnRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS43ZnIgMWZyO1xcclxcbiAgICByb3ctZ2FwOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWUtaW1nIHtcXHJcXG4gICAgd2lkdGg6IDUyNHB4O1xcclxcbiAgICByaWdodDogMTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGluaXRpYWw7XFxyXFxuICAgIHBhZGRpbmc6IDRyZW0gMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC1pbWcge1xcclxcbiAgICB3aWR0aDogMTgwcHg7XFxyXFxuICAgIGhlaWdodDogMTgwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtaW1nIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNjVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5za2lsbHMtY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAzODBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXItY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gIC5iZC1ncmlkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qix5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7RUFJRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVB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LHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1oZWFkZXItaGVpZ2h0OiAzcmVtO1xcclxcbiAgLS1mb250LW1lZGl1bTogNTAwO1xcclxcbiAgLS1iYXNpYy1jb2xvcjogIzUzNjFmZjtcXHJcXG4gIC0tZGFyay1jb2xvcjogIzJhM2I0NztcXHJcXG4gIC0td2hpdGUtY29sb3I6ICNmYWZhZmY7XFxyXFxuICAtLXRleHQtY29sb3I6ICM2OTc0Nzc7XFxyXFxuICAtLWJvZHktZm9udDogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAtLWJpZy1mb250LXNpemU6IDRyZW07XFxyXFxuICAtLW1lZGl1bS1mb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIC0tbm9ybWFsLWZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIC0tc21hbGwtZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAtLW1iLTE6IDAuNXJlbTtcXHJcXG4gIC0tbWItMjogMXJlbTtcXHJcXG4gIC0tbWItMzogMS41cmVtO1xcclxcbiAgLS1tYi00OiAycmVtO1xcclxcbiAgLS1tYi01OiAyLjVyZW07XFxyXFxuICAtLXotZml4ZWQ6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIDpyb290IHtcXHJcXG4gICAgLS1iaWctZm9udC1zaXplOiA2LjI1cmVtO1xcclxcbiAgICAtLW1lZGl1bS1mb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgLS1ub3JtYWwtZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAtLXNtYWxsLWZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbjo6YmVmb3JlLFxcclxcbjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IHZhcigtLWhlYWRlci1oZWlnaHQpIDAgMCAwO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtbWVkaXVtKTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbnAsXFxyXFxudWwge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi10aXRsZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW46IHZhcigtLW1iLTQpIDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW1lZGl1bS1mb250LXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi10aXRsZTo6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMC4xOHJlbTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJkLWdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcclxcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xcclxcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLW1iLTIpO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYi0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmwtaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IHZhcigtLXotZml4ZWQpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzaWMtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5uYXYtbWVudSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXHJcXG4gICAgcmlnaHQ6IC0xMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItNCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluazpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFzaWMtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxvZ28ge1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGUge1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZTo6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMC4ycmVtO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMS41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzaWMtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzaWMtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcclxcbiAgcm93LWdhcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGl0bGUge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWJpZy1mb250LXNpemUpO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwLjg7XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRpdGxlIHNwYW4ge1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMjBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtc2Nyb2xsIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLW1iLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1zY3JvbGwtbGluayB7XFxyXFxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1pbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMjgwcHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZyBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHJvdy1nYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1zdWJ0aXRsZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFzaWMtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tZWRpdW0tZm9udC1zaXplKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1iLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcHJvZiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi00KTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi00KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXNvY2lhbC1pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgbWFyZ2luOiAwIHZhcigtLW1iLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGxzLWNvbnRhaW5lciB7XFxyXFxuICByb3ctZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGxzLXN1YnRpdGxlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYXNpYy1jb2xvcik7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi0zKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxscy1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udC1zaXplKTtcXHJcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbWItMik7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi0zKTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxscy1uYW1lOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5za2lsbHMtaW1nIGltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgcm93LWdhcDogMnJlbTtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWltZyBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saW5rIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogLTEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pbWc6aG92ZXIgLnByb2plY3QtbGluayB7XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpbmstbmFtZSB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW1lZGl1bS1mb250LXNpemUpO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1jb250YWluZXIge1xcclxcbiAgcm93LWdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3Qtc3VidGl0bGUge1xcclxcbiAgY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXRleHQge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItMik7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWlucHV0cyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGNvbHVtbi1nYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1iLTQpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXHJcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tZGFyay1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAwLjc1cmVtIDIuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuICByb3ctZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXRpdGxlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItMik7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGluayB7XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGluazpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFzaWMtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWN0aW9uIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VjdGlvbi10aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VjdGlvbi10aXRsZTo6YWZ0ZXIge1xcclxcbiAgICB3aWR0aDogNjRweDtcXHJcXG4gICAgdG9wOiAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdiB7XFxyXFxuICAgIGhlaWdodDogY2FsYyh2YXIoaGVhZGVyLWhlaWdodCkgKyAxcmVtKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tbWItNCk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LXRvZ2dsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmsge1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY3RpdmU6OmFmdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWUtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjdmciAxZnI7XFxyXFxuICAgIHJvdy1nYXA6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaG9tZS1pbWcge1xcclxcbiAgICB3aWR0aDogNTI0cHg7XFxyXFxuICAgIHJpZ2h0OiAxMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcXHJcXG4gICAgcGFkZGluZzogNHJlbSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LWltZyB7XFxyXFxuICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgaGVpZ2h0OiAxODBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC1pbWcgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE2NXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNraWxscy1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1mb3JtIHtcXHJcXG4gICAgd2lkdGg6IDM4MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3Rlci1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgLmJkLWdyaWQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL3N0eWxlLmNzc1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW5kZXguanNcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvc2tpbGxzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy90aGFub3MuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL3RvZG8ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL3RpYy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvYXVlYi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvbW9iaWxlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuICA8aGVhZD5cXHJcXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxyXFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCIgLz5cXHJcXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxyXFxuICAgIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIC8+XFxyXFxuICAgIDxsaW5rXFxyXFxuICAgICAgaHJlZj1cXFwiaHR0cHM6Ly91bnBrZy5jb20vYm94aWNvbnNAMi4xLjQvY3NzL2JveGljb25zLm1pbi5jc3NcXFwiXFxyXFxuICAgICAgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIlxcclxcbiAgICAvPlxcclxcbiAgICA8dGl0bGU+VGhhbm9zIFRyaWZvbmlzPC90aXRsZT5cXHJcXG4gICAgPFwiICsgXCJzY3JpcHQgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgZGVmZXI+PFwiICsgXCIvc2NyaXB0PlxcclxcbiAgPC9oZWFkPlxcclxcbiAgPGJvZHk+XFxyXFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcImwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICA8bmF2IGNsYXNzPVxcXCJuYXYgYmQtZ3JpZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2PjxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJuYXYtbG9nb1xcXCI+VGhhbm9zIFRyaWZvbmlzPC9hPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2LW1lbnVcXFwiIGlkPVxcXCJuYXYtbWVudVxcXCI+XFxyXFxuICAgICAgICAgIDx1bCBjbGFzcz1cXFwibmF2LWxpc3RcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI2hvbWVcXFwiIGNsYXNzPVxcXCJuYXYtbGluayBhY3RpdmVcXFwiPkhvbWU8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNhYm91dFxcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj5BYm91dCBNZTwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI3Byb2plY3RzXFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPlByb2plY3RzPC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjc2tpbGxzXFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPlNraWxsczwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI2NvbnRhY3RcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+Q29udGFjdDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXYtdG9nZ2xlXFxcIiBpZD1cXFwibmF2LXRvZ2dsZVxcXCI+XFxyXFxuICAgICAgICAgIDxpIGNsYXNzPVxcXCJieCBieC1tZW51XFxcIj48L2k+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L25hdj5cXHJcXG4gICAgPC9oZWFkZXI+XFxyXFxuICAgIDxtYWluIGNsYXNzPVxcXCJsLW1haW5cXFwiPlxcclxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJob21lXFxcIiBpZD1cXFwiaG9tZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob21lLWNvbnRhaW5lciBiZC1ncmlkXFxcIj5cXHJcXG4gICAgICAgICAgPGgxIGNsYXNzPVxcXCJob21lLXRpdGxlXFxcIj48c3Bhbj5XZWxjb21lPC9zcGFuPjxiciAvPmtpbmQgdmlzaXRvciE8L2gxPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob21lLXNjcm9sbFxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiI2Fib3V0XFxcIiBjbGFzcz1cXFwiaG9tZS1zY3JvbGwtbGlua1xcXCJcXHJcXG4gICAgICAgICAgICAgID48aSBjbGFzcz1cXFwiYnggYngtdXAtYXJyb3ctYWx0XFxcIj5TY3JvbGwgZG93bjwvaT48L2FcXHJcXG4gICAgICAgICAgICA+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8aW1nXFxyXFxuICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICBhbHQ9XFxcImFycm93IGRvd25cXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImhvbWUtaW1nXFxcIlxcclxcbiAgICAgICAgICAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJhYm91dCBzZWN0aW9uXFxcIiBpZD1cXFwiYWJvdXRcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJzZWN0aW9uLXRpdGxlXFxcIj5BYm91dCBNZTwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYm91dC1jb250YWluZXIgYmQtZ3JpZFxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFib3V0LWltZ1xcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyArIFwiXFxcIiBhbHQ9XFxcInByb2ZpbGUgcGljdHVyZVxcXCIgLz5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJhYm91dC1zdWJ0aXRsZVxcXCI+TXkgbmFtZSBpcyBUaGFub3MgVHJpZm9uaXM8L2gyPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhYm91dC1wcm9mXFxcIj5Tb2Z0d2FyZSBFbmdpbmVlcjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiYWJvdXQtdGV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICBJJ20gYSBjb21wdXRlciBzY2llbmNlIHN0dWRlbnQgd2hvIGxvdmVzIHV0aWxpemluZyBwcm9ncmFtbWluZyB0b1xcclxcbiAgICAgICAgICAgICAgc29sdmUgcHJvYmxlbXMuIEN1cnJlbnRseSBpIHByYWN0aWNlIHdlYiBkZXZlbG9wbWVudC5cXHJcXG4gICAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImFib3V0LXRleHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgVGhpcyBpcyBteSAzPHN1cD5yZDwvc3VwPiB5ZWFyIGluIENvbXB1dGVyIFNjaWVuY2UgZGVwYXJ0bWVudCBhdFxcclxcbiAgICAgICAgICAgICAgQXRoZW5zIFVuaXZlcnNpdHkgb2YgRWNvbm9taWNzIGFuZCBCdXNpbmVzcy48YnIgLz5cXHJcXG4gICAgICAgICAgICAgIFlvdSBjYW4gdGFrZSBhIGxvb2sgaW50byBteSBHaXRIdWIgYW5kIExpbmtlZEluIGJlbG93LlxcclxcbiAgICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYm91dC1zb2NpYWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGFcXHJcXG4gICAgICAgICAgICAgICAgaHJlZj1cXFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3RoYW5vcy10cmlmb25pcy9cXFwiXFxyXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJhYm91dC1zb2NpYWwtaWNvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgPjxpIGNsYXNzPVxcXCJieCBieGwtbGlua2VkaW4gYngtbGdcXFwiIHN0eWxlPVxcXCJjb2xvcjogIzAwNzJiMVxcXCI+PC9pPjwvYVxcclxcbiAgICAgICAgICAgICAgPjxhXFxyXFxuICAgICAgICAgICAgICAgIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9Ucmlmb25pc0F0aFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImFib3V0LXNvY2lhbC1pY29uXFxcIlxcclxcbiAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XFxcImJ4IGJ4bC1naXRodWIgYngtbGdcXFwiIHN0eWxlPVxcXCJjb2xvcjogIzMzMzMzM1xcXCI+PC9pXFxyXFxuICAgICAgICAgICAgICA+PC9hPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvc2VjdGlvbj5cXHJcXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cXFwicHJvamVjdHMgc2VjdGlvblxcXCIgaWQ9XFxcInByb2plY3RzXFxcIj5cXHJcXG4gICAgICAgIDxoMiBjbGFzcz1cXFwic2VjdGlvbi10aXRsZVxcXCI+UHJvamVjdHM8L2gyPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdHMtY29udGFpbmVyIGJkLWdyaWRcXFwiPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWltZ1xcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyArIFwiXFxcIiBhbHQ9XFxcIlxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWxpbmtcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGFcXHJcXG4gICAgICAgICAgICAgICAgaHJlZj1cXFwiaHR0cHM6Ly90cmlmb25pc2F0aC5naXRodWIuaW8vVG9Eb19MaXN0L1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcInByb2plY3QtbGluay1uYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICA+VG9EbyBhcHAgbGl2ZSBkZW1vPC9hXFxyXFxuICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWltZ1xcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNV9fXyArIFwiXFxcIiBhbHQ9XFxcInByb2plY3QgaW1hZ2VcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhXFxyXFxuICAgICAgICAgICAgICAgIGhyZWY9XFxcImh0dHBzOi8vdHJpZm9uaXNhdGguZ2l0aHViLmlvL1RpY1RhY1RvZS9cXFwiXFxyXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJwcm9qZWN0LWxpbmstbmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgPlRpYyBUYWMgVG9lIGxpdmUgZGVtbzwvYVxcclxcbiAgICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1pbWdcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gKyBcIlxcXCIgYWx0PVxcXCJwcm9qZWN0IGltYWdlXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8YVxcclxcbiAgICAgICAgICAgICAgICBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vVHJpZm9uaXNBdGgvVW5pdmVyc2l0eV9Qcm9qZWN0c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcInByb2plY3QtbGluay1uYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICA+VW5pdmVyc2l0eSBQcm9qZWN0cyBSZXBvPC9hXFxyXFxuICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJza2lsbHMgc2VjdGlvblxcXCIgaWQ9XFxcInNraWxsc1xcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcInNlY3Rpb24tdGl0bGVcXFwiPlNraWxsczwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJza2lsbHMtY29udGFpbmVyIGJkLWdyaWRcXFwiPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJza2lsbHMtYm94XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNraWxscy1zdWJ0aXRsZVxcXCI+TGFuZ3VhZ2VzIGFuZCBUZWNobm9sb2dpZXM8L2gzPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJza2lsbHMtbmFtZVxcXCI+SmF2YVNjcmlwdDwvc3BhblxcclxcbiAgICAgICAgICAgID48c3BhbiBjbGFzcz1cXFwic2tpbGxzLW5hbWVcXFwiPkhUTUw8L3NwYW5cXHJcXG4gICAgICAgICAgICA+PHNwYW4gY2xhc3M9XFxcInNraWxscy1uYW1lXFxcIj5DU1M8L3NwYW5cXHJcXG4gICAgICAgICAgICA+PHNwYW4gY2xhc3M9XFxcInNraWxscy1uYW1lXFxcIj5QeXRob248L3NwYW5cXHJcXG4gICAgICAgICAgICA+PHNwYW4gY2xhc3M9XFxcInNraWxscy1uYW1lXFxcIj5KYXZhPC9zcGFuXFxyXFxuICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVxcXCJza2lsbHMtbmFtZVxcXCI+Qm9vdFN0cmFwPC9zcGFuXFxyXFxuICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVxcXCJza2lsbHMtbmFtZVxcXCI+UG9zdGdyZVNRTDwvc3BhblxcclxcbiAgICAgICAgICAgID48c3BhbiBjbGFzcz1cXFwic2tpbGxzLW5hbWVcXFwiPlNhc3M8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2tpbGxzLWltZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF83X19fICsgXCJcXFwiIGFsdD1cXFwicGljdHVyZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L3NlY3Rpb24+XFxyXFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRhY3Qgc2VjdGlvblxcXCIgaWQ9XFxcImNvbnRhY3RcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJzZWN0aW9uLXRpdGxlXFxcIj5Db250YWN0PC9oMj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhY3QtY29udGFpbmVyIGJkLWdyaWRcXFwiPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWN0LWluZm9cXFwiPlxcclxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY29udGFjdC1zdWJ0aXRsZVxcXCI+QWRkcmVzczwvaDM+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbnRhY3QtdGV4dFxcXCI+QXRoZW5zLCBHcmVlY2U8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjb250YWN0LXN1YnRpdGxlXFxcIj5FbWFpbDwvaDM+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNvbnRhY3QtdGV4dFxcXCI+YXRoLnRyaWZvbmlzQGdtYWlsLmNvbTwvc3Bhbj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDxmb3JtIGFjdGlvbj1cXFwiXFxcIiBjbGFzcz1cXFwiY29udGFjdC1mb3JtXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWN0LWlucHV0c1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImNvbnRhY3QtaW5wdXRcXFwiIHBsYWNlaG9sZGVyPVxcXCJOYW1lXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgPGlucHV0XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcIm1haWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjb250YWN0LWlucHV0XFxcIlxcclxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXFxyXFxuICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxcclxcbiAgICAgICAgICAgICAgbmFtZT1cXFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgaWQ9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgICAgIGNvbHM9XFxcIjBcXFwiXFxyXFxuICAgICAgICAgICAgICByb3dzPVxcXCIxMFxcXCJcXHJcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJjb250YWN0LWlucHV0XFxcIlxcclxcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJjb250YWN0LWJ1dHRvblxcXCIgdmFsdWU9XFxcIlN1Ym1pdFxcXCIgLz5cXHJcXG4gICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICA8L21haW4+XFxyXFxuICAgIDxmb290ZXIgY2xhc3M9XFxcImZvb3RlciBzZWN0aW9uXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItY29udGFpbmVyIGJkLWdyaWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyLWRhdGFcXFwiPlxcclxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlci10aXRsZVxcXCI+VGhhbm9zIFRyaWZvbmlzPC9oMj5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImZvb3Rlci10ZXh0XFxcIj5cXHJcXG4gICAgICAgICAgICBJJ20gVGhhbm9zIFRyaWZvbmlzIGFuZCB0aGlzIGlzIG15IHBvcnRmb2xpby5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItZGF0YVxcXCI+XFxyXFxuICAgICAgICAgIDxoMiBjbGFzcz1cXFwiZm9vdGVyLXRpdGxlXFxcIj5FeHBsb3JlPC9oMj5cXHJcXG4gICAgICAgICAgPHVsPlxcclxcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjaG9tZVxcXCIgY2xhc3M9XFxcImZvb3Rlci1saW5rXFxcIj5Ib21lPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNhYm91dFxcXCIgY2xhc3M9XFxcImZvb3Rlci1saW5rXFxcIj5BYm91dCBNZTwvYT48L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjcHJvamVjdHNcXFwiIGNsYXNzPVxcXCJmb290ZXItbGlua1xcXCI+UHJvamVjdHM8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI3NraWxsc1xcXCIgY2xhc3M9XFxcImZvb3Rlci1saW5rXFxcIj5Ta2lsc3M8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI2NvbnRhY3RcXFwiIGNsYXNzPVxcXCJmb290ZXItbGlua1xcXCI+Q29udGFjdDwvYT48L2xpPlxcclxcbiAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9vdGVyPlxcclxcbiAgPC9ib2R5PlxcclxcbjwvaHRtbD5cXHJcXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLyohIEBsaWNlbnNlIGlzLWRvbS1ub2RlLWxpc3QgdjEuMi4xXG5cblx0Q29weXJpZ2h0IDIwMTggRmlzc3Npb24gTExDLlxuXG5cdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0U09GVFdBUkUuXG5cbiovXG5pbXBvcnQgaXNEb21Ob2RlIGZyb20gJ2lzLWRvbS1ub2RlJztcblxuZnVuY3Rpb24gaXNEb21Ob2RlTGlzdCh4KSB7XG5cdHZhciBwcm90b3R5cGVUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KTtcblx0dmFyIHJlZ2V4ID0gL15cXFtvYmplY3QgKEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fE9iamVjdClcXF0kLztcblxuXHRyZXR1cm4gdHlwZW9mIHdpbmRvdy5Ob2RlTGlzdCA9PT0gJ29iamVjdCdcblx0XHQ/IHggaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3Rcblx0XHQ6IHggIT09IG51bGwgJiZcblx0XHRcdFx0dHlwZW9mIHggPT09ICdvYmplY3QnICYmXG5cdFx0XHRcdHR5cGVvZiB4Lmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdFx0cmVnZXgudGVzdChwcm90b3R5cGVUb1N0cmluZykgJiZcblx0XHRcdFx0KHgubGVuZ3RoID09PSAwIHx8IGlzRG9tTm9kZSh4WzBdKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNEb21Ob2RlTGlzdDtcbiIsIi8qISBAbGljZW5zZSBpcy1kb20tbm9kZSB2MS4wLjRcblxuXHRDb3B5cmlnaHQgMjAxOCBGaXNzc2lvbiBMTEMuXG5cblx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRTT0ZUV0FSRS5cblxuKi9cbmZ1bmN0aW9uIGlzRG9tTm9kZSh4KSB7XG5cdHJldHVybiB0eXBlb2Ygd2luZG93Lk5vZGUgPT09ICdvYmplY3QnXG5cdFx0PyB4IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVcblx0XHQ6IHggIT09IG51bGwgJiZcblx0XHRcdFx0dHlwZW9mIHggPT09ICdvYmplY3QnICYmXG5cdFx0XHRcdHR5cGVvZiB4Lm5vZGVUeXBlID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0XHR0eXBlb2YgeC5ub2RlTmFtZSA9PT0gJ3N0cmluZydcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNEb21Ob2RlO1xuIiwiLyohIEBsaWNlbnNlIG1pbmlyYWYgdjEuMC4wXG5cblx0Q29weXJpZ2h0IDIwMTggRmlzc3Npb24gTExDLlxuXG5cdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0U09GVFdBUkUuXG5cbiovXG52YXIgcG9seWZpbGwgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgY2xvY2sgPSBEYXRlLm5vdygpO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHR2YXIgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdGlmIChjdXJyZW50VGltZSAtIGNsb2NrID4gMTYpIHtcblx0XHRcdGNsb2NrID0gY3VycmVudFRpbWU7XG5cdFx0XHRjYWxsYmFjayhjdXJyZW50VGltZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gcG9seWZpbGwoY2FsbGJhY2spOyB9LCAwKTtcblx0XHR9XG5cdH1cbn0pKCk7XG5cbnZhciBpbmRleCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdHBvbHlmaWxsO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsIi8qISBAbGljZW5zZSBSZW1hdHJpeCB2MC4zLjBcblxuXHRDb3B5cmlnaHQgMjAxOCBKdWxpYW4gTGxveWQuXG5cblx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuXHRhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5cdFRIRSBTT0ZUV0FSRS5cbiovXG4vKipcbiAqIEBtb2R1bGUgUmVtYXRyaXhcbiAqL1xuXG4vKipcbiAqIFRyYW5zZm9ybWF0aW9uIG1hdHJpY2VzIGluIHRoZSBicm93c2VyIGNvbWUgaW4gdHdvIGZsYXZvcnM6XG4gKlxuICogIC0gYG1hdHJpeGAgdXNpbmcgNiB2YWx1ZXMgKHNob3J0KVxuICogIC0gYG1hdHJpeDNkYCB1c2luZyAxNiB2YWx1ZXMgKGxvbmcpXG4gKlxuICogVGhpcyB1dGlsaXR5IGZvbGxvd3MgdGhpcyBbY29udmVyc2lvbiBndWlkZV0oaHR0cHM6Ly9nb28uZ2wvRUpsVVExKVxuICogdG8gZXhwYW5kIHNob3J0IGZvcm0gbWF0cmljZXMgdG8gdGhlaXIgZXF1aXZhbGVudCBsb25nIGZvcm0uXG4gKlxuICogQHBhcmFtICB7YXJyYXl9IHNvdXJjZSAtIEFjY2VwdHMgYm90aCBzaG9ydCBhbmQgbG9uZyBmb3JtIG1hdHJpY2VzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdChzb3VyY2UpIHtcblx0aWYgKHNvdXJjZS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhcnJheS4nKVxuXHR9XG5cdGlmIChzb3VyY2UubGVuZ3RoID09PSAxNikge1xuXHRcdHJldHVybiBzb3VyY2Vcblx0fVxuXHRpZiAoc291cmNlLmxlbmd0aCA9PT0gNikge1xuXHRcdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRcdG1hdHJpeFswXSA9IHNvdXJjZVswXTtcblx0XHRtYXRyaXhbMV0gPSBzb3VyY2VbMV07XG5cdFx0bWF0cml4WzRdID0gc291cmNlWzJdO1xuXHRcdG1hdHJpeFs1XSA9IHNvdXJjZVszXTtcblx0XHRtYXRyaXhbMTJdID0gc291cmNlWzRdO1xuXHRcdG1hdHJpeFsxM10gPSBzb3VyY2VbNV07XG5cdFx0cmV0dXJuIG1hdHJpeFxuXHR9XG5cdHRocm93IG5ldyBSYW5nZUVycm9yKCdFeHBlY3RlZCBhcnJheSB3aXRoIGVpdGhlciA2IG9yIDE2IHZhbHVlcy4nKVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBtYXRyaXggcmVwcmVzZW50aW5nIG5vIHRyYW5zZm9ybWF0aW9uLiBUaGUgcHJvZHVjdCBvZiBhbnkgbWF0cml4XG4gKiBtdWx0aXBsaWVkIGJ5IHRoZSBpZGVudGl0eSBtYXRyaXggd2lsbCBiZSB0aGUgb3JpZ2luYWwgbWF0cml4LlxuICpcbiAqID4gKipUaXA6KiogU2ltaWxhciB0byBob3cgYDUgKiAxID09PSA1YCwgd2hlcmUgYDFgIGlzIHRoZSBpZGVudGl0eS5cbiAqXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkoKSB7XG5cdHZhciBtYXRyaXggPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG5cdFx0aSAlIDUgPT0gMCA/IG1hdHJpeC5wdXNoKDEpIDogbWF0cml4LnB1c2goMCk7XG5cdH1cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSBtYXRyaXggZGVzY3JpYmluZyB0aGUgaW52ZXJzZSB0cmFuc2Zvcm1hdGlvbiBvZiB0aGUgc291cmNlXG4gKiBtYXRyaXguIFRoZSBwcm9kdWN0IG9mIGFueSBtYXRyaXggbXVsdGlwbGllZCBieSBpdHMgaW52ZXJzZSB3aWxsIGJlIHRoZVxuICogaWRlbnRpdHkgbWF0cml4LlxuICpcbiAqID4gKipUaXA6KiogU2ltaWxhciB0byBob3cgYDUgKiAoMS81KSA9PT0gMWAsIHdoZXJlIGAxLzVgIGlzIHRoZSBpbnZlcnNlLlxuICpcbiAqIEBwYXJhbSAge2FycmF5fSBzb3VyY2UgLSBBY2NlcHRzIGJvdGggc2hvcnQgYW5kIGxvbmcgZm9ybSBtYXRyaWNlcy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBpbnZlcnNlKHNvdXJjZSkge1xuXHR2YXIgbSA9IGZvcm1hdChzb3VyY2UpO1xuXG5cdHZhciBzMCA9IG1bMF0gKiBtWzVdIC0gbVs0XSAqIG1bMV07XG5cdHZhciBzMSA9IG1bMF0gKiBtWzZdIC0gbVs0XSAqIG1bMl07XG5cdHZhciBzMiA9IG1bMF0gKiBtWzddIC0gbVs0XSAqIG1bM107XG5cdHZhciBzMyA9IG1bMV0gKiBtWzZdIC0gbVs1XSAqIG1bMl07XG5cdHZhciBzNCA9IG1bMV0gKiBtWzddIC0gbVs1XSAqIG1bM107XG5cdHZhciBzNSA9IG1bMl0gKiBtWzddIC0gbVs2XSAqIG1bM107XG5cblx0dmFyIGM1ID0gbVsxMF0gKiBtWzE1XSAtIG1bMTRdICogbVsxMV07XG5cdHZhciBjNCA9IG1bOV0gKiBtWzE1XSAtIG1bMTNdICogbVsxMV07XG5cdHZhciBjMyA9IG1bOV0gKiBtWzE0XSAtIG1bMTNdICogbVsxMF07XG5cdHZhciBjMiA9IG1bOF0gKiBtWzE1XSAtIG1bMTJdICogbVsxMV07XG5cdHZhciBjMSA9IG1bOF0gKiBtWzE0XSAtIG1bMTJdICogbVsxMF07XG5cdHZhciBjMCA9IG1bOF0gKiBtWzEzXSAtIG1bMTJdICogbVs5XTtcblxuXHR2YXIgZGV0ZXJtaW5hbnQgPSAxIC8gKHMwICogYzUgLSBzMSAqIGM0ICsgczIgKiBjMyArIHMzICogYzIgLSBzNCAqIGMxICsgczUgKiBjMCk7XG5cblx0aWYgKGlzTmFOKGRldGVybWluYW50KSB8fCBkZXRlcm1pbmFudCA9PT0gSW5maW5pdHkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmVyc2UgZGV0ZXJtaW5hbnQgYXR0ZW1wdGVkIHRvIGRpdmlkZSBieSB6ZXJvLicpXG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdChtWzVdICogYzUgLSBtWzZdICogYzQgKyBtWzddICogYzMpICogZGV0ZXJtaW5hbnQsXG5cdFx0KC1tWzFdICogYzUgKyBtWzJdICogYzQgLSBtWzNdICogYzMpICogZGV0ZXJtaW5hbnQsXG5cdFx0KG1bMTNdICogczUgLSBtWzE0XSAqIHM0ICsgbVsxNV0gKiBzMykgKiBkZXRlcm1pbmFudCxcblx0XHQoLW1bOV0gKiBzNSArIG1bMTBdICogczQgLSBtWzExXSAqIHMzKSAqIGRldGVybWluYW50LFxuXG5cdFx0KC1tWzRdICogYzUgKyBtWzZdICogYzIgLSBtWzddICogYzEpICogZGV0ZXJtaW5hbnQsXG5cdFx0KG1bMF0gKiBjNSAtIG1bMl0gKiBjMiArIG1bM10gKiBjMSkgKiBkZXRlcm1pbmFudCxcblx0XHQoLW1bMTJdICogczUgKyBtWzE0XSAqIHMyIC0gbVsxNV0gKiBzMSkgKiBkZXRlcm1pbmFudCxcblx0XHQobVs4XSAqIHM1IC0gbVsxMF0gKiBzMiArIG1bMTFdICogczEpICogZGV0ZXJtaW5hbnQsXG5cblx0XHQobVs0XSAqIGM0IC0gbVs1XSAqIGMyICsgbVs3XSAqIGMwKSAqIGRldGVybWluYW50LFxuXHRcdCgtbVswXSAqIGM0ICsgbVsxXSAqIGMyIC0gbVszXSAqIGMwKSAqIGRldGVybWluYW50LFxuXHRcdChtWzEyXSAqIHM0IC0gbVsxM10gKiBzMiArIG1bMTVdICogczApICogZGV0ZXJtaW5hbnQsXG5cdFx0KC1tWzhdICogczQgKyBtWzldICogczIgLSBtWzExXSAqIHMwKSAqIGRldGVybWluYW50LFxuXG5cdFx0KC1tWzRdICogYzMgKyBtWzVdICogYzEgLSBtWzZdICogYzApICogZGV0ZXJtaW5hbnQsXG5cdFx0KG1bMF0gKiBjMyAtIG1bMV0gKiBjMSArIG1bMl0gKiBjMCkgKiBkZXRlcm1pbmFudCxcblx0XHQoLW1bMTJdICogczMgKyBtWzEzXSAqIHMxIC0gbVsxNF0gKiBzMCkgKiBkZXRlcm1pbmFudCxcblx0XHQobVs4XSAqIHMzIC0gbVs5XSAqIHMxICsgbVsxMF0gKiBzMCkgKiBkZXRlcm1pbmFudFxuXHRdXG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyB0aGUgY29tYmluZWQgdHJhbnNmb3JtYXRpb25zXG4gKiBvZiBib3RoIGFyZ3VtZW50cy5cbiAqXG4gKiA+ICoqTm90ZToqKiBPcmRlciBpcyB2ZXJ5IGltcG9ydGFudC4gRm9yIGV4YW1wbGUsIHJvdGF0aW5nIDQ1wrBcbiAqIGFsb25nIHRoZSBaLWF4aXMsIGZvbGxvd2VkIGJ5IHRyYW5zbGF0aW5nIDUwMCBwaXhlbHMgYWxvbmcgdGhlXG4gKiBZLWF4aXMuLi4gaXMgbm90IHRoZSBzYW1lIGFzIHRyYW5zbGF0aW5nIDUwMCBwaXhlbHMgYWxvbmcgdGhlXG4gKiBZLWF4aXMsIGZvbGxvd2VkIGJ5IHJvdGF0aW5nIDQ1wrAgYWxvbmcgb24gdGhlIFotYXhpcy5cbiAqXG4gKiBAcGFyYW0gIHthcnJheX0gbSAtIEFjY2VwdHMgYm90aCBzaG9ydCBhbmQgbG9uZyBmb3JtIG1hdHJpY2VzLlxuICogQHBhcmFtICB7YXJyYXl9IHggLSBBY2NlcHRzIGJvdGggc2hvcnQgYW5kIGxvbmcgZm9ybSBtYXRyaWNlcy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBtdWx0aXBseShtLCB4KSB7XG5cdHZhciBmbSA9IGZvcm1hdChtKTtcblx0dmFyIGZ4ID0gZm9ybWF0KHgpO1xuXHR2YXIgcHJvZHVjdCA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0dmFyIHJvdyA9IFtmbVtpXSwgZm1baSArIDRdLCBmbVtpICsgOF0sIGZtW2kgKyAxMl1dO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKSB7XG5cdFx0XHR2YXIgayA9IGogKiA0O1xuXHRcdFx0dmFyIGNvbCA9IFtmeFtrXSwgZnhbayArIDFdLCBmeFtrICsgMl0sIGZ4W2sgKyAzXV07XG5cdFx0XHR2YXIgcmVzdWx0ID1cblx0XHRcdFx0cm93WzBdICogY29sWzBdICsgcm93WzFdICogY29sWzFdICsgcm93WzJdICogY29sWzJdICsgcm93WzNdICogY29sWzNdO1xuXG5cdFx0XHRwcm9kdWN0W2kgKyBrXSA9IHJlc3VsdDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcHJvZHVjdFxufVxuXG4vKipcbiAqIEF0dGVtcHRzIHRvIHJldHVybiBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyB0aGUgQ1NTIHRyYW5zZm9ybVxuICogbWF0cml4IHBhc3NlZCBpbiwgYnV0IHdpbGwgcmV0dXJuIHRoZSBpZGVudGl0eSBtYXRyaXggYXMgYVxuICogZmFsbGJhY2suXG4gKlxuICogPiAqKlRpcDoqKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGNvbnZlcnQgYSBDU1MgbWF0cml4IChyZXRyaWV2ZWQgYXMgYVxuICogYHN0cmluZ2AgZnJvbSBjb21wdXRlZCBzdHlsZXMpIHRvIGl0cyBlcXVpdmFsZW50IGFycmF5IGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHNvdXJjZSAtIGBtYXRyaXhgIG9yIGBtYXRyaXgzZGAgQ1NTIFRyYW5zZm9ybSB2YWx1ZS5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBwYXJzZShzb3VyY2UpIHtcblx0aWYgKHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnKSB7XG5cdFx0dmFyIG1hdGNoID0gc291cmNlLm1hdGNoKC9tYXRyaXgoM2QpP1xcKChbXildKylcXCkvKTtcblx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdHZhciByYXcgPSBtYXRjaFsyXS5zcGxpdCgnLCAnKS5tYXAocGFyc2VGbG9hdCk7XG5cdFx0XHRyZXR1cm4gZm9ybWF0KHJhdylcblx0XHR9XG5cdH1cblx0cmV0dXJuIGlkZW50aXR5KClcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFotYXhpcyByb3RhdGlvbi5cbiAqXG4gKiA+ICoqVGlwOioqIFRoaXMgaXMganVzdCBhbiBhbGlhcyBmb3IgYFJlbWF0cml4LnJvdGF0ZVpgIGZvciBwYXJpdHkgd2l0aCBDU1NcbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGFuZ2xlIC0gTWVhc3VyZWQgaW4gZGVncmVlcy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiByb3RhdGUoYW5nbGUpIHtcblx0cmV0dXJuIHJvdGF0ZVooYW5nbGUpXG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBYLWF4aXMgcm90YXRpb24uXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBhbmdsZSAtIE1lYXN1cmVkIGluIGRlZ3JlZXMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gcm90YXRlWChhbmdsZSkge1xuXHR2YXIgdGhldGEgPSBNYXRoLlBJIC8gMTgwICogYW5nbGU7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXG5cdG1hdHJpeFs1XSA9IG1hdHJpeFsxMF0gPSBNYXRoLmNvcyh0aGV0YSk7XG5cdG1hdHJpeFs2XSA9IG1hdHJpeFs5XSA9IE1hdGguc2luKHRoZXRhKTtcblx0bWF0cml4WzldICo9IC0xO1xuXG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFktYXhpcyByb3RhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGFuZ2xlIC0gTWVhc3VyZWQgaW4gZGVncmVlcy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiByb3RhdGVZKGFuZ2xlKSB7XG5cdHZhciB0aGV0YSA9IE1hdGguUEkgLyAxODAgKiBhbmdsZTtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cblx0bWF0cml4WzBdID0gbWF0cml4WzEwXSA9IE1hdGguY29zKHRoZXRhKTtcblx0bWF0cml4WzJdID0gbWF0cml4WzhdID0gTWF0aC5zaW4odGhldGEpO1xuXHRtYXRyaXhbMl0gKj0gLTE7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWi1heGlzIHJvdGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gYW5nbGUgLSBNZWFzdXJlZCBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVooYW5nbGUpIHtcblx0dmFyIHRoZXRhID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbMF0gPSBtYXRyaXhbNV0gPSBNYXRoLmNvcyh0aGV0YSk7XG5cdG1hdHJpeFsxXSA9IG1hdHJpeFs0XSA9IE1hdGguc2luKHRoZXRhKTtcblx0bWF0cml4WzRdICo9IC0xO1xuXG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIDJEIHNjYWxpbmcuIFRoZSBmaXJzdCBhcmd1bWVudFxuICogaXMgdXNlZCBmb3IgYm90aCBYIGFuZCBZLWF4aXMgc2NhbGluZywgdW5sZXNzIGFuIG9wdGlvbmFsXG4gKiBzZWNvbmQgYXJndW1lbnQgaXMgcHJvdmlkZWQgdG8gZXhwbGljaXRseSBkZWZpbmUgWS1heGlzIHNjYWxpbmcuXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBzY2FsYXIgICAgLSBEZWNpbWFsIG11bHRpcGxpZXIuXG4gKiBAcGFyYW0gIHtudW1iZXJ9IFtzY2FsYXJZXSAtIERlY2ltYWwgbXVsdGlwbGllci5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBzY2FsZShzY2FsYXIsIHNjYWxhclkpIHtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cblx0bWF0cml4WzBdID0gc2NhbGFyO1xuXHRtYXRyaXhbNV0gPSB0eXBlb2Ygc2NhbGFyWSA9PT0gJ251bWJlcicgPyBzY2FsYXJZIDogc2NhbGFyO1xuXG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFgtYXhpcyBzY2FsaW5nLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gc2NhbGFyIC0gRGVjaW1hbCBtdWx0aXBsaWVyLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNjYWxlWChzY2FsYXIpIHtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cdG1hdHJpeFswXSA9IHNjYWxhcjtcblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWS1heGlzIHNjYWxpbmcuXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBzY2FsYXIgLSBEZWNpbWFsIG11bHRpcGxpZXIuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gc2NhbGVZKHNjYWxhcikge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblx0bWF0cml4WzVdID0gc2NhbGFyO1xuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBaLWF4aXMgc2NhbGluZy5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNjYWxhciAtIERlY2ltYWwgbXVsdGlwbGllci5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBzY2FsZVooc2NhbGFyKSB7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRtYXRyaXhbMTBdID0gc2NhbGFyO1xuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBzaGVhci4gVGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBkZWZpbmVzIFgtYXhpcyBzaGVhcmluZywgYW5kIGFuIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudFxuICogZGVmaW5lcyBZLWF4aXMgc2hlYXJpbmcuXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBhbmdsZVggICAtIE1lYXN1cmVkIGluIGRlZ3JlZXMuXG4gKiBAcGFyYW0gIHtudW1iZXJ9IFthbmdsZVldIC0gTWVhc3VyZWQgaW4gZGVncmVlcy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBza2V3KGFuZ2xlWCwgYW5nbGVZKSB7XG5cdHZhciB0aGV0YVggPSBNYXRoLlBJIC8gMTgwICogYW5nbGVYO1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbNF0gPSBNYXRoLnRhbih0aGV0YVgpO1xuXG5cdGlmIChhbmdsZVkpIHtcblx0XHR2YXIgdGhldGFZID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlWTtcblx0XHRtYXRyaXhbMV0gPSBNYXRoLnRhbih0aGV0YVkpO1xuXHR9XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWC1heGlzIHNoZWFyLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gYW5nbGUgLSBNZWFzdXJlZCBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNrZXdYKGFuZ2xlKSB7XG5cdHZhciB0aGV0YSA9IE1hdGguUEkgLyAxODAgKiBhbmdsZTtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cblx0bWF0cml4WzRdID0gTWF0aC50YW4odGhldGEpO1xuXG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFktYXhpcyBzaGVhci5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGFuZ2xlIC0gTWVhc3VyZWQgaW4gZGVncmVlc1xuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNrZXdZKGFuZ2xlKSB7XG5cdHZhciB0aGV0YSA9IE1hdGguUEkgLyAxODAgKiBhbmdsZTtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cblx0bWF0cml4WzFdID0gTWF0aC50YW4odGhldGEpO1xuXG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgQ1NTIFRyYW5zZm9ybSBwcm9wZXJ0eSB2YWx1ZSBlcXVpdmFsZW50IHRvIHRoZSBzb3VyY2UgbWF0cml4LlxuICpcbiAqIEBwYXJhbSAge2FycmF5fSBzb3VyY2UgLSBBY2NlcHRzIGJvdGggc2hvcnQgYW5kIGxvbmcgZm9ybSBtYXRyaWNlcy5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcoc291cmNlKSB7XG5cdHJldHVybiAoXCJtYXRyaXgzZChcIiArIChmb3JtYXQoc291cmNlKS5qb2luKCcsICcpKSArIFwiKVwiKVxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgMkQgdHJhbnNsYXRpb24uIFRoZSBmaXJzdFxuICogYXJndW1lbnQgZGVmaW5lcyBYLWF4aXMgdHJhbnNsYXRpb24sIGFuZCBhbiBvcHRpb25hbCBzZWNvbmRcbiAqIGFyZ3VtZW50IGRlZmluZXMgWS1heGlzIHRyYW5zbGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gZGlzdGFuY2VYICAgLSBNZWFzdXJlZCBpbiBwaXhlbHMuXG4gKiBAcGFyYW0gIHtudW1iZXJ9IFtkaXN0YW5jZVldIC0gTWVhc3VyZWQgaW4gcGl4ZWxzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZShkaXN0YW5jZVgsIGRpc3RhbmNlWSkge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblx0bWF0cml4WzEyXSA9IGRpc3RhbmNlWDtcblxuXHRpZiAoZGlzdGFuY2VZKSB7XG5cdFx0bWF0cml4WzEzXSA9IGRpc3RhbmNlWTtcblx0fVxuXG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFgtYXhpcyB0cmFuc2xhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRpc3RhbmNlIC0gTWVhc3VyZWQgaW4gcGl4ZWxzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZVgoZGlzdGFuY2UpIHtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cdG1hdHJpeFsxMl0gPSBkaXN0YW5jZTtcblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWS1heGlzIHRyYW5zbGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gZGlzdGFuY2UgLSBNZWFzdXJlZCBpbiBwaXhlbHMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gdHJhbnNsYXRlWShkaXN0YW5jZSkge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblx0bWF0cml4WzEzXSA9IGRpc3RhbmNlO1xuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBaLWF4aXMgdHJhbnNsYXRpb24uXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBkaXN0YW5jZSAtIE1lYXN1cmVkIGluIHBpeGVscy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGVaKGRpc3RhbmNlKSB7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRtYXRyaXhbMTRdID0gZGlzdGFuY2U7XG5cdHJldHVybiBtYXRyaXhcbn1cblxuZXhwb3J0IHsgZm9ybWF0LCBpZGVudGl0eSwgaW52ZXJzZSwgbXVsdGlwbHksIHBhcnNlLCByb3RhdGUsIHJvdGF0ZVgsIHJvdGF0ZVksIHJvdGF0ZVosIHNjYWxlLCBzY2FsZVgsIHNjYWxlWSwgc2NhbGVaLCBza2V3LCBza2V3WCwgc2tld1ksIHRvU3RyaW5nLCB0cmFuc2xhdGUsIHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHRyYW5zbGF0ZVogfTtcbiIsIi8qISBAbGljZW5zZSBTY3JvbGxSZXZlYWwgdjQuMC45XG5cblx0Q29weXJpZ2h0IDIwMjEgRmlzc3Npb24gTExDLlxuXG5cdExpY2Vuc2VkIHVuZGVyIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSAzLjAgZm9yXG5cdGNvbXBhdGlibGUgb3BlbiBzb3VyY2UgcHJvamVjdHMgYW5kIG5vbi1jb21tZXJjaWFsIHVzZS5cblxuXHRGb3IgY29tbWVyY2lhbCBzaXRlcywgdGhlbWVzLCBwcm9qZWN0cywgYW5kIGFwcGxpY2F0aW9ucyxcblx0a2VlcCB5b3VyIHNvdXJjZSBjb2RlIHByaXZhdGUvcHJvcHJpZXRhcnkgYnkgcHVyY2hhc2luZ1xuXHRhIGNvbW1lcmNpYWwgbGljZW5zZSBmcm9tIGh0dHBzOi8vc2Nyb2xscmV2ZWFsanMub3JnL1xuKi9cbmltcG9ydCAkIGZyb20gJ3RlYWxpZ2h0JztcbmltcG9ydCB7IHRyYW5zbGF0ZVksIHRyYW5zbGF0ZVgsIHJvdGF0ZVgsIHJvdGF0ZVksIHJvdGF0ZVosIHNjYWxlLCBwYXJzZSwgbXVsdGlwbHkgfSBmcm9tICdyZW1hdHJpeCc7XG5pbXBvcnQgcmFmIGZyb20gJ21pbmlyYWYnO1xuXG52YXIgZGVmYXVsdHMgPSB7XG5cdGRlbGF5OiAwLFxuXHRkaXN0YW5jZTogJzAnLFxuXHRkdXJhdGlvbjogNjAwLFxuXHRlYXNpbmc6ICdjdWJpYy1iZXppZXIoMC41LCAwLCAwLCAxKScsXG5cdGludGVydmFsOiAwLFxuXHRvcGFjaXR5OiAwLFxuXHRvcmlnaW46ICdib3R0b20nLFxuXHRyb3RhdGU6IHtcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdFx0ejogMFxuXHR9LFxuXHRzY2FsZTogMSxcblx0Y2xlYW51cDogZmFsc2UsXG5cdGNvbnRhaW5lcjogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuXHRkZXNrdG9wOiB0cnVlLFxuXHRtb2JpbGU6IHRydWUsXG5cdHJlc2V0OiBmYWxzZSxcblx0dXNlRGVsYXk6ICdhbHdheXMnLFxuXHR2aWV3RmFjdG9yOiAwLjAsXG5cdHZpZXdPZmZzZXQ6IHtcblx0XHR0b3A6IDAsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0Ym90dG9tOiAwLFxuXHRcdGxlZnQ6IDBcblx0fSxcblx0YWZ0ZXJSZXNldDogZnVuY3Rpb24gYWZ0ZXJSZXNldCgpIHt9LFxuXHRhZnRlclJldmVhbDogZnVuY3Rpb24gYWZ0ZXJSZXZlYWwoKSB7fSxcblx0YmVmb3JlUmVzZXQ6IGZ1bmN0aW9uIGJlZm9yZVJlc2V0KCkge30sXG5cdGJlZm9yZVJldmVhbDogZnVuY3Rpb24gYmVmb3JlUmV2ZWFsKCkge31cbn07XG5cbmZ1bmN0aW9uIGZhaWx1cmUoKSB7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzcicpO1xuXG5cdHJldHVybiB7XG5cdFx0Y2xlYW46IGZ1bmN0aW9uIGNsZWFuKCkge30sXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHt9LFxuXHRcdHJldmVhbDogZnVuY3Rpb24gcmV2ZWFsKCkge30sXG5cdFx0c3luYzogZnVuY3Rpb24gc3luYygpIHt9LFxuXHRcdGdldCBub29wKCkge1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc3VjY2VzcygpIHtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NyJyk7XG5cblx0aWYgKGRvY3VtZW50LmJvZHkpIHtcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblx0fSBlbHNlIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG5cdFx0fSk7XG5cdH1cbn1cblxudmFyIG1vdW50ID0geyBzdWNjZXNzOiBzdWNjZXNzLCBmYWlsdXJlOiBmYWlsdXJlIH07XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcblx0cmV0dXJuIChcblx0XHR4ICE9PSBudWxsICYmXG5cdFx0eCBpbnN0YW5jZW9mIE9iamVjdCAmJlxuXHRcdCh4LmNvbnN0cnVjdG9yID09PSBPYmplY3QgfHxcblx0XHRcdE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpXG5cdClcbn1cblxuZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBjYWxsYmFjaykge1xuXHRpZiAoaXNPYmplY3QoY29sbGVjdGlvbikpIHtcblx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pO1xuXHRcdHJldHVybiBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gY2FsbGJhY2soY29sbGVjdGlvbltrZXldLCBrZXksIGNvbGxlY3Rpb24pOyB9KVxuXHR9XG5cdGlmIChjb2xsZWN0aW9uIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7IHJldHVybiBjYWxsYmFjayhpdGVtLCBpLCBjb2xsZWN0aW9uKTsgfSlcblx0fVxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBlaXRoZXIgYW4gYXJyYXkgb3Igb2JqZWN0IGxpdGVyYWwuJylcbn1cblxuZnVuY3Rpb24gbG9nZ2VyKG1lc3NhZ2UpIHtcblx0dmFyIGRldGFpbHMgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG5cdHdoaWxlICggbGVuLS0gPiAwICkgZGV0YWlsc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuXHRpZiAodGhpcy5jb25zdHJ1Y3Rvci5kZWJ1ZyAmJiBjb25zb2xlKSB7XG5cdFx0dmFyIHJlcG9ydCA9IFwiJWNTY3JvbGxSZXZlYWw6IFwiICsgbWVzc2FnZTtcblx0XHRkZXRhaWxzLmZvckVhY2goZnVuY3Rpb24gKGRldGFpbCkgeyByZXR1cm4gKHJlcG9ydCArPSBcIlxcbiDigJQgXCIgKyBkZXRhaWwpOyB9KTtcblx0XHRjb25zb2xlLmxvZyhyZXBvcnQsICdjb2xvcjogI2VhNjU0YjsnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cdH1cbn1cblxuZnVuY3Rpb24gcmluc2UoKSB7XG5cdHZhciB0aGlzJDEgPSB0aGlzO1xuXG5cdHZhciBzdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuXHRcdGFjdGl2ZTogW10sXG5cdFx0c3RhbGU6IFtdXG5cdH0pOyB9O1xuXG5cdHZhciBlbGVtZW50SWRzID0gc3RydWN0KCk7XG5cdHZhciBzZXF1ZW5jZUlkcyA9IHN0cnVjdCgpO1xuXHR2YXIgY29udGFpbmVySWRzID0gc3RydWN0KCk7XG5cblx0LyoqXG5cdCAqIFRha2Ugc3RvY2sgb2YgYWN0aXZlIGVsZW1lbnQgSURzLlxuXHQgKi9cblx0dHJ5IHtcblx0XHRlYWNoKCQoJ1tkYXRhLXNyLWlkXScpLCBmdW5jdGlvbiAobm9kZSkge1xuXHRcdFx0dmFyIGlkID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnKSk7XG5cdFx0XHRlbGVtZW50SWRzLmFjdGl2ZS5wdXNoKGlkKTtcblx0XHR9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHRocm93IGVcblx0fVxuXHQvKipcblx0ICogRGVzdHJveSBzdGFsZSBlbGVtZW50cy5cblx0ICovXG5cdGVhY2godGhpcy5zdG9yZS5lbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRpZiAoZWxlbWVudElkcy5hY3RpdmUuaW5kZXhPZihlbGVtZW50LmlkKSA9PT0gLTEpIHtcblx0XHRcdGVsZW1lbnRJZHMuc3RhbGUucHVzaChlbGVtZW50LmlkKTtcblx0XHR9XG5cdH0pO1xuXG5cdGVhY2goZWxlbWVudElkcy5zdGFsZSwgZnVuY3Rpb24gKHN0YWxlSWQpIHsgcmV0dXJuIGRlbGV0ZSB0aGlzJDEuc3RvcmUuZWxlbWVudHNbc3RhbGVJZF07IH0pO1xuXG5cdC8qKlxuXHQgKiBUYWtlIHN0b2NrIG9mIGFjdGl2ZSBjb250YWluZXIgYW5kIHNlcXVlbmNlIElEcy5cblx0ICovXG5cdGVhY2godGhpcy5zdG9yZS5lbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRpZiAoY29udGFpbmVySWRzLmFjdGl2ZS5pbmRleE9mKGVsZW1lbnQuY29udGFpbmVySWQpID09PSAtMSkge1xuXHRcdFx0Y29udGFpbmVySWRzLmFjdGl2ZS5wdXNoKGVsZW1lbnQuY29udGFpbmVySWQpO1xuXHRcdH1cblx0XHRpZiAoZWxlbWVudC5oYXNPd25Qcm9wZXJ0eSgnc2VxdWVuY2UnKSkge1xuXHRcdFx0aWYgKHNlcXVlbmNlSWRzLmFjdGl2ZS5pbmRleE9mKGVsZW1lbnQuc2VxdWVuY2UuaWQpID09PSAtMSkge1xuXHRcdFx0XHRzZXF1ZW5jZUlkcy5hY3RpdmUucHVzaChlbGVtZW50LnNlcXVlbmNlLmlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95IHN0YWxlIGNvbnRhaW5lcnMuXG5cdCAqL1xuXHRlYWNoKHRoaXMuc3RvcmUuY29udGFpbmVycywgZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuXHRcdGlmIChjb250YWluZXJJZHMuYWN0aXZlLmluZGV4T2YoY29udGFpbmVyLmlkKSA9PT0gLTEpIHtcblx0XHRcdGNvbnRhaW5lcklkcy5zdGFsZS5wdXNoKGNvbnRhaW5lci5pZCk7XG5cdFx0fVxuXHR9KTtcblxuXHRlYWNoKGNvbnRhaW5lcklkcy5zdGFsZSwgZnVuY3Rpb24gKHN0YWxlSWQpIHtcblx0XHR2YXIgc3RhbGUgPSB0aGlzJDEuc3RvcmUuY29udGFpbmVyc1tzdGFsZUlkXS5ub2RlO1xuXHRcdHN0YWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMkMS5kZWxlZ2F0ZSk7XG5cdFx0c3RhbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcyQxLmRlbGVnYXRlKTtcblx0XHRkZWxldGUgdGhpcyQxLnN0b3JlLmNvbnRhaW5lcnNbc3RhbGVJZF07XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95IHN0YWxlIHNlcXVlbmNlcy5cblx0ICovXG5cdGVhY2godGhpcy5zdG9yZS5zZXF1ZW5jZXMsIGZ1bmN0aW9uIChzZXF1ZW5jZSkge1xuXHRcdGlmIChzZXF1ZW5jZUlkcy5hY3RpdmUuaW5kZXhPZihzZXF1ZW5jZS5pZCkgPT09IC0xKSB7XG5cdFx0XHRzZXF1ZW5jZUlkcy5zdGFsZS5wdXNoKHNlcXVlbmNlLmlkKTtcblx0XHR9XG5cdH0pO1xuXG5cdGVhY2goc2VxdWVuY2VJZHMuc3RhbGUsIGZ1bmN0aW9uIChzdGFsZUlkKSB7IHJldHVybiBkZWxldGUgdGhpcyQxLnN0b3JlLnNlcXVlbmNlc1tzdGFsZUlkXTsgfSk7XG59XG5cbnZhciBnZXRQcmVmaXhlZENzc1Byb3AgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgcHJvcGVydGllcyA9IHt9O1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cblx0ZnVuY3Rpb24gZ2V0UHJlZml4ZWRDc3NQcm9wZXJ0eShuYW1lLCBzb3VyY2UpIHtcblx0XHRpZiAoIHNvdXJjZSA9PT0gdm9pZCAwICkgc291cmNlID0gc3R5bGU7XG5cblx0XHRpZiAobmFtZSAmJiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGlmIChwcm9wZXJ0aWVzW25hbWVdKSB7XG5cdFx0XHRcdHJldHVybiBwcm9wZXJ0aWVzW25hbWVdXG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHNvdXJjZVtuYW1lXSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0cmV0dXJuIChwcm9wZXJ0aWVzW25hbWVdID0gbmFtZSlcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygc291cmNlWyhcIi13ZWJraXQtXCIgKyBuYW1lKV0gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHJldHVybiAocHJvcGVydGllc1tuYW1lXSA9IFwiLXdlYmtpdC1cIiArIG5hbWUpXG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcigoXCJVbmFibGUgdG8gZmluZCBcXFwiXCIgKyBuYW1lICsgXCJcXFwiIHN0eWxlIHByb3BlcnR5LlwiKSlcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcuJylcblx0fVxuXG5cdGdldFByZWZpeGVkQ3NzUHJvcGVydHkuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChwcm9wZXJ0aWVzID0ge30pOyB9O1xuXG5cdHJldHVybiBnZXRQcmVmaXhlZENzc1Byb3BlcnR5XG59KSgpO1xuXG5mdW5jdGlvbiBzdHlsZShlbGVtZW50KSB7XG5cdHZhciBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQubm9kZSk7XG5cdHZhciBwb3NpdGlvbiA9IGNvbXB1dGVkLnBvc2l0aW9uO1xuXHR2YXIgY29uZmlnID0gZWxlbWVudC5jb25maWc7XG5cblx0LyoqXG5cdCAqIEdlbmVyYXRlIGlubGluZSBzdHlsZXNcblx0ICovXG5cdHZhciBpbmxpbmUgPSB7fTtcblx0dmFyIGlubGluZVN0eWxlID0gZWxlbWVudC5ub2RlLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJztcblx0dmFyIGlubGluZU1hdGNoID0gaW5saW5lU3R5bGUubWF0Y2goL1tcXHctXStcXHMqOlxccypbXjtdK1xccyovZ2kpIHx8IFtdO1xuXG5cdGlubGluZS5jb21wdXRlZCA9IGlubGluZU1hdGNoID8gaW5saW5lTWF0Y2gubWFwKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLnRyaW0oKTsgfSkuam9pbignOyAnKSArICc7JyA6ICcnO1xuXG5cdGlubGluZS5nZW5lcmF0ZWQgPSBpbmxpbmVNYXRjaC5zb21lKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLm1hdGNoKC92aXNpYmlsaXR5XFxzPzpcXHM/dmlzaWJsZS9pKTsgfSlcblx0XHQ/IGlubGluZS5jb21wdXRlZFxuXHRcdDogaW5saW5lTWF0Y2guY29uY2F0KCBbJ3Zpc2liaWxpdHk6IHZpc2libGUnXSkubWFwKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLnRyaW0oKTsgfSkuam9pbignOyAnKSArICc7JztcblxuXHQvKipcblx0ICogR2VuZXJhdGUgb3BhY2l0eSBzdHlsZXNcblx0ICovXG5cdHZhciBjb21wdXRlZE9wYWNpdHkgPSBwYXJzZUZsb2F0KGNvbXB1dGVkLm9wYWNpdHkpO1xuXHR2YXIgY29uZmlnT3BhY2l0eSA9ICFpc05hTihwYXJzZUZsb2F0KGNvbmZpZy5vcGFjaXR5KSlcblx0XHQ/IHBhcnNlRmxvYXQoY29uZmlnLm9wYWNpdHkpXG5cdFx0OiBwYXJzZUZsb2F0KGNvbXB1dGVkLm9wYWNpdHkpO1xuXG5cdHZhciBvcGFjaXR5ID0ge1xuXHRcdGNvbXB1dGVkOiBjb21wdXRlZE9wYWNpdHkgIT09IGNvbmZpZ09wYWNpdHkgPyAoXCJvcGFjaXR5OiBcIiArIGNvbXB1dGVkT3BhY2l0eSArIFwiO1wiKSA6ICcnLFxuXHRcdGdlbmVyYXRlZDogY29tcHV0ZWRPcGFjaXR5ICE9PSBjb25maWdPcGFjaXR5ID8gKFwib3BhY2l0eTogXCIgKyBjb25maWdPcGFjaXR5ICsgXCI7XCIpIDogJydcblx0fTtcblxuXHQvKipcblx0ICogR2VuZXJhdGUgdHJhbnNmb3JtYXRpb24gc3R5bGVzXG5cdCAqL1xuXHR2YXIgdHJhbnNmb3JtYXRpb25zID0gW107XG5cblx0aWYgKHBhcnNlRmxvYXQoY29uZmlnLmRpc3RhbmNlKSkge1xuXHRcdHZhciBheGlzID0gY29uZmlnLm9yaWdpbiA9PT0gJ3RvcCcgfHwgY29uZmlnLm9yaWdpbiA9PT0gJ2JvdHRvbScgPyAnWScgOiAnWCc7XG5cblx0XHQvKipcblx0XHQgKiBMZXTigJlzIG1ha2Ugc3VyZSBvdXIgb3VyIHBpeGVsIGRpc3RhbmNlcyBhcmUgbmVnYXRpdmUgZm9yIHRvcCBhbmQgbGVmdC5cblx0XHQgKiBlLmcuIHsgb3JpZ2luOiAndG9wJywgZGlzdGFuY2U6ICcyNXB4JyB9IHN0YXJ0cyBhdCBgdG9wOiAtMjVweGAgaW4gQ1NTLlxuXHRcdCAqL1xuXHRcdHZhciBkaXN0YW5jZSA9IGNvbmZpZy5kaXN0YW5jZTtcblx0XHRpZiAoY29uZmlnLm9yaWdpbiA9PT0gJ3RvcCcgfHwgY29uZmlnLm9yaWdpbiA9PT0gJ2xlZnQnKSB7XG5cdFx0XHRkaXN0YW5jZSA9IC9eLS8udGVzdChkaXN0YW5jZSkgPyBkaXN0YW5jZS5zdWJzdHIoMSkgOiAoXCItXCIgKyBkaXN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlZiA9IGRpc3RhbmNlLm1hdGNoKC8oXi0/XFxkK1xcLj9cXGQ/KXwoZW0kfHB4JHwlJCkvZyk7XG5cdFx0dmFyIHZhbHVlID0gcmVmWzBdO1xuXHRcdHZhciB1bml0ID0gcmVmWzFdO1xuXG5cdFx0c3dpdGNoICh1bml0KSB7XG5cdFx0XHRjYXNlICdlbSc6XG5cdFx0XHRcdGRpc3RhbmNlID0gcGFyc2VJbnQoY29tcHV0ZWQuZm9udFNpemUpICogdmFsdWU7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICdweCc6XG5cdFx0XHRcdGRpc3RhbmNlID0gdmFsdWU7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlICclJzpcblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEhlcmUgd2UgdXNlIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIGluc3RlYWQgb2Zcblx0XHRcdFx0ICogdGhlIGV4aXN0aW5nIGRhdGEgYXR0YWNoZWQgdG8gYGVsZW1lbnQuZ2VvbWV0cnlgXG5cdFx0XHRcdCAqIGJlY2F1c2Ugb25seSB0aGUgZm9ybWVyIGluY2x1ZGVzIGFueSB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdFx0ICogY3VycmVudCBhcHBsaWVkIHRvIHRoZSBlbGVtZW50LlxuXHRcdFx0XHQgKlxuXHRcdFx0XHQgKiBJZiB0aGF0IGJlaGF2aW9yIGVuZHMgdXAgYmVpbmcgdW5pbnR1aXRpdmUsIHRoaXNcblx0XHRcdFx0ICogbG9naWMgY291bGQgaW5zdGVhZCB1dGlsaXplIGBlbGVtZW50Lmdlb21ldHJ5LmhlaWdodGBcblx0XHRcdFx0ICogYW5kIGBlbGVtZW50Lmdlb2VtZXRyeS53aWR0aGAgZm9yIHRoZSBkaXN0YW5jZSBjYWxjdWxhdGlvblxuXHRcdFx0XHQgKi9cblx0XHRcdFx0ZGlzdGFuY2UgPVxuXHRcdFx0XHRcdGF4aXMgPT09ICdZJ1xuXHRcdFx0XHRcdFx0PyAoZWxlbWVudC5ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqIHZhbHVlKSAvIDEwMFxuXHRcdFx0XHRcdFx0OiAoZWxlbWVudC5ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogdmFsdWUpIC8gMTAwO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1VucmVjb2duaXplZCBvciBtaXNzaW5nIGRpc3RhbmNlIHVuaXQuJylcblx0XHR9XG5cblx0XHRpZiAoYXhpcyA9PT0gJ1knKSB7XG5cdFx0XHR0cmFuc2Zvcm1hdGlvbnMucHVzaCh0cmFuc2xhdGVZKGRpc3RhbmNlKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRyYW5zZm9ybWF0aW9ucy5wdXNoKHRyYW5zbGF0ZVgoZGlzdGFuY2UpKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoY29uZmlnLnJvdGF0ZS54KSB7IHRyYW5zZm9ybWF0aW9ucy5wdXNoKHJvdGF0ZVgoY29uZmlnLnJvdGF0ZS54KSk7IH1cblx0aWYgKGNvbmZpZy5yb3RhdGUueSkgeyB0cmFuc2Zvcm1hdGlvbnMucHVzaChyb3RhdGVZKGNvbmZpZy5yb3RhdGUueSkpOyB9XG5cdGlmIChjb25maWcucm90YXRlLnopIHsgdHJhbnNmb3JtYXRpb25zLnB1c2gocm90YXRlWihjb25maWcucm90YXRlLnopKTsgfVxuXHRpZiAoY29uZmlnLnNjYWxlICE9PSAxKSB7XG5cdFx0aWYgKGNvbmZpZy5zY2FsZSA9PT0gMCkge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaGUgQ1NTIFRyYW5zZm9ybXMgbWF0cml4IGludGVycG9sYXRpb24gc3BlY2lmaWNhdGlvblxuXHRcdFx0ICogYmFzaWNhbGx5IGRpc2FsbG93cyB0cmFuc2l0aW9ucyBvZiBub24taW52ZXJ0aWJsZVxuXHRcdFx0ICogbWF0cml4ZXMsIHdoaWNoIG1lYW5zIGJyb3dzZXJzIHdvbid0IHRyYW5zaXRpb25cblx0XHRcdCAqIGVsZW1lbnRzIHdpdGggemVybyBzY2FsZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGF04oCZcyBpbmNvbnZlbmllbnQgZm9yIHRoZSBBUEkgYW5kIGRldmVsb3BlclxuXHRcdFx0ICogZXhwZXJpZW5jZSwgc28gd2Ugc2ltcGx5IG51ZGdlIHRoZWlyIHZhbHVlXG5cdFx0XHQgKiBzbGlnaHRseSBhYm92ZSB6ZXJvOyB0aGlzIGFsbG93cyBicm93c2Vyc1xuXHRcdFx0ICogdG8gdHJhbnNpdGlvbiBvdXIgZWxlbWVudCBhcyBleHBlY3RlZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBgMC4wMDAyYCB3YXMgdGhlIHNtYWxsZXN0IG51bWJlclxuXHRcdFx0ICogdGhhdCBwZXJmb3JtZWQgYWNyb3NzIGJyb3dzZXJzLlxuXHRcdFx0ICovXG5cdFx0XHR0cmFuc2Zvcm1hdGlvbnMucHVzaChzY2FsZSgwLjAwMDIpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJhbnNmb3JtYXRpb25zLnB1c2goc2NhbGUoY29uZmlnLnNjYWxlKSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIHRyYW5zZm9ybSA9IHt9O1xuXHRpZiAodHJhbnNmb3JtYXRpb25zLmxlbmd0aCkge1xuXHRcdHRyYW5zZm9ybS5wcm9wZXJ0eSA9IGdldFByZWZpeGVkQ3NzUHJvcCgndHJhbnNmb3JtJyk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGRlZmF1bHQgY29tcHV0ZWQgdHJhbnNmb3JtIHZhbHVlIHNob3VsZCBiZSBvbmUgb2Y6XG5cdFx0ICogdW5kZWZpbmVkIHx8ICdub25lJyB8fCAnbWF0cml4KCknIHx8ICdtYXRyaXgzZCgpJ1xuXHRcdCAqL1xuXHRcdHRyYW5zZm9ybS5jb21wdXRlZCA9IHtcblx0XHRcdHJhdzogY29tcHV0ZWRbdHJhbnNmb3JtLnByb3BlcnR5XSxcblx0XHRcdG1hdHJpeDogcGFyc2UoY29tcHV0ZWRbdHJhbnNmb3JtLnByb3BlcnR5XSlcblx0XHR9O1xuXG5cdFx0dHJhbnNmb3JtYXRpb25zLnVuc2hpZnQodHJhbnNmb3JtLmNvbXB1dGVkLm1hdHJpeCk7XG5cdFx0dmFyIHByb2R1Y3QgPSB0cmFuc2Zvcm1hdGlvbnMucmVkdWNlKG11bHRpcGx5KTtcblxuXHRcdHRyYW5zZm9ybS5nZW5lcmF0ZWQgPSB7XG5cdFx0XHRpbml0aWFsOiAoKHRyYW5zZm9ybS5wcm9wZXJ0eSkgKyBcIjogbWF0cml4M2QoXCIgKyAocHJvZHVjdC5qb2luKCcsICcpKSArIFwiKTtcIiksXG5cdFx0XHRmaW5hbDogKCh0cmFuc2Zvcm0ucHJvcGVydHkpICsgXCI6IG1hdHJpeDNkKFwiICsgKHRyYW5zZm9ybS5jb21wdXRlZC5tYXRyaXguam9pbignLCAnKSkgKyBcIik7XCIpXG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHR0cmFuc2Zvcm0uZ2VuZXJhdGVkID0ge1xuXHRcdFx0aW5pdGlhbDogJycsXG5cdFx0XHRmaW5hbDogJydcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdlbmVyYXRlIHRyYW5zaXRpb24gc3R5bGVzXG5cdCAqL1xuXHR2YXIgdHJhbnNpdGlvbiA9IHt9O1xuXHRpZiAob3BhY2l0eS5nZW5lcmF0ZWQgfHwgdHJhbnNmb3JtLmdlbmVyYXRlZC5pbml0aWFsKSB7XG5cdFx0dHJhbnNpdGlvbi5wcm9wZXJ0eSA9IGdldFByZWZpeGVkQ3NzUHJvcCgndHJhbnNpdGlvbicpO1xuXHRcdHRyYW5zaXRpb24uY29tcHV0ZWQgPSBjb21wdXRlZFt0cmFuc2l0aW9uLnByb3BlcnR5XTtcblx0XHR0cmFuc2l0aW9uLmZyYWdtZW50cyA9IFtdO1xuXG5cdFx0dmFyIGRlbGF5ID0gY29uZmlnLmRlbGF5O1xuXHRcdHZhciBkdXJhdGlvbiA9IGNvbmZpZy5kdXJhdGlvbjtcblx0XHR2YXIgZWFzaW5nID0gY29uZmlnLmVhc2luZztcblxuXHRcdGlmIChvcGFjaXR5LmdlbmVyYXRlZCkge1xuXHRcdFx0dHJhbnNpdGlvbi5mcmFnbWVudHMucHVzaCh7XG5cdFx0XHRcdGRlbGF5ZWQ6IChcIm9wYWNpdHkgXCIgKyAoZHVyYXRpb24gLyAxMDAwKSArIFwicyBcIiArIGVhc2luZyArIFwiIFwiICsgKGRlbGF5IC8gMTAwMCkgKyBcInNcIiksXG5cdFx0XHRcdGluc3RhbnQ6IChcIm9wYWNpdHkgXCIgKyAoZHVyYXRpb24gLyAxMDAwKSArIFwicyBcIiArIGVhc2luZyArIFwiIDBzXCIpXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAodHJhbnNmb3JtLmdlbmVyYXRlZC5pbml0aWFsKSB7XG5cdFx0XHR0cmFuc2l0aW9uLmZyYWdtZW50cy5wdXNoKHtcblx0XHRcdFx0ZGVsYXllZDogKCh0cmFuc2Zvcm0ucHJvcGVydHkpICsgXCIgXCIgKyAoZHVyYXRpb24gLyAxMDAwKSArIFwicyBcIiArIGVhc2luZyArIFwiIFwiICsgKGRlbGF5IC8gMTAwMCkgKyBcInNcIiksXG5cdFx0XHRcdGluc3RhbnQ6ICgodHJhbnNmb3JtLnByb3BlcnR5KSArIFwiIFwiICsgKGR1cmF0aW9uIC8gMTAwMCkgKyBcInMgXCIgKyBlYXNpbmcgKyBcIiAwc1wiKVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGRlZmF1bHQgY29tcHV0ZWQgdHJhbnNpdGlvbiBwcm9wZXJ0eSBzaG91bGQgYmUgdW5kZWZpbmVkLCBvciBvbmUgb2Y6XG5cdFx0ICogJycgfHwgJ25vbmUgMHMgZWFzZSAwcycgfHwgJ2FsbCAwcyBlYXNlIDBzJyB8fCAnYWxsIDBzIDBzIGN1YmljLWJlemllcigpJ1xuXHRcdCAqL1xuXHRcdHZhciBoYXNDdXN0b21UcmFuc2l0aW9uID1cblx0XHRcdHRyYW5zaXRpb24uY29tcHV0ZWQgJiYgIXRyYW5zaXRpb24uY29tcHV0ZWQubWF0Y2goL2FsbCAwc3xub25lIDBzLyk7XG5cblx0XHRpZiAoaGFzQ3VzdG9tVHJhbnNpdGlvbikge1xuXHRcdFx0dHJhbnNpdGlvbi5mcmFnbWVudHMudW5zaGlmdCh7XG5cdFx0XHRcdGRlbGF5ZWQ6IHRyYW5zaXRpb24uY29tcHV0ZWQsXG5cdFx0XHRcdGluc3RhbnQ6IHRyYW5zaXRpb24uY29tcHV0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHZhciBjb21wb3NlZCA9IHRyYW5zaXRpb24uZnJhZ21lbnRzLnJlZHVjZShcblx0XHRcdGZ1bmN0aW9uIChjb21wb3NpdGlvbiwgZnJhZ21lbnQsIGkpIHtcblx0XHRcdFx0Y29tcG9zaXRpb24uZGVsYXllZCArPSBpID09PSAwID8gZnJhZ21lbnQuZGVsYXllZCA6IChcIiwgXCIgKyAoZnJhZ21lbnQuZGVsYXllZCkpO1xuXHRcdFx0XHRjb21wb3NpdGlvbi5pbnN0YW50ICs9IGkgPT09IDAgPyBmcmFnbWVudC5pbnN0YW50IDogKFwiLCBcIiArIChmcmFnbWVudC5pbnN0YW50KSk7XG5cdFx0XHRcdHJldHVybiBjb21wb3NpdGlvblxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZGVsYXllZDogJycsXG5cdFx0XHRcdGluc3RhbnQ6ICcnXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRyYW5zaXRpb24uZ2VuZXJhdGVkID0ge1xuXHRcdFx0ZGVsYXllZDogKCh0cmFuc2l0aW9uLnByb3BlcnR5KSArIFwiOiBcIiArIChjb21wb3NlZC5kZWxheWVkKSArIFwiO1wiKSxcblx0XHRcdGluc3RhbnQ6ICgodHJhbnNpdGlvbi5wcm9wZXJ0eSkgKyBcIjogXCIgKyAoY29tcG9zZWQuaW5zdGFudCkgKyBcIjtcIilcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHRyYW5zaXRpb24uZ2VuZXJhdGVkID0ge1xuXHRcdFx0ZGVsYXllZDogJycsXG5cdFx0XHRpbnN0YW50OiAnJ1xuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGlubGluZTogaW5saW5lLFxuXHRcdG9wYWNpdHk6IG9wYWNpdHksXG5cdFx0cG9zaXRpb246IHBvc2l0aW9uLFxuXHRcdHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuXHRcdHRyYW5zaXRpb246IHRyYW5zaXRpb25cblx0fVxufVxuXG4vKipcbiAqIGFwcGx5IGEgQ1NTIHN0cmluZyB0byBhbiBlbGVtZW50IHVzaW5nIHRoZSBDU1NPTSAoZWxlbWVudC5zdHlsZSkgcmF0aGVyXG4gKiB0aGFuIHNldEF0dHJpYnV0ZSwgd2hpY2ggbWF5IHZpb2xhdGUgdGhlIGNvbnRlbnQgc2VjdXJpdHkgcG9saWN5LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gICBbZWxdICBFbGVtZW50IHRvIHJlY2VpdmUgc3R5bGVzLlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWNsYXJhdGlvbl0gU3R5bGVzIHRvIGFwcGx5LlxuICovXG5mdW5jdGlvbiBhcHBseVN0eWxlIChlbCwgZGVjbGFyYXRpb24pIHtcblx0ZGVjbGFyYXRpb24uc3BsaXQoJzsnKS5mb3JFYWNoKGZ1bmN0aW9uIChwYWlyKSB7XG5cdFx0dmFyIHJlZiA9IHBhaXIuc3BsaXQoJzonKTtcblx0XHR2YXIgcHJvcGVydHkgPSByZWZbMF07XG5cdFx0dmFyIHZhbHVlID0gcmVmLnNsaWNlKDEpO1xuXHRcdGlmIChwcm9wZXJ0eSAmJiB2YWx1ZSkge1xuXHRcdFx0ZWwuc3R5bGVbcHJvcGVydHkudHJpbSgpXSA9IHZhbHVlLmpvaW4oJzonKTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhbih0YXJnZXQpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0dmFyIGRpcnR5O1xuXHR0cnkge1xuXHRcdGVhY2goJCh0YXJnZXQpLCBmdW5jdGlvbiAobm9kZSkge1xuXHRcdFx0dmFyIGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnKTtcblx0XHRcdGlmIChpZCAhPT0gbnVsbCkge1xuXHRcdFx0XHRkaXJ0eSA9IHRydWU7XG5cdFx0XHRcdHZhciBlbGVtZW50ID0gdGhpcyQxLnN0b3JlLmVsZW1lbnRzW2lkXTtcblx0XHRcdFx0aWYgKGVsZW1lbnQuY2FsbGJhY2tUaW1lcikge1xuXHRcdFx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoZWxlbWVudC5jYWxsYmFja1RpbWVyLmNsb2NrKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhcHBseVN0eWxlKGVsZW1lbnQubm9kZSwgZWxlbWVudC5zdHlsZXMuaW5saW5lLmdlbmVyYXRlZCk7XG5cdFx0XHRcdG5vZGUucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyLWlkJyk7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzJDEuc3RvcmUuZWxlbWVudHNbaWRdO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGxvZ2dlci5jYWxsKHRoaXMsICdDbGVhbiBmYWlsZWQuJywgZS5tZXNzYWdlKVxuXHR9XG5cblx0aWYgKGRpcnR5KSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJpbnNlLmNhbGwodGhpcyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGxvZ2dlci5jYWxsKHRoaXMsICdDbGVhbiBmYWlsZWQuJywgZS5tZXNzYWdlKVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkZXN0cm95KCkge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblxuXHQvKipcblx0ICogUmVtb3ZlIGFsbCBnZW5lcmF0ZWQgc3R5bGVzIGFuZCBlbGVtZW50IGlkc1xuXHQgKi9cblx0ZWFjaCh0aGlzLnN0b3JlLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGFwcGx5U3R5bGUoZWxlbWVudC5ub2RlLCBlbGVtZW50LnN0eWxlcy5pbmxpbmUuZ2VuZXJhdGVkKTtcblx0XHRlbGVtZW50Lm5vZGUucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyLWlkJyk7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBSZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycy5cblx0ICovXG5cdGVhY2godGhpcy5zdG9yZS5jb250YWluZXJzLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0dmFyIHRhcmdldCA9XG5cdFx0XHRjb250YWluZXIubm9kZSA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gd2luZG93IDogY29udGFpbmVyLm5vZGU7XG5cdFx0dGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMkMS5kZWxlZ2F0ZSk7XG5cdFx0dGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMkMS5kZWxlZ2F0ZSk7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBDbGVhciBhbGwgZGF0YSBmcm9tIHRoZSBzdG9yZVxuXHQgKi9cblx0dGhpcy5zdG9yZSA9IHtcblx0XHRjb250YWluZXJzOiB7fSxcblx0XHRlbGVtZW50czoge30sXG5cdFx0aGlzdG9yeTogW10sXG5cdFx0c2VxdWVuY2VzOiB7fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBkZWVwQXNzaWduKHRhcmdldCkge1xuXHR2YXIgc291cmNlcyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblx0d2hpbGUgKCBsZW4tLSA+IDAgKSBzb3VyY2VzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG5cdGlmIChpc09iamVjdCh0YXJnZXQpKSB7XG5cdFx0ZWFjaChzb3VyY2VzLCBmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRlYWNoKHNvdXJjZSwgZnVuY3Rpb24gKGRhdGEsIGtleSkge1xuXHRcdFx0XHRpZiAoaXNPYmplY3QoZGF0YSkpIHtcblx0XHRcdFx0XHRpZiAoIXRhcmdldFtrZXldIHx8ICFpc09iamVjdCh0YXJnZXRba2V5XSkpIHtcblx0XHRcdFx0XHRcdHRhcmdldFtrZXldID0ge307XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlZXBBc3NpZ24odGFyZ2V0W2tleV0sIGRhdGEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRhcmdldFtrZXldID0gZGF0YTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRhcmdldFxuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1RhcmdldCBtdXN0IGJlIGFuIG9iamVjdCBsaXRlcmFsLicpXG5cdH1cbn1cblxuZnVuY3Rpb24gaXNNb2JpbGUoYWdlbnQpIHtcblx0aWYgKCBhZ2VudCA9PT0gdm9pZCAwICkgYWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5cdHJldHVybiAvQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kL2kudGVzdChhZ2VudClcbn1cblxudmFyIG5leHRVbmlxdWVJZCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB1aWQgPSAwO1xuXHRyZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gdWlkKys7IH1cbn0pKCk7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG5cdHZhciB0aGlzJDEgPSB0aGlzO1xuXG5cdHJpbnNlLmNhbGwodGhpcyk7XG5cblx0ZWFjaCh0aGlzLnN0b3JlLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdHZhciBzdHlsZXMgPSBbZWxlbWVudC5zdHlsZXMuaW5saW5lLmdlbmVyYXRlZF07XG5cblx0XHRpZiAoZWxlbWVudC52aXNpYmxlKSB7XG5cdFx0XHRzdHlsZXMucHVzaChlbGVtZW50LnN0eWxlcy5vcGFjaXR5LmNvbXB1dGVkKTtcblx0XHRcdHN0eWxlcy5wdXNoKGVsZW1lbnQuc3R5bGVzLnRyYW5zZm9ybS5nZW5lcmF0ZWQuZmluYWwpO1xuXHRcdFx0ZWxlbWVudC5yZXZlYWxlZCA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlcy5wdXNoKGVsZW1lbnQuc3R5bGVzLm9wYWNpdHkuZ2VuZXJhdGVkKTtcblx0XHRcdHN0eWxlcy5wdXNoKGVsZW1lbnQuc3R5bGVzLnRyYW5zZm9ybS5nZW5lcmF0ZWQuaW5pdGlhbCk7XG5cdFx0XHRlbGVtZW50LnJldmVhbGVkID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0YXBwbHlTdHlsZShlbGVtZW50Lm5vZGUsIHN0eWxlcy5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgIT09ICcnOyB9KS5qb2luKCcgJykpO1xuXHR9KTtcblxuXHRlYWNoKHRoaXMuc3RvcmUuY29udGFpbmVycywgZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuXHRcdHZhciB0YXJnZXQgPVxuXHRcdFx0Y29udGFpbmVyLm5vZGUgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IHdpbmRvdyA6IGNvbnRhaW5lci5ub2RlO1xuXHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzJDEuZGVsZWdhdGUpO1xuXHRcdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzJDEuZGVsZWdhdGUpO1xuXHR9KTtcblxuXHQvKipcblx0ICogTWFudWFsbHkgaW52b2tlIGRlbGVnYXRlIG9uY2UgdG8gY2FwdHVyZVxuXHQgKiBlbGVtZW50IGFuZCBjb250YWluZXIgZGltZW5zaW9ucywgY29udGFpbmVyXG5cdCAqIHNjcm9sbCBwb3NpdGlvbiwgYW5kIHRyaWdnZXIgYW55IHZhbGlkIHJldmVhbHNcblx0ICovXG5cdHRoaXMuZGVsZWdhdGUoKTtcblxuXHQvKipcblx0ICogV2lwZSBhbnkgZXhpc3RpbmcgYHNldFRpbWVvdXRgIG5vd1xuXHQgKiB0aGF0IGluaXRpYWxpemF0aW9uIGhhcyBjb21wbGV0ZWQuXG5cdCAqL1xuXHR0aGlzLmluaXRUaW1lb3V0ID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZShlbGVtZW50LCBmb3JjZSkge1xuXHRpZiAoIGZvcmNlID09PSB2b2lkIDAgKSBmb3JjZSA9IHt9O1xuXG5cdHZhciBwcmlzdGluZSA9IGZvcmNlLnByaXN0aW5lIHx8IHRoaXMucHJpc3RpbmU7XG5cdHZhciBkZWxheWVkID1cblx0XHRlbGVtZW50LmNvbmZpZy51c2VEZWxheSA9PT0gJ2Fsd2F5cycgfHxcblx0XHQoZWxlbWVudC5jb25maWcudXNlRGVsYXkgPT09ICdvbmxvYWQnICYmIHByaXN0aW5lKSB8fFxuXHRcdChlbGVtZW50LmNvbmZpZy51c2VEZWxheSA9PT0gJ29uY2UnICYmICFlbGVtZW50LnNlZW4pO1xuXG5cdHZhciBzaG91bGRSZXZlYWwgPSBlbGVtZW50LnZpc2libGUgJiYgIWVsZW1lbnQucmV2ZWFsZWQ7XG5cdHZhciBzaG91bGRSZXNldCA9ICFlbGVtZW50LnZpc2libGUgJiYgZWxlbWVudC5yZXZlYWxlZCAmJiBlbGVtZW50LmNvbmZpZy5yZXNldDtcblxuXHRpZiAoZm9yY2UucmV2ZWFsIHx8IHNob3VsZFJldmVhbCkge1xuXHRcdHJldHVybiB0cmlnZ2VyUmV2ZWFsLmNhbGwodGhpcywgZWxlbWVudCwgZGVsYXllZClcblx0fVxuXG5cdGlmIChmb3JjZS5yZXNldCB8fCBzaG91bGRSZXNldCkge1xuXHRcdHJldHVybiB0cmlnZ2VyUmVzZXQuY2FsbCh0aGlzLCBlbGVtZW50KVxuXHR9XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXJSZXZlYWwoZWxlbWVudCwgZGVsYXllZCkge1xuXHR2YXIgc3R5bGVzID0gW1xuXHRcdGVsZW1lbnQuc3R5bGVzLmlubGluZS5nZW5lcmF0ZWQsXG5cdFx0ZWxlbWVudC5zdHlsZXMub3BhY2l0eS5jb21wdXRlZCxcblx0XHRlbGVtZW50LnN0eWxlcy50cmFuc2Zvcm0uZ2VuZXJhdGVkLmZpbmFsXG5cdF07XG5cdGlmIChkZWxheWVkKSB7XG5cdFx0c3R5bGVzLnB1c2goZWxlbWVudC5zdHlsZXMudHJhbnNpdGlvbi5nZW5lcmF0ZWQuZGVsYXllZCk7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVzLnB1c2goZWxlbWVudC5zdHlsZXMudHJhbnNpdGlvbi5nZW5lcmF0ZWQuaW5zdGFudCk7XG5cdH1cblx0ZWxlbWVudC5yZXZlYWxlZCA9IGVsZW1lbnQuc2VlbiA9IHRydWU7XG5cdGFwcGx5U3R5bGUoZWxlbWVudC5ub2RlLCBzdHlsZXMuZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzICE9PSAnJzsgfSkuam9pbignICcpKTtcblx0cmVnaXN0ZXJDYWxsYmFja3MuY2FsbCh0aGlzLCBlbGVtZW50LCBkZWxheWVkKTtcbn1cblxuZnVuY3Rpb24gdHJpZ2dlclJlc2V0KGVsZW1lbnQpIHtcblx0dmFyIHN0eWxlcyA9IFtcblx0XHRlbGVtZW50LnN0eWxlcy5pbmxpbmUuZ2VuZXJhdGVkLFxuXHRcdGVsZW1lbnQuc3R5bGVzLm9wYWNpdHkuZ2VuZXJhdGVkLFxuXHRcdGVsZW1lbnQuc3R5bGVzLnRyYW5zZm9ybS5nZW5lcmF0ZWQuaW5pdGlhbCxcblx0XHRlbGVtZW50LnN0eWxlcy50cmFuc2l0aW9uLmdlbmVyYXRlZC5pbnN0YW50XG5cdF07XG5cdGVsZW1lbnQucmV2ZWFsZWQgPSBmYWxzZTtcblx0YXBwbHlTdHlsZShlbGVtZW50Lm5vZGUsIHN0eWxlcy5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgIT09ICcnOyB9KS5qb2luKCcgJykpO1xuXHRyZWdpc3RlckNhbGxiYWNrcy5jYWxsKHRoaXMsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckNhbGxiYWNrcyhlbGVtZW50LCBpc0RlbGF5ZWQpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0dmFyIGR1cmF0aW9uID0gaXNEZWxheWVkXG5cdFx0PyBlbGVtZW50LmNvbmZpZy5kdXJhdGlvbiArIGVsZW1lbnQuY29uZmlnLmRlbGF5XG5cdFx0OiBlbGVtZW50LmNvbmZpZy5kdXJhdGlvbjtcblxuXHR2YXIgYmVmb3JlQ2FsbGJhY2sgPSBlbGVtZW50LnJldmVhbGVkXG5cdFx0PyBlbGVtZW50LmNvbmZpZy5iZWZvcmVSZXZlYWxcblx0XHQ6IGVsZW1lbnQuY29uZmlnLmJlZm9yZVJlc2V0O1xuXG5cdHZhciBhZnRlckNhbGxiYWNrID0gZWxlbWVudC5yZXZlYWxlZFxuXHRcdD8gZWxlbWVudC5jb25maWcuYWZ0ZXJSZXZlYWxcblx0XHQ6IGVsZW1lbnQuY29uZmlnLmFmdGVyUmVzZXQ7XG5cblx0dmFyIGVsYXBzZWQgPSAwO1xuXHRpZiAoZWxlbWVudC5jYWxsYmFja1RpbWVyKSB7XG5cdFx0ZWxhcHNlZCA9IERhdGUubm93KCkgLSBlbGVtZW50LmNhbGxiYWNrVGltZXIuc3RhcnQ7XG5cdFx0d2luZG93LmNsZWFyVGltZW91dChlbGVtZW50LmNhbGxiYWNrVGltZXIuY2xvY2spO1xuXHR9XG5cblx0YmVmb3JlQ2FsbGJhY2soZWxlbWVudC5ub2RlKTtcblxuXHRlbGVtZW50LmNhbGxiYWNrVGltZXIgPSB7XG5cdFx0c3RhcnQ6IERhdGUubm93KCksXG5cdFx0Y2xvY2s6IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGFmdGVyQ2FsbGJhY2soZWxlbWVudC5ub2RlKTtcblx0XHRcdGVsZW1lbnQuY2FsbGJhY2tUaW1lciA9IG51bGw7XG5cdFx0XHRpZiAoZWxlbWVudC5yZXZlYWxlZCAmJiAhZWxlbWVudC5jb25maWcucmVzZXQgJiYgZWxlbWVudC5jb25maWcuY2xlYW51cCkge1xuXHRcdFx0XHRjbGVhbi5jYWxsKHRoaXMkMSwgZWxlbWVudC5ub2RlKTtcblx0XHRcdH1cblx0XHR9LCBkdXJhdGlvbiAtIGVsYXBzZWQpXG5cdH07XG59XG5cbmZ1bmN0aW9uIHNlcXVlbmNlKGVsZW1lbnQsIHByaXN0aW5lKSB7XG5cdGlmICggcHJpc3RpbmUgPT09IHZvaWQgMCApIHByaXN0aW5lID0gdGhpcy5wcmlzdGluZTtcblxuXHQvKipcblx0ICogV2UgZmlyc3QgY2hlY2sgaWYgdGhlIGVsZW1lbnQgc2hvdWxkIHJlc2V0LlxuXHQgKi9cblx0aWYgKCFlbGVtZW50LnZpc2libGUgJiYgZWxlbWVudC5yZXZlYWxlZCAmJiBlbGVtZW50LmNvbmZpZy5yZXNldCkge1xuXHRcdHJldHVybiBhbmltYXRlLmNhbGwodGhpcywgZWxlbWVudCwgeyByZXNldDogdHJ1ZSB9KVxuXHR9XG5cblx0dmFyIHNlcSA9IHRoaXMuc3RvcmUuc2VxdWVuY2VzW2VsZW1lbnQuc2VxdWVuY2UuaWRdO1xuXHR2YXIgaSA9IGVsZW1lbnQuc2VxdWVuY2UuaW5kZXg7XG5cblx0aWYgKHNlcSkge1xuXHRcdHZhciB2aXNpYmxlID0gbmV3IFNlcXVlbmNlTW9kZWwoc2VxLCAndmlzaWJsZScsIHRoaXMuc3RvcmUpO1xuXHRcdHZhciByZXZlYWxlZCA9IG5ldyBTZXF1ZW5jZU1vZGVsKHNlcSwgJ3JldmVhbGVkJywgdGhpcy5zdG9yZSk7XG5cblx0XHRzZXEubW9kZWxzID0geyB2aXNpYmxlOiB2aXNpYmxlLCByZXZlYWxlZDogcmV2ZWFsZWQgfTtcblxuXHRcdC8qKlxuXHRcdCAqIElmIHRoZSBzZXF1ZW5jZSBoYXMgbm8gcmV2ZWFsZWQgbWVtYmVycyxcblx0XHQgKiB0aGVuIHdlIHJldmVhbCB0aGUgZmlyc3QgdmlzaWJsZSBlbGVtZW50XG5cdFx0ICogd2l0aGluIHRoYXQgc2VxdWVuY2UuXG5cdFx0ICpcblx0XHQgKiBUaGUgc2VxdWVuY2UgdGhlbiBjdWVzIGEgcmVjdXJzaXZlIGNhbGxcblx0XHQgKiBpbiBib3RoIGRpcmVjdGlvbnMuXG5cdFx0ICovXG5cdFx0aWYgKCFyZXZlYWxlZC5ib2R5Lmxlbmd0aCkge1xuXHRcdFx0dmFyIG5leHRJZCA9IHNlcS5tZW1iZXJzW3Zpc2libGUuYm9keVswXV07XG5cdFx0XHR2YXIgbmV4dEVsZW1lbnQgPSB0aGlzLnN0b3JlLmVsZW1lbnRzW25leHRJZF07XG5cblx0XHRcdGlmIChuZXh0RWxlbWVudCkge1xuXHRcdFx0XHRjdWUuY2FsbCh0aGlzLCBzZXEsIHZpc2libGUuYm9keVswXSwgLTEsIHByaXN0aW5lKTtcblx0XHRcdFx0Y3VlLmNhbGwodGhpcywgc2VxLCB2aXNpYmxlLmJvZHlbMF0sICsxLCBwcmlzdGluZSk7XG5cdFx0XHRcdHJldHVybiBhbmltYXRlLmNhbGwodGhpcywgbmV4dEVsZW1lbnQsIHsgcmV2ZWFsOiB0cnVlLCBwcmlzdGluZTogcHJpc3RpbmUgfSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBJZiBvdXIgZWxlbWVudCBpc27igJl0IHJlc2V0dGluZywgd2UgY2hlY2sgdGhlXG5cdFx0ICogZWxlbWVudCBzZXF1ZW5jZSBpbmRleCBhZ2FpbnN0IHRoZSBoZWFkLCBhbmRcblx0XHQgKiB0aGVuIHRoZSBmb290IG9mIHRoZSBzZXF1ZW5jZS5cblx0XHQgKi9cblx0XHRpZiAoXG5cdFx0XHQhc2VxLmJsb2NrZWQuaGVhZCAmJlxuXHRcdFx0aSA9PT0gW10uY29uY2F0KCByZXZlYWxlZC5oZWFkICkucG9wKCkgJiZcblx0XHRcdGkgPj0gW10uY29uY2F0KCB2aXNpYmxlLmJvZHkgKS5zaGlmdCgpXG5cdFx0KSB7XG5cdFx0XHRjdWUuY2FsbCh0aGlzLCBzZXEsIGksIC0xLCBwcmlzdGluZSk7XG5cdFx0XHRyZXR1cm4gYW5pbWF0ZS5jYWxsKHRoaXMsIGVsZW1lbnQsIHsgcmV2ZWFsOiB0cnVlLCBwcmlzdGluZTogcHJpc3RpbmUgfSlcblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHQhc2VxLmJsb2NrZWQuZm9vdCAmJlxuXHRcdFx0aSA9PT0gW10uY29uY2F0KCByZXZlYWxlZC5mb290ICkuc2hpZnQoKSAmJlxuXHRcdFx0aSA8PSBbXS5jb25jYXQoIHZpc2libGUuYm9keSApLnBvcCgpXG5cdFx0KSB7XG5cdFx0XHRjdWUuY2FsbCh0aGlzLCBzZXEsIGksICsxLCBwcmlzdGluZSk7XG5cdFx0XHRyZXR1cm4gYW5pbWF0ZS5jYWxsKHRoaXMsIGVsZW1lbnQsIHsgcmV2ZWFsOiB0cnVlLCBwcmlzdGluZTogcHJpc3RpbmUgfSlcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gU2VxdWVuY2UoaW50ZXJ2YWwpIHtcblx0dmFyIGkgPSBNYXRoLmFicyhpbnRlcnZhbCk7XG5cdGlmICghaXNOYU4oaSkpIHtcblx0XHR0aGlzLmlkID0gbmV4dFVuaXF1ZUlkKCk7XG5cdFx0dGhpcy5pbnRlcnZhbCA9IE1hdGgubWF4KGksIDE2KTtcblx0XHR0aGlzLm1lbWJlcnMgPSBbXTtcblx0XHR0aGlzLm1vZGVscyA9IHt9O1xuXHRcdHRoaXMuYmxvY2tlZCA9IHtcblx0XHRcdGhlYWQ6IGZhbHNlLFxuXHRcdFx0Zm9vdDogZmFsc2Vcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHNlcXVlbmNlIGludGVydmFsLicpXG5cdH1cbn1cblxuZnVuY3Rpb24gU2VxdWVuY2VNb2RlbChzZXEsIHByb3AsIHN0b3JlKSB7XG5cdHZhciB0aGlzJDEgPSB0aGlzO1xuXG5cdHRoaXMuaGVhZCA9IFtdO1xuXHR0aGlzLmJvZHkgPSBbXTtcblx0dGhpcy5mb290ID0gW107XG5cblx0ZWFjaChzZXEubWVtYmVycywgZnVuY3Rpb24gKGlkLCBpbmRleCkge1xuXHRcdHZhciBlbGVtZW50ID0gc3RvcmUuZWxlbWVudHNbaWRdO1xuXHRcdGlmIChlbGVtZW50ICYmIGVsZW1lbnRbcHJvcF0pIHtcblx0XHRcdHRoaXMkMS5ib2R5LnB1c2goaW5kZXgpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKHRoaXMuYm9keS5sZW5ndGgpIHtcblx0XHRlYWNoKHNlcS5tZW1iZXJzLCBmdW5jdGlvbiAoaWQsIGluZGV4KSB7XG5cdFx0XHR2YXIgZWxlbWVudCA9IHN0b3JlLmVsZW1lbnRzW2lkXTtcblx0XHRcdGlmIChlbGVtZW50ICYmICFlbGVtZW50W3Byb3BdKSB7XG5cdFx0XHRcdGlmIChpbmRleCA8IHRoaXMkMS5ib2R5WzBdKSB7XG5cdFx0XHRcdFx0dGhpcyQxLmhlYWQucHVzaChpbmRleCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcyQxLmZvb3QucHVzaChpbmRleCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjdWUoc2VxLCBpLCBkaXJlY3Rpb24sIHByaXN0aW5lKSB7XG5cdHZhciB0aGlzJDEgPSB0aGlzO1xuXG5cdHZhciBibG9ja2VkID0gWydoZWFkJywgbnVsbCwgJ2Zvb3QnXVsxICsgZGlyZWN0aW9uXTtcblx0dmFyIG5leHRJZCA9IHNlcS5tZW1iZXJzW2kgKyBkaXJlY3Rpb25dO1xuXHR2YXIgbmV4dEVsZW1lbnQgPSB0aGlzLnN0b3JlLmVsZW1lbnRzW25leHRJZF07XG5cblx0c2VxLmJsb2NrZWRbYmxvY2tlZF0gPSB0cnVlO1xuXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdHNlcS5ibG9ja2VkW2Jsb2NrZWRdID0gZmFsc2U7XG5cdFx0aWYgKG5leHRFbGVtZW50KSB7XG5cdFx0XHRzZXF1ZW5jZS5jYWxsKHRoaXMkMSwgbmV4dEVsZW1lbnQsIHByaXN0aW5lKTtcblx0XHR9XG5cdH0sIHNlcS5pbnRlcnZhbCk7XG59XG5cbmZ1bmN0aW9uIHJldmVhbCh0YXJnZXQsIG9wdGlvbnMsIHN5bmNpbmcpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cdGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXHRpZiAoIHN5bmNpbmcgPT09IHZvaWQgMCApIHN5bmNpbmcgPSBmYWxzZTtcblxuXHR2YXIgY29udGFpbmVyQnVmZmVyID0gW107XG5cdHZhciBzZXF1ZW5jZSQkMTtcblx0dmFyIGludGVydmFsID0gb3B0aW9ucy5pbnRlcnZhbCB8fCBkZWZhdWx0cy5pbnRlcnZhbDtcblxuXHR0cnkge1xuXHRcdGlmIChpbnRlcnZhbCkge1xuXHRcdFx0c2VxdWVuY2UkJDEgPSBuZXcgU2VxdWVuY2UoaW50ZXJ2YWwpO1xuXHRcdH1cblxuXHRcdHZhciBub2RlcyA9ICQodGFyZ2V0KTtcblx0XHRpZiAoIW5vZGVzLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJldmVhbCB0YXJnZXQuJylcblx0XHR9XG5cblx0XHR2YXIgZWxlbWVudHMgPSBub2Rlcy5yZWR1Y2UoZnVuY3Rpb24gKGVsZW1lbnRCdWZmZXIsIGVsZW1lbnROb2RlKSB7XG5cdFx0XHR2YXIgZWxlbWVudCA9IHt9O1xuXHRcdFx0dmFyIGV4aXN0aW5nSWQgPSBlbGVtZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnKTtcblxuXHRcdFx0aWYgKGV4aXN0aW5nSWQpIHtcblx0XHRcdFx0ZGVlcEFzc2lnbihlbGVtZW50LCB0aGlzJDEuc3RvcmUuZWxlbWVudHNbZXhpc3RpbmdJZF0pO1xuXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBJbiBvcmRlciB0byBwcmV2ZW50IHByZXZpb3VzbHkgZ2VuZXJhdGVkIHN0eWxlc1xuXHRcdFx0XHQgKiBmcm9tIHRocm93aW5nIG9mZiB0aGUgbmV3IHN0eWxlcywgdGhlIHN0eWxlIHRhZ1xuXHRcdFx0XHQgKiBoYXMgdG8gYmUgcmV2ZXJ0ZWQgdG8gaXRzIHByZS1yZXZlYWwgc3RhdGUuXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRhcHBseVN0eWxlKGVsZW1lbnQubm9kZSwgZWxlbWVudC5zdHlsZXMuaW5saW5lLmNvbXB1dGVkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuaWQgPSBuZXh0VW5pcXVlSWQoKTtcblx0XHRcdFx0ZWxlbWVudC5ub2RlID0gZWxlbWVudE5vZGU7XG5cdFx0XHRcdGVsZW1lbnQuc2VlbiA9IGZhbHNlO1xuXHRcdFx0XHRlbGVtZW50LnJldmVhbGVkID0gZmFsc2U7XG5cdFx0XHRcdGVsZW1lbnQudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY29uZmlnID0gZGVlcEFzc2lnbih7fSwgZWxlbWVudC5jb25maWcgfHwgdGhpcyQxLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuXHRcdFx0aWYgKCghY29uZmlnLm1vYmlsZSAmJiBpc01vYmlsZSgpKSB8fCAoIWNvbmZpZy5kZXNrdG9wICYmICFpc01vYmlsZSgpKSkge1xuXHRcdFx0XHRpZiAoZXhpc3RpbmdJZCkge1xuXHRcdFx0XHRcdGNsZWFuLmNhbGwodGhpcyQxLCBlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZWxlbWVudEJ1ZmZlciAvLyBza2lwIGVsZW1lbnRzIHRoYXQgYXJlIGRpc2FibGVkXG5cdFx0XHR9XG5cblx0XHRcdHZhciBjb250YWluZXJOb2RlID0gJChjb25maWcuY29udGFpbmVyKVswXTtcblx0XHRcdGlmICghY29udGFpbmVyTm9kZSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29udGFpbmVyLicpXG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNvbnRhaW5lck5vZGUuY29udGFpbnMoZWxlbWVudE5vZGUpKSB7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50QnVmZmVyIC8vIHNraXAgZWxlbWVudHMgZm91bmQgb3V0c2lkZSB0aGUgY29udGFpbmVyXG5cdFx0XHR9XG5cblx0XHRcdHZhciBjb250YWluZXJJZDtcblx0XHRcdHtcblx0XHRcdFx0Y29udGFpbmVySWQgPSBnZXRDb250YWluZXJJZChcblx0XHRcdFx0XHRjb250YWluZXJOb2RlLFxuXHRcdFx0XHRcdGNvbnRhaW5lckJ1ZmZlcixcblx0XHRcdFx0XHR0aGlzJDEuc3RvcmUuY29udGFpbmVyc1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoY29udGFpbmVySWQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb250YWluZXJJZCA9IG5leHRVbmlxdWVJZCgpO1xuXHRcdFx0XHRcdGNvbnRhaW5lckJ1ZmZlci5wdXNoKHsgaWQ6IGNvbnRhaW5lcklkLCBub2RlOiBjb250YWluZXJOb2RlIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQuY29uZmlnID0gY29uZmlnO1xuXHRcdFx0ZWxlbWVudC5jb250YWluZXJJZCA9IGNvbnRhaW5lcklkO1xuXHRcdFx0ZWxlbWVudC5zdHlsZXMgPSBzdHlsZShlbGVtZW50KTtcblxuXHRcdFx0aWYgKHNlcXVlbmNlJCQxKSB7XG5cdFx0XHRcdGVsZW1lbnQuc2VxdWVuY2UgPSB7XG5cdFx0XHRcdFx0aWQ6IHNlcXVlbmNlJCQxLmlkLFxuXHRcdFx0XHRcdGluZGV4OiBzZXF1ZW5jZSQkMS5tZW1iZXJzLmxlbmd0aFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRzZXF1ZW5jZSQkMS5tZW1iZXJzLnB1c2goZWxlbWVudC5pZCk7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnRCdWZmZXIucHVzaChlbGVtZW50KTtcblx0XHRcdHJldHVybiBlbGVtZW50QnVmZmVyXG5cdFx0fSwgW10pO1xuXG5cdFx0LyoqXG5cdFx0ICogTW9kaWZ5aW5nIHRoZSBET00gdmlhIHNldEF0dHJpYnV0ZSBuZWVkcyB0byBiZSBoYW5kbGVkXG5cdFx0ICogc2VwYXJhdGVseSBmcm9tIHJlYWRpbmcgY29tcHV0ZWQgc3R5bGVzIGluIHRoZSBtYXAgYWJvdmVcblx0XHQgKiBmb3IgdGhlIGJyb3dzZXIgdG8gYmF0Y2ggRE9NIGNoYW5nZXMgKGxpbWl0aW5nIHJlZmxvd3MpXG5cdFx0ICovXG5cdFx0ZWFjaChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdHRoaXMkMS5zdG9yZS5lbGVtZW50c1tlbGVtZW50LmlkXSA9IGVsZW1lbnQ7XG5cdFx0XHRlbGVtZW50Lm5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXNyLWlkJywgZWxlbWVudC5pZCk7XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gbG9nZ2VyLmNhbGwodGhpcywgJ1JldmVhbCBmYWlsZWQuJywgZS5tZXNzYWdlKVxuXHR9XG5cblx0LyoqXG5cdCAqIE5vdyB0aGF0IGVsZW1lbnQgc2V0LXVwIGlzIGNvbXBsZXRlLi4uXG5cdCAqIExldOKAmXMgY29tbWl0IGFueSBjb250YWluZXIgYW5kIHNlcXVlbmNlIGRhdGEgd2UgaGF2ZSB0byB0aGUgc3RvcmUuXG5cdCAqL1xuXHRlYWNoKGNvbnRhaW5lckJ1ZmZlciwgZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuXHRcdHRoaXMkMS5zdG9yZS5jb250YWluZXJzW2NvbnRhaW5lci5pZF0gPSB7XG5cdFx0XHRpZDogY29udGFpbmVyLmlkLFxuXHRcdFx0bm9kZTogY29udGFpbmVyLm5vZGVcblx0XHR9O1xuXHR9KTtcblx0aWYgKHNlcXVlbmNlJCQxKSB7XG5cdFx0dGhpcy5zdG9yZS5zZXF1ZW5jZXNbc2VxdWVuY2UkJDEuaWRdID0gc2VxdWVuY2UkJDE7XG5cdH1cblxuXHQvKipcblx0ICogSWYgcmV2ZWFsIHdhc24ndCBpbnZva2VkIGJ5IHN5bmMsIHdlIHdhbnQgdG9cblx0ICogbWFrZSBzdXJlIHRvIGFkZCB0aGlzIGNhbGwgdG8gdGhlIGhpc3RvcnkuXG5cdCAqL1xuXHRpZiAoc3luY2luZyAhPT0gdHJ1ZSkge1xuXHRcdHRoaXMuc3RvcmUuaGlzdG9yeS5wdXNoKHsgdGFyZ2V0OiB0YXJnZXQsIG9wdGlvbnM6IG9wdGlvbnMgfSk7XG5cblx0XHQvKipcblx0XHQgKiBQdXNoIGluaXRpYWxpemF0aW9uIHRvIHRoZSBldmVudCBxdWV1ZSwgZ2l2aW5nXG5cdFx0ICogbXVsdGlwbGUgcmV2ZWFsIGNhbGxzIHRpbWUgdG8gYmUgaW50ZXJwcmV0ZWQuXG5cdFx0ICovXG5cdFx0aWYgKHRoaXMuaW5pdFRpbWVvdXQpIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5pbml0VGltZW91dCk7XG5cdFx0fVxuXHRcdHRoaXMuaW5pdFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChpbml0aWFsaXplLmJpbmQodGhpcyksIDApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5lcklkKG5vZGUpIHtcblx0dmFyIGNvbGxlY3Rpb25zID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuXHR3aGlsZSAoIGxlbi0tID4gMCApIGNvbGxlY3Rpb25zWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG5cdHZhciBpZCA9IG51bGw7XG5cdGVhY2goY29sbGVjdGlvbnMsIGZ1bmN0aW9uIChjb2xsZWN0aW9uKSB7XG5cdFx0ZWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0XHRpZiAoaWQgPT09IG51bGwgJiYgY29udGFpbmVyLm5vZGUgPT09IG5vZGUpIHtcblx0XHRcdFx0aWQgPSBjb250YWluZXIuaWQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXHRyZXR1cm4gaWRcbn1cblxuLyoqXG4gKiBSZS1ydW5zIHRoZSByZXZlYWwgbWV0aG9kIGZvciBlYWNoIHJlY29yZCBzdG9yZWQgaW4gaGlzdG9yeSxcbiAqIGZvciBjYXB0dXJpbmcgbmV3IGNvbnRlbnQgYXN5bmNocm9ub3VzbHkgbG9hZGVkIGludG8gdGhlIERPTS5cbiAqL1xuZnVuY3Rpb24gc3luYygpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0ZWFjaCh0aGlzLnN0b3JlLmhpc3RvcnksIGZ1bmN0aW9uIChyZWNvcmQpIHtcblx0XHRyZXZlYWwuY2FsbCh0aGlzJDEsIHJlY29yZC50YXJnZXQsIHJlY29yZC5vcHRpb25zLCB0cnVlKTtcblx0fSk7XG5cblx0aW5pdGlhbGl6ZS5jYWxsKHRoaXMpO1xufVxuXG52YXIgcG9seWZpbGwgPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKHggPiAwKSAtICh4IDwgMCkgfHwgK3g7IH07XG52YXIgbWF0aFNpZ24gPSBNYXRoLnNpZ24gfHwgcG9seWZpbGw7XG5cbmZ1bmN0aW9uIGdldEdlb21ldHJ5KHRhcmdldCwgaXNDb250YWluZXIpIHtcblx0LyoqXG5cdCAqIFdlIHdhbnQgdG8gaWdub3JlIHBhZGRpbmcgYW5kIHNjcm9sbGJhcnMgZm9yIGNvbnRhaW5lciBlbGVtZW50cy5cblx0ICogTW9yZSBpbmZvcm1hdGlvbiBoZXJlOiBodHRwczovL2dvby5nbC92T1pwYnpcblx0ICovXG5cdHZhciBoZWlnaHQgPSBpc0NvbnRhaW5lciA/IHRhcmdldC5ub2RlLmNsaWVudEhlaWdodCA6IHRhcmdldC5ub2RlLm9mZnNldEhlaWdodDtcblx0dmFyIHdpZHRoID0gaXNDb250YWluZXIgPyB0YXJnZXQubm9kZS5jbGllbnRXaWR0aCA6IHRhcmdldC5ub2RlLm9mZnNldFdpZHRoO1xuXG5cdHZhciBvZmZzZXRUb3AgPSAwO1xuXHR2YXIgb2Zmc2V0TGVmdCA9IDA7XG5cdHZhciBub2RlID0gdGFyZ2V0Lm5vZGU7XG5cblx0ZG8ge1xuXHRcdGlmICghaXNOYU4obm9kZS5vZmZzZXRUb3ApKSB7XG5cdFx0XHRvZmZzZXRUb3AgKz0gbm9kZS5vZmZzZXRUb3A7XG5cdFx0fVxuXHRcdGlmICghaXNOYU4obm9kZS5vZmZzZXRMZWZ0KSkge1xuXHRcdFx0b2Zmc2V0TGVmdCArPSBub2RlLm9mZnNldExlZnQ7XG5cdFx0fVxuXHRcdG5vZGUgPSBub2RlLm9mZnNldFBhcmVudDtcblx0fSB3aGlsZSAobm9kZSlcblxuXHRyZXR1cm4ge1xuXHRcdGJvdW5kczoge1xuXHRcdFx0dG9wOiBvZmZzZXRUb3AsXG5cdFx0XHRyaWdodDogb2Zmc2V0TGVmdCArIHdpZHRoLFxuXHRcdFx0Ym90dG9tOiBvZmZzZXRUb3AgKyBoZWlnaHQsXG5cdFx0XHRsZWZ0OiBvZmZzZXRMZWZ0XG5cdFx0fSxcblx0XHRoZWlnaHQ6IGhlaWdodCxcblx0XHR3aWR0aDogd2lkdGhcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxlZChjb250YWluZXIpIHtcblx0dmFyIHRvcCwgbGVmdDtcblx0aWYgKGNvbnRhaW5lci5ub2RlID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcblx0XHR0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0bGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldDtcblx0fSBlbHNlIHtcblx0XHR0b3AgPSBjb250YWluZXIubm9kZS5zY3JvbGxUb3A7XG5cdFx0bGVmdCA9IGNvbnRhaW5lci5ub2RlLnNjcm9sbExlZnQ7XG5cdH1cblx0cmV0dXJuIHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfVxufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnRWaXNpYmxlKGVsZW1lbnQpIHtcblx0aWYgKCBlbGVtZW50ID09PSB2b2lkIDAgKSBlbGVtZW50ID0ge307XG5cblx0dmFyIGNvbnRhaW5lciA9IHRoaXMuc3RvcmUuY29udGFpbmVyc1tlbGVtZW50LmNvbnRhaW5lcklkXTtcblx0aWYgKCFjb250YWluZXIpIHsgcmV0dXJuIH1cblxuXHR2YXIgdmlld0ZhY3RvciA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGVsZW1lbnQuY29uZmlnLnZpZXdGYWN0b3IpKTtcblx0dmFyIHZpZXdPZmZzZXQgPSBlbGVtZW50LmNvbmZpZy52aWV3T2Zmc2V0O1xuXG5cdHZhciBlbGVtZW50Qm91bmRzID0ge1xuXHRcdHRvcDogZWxlbWVudC5nZW9tZXRyeS5ib3VuZHMudG9wICsgZWxlbWVudC5nZW9tZXRyeS5oZWlnaHQgKiB2aWV3RmFjdG9yLFxuXHRcdHJpZ2h0OiBlbGVtZW50Lmdlb21ldHJ5LmJvdW5kcy5yaWdodCAtIGVsZW1lbnQuZ2VvbWV0cnkud2lkdGggKiB2aWV3RmFjdG9yLFxuXHRcdGJvdHRvbTogZWxlbWVudC5nZW9tZXRyeS5ib3VuZHMuYm90dG9tIC0gZWxlbWVudC5nZW9tZXRyeS5oZWlnaHQgKiB2aWV3RmFjdG9yLFxuXHRcdGxlZnQ6IGVsZW1lbnQuZ2VvbWV0cnkuYm91bmRzLmxlZnQgKyBlbGVtZW50Lmdlb21ldHJ5LndpZHRoICogdmlld0ZhY3RvclxuXHR9O1xuXG5cdHZhciBjb250YWluZXJCb3VuZHMgPSB7XG5cdFx0dG9wOiBjb250YWluZXIuZ2VvbWV0cnkuYm91bmRzLnRvcCArIGNvbnRhaW5lci5zY3JvbGwudG9wICsgdmlld09mZnNldC50b3AsXG5cdFx0cmlnaHQ6IGNvbnRhaW5lci5nZW9tZXRyeS5ib3VuZHMucmlnaHQgKyBjb250YWluZXIuc2Nyb2xsLmxlZnQgLSB2aWV3T2Zmc2V0LnJpZ2h0LFxuXHRcdGJvdHRvbTpcblx0XHRcdGNvbnRhaW5lci5nZW9tZXRyeS5ib3VuZHMuYm90dG9tICsgY29udGFpbmVyLnNjcm9sbC50b3AgLSB2aWV3T2Zmc2V0LmJvdHRvbSxcblx0XHRsZWZ0OiBjb250YWluZXIuZ2VvbWV0cnkuYm91bmRzLmxlZnQgKyBjb250YWluZXIuc2Nyb2xsLmxlZnQgKyB2aWV3T2Zmc2V0LmxlZnRcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdChlbGVtZW50Qm91bmRzLnRvcCA8IGNvbnRhaW5lckJvdW5kcy5ib3R0b20gJiZcblx0XHRcdGVsZW1lbnRCb3VuZHMucmlnaHQgPiBjb250YWluZXJCb3VuZHMubGVmdCAmJlxuXHRcdFx0ZWxlbWVudEJvdW5kcy5ib3R0b20gPiBjb250YWluZXJCb3VuZHMudG9wICYmXG5cdFx0XHRlbGVtZW50Qm91bmRzLmxlZnQgPCBjb250YWluZXJCb3VuZHMucmlnaHQpIHx8XG5cdFx0ZWxlbWVudC5zdHlsZXMucG9zaXRpb24gPT09ICdmaXhlZCdcblx0KVxufVxuXG5mdW5jdGlvbiBkZWxlZ2F0ZShcblx0ZXZlbnQsXG5cdGVsZW1lbnRzXG4pIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cdGlmICggZXZlbnQgPT09IHZvaWQgMCApIGV2ZW50ID0geyB0eXBlOiAnaW5pdCcgfTtcblx0aWYgKCBlbGVtZW50cyA9PT0gdm9pZCAwICkgZWxlbWVudHMgPSB0aGlzLnN0b3JlLmVsZW1lbnRzO1xuXG5cdHJhZihmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHN0YWxlID0gZXZlbnQudHlwZSA9PT0gJ2luaXQnIHx8IGV2ZW50LnR5cGUgPT09ICdyZXNpemUnO1xuXG5cdFx0ZWFjaCh0aGlzJDEuc3RvcmUuY29udGFpbmVycywgZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuXHRcdFx0aWYgKHN0YWxlKSB7XG5cdFx0XHRcdGNvbnRhaW5lci5nZW9tZXRyeSA9IGdldEdlb21ldHJ5LmNhbGwodGhpcyQxLCBjb250YWluZXIsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHNjcm9sbCA9IGdldFNjcm9sbGVkLmNhbGwodGhpcyQxLCBjb250YWluZXIpO1xuXHRcdFx0aWYgKGNvbnRhaW5lci5zY3JvbGwpIHtcblx0XHRcdFx0Y29udGFpbmVyLmRpcmVjdGlvbiA9IHtcblx0XHRcdFx0XHR4OiBtYXRoU2lnbihzY3JvbGwubGVmdCAtIGNvbnRhaW5lci5zY3JvbGwubGVmdCksXG5cdFx0XHRcdFx0eTogbWF0aFNpZ24oc2Nyb2xsLnRvcCAtIGNvbnRhaW5lci5zY3JvbGwudG9wKVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Y29udGFpbmVyLnNjcm9sbCA9IHNjcm9sbDtcblx0XHR9KTtcblxuXHRcdC8qKlxuXHRcdCAqIER1ZSB0byBob3cgdGhlIHNlcXVlbmNlciBpcyBpbXBsZW1lbnRlZCwgaXTigJlzXG5cdFx0ICogaW1wb3J0YW50IHRoYXQgd2UgdXBkYXRlIHRoZSBzdGF0ZSBvZiBhbGxcblx0XHQgKiBlbGVtZW50cywgYmVmb3JlIGFueSBhbmltYXRpb24gbG9naWMgaXNcblx0XHQgKiBldmFsdWF0ZWQgKGluIHRoZSBzZWNvbmQgbG9vcCBiZWxvdykuXG5cdFx0ICovXG5cdFx0ZWFjaChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdGlmIChzdGFsZSB8fCBlbGVtZW50Lmdlb21ldHJ5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZWxlbWVudC5nZW9tZXRyeSA9IGdldEdlb21ldHJ5LmNhbGwodGhpcyQxLCBlbGVtZW50KTtcblx0XHRcdH1cblx0XHRcdGVsZW1lbnQudmlzaWJsZSA9IGlzRWxlbWVudFZpc2libGUuY2FsbCh0aGlzJDEsIGVsZW1lbnQpO1xuXHRcdH0pO1xuXG5cdFx0ZWFjaChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdGlmIChlbGVtZW50LnNlcXVlbmNlKSB7XG5cdFx0XHRcdHNlcXVlbmNlLmNhbGwodGhpcyQxLCBlbGVtZW50KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFuaW1hdGUuY2FsbCh0aGlzJDEsIGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcyQxLnByaXN0aW5lID0gZmFsc2U7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpc1RyYW5zZm9ybVN1cHBvcnRlZCgpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXHRyZXR1cm4gJ3RyYW5zZm9ybScgaW4gc3R5bGUgfHwgJ1dlYmtpdFRyYW5zZm9ybScgaW4gc3R5bGVcbn1cblxuZnVuY3Rpb24gaXNUcmFuc2l0aW9uU3VwcG9ydGVkKCkge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cdHJldHVybiAndHJhbnNpdGlvbicgaW4gc3R5bGUgfHwgJ1dlYmtpdFRyYW5zaXRpb24nIGluIHN0eWxlXG59XG5cbnZhciB2ZXJzaW9uID0gXCI0LjAuOVwiO1xuXG52YXIgYm91bmREZWxlZ2F0ZTtcbnZhciBib3VuZERlc3Ryb3k7XG52YXIgYm91bmRSZXZlYWw7XG52YXIgYm91bmRDbGVhbjtcbnZhciBib3VuZFN5bmM7XG52YXIgY29uZmlnO1xudmFyIGRlYnVnO1xudmFyIGluc3RhbmNlO1xuXG5mdW5jdGlvbiBTY3JvbGxSZXZlYWwob3B0aW9ucykge1xuXHRpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuXHR2YXIgaW52b2tlZFdpdGhvdXROZXcgPVxuXHRcdHR5cGVvZiB0aGlzID09PSAndW5kZWZpbmVkJyB8fFxuXHRcdE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSAhPT0gU2Nyb2xsUmV2ZWFsLnByb3RvdHlwZTtcblxuXHRpZiAoaW52b2tlZFdpdGhvdXROZXcpIHtcblx0XHRyZXR1cm4gbmV3IFNjcm9sbFJldmVhbChvcHRpb25zKVxuXHR9XG5cblx0aWYgKCFTY3JvbGxSZXZlYWwuaXNTdXBwb3J0ZWQoKSkge1xuXHRcdGxvZ2dlci5jYWxsKHRoaXMsICdJbnN0YW50aWF0aW9uIGZhaWxlZC4nLCAnVGhpcyBicm93c2VyIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG5cdFx0cmV0dXJuIG1vdW50LmZhaWx1cmUoKVxuXHR9XG5cblx0dmFyIGJ1ZmZlcjtcblx0dHJ5IHtcblx0XHRidWZmZXIgPSBjb25maWdcblx0XHRcdD8gZGVlcEFzc2lnbih7fSwgY29uZmlnLCBvcHRpb25zKVxuXHRcdFx0OiBkZWVwQXNzaWduKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRsb2dnZXIuY2FsbCh0aGlzLCAnSW52YWxpZCBjb25maWd1cmF0aW9uLicsIGUubWVzc2FnZSk7XG5cdFx0cmV0dXJuIG1vdW50LmZhaWx1cmUoKVxuXHR9XG5cblx0dHJ5IHtcblx0XHR2YXIgY29udGFpbmVyID0gJChidWZmZXIuY29udGFpbmVyKVswXTtcblx0XHRpZiAoIWNvbnRhaW5lcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvbnRhaW5lci4nKVxuXHRcdH1cblx0fSBjYXRjaCAoZSkge1xuXHRcdGxvZ2dlci5jYWxsKHRoaXMsIGUubWVzc2FnZSk7XG5cdFx0cmV0dXJuIG1vdW50LmZhaWx1cmUoKVxuXHR9XG5cblx0Y29uZmlnID0gYnVmZmVyO1xuXG5cdGlmICgoIWNvbmZpZy5tb2JpbGUgJiYgaXNNb2JpbGUoKSkgfHwgKCFjb25maWcuZGVza3RvcCAmJiAhaXNNb2JpbGUoKSkpIHtcblx0XHRsb2dnZXIuY2FsbChcblx0XHRcdHRoaXMsXG5cdFx0XHQnVGhpcyBkZXZpY2UgaXMgZGlzYWJsZWQuJyxcblx0XHRcdChcImRlc2t0b3A6IFwiICsgKGNvbmZpZy5kZXNrdG9wKSksXG5cdFx0XHQoXCJtb2JpbGU6IFwiICsgKGNvbmZpZy5tb2JpbGUpKVxuXHRcdCk7XG5cdFx0cmV0dXJuIG1vdW50LmZhaWx1cmUoKVxuXHR9XG5cblx0bW91bnQuc3VjY2VzcygpO1xuXG5cdHRoaXMuc3RvcmUgPSB7XG5cdFx0Y29udGFpbmVyczoge30sXG5cdFx0ZWxlbWVudHM6IHt9LFxuXHRcdGhpc3Rvcnk6IFtdLFxuXHRcdHNlcXVlbmNlczoge31cblx0fTtcblxuXHR0aGlzLnByaXN0aW5lID0gdHJ1ZTtcblxuXHRib3VuZERlbGVnYXRlID0gYm91bmREZWxlZ2F0ZSB8fCBkZWxlZ2F0ZS5iaW5kKHRoaXMpO1xuXHRib3VuZERlc3Ryb3kgPSBib3VuZERlc3Ryb3kgfHwgZGVzdHJveS5iaW5kKHRoaXMpO1xuXHRib3VuZFJldmVhbCA9IGJvdW5kUmV2ZWFsIHx8IHJldmVhbC5iaW5kKHRoaXMpO1xuXHRib3VuZENsZWFuID0gYm91bmRDbGVhbiB8fCBjbGVhbi5iaW5kKHRoaXMpO1xuXHRib3VuZFN5bmMgPSBib3VuZFN5bmMgfHwgc3luYy5iaW5kKHRoaXMpO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnZGVsZWdhdGUnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm91bmREZWxlZ2F0ZTsgfSB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdkZXN0cm95JywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJvdW5kRGVzdHJveTsgfSB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdyZXZlYWwnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm91bmRSZXZlYWw7IH0gfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnY2xlYW4nLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm91bmRDbGVhbjsgfSB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzeW5jJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJvdW5kU3luYzsgfSB9KTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2RlZmF1bHRzJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbmZpZzsgfSB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd2ZXJzaW9uJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZlcnNpb247IH0gfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbm9vcCcsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSB9KTtcblxuXHRyZXR1cm4gaW5zdGFuY2UgPyBpbnN0YW5jZSA6IChpbnN0YW5jZSA9IHRoaXMpXG59XG5cblNjcm9sbFJldmVhbC5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlzVHJhbnNmb3JtU3VwcG9ydGVkKCkgJiYgaXNUcmFuc2l0aW9uU3VwcG9ydGVkKCk7IH07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTY3JvbGxSZXZlYWwsICdkZWJ1ZycsIHtcblx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWJ1ZyB8fCBmYWxzZTsgfSxcblx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIChkZWJ1ZyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nID8gdmFsdWUgOiBkZWJ1Zyk7IH1cbn0pO1xuXG5TY3JvbGxSZXZlYWwoKTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsUmV2ZWFsO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qISBAbGljZW5zZSBUZWFsaWdodCB2MC4zLjZcblxuXHRDb3B5cmlnaHQgMjAxOCBGaXNzc2lvbiBMTEMuXG5cblx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRTT0ZUV0FSRS5cblxuKi9cbmltcG9ydCBpc0RvbU5vZGUgZnJvbSAnaXMtZG9tLW5vZGUnO1xuaW1wb3J0IGlzRG9tTm9kZUxpc3QgZnJvbSAnaXMtZG9tLW5vZGUtbGlzdCc7XG5cbmZ1bmN0aW9uIHRlYWxpZ2h0KHRhcmdldCwgY29udGV4dCkge1xuICBpZiAoIGNvbnRleHQgPT09IHZvaWQgMCApIGNvbnRleHQgPSBkb2N1bWVudDtcblxuICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHsgcmV0dXJuIHRhcmdldC5maWx0ZXIoaXNEb21Ob2RlKTsgfVxuICBpZiAoaXNEb21Ob2RlKHRhcmdldCkpIHsgcmV0dXJuIFt0YXJnZXRdOyB9XG4gIGlmIChpc0RvbU5vZGVMaXN0KHRhcmdldCkpIHsgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldCk7IH1cbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHF1ZXJ5ID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCk7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocXVlcnkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRlYWxpZ2h0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4vaW5kZXguaHRtbFwiO1xyXG5pbXBvcnQgU2Nyb2xsUmV2ZWFsIGZyb20gXCJzY3JvbGxyZXZlYWxcIjtcclxuXHJcbmNvbnN0IHNob3dNZW51ID0gKHRvZ2dsZUlkLCBuYXZJZCkgPT4ge1xyXG4gIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZ2dsZUlkKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYXZJZCk7XHJcblxyXG4gIGlmICh0b2dnbGUgJiYgbmF2KSB7XHJcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5zaG93TWVudShcIm5hdi10b2dnbGVcIiwgXCJuYXYtbWVudVwiKTtcclxuXHJcbi8vIENsb3NlIG1lbnUsIG1vYmlsZS5cclxuY29uc3QgbmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtcIik7XHJcblxyXG5mdW5jdGlvbiBsaW5rQWN0aW9uKCkge1xyXG4gIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1tZW51XCIpO1xyXG4gIG5hdk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbn1cclxubmF2TGluay5mb3JFYWNoKChlbCkgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxpbmtBY3Rpb24pKTtcclxuXHJcbi8vIFNjcm9sbCBzZWN0aW9ucyBhY3RpdmUgbGluay5cclxuY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvbltpZF1cIik7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEFjdGl2ZSk7XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxBY3RpdmUoKSB7XHJcbiAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICBzZWN0aW9ucy5mb3JFYWNoKChjdXJyZW50KSA9PiB7XHJcbiAgICBjb25zdCBzZWN0aW9uSGVpZ2h0ID0gY3VycmVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBjb25zdCBzZWN0aW9uVG9wID0gY3VycmVudC5vZmZzZXRUb3AgLSA1MDtcclxuICAgIGNvbnN0IHNlY3Rpb25JZCA9IGN1cnJlbnQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcblxyXG4gICAgaWYgKHNjcm9sbFkgPiBzZWN0aW9uVG9wICYmIHNjcm9sbFkgPD0gc2VjdGlvbkhlaWdodCArIHNlY3Rpb25Ub3ApIHtcclxuICAgICAgLy8gTWF0Y2ggaHJlZiB3aXRoIC5uYXYtbWVudSBhbmNlc3RvciwgY29udGFpbmluZyBzZWN0aW9uSWQuXHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIubmF2LW1lbnUgYVtocmVmKj1cIiArIHNlY3Rpb25JZCArIFwiXVwiKVxyXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5uYXYtbWVudSBhW2hyZWYqPVwiICsgc2VjdGlvbklkICsgXCJdXCIpXHJcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHNyID0gU2Nyb2xsUmV2ZWFsKHtcclxuICBvcmlnaW46IFwidG9wXCIsXHJcbiAgZGlzdGFuY2U6IFwiODBweFwiLFxyXG4gIGR1cmF0aW9uOiAyMDAwLFxyXG4gIHJlc2V0OiB0cnVlLFxyXG59KTtcclxuXHJcbnNyLnJldmVhbChcIi5ob21lLXRpdGxlXCIsIHt9KTtcclxuc3IucmV2ZWFsKFwiLmhvbWUtc2Nyb2xsXCIsIHsgZGVsYXk6IDQwMCB9KTtcclxuc3IucmV2ZWFsKFwiLmhvbWUtaW1nXCIsIHsgb3JpZ2luOiBcInJpZ2h0XCIsIGRlbGF5OiA2MDAgfSk7XHJcblxyXG5zci5yZXZlYWwoXCIuYWJvdXQtaW1nXCIsIHsgb3JpZ2luOiBcImxlZnRcIiwgZGVsYXk6IDQwMCB9KTtcclxuc3IucmV2ZWFsKFwiLmFib3V0LXN1YnRpdGxlXCIsIHsgZGVsYXk6IDMwMCB9KTtcclxuc3IucmV2ZWFsKFwiLmFib3V0LXByb2ZcIiwgeyBkZWxheTogNDAwIH0pO1xyXG5zci5yZXZlYWwoXCIuYWJvdXQtdGV4dFwiLCB7IGRlbGF5OiA1MDAgfSk7XHJcbnNyLnJldmVhbChcIi5hYm91dC1zb2NpYWwtaWNvblwiLCB7IGRlbGF5OiA2MDAsIGludGVydmFsOiAzMDAgfSk7XHJcblxyXG5zci5yZXZlYWwoXCIucHJvamVjdC1pbWdcIiwgeyBkZWxheTogMjAwLCBpbnRlcnZhbDogNTAwIH0pO1xyXG5cclxuc3IucmV2ZWFsKFwiLnNraWxscy1zdWJ0aXRsZVwiLCB7fSk7XHJcbnNyLnJldmVhbChcIi5za2lsbHMtbmFtZVwiLCB7IGRlbGF5OiAxNTAsIGRpc3RhbmNlOiBcIjIwcHhcIiwgaW50ZXJ2YWw6IDE1MCB9KTtcclxuc3IucmV2ZWFsKFwiLnNraWxscy1pbWdcIiwgeyBvcmlnaW46IFwibGVmdFwiLCBkZWxheTogNTAwIH0pO1xyXG5cclxuc3IucmV2ZWFsKFwiLmNvbnRhY3Qtc3VidGl0bGVcIiwge30pO1xyXG5zci5yZXZlYWwoXCIuY29udGFjdC10ZXh0XCIsIHsgaW50ZXJ2YWw6IDMwMCB9KTtcclxuc3IucmV2ZWFsKFwiLmNvbnRhY3QtaW5wdXRcIiwgeyBkZWxheTogNDAwIH0pO1xyXG5zci5yZXZlYWwoXCIuY29udGFjdC1idXR0b25cIiwgeyBpbnRlcnZhbDogMzAwIH0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=