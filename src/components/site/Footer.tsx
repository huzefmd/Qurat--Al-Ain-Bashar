import { Link } from "@tanstack/react-router";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const WhatsApp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-label="WhatsApp">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 2C6.508 2 2.024 6.484 2.024 12.024c0 1.949.573 3.836 1.66 5.462L2 22l4.674-1.63a10.026 10.026 0 0 0 5.376 1.542h.005c5.541 0 10.026-4.485 10.026-10.025S17.596 2 12.05 2z" />
  </svg>
);

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/leadership", label: "Women's Leadership" },
  { to: "/model", label: "Our Model" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/gallery", label: "Our Work" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: WhatsApp, href: "https://wa.me/", label: "WhatsApp" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#2C2118] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      {/* CTA Section */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-amber-400/20 bg-gradient-to-r from-[#3A2B20] to-[#4A3528] p-10 text-center"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
              Join Our Mission
            </p>
            <h2 className="mt-4 text-4xl font-light">
              Together We Can Create
              <span className="text-amber-400"> Lasting Change.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-stone-300">
              Every contribution empowers women, educates children,
              and strengthens communities through compassion,
              creativity, and leadership.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/get-involved"
                className="rounded-full bg-amber-500 px-8 py-3 font-semibold text-[#2C2118] transition hover:scale-105 hover:bg-amber-400"
              >
                Get Involved
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/20 px-8 py-3 transition hover:border-amber-400 hover:text-amber-400"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer Grid */}
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-4">
        {/* Foundation Info */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-400/30 bg-amber-500/10">
              <img src={logo} alt="Foundation Logo" className="h-14 w-14 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold leading-tight">Qurat-Al-Ain<br />Bashar Foundation</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.35em] text-amber-400">The Art of Giving</p>
            </div>
          </div>
          <p className="mt-8 max-w-sm leading-8 text-stone-300">
            A women-founded, women-led and women-operated NGO committed to
            empowering lives through Art, Athleticism and Altruism.
          </p>
          <div className="mt-10 flex gap-4">
            {socials.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={i}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-600 bg-[#3A2B20] text-stone-300 transition hover:border-amber-400 hover:bg-amber-400 hover:text-[#2C2118]"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Explore */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Explore</p>
          <div className="mt-3 h-[2px] w-12 rounded-full bg-amber-400" />
          <ul className="mt-8 space-y-5">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="group inline-flex items-center gap-2 text-stone-300 transition-all duration-300 hover:text-amber-400">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
            Contact
          </p>
          <div className="mt-3 h-[2px] w-12 rounded-full bg-amber-400" />

          <div className="mt-8 space-y-7">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-amber-400" />
              <div>
                <p className="font-medium text-white">Address</p>
                <p className="mt-1 text-sm leading-6 text-stone-300">
                  Bengaluru, Karnataka, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-amber-400" />
              <div>
                <p className="font-medium text-white">Email</p>
                <p className="mt-1 text-sm text-stone-300">
                  info@qabfoundation.org
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 text-amber-400" />
              <div>
                <p className="font-medium text-white">Phone</p>
                <p className="mt-1 text-sm text-stone-300">+91 XXXXX XXXXX</p>
              </div>
            </div>
          </div>
        </motion.div>

      
      </div> {/* closes the grid wrapper */}

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-stone-400">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">
                Qurat-Al-Ain Bashar Foundation
              </span>
            </p>
            <p className="mt-2 text-sm text-stone-500">
              Empowering Lives • Inspiring Futures
            </p>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            <Link to="/privacy" className="text-stone-400 transition hover:text-amber-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-stone-400 transition hover:text-amber-400">
              Terms & Conditions
            </Link>
            <Link to="/cookies" className="text-stone-400 transition hover:text-amber-400">
              Cookies
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
