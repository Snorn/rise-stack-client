export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51H2WAyLMJP5OQta2Znm6IH2sgicUAkv1AsQJtbKGNs2nXzNwiFlVPTNzlrSZoNh4tduKDfP48V40ZuLwcunXanqs00HVD0BmCD",
    s3: {
      REGION: "ap-southeast-2",
      BUCKET: "rise-app-uploads"
    },
    apiGateway: {
      REGION: "ap-southeast-2",
      URL: "https://bhiv5t0c08.execute-api.ap-southeast-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "ap-southeast-2",
      USER_POOL_ID: "ap-southeast-2_yC0d9DGG7",
      APP_CLIENT_ID: "15u0oisinp8kv8lbonl4stbl8k",
      IDENTITY_POOL_ID: "ap-southeast-2:4dcad25d-6e65-44ed-be46-e9c62fb9e818"
    }
  };