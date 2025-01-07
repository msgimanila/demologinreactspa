import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

interface AppState {
  isLoggedIn: boolean;
}
const App: React.FC = () => {
  const state: AppState = { isLoggedIn: false };
  return <div>{state.isLoggedIn ? 'Welcome' : 'Login'}</div>;
};


export default App;
