import React, { createContext, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';

interface IUser {
  id: string;
  email: string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: IUser;
  signIn(credentials: ISignInCredentials): Promise<void>
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@NasaApp:token');
    const user = localStorage.getItem('@NasaApp:user');
    console.log(JSON.stringify(user));

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('authenticate', {
      email,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem('@NasaApp:user', JSON.stringify(user));
    localStorage.setItem('@NasaApp:token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@NasaApp:token');
    localStorage.removeItem('@NasaApp:user');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider 
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
};

function useAuth() {
  const context = useContext(AuthContext);
  
  return context;
}

export { AuthProvider, useAuth}