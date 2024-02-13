
import axios from "axios";
import qs from "querystring";
export default async function getTowns({
  city
}:{
  city: string
}): Promise<Object[]> {

  if(city === undefined) {
   throw new Error('getTowns: city is required');
  }

  const query = [
    `city="${city}"`
  ]
  const fields = [
    'city',
    'town',
    'townReading',
    'cityReading',
  ].map((field, idx) => `fields[${idx}]=${field}`).join('&');

  const param = [
    `app=219`,
    `query=${query} limit 500`,
    fields
  ].join('&');

  const url = `${process.env.BASE_URL}/k/v1/records.json?${param}`;

  console.log('Requesting', url);

  try {
    const {data} = await axios({
      method: 'GET',
      url: url,
      headers: {
        'X-Cybozu-API-Token': process.env.API_TOKEN || "",
      }
    })
    return data.records;
  } catch (error) {
    console.error('Error getting towns', error);
    return []
  }

  
}