'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

var _ordersList = require('../orders-list');

var _ordersList2 = _interopRequireDefault(_ordersList);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _utils = require('../../utils');

var _navOptions = require('./nav-options');

var _navOptions2 = _interopRequireDefault(_navOptions);

var _config = require('../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{
  id: '0',
  name: 'Orders'
}, {
  id: '1',
  name: 'Menu Food'
}, {
  id: '2',
  name: 'Admin Team'
}];

var Admin = function (_React$Component) {
  (0, _inherits3.default)(Admin, _React$Component);

  function Admin(props) {
    (0, _classCallCheck3.default)(this, Admin);

    // This binding is necessary to make `this` work in the callback
    var _this = (0, _possibleConstructorReturn3.default)(this, (Admin.__proto__ || (0, _getPrototypeOf2.default)(Admin)).call(this, props));

    _this.URI = _config2.default.url;
    // this.handleNextButton = this.handleNextButton.bind(this)
    _this.foodList = [];
    _this.state = { nextButton: false };
    return _this;
  }

  (0, _createClass3.default)(Admin, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'Admin' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), _react2.default.createElement('div', { className: 'Admin__list' }, _react2.default.createElement('div', { className: 'Admin__list-container' }, _react2.default.createElement(_navOptions2.default, { options: data }))));
    }
  }]);

  return Admin;
}(_react2.default.Component);

exports.default = Admin;