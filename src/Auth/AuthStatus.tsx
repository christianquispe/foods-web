import { AuthActions, useAuth } from "./AuthProvider";

export default function AuthStatus() {
  let auth = useAuth();

  if (!auth.state.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.state.user}!{" "}
      <button
        onClick={() => {
          auth.dispatch({type: AuthActions.signOut})
        }}
      >
        Sign out
      </button>
    </p>
  );
}
