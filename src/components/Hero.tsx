const Hero = () => {
    return (
      <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded">
          <h2 className="text-white text-4xl font-bold">Where Good Food Meets Great Company</h2>
        </div>
      </section>
    );
  };
  
  export default Hero;
  