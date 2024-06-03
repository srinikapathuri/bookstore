import boto3
from botocore.exceptions import ClientError

# Initialize the Boto3 SES client
ses_client = boto3.client('ses', region_name='us-east-1')  # Replace with your AWS region

def send_otp_email(email, otp):
    # Replace with your verified email address
    sender_email = "srinikapathuri@gmail.com"

    # The subject line for the email
    subject = "Your OTP (One-Time Password)"

    # The email body for recipients with non-HTML email clients
    body_text = f"Your OTP is: {otp}"

    # The HTML body of the email
    body_html = f"<html><head></head><body><h1>Your OTP is:</h1><p>{otp}</p></body></html>"

    # Try to send the email
    try:
        # Provide the contents of the email.
        response = ses_client.send_email(
            Destination={
                'ToAddresses': [
                    'srinikapathuri@gmail.com',
                ],
            },
            Message={
                'Body': {
                    'Html': {
                        'Charset': 'UTF-8',
                        'Data': otp,
                    },
                    'Text': {
                        'Charset': 'UTF-8',
                        'Data': otp,
                    },
                },
                'Subject': {
                    'Charset': 'UTF-8',
                    'Data': otp ,
                },
            },
            Source=sender_email,
        )
    # Display an error message if something goes wrong.
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        print("Email sent! Message ID:", response['MessageId'])

# Example usage:
send_otp_email('srinikapathuri@gmail.com', '010603')

