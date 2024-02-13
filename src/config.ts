import { KintoneRestAPIClient } from "@kintone/rest-api-client";

const kintoneClient = new KintoneRestAPIClient({
  baseUrl: process.env.BASE_URL,
  // Use API token authentication
  auth: { apiToken: process.env.API_TOKEN }
});


export default kintoneClient;