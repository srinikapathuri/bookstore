// index.js
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { title, pdfKey } = JSON.parse(event.body);
  const params = {
    TableName: 'Books',
    Item: { id: Date.now().toString(), title, pdfKey }
  };
  
  await dynamoDb.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Book added' })
  };
};
