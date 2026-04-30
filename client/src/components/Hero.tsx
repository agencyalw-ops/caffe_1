import { siteContent } from "@/config/content";
import { ArrowDown } from "lucide-react";

/**
 * Hero Section Component
 * Design: Premium cafe aesthetic dengan large imagery
 * Background image dengan gradient overlay untuk text readability
 */
export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${siteContent.hero.image}')`,
        }}
      >
        {/* Gradient Overlay untuk Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight drop-shadow-lg">
          {siteContent.hero.title}
        </h1>

        <p className="text-xl md:text-2xl font-light mb-6 drop-shadow-md">
          {siteContent.hero.subtitle}
        </p>

        <p className="text-base md:text-lg mb-8 text-gray-100 drop-shadow-md max-w-2xl mx-auto">
          {siteContent.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection("menu")}
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
          >
            {siteContent.hero.cta}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 text-lg"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
}
