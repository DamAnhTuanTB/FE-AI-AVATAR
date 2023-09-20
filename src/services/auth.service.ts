import { authRequest, baseRequest } from './base.service';
import { APIs } from './config/api';
import tokenAuthService from './tokenAuth.service';

const authServices = {
  login(payload: { email: string; password: string; userType?: string }) {
    return authRequest.post(`${APIs.LOGIN}/login`, payload);
  },

  logout() {
    tokenAuthService.removeAuthUser();
  },

  signUp(payload: any) {
    return authRequest.post(`${APIs.LOGIN}/register/no-verify`, payload);
  },

  getUserInforFromAuthenService() {
    return authRequest.post(`${APIs.LOGIN}${APIs.ME}`)
  },

  forgetPassword(payload: any) {
    return authRequest.post(`${APIs.LOGIN}/reset/password`, payload);
  },

  resetPassword(payload: any) {
    return authRequest.post(`${APIs.LOGIN}/verify/reset-token`, payload);
  },

  verifyUser(payload: { token: string }) {
    return authRequest.post(`${APIs.LOGIN}/verify/verify-token`, payload);
  },

  checkTokenInUse(payload: { token: string }) {
    return authRequest.post(`${APIs.LOGIN}/token-in-use`, payload);
  },

  getUserInfor(params?: any) {
    return baseRequest.get(APIs.GET_ME, params);
  },
};

export default authServices;
