import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type Result {
  zpid: ID!
  links: [Link!]!
  address: Address!
  zestimate: Zestimate!
  localrealestate: LocalRealEstate!
}

type Link {
  type: String!
  url: String!
}

type Address {
  street: String!
  zipcode: String!
  city: String!
  state: String!
  latitude: Float!
  longitude: Float!
}

type Currency {
  value: Int!
  type: String!
}

type ValuationRange {
  low: Currency!
  high: Currency!
}

type Zestimate {
  amount: Currency!
  lastUpdated: String!
  valueChange: Currency!
  valueChangeDuration: Int!
  valuationRange: ValuationRange!
  percentile: Int
}

type Region {
  name: String!
  id: Int!
  type: String!
  zindexValue: String!
  links:[Link!]!
}

type LocalRealEstate {
  region: Region! 
}

type Query {
  searchProperties(address: String!, citystatezip: String!): Result!
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
