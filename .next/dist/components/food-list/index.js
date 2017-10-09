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

var _foodItem = require('../food-item');

var _foodItem2 = _interopRequireDefault(_foodItem);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _utils = require('../../utils');

var _foodDetails = require('../food-details');

var _foodDetails2 = _interopRequireDefault(_foodDetails);

var _foodEdit = require('../food-edit');

var _foodEdit2 = _interopRequireDefault(_foodEdit);

var _foodCreate = require('../food-create');

var _foodCreate2 = _interopRequireDefault(_foodCreate);

var _config = require('../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wayView = { mainList: 'mainList', details: 'details', edit: 'edit', create: 'create' };

var FoodList = function (_React$Component) {
  (0, _inherits3.default)(FoodList, _React$Component);

  function FoodList(props) {
    (0, _classCallCheck3.default)(this, FoodList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FoodList.__proto__ || (0, _getPrototypeOf2.default)(FoodList)).call(this, props));

    _this.URI = _config2.default.url;
    _this.state = { listFood: [], currentView: wayView.mainList, currentFoodDetails: ''

      // This binding is necessary to make `this` work in the callback
    };_this.setListFood = _this.setListFood.bind(_this);
    _this.getListFood = _this.getListFood.bind(_this);
    _this.updateViewState = _this.updateViewState.bind(_this);
    _this.updateFoodDetails = _this.updateFoodDetails.bind(_this);
    _this.eventCreateForm = _this.eventCreateForm.bind(_this);
    _this.isAdminToCreateFood = _this.isAdminToCreateFood.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(FoodList, [{
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
    key: 'updateViewState',
    value: function updateViewState(viewState) {
      this.setState(function (prevState) {
        return {
          currentView: viewState
        };
      });
    }
  }, {
    key: 'updateFoodDetails',
    value: function updateFoodDetails(foodID) {
      this.setState(function (prevState) {
        return {
          currentFoodDetails: foodID
        };
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var options = {
        uri: this.URI + '/api/menu',
        json: true
      };

      (0, _requestPromise2.default)(options).then(function (result) {
        console.log('Result API>>', result);

        _this2.setState(function (prevState) {
          return {
            listFood: result.data.items
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
        return _react2.default.createElement(_foodItem2.default, { getItemsQuantity: _this3.props.getItemsQuantity, updateItemsQuantity: _this3.props.updateItemsQuantity, getitemsBillTotal: _this3.props.getitemsBillTotal, updateitemsBillTotal: _this3.props.updateitemsBillTotal, updateViewState: _this3.updateViewState, updateFoodDetails: _this3.updateFoodDetails, id: element._id, key: element._id, name: element.name, description: element.description, photo: element.photo, price: element.price, isEnabled: element.isEnabled, getListFood: _this3.getListFood, setListFood: _this3.setListFood, userType: _this3.props.userType });
      });

      return response;
    }
  }, {
    key: 'eventCreateForm',
    value: function eventCreateForm() {
      this.updateViewState(wayView.create);
    }
  }, {
    key: 'isAdminToCreateFood',
    value: function isAdminToCreateFood() {
      if (this.props.userType === 'admin') {
        return _react2.default.createElement('div', null, _react2.default.createElement('button', { onClick: this.eventCreateForm, type: 'button', className: 'btn btn-success' }, 'New Food'));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var elements = this.state.listFood;
      var foodID = this.state.currentFoodDetails;

      switch (this.state.currentView) {
        case wayView.mainList:
          if (!elements.length) {
            return _react2.default.createElement('div', null, 'Cargando...');
          } else {
            return _react2.default.createElement('div', { className: 'FoodList' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), this.isAdminToCreateFood(), _react2.default.createElement('div', null, this.getData(elements)));
          }
          break;

        case wayView.details:
          if (!foodID) {
            return _react2.default.createElement('div', null, 'User Not Found');
          }
          return _react2.default.createElement(_foodDetails2.default, { id: foodID, updateViewState: this.updateViewState });
          break;

        case wayView.edit:
          if (!foodID) {
            return _react2.default.createElement('div', null, 'User Not Found');
          }
          return _react2.default.createElement(_foodEdit2.default, { id: foodID });
          break;

        case wayView.create:
          return _react2.default.createElement(_foodCreate2.default, null);
          break;
      }
    }
  }]);

  return FoodList;
}(_react2.default.Component);

exports.default = FoodList;