import { KintoneRestAPIClient } from "@kintone/rest-api-client";

console.log('BASE_URL', process.env.BASE_URL);

const getKintoneClient = () => {
  
  try {
    return new KintoneRestAPIClient({
      baseUrl: process.env.BASE_URL,
      // Use API token authentication
      auth: { apiToken: process.env.API_TOKEN }
    });
  } catch (error) {
    console.error('Error creating kintone client', error);
    throw error;
  }
  
}

console.log('CREATED!');


export default getKintoneClient();