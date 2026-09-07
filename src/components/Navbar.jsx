
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const mainNavItems = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const pythonNavItems = [
  { name: "Home", href: "/python" },
  { name: "Skills", href: "/python#python-skills" },
  { name: "Projects", href: "/python#python-projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = ({ pythonPage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = pythonPage ? pythonNavItems : mainNavItems;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // baaki tumhara existing return code yahan rahega...

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-2 bg-[#111827]/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "py-3 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/5"
      )}
    >
      {/* Main Navbar */}
      <div className="container mx-auto relative flex items-center justify-between px-6">

        {/* Logo - Left */}
        <a
          href="#hero"
          className="text-lg md:text-xl font-bold flex items-center shrink-0"
        >
          <span className="text-white">
            Suraj
          </span>

          <span className="text-primary ml-2">
            portfolio
          </span>
        </a>

        {/* Python - EXACT CENTER */}
        <a
          href="/python"
          className="
            hidden md:inline-flex
            absolute
            left-1/2
            -translate-x-1/2
            items-center
            gap-1.5
            px-5
            py-1.5
            rounded-full
            border
            border-primary/50
            bg-primary/10
            text-primary
            text-sm
            font-semibold
            shadow-[0_0_15px_rgba(139,92,246,0.25)]
            hover:bg-primary/20
            hover:border-primary
            hover:shadow-[0_0_25px_rgba(139,92,246,0.45)]
            hover:scale-105
            transition-all
            duration-300
          "
        >
          <span>🐍</span>
          <span>Python Development</span>
        </a>

        {/* Desktop Navigation - Right */}
        <div className="hidden md:flex items-center space-x-7 lg:space-x-8 ml-auto">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="
                text-sm
                text-gray-300
                hover:text-primary
                transition-all
                duration-300
                font-medium
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden ml-auto p-2 text-white z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-[#0F172A]/98 backdrop-blur-xl z-40",
            "flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-7 text-lg">

            {/* Python */}
            <a
              href="/python"
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                border
                border-primary/50
                bg-primary/10
                text-primary
                font-semibold
                shadow-[0_0_20px_rgba(139,92,246,0.25)]
                hover:bg-primary/20
                transition-all
                duration-300
              "
              onClick={() => setIsMenuOpen(false)}
            >
              🐍 Python
            </a>

            {/* Mobile Nav Items */}
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="
                  text-gray-300
                  hover:text-primary
                  transition-colors
                  duration-300
                  font-medium
                "
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

          </div>
        </div>

      </div>
    </nav>
  );
};