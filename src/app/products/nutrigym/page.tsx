// src/app/development/page.tsx
import FloatingNav from "@/components/FloatingNav";
import FloatingSidebar from "@/components/FloatingSidebar_Products";

export default function ProductsPage() {
  return (
    <>
      <FloatingNav />
      <FloatingSidebar />
      <main className="min-h-screen bg-gradient-to-br from-purple-400 to-orange-200 flex flex-col items-center justify-center pl-72 min-h-screen bg-gradient-to-br from-purple-400 to-orange-200 text-white">
        <h1 className="text-3xl font-bold">Nutrigym</h1>
        <p className="text-md max-w-2xl text-gray-500">
          Nutrigyms goal is to be a workout and nutrition tracking application. To date we have implemented nutritional tracking with more updates to come.
        </p>
      </main>
    </>
  );
}
