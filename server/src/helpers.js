export function getMessageCodeText(raw_object){
  // I'm making some structural assumptions, would add more error handling
  const results = raw_object['SearchResults:searchresults']
  if (results != 'undefined' && results['message'] != 'undefined'){
      return {'code': results['message'][0]['code'][0], 
              'message': results['message'][0]['text'][0] }
  }
  return null
}

// local functions 
function getLinks(links) {
  const ret_array = [];
  for (var key in links) {
    ret_array.push({'type': key, 'url': links[key][0]});
  }
  return ret_array;
}

function getAddress(address) {
  return {
    'street': address['street'][0],
    'zipcode': address['zipcode'][0],
    'city': address['city'][0],
    'state': address['state'][0],
    'latitude': address['latitude'][0],
    'longitude': address['longitude'][0],
  }
}

function getZestimate(zestimate) {


}

function getLocalRealEstate(localRealEstate) {
  
}

// main property function
export function getPropertyInfo(raw_object) {
  const results = raw_object['SearchResults:searchresults'];
  const property = results['response'][0]['results'][0]['result'][0];
  const zpid = property['zpid'][0];
  const links = getLinks(property['links'][0]);
  const address = getAddress(property['address'][0]);
  const zestimate = getZestimate(property['zestimate'][0]);
  const localRealEstate = getLocalRealEstate(property['localRealEstate'][0]);

  return {'zpid': zpid, 
          'links': links, 
          'address': address,
          'zestimate': zestimate,
          'localRealEstate': localRealEstate
        }
}
