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
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/python#python-skills" },
  { name: "Projects", href: "/python#python-projects" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = ({ pythonPage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect actual touch/mobile devices even when
  // Chrome "Desktop site" is enabled.
  const [isTouchDevice, setIsTouchDevice] = useState(false);

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

  useEffect(() => {
    const checkDevice = () => {
      const touch =
        window.matchMedia("(pointer: coarse)").matches ||
        navigator.maxTouchPoints > 0;

      setIsTouchDevice(touch);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100]",
        "transition-all duration-300",
        isScrolled
          ? "py-2 bg-[#111827]/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "py-3 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/5"
      )}
    >
      {/* =========================================================
          NAVBAR HEADER
      ========================================================== */}

      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-between h-10 md:h-11">
          {/* Logo */}
          <a
            href={pythonPage ? "/python" : "/"}
            onClick={closeMenu}
            className="text-lg sm:text-xl font-bold flex items-center z-[170] shrink-0"
          >
            <span className="text-white">Suraj</span>

            <span className="text-primary ml-2">portfolio</span>
          </a>

          {/* =====================================================
              PYTHON - DESKTOP CENTER
          ====================================================== */}

          <a
            href="/python"
            className={cn(
              isTouchDevice ? "hidden" : "inline-flex",
              "absolute",
              "left-1/2",
              "-translate-x-1/2",
              "items-center",
              "gap-1.5",
              "px-5",
              "py-1.5",
              "rounded-full",
              "border border-primary/50",
              "bg-primary/10",
              "text-primary",
              "text-sm",
              "font-semibold",
              "shadow-[0_0_15px_rgba(139,92,246,0.25)]",
              "hover:bg-primary/20",
              "hover:border-primary",
              "hover:shadow-[0_0_25px_rgba(139,92,246,0.45)]",
              "hover:scale-105",
              "transition-all",
              "duration-300"
            )}
          >
            <span>🐍</span>
            <span>Python Development</span>
          </a>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <div
            className={cn(
              "items-center gap-7 ml-auto",
              isTouchDevice ? "hidden" : "flex"
            )}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-sm
                  text-gray-300
                  hover:text-primary
                  transition-colors
                  duration-300
                  font-medium
                  whitespace-nowrap
                "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={cn(
              "relative z-[170]",
              "items-center justify-center",
              "w-10 h-10",
              "rounded-xl",
              "bg-white/5",
              "border border-white/10",
              "text-white",
              "hover:bg-primary/10",
              "hover:border-primary/30",
              "transition-all",
              "duration-300",
              isTouchDevice ? "flex" : "hidden"
            )}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* =========================================================
          MOBILE BACKDROP
      ========================================================== */}

      <div
        onClick={closeMenu}
        className={cn(
          "fixed inset-0 z-[150]",
          "bg-black/50 backdrop-blur-[2px]",
          "transition-opacity duration-300",
          isTouchDevice ? "block" : "hidden",
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      />

      {/* =========================================================
          MOBILE SIDE DRAWER
      ========================================================== */}

      <div
        className={cn(
          "fixed top-0 right-0",
          "h-[100dvh]",
          "w-[88%] max-w-[360px]",
          "z-[160]",
          "bg-[#0B1120]",
          "border-l border-primary/20",
          "shadow-[-20px_0_50px_rgba(0,0,0,0.55)]",
          "transition-transform duration-300 ease-out",
          "flex flex-col",
          isTouchDevice ? "flex" : "hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/10 shrink-0">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary">
              Navigation
            </p>

            <p className="text-white font-semibold text-base sm:text-lg mt-1">
              {pythonPage ? "Python Development" : "Main Portfolio"}
            </p>
          </div>

          {/* Separate close button */}
          <button
  type="button"
  onClick={() => setIsMenuOpen(true)}
  className={cn(
    "relative z-[170]",
    "items-center justify-center",
    "w-10 h-10",
    "rounded-xl",
    "bg-white/5",
    "border border-white/10",
    "text-white",
    "hover:bg-primary/10",
    "hover:border-primary/30",
    "transition-all",
    "duration-300",
    isTouchDevice && !isMenuOpen ? "flex" : "hidden"
  )}
  aria-label="Open Menu"
  aria-expanded={isMenuOpen}
>
  <Menu size={22} />
</button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto px-5 py-6">
          {/* Python Button */}
          <a
            href="/python"
            onClick={closeMenu}
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-4
              rounded-2xl
              border border-primary/40
              bg-primary/10
              text-primary
              font-semibold
              shadow-[0_0_20px_rgba(139,92,246,0.12)]
              hover:bg-primary/20
              hover:border-primary/60
              transition-all duration-300
              text-left
              mb-5
            "
          >
            <span className="text-xl shrink-0">🐍</span>

            <div className="min-w-0">
              <p className="text-sm sm:text-base font-semibold">
                Python Development
              </p>

              <p className="text-[11px] sm:text-xs text-primary/60 mt-0.5">
                Explore Python Work
              </p>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  w-full
                  px-4
                  py-3.5
                  rounded-xl
                  text-gray-300
                  hover:text-white
                  hover:bg-white/5
                  active:bg-white/10
                  transition-all duration-300
                "
              >
                <span className="text-base sm:text-lg font-medium">
                  {item.name}
                </span>

                <span
                  className="
                    text-primary
                    opacity-0
                    -translate-x-2
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all duration-300
                  "
                >
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="pt-7 mt-6 border-t border-white/10">
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed text-center">
              Building modern web applications with MERN Stack & Python.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;