import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-playwrite font-bold text-indigo-800 mb-6">
          Welcome to Blogify
        </h1>
        <p className="text-xl font-outfit text-gray-600 max-w-2xl mx-auto mb-8">
          Your platform for sharing ideas, stories, and knowledge with the world.
          Start your blogging journey today!
        </p>
        <Link to="/signup" className="btn btn-primary text-lg px-8 py-3">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;