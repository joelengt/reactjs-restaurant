'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestHTTP = undefined;

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestHTTP = exports.requestHTTP = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(uri, method, body, token) {
    var options, result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            options = {
              method: method,
              uri: uri,
              body: body || {},
              json: true
            };
            _context.next = 4;
            return (0, _requestPromise2.default)(options);

          case 4:
            result = _context.sent;
            return _context.abrupt('return', result);

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            console.log('Error API MODULE REQUEST', _context.t0);
            return _context.abrupt('return', _context.t0.response.body);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  return function requestHTTP(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();