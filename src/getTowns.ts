
import axios from "axios";

export default async function getTowns({
  city
}:{
  city: string
}): Promise<Object[]> {

  if(city === undefined) {
   throw new Error('city is required');
  }

  const query = [
    `city="${city}"`
  ]

  const param = [
    `app=219`,
    `query=${query} limit 500`
  ].join('&');

  const url = `${process.env.BASE_URL}/k/v1/records.json?${param}`;
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