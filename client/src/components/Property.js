import React from 'react'
import Loading from './Loading'
import Error from './Error'
import PropertyDetails from './PropertyDetails'

export const Property = ({ loading, error, property }) => {
    console.log({ loading, error, property })
    if (loading) {
      return <Loading/>;
    }
    if (error) {
      return <Error error={error}/>;
    }
    if (property) {
      return <PropertyDetails property={property}/>
    }

    return <React.Fragment/>
  };
  