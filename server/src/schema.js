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

type Zestimate {
  amount: Int!
  lastUpdated: String!
  oneWeekChange: String!
  valueChange: String!
  valueChangeDuration: Int! 
}

type Query {
  searchProperties(address: String!, citystatezip: String!): Result!
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
