import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import getTowns from './src/getTowns';

export const handler = async (
    event: APIGatewayEvent,  
): Promise<APIGatewayProxyResult> => {
    console.log(`Event: ${JSON.stringify(event, null, 2)}`);

    const {
        city
    } = event.queryStringParameters || {};

    if(!city) {
        return {
        statusCode: 400,
        body: JSON.stringify({
            message: 'city is required'
        })
        }
    };

    const result = await getTowns({city});

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: result,
        }),
    };
};