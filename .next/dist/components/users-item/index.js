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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('../../utils');

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

    _this.state = { showDetails: false };
    _this.eventShowDetails = _this.eventShowDetails.bind(_this);

    _this.userType = _this.props.userType;
    return _this;
  }

  (0, _createClass3.default)(UserItem, [{
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
      this.props.updateUserDetails(this.props.id);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('article', { className: 'Cajero__list-item' }, _react2.default.createElement('div', { className: 'Cajero__list-item--cover' }, _react2.default.createElement('img', { src: this.props.photo })), _react2.default.createElement('div', { className: 'Cajero__list-item--details' }, _react2.default.createElement('h2', { className: 'title' }, this.props.id, ' - ', this.props.name, ' ', this.props.lastName), _react2.default.createElement('div', null, this.props.userAccessIcon, ' - ', this.props.userAccessTitle), _react2.default.createElement('div', null, _react2.default.createElement('button', { onClick: this.eventShowDetails, type: 'button', className: 'btn btn-primary' }, 'Detalles'))));
    }
  }]);

  return UserItem;
}(_react2.default.Component);

exports.default = UserItem;