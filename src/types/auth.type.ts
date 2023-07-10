export default interface IAuthData {
  login: string;
  password: string;
}
export interface IResetPassword {
  token: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IRefreshTokenResponse {
  refreshToken: string;
  accessToken: string;
}
