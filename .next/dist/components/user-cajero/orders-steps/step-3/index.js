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

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _utils = require('../../../../utils');

var _foodItem = require('./food-item');

var _foodItem2 = _interopRequireDefault(_foodItem);

var _config = require('../../../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var waySteps = { step1: 1, step2: 2, step3: 3 };

var Cajero = function (_React$Component) {
  (0, _inherits3.default)(Cajero, _React$Component);

  function Cajero(props) {
    (0, _classCallCheck3.default)(this, Cajero);

    // This binding is necessary to make `this` work in the callback
    var _this = (0, _possibleConstructorReturn3.default)(this, (Cajero.__proto__ || (0, _getPrototypeOf2.default)(Cajero)).call(this, props));

    _this.URI = _config2.default.url;
    _this.handleNextButton = _this.handleNextButton.bind(_this);
    _this.getOrder = _this.getOrder.bind(_this);
    _this.getFoodList = _this.getFoodList.bind(_this);
    _this.handlePrevButton = _this.handlePrevButton.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);

    _this.state = { order: false };
    return _this;
  }

  (0, _createClass3.default)(Cajero, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var OrderID = this.props.getCurrentOrder();
      var options = {
        uri: this.URI + '/api/orders/' + OrderID,
        json: true
      };

      (0, _requestPromise2.default)(options).then(function (result) {
        console.log('Result API ORDER >>', result);

        _this2.setState(function (prevState) {
          return {
            order: result.data.item
          };
        });
      }).catch(function (err) {
        console.log('Error API', err);
      });
    }
  }, {
    key: 'handleNextButton',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var OrderID, payload, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('FINAL DATO to send');
                OrderID = this.props.getCurrentOrder();

                // Clean Items

                this.props.updateItemsQuantity(0);
                // Clean Pricing
                this.props.updateitemsBillTotal(0);

                _context.prev = 4;
                payload = {
                  "isEnabled": true
                };
                _context.next = 8;
                return (0, _utils.requestHTTP)(this.URI + '/api/orders/' + OrderID + '?_method=put', 'post', payload);

              case 8:
                result = _context.sent;

                console.log('ORDER CREATION >>', result);

                this.props.currentStep(waySteps.step1);

                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](4);

                console.log('Error API', _context.t0);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 13]]);
      }));

      function handleNextButton() {
        return _ref.apply(this, arguments);
      }

      return handleNextButton;
    }()
  }, {
    key: 'getFoodList',
    value: function getFoodList(FoodList) {
      console.log('Food list!!', FoodList);
      var result = FoodList.map(function (element) {
        var food = element.item;
        if (food) {
          return _react2.default.createElement(_foodItem2.default, { id: food._id, key: food._id, name: food.name, price: food.price, cant: element.cant });
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
    key: 'getOrder',
    value: function getOrder() {
      var order = this.state.order;
      if (!order) {
        return _react2.default.createElement('p', null, 'Cargando...');
      } else {

        var igv = this.props.getitemsBillTotal() * 0.18;
        var subTotal = this.props.getitemsBillTotal() - igv;
        var total = this.props.getitemsBillTotal();

        return _react2.default.createElement('div', { className: 'Cajero__list-container' }, _react2.default.createElement('div', { className: 'Cajero__list-summary' }, _react2.default.createElement('h3', null, 'Orden NRA000', order._id), _react2.default.createElement('p', null, 'Nombre: ', order.client.fullName), _react2.default.createElement('p', null, 'DNI: ', order.client.dni), _react2.default.createElement('p', null, 'paymentMethod: ', order.paymentMethod), _react2.default.createElement('h4', null, 'List Items'), _react2.default.createElement('table', null, _react2.default.createElement('tr', null, _react2.default.createElement('td', null, 'Item'), _react2.default.createElement('td', null, 'Cant'), _react2.default.createElement('td', null, 'Price')), this.getFoodList(order.foods)), _react2.default.createElement('div', null, _react2.default.createElement('h4', null, 'Summary'), _react2.default.createElement('p', null, 'Sub Total: ', this.getPricePretty(order.summary.subtotal)), _react2.default.createElement('p', null, 'IGV (18%): ', this.getPricePretty(order.summary.igv)), _react2.default.createElement('p', null, 'Total: ', this.getPricePretty(order.summary.total))), _react2.default.createElement('div', null, _react2.default.createElement('button', { onClick: window.print, className: 'btn btn-success' }, 'Print to Client'))));
      }
    }
  }, {
    key: 'handlePrevButton',
    value: function handlePrevButton() {
      this.props.currentStep(waySteps.step2);
    }
  }, {
    key: 'handleCancel',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var OrderID, result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('FINAL DATO to send');
                OrderID = this.props.getCurrentOrder();

                // Clean Items

                this.props.updateItemsQuantity(0);
                // Clean Pricing
                this.props.updateitemsBillTotal(0);

                _context2.prev = 4;
                _context2.next = 7;
                return (0, _utils.requestHTTP)(this.URI + '/api/orders/' + OrderID + '?_method=delete', 'post');

              case 7:
                result = _context2.sent;

                console.log('ORDER CREATION >>', result);

                this.props.currentStep(waySteps.step1);

                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2['catch'](4);

                console.log('Error API', _context2.t0);

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 12]]);
      }));

      function handleCancel() {
        return _ref2.apply(this, arguments);
      }

      return handleCancel;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'Cajero' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), _react2.default.createElement('div', { className: 'Cajero__list' }, this.getOrder()), _react2.default.createElement('div', { className: 'Cajero__actions' }, _react2.default.createElement('button', { onClick: this.handleCancel, className: 'btn btn-danger' }, 'Cancelar'), _react2.default.createElement('button', { onClick: this.handlePrevButton, className: 'btn btn-primary' }, 'Back'), _react2.default.createElement('button', { onClick: this.handleNextButton, className: 'btn btn-success' }, 'Listo')));
    }
  }]);

  return Cajero;
}(_react2.default.Component);

exports.default = Cajero;