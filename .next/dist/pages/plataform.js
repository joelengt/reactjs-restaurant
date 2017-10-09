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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _plataform = require('../components/plataform');

var _plataform2 = _interopRequireDefault(_plataform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plataform = function (_React$Component) {
  (0, _inherits3.default)(Plataform, _React$Component);

  function Plataform(props) {
    (0, _classCallCheck3.default)(this, Plataform);

    return (0, _possibleConstructorReturn3.default)(this, (Plataform.__proto__ || (0, _getPrototypeOf2.default)(Plataform)).call(this, props));
  }

  (0, _createClass3.default)(Plataform, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, { title: 'Plataform' }, _react2.default.createElement(_plataform2.default, null));
    }
  }]);

  return Plataform;
}(_react2.default.Component);

exports.default = Plataform;