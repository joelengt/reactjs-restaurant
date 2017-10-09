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

var FoodItem = function (_React$Component) {
  (0, _inherits3.default)(FoodItem, _React$Component);

  function FoodItem(props) {
    (0, _classCallCheck3.default)(this, FoodItem);

    return (0, _possibleConstructorReturn3.default)(this, (FoodItem.__proto__ || (0, _getPrototypeOf2.default)(FoodItem)).call(this, props));
  }

  (0, _createClass3.default)(FoodItem, [{
    key: 'getPricePretty',
    value: function getPricePretty(num) {
      var pretty = (num / 100).toFixed(2);
      return 'S/' + pretty;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('tr', null, _react2.default.createElement('td', null, _react2.default.createElement('p', null, this.props.name)), _react2.default.createElement('td', null, _react2.default.createElement('p', null, this.props.cant)), _react2.default.createElement('td', null, _react2.default.createElement('p', null, this.getPricePretty(this.props.price))));
    }
  }]);

  return FoodItem;
}(_react2.default.Component);

exports.default = FoodItem;