// src/app/development/page.tsx
import FloatingNav from "@/components/FloatingNav";
import FloatingSidebar from "@/components/FloatingSidebar";

export default function DevelopmentPage() {
  return (
    <>
      <FloatingNav />
      <FloatingSidebar />
      <main className="min-h-screen flex items-center justify-center pl-72 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <h1 className="text-3xl font-bold">Welcome to the Development Page!</h1>
      </main>
    </>
  );
}
