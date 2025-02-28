import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Films from "@/components/Films";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Featured from "@/components/Featured";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <Hero />
      <Films />
      <Featured />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
