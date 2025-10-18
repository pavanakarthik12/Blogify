import { useState, useEffect } from 'react';

// BlurText Component
const BlurText = ({ text, delay = 150, animateBy = "words", direction = "top", onAnimationComplete, className = "" }) => {
  const [animatedItems, setAnimatedItems] = useState([]);
  
  useEffect(() => {
    const items = animateBy === "words" ? text.split(" ") : text.split("");
    const timeouts = [];
    
    items.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setAnimatedItems(prev => [...prev, index]);
        if (index === items.length - 1 && onAnimationComplete) {
          onAnimationComplete();
        }
      }, delay * index);
      timeouts.push(timeout);
    });
    
    return () => timeouts.forEach(clearTimeout);
  }, [text, delay, animateBy, onAnimationComplete]);
  
  const items = animateBy === "words" ? text.split(" ") : text.split("");
  const directionClasses = {
    top: "translate-y-[-20px]",
    bottom: "translate-y-[20px]",
    left: "translate-x-[-20px]",
    right: "translate-x-[20px]"
  };
  
  return (
    <span className={className}>
      {items.map((item, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${
            animatedItems.includes(index)
              ? "opacity-100 blur-0 translate-y-0 translate-x-0"
              : `opacity-0 blur-md ${directionClasses[direction]}`
          }`}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {item}{animateBy === "words" && index < items.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Gradient background */}
      <div className="absolute inset-0 z-0">
        {/* Moving gradient orbs */}
        <div className="absolute -right-60 -top-10 blur-xl animate-float-slow">
          <div className="h-[10rem] rounded-full w-[60rem] bg-gradient-to-b blur-[6rem] from-cyan-600 to-blue-600"></div>
        </div>
        <div className="absolute -right-60 top-20 blur-xl animate-float-medium">
          <div className="h-[10rem] rounded-full w-[90rem] bg-gradient-to-b blur-[6rem] from-emerald-900 to-yellow-400"></div>
        </div>
        <div className="absolute -right-60 top-60 blur-xl animate-float-fast">
          <div className="h-[10rem] rounded-full w-[60rem] bg-gradient-to-b blur-[6rem] from-teal-600 to-sky-500"></div>
        </div>
        
        {/* Additional floating orbs */}
        <div className="absolute left-10 top-1/4 blur-3xl animate-float-reverse-slow">
          <div className="h-40 w-40 rounded-full bg-purple-500/20"></div>
        </div>
        <div className="absolute right-1/4 bottom-1/3 blur-3xl animate-float-reverse-medium">
          <div className="h-56 w-56 rounded-full bg-cyan-500/15"></div>
        </div>
        <div className="absolute left-1/3 bottom-20 blur-3xl animate-pulse">
          <div className="h-48 w-48 rounded-full bg-blue-500/20"></div>
        </div>
      </div>
      
      {/* Animated Noise texture */}
      <div 
        className="absolute inset-0 z-0 opacity-30 animate-grain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-playwrite font-bold text-white mb-6 min-h-[4rem] transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <BlurText
              text="Welcome to Blogify"
              delay={150}
              animateBy="words"
              direction="top"
              className={`transition-all duration-300 ${
                isHovered 
                  ? 'drop-shadow-[0_0_25px_rgba(34,211,238,1)] drop-shadow-[0_0_50px_rgba(34,211,238,0.7)]' 
                  : ''
              }`}
            />
          </h1>
          
          <p className="text-xl md:text-2xl font-outfit text-gray-300 max-w-3xl mx-auto mb-8 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">
            Your platform for sharing ideas, stories, and knowledge with the world.
            Start your blogging journey today!
          </p>
          
          <a 
            href="/signup" 
            className="bg-cyan-600 text-white font-semibold text-lg px-8 py-4 rounded-full inline-block transition-all duration-300 hover:bg-cyan-500 hover:shadow-2xl hover:-translate-y-1 hover:drop-shadow-[0_0_30px_rgba(34,211,238,0.9)]"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(5deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(-5deg);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-40px, 40px) rotate(10deg);
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -50px);
          }
        }

        @keyframes float-reverse-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 30px) scale(1.1);
          }
        }

        @keyframes float-reverse-medium {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, -30px) scale(1.15);
          }
        }

        @keyframes grain {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.35; }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 10s ease-in-out infinite;
        }

        .animate-float-reverse-slow {
          animation: float-reverse-slow 18s ease-in-out infinite;
        }

        .animate-float-reverse-medium {
          animation: float-reverse-medium 12s ease-in-out infinite;
        }

        .animate-grain {
          animation: grain 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;