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

var _foodList = require('../../food-list');

var _foodList2 = _interopRequireDefault(_foodList);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _utils = require('../../../utils');

var _config = require('../../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function (_React$Component) {
  (0, _inherits3.default)(Menu, _React$Component);

  function Menu(props) {
    (0, _classCallCheck3.default)(this, Menu);

    // This binding is necessary to make `this` work in the callback
    var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props));

    _this.URI = _config2.default.url;
    _this.handleNextButton = _this.handleNextButton.bind(_this);
    _this.setListFood = _this.setListFood.bind(_this);
    _this.getListFood = _this.getListFood.bind(_this);
    _this.foodList = [];

    _this.state = { nextButton: false };
    return _this;
  }

  (0, _createClass3.default)(Menu, [{
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
    key: 'handleNextButton',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var listFood, payload, result;
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

                _context.next = 14;
                break;

              case 8:
                payload = {
                  "emisor": 1,
                  "foods": listFood,
                  "paymentMethod": "Cash",
                  "summary": {
                    "igv": 2000,
                    "subtotal": 5600,
                    "total": 7600
                  }
                };
                _context.next = 11;
                return (0, _utils.requestHTTP)(this.URI + '/api/orders', 'post', payload);

              case 11:
                result = _context.sent;

                console.log('ORDER CREATION >>', result);

                // reset listFood
                // this.setListFood([])

                this.setState(function (prevState) {
                  return {
                    nextButton: true
                  };
                });

              case 14:
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](1);

                console.log('Error API', _context.t0);

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 16]]);
      }));

      function handleNextButton() {
        return _ref.apply(this, arguments);
      }

      return handleNextButton;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'Menu' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), _react2.default.createElement('div', { className: 'Menu__list' }, _react2.default.createElement('div', { className: 'Menu__list-container' }, _react2.default.createElement('h2', null, 'Menu'), _react2.default.createElement(_foodList2.default, { getListFood: this.getListFood, setListFood: this.setListFood, userType: 'admin' }))));
    }
  }]);

  return Menu;
}(_react2.default.Component);

exports.default = Menu;