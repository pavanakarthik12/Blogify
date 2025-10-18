import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Welcome to Blogify';
  const words = fullText.split(' ');
  
  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    
    const timer = setInterval(() => {
      if (wordIndex < words.length) {
        if (charIndex < words[wordIndex].length) {
          currentWord += words[wordIndex][charIndex];
          setDisplayText(
            words.slice(0, wordIndex).join(' ') + 
            (wordIndex > 0 ? ' ' : '') + 
            currentWord
          );
          charIndex++;
        } else {
          wordIndex++;
          charIndex = 0;
          currentWord = '';
        }
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
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

      {/* Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playwrite font-bold text-white mb-6 min-h-[4rem] transition-all duration-300 hover:scale-105 hover:[text-shadow:0_0_20px_rgba(34,211,238,0.8),0_0_40px_rgba(34,211,238,0.5)]">
            {displayText.split(' ').map((word, index) => (
              <span 
                key={index}
                className="inline-block mx-2 transition-all duration-300 hover:[text-shadow:0_0_15px_rgba(6,182,212,0.9)]"
              >
                {word}
              </span>
            ))}
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-outfit text-gray-300 max-w-3xl mx-auto mb-8 transition-all duration-300 hover:text-white hover:[text-shadow:0_0_10px_rgba(6,182,212,0.4)]">
            Your platform for sharing ideas, stories, and knowledge with the world.
            Start your blogging journey today!
          </p>
          
          <a 
            href="/signup" 
            className="bg-cyan-600 text-white font-semibold text-lg px-8 py-4 rounded-full inline-block transition-all duration-300 hover:bg-cyan-500 hover:shadow-2xl hover:-translate-y-1 hover:[box-shadow:0_0_20px_rgba(34,211,238,0.8),0_0_40px_rgba(34,211,238,0.6),0_0_60px_rgba(34,211,238,0.4)]"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;