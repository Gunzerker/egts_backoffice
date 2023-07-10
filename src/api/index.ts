import axios, { AxiosError, AxiosResponse } from 'axios';
import AuthService from '../services/AuthService';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  timeout: 10000,
});

// axiosInstance.interceptors.request.use(
//   (request: AxiosRequestConfig<any>) => {
//     const token = localStorage.getItem('access-token');
//     if (token && request.headers)
//       request.headers.Authorization = `Bearer ${token}`;
//     return request;
//   },
//   (error) => Promise.reject(error)
// );

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any>) => response,
  async (error: AxiosError) => {
    if (
      error.response?.status === 401 &&
      error.config &&
      !(error.config as any).__retry
    ) {
      const refreshToken = localStorage.getItem('refresh-token');
      try {
        let res = await AuthService.refreshAccessToken(refreshToken || '');
        if (res.data.accessToken) {
          (error.config as any).__retry = true;
          localStorage.setItem('access-token', res.data.accessToken);
          localStorage.setItem('refresh-token', res.data.refreshToken);
          if (error.config.headers)
            error.config.headers.Authorization = `Bearer ${res.data.accessToken}`;
        }
        return axios(error.config);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export interface ITotalItems {
  totalItems: number;
}

export default axiosInstance;
