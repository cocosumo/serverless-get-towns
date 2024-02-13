import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import getTowns from './src/getTowns';

const allowedOrigins = [
    'http://localhost:3000',
    'test-site2.com',
    'yumenootetsudai.com'
];

export const handler = async (
    event: APIGatewayEvent, 
    context: any
): Promise<APIGatewayProxyResult> => {
    console.log(`Event: ${JSON.stringify(event, null, 2)}`);

    // get origin
    const origin = event.headers.origin || event.headers.Origin || '';

    console.log(`Origin: ${origin}`);
    
    // check if origin is allowed
    const accessAllowOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

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
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": accessAllowOrigin,
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
    };
};