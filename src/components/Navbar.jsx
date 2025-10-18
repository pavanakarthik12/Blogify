import { useState } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [hoveredTab, setHoveredTab] = useState(null);

  const navItems = [
    { name: 'Home', url: '/' },
    { name: 'Login', url: '/login' },
    { name: 'Signup', url: '/signup' },
  ];

  return (
    <nav className="relative sticky top-0 overflow-hidden border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.9)] z-50">
      {/* Gradient background with grain effect */}
      <div className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0 opacity-20">
        <div className="h-[10rem] rounded-full w-[60rem] bg-gradient-to-b blur-[6rem] from-purple-600 to-sky-600 animate-pulse"></div>
        <div className="h-[10rem] rounded-full w-[90rem] bg-gradient-to-b blur-[6rem] from-pink-900 to-yellow-400"></div>
        <div className="h-[10rem] rounded-full w-[60rem] bg-gradient-to-b blur-[6rem] from-yellow-600 to-sky-500"></div>
      </div>
      <div className="absolute inset-0 z-0 bg-noise opacity-15"></div>

      {/* Animated floating orb */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse z-0"></div>

      {/* Glass overlay and content */}
      <div className="relative z-10 bg-black/90 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl md:text-3xl font-playwrite font-bold text-white transition-all duration-300 hover:scale-105 hover:text-gray-300"
          >
            Blogify
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              const isHovered = hoveredTab === item.name;

              return (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  onMouseEnter={() => setHoveredTab(item.name)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`
                    relative font-outfit text-sm md:text-base font-medium
                    px-5 py-2.5 rounded-xl cursor-pointer
                    transition-all duration-300 ease-out
                    ${isActive
                      ? 'text-white bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                      : 'text-white hover:bg-white/5'
                    }
                  `}
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Top highlight for active */}
                  {isActive && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full" />
                  )}

                  {/* Bottom glow for active */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm" />
                  )}

                  {/* Tubelight effect on hover */}
                  {isHovered && !isActive && (
                    <>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent blur-sm"></div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-sm"></div>
                    </>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;