import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="The Hungry Llama Logo"
          width={150} // Adjust size as needed
          height={50}
          className="cursor-pointer"
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/menu" className="hover:underline">Menu</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
