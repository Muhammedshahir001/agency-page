import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Share2, PenTool, BarChart3, Smartphone, Zap } from "lucide-react";

/* -------------------- DATA (UNCHANGED) -------------------- */
const services = [
  {
    title: "SEO Optimization",
    description: "Data-driven strategies to improve your search rankings and drive organic traffic.",
    icon: Search,
  },
  {
    title: "Social Media",
    description: "Engaging campaigns that build brand awareness and foster community connection.",
    icon: Share2,
  },
  {
    title: "Brand Identity",
    description: "Memorable design systems that tell your story and set you apart from competitors.",
    icon: PenTool,
  },
  {
    title: "Performance Ads",
    description: "High-converting paid campaigns across Google, Meta, and emerging platforms.",
    icon: BarChart3,
  },
  {
    title: "App Development",
    description: "Sleek, performant mobile applications built for modern user expectations.",
    icon: Smartphone,
  },
  {
    title: "Web Experience",
    description: "Immersive, lightning-fast websites that turn visitors into loyal customers.",
    icon: Zap,
  },
];

/* -------------------- 3D CARD COMPONENT -------------------- */
function ServiceCard({ service, index }) {
  const ref = useRef(null);

  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 120, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 120, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-white/10"></div>

      {/* Glass Card */}
      <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden">
        
        {/* Light reflection (mouse follow illusion) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
          <div className="w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
        </div>

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6"
        >
          <service.icon className="w-6 h-6 text-white" />
        </motion.div>

        <h3 className="text-xl font-semibold mb-3 tracking-tight">
          {service.title}
        </h3>

        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* CTA */}
        <div className="text-sm text-white/70 group-hover:text-white transition">
          Learn More →
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------- MAIN SECTION -------------------- */
export default function Services() {
  return (
    <section className="relative py-28 md:py-36 bg-black overflow-hidden">

      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_40%)]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Our Expertise
          </h2>

          <p className="text-neutral-400 max-w-2xl text-lg">
            We combine strategic thinking with creative excellence to deliver
            measurable results across every digital touchpoint.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}