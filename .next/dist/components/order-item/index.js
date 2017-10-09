'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _foodItem = require('./food-item');

var _foodItem2 = _interopRequireDefault(_foodItem);

var _utils = require('../../utils');

var _config = require('../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderItem = function (_React$Component) {
  (0, _inherits3.default)(OrderItem, _React$Component);

  function OrderItem(props) {
    (0, _classCallCheck3.default)(this, OrderItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OrderItem.__proto__ || (0, _getPrototypeOf2.default)(OrderItem)).call(this, props));

    _this.URI = _config2.default.url;

    _this.state = { orderState: _this.props.orderState, currentState: _this.props.orderState
      // This binding is necessary to make `this` work in the callback
    };_this.handleStateClick = _this.handleStateClick.bind(_this);
    _this.handleChangeState = _this.handleChangeState.bind(_this);

    _this.userType = _this.props.userType;

    return _this;
  }

  (0, _createClass3.default)(OrderItem, [{
    key: 'handleStateClick',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var OrderID, payload, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('FINAL DATO to send');
                OrderID = this.props.id;
                _context.prev = 2;

                // update order
                payload = {
                  state: this.state.orderState
                };
                _context.next = 6;
                return (0, _utils.requestHTTP)(this.URI + '/api/orders/' + OrderID + '?_method=put', 'post', payload);

              case 6:
                result = _context.sent;

                console.log('ORDER CREATION >>', result);

                this.setState({ currentState: this.state.orderState });

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                console.log('Error API', _context.t0);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 11]]);
      }));

      function handleStateClick() {
        return _ref.apply(this, arguments);
      }

      return handleStateClick;
    }()
  }, {
    key: 'handleChangeState',
    value: function handleChangeState(e) {
      console.log('Element selected');
      console.log(e.target.value);

      if (e.target.name === 'selectState') {
        this.setState({ orderState: e.target.value });
      } else {
        console.log('Error');
      }
    }
  }, {
    key: 'getFoodList',
    value: function getFoodList(FoodList) {
      var _this2 = this;

      console.log('Food list!! > ', FoodList);
      var result = FoodList.map(function (element) {
        var food = element.item;
        if (food) {
          return _react2.default.createElement(_foodItem2.default, { id: food._id, key: food._id, name: food.name, price: food.price, cant: element.cant, userType: _this2.props.userType });
        }
      });

      return result;
    }
  }, {
    key: 'getPricePretty',
    value: function getPricePretty(num) {
      var pretty = (num / 100).toFixed(2);
      return 'S/' + pretty;
    }
  }, {
    key: 'isAdmin',
    value: function isAdmin() {
      if (this.userType === 'admin') {
        return _react2.default.createElement('div', null, _react2.default.createElement('b', null, 'Summary'), _react2.default.createElement('p', null, 'quantity: ', this.props.summary.items, ' '), _react2.default.createElement('p', null, 'Sub Total: ', this.getPricePretty(this.props.summary.subtotal)), _react2.default.createElement('p', null, 'IGV (18%): ', this.getPricePretty(this.props.summary.igv)), _react2.default.createElement('p', null, 'Total: ', this.getPricePretty(this.props.summary.total)));
      }
    }
  }, {
    key: 'isAdminToShowPrice',
    value: function isAdminToShowPrice() {
      if (this.userType === 'admin') {
        return _react2.default.createElement('td', null, 'Price');
      }
    }
  }, {
    key: 'isChefToUpdateState',
    value: function isChefToUpdateState() {
      if (this.userType === 'chef') {
        return _react2.default.createElement('div', null, _react2.default.createElement('form', null, _react2.default.createElement('select', { name: 'selectState', onChange: this.handleChangeState }, _react2.default.createElement('option', null, 'Pendiente'), _react2.default.createElement('option', null, 'EnProceso'), _react2.default.createElement('option', null, 'Terminado')), _react2.default.createElement('button', { onClick: this.handleStateClick, type: 'button', className: 'btn btn-success' }, 'Update')));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var currentStatusBadge = '';

      if (this.state.orderState === 'Pendiente') {
        currentStatusBadge = _react2.default.createElement('span', { className: 'badge badge-primary' }, this.state.orderState, '!');
      } else if (this.state.orderState === 'EnProceso') {
        currentStatusBadge = _react2.default.createElement('span', { className: 'badge badge-warning' }, this.state.orderState);
      } else if (this.state.orderState === 'Terminado') {
        currentStatusBadge = _react2.default.createElement('span', { className: 'badge badge-success' }, this.state.orderState);
      } else {
        currentStatusBadge = _react2.default.createElement('span', { className: 'badge badge-dark' }, 'Error');
      }

      return _react2.default.createElement('article', { className: 'Cajero__list-item' }, _react2.default.createElement('div', { className: 'Cajero__list-item--cover' }, _react2.default.createElement('img', { src: '/static/images/Twemoji_1f35c.png' })), _react2.default.createElement('div', { className: 'Cajero__list-item--details' }, _react2.default.createElement('h2', { className: 'title' }, 'NRA000', this.props.id), _react2.default.createElement('div', null, _react2.default.createElement('span', { className: 'badge badge-primary' }, this.state.currentState)), _react2.default.createElement('div', null, this.isChefToUpdateState()), _react2.default.createElement('div', null, _react2.default.createElement('b', null, 'Datos del client'), _react2.default.createElement('p', null, 'Client: ', this.props.client.fullName), _react2.default.createElement('p', null, 'DNI: ', this.props.client.dni)), _react2.default.createElement('div', null, _react2.default.createElement('b', null, 'List Food'), _react2.default.createElement('table', { className: 'table' }, _react2.default.createElement('tr', null, _react2.default.createElement('td', null, 'Item'), _react2.default.createElement('td', null, 'Cant'), this.isAdminToShowPrice()), this.getFoodList(this.props.food))), this.isAdmin()));
    }
  }]);

  return OrderItem;
}(_react2.default.Component);

exports.default = OrderItem;