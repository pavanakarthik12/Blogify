import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-playwrite font-bold text-center mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for future blog posts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-playwrite font-bold mb-2">Getting Started with React</h3>
            <p className="text-gray-600 mb-4">Learn the basics of React and start building your first application...</p>
            <button className="text-indigo-600 hover:underline">Read More</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-playwrite font-bold mb-2">Mastering Tailwind CSS</h3>
            <p className="text-gray-600 mb-4">Discover how to create beautiful designs with Tailwind CSS...</p>
            <button className="text-indigo-600 hover:underline">Read More</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-playwrite font-bold mb-2">Firebase Authentication</h3>
            <p className="text-gray-600 mb-4">Implement secure user authentication with Firebase...</p>
            <button className="text-indigo-600 hover:underline">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;