import { useEffect, useRef, useState, FormEvent } from 'react';
import { ArrowRight, Globe, Instagram, Twitter } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);
  const currentOpacityRef = useRef<number>(0);
  
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // requestAnimationFrame custom fade-in and fade-out utility
  const fadeTo = (targetOpacity: number, durationMs: number) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    const startTime = performance.now();
    const startOpacity = currentOpacityRef.current;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      const nextOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      currentOpacityRef.current = nextOpacity;
      
      if (videoRef.current) {
        videoRef.current.style.opacity = nextOpacity.toString();
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const duration = video.duration;
    const currentTime = video.currentTime;
    if (!duration || isNaN(duration)) return;

    // Trigger 500ms fade-out when 0.55s remain
    const timeRemaining = duration - currentTime;
    if (timeRemaining <= 0.55 && !fadingOutRef.current) {
      fadingOutRef.current = true;
      fadeTo(0, 500);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    currentOpacityRef.current = 0;
    video.style.opacity = '0';

    // 100ms reset delay, then replay and fade-in
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            fadingOutRef.current = false;
            fadeTo(1, 500);
          }).catch((err) => {
            console.warn("Video auto-replay was interrupted:", err);
          });
        }
      }
    }, 100);
  };

  const handlePlay = () => {
    if (!fadingOutRef.current) {
      fadeTo(1, 500);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.style.opacity = '0';
      currentOpacityRef.current = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          fadeTo(1, 500);
        }).catch((err) => {
          console.log("Autoplay waiting for active interaction:", err);
        });
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-moore-black text-moore-white overflow-hidden flex flex-col justify-center pt-24"
    >
      {/* Decorative brand lines */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-moore-white/5 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-moore-white/5 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Vision Copy & Lead Capture Action Block */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left relative z-10">
          
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 bg-moore-blue/10 text-moore-blue border border-moore-blue/20 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-moore-blue animate-pulse" />
              Outstanding Brand Strategy
            </span>
          </div>

          {/* Majestic display h1 using 'Instrument Serif' style requested */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-normal leading-tight tracking-tight text-moore-white select-none"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            We Build Outstanding Brands That Resonate.
          </h1>

          {/* Subheadline detailing values and resonance mechanics */}
          <p className="text-sm md:text-base text-moore-white/70 leading-relaxed font-sans font-light max-w-xl">
            A design and strategy studio combining uncompromising visual prestige with performance frameworks to drive measurable value for your business. Passionate about creating outstanding brands that add value to you and resonate with your audience.
          </p>

          <div className="space-y-6 pt-4 max-w-lg">
            {/* Email subscription row styled with Liquid Glass */}
            <form onSubmit={handleSubscribe} className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 w-full border border-moore-white/10 shadow-xl">
              <input
                type="email"
                placeholder={subscribed ? "Subscription confirmation secure! ✨" : "Enter your email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                className="transparent email input text-moore-white placeholder:text-moore-white/40 text-sm md:text-base flex-1 bg-transparent border-none outline-none focus:ring-0 focus:outline-none"
                required
              />
              <button
                type="submit"
                disabled={subscribed}
                aria-label="Subscribe to newsletter"
                className="bg-moore-white hover:bg-moore-blue hover:text-moore-white text-moore-black rounded-full p-3.5 flex items-center justify-center transition-all shrink-0 active:scale-95 cursor-pointer"
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </form>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              {/* Primary solid brand CTA button transitioning cleanly to dark-blue on hover */}
              <a
                href="#contact"
                className="bg-moore-blue text-moore-white hover:bg-moore-blue-dark hover:scale-[1.02] tracking-widest font-mono text-xs uppercase px-8 py-4 transition-all duration-300 shadow-lg inline-flex items-center gap-3 font-semibold"
              >
                <span>BUILD YOUR LEGACY</span>
                <span className="font-sans text-sm">→</span>
              </a>

              {/* Manifesto visual action */}
              <a
                href="#methodology"
                className="liquid-glass rounded-full px-6 py-3 text-moore-white text-xs font-mono tracking-widest uppercase hover:bg-moore-white/5 hover:text-moore-blue transition-colors inline-block"
              >
                Our Manifesto
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Image Asset & Loop Video behavior */}
        <div className="lg:col-span-5 relative z-10">
          <div className="aspect-[4/5] bg-moore-black border border-moore-white/10 relative overflow-hidden group shadow-2xl">
            
            {/* Loop Video with exact Javascript fade implementations */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <video
                ref={videoRef}
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
                muted
                autoPlay
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
                onPlay={handlePlay}
                className="w-full h-full object-cover select-none scale-102 translate-y-[17%] transition-opacity duration-100 grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700"
                style={{ opacity: 0 }}
              />
            </div>

            {/* Premium liquid glass frame accents */}
            <div className="absolute inset-0 bg-gradient-to-t from-moore-black via-transparent to-transparent opacity-60 pointer-events-none" />
            
            <div className="absolute bottom-8 left-8 right-8 z-10 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-moore-blue animate-pulse" />
                <span className="text-[10px] font-mono text-moore-white/60 tracking-widest">
                  CINEMATIC LOOP ACTIVE
                </span>
              </div>
              <h3 className="text-lg font-bold tracking-tight text-moore-white uppercase">
                STRATEGIC PRESTIGE STUDY // 26
              </h3>
            </div>
          </div>
        </div>

      </div>

      {/* Social directories aligned directly beneath */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12 w-full flex flex-col sm:flex-row items-center justify-between text-neutral-500 font-mono text-[10px] tracking-widest gap-6">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-moore-blue animate-spin-slow" />
          <span>PASSIONATE ABOUT CREATING OUTSTANDING BRANDS</span>
        </div>
        
        <div className="flex gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-moore-blue transition-colors uppercase">INSTAGRAM</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-moore-blue transition-colors uppercase">X / TWITTER</a>
          <a href="#work" className="hover:text-moore-blue transition-colors uppercase">CASE DIRECTORY</a>
        </div>
      </div>
    </section>
  );
}
