import { siteContent } from "@/config/content";
import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Header Component
 * Navigation bar dengan logo dan menu links
 * Design: Modern cafe aesthetic dengan warm colors
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">☕</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-amber-900">{siteContent.siteName}</h1>
            <p className="text-xs text-amber-700">Wonosobo</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {siteContent.navigation.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-amber-900 hover:text-amber-700 font-medium transition-colors duration-200 text-sm"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200 text-sm">
          Pesan Sekarang
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-amber-50 rounded-lg transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-amber-900" />
          ) : (
            <Menu className="w-6 h-6 text-amber-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-amber-100 bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {siteContent.navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-amber-900 hover:text-amber-700 font-medium transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200 mt-2">
              Pesan Sekarang
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
