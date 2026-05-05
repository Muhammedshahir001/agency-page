import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Cursor />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter text-white flex items-center gap-2"
            >
              AGENCY<span className="text-neutral-500 animate-pulse">.</span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black"
          >
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Work />
            <Testimonials />
            <FAQSection/>
            <CTA />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
