import { MetricItem } from '../types';

interface MetricStripProps {
  metrics?: MetricItem[];
}

const DEFAULT_METRICS: MetricItem[] = [
  { id: '1', value: '99.4%', label: 'SYSTEM AVAILABILITY /\nAUTOMATIC DISPATCH RATE' },
  { id: '2', value: '450k+', label: 'TRANSACTIONS PROCESS /\nSECURE ON-CHAIN OPS' },
  { id: '3', value: '14ms', label: 'MEAN LATENCY /\nTELEMETRY RESPONSE CYCLE' },
  { id: '4', value: '180+', label: 'GLOBAL ENTERPRISE /\nACTIVE AGENCY PARTNERS' },
];

export default function MetricStrip({ metrics = DEFAULT_METRICS }: MetricStripProps) {
  return (
    <section id="metrics" className="bg-moore-white text-moore-black border-b border-moore-black/10">
      <div className="max-w-7xl mx-auto px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 select-none">
          {metrics.map((metric, idx) => (
            <div
              key={metric.id}
              id={`metric-card-${metric.id}`}
              className={`p-8 md:p-10 flex flex-col md:flex-row items-baseline md:items-center justify-between gap-4 border-b sm:border-b-0 border-moore-black/10
                ${idx < 3 ? 'lg:border-r border-moore-black/10' : ''}
                ${idx % 2 === 0 ? 'sm:border-r border-moore-black/10' : ''}
                ${idx === 2 ? 'sm:border-b-0' : ''}
                ${idx === 3 ? 'border-b-0' : ''}
              `}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 w-full justify-between">
                {/* Numeric value styled with robust tracking */}
                <span className="text-4xl md:text-5xl font-black tracking-tighter text-moore-black font-sans shrink-0 hover:text-moore-blue transition-colors duration-300">
                  {metric.value}
                </span>
                
                {/* Micro-label with double line stack */}
                <div className="text-[10px] md:text-xs text-neutral-500 font-mono leading-tight tracking-wider uppercase text-left whitespace-pre-line select-none">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
