import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);

  // Mouse interaction for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), {
    stiffness: 120,
    damping: 15,
  });

  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), {
    stiffness: 120,
    damping: 15,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    x.set(e.clientX - rect.left - width / 2);
    y.set(e.clientY - rect.top - height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-black">

      {/* Animated Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[120px] top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[100px] bottom-[-100px] right-[-100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          {/* Title */}
          <div>
            <h5 className="text-sm tracking-[0.3em] text-white/40 mb-4">
              ABOUT US
            </h5>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              We design <span className="text-white/60">the future</span>
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
            <p>
              Our agency sits at the intersection of data, design, and technology.
              We don’t just build products — we craft digital ecosystems that scale.
            </p>
            <p>
              Every pixel, every interaction, and every line of code is engineered
              with purpose — delivering both performance and aesthetic excellence.
            </p>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-fit px-6 py-3 rounded-full bg-white text-black font-medium transition shadow-lg hover:shadow-xl"
          >
            Get Started →
          </motion.button>

          {/* Stats */}
          <div className="flex gap-12 pt-8 border-t border-white/10">
            {[
              { value: "98%", label: "Client Retention" },
              { value: "150+", label: "Projects Shipped" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT VISUAL (3D CARD + PARALLAX) */}
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleLeave}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1200,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Floating Card Container */}
          <div className="relative rounded-3xl overflow-hidden p-3 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
              alt="workspace"
              className="rounded-2xl w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
            />

            {/* Light reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition duration-500"></div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h5 className="text-white font-semibold">
                    Award Winning
                  </h5>
                  <p className="text-xs text-neutral-400">
                    Design Agency 2026
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}