import Amplify from "aws-amplify";

Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_xxxxxxx", // Replace with your User Pool ID
    userPoolWebClientId: "xxxxxxxxxxxxx", // Replace with your Web Client ID
    mandatorySignIn: true,
  },
  Storage: {
    region: "us-east-1",
    bucket: "your-s3-bucket-name", // Replace with your S3 bucket name
    identityPoolId: "us-east-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // Replace with your Identity Pool ID
  },
  API: {
    endpoints: [
      {
        name: "postsApi",
        endpoint: "https://your-api-endpoint.amazonaws.com", // Replace with your API endpoint
      },
    ],
  },
});
