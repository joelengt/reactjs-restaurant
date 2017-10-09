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

var _foodList = require('../../../food-list');

var _foodList2 = _interopRequireDefault(_foodList);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _utils = require('../../../../utils');

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
    _this.setListFood = _this.setListFood.bind(_this);
    _this.getListFood = _this.getListFood.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);

    _this.foodList = [];

    _this.state = { nextButton: false };
    return _this;
  }

  (0, _createClass3.default)(Cajero, [{
    key: 'setListFood',
    value: function setListFood(array) {
      // event add or remove
      this.foodList = array;
    }
  }, {
    key: 'getListFood',
    value: function getListFood() {
      return this.foodList;
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      console.log('cancel');
      // Clean Items
      this.props.updateItemsQuantity(0);
      // Clean Pricing
      this.props.updateitemsBillTotal(0);
    }
  }, {
    key: 'handleNextButton',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var listFood, clientData, clientResult, client, igv, subTotal, total, quantity, payload, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('FINAL DATO >> ', this.getListFood());
                _context.prev = 1;
                listFood = this.getListFood();

                // send event only if  list food, has content

                if (listFood.length) {
                  _context.next = 8;
                  break;
                }

                console.log('Error listFood', listFood.length);
                this.setState(function (prevState) {
                  return {
                    nextButton: false
                  };
                });

                _context.next = 26;
                break;

              case 8:
                clientData = {
                  fullName: '',
                  dni: ''

                  // create client
                };
                _context.next = 11;
                return (0, _utils.requestHTTP)(this.URI + '/api/clients', 'post', clientData);

              case 11:
                clientResult = _context.sent;

                console.log('Client >>', clientResult.data.item);
                client = clientResult.data.item;
                igv = this.props.getitemsBillTotal() * 0.18;
                subTotal = this.props.getitemsBillTotal() - igv;
                total = this.props.getitemsBillTotal();
                quantity = this.props.getItemsQuantity();
                payload = {
                  "emisor": 1,
                  "foods": listFood,
                  "paymentMethod": "Cash",
                  "summary": {
                    "items": quantity,
                    "igv": igv,
                    "subtotal": subTotal,
                    "total": total
                  },
                  "client": client

                  // create order
                };
                _context.next = 21;
                return (0, _utils.requestHTTP)(this.URI + '/api/orders', 'post', payload);

              case 21:
                result = _context.sent;

                console.log('ORDER CREATION >>', result);

                // update orders currentOrder
                this.props.updateCurrentOrder(result.data.item._id);

                this.setState(function (prevState) {
                  return {
                    nextButton: true
                  };
                });

                // update view - step 2
                this.props.currentStep(waySteps.step2);

              case 26:
                _context.next = 31;
                break;

              case 28:
                _context.prev = 28;
                _context.t0 = _context['catch'](1);

                console.log('Error API', _context.t0);

              case 31:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 28]]);
      }));

      function handleNextButton() {
        return _ref.apply(this, arguments);
      }

      return handleNextButton;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'Cajero' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), _react2.default.createElement('div', { className: 'Cajero__list' }, _react2.default.createElement('div', { className: 'Cajero__list-container' }, _react2.default.createElement('h2', null, 'Menu del d\xEDa'), _react2.default.createElement(_foodList2.default, { getItemsQuantity: this.props.getItemsQuantity, updateItemsQuantity: this.props.updateItemsQuantity, getitemsBillTotal: this.props.getitemsBillTotal, updateitemsBillTotal: this.props.updateitemsBillTotal, getListFood: this.getListFood, setListFood: this.setListFood, userType: 'chef' }))), _react2.default.createElement('div', { className: 'Cajero__actions' }, _react2.default.createElement('button', { onClick: this.handleCancel, type: 'button', className: 'btn btn-danger' }, 'Cancelar'), _react2.default.createElement('button', { onClick: this.handleNextButton, type: 'button', className: 'btn btn-success' }, 'Siguiente')));
    }
  }]);

  return Cajero;
}(_react2.default.Component);

exports.default = Cajero;