// src/app/development/page.tsx
import FloatingNav from "@/components/FloatingNav";
import FloatingSidebar from "@/components/FloatingSidebar_Development";

export default function DevelopmentPage() {
  return (
    <>
      <FloatingNav />
      <FloatingSidebar />
      <main className="min-h-screen bg-gradient-to-br from-purple-400 to-orange-200 flex items-center justify-center pl-72 min-h-screen bg-gradient-to-br from-purple-400 to-orange-200 text-white">
        <h1 className="text-3xl font-bold">Welcome to the Development Page!</h1>
      </main>
    </>
  );
}
