'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement('div', null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), _react2.default.createElement('div', { className: 'footer-r row' }, _react2.default.createElement('div', { className: 'col-xs-12 col-sm-5 col-lg-3' }, _react2.default.createElement('div', { className: 'content' }, _react2.default.createElement('h4', null, 'Fruits'), _react2.default.createElement('ul', { className: 'menu' }, _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '/terms-and-conditions' }, 'Terminos y condiciones')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '/libro-de-reclamaciones' }, 'Libro de reclamaciones')))))));
};

exports.default = Footer;