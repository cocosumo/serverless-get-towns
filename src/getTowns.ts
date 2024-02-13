
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
    //'city',
    //'cityReading',
    'town',
    'townReading',
    'postalCode',
  ].map((field, idx) => `fields[${idx}]=${field}`).join('&');

  const param = [
    `app=219`,
    `query=${query} order by townReading asc limit 500`,
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
    return data.records.map((record: any) => {
      return {
        postal: record.postalCode.value,
        town: record.town.value,
        town_kana: record.townReading.value,
      }
    });
  } catch (error) {
    console.error('Error getting towns', error);
    return []
  }

  
}