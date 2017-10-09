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

var _utils = require('../../utils');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _plataform = require('../plataform');

var _plataform2 = _interopRequireDefault(_plataform);

var _config = require('../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wayView = { login: 'login', plataform: 'plataform' };

var Login = function (_React$Component) {
  (0, _inherits3.default)(Login, _React$Component);

  function Login(props) {
    (0, _classCallCheck3.default)(this, Login);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

    _this.URI = _config2.default.url;

    _this.state = { email: '', password: '', message: '', accessToken: '', refreshToken: '', currentView: wayView.login, userAccess: 0 };

    _this.eventLogin = _this.eventLogin.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(Login, [{
    key: 'eventLogin',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var payload, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                payload = {
                  email: this.state.email,
                  password: this.state.password
                };

                console.log('USER DATA to LOGIN', payload);

                _context.next = 5;
                return (0, _utils.requestHTTP)(this.URI + '/api/auth/login', 'post', payload);

              case 5:
                result = _context.sent;

                console.log('ORDER login >>', result);

                if (result.status === 200) {

                  this.setState({ message: 'Cargando...' });

                  this.setState({ accessToken: result.data.access_token });
                  this.setState({ refreshToken: result.data.refresh_token });

                  this.setState({ userAccess: result.data.userAccess });

                  console.log('Datos >>>>', result.data);

                  this.props.currentUserAuth(true, result.data);

                  // redirect /plataform
                  this.setState({ currentView: wayView.plataform });

                  // Router.push({
                  //   pathname: '/plataform',
                  //   query: { token: result.data.access_token }
                  // })
                } else {
                  this.setState({ message: result.message });
                }

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](0);

                console.log('Error login', _context.t0);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function eventLogin() {
        return _ref.apply(this, arguments);
      }

      return eventLogin;
    }()
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      console.log('Element selected');
      console.log(e.target.name);

      if (e.target.name === 'email') {
        this.setState({ email: e.target.value });
      } else if (e.target.name === 'password') {
        this.setState({ password: e.target.value });
      } else {
        console.log('Error');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      switch (this.state.currentView) {
        case wayView.login:
          return _react2.default.createElement('div', { className: 'Login' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), _react2.default.createElement('div', { className: 'Login__content' }, _react2.default.createElement('h2', null, 'Login'), _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'form-group' }, _react2.default.createElement('label', { 'for': 'email' }, 'Email'), _react2.default.createElement('input', { onChange: this.handleChange, type: 'email', className: 'form-control', name: 'email', 'aria-describedby': 'emailHelp', placeholder: 'Enter email' })), _react2.default.createElement('div', { className: 'form-group' }, _react2.default.createElement('label', { 'for': 'password' }, 'Password'), _react2.default.createElement('input', { onChange: this.handleChange, type: 'password', className: 'form-control', name: 'password', placeholder: 'Password' })), _react2.default.createElement('div', null, _react2.default.createElement('button', { onClick: this.eventLogin, className: 'btn btn-primary' }, 'Entrar')), _react2.default.createElement('div', { className: 'messageError' }, this.state.message))), _react2.default.createElement('div', { className: 'Login__content' }, _react2.default.createElement('h4', null, 'Users Roles'), _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'form-group' }, _react2.default.createElement('u', null, 'Admin'), _react2.default.createElement('p', null, _react2.default.createElement('strong', null, 'email:'), ' admin@tekton.com'), _react2.default.createElement('p', null, _react2.default.createElement('strong', null, 'password:'), ' sample')), _react2.default.createElement('div', { className: 'form-group' }, _react2.default.createElement('u', null, 'Cajero'), _react2.default.createElement('p', null, _react2.default.createElement('strong', null, 'email:'), ' cajero@tekton.com'), _react2.default.createElement('p', null, _react2.default.createElement('strong', null, 'password:'), ' sample')), _react2.default.createElement('div', { className: 'form-group' }, _react2.default.createElement('u', null, 'Chef'), _react2.default.createElement('p', null, _react2.default.createElement('strong', null, 'email:'), ' chef@tekton.com'), _react2.default.createElement('p', null, _react2.default.createElement('strong', null, 'password:'), ' sample')))));
          break;

        case wayView.plataform:
          return _react2.default.createElement(_plataform2.default, { userAccess: this.state.userAccess, accessToken: this.state.accessToken, refreshToken: this.state.refreshToken });
          break;
      }
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = Login;