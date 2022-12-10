import LoginForm from '../LoginForm'

export default function LoginPage() {
  return (
    <LoginForm onLogin={(vals) => console.log(vals)} />
  )
}
