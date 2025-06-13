export default function FloatingNav() {
  const linkClass =
    "px-3 py-1 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700";

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="mx-auto mt-6 px-4 w-full max-w-4xl pointer-events-auto">
        <div className="bg-white/50 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg px-6 py-4 flex items-center justify-between">
          <nav className="flex gap-2 text-sm text-gray-700 dark:text-gray-200">
            <a href="/" className={linkClass}>Home</a>
            <a href="/products" className={linkClass}>Products</a>
            <a href="/development" className={linkClass}>Development</a>
            <a href="/about" className={linkClass}>About</a>
            <a href="/contact" className={linkClass}>Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
