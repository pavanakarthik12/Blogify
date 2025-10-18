import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Welcome to Blogify';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-yellow-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-playwrite font-bold text-yellow-600 mb-6 min-h-[4rem] transition-all duration-300 hover:scale-105 hover:[text-shadow:0_0_10px_rgba(251,191,36,0.6),0_0_20px_rgba(251,191,36,0.4),0_0_30px_rgba(251,191,36,0.3)]">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-xl font-outfit text-gray-700 max-w-2xl mx-auto mb-8 transition-all duration-300 hover:text-gray-900 hover:[text-shadow:0_0_8px_rgba(75,85,99,0.4),0_0_15px_rgba(75,85,99,0.2)]">
          Your platform for sharing ideas, stories, and knowledge with the world.
          Start your blogging journey today!
        </p>
        <a 
          href="/signup" 
          className="bg-yellow-500 text-white font-semibold text-lg px-8 py-3 rounded-md inline-block transition-all duration-300 hover:bg-yellow-600 hover:shadow-2xl hover:-translate-y-0.5 hover:[box-shadow:0_0_15px_rgba(251,191,36,0.7),0_0_30px_rgba(251,191,36,0.5),0_0_45px_rgba(251,191,36,0.3)]"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;