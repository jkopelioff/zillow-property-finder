'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _xml2js = require('xml2js');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// These probably should be added via ENV vars
var BASE_URL = 'http://www.zillow.com/webservice/GetSearchResults.htm';
var API_KEY = process.env.API_KEY;

function fetchAddressAsJson(address, citystatezip) {
  var _this = this;

  return new Promise(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
      var fetchResult, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _nodeFetch2.default)(BASE_URL + '?zws-id=' + API_KEY + '&address=' + address + '&citystatezip=' + citystatezip);

            case 2:
              fetchResult = _context.sent;
              _context.next = 5;
              return fetchResult.text();

            case 5:
              data = _context.sent;

              if (!(data == null)) {
                _context.next = 9;
                break;
              }

              reject("Error hitting Zillow enpoint");
              return _context.abrupt('return');

            case 9:

              (0, _xml2js.parseString)(data, {}, function (err, result) {
                if (err != null) {
                  reject(err);
                  return;
                }

                // I'm making some structural assumptions, would add more error handling
                var codeText = (0, _helpers.getMessageCodeText)(result);
                if (codeText == null || codeText.code !== "0") {
                  reject(codeText);
                  return;
                }

                resolve((0, _helpers.getPropertyInfo)(result));
              });

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}

var resolvers = exports.resolvers = {
  Query: {
    searchProperties: function searchProperties(obj, args) {
      return fetchAddressAsJson(args.address, args.citystatezip);
    }
  }
};
//# sourceMappingURL=resolvers.js.map