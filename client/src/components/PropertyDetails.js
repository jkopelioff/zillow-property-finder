import React from 'react'
import './PropertyDetails.css'

const PropertyDetails = ({property}) => {
    const {links, address, zestimate, localrealestate} = property

    const Links = ({links}) => 
        <div className="links">
            { links.map(link => <a href={link.url}>{link.type}</a>)}
        </div>

    const Address = () => 
        <div className="address">
            <div>{address.street}</div>
            <div>{address.city}</div>
            <div>{address.state}</div>
            <div>{address.zipcode}</div>
        </div>

    const Zestimate = () => 
        <div className="zestimate">
            <div>Last Updated: {zestimate.lastUpdated}</div>
            <div>Value Change ({zestimate.valueChangeDuration} days): 
                {zestimate.valueChange.value} {zestimate.valueChange.type}
            </div>
            <div>Percentile: {zestimate.percentile}</div>
        </div>

    const Localrealestate = () => 
        <div className="localrealestate">
            <h2>Region</h2>
            <div>Name: {localrealestate.region.name}</div>
            <div>Id: {localrealestate.region.id}</div>
            <div>type: {localrealestate.region.type}</div>
            <div>zindexValue: {localrealestate.region.zindexValue}</div>
            <Links links={localrealestate.region.links}/>
        </div>

    return (
        <div className="propertyDetails">
            <h1>{property.zpid}</h1>
            <Links links={links}/>
            <Address/>
            <Zestimate/>
            <Localrealestate/>
        </div>
    )
}

export default PropertyDetails