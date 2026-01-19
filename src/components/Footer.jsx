
import React from 'react';
import { Sparkles, Twitter, Linkedin, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const showToast = (feature) => {
    // Toast logic placeholder
    console.log(`Clicked: ${feature}`);
  };

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden font-sans border-t border-slate-900">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      <div className="absolute -top-[300px] left-1/4 w-[800px] h-[800px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse duration-1000"></div>
      <div className="absolute top-[100px] right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column - Wider */}
          <div className="lg:col-span-5 pr-8">
            <Link to="/" className="flex items-center gap-3 mb-6 text-2xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors group">
               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-900/40 group-hover:rotate-12 transition-transform">
                  <Sparkles className="w-5 h-5" />
               </div>
               <span className="font-heading">RebelCreator OS™</span>
            </Link>
            <p className="text-slate-400 max-w-md mb-8 leading-relaxed text-lg font-light">
              The operating system for the next generation of digital influence. Clean, powerful, compliant. We help you decide before you spend.
            </p>
            
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" onClick={(e) => e.preventDefault()} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links - Grid Layout */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-heading font-bold text-white mb-6 tracking-wide text-sm uppercase text-indigo-400">Product</h5>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li><Link to="/what-we-do" className="hover:text-indigo-400 transition-colors">Intelligence</Link></li>
                <li><Link to="/comparison" className="hover:text-indigo-400 transition-colors">Comparison</Link></li>
                <li><Link to="/what-we-do" className="hover:text-indigo-400 transition-colors">Features</Link></li>
                <li><Link to="/comparison" className="hover:text-indigo-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-heading font-bold text-white mb-6 tracking-wide text-sm uppercase text-indigo-400">Company</h5>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li><Link to="/" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
                <li><Link to="/purpose" className="hover:text-indigo-400 transition-colors">Manifesto</Link></li>
                <li>
                  <button onClick={() => showToast('Careers')} className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                    Careers <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30">Hiring</span>
                  </button>
                </li>
                <li><button onClick={() => showToast('Contact')} className="hover:text-indigo-400 transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-heading font-bold text-white mb-6 tracking-wide text-sm uppercase text-indigo-400">Resources</h5>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li>
                  <a href="https://irebelservices.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    iRebel Services <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li><button onClick={() => showToast('Blog')} className="hover:text-indigo-400 transition-colors">Blog</button></li>
                <li><button onClick={() => showToast('Privacy')} className="hover:text-indigo-400 transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => showToast('Terms')} className="hover:text-indigo-400 transition-colors">Terms of Service</button></li>
              </ul>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm font-medium">
            © {new Date().getFullYear()} RebelCreator OS™. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-sm text-slate-500 font-medium px-4 py-2 rounded-full border border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
            <span>Part of the iRebel Network</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-indigo-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
