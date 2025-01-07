import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

interface RootState {
  isLoggedIn: boolean;
}

const App: React.FC = () => {
  // Accessing Redux state
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <Welcome /> : <LoginForm />}
    </div>
  );
};

export default App;
