import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

const App = () => {
  const { isLoggedIn } = useSelector((state) => state);

  return isLoggedIn ? <Welcome /> : <LoginForm />;
};

export default App;