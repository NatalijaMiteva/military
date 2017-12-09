export class AppAuthenticationConstants {
  public static readonly CLIENT_ID: string = 'client';
  public static readonly CLIENT_SECRET: string = 'secret';
  public static readonly SCOPE: string = 'read write';
  public static readonly GRANT_TYPE: string = 'password';
  public static readonly LOGIN_URL: string = '/oauth/token';
  public static readonly LOGOUT_URL: string = '/api/logout';
}
