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

var _orders = require('../orders');

var _orders2 = _interopRequireDefault(_orders);

var _users = require('../users');

var _users2 = _interopRequireDefault(_users);

var _menuFood = require('../menu-food');

var _menuFood2 = _interopRequireDefault(_menuFood);

var _config = require('../../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _this.data = props.options;
    _this.state = { info: _react2.default.createElement(_orders2.default, null)

      // This binding is necessary to make `this` work in the callback
    };_this.handleStateClick = _this.handleStateClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'handleStateClick',
    value: function handleStateClick(i, event) {
      var result = void 0;

      switch (this.props.options[i].id) {
        case '0':
          result = _react2.default.createElement(_orders2.default, null);
          break;

        case '1':
          result = _react2.default.createElement(_menuFood2.default, null);
          break;

        case '2':
          result = _react2.default.createElement(_users2.default, null);
          break;

        default:
          result = _react2.default.createElement('div', null, _react2.default.createElement('h2', null, 'Error'));
      }

      this.setState({
        info: result
      });
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      var _this2 = this;

      var options = this.data;
      var template = options.map(function (element) {
        return _react2.default.createElement('li', { key: element.id, onClick: _this2.handleStateClick.bind(_this2, element.id) }, element.name);
      });
      return template;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement('nav', { className: 'options' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), _react2.default.createElement('ul', null, this.getOptions())), _react2.default.createElement('div', null, this.state.info));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;