import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full mix-blend-overlay filter blur-[120px] animate-pulse" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-3xl"
        >
          Ready to build something <span className="italic text-neutral-400">extraordinary?</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-xl text-neutral-400 mb-12 max-w-xl"
        >
          Let's discuss how we can help your brand grow and succeed in the digital landscape.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:scale-105 transition-transform duration-300 relative group overflow-hidden"
        >
          <span className="relative z-10">Start Your Project</span>
          <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
        </motion.button>
      </div>
    </section>
  );
}
