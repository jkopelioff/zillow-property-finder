'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = undefined;

var _graphqlTools = require('graphql-tools');

var _resolvers = require('./resolvers');

var typeDefs = '\ntype Result {\n  zpid: ID!\n  links: [Link!]!\n  address: Address!\n  zestimate: Zestimate!\n  localrealestate: LocalRealEstate!\n}\n\ntype Link {\n  type: String!\n  url: String!\n}\n\ntype Address {\n  street: String!\n  zipcode: String!\n  city: String!\n  state: String!\n  latitude: Float!\n  longitude: Float!\n}\n\ntype Currency {\n  value: Int!\n  type: String!\n}\n\ntype ValuationRange {\n  low: Currency!\n  high: Currency!\n}\n\ntype Zestimate {\n  amount: Currency!\n  lastUpdated: String!\n  valueChange: Currency!\n  valueChangeDuration: Int!\n  valuationRange: ValuationRange!\n  percentile: Int\n}\n\ntype Region {\n  name: String!\n  id: Int!\n  type: String!\n  zindexValue: String!\n  links:[Link!]!\n}\n\ntype LocalRealEstate {\n  region: Region! \n}\n\ntype Query {\n  searchProperties(address: String!, citystatezip: String!): Result!\n}\n';

var schema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs, resolvers: _resolvers.resolvers });
exports.schema = schema;
//# sourceMappingURL=schema.js.map