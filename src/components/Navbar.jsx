import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-sm z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-playwrite font-bold text-indigo-600">
          Blogify
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="font-outfit hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link to="/login" className="font-outfit hover:text-indigo-600 transition-colors">
            Login
          </Link>
          <Link to="/signup" className="font-outfit hover:text-indigo-600 transition-colors">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;