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

var _utils = require('../../utils');

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _config = require('../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wayView = { mainList: 'mainList', details: 'details', edit: 'edit' };

var FoodCreate = function (_React$Component) {
  (0, _inherits3.default)(FoodCreate, _React$Component);

  function FoodCreate(props) {
    (0, _classCallCheck3.default)(this, FoodCreate);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FoodCreate.__proto__ || (0, _getPrototypeOf2.default)(FoodCreate)).call(this, props));

    _this.URI = _config2.default.url;

    _this.state = { showDetails: false, user: {}, name: '', description: '', price: 0, photo: '', message: '' };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.updateUserData = _this.updateUserData.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(FoodCreate, [{
    key: 'handleChange',
    value: function handleChange(e) {
      console.log('Element selected');
      console.log(e.target.name);

      this.setState({ message: '' });

      if (e.target.name === 'name') {
        this.setState({ name: e.target.value });
      } else if (e.target.name === 'description') {
        this.setState({ description: e.target.value });
      } else if (e.target.name === 'email') {
        this.setState({ email: e.target.value });
      } else if (e.target.name === 'photo') {
        this.setState({ photo: e.target.value });
      } else if (e.target.name === 'price') {
        this.setState({ price: e.target.value });
      } else {
        console.log('Error');
      }
    }
  }, {
    key: 'updateUserData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var payload, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                payload = {
                  name: this.state.name,
                  description: this.state.description,
                  price: this.state.price,
                  photo: this.state.photo || '/static/images/Fast-Food-icon.png'
                };

                console.log('USER DATA', payload);

                // validate fields

                if (!(payload.name !== '' && payload.description !== '' && payload.price !== 0)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 6;
                return (0, _utils.requestHTTP)(this.URI + '/api/menu', 'post', payload);

              case 6:
                result = _context.sent;

                console.log('ORDER CREATION >>', result);

                if (result.status === 201) {
                  // Clean status
                  this.setState({ name: '' });
                  this.setState({ description: '' });
                  this.setState({ price: 0 });
                  this.setState({ photo: '' });

                  this.setState({ message: 'Food Created!' });
                } else {
                  this.setState({ message: result.message });
                }

                _context.next = 12;
                break;

              case 11:
                this.setState({ message: 'All the fields are required' });

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](0);

                console.log('Error API', _context.t0);

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 14]]);
      }));

      function updateUserData() {
        return _ref.apply(this, arguments);
      }

      return updateUserData;
    }()
  }, {
    key: 'render',
    value: function render() {
      var user = this.state.user;
      return _react2.default.createElement('article', { className: 'Cajero__list-item' }, _react2.default.createElement('div', { className: 'Cajero__list-item--details' }, _react2.default.createElement('form', null, _react2.default.createElement('div', { className: 'form-group' }, _react2.default.createElement('label', { 'for': 'name' }, 'Nombre'), _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'name', id: 'name', 'aria-describedby': 'nameHelp', placeholder: 'Ingresar el nombre', value: this.state.name, onChange: this.handleChange })), _react2.default.createElement('div', { className: 'form-group' }, _react2.default.createElement('label', { 'for': 'description' }, 'Description'), _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'description', id: 'description', 'aria-describedby': 'nameHelp', placeholder: 'Ingresar la descripcion', value: this.state.description, onChange: this.handleChange })), _react2.default.createElement('div', { className: 'form-group' }, _react2.default.createElement('label', { 'for': 'price' }, 'price'), _react2.default.createElement('input', { type: 'number', className: 'form-control', name: 'price', id: 'price', 'aria-describedby': 'nameHelp', placeholder: 'Ingresar el price', value: this.state.price, onChange: this.handleChange })), _react2.default.createElement('div', { className: 'form-group' }, _react2.default.createElement('label', { 'for': 'photo' }, 'photo'), _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'photo', id: 'photo', 'aria-describedby': 'nameHelp', placeholder: 'Ingresar url del producto', value: this.state.photo, onChange: this.handleChange }))), _react2.default.createElement('div', null, _react2.default.createElement('button', { onClick: this.updateUserData, type: 'button', className: 'btn btn-success' }, 'Save')), _react2.default.createElement('div', null, this.state.message)));
    }
  }]);

  return FoodCreate;
}(_react2.default.Component);

exports.default = FoodCreate;