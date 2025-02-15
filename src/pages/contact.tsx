import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [requestType, setRequestType] = useState("General Request");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate the mailto link dynamically
    const mailtoLink = `mailto:frontdesk@hungryllama.com?subject=${encodeURIComponent(requestType)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open the mail client
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded"
              value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded"
              value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Request Type</label>
            <select className="w-full p-2 border border-gray-300 rounded"
              value={requestType} onChange={(e) => setRequestType(e.target.value)}>
              <option>General Request</option>
              <option>Restaurant</option>
              <option>Office</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded"
              value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
            Send Email
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
