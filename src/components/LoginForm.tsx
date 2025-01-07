import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../redux/actions';

interface LoginFormProps {
  isLoading: boolean;
  errorMessage: string;
}

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLoading, errorMessage } = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest());

    if (username === 'admin' && password === 'password123') {
      dispatch(loginSuccess(username));
    } else {
      dispatch(loginFailure('Invalid credentials'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md space-y-4 w-80"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
