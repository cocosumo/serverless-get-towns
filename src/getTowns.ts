// import kintoneClient from "./config";

export default async function getTowns({
  city
}:{
  city: string
}) {
  if(city === undefined) {
   throw new Error('city is required');
  }

 /*  return await kintoneClient.record.getAllRecords({
    app: 219,
    condition: `city = "${city}"`,
    withCursor: false,
  
  }) */
}