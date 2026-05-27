import { useState, FormEvent } from 'react';
import { Globe, ArrowUp, Send, Check } from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', scope: '', projectBrief: '' });
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'success'>('idle');

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus('transmitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', scope: '', projectBrief: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="contact" 
      className="bg-moore-black text-moore-white pt-32 pb-8 border-t border-moore-white/10 relative overflow-hidden"
    >
      {/* Structural visual lines */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-moore-white/5 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-24">
          
          {/* Left Block: Strategic Copy and Lead Capture form */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-moore-blue animate-pulse" />
                <span className="font-mono text-xs text-moore-blue tracking-widest uppercase font-bold">LATEST CONVERSION</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-sans">
                Let’s Build Something<br />Outstanding.
              </h2>
              <p className="text-sm md:text-base text-moore-white/60 font-sans font-light max-w-lg leading-relaxed">
                Outstanding brands are built when strategic passion meets perfect operational alignment. Connect with our principal advisors to design a high-converting digital legacy.
              </p>
            </div>

            {/* Inline contact input strip using border-bottom only design */}
            <form onSubmit={handleContactSubmit} className="space-y-8 max-w-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                
                {/* Name field */}
                <div className="flex flex-col space-y-2 group">
                  <label className="text-[10px] font-mono tracking-widest text-moore-white/40 group-focus-within:text-moore-blue transition-colors uppercase">
                    Your Name / Client Identity <span className="text-moore-blue">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Richard Adewoye"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-b border-moore-white/20 bg-transparent focus:border-moore-blue focus:outline-none py-3 text-sm font-sans text-moore-white transition-colors"
                  />
                </div>

                {/* Email field */}
                <div className="flex flex-col space-y-2 group">
                  <label className="text-[10px] font-mono tracking-widest text-moore-white/40 group-focus-within:text-moore-blue transition-colors uppercase">
                    Corporate Email Address <span className="text-moore-blue">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. richard@mooreuniversal.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-b border-moore-white/20 bg-transparent focus:border-moore-blue focus:outline-none py-3 text-sm font-sans text-moore-white transition-colors"
                  />
                </div>

              </div>

              {/* Project segment dropdown styled natively with bottom border */}
              <div className="flex flex-col space-y-2 group">
                <label className="text-[10px] font-mono tracking-widest text-moore-white/40 group-focus-within:text-moore-blue transition-colors uppercase">
                  Primary Strategic Objective / Scope
                </label>
                <select
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="border-b border-moore-white/20 bg-transparent focus:border-moore-blue focus:outline-none py-3 text-sm font-sans text-moore-white/70 transition-colors cursor-pointer appearance-none uppercase tracking-wide"
                >
                  <option value="" className="bg-moore-black text-moore-white">SELECT CAPABILITY OUTCOME...</option>
                  <option value="brand" className="bg-moore-black text-moore-white">VISUAL IDENTITY & BRAND PRESTIGE</option>
                  <option value="uiux" className="bg-moore-black text-moore-white">LIQUID GLASS EXPANSION / PERFORMANCE UI</option>
                  <option value="scale" className="bg-moore-black text-moore-white">CONVERSION FUNNELS & SCALE COMPETE</option>
                </select>
              </div>

              {/* Brief details text */}
              <div className="flex flex-col space-y-2 group">
                <label className="text-[10px] font-mono tracking-widest text-moore-white/40 group-focus-within:text-moore-blue transition-colors uppercase">
                  Brief Project Narrative Context
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Full replatforming of digital core for multi-layered customer segments"
                  value={formData.projectBrief}
                  onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                  className="border-b border-moore-white/20 bg-transparent focus:border-moore-blue focus:outline-none py-3 text-sm font-sans text-moore-white transition-colors resize-none"
                />
              </div>

              {/* Action submission trigger button */}
              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-4 px-6 flex items-center justify-center gap-2.5 font-bold font-mono text-xs tracking-widest uppercase transition-all duration-300 border cursor-pointer
                  ${status === 'idle' 
                    ? 'bg-moore-blue border-moore-blue hover:bg-moore-black hover:border-moore-white text-moore-white' 
                    : ''}
                  ${status === 'transmitting' 
                    ? 'bg-neutral-900 border-neutral-800 text-neutral-400' 
                    : ''}
                  ${status === 'success' 
                    ? 'bg-moore-blue border-moore-blue text-moore-white' 
                    : ''}
                `}
              >
                {status === 'idle' && (
                  <>
                    <span>TRANSMIT REQUISITION</span>
                    <Send className="w-4 h-4 text-moore-white" />
                  </>
                )}
                {status === 'transmitting' && (
                  <>
                    <span>TRANSMITTING DIRECT SECURE ROUTE...</span>
                    <span className="animate-spin text-sm">↻</span>
                  </>
                )}
                {status === 'success' && (
                  <>
                    <span>OUTSTANDING REQUISITION DELIVERED</span>
                    <Check className="w-4 h-4 text-white animate-bounce" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Block: Addresses and Coordinates info */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2 space-y-16 lg:space-y-0 h-full">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:pl-12">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-moore-blue tracking-wider uppercase font-bold">
                  SWISS ADVISORY AG
                </span>
                <p className="text-moore-white/60 text-xs md:text-sm leading-relaxed font-sans font-light uppercase select-all">
                  81 DUFOURSTRASSE<br />
                  8008 Zürich, Switzerland
                </p>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">
                  CH +41 44 218 8000
                </span>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-mono text-moore-blue tracking-wider uppercase font-bold">
                  FRANCE HUB
                </span>
                <p className="text-moore-white/60 text-xs md:text-sm leading-relaxed font-sans font-light uppercase select-all">
                  14 AVENUE MONTAIGNE<br />
                  75008 Paris, France
                </p>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">
                  FR +33 1 44 71 8000
                </span>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-mono text-moore-blue tracking-wider uppercase font-bold">
                  SECURED TELEMETRY
                </span>
                <p className="text-moore-white/60 text-xs md:text-sm font-sans font-light select-all">
                  hello@mooreuniversal.com<br />
                  partner@mooreuniversal.com
                </p>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-mono text-moore-blue tracking-wider uppercase font-bold">
                  OUR DIRECTIVE
                </span>
                <p className="text-moore-white/60 text-xs font-sans font-light leading-relaxed uppercase">
                  PASSIONATE ABOUT CREATING OUTSTANDING BRANDS TO ADD POWERFUL STRATEGIC VALUE.
                </p>
              </div>
            </div>

            {/* Scroll back up and terminal protocols */}
            <div className="pt-16 lg:pl-12 flex items-center justify-between border-t border-moore-white/5">
              <div className="space-y-1">
                <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest leading-none">
                  SECURED PORT // 443
                </span>
                <span className="block text-[10px] font-mono text-[#001CFF] uppercase tracking-widest leading-none">
                  SSL STACK ENCRYPTED
                </span>
              </div>

              <button
                onClick={scrollToTop}
                aria-label="Back to viewport start container"
                className="bg-neutral-950 border border-moore-white/10 hover:border-moore-blue text-neutral-400 hover:text-white rounded-full p-4 transition-all duration-300 active:scale-90 cursor-pointer"
              >
                <ArrowUp className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

        </div>

        {/* Colossal Brand Typography Marquee requested: stretching edge to edge */}
        <div className="w-full text-center select-none border-t border-moore-white/10 pt-16 overflow-hidden">
          <h2
            className="text-[10vw] font-black tracking-tighter text-neutral-900 hover:text-moore-blue transition-all duration-700 ease-in-out cursor-default select-none uppercase leading-none select-all"
            style={{ fontFamily: "'font-sans', sans-serif" }}
          >
            MOORE UNIVERSAL
          </h2>
        </div>

        {/* Global Copyright markers */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-neutral-600 mt-12 gap-4 border-t border-moore-white/5 pt-8">
          <span>© 2026 MOORE UNIVERSAL GROUP. CRAFTED TO ADD POWERFUL VALUE AND DEEP RESONANCE.</span>
          <div className="flex gap-4">
            <a href="#hero" className="hover:text-moore-blue transition-colors">SECURE ENDPOINTS</a>
            <a href="#hero" className="hover:text-moore-blue transition-colors">TERMS OF PARTNERSHIP</a>
            <a href="#hero" className="hover:text-moore-blue transition-colors">PRIVACY MATRIX</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
