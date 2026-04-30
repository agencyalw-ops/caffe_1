import { siteContent } from "@/config/content";
import { Mail, MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

/**
 * Contact Section Component
 * Design: Contact info cards dengan social links
 */
export default function Contact() {
  const iconMap: Record<string, React.ReactNode> = {
    instagram: <Instagram className="w-6 h-6" />,
    facebook: <Facebook className="w-6 h-6" />,
    whatsapp: <MessageCircle className="w-6 h-6" />,
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            {siteContent.contact.title}
          </h2>
          <p className="text-xl text-amber-700 mb-6">{siteContent.contact.subtitle}</p>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {siteContent.contact.description}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full" />
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Address */}
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Lokasi</h3>
                <p className="text-gray-700">{siteContent.contact.info.address}</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Telepon</h3>
                <a
                  href={`tel:${siteContent.contact.info.phone}`}
                  className="text-amber-600 hover:text-amber-700 font-semibold"
                >
                  {siteContent.contact.info.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Email</h3>
                <a
                  href={`mailto:${siteContent.contact.info.email}`}
                  className="text-amber-600 hover:text-amber-700 font-semibold"
                >
                  {siteContent.contact.info.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Jam Operasional</h3>
                <p className="text-gray-700">{siteContent.contact.info.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-amber-900 mb-6">Ikuti Kami</h3>
          <div className="flex justify-center gap-6">
            {siteContent.contact.social.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300"
                title={social.platform}
              >
                {iconMap[social.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
