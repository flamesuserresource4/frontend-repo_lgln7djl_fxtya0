import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/5 px-3 py-1 text-cyan-200/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Certified Conflict‑Free • GIA / IGI
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Brilliant diamonds for every moment
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-cyan-100/80">
            Explore a curated selection of ethically sourced, lab and natural diamonds with exquisite cuts and unparalleled brilliance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#browse" className="px-5 py-3 rounded-xl bg-cyan-400/90 hover:bg-cyan-400 text-slate-900 font-semibold transition shadow-lg shadow-cyan-400/20">
              Browse Diamonds
            </a>
            <a href="#why" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/20 transition">
              Why Choose Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
