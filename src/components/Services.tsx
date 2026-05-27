interface ServiceBlock {
  id: string;
  title: string;
  sub: string;
  outcome: string;
  bullets: string[];
}

const SERVICES_DATA: ServiceBlock[] = [
  {
    id: 's-1',
    title: 'BRAND STRATEGY & POSITIONING',
    sub: 'CATEGORY LEADERSHIP MAPS',
    outcome: 'We align your core value proposition with elite positioning models to establish premium category status, ensuring your messaging lands with uncompromising audience resonance.',
    bullets: [
      'Core Brand Architecture Systems',
      'Custom Competitive Positioning Maps',
      'Interactive Customer Empathy Frameworks',
      'Editorial Narrative Voice Protocols',
    ],
  },
  {
    id: 's-2',
    title: 'VISUAL IDENTITY & DESIGN SYSTEMS',
    sub: 'PREMIUM AESTHETIC RECALL',
    outcome: 'We design high-contrast visual systems that command instant authority, ensuring absolute visual recall and alignment across all global physical and digital channels.',
    bullets: [
      'High-Performance Logo Suites',
      'Instrument Serif Typographic Pairing',
      'Cohesive Identity Style Systems',
      'Premium Custom Vector Frameworks',
    ],
  },
  {
    id: 's-3',
    title: 'HIGH-CONVERSION DIGITAL EXPERIENCES',
    sub: 'LIQUID GLASS UI LABS',
    outcome: 'We construct beautiful, sub-second responsive interfaces that transform digital navigation into a tactile journey, streamlining conversion loops that skyrocket user activation.',
    bullets: [
      'Frictionless Client Interaction Nodes',
      'Liquid Glass Backdrop Blur Configurations',
      'Robust Micro-interactions & Springs',
      'High-converting E-Commerce Layouts',
    ],
  },
  {
    id: 's-4',
    title: 'AUDIENCE INSIGHTS & RESEARCH',
    sub: 'BEHAVIORAL DATA METRICS',
    outcome: 'We deploy deep quantitative audits to uncover hidden user trends, converting telemetry metrics and client logs into high-value product iterations that maximize retention.',
    bullets: [
      'Quantitative Live Conversion Diagnostics',
      'Target User Persona Behavior Matrices',
      'Competitive Friction Funnel Audits',
      'A/B Interaction Telemetry Diagnostics',
    ],
  },
  {
    id: 's-5',
    title: 'LAUNCH STRATEGY & CREATIVE DIRECTION',
    sub: 'HIGH-IMPACT CAMPAIGN DEPLOY',
    outcome: 'We organize unforgettable campaign launches that capture extreme market attention, projecting uncompromising aesthetic pedigree the moment your product goes online.',
    bullets: [
      'Zero-Flicker Campaign Autoplay Loops',
      'Elite Content Pipeline Direction',
      'Post-Launch Telemetry Infrastructure',
      'Exclusive Launch Assets Packaging',
    ],
  },
  {
    id: 's-6',
    title: 'SUSTAINABLE GROWTH & RETENTION',
    sub: 'LIFETIME VALUE OPTIMIZATION',
    outcome: 'We model compounding analytics funnels to optimize acquisition and customer lifetime cycles, scaling organic brand loyalty and compounding your business value.',
    bullets: [
      'Cohort-based User Retention Maps',
      'Targeted Re-conversion Strategies',
      'Global Lifecycle Optimization Audits',
      'Persistent Local State Tracking Systems',
    ],
  },
];

export default function Services() {
  return (
    <section 
      id="services" 
      className="bg-moore-black text-moore-white py-28 border-b border-moore-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-moore-white/10 pb-12 mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-moore-blue animate-pulse" />
              <span className="font-mono text-xs text-moore-blue tracking-widest uppercase font-semibold">CORE CAPABILITIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-sans">
              Services
            </h2>
          </div>
          
          <div className="max-w-md">
            <p className="text-sm text-moore-white/60 font-sans font-light leading-relaxed">
              We provide a focused collection of creative services designed strictly to maximize value and forge deep resonance. Our solutions ensure clear outcomes and elite performance.
            </p>
          </div>
        </div>

        {/* 3x2 Meticulous Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-moore-white/10">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="p-8 md:p-10 border-b border-r border-moore-white/10 bg-moore-black hover:bg-neutral-950/40 transition-all duration-350 group relative overflow-hidden"
            >
              {/* Subtle blue left edge indicator line that expands on hover */}
              <div className="absolute top-0 bottom-0 left-0 w-[0px] group-hover:w-[3px] bg-moore-blue transition-all duration-300" />
              
              {/* Card Interior Header with Solid Indigo indicator dot */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-moore-blue group-hover:scale-125 transition-transform duration-300" />
                  <h3 className="text-sm font-extrabold tracking-tight text-moore-white font-sans uppercase">
                    {service.title}
                  </h3>
                </div>
                <span className="font-mono text-[9px] text-[#001CFF] border border-moore-blue/30 px-2 py-0.5 rounded-sm">
                  {service.sub}
                </span>
              </div>

              {/* Exact Outcome Paragraph incorporating "Value rule" */}
              <p className="text-xs md:text-sm text-moore-white/70 font-sans font-light leading-relaxed mb-6">
                {service.outcome}
              </p>

              {/* Meticulous ordered deliverables bullet list */}
              <ol className="space-y-3.5 border-t border-moore-white/5 pt-5">
                {service.bullets.map((bullet, bulletIdx) => (
                  <li
                    key={bulletIdx}
                    className="flex items-start gap-3 text-xs text-moore-white/80 hover:text-moore-white transition-colors"
                  >
                    <span className="font-mono text-[10px] text-moore-blue font-bold shrink-0">
                      {(bulletIdx + 1).toString().padStart(2, '0')}.
                    </span>
                    <span className="font-sans leading-tight tracking-wide font-light">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ol>

              {/* Liquid-glass styled hover accent card reflection */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-moore-blue/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
