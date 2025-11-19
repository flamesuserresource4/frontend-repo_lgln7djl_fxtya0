import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Catalog from './components/Catalog';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Catalog />
        <Features />
      </main>
      <footer id="contact" className="border-t border-white/10 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-12 text-cyan-100/70 text-sm">
          <p>© {new Date().getFullYear()} Astra Diamonds. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
