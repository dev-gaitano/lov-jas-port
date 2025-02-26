
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Films from "@/components/Films";
import About from "@/components/About";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Films />
      <About />
    </main>
  );
};

export default Index;
