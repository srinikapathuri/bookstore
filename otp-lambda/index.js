// index.js
const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
  const { email } = JSON.parse(event.body);
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
  const params = {
    Destination: { ToAddresses: [email] },
    Message: {
      Body: { Text: { Data: `Your OTP is ${otp}` } },
      Subject: { Data: 'Your OTP Code' }
    },
    Source: 'srinikapathuri@gmail.com' // Replace with your SES verified email
  };

  await ses.sendEmail(params).promise();

  // Save OTP in DynamoDB (with TTL for expiry)
  // ...

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'OTP sent' })
  };
};
