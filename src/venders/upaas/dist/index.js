(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["talentUiTemplate"] = factory(require("react"), require("lodash"));
	else
		root["talentUiTemplate"] = factory(root["react"], root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(5);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**在这里输出所有需要打包的组件**/
exports.default = {
  eLementCollections: _index2.default,
  propsCollections: _index4.default
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Button: _index2.default
}; /**
    * 在这个文件中输出所有的组件
    * **/

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = (_temp = _class = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'handleConnction',
        value: function handleConnction(eventKey, e) {
            e.stopPropagation();
            var broadcast = this.props.broadcast;

            if (typeof broadcast === 'function') broadcast(eventKey, 'fdfjdlfjdlsajfldsajfdls');
        }
    }, {
        key: 'renderButtons',
        value: function renderButtons() {
            var _this2 = this;

            var buttons = this.props.data.buttons;

            if (buttons.length === 0) return _react2.default.createElement(
                'div',
                null,
                'No button'
            );
            return buttons.map(function (item, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'btn-group', role: 'group', 'aria-label': '...', key: index },
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: "btn " + item.type, onClick: _this2.handleConnction.bind(_this2, item.eventKey) },
                        item.text
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                mode = _props.mode,
                registerBroadcasting = _props.registerBroadcasting;

            return _react2.default.createElement(
                'div',
                {
                    className: 'comp-button-group btn-toolbar',
                    role: 'toolbar',
                    'aria-label': '...'
                },
                this.renderButtons()
            );
        }
    }], [{
        key: 'getEditProps',
        value: function getEditProps() {
            return [{
                pType: 'SetButton',
                name: '设置按钮',
                key: 'buttons',
                defaultValue: []
            }];
        }
    }]);

    return Button;
}(_react.Component), _class.canBroadcast = true, _temp);
exports.default = Button;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  SetButton: _index2.default
}; /**
    * 在这个组件中输出所有的属性组件
    * **/

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _input = __webpack_require__(7);

var _input2 = _interopRequireDefault(_input);

var _select = __webpack_require__(8);

var _select2 = _interopRequireDefault(_select);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var buttonTypes = [{
    value: 'btn-default',
    label: '默认'
}, {
    value: 'btn-primary',
    label: '首选'
}, {
    value: 'btn-success',
    label: '成功'
}, {
    value: 'btn-info',
    label: '一般信息'
}, {
    value: 'btn-danger',
    label: '危险操作'
}, {
    value: 'btn-link',
    label: '链接'
}];

var SetButton = function (_Component) {
    _inherits(SetButton, _Component);

    function SetButton() {
        _classCallCheck(this, SetButton);

        return _possibleConstructorReturn(this, (SetButton.__proto__ || Object.getPrototypeOf(SetButton)).apply(this, arguments));
    }

    _createClass(SetButton, [{
        key: 'handleChangeButton',
        value: function handleChangeButton(key, index, val) {
            var _props = this.props,
                update = _props.update,
                data = _props.data;

            var item = data[index];
            var eventKey = item.eventKey;

            var newData = [].concat(_toConsumableArray(data.slice(0, index)), [Object.assign({}, item, _defineProperty({}, key, val))], _toConsumableArray(data.slice(index + 1)));
            update(newData, key === 'text' ? {
                regtype: 2,
                label: val,
                value: eventKey
            } : null);
        }
    }, {
        key: 'renderList',
        value: function renderList() {
            var _this2 = this;

            var _props$data = this.props.data,
                data = _props$data === undefined ? [] : _props$data;

            return data.map(function (item, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'row', key: index },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement(_input2.default, { placeholder: '\u6309\u94AE\u6587\u5B57', onChange: _this2.handleChangeButton.bind(_this2, 'text', index), value: item.text })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-6' },
                        _react2.default.createElement(_select2.default, { onChange: _this2.handleChangeButton.bind(_this2, 'type', index), options: buttonTypes, value: item.type })
                    )
                );
            });
        }
    }, {
        key: 'handleAddButton',
        value: function handleAddButton() {
            var _props2 = this.props,
                update = _props2.update,
                data = _props2.data;

            var eventKey = _lodash2.default.uniqueId('SetButton-vent-');
            var text = '按钮' + (data.length + 1);
            //  regtype 1-add, 2-update 3-delete
            update([].concat(_toConsumableArray(data), [{
                text: text,
                type: 'btn-default',
                eventKey: eventKey
            }]), {
                label: text,
                value: eventKey,
                regtype: 1
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'props-set-button container-fluid' },
                this.renderList(),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', className: 'fa fa-plus', onClick: this.handleAddButton.bind(this) },
                        '\u6DFB\u52A0\u6309\u94AE'
                    )
                )
            );
        }
    }]);

    return SetButton;
}(_react.Component);

exports.default = SetButton;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
    _inherits(Input, _Component);

    function Input(props, contents) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props, contents));

        _this.state = { value: props.value };
        return _this;
    }

    _createClass(Input, [{
        key: 'handleChange',
        value: function handleChange(e) {
            var val = e.target.value;
            this.setState({ value: val });
        }
    }, {
        key: 'handlePressEnter',
        value: function handlePressEnter(e) {
            if (e.which === 13) {
                this.saveState(e.target.value);
            }
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur(e) {
            this.saveState(e.target.value);
        }
    }, {
        key: 'saveState',
        value: function saveState(val) {
            var onChange = this.props.onChange;

            onChange && onChange(val);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setState({
                value: props.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var placeholder = this.props.placeholder;

            return _react2.default.createElement('input', {
                className: 'cm-form-input',
                type: 'text',
                value: this.state.value || '',
                placeholder: placeholder,
                onChange: this.handleChange.bind(this),
                onKeyPress: this.handlePressEnter.bind(this),
                onBlur: this.handleBlur.bind(this)
            });
        }
    }]);

    return Input;
}(_react.Component);

exports.default = Input;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = (_temp = _class = function (_Component) {
    _inherits(Select, _Component);

    function Select() {
        _classCallCheck(this, Select);

        return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
    }

    _createClass(Select, [{
        key: 'handleValueChange',
        value: function handleValueChange(e) {
            var _props$onChange = this.props.onChange,
                onChange = _props$onChange === undefined ? function () {} : _props$onChange;

            onChange(e.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var value = this.props.value;

            return _react2.default.createElement(
                'select',
                { value: value, onChange: this.handleValueChange.bind(this) },
                this.renderOptions()
            );
        }
    }, {
        key: 'renderOptions',
        value: function renderOptions() {
            // var strArr = '[object Array]';
            var strObj = '[object Object]';
            var _props$options = this.props.options,
                options = _props$options === undefined ? [] : _props$options;
            // debugger;

            if (options.length > 0) return options.map(function (item, index) {
                var tp = Object.prototype.toString.call(item);
                if (tp === strObj) {
                    return _react2.default.createElement(
                        'option',
                        { value: item.value, key: index },
                        item.label
                    );
                } else {
                    return _react2.default.createElement(
                        'option',
                        { value: item, key: index },
                        item
                    );
                }
            });
            return _react2.default.createElement(
                'option',
                null,
                '\u9ED8\u8BA4\u503C'
            );
        }
    }]);

    return Select;
}(_react.Component), _class.requireData = true, _temp);
exports.default = Select;

/***/ })
/******/ ]);
});