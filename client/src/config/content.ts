/**
 * Content Configuration for Wonosobo Cafe Landing Page
 * Semua konten website (H1, deskripsi, link, gambar) dikelola di file ini
 * untuk memudahkan pembaruan dan manajemen konten
 */

export const siteContent = {
  // ===== METADATA & BRANDING =====
  siteName: "Kopi Kledang",
  siteDescription: "Cafe modern di Wonosobo dengan pemandangan alam yang memukau",
  tagline: "Nikmati Kopi Premium di Tengah Keindahan Alam Wonosobo",

  // ===== NAVIGATION =====
  navigation: [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Galeri", href: "#gallery" },
    { label: "Kontak", href: "#contact" },
  ],

  // ===== HERO SECTION =====
  hero: {
    title: "Kopi Kledang",
    subtitle: "Rasakan Kehangatan Kopi Premium di Tengah Pegunungan Wonosobo",
    description:
      "Selamat datang di Kopi Kledang, tempat di mana kopi berkualitas tinggi bertemu dengan pemandangan alam yang menakjubkan. Nikmati pengalaman bersantai yang tak terlupakan.",
    cta: "Jelajahi Sekarang",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663595474301/uBcwOBvEZrKoxkzq.png",
  },

  // ===== ABOUT SECTION =====
  about: {
    title: "Tentang Kami",
    subtitle: "Cerita Kopi Kledang",
    description:
      "Kopi Kledang didirikan dengan visi untuk menghadirkan pengalaman kopi yang autentik dan berkualitas tinggi. Kami menggunakan biji kopi pilihan dari perkebunan lokal Wonosobo dan sekitarnya, dipanggang dengan sempurna oleh barista profesional kami.",
    highlights: [
      {
        title: "Kopi Premium",
        description: "Biji kopi pilihan dari perkebunan lokal Wonosobo",
      },
      {
        title: "Barista Profesional",
        description: "Tim barista berpengalaman dengan sertifikasi internasional",
      },
      {
        title: "Suasana Nyaman",
        description: "Interior modern dengan pemandangan alam yang menakjubkan",
      },
    ],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663595474301/iqFpTXCehXDqCJPC.png",
  },

  // ===== MENU SECTION =====
  menu: {
    title: "Menu Kami",
    subtitle: "Pilihan Kopi dan Makanan Terbaik",
    description: "Nikmati berbagai pilihan kopi premium dan makanan lokal Wonosobo",
    categories: {
      coffee: {
        name: "Kopi Pilihan",
        items: [
          {
            name: "Dieng Espresso",
            description: "Espresso kuat dari kopi Dieng pilihan",
            price: "Rp 25.000",
            image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663595474301/qaTXgEGsCAqoqzHC.png",
          },
          {
            name: "Wonosobo Latte",
            description: "Latte creamy dengan kopi lokal Wonosobo",
            price: "Rp 35.000",
          },
          {
            name: "Highland Cappuccino",
            description: "Cappuccino premium dengan topping latte art",
            price: "Rp 40.000",
          },
          {
            name: "Kopi Tubruk Tradisional",
            description: "Kopi tradisional Wonosobo yang autentik",
            price: "Rp 20.000",
          },
        ],
      },
      food: {
        name: "Makanan Lokal",
        items: [
          {
            name: "Tempe Kemul",
            description: "Makanan tradisional Wonosobo yang renyah dan lezat",
            price: "Rp 30.000",
            image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663595474301/wwHvuPWbVWMNrfAf.png",
          },
          {
            name: "Lumpia Sayuran",
            description: "Lumpia isi sayuran segar dengan saus kacang",
            price: "Rp 25.000",
          },
          {
            name: "Kue Tradisional",
            description: "Berbagai kue tradisional Wonosobo",
            price: "Rp 15.000",
          },
        ],
      },
    },
  },

  // ===== GALLERY SECTION =====
  gallery: {
    title: "Galeri",
    subtitle: "Momen Indah di Kopi Kledang",
    description: "Lihat keindahan cafe dan pengalaman pelanggan kami",
    images: [
      {
        src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663595474301/RpUaBFdiDroPSXJy.png",
        alt: "Exterior Kopi Kledang dengan pemandangan pegunungan",
        caption: "Exterior Kopi Kledang",
      },
      {
        src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663595474301/uBcwOBvEZrKoxkzq.png",
        alt: "Interior cafe yang nyaman dan modern",
        caption: "Interior Cafe",
      },
      {
        src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663595474301/iqFpTXCehXDqCJPC.png",
        alt: "Barista sedang membuat kopi dengan sempurna",
        caption: "Barista Profesional",
      },
    ],
  },

  // ===== CONTACT SECTION =====
  contact: {
    title: "Hubungi Kami",
    subtitle: "Kunjungi Kopi Kledang Hari Ini",
    description: "Kami menunggu kedatangan Anda di Wonosobo",
    info: {
      address: "Jl. Pegunungan No. 123, Wonosobo, Jawa Tengah 56301",
      phone: "+62 274 1234567",
      email: "info@kopikledang.com",
      hours: "Buka: Senin - Minggu, 07:00 - 21:00 WIB",
    },
    social: [
      { platform: "Instagram", url: "https://instagram.com", icon: "instagram" },
      { platform: "Facebook", url: "https://facebook.com", icon: "facebook" },
      { platform: "WhatsApp", url: "https://wa.me/62274", icon: "whatsapp" },
    ],
  },

  // ===== FOOTER =====
  footer: {
    copyright: `© ${new Date().getFullYear()} Kopi Kledang. Semua hak dilindungi.`,
    links: [
      { label: "Kebijakan Privasi", href: "/privacy" },
      { label: "Syarat & Ketentuan", href: "/terms" },
      { label: "Hubungi Kami", href: "#contact" },
    ],
  },
};

// Export type untuk TypeScript support
export type SiteContent = typeof siteContent;
