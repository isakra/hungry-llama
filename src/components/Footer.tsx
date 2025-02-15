import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10">
      <Image src="/logo.png" alt="The Hungry Llama Logo" width={100} height={40} className="mx-auto mb-2" />
      <p>1404 Food Road | Call: 555-3212 | Email: frontdesk@hungryllama.com</p>
    </footer>
  );
};

export default Footer;
