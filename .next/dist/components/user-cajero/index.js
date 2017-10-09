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

var _foodList = require('../food-list');

var _foodList2 = _interopRequireDefault(_foodList);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _utils = require('../../utils');

var _step = require('./orders-steps/step-1');

var _step2 = _interopRequireDefault(_step);

var _step3 = require('./orders-steps/step-2');

var _step4 = _interopRequireDefault(_step3);

var _step5 = require('./orders-steps/step-3');

var _step6 = _interopRequireDefault(_step5);

var _config = require('../../config.js');

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

    _this.eventCurrentStep = _this.eventCurrentStep.bind(_this);
    _this.updateCurrentStep = _this.updateCurrentStep.bind(_this);
    _this.getCurrentOrder = _this.getCurrentOrder.bind(_this);
    _this.updateCurrentOrder = _this.updateCurrentOrder.bind(_this);

    _this.getItemsQuantity = _this.getItemsQuantity.bind(_this);
    _this.updateItemsQuantity = _this.updateItemsQuantity.bind(_this);

    _this.getitemsBillTotal = _this.getitemsBillTotal.bind(_this);
    _this.updateitemsBillTotal = _this.updateitemsBillTotal.bind(_this);

    _this.state = { nextButton: false, currentStep: waySteps.step1, currentOrder: '', itemsQuantity: 0, itemsBillTotal: 0 };
    return _this;
  }

  (0, _createClass3.default)(Cajero, [{
    key: 'updateCurrentStep',
    value: function updateCurrentStep(step) {
      this.setState(function (prevState) {
        return {
          currentStep: step
        };
      });
    }
  }, {
    key: 'updateCurrentOrder',
    value: function updateCurrentOrder(orderID) {
      this.setState(function (prevState) {
        return {
          currentOrder: orderID
        };
      });
    }
  }, {
    key: 'getCurrentOrder',
    value: function getCurrentOrder() {
      return this.state.currentOrder;
    }
  }, {
    key: 'getItemsQuantity',
    value: function getItemsQuantity() {
      return this.state.itemsQuantity;
    }
  }, {
    key: 'updateItemsQuantity',
    value: function updateItemsQuantity(quantity) {
      this.setState(function (prevState) {
        return {
          itemsQuantity: quantity
        };
      });
    }
  }, {
    key: 'getitemsBillTotal',
    value: function getitemsBillTotal() {
      return this.state.itemsBillTotal;
    }
  }, {
    key: 'updateitemsBillTotal',
    value: function updateitemsBillTotal(price) {
      this.setState(function (prevState) {
        return {
          itemsBillTotal: price
        };
      });
    }
  }, {
    key: 'eventCurrentStep',
    value: function eventCurrentStep() {
      switch (this.state.currentStep) {
        case waySteps.step1:
          return _react2.default.createElement(_step2.default, { getItemsQuantity: this.getItemsQuantity, getitemsBillTotal: this.getitemsBillTotal, updateItemsQuantity: this.updateItemsQuantity, updateitemsBillTotal: this.updateitemsBillTotal, currentStep: this.updateCurrentStep, updateCurrentOrder: this.updateCurrentOrder, getCurrentOrder: this.getCurrentOrder });
          break;

        case waySteps.step2:
          return _react2.default.createElement(_step4.default, { updateItemsQuantity: this.updateItemsQuantity, updateitemsBillTotal: this.updateitemsBillTotal, currentStep: this.updateCurrentStep, updateCurrentOrder: this.updateCurrentOrder, getCurrentOrder: this.getCurrentOrder });
          break;

        case waySteps.step3:
          return _react2.default.createElement(_step6.default, { updateItemsQuantity: this.updateItemsQuantity, updateitemsBillTotal: this.updateitemsBillTotal, getItemsQuantity: this.getItemsQuantity, getitemsBillTotal: this.getitemsBillTotal, currentStep: this.updateCurrentStep, updateCurrentOrder: this.updateCurrentOrder, getCurrentOrder: this.getCurrentOrder });
          break;
      }
    }
  }, {
    key: 'getPricePretty',
    value: function getPricePretty(num) {
      var pretty = (num / 100).toFixed(2);
      return 'S/' + pretty;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'Cajero' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), _react2.default.createElement('div', { className: 'Cajero__top' }, _react2.default.createElement('div', null, _react2.default.createElement('h2', null, 'Cajero - step ', this.state.currentStep)), _react2.default.createElement('div', null, _react2.default.createElement('p', null, 'Items: ', this.state.itemsQuantity), _react2.default.createElement('p', null, 'Total: ', this.getPricePretty(this.state.itemsBillTotal)))), _react2.default.createElement('div', null, this.eventCurrentStep()));
    }
  }]);

  return Cajero;
}(_react2.default.Component);

exports.default = Cajero;