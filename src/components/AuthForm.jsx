import { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({ type = 'login' }) => {
  const isLogin = type === 'login';
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Future Firebase integration will go here
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:[box-shadow:0_0_20px_rgba(79,70,229,0.3)]">
        <h2 className="text-3xl font-playwrite font-bold text-center text-indigo-700 mb-6 transition-all duration-300 hover:[text-shadow:0_0_10px_rgba(79,70,229,0.4),0_0_20px_rgba(79,70,229,0.2)]">
          {isLogin ? 'Login to Blogify' : 'Create an Account'}
        </h2>
        
        <div className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-gray-700 mb-1 transition-all duration-300 hover:text-indigo-600 hover:[text-shadow:0_0_5px_rgba(79,70,229,0.3)]">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md transition-all duration-300 focus:ring-2 focus:ring-indigo-500 focus:[box-shadow:0_0_10px_rgba(79,70,229,0.3)] hover:border-indigo-400 focus:outline-none"
                required={!isLogin}
              />
            </div>
          )}
          
          <div>
            <label className="block text-gray-700 mb-1 transition-all duration-300 hover:text-indigo-600 hover:[text-shadow:0_0_5px_rgba(79,70,229,0.3)]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md transition-all duration-300 focus:ring-2 focus:ring-indigo-500 focus:[box-shadow:0_0_10px_rgba(79,70,229,0.3)] hover:border-indigo-400 focus:outline-none"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1 transition-all duration-300 hover:text-indigo-600 hover:[text-shadow:0_0_5px_rgba(79,70,229,0.3)]">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md transition-all duration-300 focus:ring-2 focus:ring-indigo-500 focus:[box-shadow:0_0_10px_rgba(79,70,229,0.3)] hover:border-indigo-400 focus:outline-none"
              required
            />
          </div>
          
          <button 
            onClick={handleSubmit}
            className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 hover:[box-shadow:0_0_15px_rgba(79,70,229,0.6),0_0_30px_rgba(79,70,229,0.4)]"
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </div>
        
        <div className="mt-4 text-center">
          {isLogin ? (
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-indigo-600 hover:underline transition-all duration-300 hover:[text-shadow:0_0_8px_rgba(79,70,229,0.5)]">
                Sign up
              </Link>
            </p>
          ) : (
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-600 hover:underline transition-all duration-300 hover:[text-shadow:0_0_8px_rgba(79,70,229,0.5)]">
                Login
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;