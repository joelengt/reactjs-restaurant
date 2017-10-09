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

var _usersItem = require('../users-item');

var _usersItem2 = _interopRequireDefault(_usersItem);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _utils = require('../../utils');

var _usersDetails = require('../users-details');

var _usersDetails2 = _interopRequireDefault(_usersDetails);

var _usersEdit = require('../users-edit');

var _usersEdit2 = _interopRequireDefault(_usersEdit);

var _usersCreate = require('../users-create');

var _usersCreate2 = _interopRequireDefault(_usersCreate);

var _config = require('../../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wayView = { mainList: 'mainList', details: 'details', edit: 'edit', create: 'create' };

var UserList = function (_React$Component) {
  (0, _inherits3.default)(UserList, _React$Component);

  function UserList(props) {
    (0, _classCallCheck3.default)(this, UserList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UserList.__proto__ || (0, _getPrototypeOf2.default)(UserList)).call(this, props));

    _this.URI = _config2.default.url;
    _this.state = { userList: [], currentView: wayView.mainList, currentUserDetails: 0 };
    _this.updateViewState = _this.updateViewState.bind(_this);
    _this.updateUserDetails = _this.updateUserDetails.bind(_this);
    _this.eventCreateForm = _this.eventCreateForm.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(UserList, [{
    key: 'updateViewState',
    value: function updateViewState(viewState) {
      this.setState(function (prevState) {
        return {
          currentView: viewState
        };
      });
    }
  }, {
    key: 'updateUserDetails',
    value: function updateUserDetails(userID) {
      this.setState(function (prevState) {
        return {
          currentUserDetails: userID
        };
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var options = {
        uri: this.URI + '/api/users',
        json: true
      };

      (0, _requestPromise2.default)(options).then(function (result) {
        console.log('Result API>>', result);

        _this2.setState(function (prevState) {
          return {
            userList: result.data.items
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
        return _react2.default.createElement(_usersItem2.default, { updateViewState: _this3.updateViewState, updateUserDetails: _this3.updateUserDetails, id: element.id, key: element.id, name: element.name, lastName: element.last_name, photo: element.photo, userAccessTitle: element.user_type_title, userAccessIcon: element.user_type_icon, userType: _this3.props.userType });
      });

      return response;
    }
  }, {
    key: 'eventCreateForm',
    value: function eventCreateForm() {
      this.updateViewState(wayView.create);
    }
  }, {
    key: 'render',
    value: function render() {
      var elements = this.state.userList;
      var userID = this.state.currentUserDetails;

      switch (this.state.currentView) {
        case wayView.mainList:
          if (!elements.length) {
            return _react2.default.createElement('div', null, 'Cargando...');
          } else {
            return _react2.default.createElement('div', { className: 'UserList' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _style2.default } }), _react2.default.createElement('div', null, _react2.default.createElement('button', { onClick: this.eventCreateForm, type: 'button', className: 'btn btn-success' }, 'New User')), _react2.default.createElement('div', null, this.getData(elements)));
          }
          break;

        case wayView.details:
          if (!userID) {
            return _react2.default.createElement('div', null, 'User Not Found');
          }
          return _react2.default.createElement(_usersDetails2.default, { id: userID, updateViewState: this.updateViewState });
          break;

        case wayView.edit:
          if (!userID) {
            return _react2.default.createElement('div', null, 'User Not Found');
          }
          return _react2.default.createElement(_usersEdit2.default, { id: userID });
          break;

        case wayView.create:
          return _react2.default.createElement(_usersCreate2.default, null);
          break;
      }
    }
  }]);

  return UserList;
}(_react2.default.Component);

exports.default = UserList;