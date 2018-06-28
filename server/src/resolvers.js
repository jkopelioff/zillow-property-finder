import fetch from 'node-fetch';
import {parseString} from 'xml2js';
import { getMessageCodeText, getPropertyInfo } from './helpers';

const BASE_URL = 'http://www.zillow.com/webservice/GetSearchResults.htm';
const API_KEY = 'X1-ZWz1dyb53fdhjf_6jziz'



function fetchAddressAsJson(address, citystatezip) {
  return new Promise(async (resolve, reject) => {
      const fetchResult = await fetch(`${BASE_URL}?zws-id=${API_KEY}&address=${address}&citystatezip=${citystatezip}`);  
      const data = await fetchResult.text();

      if (data == null) {
        reject("Error hitting Zillow enpoint")
        return
      }

      parseString(data, {}, (err, result) => {
        if (err != null) {
          reject(err)
          return
        }
        
        // I'm making some structural assumptions, would add more error handling
        const codeText = getMessageCodeText(result)
        if (codeText == null || codeText.code !== "0"){
          reject(codeText)
        }

        resolve(getPropertyInfo(result))
      })
  });
}

export const resolvers = {
  Query: {
    searchProperties: (obj, args) => {
      return fetchAddressAsJson(args.address, args.citystatezip);
    },
  },
};
