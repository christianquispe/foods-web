import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from "../AuthProvider";

import LoginForm, { OnLoginArgs } from "../LoginForm";

export default function LoginPage() {
  const { signin, isLogged } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (vals: OnLoginArgs) => {
    await signin(vals);
  };

  useEffect(() => {
    if (isLogged) {
      navigate(from, { replace: true })
    }
  }, [isLogged, from, navigate])

  return <LoginForm onLogin={handleLogin} />;
}
