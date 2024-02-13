import kintoneClient from "../config";

export default async function getTowns() {
  console.log('getTowns called');

  return await kintoneClient.record.getAllRecords({
    app: 219,
    condition: 'city = "豊田市"',
    withCursor: false,
  
  })
}