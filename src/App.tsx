import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricStrip from './components/MetricStrip';
import Methodology from './components/Methodology';
import Services from './components/Services';
import WorkMatrix from './components/WorkMatrix';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-moore-black text-moore-white antialiased selection:bg-moore-blue selection:text-moore-white">
      {/* Sticky Premium Navigation */}
      <Navbar />

      {/* 1. Cinematic Split Hero (Dark Canvas Setup) */}
      <Hero />

      {/* 2. Metric Stat Strip (Light Canvas Setup) */}
      <MetricStrip />

      {/* 3. Horizontal Methodology Showcase (Light Canvas Setup) */}
      <Methodology />

      {/* 4. Six-Pack Service Bento Grid (Dark Canvas Setup) */}
      <Services />

      {/* 5. 2x2 Asymmetric Media Matrix (Light Canvas Setup) */}
      <WorkMatrix />

      {/* 6. High-Conversion Lead Capture Footer with Oversized Marquee (Dark Canvas Setup) */}
      <Footer />
    </div>
  );
}
