import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center text-center min-h-screen p-8">
        {/* Hero Section */}
        <section
          className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }} // Ensure this matches the filename exactly
        >
          <div className="bg-black bg-opacity-60 text-white p-10 rounded">
            <h1 className="text-4xl font-bold">Where Good Food Meets Great Company</h1>
          </div>
        </section>

        {/* Introduction */}
        <section className="mt-12 max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-800">Welcome to The Hungry Llama</h2>
          <p className="text-gray-600 mt-4">
            Experience the bold flavors of South America with our fresh and locally sourced dishes.
            Enjoy delicious meals in a warm, inviting atmosphere.
          </p>
        </section>

        {/* Call-to-Action */}
        <section className="mt-8">
          <a href="/menu" className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition">
            View Our Menu
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
