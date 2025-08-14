import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isDetailPage =
    location.pathname === "/studio" || location.pathname === "/creators";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (item: string, path: string) => {
    if (isDetailPage) {
      if (
        (item === "STUDIO" && location.pathname === "/studio") ||
        (item === "CREATORS" && location.pathname === "/creators")
      ) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (!["CREATORS", "STUDIO"].includes(item)) {
        window.location.href = "/" + path;
      }
    }
  };

  const navItems = [
    "HOME",
    "ABOUT",
    "NEWS",
    "WORKS",
    "CREATORS",
    "STUDIO",
    "CONTACT",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden ${
        isScrolled || isDetailPage
          ? "bg-moss py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full px-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 w-64 md:w-52 lg:w-60">
            <a
              href="#home"
              onClick={() => handleNavigation("HOME", "#home")}
              className="text-white text-xl font-san font-semibold flex items-center"
            >
              <img
                className="w-8 h-8 mr-2 inline relative -translate-y-1"
                src="/img/logo.png"
                alt="Logo"
              />
              HOMEGROUND LLC.
            </a>
          </div>

          <nav className="hidden md:flex justify-center flex-1 px-4">
            <div className="flex space-x-4 lg:space-x-8">
              {navItems.map((item) =>
                item === "CREATORS" || item === "STUDIO" ? (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    onClick={() => handleNavigation(item, "")}
                    className="text-white hover:text-greige transition-colors duration-200 font-medium whitespace-nowrap"
                  >
                    {item}
                  </Link>
                ) : (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() =>
                      handleNavigation(item, `#${item.toLowerCase()}`)
                    }
                    className="text-white hover:text-greige transition-colors duration-200 font-medium whitespace-nowrap"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </nav>

          <button
            className="md:hidden text-white focus:outline-none flex-shrink-0 ml-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-moss-dark py-4 px-4 mt-3 w-full">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) =>
              item === "CREATORS" || item === "STUDIO" ? (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => {
                    handleNavigation(item, "");
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-greige transition-colors duration-200 font-medium py-2 border-b border-moss-light"
                >
                  {item}
                </Link>
              ) : (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    handleNavigation(item, `#${item.toLowerCase()}`);
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-greige transition-colors duration-200 font-medium py-2 border-b border-moss-light"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
