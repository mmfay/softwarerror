// src/app/development/page.tsx
import FloatingNav from "@/components/FloatingNav";

export default function DevelopmentPage() {
  return (
    <>
    <FloatingNav />
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to the Development Page!</h1>
    </main>
    </>
  );
}
