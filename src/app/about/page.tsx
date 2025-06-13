import FloatingNav from "@/components/FloatingNav";

export default function AboutPage() {
  return (
    <>
      <FloatingNav />

      {/* Floating profile image */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 w-44 h-44 rounded-full backdrop-blur-md bg-white/20 shadow-lg border border-white/30 overflow-hidden flex items-center justify-center z-50">
        <img
          src="/images/ME.png" // Use /public/images/ME.png
          alt="Your photo"
          className="w-full h-full object-cover object-[90%_20%]"
        />
      </div>

      {/* Main Content */}
      <main className="min-h-screen bg-gradient-to-br from-purple-400 to-orange-200 flex flex-col items-center justify-center px-6 text-center space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Welcome to <span className="text-blue-500">Softwarerror</span>
        </h1>
        <p className="text-lg max-w-2xl text-gray-600">
          Softwarerror is a forward-thinking development company building high-quality software solutions, products, and tools that empower developers and businesses.
        </p>
        <p className="text-md max-w-2xl text-gray-500">
          From open-source libraries to full-stack applications, we focus on performance, usability, and elegant code. Explore our projects and see how we bring ideas to life through code.
        </p>
      </main>
    </>
  );
}
