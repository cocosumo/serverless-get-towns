import { KintoneRestAPIClient } from "@kintone/rest-api-client";

console.log('BASE_URL', process.env.BASE_URL);

const kintoneClient = new KintoneRestAPIClient({
  baseUrl: process.env.BASE_URL,
  // Use API token authentication
  auth: { apiToken: process.env.API_TOKEN }
});

console.log('CREATED!');


export default kintoneClient;