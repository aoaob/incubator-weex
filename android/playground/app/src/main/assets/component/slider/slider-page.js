/*!197
 * {
 *   version: "0.4.0.20170207",
 *   create: "20170207145011",
 *   git: "origin-taobao/u4_v8_shared_sdk_jsfm-feature-0.19--027e045",
 *   digest: "f98c63bc90652387ecc5012f97344e01"
 * }
 !*/
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(161)
	var __weex_template__ = __webpack_require__(165)
	var __weex_style__ = __webpack_require__(166)
	var __weex_script__ = __webpack_require__(167)

	__weex_define__('@weex-component/ea51bd2d36d6d5354af97da097043629', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/ea51bd2d36d6d5354af97da097043629',undefined,undefined)

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(162)
	var __weex_style__ = __webpack_require__(163)
	var __weex_script__ = __webpack_require__(164)

	__weex_define__('@weex-component/slider-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },

/***/ 162:
/***/ function(module, exports) {

	module.exports = {
	  "type": "image",
	  "classList": [
	    "slider-item"
	  ],
	  "attr": {
	    "src": function () {return this.image}
	  }
	}

/***/ },

/***/ 163:
/***/ function(module, exports) {

	module.exports = {
	  "slider-item": {
	    "width": 348,
	    "height": 400
	  }
	}

/***/ },

/***/ 164:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    image: '',
	    link: '',
	    href: ''
	  }},
	  methods: {
	    ready: function ready() {
	      this.href = this.link;
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 165:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "slider-page"
	  ],
	  "children": [
	    {
	      "type": "slider-item",
	      "repeat": function () {return this.sliderItems}
	    }
	  ]
	}

/***/ },

/***/ 166:
/***/ function(module, exports) {

	module.exports = {
	  "slider-page": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "width": 714,
	    "height": 420
	  }
	}

/***/ },

/***/ 167:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	  data: function () {return {
	    items: [],
	    sliderItems: []
	  }},
	  methods: {
	    ready: function ready() {
	      this.sliderItems = this.getSliderItems();
	    },
	    getSliderItems: function getSliderItems() {
	      return this.items.map(function (item, index) {
	        return item;
	      }.bind(this));
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });