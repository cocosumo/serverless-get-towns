import kintoneClient from "./config";

export default async function getTowns({
  city
}:{
  city: string
}) {
  if(city === undefined) {
   throw new Error('city is required');
  }


  console.log('city', city ,process.env.BASE_URL, process.env.API_TOKEN);
  return await kintoneClient.record.getAllRecords({
    app: 219,
    condition: `city = "${city}"`,
    withCursor: false,
  });
}