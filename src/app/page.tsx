import Image from "next/image";
import FloatingNav from "@/components/FloatingNav";

export default function Home() {
  return (
    <>
      {/* Floating Nav Bar */}
      <FloatingNav />

      {/* Main Rectangle Section */}
      <div className="pt-24 min-h-screen bg-gradient-to-br from-purple-400 to-orange-200 flex flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
        <div className="bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-xl shadow-xl p-8 sm:p-12 max-w-4xl w-full flex flex-col sm:flex-row gap-8 items-center">
          
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/nutrigym/releases/foodTracking.png" // Replace with your actual image path
              alt="Descriptive alt text"
              width={500}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nutrigym new release
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Version 1.0.1 – Released on 6/1/2025
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
              Enter in new food items with nutritional information and log them.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}
