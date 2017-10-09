'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../components/common/header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('../components/common/footer');

var _footer2 = _interopRequireDefault(_footer);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _antd = require('antd');

var _main = require('../static/styles/main.scss');

var _main2 = _interopRequireDefault(_main);

var _nav = require('../components/common/nav');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = _antd.Layout.Content;

var BaseLayout = function BaseLayout(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { name: 'theme-color', content: '#0000ff' }), _react2.default.createElement('title', null, props.title), _react2.default.createElement('meta', { charSet: 'utf-8' }), _react2.default.createElement('link', { rel: 'icon', type: 'image/png', href: '/static/images/piq_182876_400x400.png' }), _react2.default.createElement('meta', { name: 'viewport',
    content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' }), _react2.default.createElement('link', { href: '//fonts.googleapis.com/css?family=Open+Sans:400,600,700', rel: 'stylesheet' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css', integrity: 'sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M', crossorigin: 'anonymous' }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _main2.default } })), _react2.default.createElement(Content, null, _react2.default.createElement(_header2.default, { auth: props.auth, userAuth: props.userAuth }), _react2.default.createElement('div', null, props.children)));
};

exports.default = BaseLayout;