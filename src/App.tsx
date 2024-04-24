import React from "react";
import LoginForm from "./LoginForm";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Вход
        </h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
