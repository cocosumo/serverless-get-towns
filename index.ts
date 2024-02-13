import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
//import getTowns from './src/getTowns';

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);

  //await getTowns();

  return {
      statusCode: 200,
      body: JSON.stringify({
          message: 'hello worlds!',
      }),
   };
};