'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Search from '../Search'
var Header = function Header() {
  return _react2.default.createElement('nav', null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/', prefetch: true }, 'Orders')), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/plataform/users', prefetch: true }, 'Team')), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/plataform/admin/caja', prefetch: true }, 'Flujo de Caja'))));
};

exports.default = Header;