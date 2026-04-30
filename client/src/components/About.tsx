import { siteContent } from "@/config/content";
import { Coffee, Users, Leaf } from "lucide-react";

/**
 * About Section Component
 * Design: Two-column layout dengan image dan text
 * Highlight cards untuk key features
 */
export default function About() {
  const iconMap: Record<string, React.ReactNode> = {
    "Kopi Premium": <Coffee className="w-8 h-8" />,
    "Barista Profesional": <Users className="w-8 h-8" />,
    "Suasana Nyaman": <Leaf className="w-8 h-8" />,
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            {siteContent.about.title}
          </h2>
          <p className="text-xl text-amber-700 mb-6">{siteContent.about.subtitle}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src={siteContent.about.image}
              alt="Barista making coffee"
              className="w-full rounded-2xl shadow-2xl object-cover h-96"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100 rounded-full opacity-50 blur-2xl" />
          </div>

          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {siteContent.about.description}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {siteContent.about.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white">
                    {iconMap[highlight.title]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
