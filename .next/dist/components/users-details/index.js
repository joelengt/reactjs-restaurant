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

var UserItem = function (_React$Component) {
  (0, _inherits3.default)(UserItem, _React$Component);

  function UserItem(props) {
    (0, _classCallCheck3.default)(this, UserItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UserItem.__proto__ || (0, _getPrototypeOf2.default)(UserItem)).call(this, props));

    _this.URI = _config2.default.url;

    _this.state = { showDetails: false, user: {}, isDeleted: false };

    _this.eventEdit = _this.eventEdit.bind(_this);
    _this.eventDelete = _this.eventDelete.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(UserItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var options = {
        uri: this.URI + '/api/users/' + this.props.id,
        json: true
      };

      (0, _requestPromise2.default)(options).then(function (result) {
        console.log('Result API>>', result);

        _this2.setState(function (prevState) {
          return {
            user: result.data.item
          };
        });
      }).catch(function (err) {
        console.log('Error API', err);
      });
    }
  }, {
    key: 'eventEdit',
    value: function eventEdit() {
      // Update view state
      this.props.updateViewState(wayView.edit);
    }
  }, {
    key: 'eventDelete',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                console.log('USER DATA to delete ==> ', this.props.id);

                _context.next = 4;
                return (0, _utils.requestHTTP)(this.URI + '/api/users/' + this.props.id + '?_method=delete', 'post');

              case 4:
                result = _context.sent;

                console.log('ORDER CREATION >>', result);

                this.setState(function (prevState) {
                  return {
                    isDeleted: true
                  };
                });

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](0);

                console.log('Error API', _context.t0);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function eventDelete() {
        return _ref.apply(this, arguments);
      }

      return eventDelete;
    }()
  }, {
    key: 'render',
    value: function render() {
      var user = this.state.user;

      if (!this.state.isDeleted) {
        return _react2.default.createElement('article', { className: 'Cajero__list-item' }, _react2.default.createElement('div', { className: 'Cajero__list-item--cover' }, _react2.default.createElement('img', { src: user.photo })), _react2.default.createElement('div', { className: 'Cajero__list-item--details' }, _react2.default.createElement('h2', null, 'id: ', user.id, ' - ', user.user_type_icon, ' - ', user.user_type_title), _react2.default.createElement('p', { className: 'title' }, 'Nombre: ', user.name), _react2.default.createElement('p', null, 'Apellido: ', user.last_name), _react2.default.createElement('p', null, 'Email: ', user.email, ' '), _react2.default.createElement('p', null, 'phone: ', user.phone, ' '), _react2.default.createElement('p', null, 'Creado: ', user.created_at), _react2.default.createElement('div', null, _react2.default.createElement('button', { onClick: this.eventEdit, type: 'button', className: 'btn btn-primary' }, 'Edit'), _react2.default.createElement('button', { onClick: this.eventDelete, type: 'button', className: 'btn btn-danger' }, 'Delete'))));
      } else {
        return _react2.default.createElement('div', null, 'User Deleted');
      }
    }
  }]);

  return UserItem;
}(_react2.default.Component);

exports.default = UserItem;