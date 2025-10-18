import { useState } from 'react';

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
    <div className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center p-4">
      {/* Gradient background */}
      <div className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0">
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-cyan-600 to-blue-600"></div>
        <div className="h-[10rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[6rem] from-emerald-900 to-yellow-400"></div>
        <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-teal-600 to-sky-500"></div>
      </div>
      
      {/* Noise texture */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      ></div>

      {/* Form Content */}
      <div className="relative z-10 max-w-md w-full p-8 bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] border border-gray-800">
        <h2 className="text-3xl md:text-4xl font-playwrite font-bold text-center text-cyan-400 mb-8 transition-all duration-300 hover:[text-shadow:0_0_15px_rgba(34,211,238,0.8),0_0_30px_rgba(34,211,238,0.5)]">
          {isLogin ? 'Login to Blogify' : 'Create an Account'}
        </h2>
        
        <div className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-gray-300 mb-2 font-medium transition-all duration-300 hover:text-cyan-400 hover:[text-shadow:0_0_8px_rgba(34,211,238,0.6)]">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white rounded-lg transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:[box-shadow:0_0_15px_rgba(34,211,238,0.5)] hover:border-cyan-500 focus:outline-none placeholder-gray-500"
                placeholder="Enter your username"
                required={!isLogin}
              />
            </div>
          )}
          
          <div>
            <label className="block text-gray-300 mb-2 font-medium transition-all duration-300 hover:text-cyan-400 hover:[text-shadow:0_0_8px_rgba(34,211,238,0.6)]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white rounded-lg transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:[box-shadow:0_0_15px_rgba(34,211,238,0.5)] hover:border-cyan-500 focus:outline-none placeholder-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2 font-medium transition-all duration-300 hover:text-cyan-400 hover:[text-shadow:0_0_8px_rgba(34,211,238,0.6)]">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-white rounded-lg transition-all duration-300 focus:ring-2 focus:ring-cyan-500 focus:[box-shadow:0_0_15px_rgba(34,211,238,0.5)] hover:border-cyan-500 focus:outline-none placeholder-gray-500"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button 
            onClick={handleSubmit}
            className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-cyan-500 hover:shadow-2xl hover:-translate-y-1 hover:[box-shadow:0_0_20px_rgba(34,211,238,0.8),0_0_40px_rgba(34,211,238,0.6)] mt-6"
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </div>
        
        <div className="mt-6 text-center">
          {isLogin ? (
            <p className="text-gray-400">
              Don't have an account?{' '}
              <a href="/signup" className="text-cyan-400 hover:underline font-medium transition-all duration-300 hover:[text-shadow:0_0_10px_rgba(34,211,238,0.7)]">
                Sign up
              </a>
            </p>
          ) : (
            <p className="text-gray-400">
              Already have an account?{' '}
              <a href="/login" className="text-cyan-400 hover:underline font-medium transition-all duration-300 hover:[text-shadow:0_0_10px_rgba(34,211,238,0.7)]">
                Login
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;