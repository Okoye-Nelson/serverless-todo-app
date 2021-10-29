const apiId = 'q8ny5ignx4'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map, 
  // change only the clientid and domain ID and the jwt token in this file
  ///../backend/src/lambda/auth/auth0Authorizer.ts
  //domain: 'dev-49egqbq3.us.auth0.com',            // Auth0 domain

  domain: 'dev-u7-8c7me.us.auth0.com',            // Auth0 domain

  clientId: 'w94QK4fdDXKhXWeZVrtMvtj0LZKF6HG1',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
