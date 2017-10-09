'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('next/node_modules/babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _utils = require('../../utils');

var _config = require('../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wayView = { mainList: 'mainList', details: 'details', edit: 'edit' };

var FoodItem = function (_React$Component) {
  (0, _inherits3.default)(FoodItem, _React$Component);

  function FoodItem(props) {
    (0, _classCallCheck3.default)(this, FoodItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FoodItem.__proto__ || (0, _getPrototypeOf2.default)(FoodItem)).call(this, props));

    _this.URI = _config2.default.url;

    _this.state = { isAdd: false, cant: 1, isEnabled: _this.props.isEnabled, currentValue: _this.props.isEnabled, showDetails: false
      // This binding is necessary to make `this` work in the callback
    };_this.handleStateClick = _this.handleStateClick.bind(_this);
    _this.isEnabledToCant = _this.isEnabledToCant.bind(_this);
    _this.handleChangeState = _this.handleChangeState.bind(_this);
    _this.isEnabledToSale = _this.isEnabledToSale.bind(_this);
    _this.handleFoodStateUpdateClick = _this.handleFoodStateUpdateClick.bind(_this);
    _this.isAdminToUpdateState = _this.isAdminToUpdateState.bind(_this);
    _this.eventShowDetails = _this.eventShowDetails.bind(_this);

    _this.userType = _this.props.userType;
    return _this;
  }

  (0, _createClass3.default)(FoodItem, [{
    key: 'handleStateClick',
    value: function handleStateClick() {
      var foodId = this.props.id;

      console.log('Element id');

      if (!this.state.isAdd) {
        // Add foodID
        var array = this.props.getListFood();
        array.push({ item: foodId, cant: this.state.cant });

        // updade items quantity
        var currentItemsQuantity = this.props.getItemsQuantity();
        currentItemsQuantity += this.state.cant;
        this.props.updateItemsQuantity(currentItemsQuantity);

        // update pricing
        var currentPricing = this.props.getitemsBillTotal();
        currentPricing += this.props.price;
        this.props.updateitemsBillTotal(currentPricing);

        // update array list
        this.props.setListFood(array);

        this.setState(function (prevState) {
          return {
            isAdd: !prevState.isAdd
          };
        });
      } else {
        // Remove foodId
        var _array = this.props.getListFood();
        var elementsRemoved = _lodash2.default.remove(_array, function (element) {
          return element.item === foodId;
        });

        // update items quantity
        var _currentItemsQuantity = this.props.getItemsQuantity();
        _currentItemsQuantity -= this.state.cant;
        this.props.updateItemsQuantity(_currentItemsQuantity);

        // update pricing
        var _currentPricing = this.props.getitemsBillTotal();
        _currentPricing -= this.props.price * this.state.cant;
        this.props.updateitemsBillTotal(_currentPricing);

        // update array list
        this.props.setListFood(_array);

        this.setState(function (prevState) {
          return {
            cant: 1
          };
        });

        this.setState(function (prevState) {
          return {
            isAdd: !prevState.isAdd
          };
        });
      }
    }
  }, {
    key: 'handleFoodStateUpdateClick',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var foodID, payload, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('FINAL DATO to send');
                foodID = this.props.id;
                _context.prev = 2;

                // update order
                payload = {
                  isEnabled: this.state.isEnabled
                };
                _context.next = 6;
                return (0, _utils.requestHTTP)(this.URI + '/api/menu/' + foodID + '?_method=put', 'post', payload);

              case 6:
                result = _context.sent;

                console.log('ORDER CREATION >>', result);

                this.setState(function (prevState) {
                  return {
                    currentValue: _this2.state.isEnabled
                  };
                });

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

      function handleFoodStateUpdateClick() {
        return _ref.apply(this, arguments);
      }

      return handleFoodStateUpdateClick;
    }()
  }, {
    key: 'handleChangeState',
    value: function handleChangeState(e) {
      var _this3 = this;

      console.log('Element selected');
      console.log(e.target);

      console.log('id', (0, _typeof3.default)(this.props.id));

      if (e.target.name === 'cant') {

        var newQuantity = Number(e.target.value);

        // Find element, and update
        var array = this.props.getListFood();

        // remove food from the list
        var elementsRemoved = _lodash2.default.remove(array, function (element) {
          return element.item === _this3.props.id;
        });

        // Update quantity items
        var currentItemsQuantity = this.props.getItemsQuantity();
        currentItemsQuantity -= this.state.cant;
        currentItemsQuantity += newQuantity;
        this.props.updateItemsQuantity(currentItemsQuantity);

        // Update pricing 
        var currentPricing = this.props.getitemsBillTotal();
        currentPricing -= this.props.price * this.state.cant;
        currentPricing += this.props.price * newQuantity;
        this.props.updateitemsBillTotal(currentPricing);

        // Add new food item
        array.push({ item: this.props.id, cant: newQuantity });

        // Update food list
        this.props.setListFood(array);

        this.setState({ cant: newQuantity });
      } else if (e.target.name === 'selectState') {
        var value = false;
        if (e.target.value === 'Disponible') {
          value = true;
        }
        this.setState({ isEnabled: value });
      } else {
        console.log('Error');
      }
    }
  }, {
    key: 'isEnabledToCant',
    value: function isEnabledToCant() {
      if (this.state.isAdd) {
        return _react2.default.createElement('input', { type: 'number', name: 'cant', onChange: this.handleChangeState, value: this.state.cant, min: '1' });
      }
    }
  }, {
    key: 'isEnabledToSale',
    value: function isEnabledToSale() {
      if (!this.state.currentValue) {
        return _react2.default.createElement('span', { className: 'badge badge-secondary' }, 'NoDisponible');
      } else {
        return _react2.default.createElement('span', { className: 'badge badge-success' }, 'Disponible');
      }
    }
  }, {
    key: 'eventShowDetails',
    value: function eventShowDetails() {
      // Update button click state
      this.setState(function (prevState) {
        return {
          showDetails: !prevState.showDetails
        };
      });

      console.log('ELEMENET ID', this.props.id);

      // Update view state
      this.props.updateViewState(wayView.details);

      // Update content
      this.props.updateFoodDetails(this.props.id);
    }
  }, {
    key: 'userActions',
    value: function userActions() {
      if (this.userType === 'chef') {
        return _react2.default.createElement('div', null, _react2.default.createElement('button', { onClick: this.handleStateClick, type: 'button', className: 'btn btn-primary' }, this.state.isAdd ? 'Remove' : 'Add'), _react2.default.createElement('div', null, 'Cant: ', this.isEnabledToCant()));
      } else {
        return _react2.default.createElement('div', null, _react2.default.createElement('button', { onClick: this.eventShowDetails, type: 'button', className: 'btn btn-primary' }, 'Detalles'));
      }
    }
  }, {
    key: 'isAdminToUpdateState',
    value: function isAdminToUpdateState() {
      if (this.userType === 'admin') {
        return _react2.default.createElement('div', null, _react2.default.createElement('form', null, _react2.default.createElement('select', { name: 'selectState', onChange: this.handleChangeState, value: this.state.isEnabled ? 'Disponible' : 'NoDisponible' }, _react2.default.createElement('option', null, 'Disponible'), _react2.default.createElement('option', null, 'NoDisponible')), _react2.default.createElement('button', { onClick: this.handleFoodStateUpdateClick, type: 'button', className: 'btn btn-success' }, 'Update')));
      } else {
        return _react2.default.createElement('div', null);
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
      return _react2.default.createElement('article', { className: 'Cajero__list-item' }, _react2.default.createElement('div', { className: 'Cajero__list-item--cover' }, _react2.default.createElement('img', { src: this.props.photo || '/static/images/food-outline.png' })), _react2.default.createElement('div', { className: 'Cajero__list-item--details' }, _react2.default.createElement('h2', { className: 'title' }, this.props.name), _react2.default.createElement('div', null, this.isEnabledToSale()), _react2.default.createElement('div', null, this.isAdminToUpdateState()), _react2.default.createElement('p', { className: 'pricing' }, this.getPricePretty(this.props.price)), _react2.default.createElement('p', { className: 'description' }, this.props.description), _react2.default.createElement('div', null, this.userActions())));
    }
  }]);

  return FoodItem;
}(_react2.default.Component);

exports.default = FoodItem;