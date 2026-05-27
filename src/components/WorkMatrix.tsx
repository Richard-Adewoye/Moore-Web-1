import { useState } from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';

interface PortfolioProject {
  id: string;
  src: string;
  title: string;
  category: string;
  outcomeMetric: string;
  year: string;
}

const PROJECTS: PortfolioProject[] = [
  {
    id: 'p-1',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    title: 'THE MONOLITH RESIDENCE',
    category: 'MINIMAL ARCHITECTURE',
    outcomeMetric: '+142% EMOTIONAL RESONANCE',
    year: '2026',
  },
  {
    id: 'p-2',
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    title: 'TACTILE SILICON NODE',
    category: 'PRODUCT INDUSTRIAL DESIGN',
    outcomeMetric: 'SUB-12MS INTERACTIVE FEEDBACK',
    year: '2025',
  },
  {
    id: 'p-3',
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    title: 'COBALT APEX HQ',
    category: 'VISUAL SYSTEM LAYOUT',
    outcomeMetric: '+380K ACTIVE TRANSACTIONS',
    year: '2026',
  },
  {
    id: 'p-4',
    src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=80',
    title: 'CURIOUS ORGANIC SHELL',
    category: 'DIGITAL GRAPHICS MODEL',
    outcomeMetric: '99.4% TELEMETRY RESPONSIVENESS',
    year: '2026',
  },
];

export default function WorkMatrix() {
  const [activeTab, setActiveTab] = useState<'all' | 'digital' | 'analog'>('all');

  return (
    <section id="work" className="bg-moore-white text-moore-black py-28 border-b border-moore-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-moore-black/10 pb-12 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-moore-blue" />
              <span className="font-mono text-xs text-moore-blue tracking-widest uppercase font-semibold">SELECTED WORKS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-sans">
              Asymmetric Portfolio
            </h2>
          </div>
          
          {/* Subtle category toggle switch conforming strictly to the color palette constraints */}
          <div className="flex items-center bg-neutral-100 p-1 rounded-sm border border-neutral-200 select-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-widest transition-all
                ${activeTab === 'all' 
                  ? 'bg-moore-black text-moore-white font-bold' 
                  : 'text-neutral-500 hover:text-moore-black'
                }
              `}
            >
              All Cases
            </button>
            <button
              onClick={() => setActiveTab('digital')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-widest transition-all
                ${activeTab === 'digital' 
                  ? 'bg-moore-black text-moore-white font-bold' 
                  : 'text-neutral-500 hover:text-moore-black'
                }
              `}
            >
              Systems
            </button>
            <button
              onClick={() => setActiveTab('analog')}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-widest transition-all
                ${activeTab === 'analog' 
                  ? 'bg-moore-black text-moore-white font-bold' 
                  : 'text-neutral-500 hover:text-moore-black'
                }
              `}
            >
              Aesthetic
            </button>
          </div>
        </div>

      </div>

      {/* 2x2 asymmetric visual matrix with zero gap spacing requested */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-moore-black/10">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            id={`project-matrix-${project.id}`}
            className="group relative overflow-hidden aspect-square md:aspect-[4/3] w-full bg-moore-black cursor-pointer border-r border-b border-moore-black/5"
          >
            {/* Base Image with grayscale transitions */}
            <img
              src={project.src}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] select-none grayscale-20 brightness-95 group-hover:grayscale-0"
            />

            {/* Solid moore-blue (#001CFF) color tint overlay on hover */}
            <div className="absolute inset-0 bg-moore-blue/0 group-hover:bg-moore-blue/85 transition-all duration-450 flex flex-col justify-between p-8 md:p-12 z-10" />

            {/* Clean visual metadata overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 z-20 text-moore-white">
              
              {/* Category tag */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-moore-white group-hover:bg-moore-black transition-all" />
                  <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>
                <span className="text-[10px] md:text-sm text-moore-white/40 group-hover:text-moore-white/80 transition-colors font-mono">
                  {project.year}
                </span>
              </div>

              {/* Subtitle / Title description */}
              <div className="space-y-3">
                
                {/* Micro metrics demonstrating client outcome layout */}
                <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-350 delay-75">
                  <span className="inline-block bg-white/20 text-white font-mono text-[9px] md:text-[10px] tracking-widest px-2 py-1 uppercase rounded-sm">
                    OUTCOME: {project.outcomeMetric}
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <h3 className="text-xl md:text-3xl font-black tracking-tight leading-none uppercase">
                    {project.title}
                  </h3>
                  
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
