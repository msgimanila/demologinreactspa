import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

interface RootState {
  isLoggedIn: boolean;
}
interface AppState {
  isLoggedIn: boolean;
}

const App: React.FC = () => {
  const state: AppState = useSelector((state: { app: AppState }) => state.app);
  return <div>{state.isLoggedIn ? 'Welcome' : 'Login'}</div>;
};

 

export default App;
