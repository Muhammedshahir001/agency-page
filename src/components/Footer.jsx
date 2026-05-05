import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-10 overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-black border-t border-white/10">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] top-[-100px] left-[10%]" />
        <div className="absolute w-[300px] h-[300px] bg-white/10 blur-[100px] bottom-[-100px] right-[10%]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-bold mb-4">
              AGENCY<span className="text-neutral-500">.</span>
            </h3>

            <p className="text-neutral-400 max-w-md mb-6">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">

              <Icon><FaInstagram /></Icon>
              <Icon><FaFacebookF /></Icon>
              <Icon><FaLinkedinIn /></Icon>
              <Icon><FaTwitter /></Icon>

            </div>
          </motion.div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-neutral-400">
              {["Home", "Work", "Services", "About", "Contact"].map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-neutral-400 text-sm">
              <li className="flex gap-2">
                <MapPin size={16} /> Kerala, India
              </li>
              <li className="flex gap-2">
                <Phone size={16} /> +91 98765 43210
              </li>
              <li className="flex gap-2">
                <Mail size={16} /> hello@agency.com
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex justify-between text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Agency</p>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ICON WRAPPER */
function Icon({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 6 }}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition"
    >
      {children}
    </motion.div>
  );
}