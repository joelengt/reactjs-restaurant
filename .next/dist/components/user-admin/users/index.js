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

var _usersList = require('../../users-list');

var _usersList2 = _interopRequireDefault(_usersList);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _utils = require('../../../utils');

var _config = require('../../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = function (_React$Component) {
  (0, _inherits3.default)(Users, _React$Component);

  function Users(props) {
    (0, _classCallCheck3.default)(this, Users);

    // This binding is necessary to make `this` work in the callback
    var _this = (0, _possibleConstructorReturn3.default)(this, (Users.__proto__ || (0, _getPrototypeOf2.default)(Users)).call(this, props));

    _this.URI = _config2.default.url;
    _this.state = { nextButton: false };
    return _this;
  }

  (0, _createClass3.default)(Users, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'Users' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), _react2.default.createElement('div', { className: 'Users__list' }, _react2.default.createElement('div', { className: 'Users__list-container' }, _react2.default.createElement('h2', null, 'Users'), _react2.default.createElement(_usersList2.default, { userType: 'admin' }))));
    }
  }]);

  return Users;
}(_react2.default.Component);

exports.default = Users;