import { siteContent } from "@/config/content";
import { useState } from "react";

/**
 * Menu Section Component
 * Design: Tabbed menu dengan kategori Coffee dan Food
 * Card-based layout untuk setiap menu item
 */
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<"coffee" | "food">("coffee");

  const activeItems =
    activeCategory === "coffee"
      ? siteContent.menu.categories.coffee.items
      : siteContent.menu.categories.food.items;

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            {siteContent.menu.title}
          </h2>
          <p className="text-xl text-amber-700 mb-6">{siteContent.menu.subtitle}</p>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {siteContent.menu.description}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("coffee")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === "coffee"
                ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg"
                : "bg-gray-100 text-amber-900 hover:bg-gray-200"
            }`}
          >
            ☕ {siteContent.menu.categories.coffee.name}
          </button>
          <button
            onClick={() => setActiveCategory("food")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === "food"
                ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg"
                : "bg-gray-100 text-amber-900 hover:bg-gray-200"
            }`}
          >
            🍽️ {siteContent.menu.categories.food.name}
          </button>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Item Image */}
              {item.image && (
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Item Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                  <button className="bg-amber-100 text-amber-700 px-4 py-2 rounded-lg font-semibold hover:bg-amber-200 transition-colors">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
