import React from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {
  const { username } = useSelector((state) => state);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
    </div>
  );
};

export default Welcome;
