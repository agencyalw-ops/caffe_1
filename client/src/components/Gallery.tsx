import { siteContent } from "@/config/content";
import { useState } from "react";
import { X } from "lucide-react";

/**
 * Gallery Section Component
 * Design: Masonry-style grid dengan lightbox modal
 */
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof siteContent.gallery.images)[0] | null>(
    null
  );

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            {siteContent.gallery.title}
          </h2>
          <p className="text-xl text-amber-700 mb-6">{siteContent.gallery.subtitle}</p>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {siteContent.gallery.description}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.gallery.images.map((image, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(image)}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg h-64"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
