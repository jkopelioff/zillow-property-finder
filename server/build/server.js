'use strict';

require('regenerator-runtime/runtime');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _graphqlServerExpress = require('graphql-server-express');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _schema = require('./schema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 4000;
var server = (0, _express2.default)();

server.use('*', (0, _cors2.default)({ origin: process.env.CORS_URL || 'http://localhost:3000' }));

server.use('/graphql', _bodyParser2.default.json(), (0, _graphqlServerExpress.graphqlExpress)({
  schema: _schema.schema
}));

server.use('/graphiql', (0, _graphqlServerExpress.graphiqlExpress)({
  endpointURL: '/graphql'
}));

server.listen(PORT, function () {
  return console.log('GraphQL Server is now running on http://localhost:' + PORT);
});
//# sourceMappingURL=server.js.map