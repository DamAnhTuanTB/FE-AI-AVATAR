import { LStorage } from '../utils/storage';
import { getCookie, setCookie } from '@/utils/cookies';
import {CONFIG} from "@/config/service";

class TokenAuthService {
  getLocalRefreshToken() {
    const refreshToken =
      localStorage.getItem('refresh-auth-user') ||
      getCookie('refresh-auth-user');
    if (!refreshToken) {
      return null;
    }
    return refreshToken;
  }

  getLocalAccessToken() {
    const authUser = LStorage.getItem(CONFIG.COOKIE_AUTH_TOKEN) || getCookie(CONFIG.COOKIE_AUTH_TOKEN);
    if (!authUser) {
      return null;
    }
    const authUserObj = JSON.parse(authUser);
    return authUserObj;
  }

  updateLocalAccessToken(token: string) {
    const authUser = LStorage.getItem(CONFIG.COOKIE_AUTH_TOKEN);
    if (authUser) {
      const authUserObj = JSON.parse(authUser);
      authUserObj.token = token;
      localStorage.setItem(CONFIG.COOKIE_AUTH_TOKEN, JSON.stringify(authUserObj));
    }
  }

  getAuthUser() {
    const authUser = LStorage.getItem(CONFIG.COOKIE_AUTH_TOKEN);
    if (!authUser) {
      return null;
    }
    return JSON.parse(authUser);
  }

  setAuthUser(authUser: any) {
    LStorage.setItem(CONFIG.COOKIE_AUTH_TOKEN, JSON.stringify(authUser));
  }

  removeAuthUser() {
    LStorage.removeItem(CONFIG.COOKIE_AUTH_TOKEN);
  }

  setLocalAccessToken(token: string) {
    const authUser = getCookie(CONFIG.COOKIE_AUTH_TOKEN);
    const authUserObj = JSON.parse(authUser || '{}');
    setCookie(CONFIG.COOKIE_AUTH_TOKEN, JSON.stringify({ ...authUserObj, token }));
  }

  setLocalRefreshToken(refreshToken: string) {
    localStorage.setItem('refresh-auth-user', refreshToken);
  }
}

export default new TokenAuthService();
