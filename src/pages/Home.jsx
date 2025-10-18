import { useState } from 'react';
import HeroSection from '../components/HeroSection';

const BlogCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-6 rounded-lg transition-all duration-300 hover:border-white/20 overflow-hidden"
    >
      {/* Dark glow effect on hover */}
      {isHovered && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gray-400/40 to-transparent blur-sm"></div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gray-400/30 to-transparent blur-sm"></div>
        </>
      )}
      
      <h3 className="relative z-10 text-xl font-playwrite font-bold mb-2 text-white">{title}</h3>
      <p className="relative z-10 text-gray-400 mb-4">{description}</p>
      <button className="relative z-10 text-white hover:text-gray-300 transition-colors">Read More →</button>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Gradient background with grain effect */}
        <div className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0 opacity-15">
          <div className="h-[10rem] rounded-full w-[60rem] bg-gradient-to-b blur-[6rem] from-purple-600 to-sky-600 animate-pulse"></div>
          <div className="h-[10rem] rounded-full w-[90rem] bg-gradient-to-b blur-[6rem] from-pink-900 to-yellow-400"></div>
          <div className="h-[10rem] rounded-full w-[60rem] bg-gradient-to-b blur-[6rem] from-yellow-600 to-sky-500"></div>
        </div>
        <div className="absolute inset-0 z-0 bg-noise opacity-10"></div>

        {/* Animated floating orb */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-playwrite font-bold text-center mb-8 text-white">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BlogCard
                title="Getting Started with React"
                description="Learn the basics of React and start building your first application..."
              />
              <BlogCard
                title="Mastering Tailwind CSS"
                description="Discover how to create beautiful designs with Tailwind CSS..."
              />
              <BlogCard
                title="Firebase Authentication"
                description="Implement secure user authentication with Firebase..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;