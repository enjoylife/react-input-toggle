(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactInputToggle"] = factory(require("react"));
	else
		root["ReactInputToggle"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Toggle = __webpack_require__(1);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Toggle2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _effects = __webpack_require__(3);
	
	var _effects2 = _interopRequireDefault(_effects);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _id = 0;
	function _genID() {
	  return _id++;
	}
	
	var Toggle = function (_React$Component) {
	  _inherits(Toggle, _React$Component);
	
	  function Toggle(props) {
	    _classCallCheck(this, Toggle);
	
	    // TODO: performance gains?
	    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));
	
	    _this.shouldComponentUpdate = _reactAddonsPureRenderMixin.shouldComponentUpdate.bind(_this);
	
	    // unique id for all instances
	    _this._id = _genID();
	
	    // TODO: Test if autofocus still works?
	    _this.state = {
	      isFocused: false
	    };
	    return _this;
	  }
	
	  /**
	   * Callback used get our switch's backing input element.
	   * @param {DOMElement} c the mounted input created by a switch style
	   */
	
	
	  _createClass(Toggle, [{
	    key: 'setRef',
	    value: function setRef(c) {
	      this._input = c;
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      // Set focus whenever a user interacts with our switch
	      this._input.focus();
	
	      // Inform our parents if needed
	      this.props.onChange(e);
	    }
	  }, {
	    key: 'onFocus',
	    value: function onFocus(e) {
	      this.setState({ isFocused: true });
	
	      // Inform our parents if needed
	      this.props.onFocus(e);
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur(e) {
	      this.setState({ isFocused: false });
	      // Inform our parents if needed
	      this.props.onBlur(e);
	    }
	  }, {
	    key: 'onMouseDown',
	    value: function onMouseDown(e) {
	      // Prevent flick of  focus styling due to the focused element switching
	      e.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // we pull out values even if not using in this render
	      // so we can limit what we pass down in ...otherProps
	      var _props = this.props;
	      var label = _props.label;
	      var labelPosition = _props.labelPosition;
	      var effect = _props.effect;
	      var defaultChecked = _props.defaultChecked;
	      var disabled = _props.disabled;
	
	      var otherProps = _objectWithoutProperties(_props, ['label', 'labelPosition', 'effect', 'defaultChecked', 'disabled']);
	
	      var isFocused = this.state.isFocused;
	
	      // lock in a value no matter what our internal state is
	
	      var checkProp = this.props.hasOwnProperty('checked') ? this.props.checked : defaultChecked;
	      var checked = checkProp && !disabled;
	
	      var outerCss = (0, _classnames2.default)('rt-toggle', 'rt-toggle--' + effect, 'rt-toggle--label-' + labelPosition, isFocused == true && !disabled && 'rt-toggle--focused', checked == true && 'rt-toggle--checked', disabled == true && 'rt-toggle--disabled');
	
	      var labelCss = (0, _classnames2.default)(['rt-toggle__label', 'rt-toggle__label--' + effect]);
	
	      // minimizing id clashes with other code
	      var htmlFor = 'rt-toggle-id-' + this._id;
	
	      // setting otherProps first so they can be overridden as needed
	      var switchProps = _extends({}, otherProps, {
	        htmlFor: htmlFor,
	        checked: checked,
	        disabled: disabled,
	        // ES7 binding
	        setRef: this.setRef.bind(this),
	        onBlur: this.onBlur.bind(this),
	        onFocus: this.onFocus.bind(this),
	        onChange: this.onChange.bind(this)
	      });
	      // React Template Component
	      var switchComponent = _effects2.default[effect](switchProps);
	
	      return _react2.default.createElement(
	        'label',
	        { onMouseDown: this.onMouseDown, className: outerCss },
	        _react2.default.createElement(
	          'span',
	          { className: labelCss, htmlFor: htmlFor },
	          label
	        ),
	        switchComponent
	      );
	    }
	  }]);
	
	  return Toggle;
	}(_react2.default.Component);
	
	Toggle.propTypes = {
	  defaultChecked: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	
	  label: _react.PropTypes.string,
	  labelPosition: _react.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	
	  effect: _react.PropTypes.oneOf(Object.keys(_effects2.default)),
	
	  onChange: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onBlur: _react.PropTypes.func
	};
	Toggle.defaultProps = {
	  defaultChecked: false,
	
	  label: '',
	  labelPosition: 'left',
	
	  effect: 'echo',
	
	  // no-ops
	  onChange: function onChange() {},
	  onFocus: function onFocus() {},
	  onBlur: function onBlur() {}
	};
	exports.default = Toggle;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Template = function Template(props) {
	  var effect = props.effect;
	  var htmlFor = props.htmlFor;
	  var onBlur = props.onBlur;
	  var onFocus = props.onFocus;
	  var onChange = props.onChange;
	  var checked = props.checked;
	  var setRef = props.setRef;
	  var children = props.children;
	  var disabled = props.disabled;
	
	  var otherProps = _objectWithoutProperties(props, ['effect', 'htmlFor', 'onBlur', 'onFocus', 'onChange', 'checked', 'setRef', 'children', 'disabled']);
	
	  var spanCss = (0, _classnames2.default)(['rt-toggle__container', 'rt-toggle__container--' + effect]);
	
	  var inputCss = (0, _classnames2.default)(['rt-toggle__input', 'rt-toggle__input--' + effect]);
	
	  var styleCss = (0, _classnames2.default)(['rt-toggle__style', 'rt-toggle__style--' + effect]);
	  var styleCssExtra = (0, _classnames2.default)(['rt-toggle__extra', 'rt-toggle__extra--' + effect]);
	  return _react2.default.createElement(
	    'span',
	    { className: spanCss },
	    _react2.default.createElement('input', _extends({ onBlur: onBlur, ref: setRef, onChange: onChange, 'aria-checked': checked, onFocus: onFocus, className: inputCss, checked: checked, 'aria-disabled': disabled, disabled: disabled, type: 'checkbox', id: htmlFor }, otherProps)),
	    children
	  );
	};
	
	var skeleton = function skeleton(props) {
	
	  var effect = 'skeleton';
	
	  return _react2.default.createElement(
	    Template,
	    _extends({ effect: effect }, props),
	    _react2.default.createElement('span', { className: 'rt-skeleton__track' }),
	    _react2.default.createElement(
	      'span',
	      { className: 'rt-skeleton__handle--container ' },
	      _react2.default.createElement('span', { className: 'rt-skeleton__handle--border' }),
	      _react2.default.createElement('span', { className: 'rt-skeleton__handle' }),
	      _react2.default.createElement('span', { className: 'rt-skeleton__handle--inner' })
	    )
	  );
	};
	
	var lima = function lima(props) {
	
	  var effect = 'lima';
	
	  return _react2.default.createElement(
	    Template,
	    _extends({ effect: effect }, props),
	    _react2.default.createElement('span', { className: 'rt-lima__track' }),
	    _react2.default.createElement(
	      'svg',
	      { className: 'rt-lima__check', version: '1.1', viewBox: '0 0 100 100', x: '0px', xmlns: 'http://www.w3.org/2000/svg', y: '0px' },
	      _react2.default.createElement('path', { d: 'M76.1618449,18.6433479 L86.8851316,27.6412539 C87.3112368,27.9987985 87.3631973,28.6285973 87.0071338,29.0529372 L43.3014211,81.1393773 C43.0807605,81.4023504 42.7559402,81.5236886 42.4400343,81.4944043 C42.2374084,81.4781838 42.0372772,81.4004766 41.8690111,81.2592846 L12.7727666,56.8446366 C12.3441215,56.4849606 12.2880367,55.8529397 12.6433479,55.4294962 L21.6412539,44.7062095 C21.9987985,44.2801043 22.6305811,44.2298085 23.0573684,44.5879255 L40.6784316,59.3737532 L74.7504227,18.7683355 C75.1078026,18.3424266 75.7384014,18.2880367 76.1618449,18.6433479 Z M76.1618449,18.6433479' })
	    ),
	    _react2.default.createElement(
	      'span',
	      { className: 'rt-lima__handle--container ' },
	      _react2.default.createElement('span', { className: 'rt-lima__handle--border' }),
	      _react2.default.createElement('span', { className: 'rt-lima__handle' })
	    )
	  );
	};
	
	var sierra = function sierra(props) {
	  var effect = 'sierra';
	
	  return _react2.default.createElement(
	    Template,
	    _extends({ effect: effect }, props),
	    _react2.default.createElement('span', { className: 'rt-sierra__track' }),
	    _react2.default.createElement('span', { className: 'rt-sierra__handle' }),
	    _react2.default.createElement(
	      'svg',
	      { className: 'rt-sierra__check', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 72 72' },
	      _react2.default.createElement('path', { className: 'rt-sierra__path', d: 'M17.417,37.778l9.93,9.909l25.444-25.393' })
	    )
	  );
	};
	
	var charlie = function charlie(props) {
	  var effect = 'charlie';
	
	  return _react2.default.createElement(
	    Template,
	    _extends({ effect: effect }, props),
	    _react2.default.createElement('span', { className: 'rt-charlie__track' }),
	    _react2.default.createElement(
	      'span',
	      { className: 'rt-charlie__track--faux' },
	      _react2.default.createElement('span', { className: 'rt-charlie__handle' }),
	      _react2.default.createElement('span', { className: 'rt-charlie__handle--border' })
	    ),
	    _react2.default.createElement(
	      'span',
	      { className: 'rt-charlie__text--on', 'aria-hidden': 'true', role: 'presentation', tabIndex: '-1' },
	      'ON'
	    ),
	    _react2.default.createElement(
	      'span',
	      { className: 'rt-charlie__text--off', 'aria-hidden': 'true', role: 'presentation', tabIndex: '-1' },
	      'OFF'
	    )
	  );
	};
	
	var foxtrot = function foxtrot(props) {
	  var effect = 'foxtrot';
	
	  return _react2.default.createElement(
	    Template,
	    _extends({ effect: effect }, props),
	    _react2.default.createElement('span', { className: 'rt-foxtrot__track' }),
	    _react2.default.createElement(
	      'span',
	      { className: 'rt-foxtrot__text rt-foxtrot__text--on', 'aria-hidden': 'true', role: 'presentation', tabIndex: '-1' },
	      'ON'
	    ),
	    _react2.default.createElement(
	      'span',
	      { className: ' rt-foxtrot__text rt-foxtrot__text--off', role: 'presentation', tabIndex: '-1' },
	      'OFF'
	    ),
	    _react2.default.createElement('span', { className: 'rt-foxtrot__handle' }),
	    _react2.default.createElement(
	      'svg',
	      { className: 'rt-foxtrot__handle-icon', xmlns: 'http://www.w3.org/2000/svg', version: '1.1', viewBox: '0 0 100 100', x: '0px', y: '0px' },
	      _react2.default.createElement('rect', { rx: 2, ry: 2, height: 50, width: 5, x: 25, y: 25 }),
	      _react2.default.createElement('rect', { rx: 2, ry: 2, height: 70, width: 5, x: 50, y: 15 }),
	      _react2.default.createElement('rect', { rx: 2, ry: 2, height: 50, width: 5, x: 75, y: 25 })
	    )
	  );
	};
	
	var echo = function echo(props) {
	  var effect = 'echo';
	
	  return _react2.default.createElement(
	    Template,
	    _extends({ effect: effect }, props),
	    _react2.default.createElement('span', { className: 'rt-echo__track' }),
	    _react2.default.createElement('span', { className: 'rt-echo__handle' }),
	    _react2.default.createElement(
	      'svg',
	      { className: 'rt-echo__icon rt-echo__icon--on', version: '1.1', viewBox: '0 0 100 100', x: '0px', xmlns: 'http://www.w3.org/2000/svg', y: '0px' },
	      _react2.default.createElement('path', { d: 'M76.1618449,18.6433479 L86.8851316,27.6412539 C87.3112368,27.9987985 87.3631973,28.6285973 87.0071338,29.0529372 L43.3014211,81.1393773 C43.0807605,81.4023504 42.7559402,81.5236886 42.4400343,81.4944043 C42.2374084,81.4781838 42.0372772,81.4004766 41.8690111,81.2592846 L12.7727666,56.8446366 C12.3441215,56.4849606 12.2880367,55.8529397 12.6433479,55.4294962 L21.6412539,44.7062095 C21.9987985,44.2801043 22.6305811,44.2298085 23.0573684,44.5879255 L40.6784316,59.3737532 L74.7504227,18.7683355 C75.1078026,18.3424266 75.7384014,18.2880367 76.1618449,18.6433479 Z M76.1618449,18.6433479' })
	    ),
	    _react2.default.createElement(
	      'svg',
	      { className: 'rt-echo__icon rt-echo__icon--off', baseProfile: 'tiny', version: '1.1', viewBox: '0 0 100 100', x: '0px', xmlns: 'http://www.w3.org/2000/svg', y: '0px' },
	      _react2.default.createElement('path', { d: 'M50.003,61.176l20.715,21.206c2.078,2.145,3.429,2.166,5.546,0l4.156-4.256   c2.035-2.084,2.174-3.451,0-5.678L58.49,50l21.931-22.449c2.055-2.109,2.094-3.533,0-5.68l-4.156-4.254   c-2.156-2.207-3.488-2.105-5.546,0L50.003,38.824L29.289,17.617c-2.059-2.105-3.391-2.207-5.547,0l-4.154,4.254   c-2.096,2.146-2.059,3.57,0,5.68L41.517,50L19.588,72.448c-2.174,2.227-2.059,3.594,0,5.678l4.154,4.256   c2.098,2.166,3.449,2.145,5.547,0L50.003,61.176z', 'fill-rule': 'evenodd' })
	    )
	  );
	};
	
	var bbounce = function bbounce(props) {
	  var effect = 'bbounce';
	
	  return _react2.default.createElement(
	    Template,
	    _extends({ effect: effect }, props),
	    _react2.default.createElement(
	      'span',
	      { className: 'bbounce__body' },
	      _react2.default.createElement('span', { className: 'bbounce__switch' }),
	      _react2.default.createElement(
	        'span',
	        { className: 'bbounce__track' },
	        _react2.default.createElement('span', { className: 'bbounce__badge' }),
	        _react2.default.createElement('span', { className: 'bbounce__badge bbounce__badge--negative' })
	      )
	    )
	  );
	};
	
	var ios6 = function ios6(props) {
	  var effect = 'ios6';
	
	  return _react2.default.createElement(
	    Template,
	    _extends({ effect: effect }, props),
	    _react2.default.createElement('div', { className: 'ios6__switch' })
	  );
	};
	
	var neonpush = function neonpush(props) {
	  var effect = 'neonpush';
	  return _react2.default.createElement(
	    Template,
	    _extends({ effect: effect }, props),
	    _react2.default.createElement('span', { className: 'neonpush__btn' })
	  );
	};
	
	exports.default = { skeleton: skeleton, lima: lima, bbounce: bbounce, ios6: ios6, neonpush: neonpush, sierra: sierra, charlie: charlie, echo: echo, foxtrot: foxtrot };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */
	
	'use strict';
	
	var shallowCompare = __webpack_require__(7);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function (nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/
	
	'use strict';
	
	var shallowEqual = __webpack_require__(8);
	
	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	module.exports = shallowCompare;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-input-toggle.map