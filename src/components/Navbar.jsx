import { Menu, Diamond, ShoppingCart, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 border-b border-white/10 bg-slate-900/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Diamond className="w-6 h-6 text-cyan-300" />
          <span className="text-white font-semibold">Astra Diamonds</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-cyan-100/80">
          <a href="#browse" className="hover:text-white">Shop</a>
          <a href="#why" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-cyan-100/80 hover:bg-white/10">
            <Search className="w-4 h-4" />
            <span className="text-sm">Search</span>
          </button>
          <button className="relative p-2 rounded-lg hover:bg-white/10 text-white">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 text-[10px] bg-cyan-400 text-slate-900 font-bold rounded-full px-1">0</span>
          </button>
          <button className="sm:hidden p-2 rounded-lg hover:bg-white/10 text-white">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
