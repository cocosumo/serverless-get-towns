import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import getTowns from './src/getTowns';

export const handler = async (event: {
    city: string
}): Promise<APIGatewayProxyResult> => {

    const {
        city
    } = event;
    console.log(`Event: ${JSON.stringify(event, null, 2)}`);

    if(city) {
        return {
        statusCode: 400,
        body: JSON.stringify({
            message: 'city is required'
        })
        }
    };

    const result = await getTowns({city: event.city});

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: result,
        }),
    };
};