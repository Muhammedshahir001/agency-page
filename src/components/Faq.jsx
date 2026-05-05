import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- DATA ---------------- */
const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer full-stack web development, UI/UX design, branding, and performance optimization for modern digital products.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Depending on complexity, most projects take between 2 to 6 weeks from planning to deployment.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we provide maintenance, updates, and long-term technical support after project delivery.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We specialize in modern redesigns that improve performance, UI/UX, and conversions.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, and modern animation libraries.",
  },
  {
    question: "Is the website mobile-friendly?",
    answer:
      "Yes, every project is fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
];

/* ---------------- CARD ---------------- */
function FAQCard({ faq, isOpen, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring" }}
      className="w-full max-w-3xl"
      style={{ perspective: 1200 }}
    >
      <div
        onClick={onClick}
        className="cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:bg-white/10 transition-all"
      >
        {/* QUESTION */}
        <div className="flex justify-between items-center">
          <h3 className="text-white text-lg md:text-xl font-semibold">
            {faq.question}
          </h3>

          <span className="text-white text-2xl font-light">
            {isOpen ? "−" : "+"}
          </span>
        </div>

        {/* ANSWER */}
        <AnimatePresence>
          {isOpen && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-neutral-300 mt-4 leading-relaxed"
            >
              {faq.answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ---------------- MAIN ---------------- */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />

      {/* GLOW EFFECTS */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[120px] top-[-120px] left-[10%]" />
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] bottom-[-120px] right-[10%]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-4">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-5 w-full items-center">
          {faqs.map((faq, i) => (
            <FAQCard
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() =>
                setOpenIndex(openIndex === i ? -1 : i)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}