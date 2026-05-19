import { useEffect, useState, useCallback, memo } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Gallery", to: "/gallery" },
  { label: "Podcast", to: "/podcast" },
  { label: "Contact", to: "/contact" },
];

export const Logo = memo(({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center select-none ${className}`} aria-label="Media Works Studio home">
    <img src={logoImg} alt="Media Works Studio" className="h-12 md:h-14 w-auto object-contain" loading="eager" />
  </Link>
));

const Navbar = memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  const handleMenuClose = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || location.pathname !== "/" ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-20">
        <Logo />
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
                    active ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-xs uppercase tracking-[0.25em] bg-primary text-primary-foreground hover:bg-primary-deep transition-colors"
        >
          Book Session
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-foreground p-2 -mr-2"
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex flex-col"
          >
            <div className="container flex items-center justify-between h-20">
              <Logo />
              <button onClick={handleMenuClose} aria-label="Close navigation menu" className="p-2 -mr-2">
                <X size={24} />
              </button>
            </div>
            <ul className="flex-1 flex flex-col items-center justify-center gap-8">
              {links.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * i } }}
                >
                  <Link
                    onClick={handleMenuClose}
                    to={l.to}
                    className="font-display text-4xl md:text-5xl uppercase tracking-wide hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
