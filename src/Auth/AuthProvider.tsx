import React from "react";
import { login, LoginParamsDto } from "./aplication/login";
import { useNavigate } from "react-router-dom";

export enum AuthActions {
  signIn = "LOGIN",
  signOut = "SIGN_OUT",
}

type AuthAction = { type: AuthActions, payload?: { token?: string, user?: any } };

type Dispatch = React.Dispatch<AuthAction>;
interface AuthContextState {
  token?: string;
  user?: any;
  // signin: (user: string, callback: VoidFunction) => void;
  // signout: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<
  | {
      state: AuthContextState;
      dispatch: Dispatch;
    }
  | undefined
>(undefined);

function authReducer(state: AuthContextState, action: AuthAction): AuthContextState {
  switch (action.type) {
    case AuthActions.signIn: {
      if (action.payload === undefined) {
        throw new Error("signIn action must used with login params");
      }
      return { ...state, token: action.payload.token, user: action.payload.user };
    }
    case AuthActions.signOut: {
      return { ...state, token: undefined, user: undefined };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(authReducer, {});

  const value = { state, dispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  const navigate = useNavigate();

  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }

  const signin = async (params: LoginParamsDto) => {
    const { token, user } = await login(params);
    context.dispatch({ type: AuthActions.signIn, payload: { token, user } });
  };

  const signout = (callback?: VoidFunction) => {
    context.dispatch({ type: AuthActions.signOut });
    navigate("/");
  };
  return { ...context, isLogged: Boolean(context.state.token), signin, signout };
}
