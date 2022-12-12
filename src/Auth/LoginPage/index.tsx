import { useAuth } from "../AuthProvider";
import LoginForm, { OnLoginArgs } from "../LoginForm";

export default function LoginPage() {
  const { signin } = useAuth();

  const handleLogin = (vals: OnLoginArgs) => {
    signin(vals);
  };

  return <LoginForm onLogin={handleLogin} />;
}
