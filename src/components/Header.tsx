import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col">
          <span
            className={`font-serif text-xl font-bold ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            BIRCHLER
          </span>
          <span
            className={`text-xs tracking-widest ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about-us"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.about.label}
          </a>
          <a
            href="#services"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.services.label}
          </a>
          <a
            href="#gallery"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.gallery.label}
          </a>
          <a
            href="#hours"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.hours.label}
          </a>
          <a
            href="#contact"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            {t.contact.label}
          </a>

          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          {/* Call Button */}
          <Button asChild>
            <a href="tel:+41796291854">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X
              className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`}
            />
          ) : (
            <Menu
              className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t shadow-soft">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#about-us"
              onClick={closeMobileMenu}
              className="text-sm text-foreground hover:text-primary"
            >
              {t.about.label}
            </a>
            <a
              href="#services"
              onClick={closeMobileMenu}
              className="text-sm text-foreground hover:text-primary"
            >
              {t.services.label}
            </a>
            <a
              href="#gallery"
              onClick={closeMobileMenu}
              className="text-sm text-foreground hover:text-primary"
            >
              {t.gallery.label}
            </a>
            <a
              href="#hours"
              onClick={closeMobileMenu}
              className="text-sm text-foreground hover:text-primary"
            >
              {t.hours.label}
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="text-sm text-foreground hover:text-primary"
            >
              {t.contact.label}
            </a>
            <Link
              to={otherLangPath}
              onClick={closeMobileMenu}
              className="flex items-center gap-1.5 text-sm text-foreground hover:text-primary"
            >
              <Globe className="h-4 w-4" />
              {otherLang.toUpperCase()}
            </Link>
            <Button asChild className="w-full">
              <a href="tel:+41796291854">
                <Phone className="h-4 w-4 mr-2" />
                {t.nav.call}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
