export const oktaConfig = {
    clientId: '0oa859rjdkBOUaGLo5d7',
    issuer: 'https://dev-69731296.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}