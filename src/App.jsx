import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching JSON:', err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`, { position: 'top-right' });
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack!`, { position: 'top-right' });
  };

  const handleRemoveFromStack = (id, name) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${name} removed from stack.`, { position: 'top-right' });
  };

  const handleClearStack = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('All items removed from stack.', { position: 'top-right' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans antialiased">
      <ToastContainer autoClose={2000} />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button className="md:hidden text-slate-600 text-xl">☰</button>
            <div className="flex items-center space-x-2">
              <span className="w-7 h-7 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-md flex items-center justify-center text-white text-xs font-bold">
                DS
              </span>
              <span className="font-extrabold text-slate-900 text-lg">Dev Stack</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 text-xs font-medium text-slate-500">
            <a href="#" className="text-pink-500 font-semibold">Home</a>
            <a href="#technologies" className="hover:text-slate-900 transition">Technologies</a>
            <a href="#" className="hover:text-slate-900 transition">Projects</a>
            <a href="#" className="hover:text-slate-900 transition">About</a>
            <a href="#" className="hover:text-slate-900 transition">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-xs font-medium text-slate-600 hover:text-slate-900">Sign In</button>
            <button className="text-xs font-medium text-white px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-95 shadow-sm">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-md mb-8">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#technologies" className="px-6 py-2.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white rounded-md text-xs font-medium shadow-sm hover:opacity-95 transition">
              Explore Technologies
            </a>
            <button className="px-6 py-2.5 border border-slate-200 text-slate-600 rounded-md text-xs font-medium hover:bg-slate-50 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src="/images/hero-illustration.png" alt="Dev Stack Banner" className="w-full max-w-md object-contain" />
        </div>
      </section>

      {/* Section Title */}
      <div id="technologies" className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <h2 className="text-2xl font-black text-slate-900">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>
        <p className="text-xs text-slate-400 mt-1">Pick one technology per category to build your ideal stack.</p>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        {loading ? (
          <div className="text-center py-20 text-slate-400 text-sm">Loading technologies...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* 3-Column Technology Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {technologies.map((tech) => {
                const isAdded = stack.some((item) => item.id === tech.id);
                return (
                  <div key={tech.id} className="bg-white border border-slate-100 rounded-lg p-5 shadow-sm flex flex-col justify-between hover:shadow transition">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                        <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                          {tech.badge}
                        </span>
                      </div>

                      <h3 className="font-bold text-slate-900 text-base mb-1">{tech.name}</h3>
                      <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-3 mb-6">
                        {tech.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3 pt-3 border-t border-slate-50">
                        <span className="bg-slate-50 px-2 py-0.5 rounded text-slate-500">{tech.category}</span>
                        <span>{tech.difficulty}</span>
                        <span className="font-medium text-amber-500">★ {tech.rating}</span>
                      </div>

                      <button
                        onClick={() => handleAddToStack(tech)}
                        disabled={isAdded}
                        className={`w-full py-2.5 rounded-md text-xs font-semibold transition ${
                          isAdded
                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
                            : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                      >
                        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sidebar: Your Stack */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50/50 border border-slate-100 rounded-lg p-5 sticky top-24">
                <h3 className="font-bold text-slate-900 text-sm">Your Stack</h3>
                <p className="text-[11px] text-slate-400 mb-4">{stack.length} Technology Selected</p>

                {stack.length === 0 ? (
                  <div className="text-center py-10 border border-dashed border-slate-200 rounded-lg bg-white">
                    <p className="text-xs font-medium text-slate-400">Your stack is empty</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {stack.map((item) => (
                      <div key={item.id} className="flex items-center justify-between bg-white border border-slate-100 p-2.5 rounded-md shadow-2xs">
                        <div className="flex items-center space-x-2.5">
                          <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                          <span className="text-xs font-semibold text-slate-800">{item.name}</span>
                        </div>
                        <button
                          onClick={() => handleRemoveFromStack(item.id, item.name)}
                          className="text-slate-300 hover:text-red-500 text-xs px-1"
                        >
                          ✕
                        </button>
                      </div>
                    ))}

                    <button
                      onClick={handleClearStack}
                      className="w-full mt-4 py-2 border border-red-200 text-red-500 rounded-md text-xs font-medium hover:bg-red-50/50 transition"
                    >
                      Remove All
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-xs">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-5 h-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded flex items-center justify-center text-white text-[10px] font-bold">
                DS
              </span>
              <span className="font-bold text-slate-900 text-sm">Dev Stack</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4 max-w-xs">
              Curated tools, technologies, and resources to help developers build modern software.
            </p>
            <div className="flex space-x-3 text-slate-500 font-medium">
              <a href="#" className="hover:text-slate-900">GitHub</a>
              <a href="#" className="hover:text-slate-900">Twitter</a>
              <a href="#" className="hover:text-slate-900">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-3">PRODUCT</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-slate-600">Home</a></li>
              <li><a href="#" className="hover:text-slate-600">Technologies</a></li>
              <li><a href="#" className="hover:text-slate-600">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-3">COMPANY</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-slate-600">About</a></li>
              <li><a href="#" className="hover:text-slate-600">Contact</a></li>
              <li><a href="#" className="hover:text-slate-600">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-3">LEGAL</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-slate-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-50 flex justify-between items-center text-[11px] text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}