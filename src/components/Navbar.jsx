export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Desktop Navbar --- */}
        <div className="hidden sm:flex items-center justify-between h-16">
          
          {/* Left: Logo & Brand Name */}
          <div className="flex items-center gap-2">
            <img 
              src="/images/logo.png" 
              alt="Dev Stack Logo" 
              className="w-8 h-8 object-contain rounded-md" 
            />
            <span className="font-bold text-xl text-slate-800 tracking-tight">
              Dev<span className="text-pink-500">Stack</span>
            </span>
          </div>

          {/* Center: Nav Links */}
          <div className="flex items-center space-x-8 text-sm font-medium">
            <a href="#home" className="text-pink-500 font-semibold">Home</a>
            <a href="#technologies" className="text-slate-600 hover:text-pink-500 transition-colors">Technologies</a>
            <a href="#projects" className="text-slate-600 hover:text-pink-500 transition-colors">Projects</a>
            <a href="#about" className="text-slate-600 hover:text-pink-500 transition-colors">About</a>
            <a href="#contact" className="text-slate-600 hover:text-pink-500 transition-colors">Contact</a>
          </div>

          {/* Right: Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-700 hover:text-pink-500 transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium text-sm rounded-full shadow-md hover:opacity-95 transition-all">
              Sign Up
            </button>
          </div>
        </div>

        {/* --- Mobile Navbar --- */}
        <div className="flex items-center justify-between h-16 sm:hidden">
          
          {/* Mobile Left: Hamburger Icon */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-slate-700 font-medium">
              <li><a href="#home" className="text-pink-500">Home</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Mobile Center: Logo */}
          <div className="flex items-center gap-1.5">
            <img 
              src="/images/logo.png" 
              alt="Dev Stack Logo" 
              className="w-7 h-7 object-contain rounded-md" 
            />
            <span className="font-bold text-lg text-slate-800">
              Dev<span className="text-pink-500">Stack</span>
            </span>
          </div>

          {/* Mobile Right: Buttons */}
          <div className="flex items-center gap-1">
            <button className="text-xs font-medium text-slate-700 px-2 py-1">Sign In</button>
            <button className="px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-medium rounded-full">
              Sign Up
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}