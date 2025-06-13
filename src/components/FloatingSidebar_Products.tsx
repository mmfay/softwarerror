// src/components/FloatingSidebar.tsx

export default function FloatingSidebar() {
  return (
    <aside className="fixed top-1/2 left-6 transform -translate-y-1/2 w-60 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-4 text-sm z-40">
      <h2 className="text-lg font-semibold text-white mb-4">Products</h2>
      <ul className="flex flex-col space-y-2 text-white/90">
        <a href="/products/nutrigym" className="hover:text-white transition">💡 Nutrigym</a>
        <a className="hover:text-white transition">💡 Costshare</a>
      </ul>
    </aside>
  );
}
