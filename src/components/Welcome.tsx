 

interface WelcomeProps {
  username: string;
}

const Welcome = ({ username }: WelcomeProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
    </div>
  );
};

export default Welcome;
