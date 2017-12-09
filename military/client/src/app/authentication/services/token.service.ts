import { Injectable } from '@angular/core';
import {Token} from "../models/token.model";

@Injectable()
export class TokenService {
  private tokenKey: string = 'authenticationToken';

  getValidToken(): Token | null {
    let token: Token | null;

    try {
      token = JSON.parse(localStorage[this.tokenKey]);
    } catch (e) {
      token = null;
    }

    const tokenIsValid = token && token.expiresAt && token.expiresAt > new Date().getTime();
    if (tokenIsValid) {
      return token;
    }

    return null;
  }

  hasValidToken(): boolean {
    return !!this.getValidToken();
  }

  setToken(token: Token): void {
    const expiredAt = new Date();
    expiredAt.setSeconds(expiredAt.getSeconds() + token.expiresIn);
    token.expiresAt = expiredAt.getTime();
    localStorage[this.tokenKey] = JSON.stringify(token);
  }

  invalidateToken(): void {
    delete localStorage[this.tokenKey];
  }

  getRefreshToken(): string {
    const token: Token = new Token(localStorage[this.tokenKey] || {});
    return token.refreshToken;
  }

  hasToken(): boolean {
    return localStorage[this.tokenKey] !== null;
  }
}
