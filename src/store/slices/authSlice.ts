import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { ToastError } from '@/components/ToastMessage/ToastMessage';
import {getCookie, setCookie} from '@/utils/cookies';
import authService from '@/services/auth.service';
import tokenAuthService from '@/services/tokenAuth.service';
import {CONFIG} from "@/config/service";

// const authUser = LStorage.getItem(CONFIG.COOKIE_AUTH_TOKEN);
const authUser = getCookie(CONFIG.COOKIE_AUTH_TOKEN);
export interface AuthUser {
  isAdmin: boolean;
  username: string;
  token: string;
  _id: string;
  project: string[];
  email: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  authUser: AuthUser;
  isLogging: boolean;
}

const initialState: AuthState =
  authUser && JSON.parse(authUser).token
    ? {
        isLoggedIn: true,
        authUser: JSON.parse(authUser) as AuthUser,
        isLogging: false,
      }
    : {
        isLoggedIn: false,
        authUser: {} as AuthUser,
        isLogging: false,
      };

export const login = createAsyncThunk(
  'auth/login',
  async (userLogin: { email: string; password: string; userType: string }) => {
    return await authService.login(userLogin);
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginWithSocialAccount: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.isLoggedIn = true;
      state.authUser = { ...state.authUser, token: action.payload.accessToken };
      tokenAuthService.setLocalAccessToken(action.payload.accessToken);
      tokenAuthService.setLocalRefreshToken(action.payload.refreshToken);
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.authUser = {} as AuthUser;
      state.isLogging = false;
      tokenAuthService.removeAuthUser();
      localStorage.removeItem('user-infor');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('dayLogin');
      setCookie(CONFIG.COOKIE_AUTH_TOKEN, '')
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { status, data } = action.payload;
      if (status === 201) {
        state.isLoggedIn = true;
        state.authUser = data.dataSource.authUser;
        tokenAuthService.setAuthUser(data.dataSource);
      } else {
        state.isLoggedIn = false;
        state.authUser = {} as AuthUser;
        ToastError('Login Error!');
      }
      state.isLogging = false;
    });
    builder.addCase(login.pending, (state) => {
      state.isLogging = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.authUser = {} as AuthUser;
      state.isLogging = false;
      ToastError('Login Error!');
    });
  },
});

export const selectAuthUser = (state: RootState) => state.auth;

export const { logOut, loginWithSocialAccount, setIsLoggedIn } =
  authSlice.actions;
export default authSlice.reducer;
