import { useState } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', url: '/' },
    { name: 'Login', url: '/login' },
    { name: 'Signup', url: '/signup' },
  ];

  return (
    <nav className="sticky top-0 bg-black/60 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] z-50">
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

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
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
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;