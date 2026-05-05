import { motion } from "framer-motion";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import FAQSection from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Cursor />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black"
      >
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Work />
        <Testimonials />
        <FAQSection />
        <CTA />
        <Footer />
      </motion.main>
    </>
  );
}

export default App;