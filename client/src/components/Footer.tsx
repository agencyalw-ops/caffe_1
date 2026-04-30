import { siteContent } from "@/config/content";

/**
 * Footer Component
 * Design: Clean footer dengan links dan copyright
 */
export default function Footer() {
  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    if (id === "/privacy" || id === "/terms") {
      return; // Handle as regular links if needed
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-lg">☕</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{siteContent.siteName}</h3>
                <p className="text-xs text-amber-200">Wonosobo</p>
              </div>
            </div>
            <p className="text-amber-100 text-sm">{siteContent.siteDescription}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Menu Cepat</h4>
            <ul className="space-y-2">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-amber-100 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Informasi</h4>
            <ul className="space-y-2">
              {siteContent.footer.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-amber-100 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-700 pt-8">
          <p className="text-center text-amber-200 text-sm">{siteContent.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
