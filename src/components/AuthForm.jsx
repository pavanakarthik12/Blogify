import { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({ type }) => {
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
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-playwrite font-bold text-center text-indigo-700 mb-6">
        {isLogin ? 'Login to Blogify' : 'Create an Account'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label htmlFor="username" className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input-field"
              required={!isLogin}
            />
          </div>
        )}
        
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        
        <button type="submit" className="w-full btn btn-primary py-3">
          {isLogin ? 'Login' : 'Create Account'}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        {isLogin ? (
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Sign up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;