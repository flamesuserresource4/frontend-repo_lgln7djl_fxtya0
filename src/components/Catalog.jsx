import { useEffect, useState } from 'react';

const backend = import.meta.env.VITE_BACKEND_URL || '';

export default function Catalog() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${backend}/api/diamonds`);
        const data = await res.json();
        setItems(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="browse" className="relative py-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Shop Diamonds</h2>
            <p className="text-cyan-100/80 mt-2">Curated selection. Realtime availability.</p>
          </div>
        </div>

        {loading ? (
          <p className="text-cyan-100/80 mt-10">Loading catalog…</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.length === 0 ? (
              <div className="col-span-full text-cyan-100/70">No diamonds found yet. Add some via the backend.</div>
            ) : (
              items.map((d) => (
                <div key={d.id} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                  {d.images?.[0] ? (
                    <img src={d.images[0]} alt={d.name} className="w-full h-48 object-cover" />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-slate-800 to-slate-700" />
                  )}
                  <div className="p-5">
                    <h3 className="text-white font-semibold">{d.name}</h3>
                    <p className="text-cyan-100/80 text-sm mt-1">{d.carat} ct • {d.cut} • Color {d.color} • Clarity {d.clarity}</p>
                    <p className="text-cyan-300 font-bold mt-3">${'{'}d.price.toLocaleString(){'}'}</p>
                    <button className="mt-4 w-full px-4 py-2 rounded-lg bg-cyan-400/90 hover:bg-cyan-400 text-slate-900 font-semibold">Add to Cart</button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
