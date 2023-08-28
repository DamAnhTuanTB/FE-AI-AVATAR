import { LStorage } from '../utils/storage';
import { getCookie, setCookie } from '@/utils/cookies';

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
    const authUser = LStorage.getItem('auth-user') || getCookie('auth-user');
    if (!authUser) {
      return null;
    }
    const authUserObj = JSON.parse(authUser);
    return authUserObj;
  }

  updateLocalAccessToken(token: string) {
    const authUser = LStorage.getItem('auth-user');
    if (authUser) {
      const authUserObj = JSON.parse(authUser);
      authUserObj.token = token;
      localStorage.setItem('auth-user', JSON.stringify(authUserObj));
    }
  }

  getAuthUser() {
    const authUser = LStorage.getItem('auth-user');
    if (!authUser) {
      return null;
    }
    return JSON.parse(authUser);
  }

  setAuthUser(authUser: any) {
    LStorage.setItem('auth-user', JSON.stringify(authUser));
  }

  removeAuthUser() {
    LStorage.removeItem('auth-user');
  }

  setLocalAccessToken(token: string) {
    const authUser = getCookie('auth-user');
    const authUserObj = JSON.parse(authUser || '{}');
    setCookie('auth-user', JSON.stringify({ ...authUserObj, token }));
  }

  setLocalRefreshToken(refreshToken: string) {
    localStorage.setItem('refresh-auth-user', refreshToken);
  }
}

export default new TokenAuthService();
