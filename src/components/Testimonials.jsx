import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ---------------- DATA ---------------- */
const testimonials = [
  {
    quote: "Working with them completely transformed our digital presence. Our conversion rates have doubled.",
    author: "Sarah Jenkins",
    role: "CMO, Aura Skincare",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "They don’t just build websites — they craft brand experiences that truly stand out.",
    author: "David Chen",
    role: "Founder, Nova Tech",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "Incredibly strategic and detail-oriented. They delivered beyond expectations.",
    author: "Emily Thompson",
    role: "Marketing Director, Vibe Energy",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote: "Incredibly strategic and detail-oriented. They delivered beyond expectations.",
    author: "Emily Thompson",
    role: "Marketing Director, Vibe Energy",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

/* ---------------- CARD ---------------- */
function Card({ data, position }) {
  const variants = {
    center: {
      scale: 1,
      x: 0,
      rotateY: 0,
      opacity: 1,
      zIndex: 10,
    },
    left: {
      scale: 0.85,
      x: -260,
      rotateY: 25,
      opacity: 0.4,
      zIndex: 1,
    },
    right: {
      scale: 0.85,
      x: 260,
      rotateY: -25,
      opacity: 0.4,
      zIndex: 1,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={position}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="absolute w-[320px] md:w-[500px]"
      style={{ transformPerspective: 1200 }}
    >
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] text-center">
        
        <img
          src={data.image}
          className="w-16 h-16 rounded-full mx-auto mb-6 border border-white/20"
        />

        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
          “{data.quote}”
        </p>

        <h4 className="text-white font-semibold">{data.author}</h4>
        <p className="text-neutral-400 text-sm">{data.role}</p>
      </div>
    </motion.div>
  );
}

/* ---------------- MAIN ---------------- */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(next, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const pause = () => clearInterval(intervalRef.current);
  const resume = () => {
    intervalRef.current = setInterval(next, 4000);
  };

  return (
    <section
      className="relative py-32 overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"></div>

      {/* GLOW LIGHT */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[120px] top-[-100px] left-[10%]"></div>
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[100px] bottom-[-100px] right-[10%]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-20">
          What Our Clients Say
        </h2>

        {/* 3D CAROUSEL */}
        <div className="relative w-full h-[420px] flex items-center justify-center">

          {testimonials.map((t, i) => {
            const prevIndex =
              (index - 1 + testimonials.length) % testimonials.length;
            const nextIndex = (index + 1) % testimonials.length;

            let position = "hidden";

            if (i === index) position = "center";
            else if (i === prevIndex) position = "left";
            else if (i === nextIndex) position = "right";

            if (position === "hidden") return null;

            return <Card key={i} data={t} position={position} />;
          })}
        </div>

        {/* DOTS */}
        <div className="flex gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-white"
                  : "w-2 bg-neutral-600 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}