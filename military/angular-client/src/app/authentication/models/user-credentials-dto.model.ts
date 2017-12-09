export class UserCredentialsDTO {
  public username: string;
  public password: string;
  public rememberMe: boolean;

  constructor(username: string = '', password: string = '', rememberMe: boolean = false) {
    this.username = username;
    this.password = password;
    this.rememberMe = rememberMe;
  }
}
