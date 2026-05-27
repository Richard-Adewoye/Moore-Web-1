import { ArrowRight } from 'lucide-react';

interface MethodStep {
  no: string;
  title: string;
  subtitle: string;
  desc: string;
}

const STEPS: MethodStep[] = [
  {
    no: '01',
    title: 'Deep Audience Discovery',
    subtitle: 'Finding where your value meets their desires',
    desc: 'We immerse ourselves in your ecosystem to isolate the key value triggers of your enterprise. By aligning competitive matrices with your audiences deepest desires, we secure a resilient foundation for outstanding resonance.',
  },
  {
    no: '02',
    title: 'Outstanding Identity Design',
    subtitle: 'Crafting unmistakable visual assets',
    desc: 'We transform raw strategic positioning into unmistakable visual assets styled with high-contrast color balances, liquid glass overlays, and premium display pairings. These assets build effortless brand gravity.',
  },
  {
    no: '03',
    title: 'Market Resonance & Scale',
    subtitle: 'Launching systems built for long-term growth',
    desc: 'We launch fully optimized digital products engineered with premium typography and robust edge routes. This ensures your visitors experience consistent aesthetic prestige and fast conversion pathways.',
  },
];

export default function Methodology() {
  return (
    <section 
      id="methodology" 
      className="bg-moore-white text-moore-black py-28 border-b border-moore-black/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Subheader and Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-moore-black/10 pb-12 mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-moore-blue" />
              <span className="font-mono text-xs text-moore-blue tracking-widest uppercase font-semibold">METHOD VALUE LOOPS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-sans">
              Our Methodology
            </h2>
          </div>
          
          <div className="max-w-md">
            <p className="text-sm text-neutral-500 font-sans font-light leading-relaxed select-none">
              Passionate about creating outstanding brands that add value to you and resonate with your audience. We deploy an airtight sequence that replaces subjective trends with performance frameworks.
            </p>
          </div>
        </div>

        {/* 3-Column horizontal methodology split by elegant vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-moore-black/10">
          {STEPS.map((step) => (
            <div
              key={step.no}
              id={`methodology-step-${step.no}`}
              className="p-8 md:p-12 border-b border-r border-moore-black/10 transition-all duration-300 group hover:bg-neutral-50 relative overflow-hidden flex flex-col justify-between min-h-[420px]"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-moore-blue transition-all duration-350" />
              
              <div>
                {/* Large sequence number styled in low-contrast typography */}
                <div className="text-7xl font-black text-neutral-100 font-sans tracking-tight mb-6 group-hover:text-moore-blue/10 transition-colors duration-300 select-none">
                  {step.no}
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-moore-black uppercase select-all">
                    {step.title}
                  </h3>
                  
                  {/* Subtitle meeting user value constraints */}
                  <p className="text-xs font-mono font-semibold text-moore-blue tracking-wider uppercase">
                    {step.subtitle}
                  </p>
                </div>

                {/* 2-sentence description */}
                <p className="mt-6 text-sm text-neutral-600 font-sans font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Action indicator trigger on hover */}
              <div className="pt-8 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 group-hover:text-moore-blue transition-colors">
                  INTELLIGENT RUN-TIME // SECURE
                </span>
                <span className="text-neutral-300 group-hover:text-moore-blue group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Call-Out Box with Alternating visual split */}
        <div className="mt-20 border border-moore-black/10 p-8 md:p-12 bg-neutral-50 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rounded-sm select-none">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono text-moore-blue uppercase tracking-widest font-bold">
              THE BRAND MANIFESTO
            </span>
            <p className="text-lg md:text-xl text-moore-black font-light leading-relaxed font-sans">
              "An outstanding brand isn't standard compliance — it is an unmistakable sensory signature. True audience resonance behaves like an organic gravity well, pulling visitors beyond short-lived aesthetics towards deep functional affinity. We commit to a rigorous partnership that drives measurable conversion value."
            </p>
          </div>
          <a
            href="#contact"
            className="bg-moore-black text-moore-white hover:bg-moore-blue hover:text-moore-white font-mono text-xs tracking-widest uppercase px-8 py-4 shrink-0 transition-colors inline-block"
          >
            ALIGN ENGAGEMENT
          </a>
        </div>

      </div>
    </section>
  );
}
