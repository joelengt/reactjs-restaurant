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

var _userCajero = require('../user-cajero');

var _userCajero2 = _interopRequireDefault(_userCajero);

var _userChef = require('../user-chef');

var _userChef2 = _interopRequireDefault(_userChef);

var _userAdmin = require('../user-admin');

var _userAdmin2 = _interopRequireDefault(_userAdmin);

var _config = require('../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userOptions = {
  admin: 1,
  cajero: 2,
  chef: 3
};

var Plataform = function (_React$Component) {
  (0, _inherits3.default)(Plataform, _React$Component);

  function Plataform(props) {
    (0, _classCallCheck3.default)(this, Plataform);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Plataform.__proto__ || (0, _getPrototypeOf2.default)(Plataform)).call(this, props));

    _this.URI = _config2.default.url;
    return _this;
  }

  (0, _createClass3.default)(Plataform, [{
    key: 'getUserView',
    value: function getUserView() {
      var userView = this.props.userAccess;

      if (userView === userOptions.cajero) {
        return _react2.default.createElement(_userCajero2.default, null);
      } else if (userView === userOptions.chef) {
        return _react2.default.createElement(_userChef2.default, null);
      } else if (userView === userOptions.admin) {
        return _react2.default.createElement(_userAdmin2.default, null);
      } else {
        return _react2.default.createElement('div', { className: 'Plataform' }, '401 - Ud No tiene acceso');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.getUserView();
    }
  }]);

  return Plataform;
}(_react2.default.Component);

exports.default = Plataform;