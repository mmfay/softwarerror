// src/components/FloatingSidebar.tsx

export default function FloatingSidebar() {
  return (
    <aside className="fixed top-1/2 left-6 transform -translate-y-1/2 w-60 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-4 text-sm z-40">
      <h2 className="text-lg font-semibold text-white mb-4">Languages</h2>
      <ul className="flex flex-col space-y-2 text-white/90">
        <a className="hover:text-white transition">💡 C</a>
        <a className="hover:text-white transition">💡 Java</a>
        <a className="hover:text-white transition">💡 JavaScript</a>
        <a className="hover:text-white transition">💡 Rust</a>
        <a className="hover:text-white transition">💡 SwiftUI</a>
        <a className="hover:text-white transition">💡 SQL</a>
      </ul>
    </aside>
  );
}
