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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));
  }

  (0, _createClass3.default)(Header, [{
    key: 'isLogin',
    value: function isLogin() {
      var auth = this.props.auth;
      if (!auth) {
        return _react2.default.createElement('div', null);
      }

      console.log('USER HEADER', this.props.userAuth);
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'name' }, _react2.default.createElement('a', { href: '/' }, 'Salir')), _react2.default.createElement('div', { className: 'name' }, _react2.default.createElement('p', null, this.props.userAuth.name)), _react2.default.createElement('div', { className: 'avatar' }, _react2.default.createElement('img', { src: this.props.userAuth.avatar || '/static/images/User-Profile.png' })));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), _react2.default.createElement('div', { className: 'Header__container  row' }, _react2.default.createElement('div', { className: 'Header__container--logotipo  col' }, _react2.default.createElement('div', { className: 'Header__container--logo' }, _react2.default.createElement('img', { src: '/static/images/Twemoji_1f35c.png' })), _react2.default.createElement('div', { className: 'Header__container--title' }, _react2.default.createElement('p', null, 'Mr Restaurant'))), _react2.default.createElement('div', { className: 'Header__container--user  col' }, this.isLogin())));
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;