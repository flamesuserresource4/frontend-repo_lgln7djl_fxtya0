import { ShieldCheck, Sparkles, BadgeCheck } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Lifetime Warranty',
    desc: 'Your diamond is protected with complimentary care and cleaning.'
  },
  {
    icon: Sparkles,
    title: 'Exceptional Brilliance',
    desc: 'Hand‑selected stones that meet our strict light performance criteria.'
  },
  {
    icon: BadgeCheck,
    title: 'Certified & Ethical',
    desc: 'All diamonds are conflict‑free and certified by trusted labs.'
  }
];

export default function Features() {
  return (
    <section id="why" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Why Astra Diamonds</h2>
        <p className="mt-3 text-cyan-100/80 text-center max-w-2xl mx-auto">
          We blend artistry, technology, and transparency to deliver diamonds you can truly trust.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <it.icon className="w-6 h-6 text-cyan-300" />
              <h3 className="mt-4 font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-cyan-100/80 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
