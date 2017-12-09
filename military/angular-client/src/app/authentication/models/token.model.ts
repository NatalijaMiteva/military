export class Token {
  public accessToken: string;
  public refreshToken: string;
  public expiresIn: number;
  public expiresAt: number;

  constructor(json: any) {
    this.accessToken = json['access_token'];
    this.refreshToken = json['refresh_token'];
    this.expiresIn = json['expires_in'];
    this.expiresAt = json['expires_at'];
  }
}
