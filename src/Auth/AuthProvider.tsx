import React from "react";

const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = React.useState<any>(null);
  const [token, setToken] = React.useState<string | null>(null);

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
