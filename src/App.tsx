
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import { RootState } from './redux/store';  // Import the RootState type from your store

const App: React.FC = () => {
  // Get the logged-in state from the Redux store
  const isLoggedIn = useSelector((state: RootState) => state.app.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <Welcome /> : <LoginForm />}
    </div>
  );
};

export default App;
