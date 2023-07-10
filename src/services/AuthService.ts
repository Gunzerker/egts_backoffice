import axios, { AxiosResponse } from 'axios';
import axiosInstance from '../api';
import IAuthData, {
  IForgotPassword,
  IRefreshTokenResponse,
  IResetPassword,
} from '../types/auth.type';
class AuthService {
  private readonly urlPrefix = '/users';

  login(data: IAuthData) {
    return axiosInstance.post<IAuthData>(`${this.urlPrefix}/login`, data);
  }

  forgotPassword(email: string) {
    return axiosInstance.post<IForgotPassword>(
      `${this.urlPrefix}/forgot-password`,
      {
        email,
      }
    );
  }

  resetPassword(token: string, password: string) {
    return axiosInstance.post<IResetPassword>(
      `${this.urlPrefix}/reset-password`,
      {
        token,
        password,
      }
    );
  }

  refreshAccessToken(refreshToken: string) {
    return axios.post<
      { refreshToken: string },
      AxiosResponse<IRefreshTokenResponse>
    >(`${process.env.API_URL}/api${this.urlPrefix}/refresh-token`, {
      refreshToken,
    });
  }
  checkResetPasswordToken(token: string) {
    return axiosInstance.post<{ token: string }>(
      `${this.urlPrefix}/check-reset-password-token`,
      {
        token,
      }
    );
  }
}
export default new AuthService();
