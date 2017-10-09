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

var _orderItem = require('../order-item');

var _orderItem2 = _interopRequireDefault(_orderItem);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _utils = require('../../utils');

var _config = require('../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderList = function (_React$Component) {
  (0, _inherits3.default)(OrderList, _React$Component);

  function OrderList(props) {
    (0, _classCallCheck3.default)(this, OrderList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OrderList.__proto__ || (0, _getPrototypeOf2.default)(OrderList)).call(this, props));

    _this.URI = _config2.default.url;

    // This binding is necessary to make `this` work in the callback
    _this.setListFood = _this.setListFood.bind(_this);
    _this.getListFood = _this.getListFood.bind(_this);

    _this.state = { listOrders: [] };

    return _this;
  }

  (0, _createClass3.default)(OrderList, [{
    key: 'setListFood',
    value: function setListFood(array) {
      // event add or remove
      this.props.setListFood(array);
    }
  }, {
    key: 'getListFood',
    value: function getListFood() {
      return this.props.getListFood();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var options = {
        uri: this.URI + '/api/orders',
        json: true
      };

      (0, _requestPromise2.default)(options).then(function (result) {
        console.log('Result API>>', result);

        _this2.setState(function (prevState) {
          return {
            listOrders: result.data.items
          };
        });
      }).catch(function (err) {
        console.log('Error API', err);
      });
    }
  }, {
    key: 'getData',
    value: function getData(data) {
      var _this3 = this;

      var response = data.map(function (element) {
        if (_this3.props.userType === 'admin') {
          return _react2.default.createElement(_orderItem2.default, { id: element._id, key: element._id, client: element.client, summary: element.summary, food: element.foods, userType: _this3.props.userType });
        } else {
          if (element.isEnabled) {
            return _react2.default.createElement(_orderItem2.default, { id: element._id, key: element._id, orderState: element.state, client: element.client, summary: element.summary, food: element.foods, userType: _this3.props.userType });
          }
        }
      });

      return response;
    }
  }, {
    key: 'render',
    value: function render() {
      var elements = this.state.listOrders;

      if (!elements.length) {
        return _react2.default.createElement('div', null, 'Cargando...');
      } else {
        return _react2.default.createElement('div', { className: 'OrderList' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), this.getData(elements));
      }
    }
  }]);

  return OrderList;
}(_react2.default.Component);

exports.default = OrderList;