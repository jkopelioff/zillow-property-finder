import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'

export const SEARCH_QUERY = gql`
  query searchProperties($address: String!, $citystatezip: String!){
    searchProperties(address: $address, citystatezip: $citystatezip){
      zpid
      links {
        type
        url
      }
      address {
        street
        zipcode
        city
        state
        latitude
        longitude
      }
      zestimate {
        lastUpdated
        valueChange {
          value
          type
        }
        valueChangeDuration
        percentile
      }
      localrealestate {
        region {
          name
          id
          type
          zindexValue
          links {
            type
            url
          }
          
        }
      }
    }
  }
`;

export default ({ address, children }) => 
  <Query query={SEARCH_QUERY} variables={{ ...address }} skip={!address}>
    {result => {
      const { loading, error, data } = result;
      return children({
        loading,
        error,
        property: data && data.searchProperties
      });
    }}
  </Query>

