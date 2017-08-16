export function hello(event, context, callback) {

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0 with typescript! Your function executed successfully!',
            input: event,
        }),
    };

    callback(null, response);

}
