import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const menuItems = [
  { id: 1, name: "Chicken Caesar Salad", description: "Romaine Lettuce, Grilled Chicken", price: 12.99, image: "/images/salad.png" },
  { id: 2, name: "Grilled Chicken Panini", description: "Mozzarella, Roasted Peppers", price: 10.99, image: "/images/panini.png" },
  { id: 3, name: "Buffalo Chicken Wrap", description: "Crispy Buffalo Chicken", price: 11.99, image: "/images/buffalo_wrap.png" },
  { id: 4, name: "Classic Cobb Salad", description: "Grilled Chicken, Bacon", price: 13.99, image: "/images/cobb_salad.png" },
  { id: 5, name: "Greek Chicken Salad", description: "Grilled Chicken, Feta", price: 12.99, image: "/images/greek_salad.png" },
];

const Menu = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg p-4">
              {/* Use next/image correctly */}
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded"
                unoptimized // This prevents issues with local static images
              />
              <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-green-600 font-bold mt-2">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Menu;
