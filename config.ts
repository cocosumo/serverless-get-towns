import { KintoneRestAPIClient } from "@kintone/rest-api-client";

console.log(process.env.API_TOKEN);

const kintoneClient = new KintoneRestAPIClient({
  baseUrl: process.env.BASE_URL,
  // Use API token authentication
  auth: { apiToken: process.env.API_TOKEN }
});


export default kintoneClient;