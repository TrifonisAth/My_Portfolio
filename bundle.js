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
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\r\n    <link\r\n      href=\"https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css\"\r\n      rel=\"stylesheet\"\r\n    />\r\n    <title>Thanos Trifonis</title>\r\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" defer><" + "/script>\r\n  </head>\r\n  <body>\r\n    <header class=\"l-header\">\r\n      <nav class=\"nav bd-grid\">\r\n        <div><a href=\"#\" class=\"nav-logo\">Thanos Trifonis</a></div>\r\n        <div class=\"nav-menu\" id=\"nav-menu\">\r\n          <ul class=\"nav-list\">\r\n            <li class=\"nav-item\">\r\n              <a href=\"#home\" class=\"nav-link active\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a href=\"#about\" class=\"nav-link\">About Me</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a href=\"#projects\" class=\"nav-link\">Projects</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a href=\"#skills\" class=\"nav-link\">Skills</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a href=\"#contact\" class=\"nav-link\">Contact</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"nav-toggle\" id=\"nav-toggle\">\r\n          <i class=\"bx bx-menu\"></i>\r\n        </div>\r\n      </nav>\r\n    </header>\r\n    <main class=\"l-main\">\r\n      <section class=\"home\" id=\"home\">\r\n        <div class=\"home-container bd-grid\">\r\n          <h1 class=\"home-title\"><span>Welcome</span><br />kind visitor!</h1>\r\n          <div class=\"home-scroll\">\r\n            <a href=\"#about\" class=\"home-scroll-link\"\r\n              ><i class=\"bx bx-up-arrow-alt\">Scroll down</i></a\r\n            >\r\n          </div>\r\n          <img\r\n            src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n            alt=\"arrow down\"\r\n            class=\"home-img\"\r\n          />\r\n        </div>\r\n      </section>\r\n      <section class=\"about section\" id=\"about\">\r\n        <h2 class=\"section-title\">About Me</h2>\r\n        <div class=\"about-container bd-grid\">\r\n          <div class=\"about-img\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"profile picture\" />\r\n          </div>\r\n          <div>\r\n            <h2 class=\"about-subtitle\">My name is Thanos Trifonis</h2>\r\n            <span class=\"about-prof\">Software Engineer</span>\r\n            <p class=\"about-text\">\r\n              I'm a computer science student who loves utilizing programming to\r\n              solve problems. Currently i practice web development.\r\n            </p>\r\n            <p class=\"about-text\">\r\n              This is my 3<sup>rd</sup> year in Computer Science department at\r\n              Athens University of Economics and Business.<br />\r\n              You can check me out at GitHub and LinkedIn below.\r\n            </p>\r\n            <div class=\"about-social\">\r\n              <a\r\n                href=\"https://www.linkedin.com/in/thanos-trifonis/\"\r\n                class=\"about-social-icon\"\r\n                ><i class=\"bx bxl-linkedin bx-lg\" style=\"color: #0072b1\"></i></a\r\n              ><a\r\n                href=\"https://github.com/TrifonisAth\"\r\n                class=\"about-social-icon\"\r\n                ><i class=\"bx bxl-github bx-lg\" style=\"color: #333333\"></i\r\n              ></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"projects section\" id=\"projects\">\r\n        <h2 class=\"section-title\">Projects</h2>\r\n        <div class=\"projects-container bd-grid\">\r\n          <div class=\"project-img\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" />\r\n            <div class=\"project-link\">\r\n              <a\r\n                href=\"https://trifonisath.github.io/ToDo_List/\"\r\n                class=\"project-link-name\"\r\n                >ToDo app live demo</a\r\n              >\r\n            </div>\r\n          </div>\r\n          <div class=\"project-img\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"project image\" />\r\n            <div class=\"project-link\">\r\n              <a\r\n                href=\"https://trifonisath.github.io/TicTacToe/\"\r\n                class=\"project-link-name\"\r\n                >Tic Tac Toe live demo</a\r\n              >\r\n            </div>\r\n          </div>\r\n          <div class=\"project-img\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"project image\" />\r\n            <div class=\"project-link\">\r\n              <a\r\n                href=\"https://github.com/TrifonisAth/University_Projects\"\r\n                class=\"project-link-name\"\r\n                >University Projects Repo</a\r\n              >\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"skills section\" id=\"skills\">\r\n        <h2 class=\"section-title\">Skills</h2>\r\n        <div class=\"skills-container bd-grid\">\r\n          <div class=\"skills-box\">\r\n            <h3 class=\"skills-subtitle\">Languages and Technologies</h3>\r\n            <span class=\"skills-name\">JavaScript</span\r\n            ><span class=\"skills-name\">HTML</span\r\n            ><span class=\"skills-name\">CSS</span\r\n            ><span class=\"skills-name\">Python</span\r\n            ><span class=\"skills-name\">Java</span\r\n            ><span class=\"skills-name\">BootStrap</span\r\n            ><span class=\"skills-name\">PostgreSQL</span\r\n            ><span class=\"skills-name\">Sass</span>\r\n            <div class=\"skills-img\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"picture\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      <section class=\"contact section\" id=\"contact\">\r\n        <h2 class=\"section-title\">Contact</h2>\r\n        <div class=\"contact-container bd-grid\">\r\n          <div class=\"contact-info\">\r\n            <h3 class=\"contact-subtitle\">Address</h3>\r\n            <span class=\"contact-text\">Athens, Greece</span>\r\n            <h3 class=\"contact-subtitle\">Email</h3>\r\n            <span class=\"contact-text\">ath.trifonis@gmail.com</span>\r\n          </div>\r\n          <form action=\"\" class=\"contact-form\">\r\n            <div class=\"contact-inputs\">\r\n              <input type=\"text\" class=\"contact-input\" placeholder=\"Name\" />\r\n              <input\r\n                type=\"mail\"\r\n                class=\"contact-input\"\r\n                placeholder=\"Email\"\r\n                required\r\n              />\r\n            </div>\r\n            <textarea\r\n              name=\"\"\r\n              id=\"\"\r\n              cols=\"0\"\r\n              rows=\"10\"\r\n              class=\"contact-input\"\r\n            ></textarea>\r\n            <input type=\"submit\" class=\"contact-button\" value=\"Submit\" />\r\n          </form>\r\n        </div>\r\n      </section>\r\n    </main>\r\n    <footer class=\"footer section\">\r\n      <div class=\"footer-container bd-grid\">\r\n        <div class=\"footer-data\">\r\n          <h2 class=\"footer-title\">Thanos Trifonis</h2>\r\n          <p class=\"footer-text\">\r\n            I'm Thanos Trifonis and this is my portfolio.\r\n          </p>\r\n        </div>\r\n        <div class=\"footer-data\">\r\n          <h2 class=\"footer-title\">Explore</h2>\r\n          <ul>\r\n            <li><a href=\"#home\" class=\"footer-link\">Home</a></li>\r\n            <li><a href=\"#about\" class=\"footer-link\">About Me</a></li>\r\n            <li><a href=\"#projects\" class=\"footer-link\">Projects</a></li>\r\n            <li><a href=\"#skills\" class=\"footer-link\">Skilss</a></li>\r\n            <li><a href=\"#contact\" class=\"footer-link\">Contact</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </body>\r\n</html>\r\n";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBZ0IsMEJBQTBCLDJCQUEyQixPQUFPLEtBQUssV0FBVyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxRQUFRLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHNDQUFzQztBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrQ0FBa0M7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBLENBQUMsbURBQUc7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isb0RBQUM7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxtQkFBbUIseUJBQXlCO0FBQ3ZGLDBDQUEwQyxtQkFBbUIsd0JBQXdCO0FBQ3JGLHlDQUF5QyxtQkFBbUIsdUJBQXVCO0FBQ25GLHdDQUF3QyxtQkFBbUIsc0JBQXNCO0FBQ2pGLHVDQUF1QyxtQkFBbUIscUJBQXFCOztBQUUvRSwyQ0FBMkMsbUJBQW1CLGtCQUFrQjtBQUNoRiwwQ0FBMEMsbUJBQW1CLG1CQUFtQjtBQUNoRix1Q0FBdUMsbUJBQW1CLGlCQUFpQjs7QUFFM0U7QUFDQTs7QUFFQSx5Q0FBeUM7O0FBRXpDO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1Qyx5QkFBeUI7QUFDekIsQ0FBQzs7QUFFRDs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaHFDNUIsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNvQztBQUNTOztBQUU3QztBQUNBOztBQUVBLGlDQUFpQyxxQkFBcUIsbURBQVM7QUFDL0QsTUFBTSx1REFBUyxZQUFZO0FBQzNCLE1BQU0sNERBQWEsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0N4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0M7QUFDa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsd0RBQVk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkI7QUFDM0IsNEJBQTRCLFlBQVk7QUFDeEMseUJBQXlCLDZCQUE2QjtBQUN0RDtBQUNBLDBCQUEwQiw0QkFBNEI7QUFDdEQsK0JBQStCLFlBQVk7QUFDM0MsMkJBQTJCLFlBQVk7QUFDdkMsMkJBQTJCLFlBQVk7QUFDdkMsa0NBQWtDLDJCQUEyQjtBQUM3RDtBQUNBLDRCQUE0QiwyQkFBMkI7QUFDdkQ7QUFDQSxnQ0FBZ0M7QUFDaEMsNEJBQTRCLDZDQUE2QztBQUN6RSwyQkFBMkIsNEJBQTRCO0FBQ3ZEO0FBQ0EsaUNBQWlDO0FBQ2pDLDZCQUE2QixlQUFlO0FBQzVDLDhCQUE4QixZQUFZO0FBQzFDLCtCQUErQixlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9pcy1kb20tbm9kZS1saXN0L2Rpc3QvaXMtZG9tLW5vZGUtbGlzdC5lcy5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvaXMtZG9tLW5vZGUvZGlzdC9pcy1kb20tbm9kZS5lcy5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbWluaXJhZi9kaXN0L21pbmlyYWYuZXMuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3JlbWF0cml4L2Rpc3QvcmVtYXRyaXguZXMuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3Njcm9sbHJldmVhbC9kaXN0L3Njcm9sbHJldmVhbC5lcy5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvdGVhbGlnaHQvZGlzdC90ZWFsaWdodC5lcy5qcyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215X3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215X3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teV9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215X3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0taGVhZGVyLWhlaWdodDogM3JlbTtcXHJcXG4gIC0tZm9udC1tZWRpdW06IDUwMDtcXHJcXG4gIC0tYmFzaWMtY29sb3I6ICM1MzYxZmY7XFxyXFxuICAtLWRhcmstY29sb3I6ICMyYTNiNDc7XFxyXFxuICAtLXdoaXRlLWNvbG9yOiAjZmFmYWZmO1xcclxcbiAgLS10ZXh0LWNvbG9yOiAjNjk3NDc3O1xcclxcbiAgLS1ib2R5LWZvbnQ6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1iaWctZm9udC1zaXplOiA0cmVtO1xcclxcbiAgLS1tZWRpdW0tZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAtLW5vcm1hbC1mb250LXNpemU6IDFyZW07XFxyXFxuICAtLXNtYWxsLWZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgLS1tYi0xOiAwLjVyZW07XFxyXFxuICAtLW1iLTI6IDFyZW07XFxyXFxuICAtLW1iLTM6IDEuNXJlbTtcXHJcXG4gIC0tbWItNDogMnJlbTtcXHJcXG4gIC0tbWItNTogMi41cmVtO1xcclxcbiAgLS16LWZpeGVkOiAxMDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICA6cm9vdCB7XFxyXFxuICAgIC0tYmlnLWZvbnQtc2l6ZTogNi4yNXJlbTtcXHJcXG4gICAgLS1tZWRpdW0tZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIC0tbm9ybWFsLWZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgLS1zbWFsbC1mb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG46OmJlZm9yZSxcXHJcXG46OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiB2YXIoLS1oZWFkZXItaGVpZ2h0KSAwIDAgMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LW1lZGl1bSk7XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5wLFxcclxcbnVsIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDNyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luOiB2YXIoLS1tYi00KSAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tZWRpdW0tZm9udC1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGU6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgd2lkdGg6IDMycHg7XFxyXFxuICBoZWlnaHQ6IDAuMThyZW07XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNpYy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5iZC1ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBtYXgtd2lkdGg6IDEwMjRweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXHJcXG4gIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYi0yKTtcXHJcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbWItMik7XFxyXFxufVxcclxcblxcclxcbi5sLWhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiB2YXIoLS16LWZpeGVkKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubmF2LW1lbnUge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxyXFxuICAgIHJpZ2h0OiAtMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1iLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbms6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sb2dvIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3cge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmU6OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDAuMnJlbTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDEuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXHJcXG4gIHJvdy1nYXA6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRpdGxlIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1iaWctZm9udC1zaXplKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBsaW5lLWhlaWdodDogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10aXRsZSBzcGFuIHtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDIwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5ob21lLXNjcm9sbCB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1tYi00KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtc2Nyb2xsLWxpbmsge1xcclxcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDI4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaW1nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWcgaW1nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICByb3ctZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtc3VidGl0bGUge1xcclxcbiAgY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbWVkaXVtLWZvbnQtc2l6ZSk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXByb2Yge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItNCk7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItNCk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1zb2NpYWwtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIG1hcmdpbjogMCB2YXIoLS1tYi0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxscy1jb250YWluZXIge1xcclxcbiAgcm93LWdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxscy1zdWJ0aXRsZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFzaWMtY29sb3IpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItMyk7XFxyXFxufVxcclxcblxcclxcbi5za2lsbHMtbmFtZSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQtc2l6ZSk7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1iLTIpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItMyk7XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5za2lsbHMtbmFtZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNpYy1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGxzLWltZyBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXHJcXG4gIHJvdy1nYXA6IDJyZW07XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWltZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pbWcgaW1nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGluayB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IC0xMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaW1nOmhvdmVyIC5wcm9qZWN0LWxpbmsge1xcclxcbiAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saW5rLW5hbWUge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tZWRpdW0tZm9udC1zaXplKTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gIHJvdy1nYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXN1YnRpdGxlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYXNpYy1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC10ZXh0IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1iLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbnB1dHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAwLjhyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi00KTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxyXFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWRhcmstY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1idXR0b24ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNpYy1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMC43NXJlbSAyLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXIge1xcclxcbiAgcm93LWdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci10aXRsZSB7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1iLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxpbmsge1xcclxcbiAgcGFkZGluZzogMC4yNXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxpbms6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VjdGlvbiB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlY3Rpb24tdGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlY3Rpb24tdGl0bGU6OmFmdGVyIHtcXHJcXG4gICAgd2lkdGg6IDY0cHg7XFxyXFxuICAgIHRvcDogM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYge1xcclxcbiAgICBoZWlnaHQ6IGNhbGModmFyKGhlYWRlci1oZWlnaHQpICsgMXJlbSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1iLTQpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi10b2dnbGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGluazpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWN0aXZlOjphZnRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ob21lLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS43ZnIgMWZyO1xcclxcbiAgICByb3ctZ2FwOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWUtaW1nIHtcXHJcXG4gICAgd2lkdGg6IDUyNHB4O1xcclxcbiAgICByaWdodDogMTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGluaXRpYWw7XFxyXFxuICAgIHBhZGRpbmc6IDRyZW0gMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC1pbWcge1xcclxcbiAgICB3aWR0aDogMTgwcHg7XFxyXFxuICAgIGhlaWdodDogMTgwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtaW1nIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNjVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5za2lsbHMtY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QtZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAzODBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXItY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gIC5iZC1ncmlkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qix5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7RUFJRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVB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LHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxQ0FBcUM7SUFDckMscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1oZWFkZXItaGVpZ2h0OiAzcmVtO1xcclxcbiAgLS1mb250LW1lZGl1bTogNTAwO1xcclxcbiAgLS1iYXNpYy1jb2xvcjogIzUzNjFmZjtcXHJcXG4gIC0tZGFyay1jb2xvcjogIzJhM2I0NztcXHJcXG4gIC0td2hpdGUtY29sb3I6ICNmYWZhZmY7XFxyXFxuICAtLXRleHQtY29sb3I6ICM2OTc0Nzc7XFxyXFxuICAtLWJvZHktZm9udDogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAtLWJpZy1mb250LXNpemU6IDRyZW07XFxyXFxuICAtLW1lZGl1bS1mb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIC0tbm9ybWFsLWZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIC0tc21hbGwtZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAtLW1iLTE6IDAuNXJlbTtcXHJcXG4gIC0tbWItMjogMXJlbTtcXHJcXG4gIC0tbWItMzogMS41cmVtO1xcclxcbiAgLS1tYi00OiAycmVtO1xcclxcbiAgLS1tYi01OiAyLjVyZW07XFxyXFxuICAtLXotZml4ZWQ6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIDpyb290IHtcXHJcXG4gICAgLS1iaWctZm9udC1zaXplOiA2LjI1cmVtO1xcclxcbiAgICAtLW1lZGl1bS1mb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgLS1ub3JtYWwtZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAtLXNtYWxsLWZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbjo6YmVmb3JlLFxcclxcbjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IHZhcigtLWhlYWRlci1oZWlnaHQpIDAgMCAwO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtbWVkaXVtKTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbnAsXFxyXFxudWwge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi10aXRsZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW46IHZhcigtLW1iLTQpIDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW1lZGl1bS1mb250LXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi10aXRsZTo6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMC4xOHJlbTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJkLWdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcclxcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xcclxcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLW1iLTIpO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYi0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmwtaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IHZhcigtLXotZml4ZWQpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzaWMtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5uYXYtbWVudSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXHJcXG4gICAgcmlnaHQ6IC0xMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItNCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluazpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFzaWMtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxvZ28ge1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGUge1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZTo6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMC4ycmVtO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMS41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzaWMtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzaWMtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcclxcbiAgcm93LWdhcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGl0bGUge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWJpZy1mb250LXNpemUpO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwLjg7XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRpdGxlIHNwYW4ge1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMjBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtc2Nyb2xsIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLW1iLTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1zY3JvbGwtbGluayB7XFxyXFxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1pbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMjgwcHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZyBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHJvdy1nYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1zdWJ0aXRsZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFzaWMtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tZWRpdW0tZm9udC1zaXplKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1iLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcHJvZiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi00KTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi00KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXNvY2lhbC1pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgbWFyZ2luOiAwIHZhcigtLW1iLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGxzLWNvbnRhaW5lciB7XFxyXFxuICByb3ctZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGxzLXN1YnRpdGxlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYXNpYy1jb2xvcik7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi0zKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxscy1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udC1zaXplKTtcXHJcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbWItMik7XFxyXFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYi0zKTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxscy1uYW1lOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5za2lsbHMtaW1nIGltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgcm93LWdhcDogMnJlbTtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWltZyBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saW5rIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogLTEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pbWc6aG92ZXIgLnByb2plY3QtbGluayB7XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpbmstbmFtZSB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW1lZGl1bS1mb250LXNpemUpO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1jb250YWluZXIge1xcclxcbiAgcm93LWdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3Qtc3VidGl0bGUge1xcclxcbiAgY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXRleHQge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItMik7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWlucHV0cyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGNvbHVtbi1nYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1iLTQpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXHJcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tZGFyay1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2ljLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAwLjc1cmVtIDIuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuICByb3ctZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXRpdGxlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWItMik7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGluayB7XFxyXFxuICBwYWRkaW5nOiAwLjI1cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGluazpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFzaWMtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWN0aW9uIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VjdGlvbi10aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VjdGlvbi10aXRsZTo6YWZ0ZXIge1xcclxcbiAgICB3aWR0aDogNjRweDtcXHJcXG4gICAgdG9wOiAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdiB7XFxyXFxuICAgIGhlaWdodDogY2FsYyh2YXIoaGVhZGVyLWhlaWdodCkgKyAxcmVtKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tbWItNCk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LXRvZ2dsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWxpbmsge1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY3RpdmU6OmFmdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWUtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjdmciAxZnI7XFxyXFxuICAgIHJvdy1nYXA6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaG9tZS1pbWcge1xcclxcbiAgICB3aWR0aDogNTI0cHg7XFxyXFxuICAgIHJpZ2h0OiAxMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcXHJcXG4gICAgcGFkZGluZzogNHJlbSAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LWltZyB7XFxyXFxuICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgaGVpZ2h0OiAxODBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC1pbWcgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE2NXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNraWxscy1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdC1mb3JtIHtcXHJcXG4gICAgd2lkdGg6IDM4MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3Rlci1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgLmJkLWdyaWQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL3N0eWxlLmNzc1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW5kZXguanNcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvc2tpbGxzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy90aGFub3MuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL3RvZG8ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2VzL3RpYy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvYXVlYi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvbW9iaWxlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuICA8aGVhZD5cXHJcXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxyXFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCIgLz5cXHJcXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxyXFxuICAgIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIC8+XFxyXFxuICAgIDxsaW5rXFxyXFxuICAgICAgaHJlZj1cXFwiaHR0cHM6Ly91bnBrZy5jb20vYm94aWNvbnNAMi4xLjQvY3NzL2JveGljb25zLm1pbi5jc3NcXFwiXFxyXFxuICAgICAgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIlxcclxcbiAgICAvPlxcclxcbiAgICA8dGl0bGU+VGhhbm9zIFRyaWZvbmlzPC90aXRsZT5cXHJcXG4gICAgPFwiICsgXCJzY3JpcHQgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgZGVmZXI+PFwiICsgXCIvc2NyaXB0PlxcclxcbiAgPC9oZWFkPlxcclxcbiAgPGJvZHk+XFxyXFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcImwtaGVhZGVyXFxcIj5cXHJcXG4gICAgICA8bmF2IGNsYXNzPVxcXCJuYXYgYmQtZ3JpZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2PjxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJuYXYtbG9nb1xcXCI+VGhhbm9zIFRyaWZvbmlzPC9hPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2LW1lbnVcXFwiIGlkPVxcXCJuYXYtbWVudVxcXCI+XFxyXFxuICAgICAgICAgIDx1bCBjbGFzcz1cXFwibmF2LWxpc3RcXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI2hvbWVcXFwiIGNsYXNzPVxcXCJuYXYtbGluayBhY3RpdmVcXFwiPkhvbWU8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNhYm91dFxcXCIgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj5BYm91dCBNZTwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI3Byb2plY3RzXFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPlByb2plY3RzPC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjc2tpbGxzXFxcIiBjbGFzcz1cXFwibmF2LWxpbmtcXFwiPlNraWxsczwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI2NvbnRhY3RcXFwiIGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+Q29udGFjdDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXYtdG9nZ2xlXFxcIiBpZD1cXFwibmF2LXRvZ2dsZVxcXCI+XFxyXFxuICAgICAgICAgIDxpIGNsYXNzPVxcXCJieCBieC1tZW51XFxcIj48L2k+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L25hdj5cXHJcXG4gICAgPC9oZWFkZXI+XFxyXFxuICAgIDxtYWluIGNsYXNzPVxcXCJsLW1haW5cXFwiPlxcclxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJob21lXFxcIiBpZD1cXFwiaG9tZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob21lLWNvbnRhaW5lciBiZC1ncmlkXFxcIj5cXHJcXG4gICAgICAgICAgPGgxIGNsYXNzPVxcXCJob21lLXRpdGxlXFxcIj48c3Bhbj5XZWxjb21lPC9zcGFuPjxiciAvPmtpbmQgdmlzaXRvciE8L2gxPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob21lLXNjcm9sbFxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiI2Fib3V0XFxcIiBjbGFzcz1cXFwiaG9tZS1zY3JvbGwtbGlua1xcXCJcXHJcXG4gICAgICAgICAgICAgID48aSBjbGFzcz1cXFwiYnggYngtdXAtYXJyb3ctYWx0XFxcIj5TY3JvbGwgZG93bjwvaT48L2FcXHJcXG4gICAgICAgICAgICA+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8aW1nXFxyXFxuICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICBhbHQ9XFxcImFycm93IGRvd25cXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImhvbWUtaW1nXFxcIlxcclxcbiAgICAgICAgICAvPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJhYm91dCBzZWN0aW9uXFxcIiBpZD1cXFwiYWJvdXRcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJzZWN0aW9uLXRpdGxlXFxcIj5BYm91dCBNZTwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYm91dC1jb250YWluZXIgYmQtZ3JpZFxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFib3V0LWltZ1xcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyArIFwiXFxcIiBhbHQ9XFxcInByb2ZpbGUgcGljdHVyZVxcXCIgLz5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJhYm91dC1zdWJ0aXRsZVxcXCI+TXkgbmFtZSBpcyBUaGFub3MgVHJpZm9uaXM8L2gyPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhYm91dC1wcm9mXFxcIj5Tb2Z0d2FyZSBFbmdpbmVlcjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiYWJvdXQtdGV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICBJJ20gYSBjb21wdXRlciBzY2llbmNlIHN0dWRlbnQgd2hvIGxvdmVzIHV0aWxpemluZyBwcm9ncmFtbWluZyB0b1xcclxcbiAgICAgICAgICAgICAgc29sdmUgcHJvYmxlbXMuIEN1cnJlbnRseSBpIHByYWN0aWNlIHdlYiBkZXZlbG9wbWVudC5cXHJcXG4gICAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImFib3V0LXRleHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgVGhpcyBpcyBteSAzPHN1cD5yZDwvc3VwPiB5ZWFyIGluIENvbXB1dGVyIFNjaWVuY2UgZGVwYXJ0bWVudCBhdFxcclxcbiAgICAgICAgICAgICAgQXRoZW5zIFVuaXZlcnNpdHkgb2YgRWNvbm9taWNzIGFuZCBCdXNpbmVzcy48YnIgLz5cXHJcXG4gICAgICAgICAgICAgIFlvdSBjYW4gY2hlY2sgbWUgb3V0IGF0IEdpdEh1YiBhbmQgTGlua2VkSW4gYmVsb3cuXFxyXFxuICAgICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFib3V0LXNvY2lhbFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8YVxcclxcbiAgICAgICAgICAgICAgICBocmVmPVxcXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdGhhbm9zLXRyaWZvbmlzL1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImFib3V0LXNvY2lhbC1pY29uXFxcIlxcclxcbiAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XFxcImJ4IGJ4bC1saW5rZWRpbiBieC1sZ1xcXCIgc3R5bGU9XFxcImNvbG9yOiAjMDA3MmIxXFxcIj48L2k+PC9hXFxyXFxuICAgICAgICAgICAgICA+PGFcXHJcXG4gICAgICAgICAgICAgICAgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL1RyaWZvbmlzQXRoXFxcIlxcclxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYWJvdXQtc29jaWFsLWljb25cXFwiXFxyXFxuICAgICAgICAgICAgICAgID48aSBjbGFzcz1cXFwiYnggYnhsLWdpdGh1YiBieC1sZ1xcXCIgc3R5bGU9XFxcImNvbG9yOiAjMzMzMzMzXFxcIj48L2lcXHJcXG4gICAgICAgICAgICAgID48L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJwcm9qZWN0cyBzZWN0aW9uXFxcIiBpZD1cXFwicHJvamVjdHNcXFwiPlxcclxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJzZWN0aW9uLXRpdGxlXFxcIj5Qcm9qZWN0czwvaDI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0cy1jb250YWluZXIgYmQtZ3JpZFxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtaW1nXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8YVxcclxcbiAgICAgICAgICAgICAgICBocmVmPVxcXCJodHRwczovL3RyaWZvbmlzYXRoLmdpdGh1Yi5pby9Ub0RvX0xpc3QvXFxcIlxcclxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwicHJvamVjdC1saW5rLW5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgID5Ub0RvIGFwcCBsaXZlIGRlbW88L2FcXHJcXG4gICAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtaW1nXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fICsgXCJcXFwiIGFsdD1cXFwicHJvamVjdCBpbWFnZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWxpbmtcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGFcXHJcXG4gICAgICAgICAgICAgICAgaHJlZj1cXFwiaHR0cHM6Ly90cmlmb25pc2F0aC5naXRodWIuaW8vVGljVGFjVG9lL1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcInByb2plY3QtbGluay1uYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICA+VGljIFRhYyBUb2UgbGl2ZSBkZW1vPC9hXFxyXFxuICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWltZ1xcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyArIFwiXFxcIiBhbHQ9XFxcInByb2plY3QgaW1hZ2VcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhXFxyXFxuICAgICAgICAgICAgICAgIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9Ucmlmb25pc0F0aC9Vbml2ZXJzaXR5X1Byb2plY3RzXFxcIlxcclxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwicHJvamVjdC1saW5rLW5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgID5Vbml2ZXJzaXR5IFByb2plY3RzIFJlcG88L2FcXHJcXG4gICAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L3NlY3Rpb24+XFxyXFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcInNraWxscyBzZWN0aW9uXFxcIiBpZD1cXFwic2tpbGxzXFxcIj5cXHJcXG4gICAgICAgIDxoMiBjbGFzcz1cXFwic2VjdGlvbi10aXRsZVxcXCI+U2tpbGxzPC9oMj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNraWxscy1jb250YWluZXIgYmQtZ3JpZFxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNraWxscy1ib3hcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2tpbGxzLXN1YnRpdGxlXFxcIj5MYW5ndWFnZXMgYW5kIFRlY2hub2xvZ2llczwvaDM+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNraWxscy1uYW1lXFxcIj5KYXZhU2NyaXB0PC9zcGFuXFxyXFxuICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVxcXCJza2lsbHMtbmFtZVxcXCI+SFRNTDwvc3BhblxcclxcbiAgICAgICAgICAgID48c3BhbiBjbGFzcz1cXFwic2tpbGxzLW5hbWVcXFwiPkNTUzwvc3BhblxcclxcbiAgICAgICAgICAgID48c3BhbiBjbGFzcz1cXFwic2tpbGxzLW5hbWVcXFwiPlB5dGhvbjwvc3BhblxcclxcbiAgICAgICAgICAgID48c3BhbiBjbGFzcz1cXFwic2tpbGxzLW5hbWVcXFwiPkphdmE8L3NwYW5cXHJcXG4gICAgICAgICAgICA+PHNwYW4gY2xhc3M9XFxcInNraWxscy1uYW1lXFxcIj5Cb290U3RyYXA8L3NwYW5cXHJcXG4gICAgICAgICAgICA+PHNwYW4gY2xhc3M9XFxcInNraWxscy1uYW1lXFxcIj5Qb3N0Z3JlU1FMPC9zcGFuXFxyXFxuICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVxcXCJza2lsbHMtbmFtZVxcXCI+U2Fzczwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJza2lsbHMtaW1nXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gKyBcIlxcXCIgYWx0PVxcXCJwaWN0dXJlXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvc2VjdGlvbj5cXHJcXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29udGFjdCBzZWN0aW9uXFxcIiBpZD1cXFwiY29udGFjdFxcXCI+XFxyXFxuICAgICAgICA8aDIgY2xhc3M9XFxcInNlY3Rpb24tdGl0bGVcXFwiPkNvbnRhY3Q8L2gyPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFjdC1jb250YWluZXIgYmQtZ3JpZFxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhY3QtaW5mb1xcXCI+XFxyXFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjb250YWN0LXN1YnRpdGxlXFxcIj5BZGRyZXNzPC9oMz5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29udGFjdC10ZXh0XFxcIj5BdGhlbnMsIEdyZWVjZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvbnRhY3Qtc3VidGl0bGVcXFwiPkVtYWlsPC9oMz5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY29udGFjdC10ZXh0XFxcIj5hdGgudHJpZm9uaXNAZ21haWwuY29tPC9zcGFuPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVxcXCJcXFwiIGNsYXNzPVxcXCJjb250YWN0LWZvcm1cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhY3QtaW5wdXRzXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiY29udGFjdC1pbnB1dFxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hbWVcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICA8aW5wdXRcXHJcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwibWFpbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImNvbnRhY3QtaW5wdXRcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcXHJcXG4gICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPHRleHRhcmVhXFxyXFxuICAgICAgICAgICAgICBuYW1lPVxcXCJcXFwiXFxyXFxuICAgICAgICAgICAgICBpZD1cXFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgY29scz1cXFwiMFxcXCJcXHJcXG4gICAgICAgICAgICAgIHJvd3M9XFxcIjEwXFxcIlxcclxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcImNvbnRhY3QtaW5wdXRcXFwiXFxyXFxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImNvbnRhY3QtYnV0dG9uXFxcIiB2YWx1ZT1cXFwiU3VibWl0XFxcIiAvPlxcclxcbiAgICAgICAgICA8L2Zvcm0+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L3NlY3Rpb24+XFxyXFxuICAgIDwvbWFpbj5cXHJcXG4gICAgPGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyIHNlY3Rpb25cXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlci1jb250YWluZXIgYmQtZ3JpZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItZGF0YVxcXCI+XFxyXFxuICAgICAgICAgIDxoMiBjbGFzcz1cXFwiZm9vdGVyLXRpdGxlXFxcIj5UaGFub3MgVHJpZm9uaXM8L2gyPlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiZm9vdGVyLXRleHRcXFwiPlxcclxcbiAgICAgICAgICAgIEknbSBUaGFub3MgVHJpZm9uaXMgYW5kIHRoaXMgaXMgbXkgcG9ydGZvbGlvLlxcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlci1kYXRhXFxcIj5cXHJcXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItdGl0bGVcXFwiPkV4cGxvcmU8L2gyPlxcclxcbiAgICAgICAgICA8dWw+XFxyXFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNob21lXFxcIiBjbGFzcz1cXFwiZm9vdGVyLWxpbmtcXFwiPkhvbWU8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI2Fib3V0XFxcIiBjbGFzcz1cXFwiZm9vdGVyLWxpbmtcXFwiPkFib3V0IE1lPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNwcm9qZWN0c1xcXCIgY2xhc3M9XFxcImZvb3Rlci1saW5rXFxcIj5Qcm9qZWN0czwvYT48L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjc2tpbGxzXFxcIiBjbGFzcz1cXFwiZm9vdGVyLWxpbmtcXFwiPlNraWxzczwvYT48L2xpPlxcclxcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjY29udGFjdFxcXCIgY2xhc3M9XFxcImZvb3Rlci1saW5rXFxcIj5Db250YWN0PC9hPjwvbGk+XFxyXFxuICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9mb290ZXI+XFxyXFxuICA8L2JvZHk+XFxyXFxuPC9odG1sPlxcclxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvKiEgQGxpY2Vuc2UgaXMtZG9tLW5vZGUtbGlzdCB2MS4yLjFcblxuXHRDb3B5cmlnaHQgMjAxOCBGaXNzc2lvbiBMTEMuXG5cblx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRTT0ZUV0FSRS5cblxuKi9cbmltcG9ydCBpc0RvbU5vZGUgZnJvbSAnaXMtZG9tLW5vZGUnO1xuXG5mdW5jdGlvbiBpc0RvbU5vZGVMaXN0KHgpIHtcblx0dmFyIHByb3RvdHlwZVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpO1xuXHR2YXIgcmVnZXggPSAvXlxcW29iamVjdCAoSFRNTENvbGxlY3Rpb258Tm9kZUxpc3R8T2JqZWN0KVxcXSQvO1xuXG5cdHJldHVybiB0eXBlb2Ygd2luZG93Lk5vZGVMaXN0ID09PSAnb2JqZWN0J1xuXHRcdD8geCBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdFxuXHRcdDogeCAhPT0gbnVsbCAmJlxuXHRcdFx0XHR0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0dHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0XHRyZWdleC50ZXN0KHByb3RvdHlwZVRvU3RyaW5nKSAmJlxuXHRcdFx0XHQoeC5sZW5ndGggPT09IDAgfHwgaXNEb21Ob2RlKHhbMF0pKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpc0RvbU5vZGVMaXN0O1xuIiwiLyohIEBsaWNlbnNlIGlzLWRvbS1ub2RlIHYxLjAuNFxuXG5cdENvcHlyaWdodCAyMDE4IEZpc3NzaW9uIExMQy5cblxuXHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFNPRlRXQVJFLlxuXG4qL1xuZnVuY3Rpb24gaXNEb21Ob2RlKHgpIHtcblx0cmV0dXJuIHR5cGVvZiB3aW5kb3cuTm9kZSA9PT0gJ29iamVjdCdcblx0XHQ/IHggaW5zdGFuY2VvZiB3aW5kb3cuTm9kZVxuXHRcdDogeCAhPT0gbnVsbCAmJlxuXHRcdFx0XHR0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0dHlwZW9mIHgubm9kZVR5cGUgPT09ICdudW1iZXInICYmXG5cdFx0XHRcdHR5cGVvZiB4Lm5vZGVOYW1lID09PSAnc3RyaW5nJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0RvbU5vZGU7XG4iLCIvKiEgQGxpY2Vuc2UgbWluaXJhZiB2MS4wLjBcblxuXHRDb3B5cmlnaHQgMjAxOCBGaXNzc2lvbiBMTEMuXG5cblx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRTT0ZUV0FSRS5cblxuKi9cbnZhciBwb2x5ZmlsbCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciBjbG9jayA9IERhdGUubm93KCk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdHZhciBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XG5cdFx0aWYgKGN1cnJlbnRUaW1lIC0gY2xvY2sgPiAxNikge1xuXHRcdFx0Y2xvY2sgPSBjdXJyZW50VGltZTtcblx0XHRcdGNhbGxiYWNrKGN1cnJlbnRUaW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBwb2x5ZmlsbChjYWxsYmFjayk7IH0sIDApO1xuXHRcdH1cblx0fVxufSkoKTtcblxudmFyIGluZGV4ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0cG9seWZpbGw7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiLyohIEBsaWNlbnNlIFJlbWF0cml4IHYwLjMuMFxuXG5cdENvcHlyaWdodCAyMDE4IEp1bGlhbiBMbG95ZC5cblxuXHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5cdGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblx0VEhFIFNPRlRXQVJFLlxuKi9cbi8qKlxuICogQG1vZHVsZSBSZW1hdHJpeFxuICovXG5cbi8qKlxuICogVHJhbnNmb3JtYXRpb24gbWF0cmljZXMgaW4gdGhlIGJyb3dzZXIgY29tZSBpbiB0d28gZmxhdm9yczpcbiAqXG4gKiAgLSBgbWF0cml4YCB1c2luZyA2IHZhbHVlcyAoc2hvcnQpXG4gKiAgLSBgbWF0cml4M2RgIHVzaW5nIDE2IHZhbHVlcyAobG9uZylcbiAqXG4gKiBUaGlzIHV0aWxpdHkgZm9sbG93cyB0aGlzIFtjb252ZXJzaW9uIGd1aWRlXShodHRwczovL2dvby5nbC9FSmxVUTEpXG4gKiB0byBleHBhbmQgc2hvcnQgZm9ybSBtYXRyaWNlcyB0byB0aGVpciBlcXVpdmFsZW50IGxvbmcgZm9ybS5cbiAqXG4gKiBAcGFyYW0gIHthcnJheX0gc291cmNlIC0gQWNjZXB0cyBib3RoIHNob3J0IGFuZCBsb25nIGZvcm0gbWF0cmljZXMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gZm9ybWF0KHNvdXJjZSkge1xuXHRpZiAoc291cmNlLmNvbnN0cnVjdG9yICE9PSBBcnJheSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFycmF5LicpXG5cdH1cblx0aWYgKHNvdXJjZS5sZW5ndGggPT09IDE2KSB7XG5cdFx0cmV0dXJuIHNvdXJjZVxuXHR9XG5cdGlmIChzb3VyY2UubGVuZ3RoID09PSA2KSB7XG5cdFx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cdFx0bWF0cml4WzBdID0gc291cmNlWzBdO1xuXHRcdG1hdHJpeFsxXSA9IHNvdXJjZVsxXTtcblx0XHRtYXRyaXhbNF0gPSBzb3VyY2VbMl07XG5cdFx0bWF0cml4WzVdID0gc291cmNlWzNdO1xuXHRcdG1hdHJpeFsxMl0gPSBzb3VyY2VbNF07XG5cdFx0bWF0cml4WzEzXSA9IHNvdXJjZVs1XTtcblx0XHRyZXR1cm4gbWF0cml4XG5cdH1cblx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0V4cGVjdGVkIGFycmF5IHdpdGggZWl0aGVyIDYgb3IgMTYgdmFsdWVzLicpXG59XG5cbi8qKlxuICogUmV0dXJucyBhIG1hdHJpeCByZXByZXNlbnRpbmcgbm8gdHJhbnNmb3JtYXRpb24uIFRoZSBwcm9kdWN0IG9mIGFueSBtYXRyaXhcbiAqIG11bHRpcGxpZWQgYnkgdGhlIGlkZW50aXR5IG1hdHJpeCB3aWxsIGJlIHRoZSBvcmlnaW5hbCBtYXRyaXguXG4gKlxuICogPiAqKlRpcDoqKiBTaW1pbGFyIHRvIGhvdyBgNSAqIDEgPT09IDVgLCB3aGVyZSBgMWAgaXMgdGhlIGlkZW50aXR5LlxuICpcbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSgpIHtcblx0dmFyIG1hdHJpeCA9IFtdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcblx0XHRpICUgNSA9PSAwID8gbWF0cml4LnB1c2goMSkgOiBtYXRyaXgucHVzaCgwKTtcblx0fVxuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG1hdHJpeCBkZXNjcmliaW5nIHRoZSBpbnZlcnNlIHRyYW5zZm9ybWF0aW9uIG9mIHRoZSBzb3VyY2VcbiAqIG1hdHJpeC4gVGhlIHByb2R1Y3Qgb2YgYW55IG1hdHJpeCBtdWx0aXBsaWVkIGJ5IGl0cyBpbnZlcnNlIHdpbGwgYmUgdGhlXG4gKiBpZGVudGl0eSBtYXRyaXguXG4gKlxuICogPiAqKlRpcDoqKiBTaW1pbGFyIHRvIGhvdyBgNSAqICgxLzUpID09PSAxYCwgd2hlcmUgYDEvNWAgaXMgdGhlIGludmVyc2UuXG4gKlxuICogQHBhcmFtICB7YXJyYXl9IHNvdXJjZSAtIEFjY2VwdHMgYm90aCBzaG9ydCBhbmQgbG9uZyBmb3JtIG1hdHJpY2VzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGludmVyc2Uoc291cmNlKSB7XG5cdHZhciBtID0gZm9ybWF0KHNvdXJjZSk7XG5cblx0dmFyIHMwID0gbVswXSAqIG1bNV0gLSBtWzRdICogbVsxXTtcblx0dmFyIHMxID0gbVswXSAqIG1bNl0gLSBtWzRdICogbVsyXTtcblx0dmFyIHMyID0gbVswXSAqIG1bN10gLSBtWzRdICogbVszXTtcblx0dmFyIHMzID0gbVsxXSAqIG1bNl0gLSBtWzVdICogbVsyXTtcblx0dmFyIHM0ID0gbVsxXSAqIG1bN10gLSBtWzVdICogbVszXTtcblx0dmFyIHM1ID0gbVsyXSAqIG1bN10gLSBtWzZdICogbVszXTtcblxuXHR2YXIgYzUgPSBtWzEwXSAqIG1bMTVdIC0gbVsxNF0gKiBtWzExXTtcblx0dmFyIGM0ID0gbVs5XSAqIG1bMTVdIC0gbVsxM10gKiBtWzExXTtcblx0dmFyIGMzID0gbVs5XSAqIG1bMTRdIC0gbVsxM10gKiBtWzEwXTtcblx0dmFyIGMyID0gbVs4XSAqIG1bMTVdIC0gbVsxMl0gKiBtWzExXTtcblx0dmFyIGMxID0gbVs4XSAqIG1bMTRdIC0gbVsxMl0gKiBtWzEwXTtcblx0dmFyIGMwID0gbVs4XSAqIG1bMTNdIC0gbVsxMl0gKiBtWzldO1xuXG5cdHZhciBkZXRlcm1pbmFudCA9IDEgLyAoczAgKiBjNSAtIHMxICogYzQgKyBzMiAqIGMzICsgczMgKiBjMiAtIHM0ICogYzEgKyBzNSAqIGMwKTtcblxuXHRpZiAoaXNOYU4oZGV0ZXJtaW5hbnQpIHx8IGRldGVybWluYW50ID09PSBJbmZpbml0eSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignSW52ZXJzZSBkZXRlcm1pbmFudCBhdHRlbXB0ZWQgdG8gZGl2aWRlIGJ5IHplcm8uJylcblx0fVxuXG5cdHJldHVybiBbXG5cdFx0KG1bNV0gKiBjNSAtIG1bNl0gKiBjNCArIG1bN10gKiBjMykgKiBkZXRlcm1pbmFudCxcblx0XHQoLW1bMV0gKiBjNSArIG1bMl0gKiBjNCAtIG1bM10gKiBjMykgKiBkZXRlcm1pbmFudCxcblx0XHQobVsxM10gKiBzNSAtIG1bMTRdICogczQgKyBtWzE1XSAqIHMzKSAqIGRldGVybWluYW50LFxuXHRcdCgtbVs5XSAqIHM1ICsgbVsxMF0gKiBzNCAtIG1bMTFdICogczMpICogZGV0ZXJtaW5hbnQsXG5cblx0XHQoLW1bNF0gKiBjNSArIG1bNl0gKiBjMiAtIG1bN10gKiBjMSkgKiBkZXRlcm1pbmFudCxcblx0XHQobVswXSAqIGM1IC0gbVsyXSAqIGMyICsgbVszXSAqIGMxKSAqIGRldGVybWluYW50LFxuXHRcdCgtbVsxMl0gKiBzNSArIG1bMTRdICogczIgLSBtWzE1XSAqIHMxKSAqIGRldGVybWluYW50LFxuXHRcdChtWzhdICogczUgLSBtWzEwXSAqIHMyICsgbVsxMV0gKiBzMSkgKiBkZXRlcm1pbmFudCxcblxuXHRcdChtWzRdICogYzQgLSBtWzVdICogYzIgKyBtWzddICogYzApICogZGV0ZXJtaW5hbnQsXG5cdFx0KC1tWzBdICogYzQgKyBtWzFdICogYzIgLSBtWzNdICogYzApICogZGV0ZXJtaW5hbnQsXG5cdFx0KG1bMTJdICogczQgLSBtWzEzXSAqIHMyICsgbVsxNV0gKiBzMCkgKiBkZXRlcm1pbmFudCxcblx0XHQoLW1bOF0gKiBzNCArIG1bOV0gKiBzMiAtIG1bMTFdICogczApICogZGV0ZXJtaW5hbnQsXG5cblx0XHQoLW1bNF0gKiBjMyArIG1bNV0gKiBjMSAtIG1bNl0gKiBjMCkgKiBkZXRlcm1pbmFudCxcblx0XHQobVswXSAqIGMzIC0gbVsxXSAqIGMxICsgbVsyXSAqIGMwKSAqIGRldGVybWluYW50LFxuXHRcdCgtbVsxMl0gKiBzMyArIG1bMTNdICogczEgLSBtWzE0XSAqIHMwKSAqIGRldGVybWluYW50LFxuXHRcdChtWzhdICogczMgLSBtWzldICogczEgKyBtWzEwXSAqIHMwKSAqIGRldGVybWluYW50XG5cdF1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIHRoZSBjb21iaW5lZCB0cmFuc2Zvcm1hdGlvbnNcbiAqIG9mIGJvdGggYXJndW1lbnRzLlxuICpcbiAqID4gKipOb3RlOioqIE9yZGVyIGlzIHZlcnkgaW1wb3J0YW50LiBGb3IgZXhhbXBsZSwgcm90YXRpbmcgNDXCsFxuICogYWxvbmcgdGhlIFotYXhpcywgZm9sbG93ZWQgYnkgdHJhbnNsYXRpbmcgNTAwIHBpeGVscyBhbG9uZyB0aGVcbiAqIFktYXhpcy4uLiBpcyBub3QgdGhlIHNhbWUgYXMgdHJhbnNsYXRpbmcgNTAwIHBpeGVscyBhbG9uZyB0aGVcbiAqIFktYXhpcywgZm9sbG93ZWQgYnkgcm90YXRpbmcgNDXCsCBhbG9uZyBvbiB0aGUgWi1heGlzLlxuICpcbiAqIEBwYXJhbSAge2FycmF5fSBtIC0gQWNjZXB0cyBib3RoIHNob3J0IGFuZCBsb25nIGZvcm0gbWF0cmljZXMuXG4gKiBAcGFyYW0gIHthcnJheX0geCAtIEFjY2VwdHMgYm90aCBzaG9ydCBhbmQgbG9uZyBmb3JtIG1hdHJpY2VzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5KG0sIHgpIHtcblx0dmFyIGZtID0gZm9ybWF0KG0pO1xuXHR2YXIgZnggPSBmb3JtYXQoeCk7XG5cdHZhciBwcm9kdWN0ID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHR2YXIgcm93ID0gW2ZtW2ldLCBmbVtpICsgNF0sIGZtW2kgKyA4XSwgZm1baSArIDEyXV07XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcblx0XHRcdHZhciBrID0gaiAqIDQ7XG5cdFx0XHR2YXIgY29sID0gW2Z4W2tdLCBmeFtrICsgMV0sIGZ4W2sgKyAyXSwgZnhbayArIDNdXTtcblx0XHRcdHZhciByZXN1bHQgPVxuXHRcdFx0XHRyb3dbMF0gKiBjb2xbMF0gKyByb3dbMV0gKiBjb2xbMV0gKyByb3dbMl0gKiBjb2xbMl0gKyByb3dbM10gKiBjb2xbM107XG5cblx0XHRcdHByb2R1Y3RbaSArIGtdID0gcmVzdWx0O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwcm9kdWN0XG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gcmV0dXJuIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIHRoZSBDU1MgdHJhbnNmb3JtXG4gKiBtYXRyaXggcGFzc2VkIGluLCBidXQgd2lsbCByZXR1cm4gdGhlIGlkZW50aXR5IG1hdHJpeCBhcyBhXG4gKiBmYWxsYmFjay5cbiAqXG4gKiA+ICoqVGlwOioqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gY29udmVydCBhIENTUyBtYXRyaXggKHJldHJpZXZlZCBhcyBhXG4gKiBgc3RyaW5nYCBmcm9tIGNvbXB1dGVkIHN0eWxlcykgdG8gaXRzIGVxdWl2YWxlbnQgYXJyYXkgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc291cmNlIC0gYG1hdHJpeGAgb3IgYG1hdHJpeDNkYCBDU1MgVHJhbnNmb3JtIHZhbHVlLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHNvdXJjZSkge1xuXHRpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpIHtcblx0XHR2YXIgbWF0Y2ggPSBzb3VyY2UubWF0Y2goL21hdHJpeCgzZCk/XFwoKFteKV0rKVxcKS8pO1xuXHRcdGlmIChtYXRjaCkge1xuXHRcdFx0dmFyIHJhdyA9IG1hdGNoWzJdLnNwbGl0KCcsICcpLm1hcChwYXJzZUZsb2F0KTtcblx0XHRcdHJldHVybiBmb3JtYXQocmF3KVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gaWRlbnRpdHkoKVxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWi1heGlzIHJvdGF0aW9uLlxuICpcbiAqID4gKipUaXA6KiogVGhpcyBpcyBqdXN0IGFuIGFsaWFzIGZvciBgUmVtYXRyaXgucm90YXRlWmAgZm9yIHBhcml0eSB3aXRoIENTU1xuICpcbiAqIEBwYXJhbSAge251bWJlcn0gYW5nbGUgLSBNZWFzdXJlZCBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZShhbmdsZSkge1xuXHRyZXR1cm4gcm90YXRlWihhbmdsZSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFgtYXhpcyByb3RhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGFuZ2xlIC0gTWVhc3VyZWQgaW4gZGVncmVlcy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiByb3RhdGVYKGFuZ2xlKSB7XG5cdHZhciB0aGV0YSA9IE1hdGguUEkgLyAxODAgKiBhbmdsZTtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cblx0bWF0cml4WzVdID0gbWF0cml4WzEwXSA9IE1hdGguY29zKHRoZXRhKTtcblx0bWF0cml4WzZdID0gbWF0cml4WzldID0gTWF0aC5zaW4odGhldGEpO1xuXHRtYXRyaXhbOV0gKj0gLTE7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWS1heGlzIHJvdGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gYW5nbGUgLSBNZWFzdXJlZCBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVkoYW5nbGUpIHtcblx0dmFyIHRoZXRhID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbMF0gPSBtYXRyaXhbMTBdID0gTWF0aC5jb3ModGhldGEpO1xuXHRtYXRyaXhbMl0gPSBtYXRyaXhbOF0gPSBNYXRoLnNpbih0aGV0YSk7XG5cdG1hdHJpeFsyXSAqPSAtMTtcblxuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBaLWF4aXMgcm90YXRpb24uXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBhbmdsZSAtIE1lYXN1cmVkIGluIGRlZ3JlZXMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gcm90YXRlWihhbmdsZSkge1xuXHR2YXIgdGhldGEgPSBNYXRoLlBJIC8gMTgwICogYW5nbGU7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXG5cdG1hdHJpeFswXSA9IG1hdHJpeFs1XSA9IE1hdGguY29zKHRoZXRhKTtcblx0bWF0cml4WzFdID0gbWF0cml4WzRdID0gTWF0aC5zaW4odGhldGEpO1xuXHRtYXRyaXhbNF0gKj0gLTE7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgMkQgc2NhbGluZy4gVGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBpcyB1c2VkIGZvciBib3RoIFggYW5kIFktYXhpcyBzY2FsaW5nLCB1bmxlc3MgYW4gb3B0aW9uYWxcbiAqIHNlY29uZCBhcmd1bWVudCBpcyBwcm92aWRlZCB0byBleHBsaWNpdGx5IGRlZmluZSBZLWF4aXMgc2NhbGluZy5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNjYWxhciAgICAtIERlY2ltYWwgbXVsdGlwbGllci5cbiAqIEBwYXJhbSAge251bWJlcn0gW3NjYWxhclldIC0gRGVjaW1hbCBtdWx0aXBsaWVyLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNjYWxlKHNjYWxhciwgc2NhbGFyWSkge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbMF0gPSBzY2FsYXI7XG5cdG1hdHJpeFs1XSA9IHR5cGVvZiBzY2FsYXJZID09PSAnbnVtYmVyJyA/IHNjYWxhclkgOiBzY2FsYXI7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWC1heGlzIHNjYWxpbmcuXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBzY2FsYXIgLSBEZWNpbWFsIG11bHRpcGxpZXIuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gc2NhbGVYKHNjYWxhcikge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblx0bWF0cml4WzBdID0gc2NhbGFyO1xuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBZLWF4aXMgc2NhbGluZy5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNjYWxhciAtIERlY2ltYWwgbXVsdGlwbGllci5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiBzY2FsZVkoc2NhbGFyKSB7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRtYXRyaXhbNV0gPSBzY2FsYXI7XG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFotYXhpcyBzY2FsaW5nLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gc2NhbGFyIC0gRGVjaW1hbCBtdWx0aXBsaWVyLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNjYWxlWihzY2FsYXIpIHtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cdG1hdHJpeFsxMF0gPSBzY2FsYXI7XG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIHNoZWFyLiBUaGUgZmlyc3QgYXJndW1lbnRcbiAqIGRlZmluZXMgWC1heGlzIHNoZWFyaW5nLCBhbmQgYW4gb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50XG4gKiBkZWZpbmVzIFktYXhpcyBzaGVhcmluZy5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGFuZ2xlWCAgIC0gTWVhc3VyZWQgaW4gZGVncmVlcy5cbiAqIEBwYXJhbSAge251bWJlcn0gW2FuZ2xlWV0gLSBNZWFzdXJlZCBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHNrZXcoYW5nbGVYLCBhbmdsZVkpIHtcblx0dmFyIHRoZXRhWCA9IE1hdGguUEkgLyAxODAgKiBhbmdsZVg7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXG5cdG1hdHJpeFs0XSA9IE1hdGgudGFuKHRoZXRhWCk7XG5cblx0aWYgKGFuZ2xlWSkge1xuXHRcdHZhciB0aGV0YVkgPSBNYXRoLlBJIC8gMTgwICogYW5nbGVZO1xuXHRcdG1hdHJpeFsxXSA9IE1hdGgudGFuKHRoZXRhWSk7XG5cdH1cblxuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBYLWF4aXMgc2hlYXIuXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBhbmdsZSAtIE1lYXN1cmVkIGluIGRlZ3JlZXMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gc2tld1goYW5nbGUpIHtcblx0dmFyIHRoZXRhID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbNF0gPSBNYXRoLnRhbih0aGV0YSk7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWS1heGlzIHNoZWFyLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gYW5nbGUgLSBNZWFzdXJlZCBpbiBkZWdyZWVzXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gc2tld1koYW5nbGUpIHtcblx0dmFyIHRoZXRhID0gTWF0aC5QSSAvIDE4MCAqIGFuZ2xlO1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblxuXHRtYXRyaXhbMV0gPSBNYXRoLnRhbih0aGV0YSk7XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSBDU1MgVHJhbnNmb3JtIHByb3BlcnR5IHZhbHVlIGVxdWl2YWxlbnQgdG8gdGhlIHNvdXJjZSBtYXRyaXguXG4gKlxuICogQHBhcmFtICB7YXJyYXl9IHNvdXJjZSAtIEFjY2VwdHMgYm90aCBzaG9ydCBhbmQgbG9uZyBmb3JtIG1hdHJpY2VzLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1N0cmluZyhzb3VyY2UpIHtcblx0cmV0dXJuIChcIm1hdHJpeDNkKFwiICsgKGZvcm1hdChzb3VyY2UpLmpvaW4oJywgJykpICsgXCIpXCIpXG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyAyRCB0cmFuc2xhdGlvbi4gVGhlIGZpcnN0XG4gKiBhcmd1bWVudCBkZWZpbmVzIFgtYXhpcyB0cmFuc2xhdGlvbiwgYW5kIGFuIG9wdGlvbmFsIHNlY29uZFxuICogYXJndW1lbnQgZGVmaW5lcyBZLWF4aXMgdHJhbnNsYXRpb24uXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBkaXN0YW5jZVggICAtIE1lYXN1cmVkIGluIHBpeGVscy5cbiAqIEBwYXJhbSAge251bWJlcn0gW2Rpc3RhbmNlWV0gLSBNZWFzdXJlZCBpbiBwaXhlbHMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gdHJhbnNsYXRlKGRpc3RhbmNlWCwgZGlzdGFuY2VZKSB7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRtYXRyaXhbMTJdID0gZGlzdGFuY2VYO1xuXG5cdGlmIChkaXN0YW5jZVkpIHtcblx0XHRtYXRyaXhbMTNdID0gZGlzdGFuY2VZO1xuXHR9XG5cblx0cmV0dXJuIG1hdHJpeFxufVxuXG4vKipcbiAqIFJldHVybnMgYSA0eDQgbWF0cml4IGRlc2NyaWJpbmcgWC1heGlzIHRyYW5zbGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge251bWJlcn0gZGlzdGFuY2UgLSBNZWFzdXJlZCBpbiBwaXhlbHMuXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gdHJhbnNsYXRlWChkaXN0YW5jZSkge1xuXHR2YXIgbWF0cml4ID0gaWRlbnRpdHkoKTtcblx0bWF0cml4WzEyXSA9IGRpc3RhbmNlO1xuXHRyZXR1cm4gbWF0cml4XG59XG5cbi8qKlxuICogUmV0dXJucyBhIDR4NCBtYXRyaXggZGVzY3JpYmluZyBZLWF4aXMgdHJhbnNsYXRpb24uXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSBkaXN0YW5jZSAtIE1lYXN1cmVkIGluIHBpeGVscy5cbiAqIEByZXR1cm4ge2FycmF5fVxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGVZKGRpc3RhbmNlKSB7XG5cdHZhciBtYXRyaXggPSBpZGVudGl0eSgpO1xuXHRtYXRyaXhbMTNdID0gZGlzdGFuY2U7XG5cdHJldHVybiBtYXRyaXhcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgNHg0IG1hdHJpeCBkZXNjcmliaW5nIFotYXhpcyB0cmFuc2xhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRpc3RhbmNlIC0gTWVhc3VyZWQgaW4gcGl4ZWxzLlxuICogQHJldHVybiB7YXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZVooZGlzdGFuY2UpIHtcblx0dmFyIG1hdHJpeCA9IGlkZW50aXR5KCk7XG5cdG1hdHJpeFsxNF0gPSBkaXN0YW5jZTtcblx0cmV0dXJuIG1hdHJpeFxufVxuXG5leHBvcnQgeyBmb3JtYXQsIGlkZW50aXR5LCBpbnZlcnNlLCBtdWx0aXBseSwgcGFyc2UsIHJvdGF0ZSwgcm90YXRlWCwgcm90YXRlWSwgcm90YXRlWiwgc2NhbGUsIHNjYWxlWCwgc2NhbGVZLCBzY2FsZVosIHNrZXcsIHNrZXdYLCBza2V3WSwgdG9TdHJpbmcsIHRyYW5zbGF0ZSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgdHJhbnNsYXRlWiB9O1xuIiwiLyohIEBsaWNlbnNlIFNjcm9sbFJldmVhbCB2NC4wLjlcblxuXHRDb3B5cmlnaHQgMjAyMSBGaXNzc2lvbiBMTEMuXG5cblx0TGljZW5zZWQgdW5kZXIgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIDMuMCBmb3Jcblx0Y29tcGF0aWJsZSBvcGVuIHNvdXJjZSBwcm9qZWN0cyBhbmQgbm9uLWNvbW1lcmNpYWwgdXNlLlxuXG5cdEZvciBjb21tZXJjaWFsIHNpdGVzLCB0aGVtZXMsIHByb2plY3RzLCBhbmQgYXBwbGljYXRpb25zLFxuXHRrZWVwIHlvdXIgc291cmNlIGNvZGUgcHJpdmF0ZS9wcm9wcmlldGFyeSBieSBwdXJjaGFzaW5nXG5cdGEgY29tbWVyY2lhbCBsaWNlbnNlIGZyb20gaHR0cHM6Ly9zY3JvbGxyZXZlYWxqcy5vcmcvXG4qL1xuaW1wb3J0ICQgZnJvbSAndGVhbGlnaHQnO1xuaW1wb3J0IHsgdHJhbnNsYXRlWSwgdHJhbnNsYXRlWCwgcm90YXRlWCwgcm90YXRlWSwgcm90YXRlWiwgc2NhbGUsIHBhcnNlLCBtdWx0aXBseSB9IGZyb20gJ3JlbWF0cml4JztcbmltcG9ydCByYWYgZnJvbSAnbWluaXJhZic7XG5cbnZhciBkZWZhdWx0cyA9IHtcblx0ZGVsYXk6IDAsXG5cdGRpc3RhbmNlOiAnMCcsXG5cdGR1cmF0aW9uOiA2MDAsXG5cdGVhc2luZzogJ2N1YmljLWJlemllcigwLjUsIDAsIDAsIDEpJyxcblx0aW50ZXJ2YWw6IDAsXG5cdG9wYWNpdHk6IDAsXG5cdG9yaWdpbjogJ2JvdHRvbScsXG5cdHJvdGF0ZToge1xuXHRcdHg6IDAsXG5cdFx0eTogMCxcblx0XHR6OiAwXG5cdH0sXG5cdHNjYWxlOiAxLFxuXHRjbGVhbnVwOiBmYWxzZSxcblx0Y29udGFpbmVyOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG5cdGRlc2t0b3A6IHRydWUsXG5cdG1vYmlsZTogdHJ1ZSxcblx0cmVzZXQ6IGZhbHNlLFxuXHR1c2VEZWxheTogJ2Fsd2F5cycsXG5cdHZpZXdGYWN0b3I6IDAuMCxcblx0dmlld09mZnNldDoge1xuXHRcdHRvcDogMCxcblx0XHRyaWdodDogMCxcblx0XHRib3R0b206IDAsXG5cdFx0bGVmdDogMFxuXHR9LFxuXHRhZnRlclJlc2V0OiBmdW5jdGlvbiBhZnRlclJlc2V0KCkge30sXG5cdGFmdGVyUmV2ZWFsOiBmdW5jdGlvbiBhZnRlclJldmVhbCgpIHt9LFxuXHRiZWZvcmVSZXNldDogZnVuY3Rpb24gYmVmb3JlUmVzZXQoKSB7fSxcblx0YmVmb3JlUmV2ZWFsOiBmdW5jdGlvbiBiZWZvcmVSZXZlYWwoKSB7fVxufTtcblxuZnVuY3Rpb24gZmFpbHVyZSgpIHtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NyJyk7XG5cblx0cmV0dXJuIHtcblx0XHRjbGVhbjogZnVuY3Rpb24gY2xlYW4oKSB7fSxcblx0XHRkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge30sXG5cdFx0cmV2ZWFsOiBmdW5jdGlvbiByZXZlYWwoKSB7fSxcblx0XHRzeW5jOiBmdW5jdGlvbiBzeW5jKCkge30sXG5cdFx0Z2V0IG5vb3AoKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzdWNjZXNzKCkge1xuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3InKTtcblxuXHRpZiAoZG9jdW1lbnQuYm9keSkge1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuXHR9IGVsc2Uge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblx0XHR9KTtcblx0fVxufVxuXG52YXIgbW91bnQgPSB7IHN1Y2Nlc3M6IHN1Y2Nlc3MsIGZhaWx1cmU6IGZhaWx1cmUgfTtcblxuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuXHRyZXR1cm4gKFxuXHRcdHggIT09IG51bGwgJiZcblx0XHR4IGluc3RhbmNlb2YgT2JqZWN0ICYmXG5cdFx0KHguY29uc3RydWN0b3IgPT09IE9iamVjdCB8fFxuXHRcdFx0T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBPYmplY3RdJylcblx0KVxufVxuXG5mdW5jdGlvbiBlYWNoKGNvbGxlY3Rpb24sIGNhbGxiYWNrKSB7XG5cdGlmIChpc09iamVjdChjb2xsZWN0aW9uKSkge1xuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29sbGVjdGlvbik7XG5cdFx0cmV0dXJuIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBjYWxsYmFjayhjb2xsZWN0aW9uW2tleV0sIGtleSwgY29sbGVjdGlvbik7IH0pXG5cdH1cblx0aWYgKGNvbGxlY3Rpb24gaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHsgcmV0dXJuIGNhbGxiYWNrKGl0ZW0sIGksIGNvbGxlY3Rpb24pOyB9KVxuXHR9XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGVpdGhlciBhbiBhcnJheSBvciBvYmplY3QgbGl0ZXJhbC4nKVxufVxuXG5mdW5jdGlvbiBsb2dnZXIobWVzc2FnZSkge1xuXHR2YXIgZGV0YWlscyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblx0d2hpbGUgKCBsZW4tLSA+IDAgKSBkZXRhaWxzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG5cdGlmICh0aGlzLmNvbnN0cnVjdG9yLmRlYnVnICYmIGNvbnNvbGUpIHtcblx0XHR2YXIgcmVwb3J0ID0gXCIlY1Njcm9sbFJldmVhbDogXCIgKyBtZXNzYWdlO1xuXHRcdGRldGFpbHMuZm9yRWFjaChmdW5jdGlvbiAoZGV0YWlsKSB7IHJldHVybiAocmVwb3J0ICs9IFwiXFxuIOKAlCBcIiArIGRldGFpbCk7IH0pO1xuXHRcdGNvbnNvbGUubG9nKHJlcG9ydCwgJ2NvbG9yOiAjZWE2NTRiOycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblx0fVxufVxuXG5mdW5jdGlvbiByaW5zZSgpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0dmFyIHN0cnVjdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG5cdFx0YWN0aXZlOiBbXSxcblx0XHRzdGFsZTogW11cblx0fSk7IH07XG5cblx0dmFyIGVsZW1lbnRJZHMgPSBzdHJ1Y3QoKTtcblx0dmFyIHNlcXVlbmNlSWRzID0gc3RydWN0KCk7XG5cdHZhciBjb250YWluZXJJZHMgPSBzdHJ1Y3QoKTtcblxuXHQvKipcblx0ICogVGFrZSBzdG9jayBvZiBhY3RpdmUgZWxlbWVudCBJRHMuXG5cdCAqL1xuXHR0cnkge1xuXHRcdGVhY2goJCgnW2RhdGEtc3ItaWRdJyksIGZ1bmN0aW9uIChub2RlKSB7XG5cdFx0XHR2YXIgaWQgPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1zci1pZCcpKTtcblx0XHRcdGVsZW1lbnRJZHMuYWN0aXZlLnB1c2goaWQpO1xuXHRcdH0pO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0dGhyb3cgZVxuXHR9XG5cdC8qKlxuXHQgKiBEZXN0cm95IHN0YWxlIGVsZW1lbnRzLlxuXHQgKi9cblx0ZWFjaCh0aGlzLnN0b3JlLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50SWRzLmFjdGl2ZS5pbmRleE9mKGVsZW1lbnQuaWQpID09PSAtMSkge1xuXHRcdFx0ZWxlbWVudElkcy5zdGFsZS5wdXNoKGVsZW1lbnQuaWQpO1xuXHRcdH1cblx0fSk7XG5cblx0ZWFjaChlbGVtZW50SWRzLnN0YWxlLCBmdW5jdGlvbiAoc3RhbGVJZCkgeyByZXR1cm4gZGVsZXRlIHRoaXMkMS5zdG9yZS5lbGVtZW50c1tzdGFsZUlkXTsgfSk7XG5cblx0LyoqXG5cdCAqIFRha2Ugc3RvY2sgb2YgYWN0aXZlIGNvbnRhaW5lciBhbmQgc2VxdWVuY2UgSURzLlxuXHQgKi9cblx0ZWFjaCh0aGlzLnN0b3JlLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGlmIChjb250YWluZXJJZHMuYWN0aXZlLmluZGV4T2YoZWxlbWVudC5jb250YWluZXJJZCkgPT09IC0xKSB7XG5cdFx0XHRjb250YWluZXJJZHMuYWN0aXZlLnB1c2goZWxlbWVudC5jb250YWluZXJJZCk7XG5cdFx0fVxuXHRcdGlmIChlbGVtZW50Lmhhc093blByb3BlcnR5KCdzZXF1ZW5jZScpKSB7XG5cdFx0XHRpZiAoc2VxdWVuY2VJZHMuYWN0aXZlLmluZGV4T2YoZWxlbWVudC5zZXF1ZW5jZS5pZCkgPT09IC0xKSB7XG5cdFx0XHRcdHNlcXVlbmNlSWRzLmFjdGl2ZS5wdXNoKGVsZW1lbnQuc2VxdWVuY2UuaWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0LyoqXG5cdCAqIERlc3Ryb3kgc3RhbGUgY29udGFpbmVycy5cblx0ICovXG5cdGVhY2godGhpcy5zdG9yZS5jb250YWluZXJzLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0aWYgKGNvbnRhaW5lcklkcy5hY3RpdmUuaW5kZXhPZihjb250YWluZXIuaWQpID09PSAtMSkge1xuXHRcdFx0Y29udGFpbmVySWRzLnN0YWxlLnB1c2goY29udGFpbmVyLmlkKTtcblx0XHR9XG5cdH0pO1xuXG5cdGVhY2goY29udGFpbmVySWRzLnN0YWxlLCBmdW5jdGlvbiAoc3RhbGVJZCkge1xuXHRcdHZhciBzdGFsZSA9IHRoaXMkMS5zdG9yZS5jb250YWluZXJzW3N0YWxlSWRdLm5vZGU7XG5cdFx0c3RhbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcyQxLmRlbGVnYXRlKTtcblx0XHRzdGFsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzJDEuZGVsZWdhdGUpO1xuXHRcdGRlbGV0ZSB0aGlzJDEuc3RvcmUuY29udGFpbmVyc1tzdGFsZUlkXTtcblx0fSk7XG5cblx0LyoqXG5cdCAqIERlc3Ryb3kgc3RhbGUgc2VxdWVuY2VzLlxuXHQgKi9cblx0ZWFjaCh0aGlzLnN0b3JlLnNlcXVlbmNlcywgZnVuY3Rpb24gKHNlcXVlbmNlKSB7XG5cdFx0aWYgKHNlcXVlbmNlSWRzLmFjdGl2ZS5pbmRleE9mKHNlcXVlbmNlLmlkKSA9PT0gLTEpIHtcblx0XHRcdHNlcXVlbmNlSWRzLnN0YWxlLnB1c2goc2VxdWVuY2UuaWQpO1xuXHRcdH1cblx0fSk7XG5cblx0ZWFjaChzZXF1ZW5jZUlkcy5zdGFsZSwgZnVuY3Rpb24gKHN0YWxlSWQpIHsgcmV0dXJuIGRlbGV0ZSB0aGlzJDEuc3RvcmUuc2VxdWVuY2VzW3N0YWxlSWRdOyB9KTtcbn1cblxudmFyIGdldFByZWZpeGVkQ3NzUHJvcCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciBwcm9wZXJ0aWVzID0ge307XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuXHRmdW5jdGlvbiBnZXRQcmVmaXhlZENzc1Byb3BlcnR5KG5hbWUsIHNvdXJjZSkge1xuXHRcdGlmICggc291cmNlID09PSB2b2lkIDAgKSBzb3VyY2UgPSBzdHlsZTtcblxuXHRcdGlmIChuYW1lICYmIHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuXHRcdFx0aWYgKHByb3BlcnRpZXNbbmFtZV0pIHtcblx0XHRcdFx0cmV0dXJuIHByb3BlcnRpZXNbbmFtZV1cblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygc291cmNlW25hbWVdID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRyZXR1cm4gKHByb3BlcnRpZXNbbmFtZV0gPSBuYW1lKVxuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBzb3VyY2VbKFwiLXdlYmtpdC1cIiArIG5hbWUpXSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0cmV0dXJuIChwcm9wZXJ0aWVzW25hbWVdID0gXCItd2Via2l0LVwiICsgbmFtZSlcblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBSYW5nZUVycm9yKChcIlVuYWJsZSB0byBmaW5kIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgc3R5bGUgcHJvcGVydHkuXCIpKVxuXHRcdH1cblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZy4nKVxuXHR9XG5cblx0Z2V0UHJlZml4ZWRDc3NQcm9wZXJ0eS5jbGVhckNhY2hlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHByb3BlcnRpZXMgPSB7fSk7IH07XG5cblx0cmV0dXJuIGdldFByZWZpeGVkQ3NzUHJvcGVydHlcbn0pKCk7XG5cbmZ1bmN0aW9uIHN0eWxlKGVsZW1lbnQpIHtcblx0dmFyIGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudC5ub2RlKTtcblx0dmFyIHBvc2l0aW9uID0gY29tcHV0ZWQucG9zaXRpb247XG5cdHZhciBjb25maWcgPSBlbGVtZW50LmNvbmZpZztcblxuXHQvKipcblx0ICogR2VuZXJhdGUgaW5saW5lIHN0eWxlc1xuXHQgKi9cblx0dmFyIGlubGluZSA9IHt9O1xuXHR2YXIgaW5saW5lU3R5bGUgPSBlbGVtZW50Lm5vZGUuZ2V0QXR0cmlidXRlKCdzdHlsZScpIHx8ICcnO1xuXHR2YXIgaW5saW5lTWF0Y2ggPSBpbmxpbmVTdHlsZS5tYXRjaCgvW1xcdy1dK1xccyo6XFxzKlteO10rXFxzKi9naSkgfHwgW107XG5cblx0aW5saW5lLmNvbXB1dGVkID0gaW5saW5lTWF0Y2ggPyBpbmxpbmVNYXRjaC5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0udHJpbSgpOyB9KS5qb2luKCc7ICcpICsgJzsnIDogJyc7XG5cblx0aW5saW5lLmdlbmVyYXRlZCA9IGlubGluZU1hdGNoLnNvbWUoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0ubWF0Y2goL3Zpc2liaWxpdHlcXHM/Olxccz92aXNpYmxlL2kpOyB9KVxuXHRcdD8gaW5saW5lLmNvbXB1dGVkXG5cdFx0OiBpbmxpbmVNYXRjaC5jb25jYXQoIFsndmlzaWJpbGl0eTogdmlzaWJsZSddKS5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0udHJpbSgpOyB9KS5qb2luKCc7ICcpICsgJzsnO1xuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSBvcGFjaXR5IHN0eWxlc1xuXHQgKi9cblx0dmFyIGNvbXB1dGVkT3BhY2l0eSA9IHBhcnNlRmxvYXQoY29tcHV0ZWQub3BhY2l0eSk7XG5cdHZhciBjb25maWdPcGFjaXR5ID0gIWlzTmFOKHBhcnNlRmxvYXQoY29uZmlnLm9wYWNpdHkpKVxuXHRcdD8gcGFyc2VGbG9hdChjb25maWcub3BhY2l0eSlcblx0XHQ6IHBhcnNlRmxvYXQoY29tcHV0ZWQub3BhY2l0eSk7XG5cblx0dmFyIG9wYWNpdHkgPSB7XG5cdFx0Y29tcHV0ZWQ6IGNvbXB1dGVkT3BhY2l0eSAhPT0gY29uZmlnT3BhY2l0eSA/IChcIm9wYWNpdHk6IFwiICsgY29tcHV0ZWRPcGFjaXR5ICsgXCI7XCIpIDogJycsXG5cdFx0Z2VuZXJhdGVkOiBjb21wdXRlZE9wYWNpdHkgIT09IGNvbmZpZ09wYWNpdHkgPyAoXCJvcGFjaXR5OiBcIiArIGNvbmZpZ09wYWNpdHkgKyBcIjtcIikgOiAnJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSB0cmFuc2Zvcm1hdGlvbiBzdHlsZXNcblx0ICovXG5cdHZhciB0cmFuc2Zvcm1hdGlvbnMgPSBbXTtcblxuXHRpZiAocGFyc2VGbG9hdChjb25maWcuZGlzdGFuY2UpKSB7XG5cdFx0dmFyIGF4aXMgPSBjb25maWcub3JpZ2luID09PSAndG9wJyB8fCBjb25maWcub3JpZ2luID09PSAnYm90dG9tJyA/ICdZJyA6ICdYJztcblxuXHRcdC8qKlxuXHRcdCAqIExldOKAmXMgbWFrZSBzdXJlIG91ciBvdXIgcGl4ZWwgZGlzdGFuY2VzIGFyZSBuZWdhdGl2ZSBmb3IgdG9wIGFuZCBsZWZ0LlxuXHRcdCAqIGUuZy4geyBvcmlnaW46ICd0b3AnLCBkaXN0YW5jZTogJzI1cHgnIH0gc3RhcnRzIGF0IGB0b3A6IC0yNXB4YCBpbiBDU1MuXG5cdFx0ICovXG5cdFx0dmFyIGRpc3RhbmNlID0gY29uZmlnLmRpc3RhbmNlO1xuXHRcdGlmIChjb25maWcub3JpZ2luID09PSAndG9wJyB8fCBjb25maWcub3JpZ2luID09PSAnbGVmdCcpIHtcblx0XHRcdGRpc3RhbmNlID0gL14tLy50ZXN0KGRpc3RhbmNlKSA/IGRpc3RhbmNlLnN1YnN0cigxKSA6IChcIi1cIiArIGRpc3RhbmNlKTtcblx0XHR9XG5cblx0XHR2YXIgcmVmID0gZGlzdGFuY2UubWF0Y2goLyheLT9cXGQrXFwuP1xcZD8pfChlbSR8cHgkfCUkKS9nKTtcblx0XHR2YXIgdmFsdWUgPSByZWZbMF07XG5cdFx0dmFyIHVuaXQgPSByZWZbMV07XG5cblx0XHRzd2l0Y2ggKHVuaXQpIHtcblx0XHRcdGNhc2UgJ2VtJzpcblx0XHRcdFx0ZGlzdGFuY2UgPSBwYXJzZUludChjb21wdXRlZC5mb250U2l6ZSkgKiB2YWx1ZTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3B4Jzpcblx0XHRcdFx0ZGlzdGFuY2UgPSB2YWx1ZTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJyUnOlxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogSGVyZSB3ZSB1c2UgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAgaW5zdGVhZCBvZlxuXHRcdFx0XHQgKiB0aGUgZXhpc3RpbmcgZGF0YSBhdHRhY2hlZCB0byBgZWxlbWVudC5nZW9tZXRyeWBcblx0XHRcdFx0ICogYmVjYXVzZSBvbmx5IHRoZSBmb3JtZXIgaW5jbHVkZXMgYW55IHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0XHQgKiBjdXJyZW50IGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQuXG5cdFx0XHRcdCAqXG5cdFx0XHRcdCAqIElmIHRoYXQgYmVoYXZpb3IgZW5kcyB1cCBiZWluZyB1bmludHVpdGl2ZSwgdGhpc1xuXHRcdFx0XHQgKiBsb2dpYyBjb3VsZCBpbnN0ZWFkIHV0aWxpemUgYGVsZW1lbnQuZ2VvbWV0cnkuaGVpZ2h0YFxuXHRcdFx0XHQgKiBhbmQgYGVsZW1lbnQuZ2VvZW1ldHJ5LndpZHRoYCBmb3IgdGhlIGRpc3RhbmNlIGNhbGN1bGF0aW9uXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRkaXN0YW5jZSA9XG5cdFx0XHRcdFx0YXhpcyA9PT0gJ1knXG5cdFx0XHRcdFx0XHQ/IChlbGVtZW50Lm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICogdmFsdWUpIC8gMTAwXG5cdFx0XHRcdFx0XHQ6IChlbGVtZW50Lm5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKiB2YWx1ZSkgLyAxMDA7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcignVW5yZWNvZ25pemVkIG9yIG1pc3NpbmcgZGlzdGFuY2UgdW5pdC4nKVxuXHRcdH1cblxuXHRcdGlmIChheGlzID09PSAnWScpIHtcblx0XHRcdHRyYW5zZm9ybWF0aW9ucy5wdXNoKHRyYW5zbGF0ZVkoZGlzdGFuY2UpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJhbnNmb3JtYXRpb25zLnB1c2godHJhbnNsYXRlWChkaXN0YW5jZSkpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChjb25maWcucm90YXRlLngpIHsgdHJhbnNmb3JtYXRpb25zLnB1c2gocm90YXRlWChjb25maWcucm90YXRlLngpKTsgfVxuXHRpZiAoY29uZmlnLnJvdGF0ZS55KSB7IHRyYW5zZm9ybWF0aW9ucy5wdXNoKHJvdGF0ZVkoY29uZmlnLnJvdGF0ZS55KSk7IH1cblx0aWYgKGNvbmZpZy5yb3RhdGUueikgeyB0cmFuc2Zvcm1hdGlvbnMucHVzaChyb3RhdGVaKGNvbmZpZy5yb3RhdGUueikpOyB9XG5cdGlmIChjb25maWcuc2NhbGUgIT09IDEpIHtcblx0XHRpZiAoY29uZmlnLnNjYWxlID09PSAwKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBDU1MgVHJhbnNmb3JtcyBtYXRyaXggaW50ZXJwb2xhdGlvbiBzcGVjaWZpY2F0aW9uXG5cdFx0XHQgKiBiYXNpY2FsbHkgZGlzYWxsb3dzIHRyYW5zaXRpb25zIG9mIG5vbi1pbnZlcnRpYmxlXG5cdFx0XHQgKiBtYXRyaXhlcywgd2hpY2ggbWVhbnMgYnJvd3NlcnMgd29uJ3QgdHJhbnNpdGlvblxuXHRcdFx0ICogZWxlbWVudHMgd2l0aCB6ZXJvIHNjYWxlLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoYXTigJlzIGluY29udmVuaWVudCBmb3IgdGhlIEFQSSBhbmQgZGV2ZWxvcGVyXG5cdFx0XHQgKiBleHBlcmllbmNlLCBzbyB3ZSBzaW1wbHkgbnVkZ2UgdGhlaXIgdmFsdWVcblx0XHRcdCAqIHNsaWdodGx5IGFib3ZlIHplcm87IHRoaXMgYWxsb3dzIGJyb3dzZXJzXG5cdFx0XHQgKiB0byB0cmFuc2l0aW9uIG91ciBlbGVtZW50IGFzIGV4cGVjdGVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIGAwLjAwMDJgIHdhcyB0aGUgc21hbGxlc3QgbnVtYmVyXG5cdFx0XHQgKiB0aGF0IHBlcmZvcm1lZCBhY3Jvc3MgYnJvd3NlcnMuXG5cdFx0XHQgKi9cblx0XHRcdHRyYW5zZm9ybWF0aW9ucy5wdXNoKHNjYWxlKDAuMDAwMikpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0cmFuc2Zvcm1hdGlvbnMucHVzaChzY2FsZShjb25maWcuc2NhbGUpKTtcblx0XHR9XG5cdH1cblxuXHR2YXIgdHJhbnNmb3JtID0ge307XG5cdGlmICh0cmFuc2Zvcm1hdGlvbnMubGVuZ3RoKSB7XG5cdFx0dHJhbnNmb3JtLnByb3BlcnR5ID0gZ2V0UHJlZml4ZWRDc3NQcm9wKCd0cmFuc2Zvcm0nKTtcblx0XHQvKipcblx0XHQgKiBUaGUgZGVmYXVsdCBjb21wdXRlZCB0cmFuc2Zvcm0gdmFsdWUgc2hvdWxkIGJlIG9uZSBvZjpcblx0XHQgKiB1bmRlZmluZWQgfHwgJ25vbmUnIHx8ICdtYXRyaXgoKScgfHwgJ21hdHJpeDNkKCknXG5cdFx0ICovXG5cdFx0dHJhbnNmb3JtLmNvbXB1dGVkID0ge1xuXHRcdFx0cmF3OiBjb21wdXRlZFt0cmFuc2Zvcm0ucHJvcGVydHldLFxuXHRcdFx0bWF0cml4OiBwYXJzZShjb21wdXRlZFt0cmFuc2Zvcm0ucHJvcGVydHldKVxuXHRcdH07XG5cblx0XHR0cmFuc2Zvcm1hdGlvbnMudW5zaGlmdCh0cmFuc2Zvcm0uY29tcHV0ZWQubWF0cml4KTtcblx0XHR2YXIgcHJvZHVjdCA9IHRyYW5zZm9ybWF0aW9ucy5yZWR1Y2UobXVsdGlwbHkpO1xuXG5cdFx0dHJhbnNmb3JtLmdlbmVyYXRlZCA9IHtcblx0XHRcdGluaXRpYWw6ICgodHJhbnNmb3JtLnByb3BlcnR5KSArIFwiOiBtYXRyaXgzZChcIiArIChwcm9kdWN0LmpvaW4oJywgJykpICsgXCIpO1wiKSxcblx0XHRcdGZpbmFsOiAoKHRyYW5zZm9ybS5wcm9wZXJ0eSkgKyBcIjogbWF0cml4M2QoXCIgKyAodHJhbnNmb3JtLmNvbXB1dGVkLm1hdHJpeC5qb2luKCcsICcpKSArIFwiKTtcIilcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHRyYW5zZm9ybS5nZW5lcmF0ZWQgPSB7XG5cdFx0XHRpbml0aWFsOiAnJyxcblx0XHRcdGZpbmFsOiAnJ1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogR2VuZXJhdGUgdHJhbnNpdGlvbiBzdHlsZXNcblx0ICovXG5cdHZhciB0cmFuc2l0aW9uID0ge307XG5cdGlmIChvcGFjaXR5LmdlbmVyYXRlZCB8fCB0cmFuc2Zvcm0uZ2VuZXJhdGVkLmluaXRpYWwpIHtcblx0XHR0cmFuc2l0aW9uLnByb3BlcnR5ID0gZ2V0UHJlZml4ZWRDc3NQcm9wKCd0cmFuc2l0aW9uJyk7XG5cdFx0dHJhbnNpdGlvbi5jb21wdXRlZCA9IGNvbXB1dGVkW3RyYW5zaXRpb24ucHJvcGVydHldO1xuXHRcdHRyYW5zaXRpb24uZnJhZ21lbnRzID0gW107XG5cblx0XHR2YXIgZGVsYXkgPSBjb25maWcuZGVsYXk7XG5cdFx0dmFyIGR1cmF0aW9uID0gY29uZmlnLmR1cmF0aW9uO1xuXHRcdHZhciBlYXNpbmcgPSBjb25maWcuZWFzaW5nO1xuXG5cdFx0aWYgKG9wYWNpdHkuZ2VuZXJhdGVkKSB7XG5cdFx0XHR0cmFuc2l0aW9uLmZyYWdtZW50cy5wdXNoKHtcblx0XHRcdFx0ZGVsYXllZDogKFwib3BhY2l0eSBcIiArIChkdXJhdGlvbiAvIDEwMDApICsgXCJzIFwiICsgZWFzaW5nICsgXCIgXCIgKyAoZGVsYXkgLyAxMDAwKSArIFwic1wiKSxcblx0XHRcdFx0aW5zdGFudDogKFwib3BhY2l0eSBcIiArIChkdXJhdGlvbiAvIDEwMDApICsgXCJzIFwiICsgZWFzaW5nICsgXCIgMHNcIilcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmICh0cmFuc2Zvcm0uZ2VuZXJhdGVkLmluaXRpYWwpIHtcblx0XHRcdHRyYW5zaXRpb24uZnJhZ21lbnRzLnB1c2goe1xuXHRcdFx0XHRkZWxheWVkOiAoKHRyYW5zZm9ybS5wcm9wZXJ0eSkgKyBcIiBcIiArIChkdXJhdGlvbiAvIDEwMDApICsgXCJzIFwiICsgZWFzaW5nICsgXCIgXCIgKyAoZGVsYXkgLyAxMDAwKSArIFwic1wiKSxcblx0XHRcdFx0aW5zdGFudDogKCh0cmFuc2Zvcm0ucHJvcGVydHkpICsgXCIgXCIgKyAoZHVyYXRpb24gLyAxMDAwKSArIFwicyBcIiArIGVhc2luZyArIFwiIDBzXCIpXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBUaGUgZGVmYXVsdCBjb21wdXRlZCB0cmFuc2l0aW9uIHByb3BlcnR5IHNob3VsZCBiZSB1bmRlZmluZWQsIG9yIG9uZSBvZjpcblx0XHQgKiAnJyB8fCAnbm9uZSAwcyBlYXNlIDBzJyB8fCAnYWxsIDBzIGVhc2UgMHMnIHx8ICdhbGwgMHMgMHMgY3ViaWMtYmV6aWVyKCknXG5cdFx0ICovXG5cdFx0dmFyIGhhc0N1c3RvbVRyYW5zaXRpb24gPVxuXHRcdFx0dHJhbnNpdGlvbi5jb21wdXRlZCAmJiAhdHJhbnNpdGlvbi5jb21wdXRlZC5tYXRjaCgvYWxsIDBzfG5vbmUgMHMvKTtcblxuXHRcdGlmIChoYXNDdXN0b21UcmFuc2l0aW9uKSB7XG5cdFx0XHR0cmFuc2l0aW9uLmZyYWdtZW50cy51bnNoaWZ0KHtcblx0XHRcdFx0ZGVsYXllZDogdHJhbnNpdGlvbi5jb21wdXRlZCxcblx0XHRcdFx0aW5zdGFudDogdHJhbnNpdGlvbi5jb21wdXRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dmFyIGNvbXBvc2VkID0gdHJhbnNpdGlvbi5mcmFnbWVudHMucmVkdWNlKFxuXHRcdFx0ZnVuY3Rpb24gKGNvbXBvc2l0aW9uLCBmcmFnbWVudCwgaSkge1xuXHRcdFx0XHRjb21wb3NpdGlvbi5kZWxheWVkICs9IGkgPT09IDAgPyBmcmFnbWVudC5kZWxheWVkIDogKFwiLCBcIiArIChmcmFnbWVudC5kZWxheWVkKSk7XG5cdFx0XHRcdGNvbXBvc2l0aW9uLmluc3RhbnQgKz0gaSA9PT0gMCA/IGZyYWdtZW50Lmluc3RhbnQgOiAoXCIsIFwiICsgKGZyYWdtZW50Lmluc3RhbnQpKTtcblx0XHRcdFx0cmV0dXJuIGNvbXBvc2l0aW9uXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRkZWxheWVkOiAnJyxcblx0XHRcdFx0aW5zdGFudDogJydcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dHJhbnNpdGlvbi5nZW5lcmF0ZWQgPSB7XG5cdFx0XHRkZWxheWVkOiAoKHRyYW5zaXRpb24ucHJvcGVydHkpICsgXCI6IFwiICsgKGNvbXBvc2VkLmRlbGF5ZWQpICsgXCI7XCIpLFxuXHRcdFx0aW5zdGFudDogKCh0cmFuc2l0aW9uLnByb3BlcnR5KSArIFwiOiBcIiArIChjb21wb3NlZC5pbnN0YW50KSArIFwiO1wiKVxuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0dHJhbnNpdGlvbi5nZW5lcmF0ZWQgPSB7XG5cdFx0XHRkZWxheWVkOiAnJyxcblx0XHRcdGluc3RhbnQ6ICcnXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aW5saW5lOiBpbmxpbmUsXG5cdFx0b3BhY2l0eTogb3BhY2l0eSxcblx0XHRwb3NpdGlvbjogcG9zaXRpb24sXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG5cdFx0dHJhbnNpdGlvbjogdHJhbnNpdGlvblxuXHR9XG59XG5cbi8qKlxuICogYXBwbHkgYSBDU1Mgc3RyaW5nIHRvIGFuIGVsZW1lbnQgdXNpbmcgdGhlIENTU09NIChlbGVtZW50LnN0eWxlKSByYXRoZXJcbiAqIHRoYW4gc2V0QXR0cmlidXRlLCB3aGljaCBtYXkgdmlvbGF0ZSB0aGUgY29udGVudCBzZWN1cml0eSBwb2xpY3kuXG4gKlxuICogQHBhcmFtIHtOb2RlfSAgIFtlbF0gIEVsZW1lbnQgdG8gcmVjZWl2ZSBzdHlsZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlY2xhcmF0aW9uXSBTdHlsZXMgdG8gYXBwbHkuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5U3R5bGUgKGVsLCBkZWNsYXJhdGlvbikge1xuXHRkZWNsYXJhdGlvbi5zcGxpdCgnOycpLmZvckVhY2goZnVuY3Rpb24gKHBhaXIpIHtcblx0XHR2YXIgcmVmID0gcGFpci5zcGxpdCgnOicpO1xuXHRcdHZhciBwcm9wZXJ0eSA9IHJlZlswXTtcblx0XHR2YXIgdmFsdWUgPSByZWYuc2xpY2UoMSk7XG5cdFx0aWYgKHByb3BlcnR5ICYmIHZhbHVlKSB7XG5cdFx0XHRlbC5zdHlsZVtwcm9wZXJ0eS50cmltKCldID0gdmFsdWUuam9pbignOicpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFuKHRhcmdldCkge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblxuXHR2YXIgZGlydHk7XG5cdHRyeSB7XG5cdFx0ZWFjaCgkKHRhcmdldCksIGZ1bmN0aW9uIChub2RlKSB7XG5cdFx0XHR2YXIgaWQgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1zci1pZCcpO1xuXHRcdFx0aWYgKGlkICE9PSBudWxsKSB7XG5cdFx0XHRcdGRpcnR5ID0gdHJ1ZTtcblx0XHRcdFx0dmFyIGVsZW1lbnQgPSB0aGlzJDEuc3RvcmUuZWxlbWVudHNbaWRdO1xuXHRcdFx0XHRpZiAoZWxlbWVudC5jYWxsYmFja1RpbWVyKSB7XG5cdFx0XHRcdFx0d2luZG93LmNsZWFyVGltZW91dChlbGVtZW50LmNhbGxiYWNrVGltZXIuY2xvY2spO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGFwcGx5U3R5bGUoZWxlbWVudC5ub2RlLCBlbGVtZW50LnN0eWxlcy5pbmxpbmUuZ2VuZXJhdGVkKTtcblx0XHRcdFx0bm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnKTtcblx0XHRcdFx0ZGVsZXRlIHRoaXMkMS5zdG9yZS5lbGVtZW50c1tpZF07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gbG9nZ2VyLmNhbGwodGhpcywgJ0NsZWFuIGZhaWxlZC4nLCBlLm1lc3NhZ2UpXG5cdH1cblxuXHRpZiAoZGlydHkpIHtcblx0XHR0cnkge1xuXHRcdFx0cmluc2UuY2FsbCh0aGlzKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gbG9nZ2VyLmNhbGwodGhpcywgJ0NsZWFuIGZhaWxlZC4nLCBlLm1lc3NhZ2UpXG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdHZhciB0aGlzJDEgPSB0aGlzO1xuXG5cdC8qKlxuXHQgKiBSZW1vdmUgYWxsIGdlbmVyYXRlZCBzdHlsZXMgYW5kIGVsZW1lbnQgaWRzXG5cdCAqL1xuXHRlYWNoKHRoaXMuc3RvcmUuZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0YXBwbHlTdHlsZShlbGVtZW50Lm5vZGUsIGVsZW1lbnQuc3R5bGVzLmlubGluZS5nZW5lcmF0ZWQpO1xuXHRcdGVsZW1lbnQubm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnKTtcblx0fSk7XG5cblx0LyoqXG5cdCAqIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzLlxuXHQgKi9cblx0ZWFjaCh0aGlzLnN0b3JlLmNvbnRhaW5lcnMsIGZ1bmN0aW9uIChjb250YWluZXIpIHtcblx0XHR2YXIgdGFyZ2V0ID1cblx0XHRcdGNvbnRhaW5lci5ub2RlID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyB3aW5kb3cgOiBjb250YWluZXIubm9kZTtcblx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcyQxLmRlbGVnYXRlKTtcblx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcyQxLmRlbGVnYXRlKTtcblx0fSk7XG5cblx0LyoqXG5cdCAqIENsZWFyIGFsbCBkYXRhIGZyb20gdGhlIHN0b3JlXG5cdCAqL1xuXHR0aGlzLnN0b3JlID0ge1xuXHRcdGNvbnRhaW5lcnM6IHt9LFxuXHRcdGVsZW1lbnRzOiB7fSxcblx0XHRoaXN0b3J5OiBbXSxcblx0XHRzZXF1ZW5jZXM6IHt9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGRlZXBBc3NpZ24odGFyZ2V0KSB7XG5cdHZhciBzb3VyY2VzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuXHR3aGlsZSAoIGxlbi0tID4gMCApIHNvdXJjZXNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cblx0aWYgKGlzT2JqZWN0KHRhcmdldCkpIHtcblx0XHRlYWNoKHNvdXJjZXMsIGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdGVhY2goc291cmNlLCBmdW5jdGlvbiAoZGF0YSwga2V5KSB7XG5cdFx0XHRcdGlmIChpc09iamVjdChkYXRhKSkge1xuXHRcdFx0XHRcdGlmICghdGFyZ2V0W2tleV0gfHwgIWlzT2JqZWN0KHRhcmdldFtrZXldKSkge1xuXHRcdFx0XHRcdFx0dGFyZ2V0W2tleV0gPSB7fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVlcEFzc2lnbih0YXJnZXRba2V5XSwgZGF0YSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGFyZ2V0W2tleV0gPSBkYXRhO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdGFyZ2V0XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignVGFyZ2V0IG11c3QgYmUgYW4gb2JqZWN0IGxpdGVyYWwuJylcblx0fVxufVxuXG5mdW5jdGlvbiBpc01vYmlsZShhZ2VudCkge1xuXHRpZiAoIGFnZW50ID09PSB2b2lkIDAgKSBhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cblx0cmV0dXJuIC9BbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2QvaS50ZXN0KGFnZW50KVxufVxuXG52YXIgbmV4dFVuaXF1ZUlkID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHVpZCA9IDA7XG5cdHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB1aWQrKzsgfVxufSkoKTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0cmluc2UuY2FsbCh0aGlzKTtcblxuXHRlYWNoKHRoaXMuc3RvcmUuZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0dmFyIHN0eWxlcyA9IFtlbGVtZW50LnN0eWxlcy5pbmxpbmUuZ2VuZXJhdGVkXTtcblxuXHRcdGlmIChlbGVtZW50LnZpc2libGUpIHtcblx0XHRcdHN0eWxlcy5wdXNoKGVsZW1lbnQuc3R5bGVzLm9wYWNpdHkuY29tcHV0ZWQpO1xuXHRcdFx0c3R5bGVzLnB1c2goZWxlbWVudC5zdHlsZXMudHJhbnNmb3JtLmdlbmVyYXRlZC5maW5hbCk7XG5cdFx0XHRlbGVtZW50LnJldmVhbGVkID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVzLnB1c2goZWxlbWVudC5zdHlsZXMub3BhY2l0eS5nZW5lcmF0ZWQpO1xuXHRcdFx0c3R5bGVzLnB1c2goZWxlbWVudC5zdHlsZXMudHJhbnNmb3JtLmdlbmVyYXRlZC5pbml0aWFsKTtcblx0XHRcdGVsZW1lbnQucmV2ZWFsZWQgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRhcHBseVN0eWxlKGVsZW1lbnQubm9kZSwgc3R5bGVzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcyAhPT0gJyc7IH0pLmpvaW4oJyAnKSk7XG5cdH0pO1xuXG5cdGVhY2godGhpcy5zdG9yZS5jb250YWluZXJzLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0dmFyIHRhcmdldCA9XG5cdFx0XHRjb250YWluZXIubm9kZSA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gd2luZG93IDogY29udGFpbmVyLm5vZGU7XG5cdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMkMS5kZWxlZ2F0ZSk7XG5cdFx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMkMS5kZWxlZ2F0ZSk7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBNYW51YWxseSBpbnZva2UgZGVsZWdhdGUgb25jZSB0byBjYXB0dXJlXG5cdCAqIGVsZW1lbnQgYW5kIGNvbnRhaW5lciBkaW1lbnNpb25zLCBjb250YWluZXJcblx0ICogc2Nyb2xsIHBvc2l0aW9uLCBhbmQgdHJpZ2dlciBhbnkgdmFsaWQgcmV2ZWFsc1xuXHQgKi9cblx0dGhpcy5kZWxlZ2F0ZSgpO1xuXG5cdC8qKlxuXHQgKiBXaXBlIGFueSBleGlzdGluZyBgc2V0VGltZW91dGAgbm93XG5cdCAqIHRoYXQgaW5pdGlhbGl6YXRpb24gaGFzIGNvbXBsZXRlZC5cblx0ICovXG5cdHRoaXMuaW5pdFRpbWVvdXQgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlKGVsZW1lbnQsIGZvcmNlKSB7XG5cdGlmICggZm9yY2UgPT09IHZvaWQgMCApIGZvcmNlID0ge307XG5cblx0dmFyIHByaXN0aW5lID0gZm9yY2UucHJpc3RpbmUgfHwgdGhpcy5wcmlzdGluZTtcblx0dmFyIGRlbGF5ZWQgPVxuXHRcdGVsZW1lbnQuY29uZmlnLnVzZURlbGF5ID09PSAnYWx3YXlzJyB8fFxuXHRcdChlbGVtZW50LmNvbmZpZy51c2VEZWxheSA9PT0gJ29ubG9hZCcgJiYgcHJpc3RpbmUpIHx8XG5cdFx0KGVsZW1lbnQuY29uZmlnLnVzZURlbGF5ID09PSAnb25jZScgJiYgIWVsZW1lbnQuc2Vlbik7XG5cblx0dmFyIHNob3VsZFJldmVhbCA9IGVsZW1lbnQudmlzaWJsZSAmJiAhZWxlbWVudC5yZXZlYWxlZDtcblx0dmFyIHNob3VsZFJlc2V0ID0gIWVsZW1lbnQudmlzaWJsZSAmJiBlbGVtZW50LnJldmVhbGVkICYmIGVsZW1lbnQuY29uZmlnLnJlc2V0O1xuXG5cdGlmIChmb3JjZS5yZXZlYWwgfHwgc2hvdWxkUmV2ZWFsKSB7XG5cdFx0cmV0dXJuIHRyaWdnZXJSZXZlYWwuY2FsbCh0aGlzLCBlbGVtZW50LCBkZWxheWVkKVxuXHR9XG5cblx0aWYgKGZvcmNlLnJlc2V0IHx8IHNob3VsZFJlc2V0KSB7XG5cdFx0cmV0dXJuIHRyaWdnZXJSZXNldC5jYWxsKHRoaXMsIGVsZW1lbnQpXG5cdH1cbn1cblxuZnVuY3Rpb24gdHJpZ2dlclJldmVhbChlbGVtZW50LCBkZWxheWVkKSB7XG5cdHZhciBzdHlsZXMgPSBbXG5cdFx0ZWxlbWVudC5zdHlsZXMuaW5saW5lLmdlbmVyYXRlZCxcblx0XHRlbGVtZW50LnN0eWxlcy5vcGFjaXR5LmNvbXB1dGVkLFxuXHRcdGVsZW1lbnQuc3R5bGVzLnRyYW5zZm9ybS5nZW5lcmF0ZWQuZmluYWxcblx0XTtcblx0aWYgKGRlbGF5ZWQpIHtcblx0XHRzdHlsZXMucHVzaChlbGVtZW50LnN0eWxlcy50cmFuc2l0aW9uLmdlbmVyYXRlZC5kZWxheWVkKTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZXMucHVzaChlbGVtZW50LnN0eWxlcy50cmFuc2l0aW9uLmdlbmVyYXRlZC5pbnN0YW50KTtcblx0fVxuXHRlbGVtZW50LnJldmVhbGVkID0gZWxlbWVudC5zZWVuID0gdHJ1ZTtcblx0YXBwbHlTdHlsZShlbGVtZW50Lm5vZGUsIHN0eWxlcy5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgIT09ICcnOyB9KS5qb2luKCcgJykpO1xuXHRyZWdpc3RlckNhbGxiYWNrcy5jYWxsKHRoaXMsIGVsZW1lbnQsIGRlbGF5ZWQpO1xufVxuXG5mdW5jdGlvbiB0cmlnZ2VyUmVzZXQoZWxlbWVudCkge1xuXHR2YXIgc3R5bGVzID0gW1xuXHRcdGVsZW1lbnQuc3R5bGVzLmlubGluZS5nZW5lcmF0ZWQsXG5cdFx0ZWxlbWVudC5zdHlsZXMub3BhY2l0eS5nZW5lcmF0ZWQsXG5cdFx0ZWxlbWVudC5zdHlsZXMudHJhbnNmb3JtLmdlbmVyYXRlZC5pbml0aWFsLFxuXHRcdGVsZW1lbnQuc3R5bGVzLnRyYW5zaXRpb24uZ2VuZXJhdGVkLmluc3RhbnRcblx0XTtcblx0ZWxlbWVudC5yZXZlYWxlZCA9IGZhbHNlO1xuXHRhcHBseVN0eWxlKGVsZW1lbnQubm9kZSwgc3R5bGVzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcyAhPT0gJyc7IH0pLmpvaW4oJyAnKSk7XG5cdHJlZ2lzdGVyQ2FsbGJhY2tzLmNhbGwodGhpcywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2FsbGJhY2tzKGVsZW1lbnQsIGlzRGVsYXllZCkge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblxuXHR2YXIgZHVyYXRpb24gPSBpc0RlbGF5ZWRcblx0XHQ/IGVsZW1lbnQuY29uZmlnLmR1cmF0aW9uICsgZWxlbWVudC5jb25maWcuZGVsYXlcblx0XHQ6IGVsZW1lbnQuY29uZmlnLmR1cmF0aW9uO1xuXG5cdHZhciBiZWZvcmVDYWxsYmFjayA9IGVsZW1lbnQucmV2ZWFsZWRcblx0XHQ/IGVsZW1lbnQuY29uZmlnLmJlZm9yZVJldmVhbFxuXHRcdDogZWxlbWVudC5jb25maWcuYmVmb3JlUmVzZXQ7XG5cblx0dmFyIGFmdGVyQ2FsbGJhY2sgPSBlbGVtZW50LnJldmVhbGVkXG5cdFx0PyBlbGVtZW50LmNvbmZpZy5hZnRlclJldmVhbFxuXHRcdDogZWxlbWVudC5jb25maWcuYWZ0ZXJSZXNldDtcblxuXHR2YXIgZWxhcHNlZCA9IDA7XG5cdGlmIChlbGVtZW50LmNhbGxiYWNrVGltZXIpIHtcblx0XHRlbGFwc2VkID0gRGF0ZS5ub3coKSAtIGVsZW1lbnQuY2FsbGJhY2tUaW1lci5zdGFydDtcblx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KGVsZW1lbnQuY2FsbGJhY2tUaW1lci5jbG9jayk7XG5cdH1cblxuXHRiZWZvcmVDYWxsYmFjayhlbGVtZW50Lm5vZGUpO1xuXG5cdGVsZW1lbnQuY2FsbGJhY2tUaW1lciA9IHtcblx0XHRzdGFydDogRGF0ZS5ub3coKSxcblx0XHRjbG9jazogd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0YWZ0ZXJDYWxsYmFjayhlbGVtZW50Lm5vZGUpO1xuXHRcdFx0ZWxlbWVudC5jYWxsYmFja1RpbWVyID0gbnVsbDtcblx0XHRcdGlmIChlbGVtZW50LnJldmVhbGVkICYmICFlbGVtZW50LmNvbmZpZy5yZXNldCAmJiBlbGVtZW50LmNvbmZpZy5jbGVhbnVwKSB7XG5cdFx0XHRcdGNsZWFuLmNhbGwodGhpcyQxLCBlbGVtZW50Lm5vZGUpO1xuXHRcdFx0fVxuXHRcdH0sIGR1cmF0aW9uIC0gZWxhcHNlZClcblx0fTtcbn1cblxuZnVuY3Rpb24gc2VxdWVuY2UoZWxlbWVudCwgcHJpc3RpbmUpIHtcblx0aWYgKCBwcmlzdGluZSA9PT0gdm9pZCAwICkgcHJpc3RpbmUgPSB0aGlzLnByaXN0aW5lO1xuXG5cdC8qKlxuXHQgKiBXZSBmaXJzdCBjaGVjayBpZiB0aGUgZWxlbWVudCBzaG91bGQgcmVzZXQuXG5cdCAqL1xuXHRpZiAoIWVsZW1lbnQudmlzaWJsZSAmJiBlbGVtZW50LnJldmVhbGVkICYmIGVsZW1lbnQuY29uZmlnLnJlc2V0KSB7XG5cdFx0cmV0dXJuIGFuaW1hdGUuY2FsbCh0aGlzLCBlbGVtZW50LCB7IHJlc2V0OiB0cnVlIH0pXG5cdH1cblxuXHR2YXIgc2VxID0gdGhpcy5zdG9yZS5zZXF1ZW5jZXNbZWxlbWVudC5zZXF1ZW5jZS5pZF07XG5cdHZhciBpID0gZWxlbWVudC5zZXF1ZW5jZS5pbmRleDtcblxuXHRpZiAoc2VxKSB7XG5cdFx0dmFyIHZpc2libGUgPSBuZXcgU2VxdWVuY2VNb2RlbChzZXEsICd2aXNpYmxlJywgdGhpcy5zdG9yZSk7XG5cdFx0dmFyIHJldmVhbGVkID0gbmV3IFNlcXVlbmNlTW9kZWwoc2VxLCAncmV2ZWFsZWQnLCB0aGlzLnN0b3JlKTtcblxuXHRcdHNlcS5tb2RlbHMgPSB7IHZpc2libGU6IHZpc2libGUsIHJldmVhbGVkOiByZXZlYWxlZCB9O1xuXG5cdFx0LyoqXG5cdFx0ICogSWYgdGhlIHNlcXVlbmNlIGhhcyBubyByZXZlYWxlZCBtZW1iZXJzLFxuXHRcdCAqIHRoZW4gd2UgcmV2ZWFsIHRoZSBmaXJzdCB2aXNpYmxlIGVsZW1lbnRcblx0XHQgKiB3aXRoaW4gdGhhdCBzZXF1ZW5jZS5cblx0XHQgKlxuXHRcdCAqIFRoZSBzZXF1ZW5jZSB0aGVuIGN1ZXMgYSByZWN1cnNpdmUgY2FsbFxuXHRcdCAqIGluIGJvdGggZGlyZWN0aW9ucy5cblx0XHQgKi9cblx0XHRpZiAoIXJldmVhbGVkLmJvZHkubGVuZ3RoKSB7XG5cdFx0XHR2YXIgbmV4dElkID0gc2VxLm1lbWJlcnNbdmlzaWJsZS5ib2R5WzBdXTtcblx0XHRcdHZhciBuZXh0RWxlbWVudCA9IHRoaXMuc3RvcmUuZWxlbWVudHNbbmV4dElkXTtcblxuXHRcdFx0aWYgKG5leHRFbGVtZW50KSB7XG5cdFx0XHRcdGN1ZS5jYWxsKHRoaXMsIHNlcSwgdmlzaWJsZS5ib2R5WzBdLCAtMSwgcHJpc3RpbmUpO1xuXHRcdFx0XHRjdWUuY2FsbCh0aGlzLCBzZXEsIHZpc2libGUuYm9keVswXSwgKzEsIHByaXN0aW5lKTtcblx0XHRcdFx0cmV0dXJuIGFuaW1hdGUuY2FsbCh0aGlzLCBuZXh0RWxlbWVudCwgeyByZXZlYWw6IHRydWUsIHByaXN0aW5lOiBwcmlzdGluZSB9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIElmIG91ciBlbGVtZW50IGlzbuKAmXQgcmVzZXR0aW5nLCB3ZSBjaGVjayB0aGVcblx0XHQgKiBlbGVtZW50IHNlcXVlbmNlIGluZGV4IGFnYWluc3QgdGhlIGhlYWQsIGFuZFxuXHRcdCAqIHRoZW4gdGhlIGZvb3Qgb2YgdGhlIHNlcXVlbmNlLlxuXHRcdCAqL1xuXHRcdGlmIChcblx0XHRcdCFzZXEuYmxvY2tlZC5oZWFkICYmXG5cdFx0XHRpID09PSBbXS5jb25jYXQoIHJldmVhbGVkLmhlYWQgKS5wb3AoKSAmJlxuXHRcdFx0aSA+PSBbXS5jb25jYXQoIHZpc2libGUuYm9keSApLnNoaWZ0KClcblx0XHQpIHtcblx0XHRcdGN1ZS5jYWxsKHRoaXMsIHNlcSwgaSwgLTEsIHByaXN0aW5lKTtcblx0XHRcdHJldHVybiBhbmltYXRlLmNhbGwodGhpcywgZWxlbWVudCwgeyByZXZlYWw6IHRydWUsIHByaXN0aW5lOiBwcmlzdGluZSB9KVxuXHRcdH1cblxuXHRcdGlmIChcblx0XHRcdCFzZXEuYmxvY2tlZC5mb290ICYmXG5cdFx0XHRpID09PSBbXS5jb25jYXQoIHJldmVhbGVkLmZvb3QgKS5zaGlmdCgpICYmXG5cdFx0XHRpIDw9IFtdLmNvbmNhdCggdmlzaWJsZS5ib2R5ICkucG9wKClcblx0XHQpIHtcblx0XHRcdGN1ZS5jYWxsKHRoaXMsIHNlcSwgaSwgKzEsIHByaXN0aW5lKTtcblx0XHRcdHJldHVybiBhbmltYXRlLmNhbGwodGhpcywgZWxlbWVudCwgeyByZXZlYWw6IHRydWUsIHByaXN0aW5lOiBwcmlzdGluZSB9KVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBTZXF1ZW5jZShpbnRlcnZhbCkge1xuXHR2YXIgaSA9IE1hdGguYWJzKGludGVydmFsKTtcblx0aWYgKCFpc05hTihpKSkge1xuXHRcdHRoaXMuaWQgPSBuZXh0VW5pcXVlSWQoKTtcblx0XHR0aGlzLmludGVydmFsID0gTWF0aC5tYXgoaSwgMTYpO1xuXHRcdHRoaXMubWVtYmVycyA9IFtdO1xuXHRcdHRoaXMubW9kZWxzID0ge307XG5cdFx0dGhpcy5ibG9ja2VkID0ge1xuXHRcdFx0aGVhZDogZmFsc2UsXG5cdFx0XHRmb290OiBmYWxzZVxuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc2VxdWVuY2UgaW50ZXJ2YWwuJylcblx0fVxufVxuXG5mdW5jdGlvbiBTZXF1ZW5jZU1vZGVsKHNlcSwgcHJvcCwgc3RvcmUpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0dGhpcy5oZWFkID0gW107XG5cdHRoaXMuYm9keSA9IFtdO1xuXHR0aGlzLmZvb3QgPSBbXTtcblxuXHRlYWNoKHNlcS5tZW1iZXJzLCBmdW5jdGlvbiAoaWQsIGluZGV4KSB7XG5cdFx0dmFyIGVsZW1lbnQgPSBzdG9yZS5lbGVtZW50c1tpZF07XG5cdFx0aWYgKGVsZW1lbnQgJiYgZWxlbWVudFtwcm9wXSkge1xuXHRcdFx0dGhpcyQxLmJvZHkucHVzaChpbmRleCk7XG5cdFx0fVxuXHR9KTtcblxuXHRpZiAodGhpcy5ib2R5Lmxlbmd0aCkge1xuXHRcdGVhY2goc2VxLm1lbWJlcnMsIGZ1bmN0aW9uIChpZCwgaW5kZXgpIHtcblx0XHRcdHZhciBlbGVtZW50ID0gc3RvcmUuZWxlbWVudHNbaWRdO1xuXHRcdFx0aWYgKGVsZW1lbnQgJiYgIWVsZW1lbnRbcHJvcF0pIHtcblx0XHRcdFx0aWYgKGluZGV4IDwgdGhpcyQxLmJvZHlbMF0pIHtcblx0XHRcdFx0XHR0aGlzJDEuaGVhZC5wdXNoKGluZGV4KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzJDEuZm9vdC5wdXNoKGluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGN1ZShzZXEsIGksIGRpcmVjdGlvbiwgcHJpc3RpbmUpIHtcblx0dmFyIHRoaXMkMSA9IHRoaXM7XG5cblx0dmFyIGJsb2NrZWQgPSBbJ2hlYWQnLCBudWxsLCAnZm9vdCddWzEgKyBkaXJlY3Rpb25dO1xuXHR2YXIgbmV4dElkID0gc2VxLm1lbWJlcnNbaSArIGRpcmVjdGlvbl07XG5cdHZhciBuZXh0RWxlbWVudCA9IHRoaXMuc3RvcmUuZWxlbWVudHNbbmV4dElkXTtcblxuXHRzZXEuYmxvY2tlZFtibG9ja2VkXSA9IHRydWU7XG5cblx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0c2VxLmJsb2NrZWRbYmxvY2tlZF0gPSBmYWxzZTtcblx0XHRpZiAobmV4dEVsZW1lbnQpIHtcblx0XHRcdHNlcXVlbmNlLmNhbGwodGhpcyQxLCBuZXh0RWxlbWVudCwgcHJpc3RpbmUpO1xuXHRcdH1cblx0fSwgc2VxLmludGVydmFsKTtcbn1cblxuZnVuY3Rpb24gcmV2ZWFsKHRhcmdldCwgb3B0aW9ucywgc3luY2luZykge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblx0aWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cdGlmICggc3luY2luZyA9PT0gdm9pZCAwICkgc3luY2luZyA9IGZhbHNlO1xuXG5cdHZhciBjb250YWluZXJCdWZmZXIgPSBbXTtcblx0dmFyIHNlcXVlbmNlJCQxO1xuXHR2YXIgaW50ZXJ2YWwgPSBvcHRpb25zLmludGVydmFsIHx8IGRlZmF1bHRzLmludGVydmFsO1xuXG5cdHRyeSB7XG5cdFx0aWYgKGludGVydmFsKSB7XG5cdFx0XHRzZXF1ZW5jZSQkMSA9IG5ldyBTZXF1ZW5jZShpbnRlcnZhbCk7XG5cdFx0fVxuXG5cdFx0dmFyIG5vZGVzID0gJCh0YXJnZXQpO1xuXHRcdGlmICghbm9kZXMubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmV2ZWFsIHRhcmdldC4nKVxuXHRcdH1cblxuXHRcdHZhciBlbGVtZW50cyA9IG5vZGVzLnJlZHVjZShmdW5jdGlvbiAoZWxlbWVudEJ1ZmZlciwgZWxlbWVudE5vZGUpIHtcblx0XHRcdHZhciBlbGVtZW50ID0ge307XG5cdFx0XHR2YXIgZXhpc3RpbmdJZCA9IGVsZW1lbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1zci1pZCcpO1xuXG5cdFx0XHRpZiAoZXhpc3RpbmdJZCkge1xuXHRcdFx0XHRkZWVwQXNzaWduKGVsZW1lbnQsIHRoaXMkMS5zdG9yZS5lbGVtZW50c1tleGlzdGluZ0lkXSk7XG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEluIG9yZGVyIHRvIHByZXZlbnQgcHJldmlvdXNseSBnZW5lcmF0ZWQgc3R5bGVzXG5cdFx0XHRcdCAqIGZyb20gdGhyb3dpbmcgb2ZmIHRoZSBuZXcgc3R5bGVzLCB0aGUgc3R5bGUgdGFnXG5cdFx0XHRcdCAqIGhhcyB0byBiZSByZXZlcnRlZCB0byBpdHMgcHJlLXJldmVhbCBzdGF0ZS5cblx0XHRcdFx0ICovXG5cdFx0XHRcdGFwcGx5U3R5bGUoZWxlbWVudC5ub2RlLCBlbGVtZW50LnN0eWxlcy5pbmxpbmUuY29tcHV0ZWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5pZCA9IG5leHRVbmlxdWVJZCgpO1xuXHRcdFx0XHRlbGVtZW50Lm5vZGUgPSBlbGVtZW50Tm9kZTtcblx0XHRcdFx0ZWxlbWVudC5zZWVuID0gZmFsc2U7XG5cdFx0XHRcdGVsZW1lbnQucmV2ZWFsZWQgPSBmYWxzZTtcblx0XHRcdFx0ZWxlbWVudC52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBjb25maWcgPSBkZWVwQXNzaWduKHt9LCBlbGVtZW50LmNvbmZpZyB8fCB0aGlzJDEuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG5cdFx0XHRpZiAoKCFjb25maWcubW9iaWxlICYmIGlzTW9iaWxlKCkpIHx8ICghY29uZmlnLmRlc2t0b3AgJiYgIWlzTW9iaWxlKCkpKSB7XG5cdFx0XHRcdGlmIChleGlzdGluZ0lkKSB7XG5cdFx0XHRcdFx0Y2xlYW4uY2FsbCh0aGlzJDEsIGVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBlbGVtZW50QnVmZmVyIC8vIHNraXAgZWxlbWVudHMgdGhhdCBhcmUgZGlzYWJsZWRcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNvbnRhaW5lck5vZGUgPSAkKGNvbmZpZy5jb250YWluZXIpWzBdO1xuXHRcdFx0aWYgKCFjb250YWluZXJOb2RlKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb250YWluZXIuJylcblx0XHRcdH1cblx0XHRcdGlmICghY29udGFpbmVyTm9kZS5jb250YWlucyhlbGVtZW50Tm9kZSkpIHtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnRCdWZmZXIgLy8gc2tpcCBlbGVtZW50cyBmb3VuZCBvdXRzaWRlIHRoZSBjb250YWluZXJcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNvbnRhaW5lcklkO1xuXHRcdFx0e1xuXHRcdFx0XHRjb250YWluZXJJZCA9IGdldENvbnRhaW5lcklkKFxuXHRcdFx0XHRcdGNvbnRhaW5lck5vZGUsXG5cdFx0XHRcdFx0Y29udGFpbmVyQnVmZmVyLFxuXHRcdFx0XHRcdHRoaXMkMS5zdG9yZS5jb250YWluZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjb250YWluZXJJZCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnRhaW5lcklkID0gbmV4dFVuaXF1ZUlkKCk7XG5cdFx0XHRcdFx0Y29udGFpbmVyQnVmZmVyLnB1c2goeyBpZDogY29udGFpbmVySWQsIG5vZGU6IGNvbnRhaW5lck5vZGUgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZWxlbWVudC5jb25maWcgPSBjb25maWc7XG5cdFx0XHRlbGVtZW50LmNvbnRhaW5lcklkID0gY29udGFpbmVySWQ7XG5cdFx0XHRlbGVtZW50LnN0eWxlcyA9IHN0eWxlKGVsZW1lbnQpO1xuXG5cdFx0XHRpZiAoc2VxdWVuY2UkJDEpIHtcblx0XHRcdFx0ZWxlbWVudC5zZXF1ZW5jZSA9IHtcblx0XHRcdFx0XHRpZDogc2VxdWVuY2UkJDEuaWQsXG5cdFx0XHRcdFx0aW5kZXg6IHNlcXVlbmNlJCQxLm1lbWJlcnMubGVuZ3RoXG5cdFx0XHRcdH07XG5cdFx0XHRcdHNlcXVlbmNlJCQxLm1lbWJlcnMucHVzaChlbGVtZW50LmlkKTtcblx0XHRcdH1cblxuXHRcdFx0ZWxlbWVudEJ1ZmZlci5wdXNoKGVsZW1lbnQpO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnRCdWZmZXJcblx0XHR9LCBbXSk7XG5cblx0XHQvKipcblx0XHQgKiBNb2RpZnlpbmcgdGhlIERPTSB2aWEgc2V0QXR0cmlidXRlIG5lZWRzIHRvIGJlIGhhbmRsZWRcblx0XHQgKiBzZXBhcmF0ZWx5IGZyb20gcmVhZGluZyBjb21wdXRlZCBzdHlsZXMgaW4gdGhlIG1hcCBhYm92ZVxuXHRcdCAqIGZvciB0aGUgYnJvd3NlciB0byBiYXRjaCBET00gY2hhbmdlcyAobGltaXRpbmcgcmVmbG93cylcblx0XHQgKi9cblx0XHRlYWNoKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0dGhpcyQxLnN0b3JlLmVsZW1lbnRzW2VsZW1lbnQuaWRdID0gZWxlbWVudDtcblx0XHRcdGVsZW1lbnQubm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3ItaWQnLCBlbGVtZW50LmlkKTtcblx0XHR9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBsb2dnZXIuY2FsbCh0aGlzLCAnUmV2ZWFsIGZhaWxlZC4nLCBlLm1lc3NhZ2UpXG5cdH1cblxuXHQvKipcblx0ICogTm93IHRoYXQgZWxlbWVudCBzZXQtdXAgaXMgY29tcGxldGUuLi5cblx0ICogTGV04oCZcyBjb21taXQgYW55IGNvbnRhaW5lciBhbmQgc2VxdWVuY2UgZGF0YSB3ZSBoYXZlIHRvIHRoZSBzdG9yZS5cblx0ICovXG5cdGVhY2goY29udGFpbmVyQnVmZmVyLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0dGhpcyQxLnN0b3JlLmNvbnRhaW5lcnNbY29udGFpbmVyLmlkXSA9IHtcblx0XHRcdGlkOiBjb250YWluZXIuaWQsXG5cdFx0XHRub2RlOiBjb250YWluZXIubm9kZVxuXHRcdH07XG5cdH0pO1xuXHRpZiAoc2VxdWVuY2UkJDEpIHtcblx0XHR0aGlzLnN0b3JlLnNlcXVlbmNlc1tzZXF1ZW5jZSQkMS5pZF0gPSBzZXF1ZW5jZSQkMTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJZiByZXZlYWwgd2Fzbid0IGludm9rZWQgYnkgc3luYywgd2Ugd2FudCB0b1xuXHQgKiBtYWtlIHN1cmUgdG8gYWRkIHRoaXMgY2FsbCB0byB0aGUgaGlzdG9yeS5cblx0ICovXG5cdGlmIChzeW5jaW5nICE9PSB0cnVlKSB7XG5cdFx0dGhpcy5zdG9yZS5oaXN0b3J5LnB1c2goeyB0YXJnZXQ6IHRhcmdldCwgb3B0aW9uczogb3B0aW9ucyB9KTtcblxuXHRcdC8qKlxuXHRcdCAqIFB1c2ggaW5pdGlhbGl6YXRpb24gdG8gdGhlIGV2ZW50IHF1ZXVlLCBnaXZpbmdcblx0XHQgKiBtdWx0aXBsZSByZXZlYWwgY2FsbHMgdGltZSB0byBiZSBpbnRlcnByZXRlZC5cblx0XHQgKi9cblx0XHRpZiAodGhpcy5pbml0VGltZW91dCkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLmluaXRUaW1lb3V0KTtcblx0XHR9XG5cdFx0dGhpcy5pbml0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGluaXRpYWxpemUuYmluZCh0aGlzKSwgMCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmVySWQobm9kZSkge1xuXHR2YXIgY29sbGVjdGlvbnMgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG5cdHdoaWxlICggbGVuLS0gPiAwICkgY29sbGVjdGlvbnNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cblx0dmFyIGlkID0gbnVsbDtcblx0ZWFjaChjb2xsZWN0aW9ucywgZnVuY3Rpb24gKGNvbGxlY3Rpb24pIHtcblx0XHRlYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uIChjb250YWluZXIpIHtcblx0XHRcdGlmIChpZCA9PT0gbnVsbCAmJiBjb250YWluZXIubm9kZSA9PT0gbm9kZSkge1xuXHRcdFx0XHRpZCA9IGNvbnRhaW5lci5pZDtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG5cdHJldHVybiBpZFxufVxuXG4vKipcbiAqIFJlLXJ1bnMgdGhlIHJldmVhbCBtZXRob2QgZm9yIGVhY2ggcmVjb3JkIHN0b3JlZCBpbiBoaXN0b3J5LFxuICogZm9yIGNhcHR1cmluZyBuZXcgY29udGVudCBhc3luY2hyb25vdXNseSBsb2FkZWQgaW50byB0aGUgRE9NLlxuICovXG5mdW5jdGlvbiBzeW5jKCkge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblxuXHRlYWNoKHRoaXMuc3RvcmUuaGlzdG9yeSwgZnVuY3Rpb24gKHJlY29yZCkge1xuXHRcdHJldmVhbC5jYWxsKHRoaXMkMSwgcmVjb3JkLnRhcmdldCwgcmVjb3JkLm9wdGlvbnMsIHRydWUpO1xuXHR9KTtcblxuXHRpbml0aWFsaXplLmNhbGwodGhpcyk7XG59XG5cbnZhciBwb2x5ZmlsbCA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoeCA+IDApIC0gKHggPCAwKSB8fCAreDsgfTtcbnZhciBtYXRoU2lnbiA9IE1hdGguc2lnbiB8fCBwb2x5ZmlsbDtcblxuZnVuY3Rpb24gZ2V0R2VvbWV0cnkodGFyZ2V0LCBpc0NvbnRhaW5lcikge1xuXHQvKipcblx0ICogV2Ugd2FudCB0byBpZ25vcmUgcGFkZGluZyBhbmQgc2Nyb2xsYmFycyBmb3IgY29udGFpbmVyIGVsZW1lbnRzLlxuXHQgKiBNb3JlIGluZm9ybWF0aW9uIGhlcmU6IGh0dHBzOi8vZ29vLmdsL3ZPWnBielxuXHQgKi9cblx0dmFyIGhlaWdodCA9IGlzQ29udGFpbmVyID8gdGFyZ2V0Lm5vZGUuY2xpZW50SGVpZ2h0IDogdGFyZ2V0Lm5vZGUub2Zmc2V0SGVpZ2h0O1xuXHR2YXIgd2lkdGggPSBpc0NvbnRhaW5lciA/IHRhcmdldC5ub2RlLmNsaWVudFdpZHRoIDogdGFyZ2V0Lm5vZGUub2Zmc2V0V2lkdGg7XG5cblx0dmFyIG9mZnNldFRvcCA9IDA7XG5cdHZhciBvZmZzZXRMZWZ0ID0gMDtcblx0dmFyIG5vZGUgPSB0YXJnZXQubm9kZTtcblxuXHRkbyB7XG5cdFx0aWYgKCFpc05hTihub2RlLm9mZnNldFRvcCkpIHtcblx0XHRcdG9mZnNldFRvcCArPSBub2RlLm9mZnNldFRvcDtcblx0XHR9XG5cdFx0aWYgKCFpc05hTihub2RlLm9mZnNldExlZnQpKSB7XG5cdFx0XHRvZmZzZXRMZWZ0ICs9IG5vZGUub2Zmc2V0TGVmdDtcblx0XHR9XG5cdFx0bm9kZSA9IG5vZGUub2Zmc2V0UGFyZW50O1xuXHR9IHdoaWxlIChub2RlKVxuXG5cdHJldHVybiB7XG5cdFx0Ym91bmRzOiB7XG5cdFx0XHR0b3A6IG9mZnNldFRvcCxcblx0XHRcdHJpZ2h0OiBvZmZzZXRMZWZ0ICsgd2lkdGgsXG5cdFx0XHRib3R0b206IG9mZnNldFRvcCArIGhlaWdodCxcblx0XHRcdGxlZnQ6IG9mZnNldExlZnRcblx0XHR9LFxuXHRcdGhlaWdodDogaGVpZ2h0LFxuXHRcdHdpZHRoOiB3aWR0aFxuXHR9XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbGVkKGNvbnRhaW5lcikge1xuXHR2YXIgdG9wLCBsZWZ0O1xuXHRpZiAoY29udGFpbmVyLm5vZGUgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuXHRcdHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblx0XHRsZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuXHR9IGVsc2Uge1xuXHRcdHRvcCA9IGNvbnRhaW5lci5ub2RlLnNjcm9sbFRvcDtcblx0XHRsZWZ0ID0gY29udGFpbmVyLm5vZGUuc2Nyb2xsTGVmdDtcblx0fVxuXHRyZXR1cm4geyB0b3A6IHRvcCwgbGVmdDogbGVmdCB9XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudFZpc2libGUoZWxlbWVudCkge1xuXHRpZiAoIGVsZW1lbnQgPT09IHZvaWQgMCApIGVsZW1lbnQgPSB7fTtcblxuXHR2YXIgY29udGFpbmVyID0gdGhpcy5zdG9yZS5jb250YWluZXJzW2VsZW1lbnQuY29udGFpbmVySWRdO1xuXHRpZiAoIWNvbnRhaW5lcikgeyByZXR1cm4gfVxuXG5cdHZhciB2aWV3RmFjdG9yID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgZWxlbWVudC5jb25maWcudmlld0ZhY3RvcikpO1xuXHR2YXIgdmlld09mZnNldCA9IGVsZW1lbnQuY29uZmlnLnZpZXdPZmZzZXQ7XG5cblx0dmFyIGVsZW1lbnRCb3VuZHMgPSB7XG5cdFx0dG9wOiBlbGVtZW50Lmdlb21ldHJ5LmJvdW5kcy50b3AgKyBlbGVtZW50Lmdlb21ldHJ5LmhlaWdodCAqIHZpZXdGYWN0b3IsXG5cdFx0cmlnaHQ6IGVsZW1lbnQuZ2VvbWV0cnkuYm91bmRzLnJpZ2h0IC0gZWxlbWVudC5nZW9tZXRyeS53aWR0aCAqIHZpZXdGYWN0b3IsXG5cdFx0Ym90dG9tOiBlbGVtZW50Lmdlb21ldHJ5LmJvdW5kcy5ib3R0b20gLSBlbGVtZW50Lmdlb21ldHJ5LmhlaWdodCAqIHZpZXdGYWN0b3IsXG5cdFx0bGVmdDogZWxlbWVudC5nZW9tZXRyeS5ib3VuZHMubGVmdCArIGVsZW1lbnQuZ2VvbWV0cnkud2lkdGggKiB2aWV3RmFjdG9yXG5cdH07XG5cblx0dmFyIGNvbnRhaW5lckJvdW5kcyA9IHtcblx0XHR0b3A6IGNvbnRhaW5lci5nZW9tZXRyeS5ib3VuZHMudG9wICsgY29udGFpbmVyLnNjcm9sbC50b3AgKyB2aWV3T2Zmc2V0LnRvcCxcblx0XHRyaWdodDogY29udGFpbmVyLmdlb21ldHJ5LmJvdW5kcy5yaWdodCArIGNvbnRhaW5lci5zY3JvbGwubGVmdCAtIHZpZXdPZmZzZXQucmlnaHQsXG5cdFx0Ym90dG9tOlxuXHRcdFx0Y29udGFpbmVyLmdlb21ldHJ5LmJvdW5kcy5ib3R0b20gKyBjb250YWluZXIuc2Nyb2xsLnRvcCAtIHZpZXdPZmZzZXQuYm90dG9tLFxuXHRcdGxlZnQ6IGNvbnRhaW5lci5nZW9tZXRyeS5ib3VuZHMubGVmdCArIGNvbnRhaW5lci5zY3JvbGwubGVmdCArIHZpZXdPZmZzZXQubGVmdFxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0KGVsZW1lbnRCb3VuZHMudG9wIDwgY29udGFpbmVyQm91bmRzLmJvdHRvbSAmJlxuXHRcdFx0ZWxlbWVudEJvdW5kcy5yaWdodCA+IGNvbnRhaW5lckJvdW5kcy5sZWZ0ICYmXG5cdFx0XHRlbGVtZW50Qm91bmRzLmJvdHRvbSA+IGNvbnRhaW5lckJvdW5kcy50b3AgJiZcblx0XHRcdGVsZW1lbnRCb3VuZHMubGVmdCA8IGNvbnRhaW5lckJvdW5kcy5yaWdodCkgfHxcblx0XHRlbGVtZW50LnN0eWxlcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJ1xuXHQpXG59XG5cbmZ1bmN0aW9uIGRlbGVnYXRlKFxuXHRldmVudCxcblx0ZWxlbWVudHNcbikge1xuXHR2YXIgdGhpcyQxID0gdGhpcztcblx0aWYgKCBldmVudCA9PT0gdm9pZCAwICkgZXZlbnQgPSB7IHR5cGU6ICdpbml0JyB9O1xuXHRpZiAoIGVsZW1lbnRzID09PSB2b2lkIDAgKSBlbGVtZW50cyA9IHRoaXMuc3RvcmUuZWxlbWVudHM7XG5cblx0cmFmKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgc3RhbGUgPSBldmVudC50eXBlID09PSAnaW5pdCcgfHwgZXZlbnQudHlwZSA9PT0gJ3Jlc2l6ZSc7XG5cblx0XHRlYWNoKHRoaXMkMS5zdG9yZS5jb250YWluZXJzLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0XHRpZiAoc3RhbGUpIHtcblx0XHRcdFx0Y29udGFpbmVyLmdlb21ldHJ5ID0gZ2V0R2VvbWV0cnkuY2FsbCh0aGlzJDEsIGNvbnRhaW5lciwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgc2Nyb2xsID0gZ2V0U2Nyb2xsZWQuY2FsbCh0aGlzJDEsIGNvbnRhaW5lcik7XG5cdFx0XHRpZiAoY29udGFpbmVyLnNjcm9sbCkge1xuXHRcdFx0XHRjb250YWluZXIuZGlyZWN0aW9uID0ge1xuXHRcdFx0XHRcdHg6IG1hdGhTaWduKHNjcm9sbC5sZWZ0IC0gY29udGFpbmVyLnNjcm9sbC5sZWZ0KSxcblx0XHRcdFx0XHR5OiBtYXRoU2lnbihzY3JvbGwudG9wIC0gY29udGFpbmVyLnNjcm9sbC50b3ApXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRjb250YWluZXIuc2Nyb2xsID0gc2Nyb2xsO1xuXHRcdH0pO1xuXG5cdFx0LyoqXG5cdFx0ICogRHVlIHRvIGhvdyB0aGUgc2VxdWVuY2VyIGlzIGltcGxlbWVudGVkLCBpdOKAmXNcblx0XHQgKiBpbXBvcnRhbnQgdGhhdCB3ZSB1cGRhdGUgdGhlIHN0YXRlIG9mIGFsbFxuXHRcdCAqIGVsZW1lbnRzLCBiZWZvcmUgYW55IGFuaW1hdGlvbiBsb2dpYyBpc1xuXHRcdCAqIGV2YWx1YXRlZCAoaW4gdGhlIHNlY29uZCBsb29wIGJlbG93KS5cblx0XHQgKi9cblx0XHRlYWNoKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0aWYgKHN0YWxlIHx8IGVsZW1lbnQuZ2VvbWV0cnkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRlbGVtZW50Lmdlb21ldHJ5ID0gZ2V0R2VvbWV0cnkuY2FsbCh0aGlzJDEsIGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudC52aXNpYmxlID0gaXNFbGVtZW50VmlzaWJsZS5jYWxsKHRoaXMkMSwgZWxlbWVudCk7XG5cdFx0fSk7XG5cblx0XHRlYWNoKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0aWYgKGVsZW1lbnQuc2VxdWVuY2UpIHtcblx0XHRcdFx0c2VxdWVuY2UuY2FsbCh0aGlzJDEsIGVsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YW5pbWF0ZS5jYWxsKHRoaXMkMSwgZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzJDEucHJpc3RpbmUgPSBmYWxzZTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGlzVHJhbnNmb3JtU3VwcG9ydGVkKCkge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cdHJldHVybiAndHJhbnNmb3JtJyBpbiBzdHlsZSB8fCAnV2Via2l0VHJhbnNmb3JtJyBpbiBzdHlsZVxufVxuXG5mdW5jdGlvbiBpc1RyYW5zaXRpb25TdXBwb3J0ZWQoKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblx0cmV0dXJuICd0cmFuc2l0aW9uJyBpbiBzdHlsZSB8fCAnV2Via2l0VHJhbnNpdGlvbicgaW4gc3R5bGVcbn1cblxudmFyIHZlcnNpb24gPSBcIjQuMC45XCI7XG5cbnZhciBib3VuZERlbGVnYXRlO1xudmFyIGJvdW5kRGVzdHJveTtcbnZhciBib3VuZFJldmVhbDtcbnZhciBib3VuZENsZWFuO1xudmFyIGJvdW5kU3luYztcbnZhciBjb25maWc7XG52YXIgZGVidWc7XG52YXIgaW5zdGFuY2U7XG5cbmZ1bmN0aW9uIFNjcm9sbFJldmVhbChvcHRpb25zKSB7XG5cdGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG5cdHZhciBpbnZva2VkV2l0aG91dE5ldyA9XG5cdFx0dHlwZW9mIHRoaXMgPT09ICd1bmRlZmluZWQnIHx8XG5cdFx0T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSBTY3JvbGxSZXZlYWwucHJvdG90eXBlO1xuXG5cdGlmIChpbnZva2VkV2l0aG91dE5ldykge1xuXHRcdHJldHVybiBuZXcgU2Nyb2xsUmV2ZWFsKG9wdGlvbnMpXG5cdH1cblxuXHRpZiAoIVNjcm9sbFJldmVhbC5pc1N1cHBvcnRlZCgpKSB7XG5cdFx0bG9nZ2VyLmNhbGwodGhpcywgJ0luc3RhbnRpYXRpb24gZmFpbGVkLicsICdUaGlzIGJyb3dzZXIgaXMgbm90IHN1cHBvcnRlZC4nKTtcblx0XHRyZXR1cm4gbW91bnQuZmFpbHVyZSgpXG5cdH1cblxuXHR2YXIgYnVmZmVyO1xuXHR0cnkge1xuXHRcdGJ1ZmZlciA9IGNvbmZpZ1xuXHRcdFx0PyBkZWVwQXNzaWduKHt9LCBjb25maWcsIG9wdGlvbnMpXG5cdFx0XHQ6IGRlZXBBc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGxvZ2dlci5jYWxsKHRoaXMsICdJbnZhbGlkIGNvbmZpZ3VyYXRpb24uJywgZS5tZXNzYWdlKTtcblx0XHRyZXR1cm4gbW91bnQuZmFpbHVyZSgpXG5cdH1cblxuXHR0cnkge1xuXHRcdHZhciBjb250YWluZXIgPSAkKGJ1ZmZlci5jb250YWluZXIpWzBdO1xuXHRcdGlmICghY29udGFpbmVyKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29udGFpbmVyLicpXG5cdFx0fVxuXHR9IGNhdGNoIChlKSB7XG5cdFx0bG9nZ2VyLmNhbGwodGhpcywgZS5tZXNzYWdlKTtcblx0XHRyZXR1cm4gbW91bnQuZmFpbHVyZSgpXG5cdH1cblxuXHRjb25maWcgPSBidWZmZXI7XG5cblx0aWYgKCghY29uZmlnLm1vYmlsZSAmJiBpc01vYmlsZSgpKSB8fCAoIWNvbmZpZy5kZXNrdG9wICYmICFpc01vYmlsZSgpKSkge1xuXHRcdGxvZ2dlci5jYWxsKFxuXHRcdFx0dGhpcyxcblx0XHRcdCdUaGlzIGRldmljZSBpcyBkaXNhYmxlZC4nLFxuXHRcdFx0KFwiZGVza3RvcDogXCIgKyAoY29uZmlnLmRlc2t0b3ApKSxcblx0XHRcdChcIm1vYmlsZTogXCIgKyAoY29uZmlnLm1vYmlsZSkpXG5cdFx0KTtcblx0XHRyZXR1cm4gbW91bnQuZmFpbHVyZSgpXG5cdH1cblxuXHRtb3VudC5zdWNjZXNzKCk7XG5cblx0dGhpcy5zdG9yZSA9IHtcblx0XHRjb250YWluZXJzOiB7fSxcblx0XHRlbGVtZW50czoge30sXG5cdFx0aGlzdG9yeTogW10sXG5cdFx0c2VxdWVuY2VzOiB7fVxuXHR9O1xuXG5cdHRoaXMucHJpc3RpbmUgPSB0cnVlO1xuXG5cdGJvdW5kRGVsZWdhdGUgPSBib3VuZERlbGVnYXRlIHx8IGRlbGVnYXRlLmJpbmQodGhpcyk7XG5cdGJvdW5kRGVzdHJveSA9IGJvdW5kRGVzdHJveSB8fCBkZXN0cm95LmJpbmQodGhpcyk7XG5cdGJvdW5kUmV2ZWFsID0gYm91bmRSZXZlYWwgfHwgcmV2ZWFsLmJpbmQodGhpcyk7XG5cdGJvdW5kQ2xlYW4gPSBib3VuZENsZWFuIHx8IGNsZWFuLmJpbmQodGhpcyk7XG5cdGJvdW5kU3luYyA9IGJvdW5kU3luYyB8fCBzeW5jLmJpbmQodGhpcyk7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdkZWxlZ2F0ZScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBib3VuZERlbGVnYXRlOyB9IH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2Rlc3Ryb3knLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm91bmREZXN0cm95OyB9IH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3JldmVhbCcsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBib3VuZFJldmVhbDsgfSB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjbGVhbicsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBib3VuZENsZWFuOyB9IH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3N5bmMnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm91bmRTeW5jOyB9IH0pO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnZGVmYXVsdHMnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZmlnOyB9IH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3ZlcnNpb24nLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmVyc2lvbjsgfSB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdub29wJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9IH0pO1xuXG5cdHJldHVybiBpbnN0YW5jZSA/IGluc3RhbmNlIDogKGluc3RhbmNlID0gdGhpcylcbn1cblxuU2Nyb2xsUmV2ZWFsLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNUcmFuc2Zvcm1TdXBwb3J0ZWQoKSAmJiBpc1RyYW5zaXRpb25TdXBwb3J0ZWQoKTsgfTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjcm9sbFJldmVhbCwgJ2RlYnVnJywge1xuXHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlYnVnIHx8IGZhbHNlOyB9LFxuXHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gKGRlYnVnID0gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgPyB2YWx1ZSA6IGRlYnVnKTsgfVxufSk7XG5cblNjcm9sbFJldmVhbCgpO1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxSZXZlYWw7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyohIEBsaWNlbnNlIFRlYWxpZ2h0IHYwLjMuNlxuXG5cdENvcHlyaWdodCAyMDE4IEZpc3NzaW9uIExMQy5cblxuXHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFNPRlRXQVJFLlxuXG4qL1xuaW1wb3J0IGlzRG9tTm9kZSBmcm9tICdpcy1kb20tbm9kZSc7XG5pbXBvcnQgaXNEb21Ob2RlTGlzdCBmcm9tICdpcy1kb20tbm9kZS1saXN0JztcblxuZnVuY3Rpb24gdGVhbGlnaHQodGFyZ2V0LCBjb250ZXh0KSB7XG4gIGlmICggY29udGV4dCA9PT0gdm9pZCAwICkgY29udGV4dCA9IGRvY3VtZW50O1xuXG4gIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkgeyByZXR1cm4gdGFyZ2V0LmZpbHRlcihpc0RvbU5vZGUpOyB9XG4gIGlmIChpc0RvbU5vZGUodGFyZ2V0KSkgeyByZXR1cm4gW3RhcmdldF07IH1cbiAgaWYgKGlzRG9tTm9kZUxpc3QodGFyZ2V0KSkgeyByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFyZ2V0KTsgfVxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gXCJzdHJpbmdcIikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcXVlcnkgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0KTtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChxdWVyeSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG4gIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVhbGlnaHQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5odG1sXCI7XHJcbmltcG9ydCBTY3JvbGxSZXZlYWwgZnJvbSBcInNjcm9sbHJldmVhbFwiO1xyXG5cclxuY29uc3Qgc2hvd01lbnUgPSAodG9nZ2xlSWQsIG5hdklkKSA9PiB7XHJcbiAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9nZ2xlSWQpO1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hdklkKTtcclxuXHJcbiAgaWYgKHRvZ2dsZSAmJiBuYXYpIHtcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbnNob3dNZW51KFwibmF2LXRvZ2dsZVwiLCBcIm5hdi1tZW51XCIpO1xyXG5cclxuLy8gQ2xvc2UgbWVudSwgbW9iaWxlLlxyXG5jb25zdCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua1wiKTtcclxuXHJcbmZ1bmN0aW9uIGxpbmtBY3Rpb24oKSB7XHJcbiAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LW1lbnVcIik7XHJcbiAgbmF2TWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxufVxyXG5uYXZMaW5rLmZvckVhY2goKGVsKSA9PiBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGlua0FjdGlvbikpO1xyXG5cclxuLy8gU2Nyb2xsIHNlY3Rpb25zIGFjdGl2ZSBsaW5rLlxyXG5jb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uW2lkXVwiKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQWN0aXZlKTtcclxuXHJcbmZ1bmN0aW9uIHNjcm9sbEFjdGl2ZSgpIHtcclxuICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gIHNlY3Rpb25zLmZvckVhY2goKGN1cnJlbnQpID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb25IZWlnaHQgPSBjdXJyZW50Lm9mZnNldEhlaWdodDtcclxuICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBjdXJyZW50Lm9mZnNldFRvcCAtIDUwO1xyXG4gICAgY29uc3Qgc2VjdGlvbklkID0gY3VycmVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuXHJcbiAgICBpZiAoc2Nyb2xsWSA+IHNlY3Rpb25Ub3AgJiYgc2Nyb2xsWSA8PSBzZWN0aW9uSGVpZ2h0ICsgc2VjdGlvblRvcCkge1xyXG4gICAgICAvLyBNYXRjaCBocmVmIHdpdGggLm5hdi1tZW51IGFuY2VzdG9yLCBjb250YWluaW5nIHNlY3Rpb25JZC5cclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5uYXYtbWVudSBhW2hyZWYqPVwiICsgc2VjdGlvbklkICsgXCJdXCIpXHJcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1tZW51IGFbaHJlZio9XCIgKyBzZWN0aW9uSWQgKyBcIl1cIilcclxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuY29uc3Qgc3IgPSBTY3JvbGxSZXZlYWwoe1xyXG4gIG9yaWdpbjogXCJ0b3BcIixcclxuICBkaXN0YW5jZTogXCI4MHB4XCIsXHJcbiAgZHVyYXRpb246IDIwMDAsXHJcbiAgcmVzZXQ6IHRydWUsXHJcbn0pO1xyXG5cclxuc3IucmV2ZWFsKFwiLmhvbWUtdGl0bGVcIiwge30pO1xyXG5zci5yZXZlYWwoXCIuaG9tZS1zY3JvbGxcIiwgeyBkZWxheTogNDAwIH0pO1xyXG5zci5yZXZlYWwoXCIuaG9tZS1pbWdcIiwgeyBvcmlnaW46IFwicmlnaHRcIiwgZGVsYXk6IDYwMCB9KTtcclxuXHJcbnNyLnJldmVhbChcIi5hYm91dC1pbWdcIiwgeyBvcmlnaW46IFwibGVmdFwiLCBkZWxheTogNDAwIH0pO1xyXG5zci5yZXZlYWwoXCIuYWJvdXQtc3VidGl0bGVcIiwgeyBkZWxheTogMzAwIH0pO1xyXG5zci5yZXZlYWwoXCIuYWJvdXQtcHJvZlwiLCB7IGRlbGF5OiA0MDAgfSk7XHJcbnNyLnJldmVhbChcIi5hYm91dC10ZXh0XCIsIHsgZGVsYXk6IDUwMCB9KTtcclxuc3IucmV2ZWFsKFwiLmFib3V0LXNvY2lhbC1pY29uXCIsIHsgZGVsYXk6IDYwMCwgaW50ZXJ2YWw6IDMwMCB9KTtcclxuXHJcbnNyLnJldmVhbChcIi5wcm9qZWN0LWltZ1wiLCB7IGRlbGF5OiAyMDAsIGludGVydmFsOiA1MDAgfSk7XHJcblxyXG5zci5yZXZlYWwoXCIuc2tpbGxzLXN1YnRpdGxlXCIsIHt9KTtcclxuc3IucmV2ZWFsKFwiLnNraWxscy1uYW1lXCIsIHsgZGVsYXk6IDE1MCwgZGlzdGFuY2U6IFwiMjBweFwiLCBpbnRlcnZhbDogMTUwIH0pO1xyXG5zci5yZXZlYWwoXCIuc2tpbGxzLWltZ1wiLCB7IG9yaWdpbjogXCJsZWZ0XCIsIGRlbGF5OiA1MDAgfSk7XHJcblxyXG5zci5yZXZlYWwoXCIuY29udGFjdC1zdWJ0aXRsZVwiLCB7fSk7XHJcbnNyLnJldmVhbChcIi5jb250YWN0LXRleHRcIiwgeyBpbnRlcnZhbDogMzAwIH0pO1xyXG5zci5yZXZlYWwoXCIuY29udGFjdC1pbnB1dFwiLCB7IGRlbGF5OiA0MDAgfSk7XHJcbnNyLnJldmVhbChcIi5jb250YWN0LWJ1dHRvblwiLCB7IGludGVydmFsOiAzMDAgfSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==