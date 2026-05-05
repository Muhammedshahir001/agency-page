import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

function AnimatedSphere() {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color="#ffffff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        wireframe
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-black z-0 pointer-events-none" />

      {/* 3D Canvas */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
              We Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
                Digital Growth
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-neutral-400 max-w-md"
          >
            Creative marketing solutions powered by data and design. We transform brands for the modern digital era.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">
              Start a Project
            </button>
            <button className="px-8 py-4 bg-transparent border border-neutral-700 text-white font-semibold rounded-full hover:border-white hover:bg-white/5 transition-all">
              Our Work
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs tracking-widest text-neutral-500 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-neutral-800 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-white absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
