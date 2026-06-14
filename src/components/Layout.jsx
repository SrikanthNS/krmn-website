import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import caLogo from "../assets/ca.png";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // When hero is dark and navbar is transparent, use white text.
  // Once scrolled, switch to white bg + dark text.
  const isLight = scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? "bg-white/95 backdrop-blur-sm border-b border-[#E2E8F0]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded bg-white shadow-sm">
            <img
              src={caLogo}
              alt="KRMN & Associates — Chartered Accountants logo"
              className="w-9 h-9 object-contain"
              width="36"
              height="36"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={`font-semibold text-sm tracking-wide transition-colors duration-300 ${
                isLight ? "text-[#0F172A]" : "text-white"
              }`}
            >
              KRMN
            </span>
            <span
              className={`text-[10px] tracking-widest uppercase font-light transition-colors duration-300 ${
                isLight ? "text-slate-400" : "text-white/50"
              }`}
            >
              & Associates
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm transition-colors duration-200 ${
                location.pathname === link.href
                  ? isLight
                    ? "text-[#0F172A] font-medium"
                    : "text-white font-medium"
                  : isLight
                    ? "text-slate-500 hover:text-[#0F172A]"
                    : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`flex items-center gap-1.5 text-sm font-medium px-4 py-2 transition-colors duration-200 ${
              isLight
                ? "bg-[#0F172A] text-white hover:bg-[#1E293B]"
                : "bg-white text-[#0F172A] hover:bg-white/90"
            }`}
          >
            Schedule a Call
            <ArrowUpRight size={14} />
          </Link>
          <a
            href="/app/login"
            className={`flex items-center gap-1.5 text-sm px-3 py-2 border transition-colors duration-200 ${
              isLight
                ? "border-slate-300 text-slate-600 hover:text-[#0F172A] hover:border-[#0F172A]"
                : "border-white/20 text-white/70 hover:text-white hover:border-white/50"
            }`}
          >
            Employee Login
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-1 transition-colors duration-200 ${
            isLight ? "text-[#0F172A]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu — always white bg */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-[#E2E8F0] px-6 pb-6 pt-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block py-3 text-sm text-slate-600 border-b border-slate-100 hover:text-[#0F172A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 flex items-center justify-center gap-1.5 bg-[#0F172A] text-white text-sm font-medium py-3"
            >
              Schedule a Call
              <ArrowUpRight size={14} />
            </Link>
            <a
              href="/app/login"
              className="mt-2 flex items-center justify-center gap-1.5 border border-slate-300 text-slate-600 text-sm py-3 hover:border-[#0F172A] hover:text-[#0F172A] transition-colors"
            >
              Employee Login
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex flex-col leading-none">
                <span className="text-white font-sans font-semibold text-sm tracking-wide">
                  KRMN
                </span>
                <span className="text-white/40 text-[10px] tracking-editorial uppercase font-light">
                  & Associates
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm font-sans leading-relaxed max-w-xs">
              Chartered Accountants. Trusted advisors to businesses across India
              since 2011.
            </p>
            <p className="text-white/50 text-xs mt-4 font-sans tracking-wide uppercase">
              ICAI FRN: 013727S
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-white/40 text-[10px] tracking-editorial uppercase mb-5 font-sans">
              Services
            </p>
            <ul className="space-y-3">
              {[
                ["Audit & Assurance", "/services#audit"],
                ["Direct Tax", "/services#direct-tax"],
                ["Indirect Tax", "/services#indirect-tax"],
                ["CFO Advisory", "/services#cfo-advisory"],
                ["Corporate Law", "/services#corporate-law"],
                ["Valuation", "/services#valuation"],
                ["Startup Advisory", "/services#startup-advisory"],
                ["Regulatory Compliance", "/services#compliance"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-white/60 text-sm hover:text-white transition-colors font-sans"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white/40 text-[10px] tracking-editorial uppercase mb-5 font-sans">
              Company
            </p>
            <ul className="space-y-3">
              {[
                ["About", "/about"],
                ["Our Partners", "/about#partners"],
                ["Careers", "/careers"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-white/60 text-sm hover:text-white transition-colors font-sans"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/40 text-[10px] tracking-editorial uppercase mb-5 font-sans">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@krmn.in"
                  className="text-white/60 text-sm hover:text-white transition-colors font-sans"
                >
                  info@krmn.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+919036635523"
                  className="text-white/60 text-sm hover:text-white transition-colors font-sans"
                >
                  +91 90366 35523
                </a>
              </li>
              <li>
                <p className="text-white/60 text-xs leading-relaxed font-sans">
                  No.1231, Flat F01, Sai Krishna Residency,
                  <br />
                  48th Cross, 37th Main,
                  <br />
                  Poornapragna Layout,
                  <br />
                  Bengaluru – 560 061
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-white/50 text-xs font-sans">
            © {new Date().getFullYear()} KRMN & Associates. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-sans">
            Chartered Accountants · Bengaluru, India
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
