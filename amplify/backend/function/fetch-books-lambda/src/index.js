// index.js
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
  const params = {
    TableName: 'Books'
  };
  
  const data = await dynamoDb.scan(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(data.Items)
  };
};
