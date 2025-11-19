import type React from "react";
import { createContext, useState } from "react";

export type UserAuth = {
  userId: string;
  username: string;
  token: string;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  user: UserAuth | null;
  handleLogIn: (userInfo: UserAuth) => void;
  handleLogOut: () => void;
  isLoggedIn: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserAuth | null>(null);

  const handleLogIn = (userInfo: UserAuth) => {
    setUser(userInfo);
  };

  const handleLogOut = () => {
    setUser(null);
  };

  const isLoggedIn = !!user?.userId;

  return (
    <AuthContext.Provider
      value={{ user, handleLogIn, handleLogOut, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
