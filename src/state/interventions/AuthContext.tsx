import { createContext, ReactNode, useState } from 'react';
import IUserData from '../../types/user.type';

interface IAuthContext {
  me: IUserData;
  accessToken: string;
  refreshToken: string;
  authenticated: boolean;
  login: any;
  logOut: () => void;
}

const defaultValue: IAuthContext = {
  me: {
    _id: '',
    email: '',
    active: false,
    login: '',
    phone: '',
    createdAt: new Date(),
  },
  accessToken: '',
  refreshToken: '',
  authenticated: false,
  login: () => undefined,
  logOut: () => undefined,
};

const AuthContext = createContext<IAuthContext>(defaultValue);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authenticated, setAuthenticated] = useState(
    defaultValue.authenticated
  );
  const [me, setMe] = useState(defaultValue.me);
  const [accessToken, setAccessToken] = useState(defaultValue.accessToken);
  const [refreshToken, setRefreshToken] = useState(defaultValue.refreshToken);

  const login = (me: IUserData, accessToken: string, refreshToken: string) => {
    console.log(me);
    localStorage.setItem('access-token', accessToken);
    localStorage.setItem('refresh-token', refreshToken);
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setMe(me);
    setAuthenticated(true);
  };
  const logOut = () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        me,
        accessToken,
        refreshToken,
        login,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
