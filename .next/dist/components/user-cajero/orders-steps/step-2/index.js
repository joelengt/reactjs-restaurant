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
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handlePrevButton = _this.handlePrevButton.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);

    _this.state = { nextButton: false, name: '', dni: '', payment: '' };
    return _this;
  }

  (0, _createClass3.default)(Cajero, [{
    key: 'handleNextButton',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var OrderID, clientID, response, order, clientData, clientResult, client, payload, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('FINAL DATO to send');
                OrderID = this.props.getCurrentOrder();
                clientID = '';
                _context.prev = 3;
                _context.next = 6;
                return (0, _utils.requestHTTP)(this.URI + '/api/orders/' + OrderID, 'get');

              case 6:
                response = _context.sent;

                console.log('Data', response.data.item);

                // clientID
                order = response.data.item;

                clientID = order.client._id;

                clientData = {
                  fullName: this.state.name,
                  dni: this.state.dni

                  // update client
                };
                _context.next = 13;
                return (0, _utils.requestHTTP)(this.URI + '/api/clients/' + clientID + '?_method=put', 'post', clientData);

              case 13:
                clientResult = _context.sent;

                console.log('Client >>', clientResult.data.item);
                client = clientResult.data.item;

                // update order

                payload = {
                  paymentMethod: this.state.payment,
                  client: client._id
                };
                _context.next = 19;
                return (0, _utils.requestHTTP)(this.URI + '/api/orders/' + OrderID + '?_method=put', 'post', payload);

              case 19:
                result = _context.sent;

                console.log('ORDER CREATION >>', result);

                this.props.currentStep(waySteps.step3);

                _context.next = 27;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context['catch'](3);

                console.log('Error API', _context.t0);

              case 27:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 24]]);
      }));

      function handleNextButton() {
        return _ref.apply(this, arguments);
      }

      return handleNextButton;
    }()
  }, {
    key: 'handlePrevButton',
    value: function handlePrevButton() {
      this.props.currentStep(waySteps.step1);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      console.log('Element selected');
      console.log(e.target.name);

      if (e.target.name === 'inputName') {
        this.setState({ name: e.target.value });
      } else if (e.target.name === 'inputDNI') {
        this.setState({ dni: e.target.value });
      } else if (e.target.name === 'paymentRadios') {
        this.setState({ payment: e.target.value });
      } else {
        console.log('Error');
      }
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
      return _react2.default.createElement('div', { className: 'Cajero' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), _react2.default.createElement('div', { className: 'Cajero__list' }, _react2.default.createElement('div', { className: 'Cajero__list-container' }, _react2.default.createElement('div', { className: 'Cajero__list-info' }, _react2.default.createElement('form', null, _react2.default.createElement('div', null, _react2.default.createElement('div', null, _react2.default.createElement('h2', null, 'Datos del Client')), _react2.default.createElement('div', { className: 'form-group' }, _react2.default.createElement('label', { 'for': 'name' }, 'Name'), _react2.default.createElement('input', { type: 'name', className: 'form-control', name: 'inputName', 'aria-describedby': 'nameHelp', placeholder: 'Enter name', onChange: this.handleChange, value: this.state.name })), _react2.default.createElement('div', { className: 'form-group' }, _react2.default.createElement('label', { 'for': 'dni' }, 'DNI'), _react2.default.createElement('input', { type: 'number', className: 'form-control', name: 'inputDNI', placeholder: 'dni', onChange: this.handleChange, value: this.state.dni }))), _react2.default.createElement('div', null, _react2.default.createElement('div', null, _react2.default.createElement('h2', null, 'Method Payment')), _react2.default.createElement('div', { 'class': 'form-check' }, _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'paymentRadios', id: 'radioCash', value: 'Cash', onClick: this.handleChange }), _react2.default.createElement('label', { 'class': 'form-check-label', 'for': 'radioCash' }, 'Cash')), _react2.default.createElement('div', { 'class': 'form-check' }, _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'paymentRadios', id: 'radioDebitCard', value: 'DebitCard', onClick: this.handleChange }), _react2.default.createElement('label', { 'class': 'form-check-label', 'for': 'radioDebitCard' }, 'DebitCard')), _react2.default.createElement('div', { 'class': 'form-check' }, _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'paymentRadios', id: 'radioCreditCard', value: 'CreditCard', onClick: this.handleChange }), _react2.default.createElement('label', { 'class': 'form-check-label', 'for': 'radioCreditCard' }, 'CreditCard'))))))), _react2.default.createElement('div', { className: 'Cajero__actions' }, _react2.default.createElement('button', { onClick: this.handleCancel, className: 'btn btn-danger' }, 'Cancelar'), _react2.default.createElement('button', { onClick: this.handlePrevButton, className: 'btn btn-primary' }, 'Back'), _react2.default.createElement('button', { onClick: this.handleNextButton, className: 'btn btn-success' }, 'Siguiente')));
    }
  }]);

  return Cajero;
}(_react2.default.Component);

exports.default = Cajero;