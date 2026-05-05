import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- DATA ---------------- */
const projects = [
  {
    title: "Aura Skincare",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Nova Tech",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Vibe Energy",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Elevate Real Estate",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
  },
];

/* ---------------- CARD ---------------- */
function ProjectCard({ project }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]));
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]));

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      whileHover={{ scale: 1.04 }}
      className="relative min-w-[85vw] md:min-w-[45vw] lg:min-w-[35vw] h-[65vh] rounded-3xl overflow-hidden group cursor-pointer"
    >
      {/* Glow layer */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-white/10"></div>

      {/* Card */}
      <div className="relative h-full w-full rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500" />

        {/* Content */}
        <div className="absolute bottom-8 left-8 z-10">
          <p className="text-xs uppercase tracking-widest text-neutral-300 mb-2">
            {project.category}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {project.title}
          </h3>
          <div className="mt-2 text-white/70 group-hover:text-white transition">
            View Case Study →
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- MAIN ---------------- */
export default function Work() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;

    const isMobile = window.innerWidth < 768;

    // ❗ MOBILE: disable GSAP horizontal scroll
    if (isMobile) return;

    const totalWidth = el.scrollWidth;
    const scrollDistance = totalWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-white"></div>

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[120px] top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[100px] bottom-[-100px] right-[-100px]"></div>
      </div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Selected Work
          </h2>
          <p className="text-neutral-400 max-w-md">
            A curated selection of our most impactful projects.
          </p>
        </div>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="
            flex items-center gap-10 px-6 md:px-12 
            h-[80vh] 
            overflow-x-auto md:overflow-visible 
            scroll-smooth
          "
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}