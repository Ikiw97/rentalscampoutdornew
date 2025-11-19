export interface BlogPost {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Panduan Memilih Tenda yang Tepat untuk Pemula",
    category: "Tips Camping",
    author: "Ahmad Ridho",
    date: "2024-01-15",
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=400&fit=crop",
    excerpt:
      "Panduan lengkap untuk memilih tenda yang sesuai dengan kebutuhan dan budget Anda. Dari ukuran, material, hingga bentuk tenda.",
    content:
      "Memilih tenda yang tepat adalah kunci kesuksesan camping. Berikut faktor-faktor yang harus dipertimbangkan: Jumlah orang yang akan tidur, kondisi cuaca dan lokasi camping, budget yang tersedia, dan kemudahan setup. Untuk pemula, kami merekomendasikan tenda dome karena mudah dipasang dan cukup spacious.",
    readTime: 5,
  },
  {
    id: 2,
    title: "Review Sleeping Bag 4 Musim: Mana yang Terbaik?",
    category: "Review Peralatan",
    author: "Siti Nurhaliza",
    date: "2024-01-10",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=400&fit=crop",
    excerpt:
      "Kami membandingkan berbagai merek sleeping bag 4 musim populer. Lihat kelebihan dan kekurangan masing-masing model.",
    content:
      "Sleeping bag 4 musim dirancang untuk performa di berbagai kondisi cuaca ekstrem. Dalam review ini, kami membandingkan North Face Summit, Marmot Triad, dan Coleman Performance. Setiap model memiliki keunggulan tersendiri dalam hal isolation, weight, dan harga.",
    readTime: 8,
  },
  {
    id: 3,
    title: "Destinasi Camping Terbaik di Bogor yang Wajib Dikunjungi",
    category: "Destinasi Camping",
    author: "Budi Santoso",
    date: "2024-01-05",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=400&fit=crop",
    excerpt:
      "Daftar camping ground terbaik di Bogor dengan fasilitas lengkap dan pemandangan yang menakjubkan. Cocok untuk keluarga dan grup.",
    content:
      "Bogor memiliki beberapa lokasi camping terbaik yang mudah diakses dari Jakarta. Dari Puncak Pass dengan pemandangan 180 derajat, hingga Puncak Perdana dengan fasilitas ramah keluarga. Artikel ini membahas 5 destinasi terbaik beserta info lokasi, harga, dan tips.",
    readTime: 6,
  },
  {
    id: 4,
    title: "Cara Merawat Equipment Outdoor agar Tahan Lama",
    category: "Tips Camping",
    author: "Dina Wijaya",
    date: "2023-12-28",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    excerpt:
      "Tips praktis merawat tenda, sleeping bag, dan equipment lainnya agar tetap awet dan dapat digunakan untuk jangka panjang.",
    content:
      "Equipment outdoor membutuhkan perawatan khusus agar tahan lama. Mulai dari pembersihan rutin, penyimpanan yang tepat, hingga pengecekan kondisi sebelum digunakan. Article ini memberikan langkah-langkah detail untuk menjaga setiap jenis equipment.",
    readTime: 7,
  },
  {
    id: 5,
    title: "Pendakian Gunung Semeru: Petualangan Mendaki Puncak Tertinggi Jawa",
    category: "Destinasi Camping",
    author: "Ahmad Ridho",
    date: "2023-12-20",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    excerpt:
      "Panduan lengkap mendaki Gunung Semeru, mulai dari persiapan, rute, hingga equipment yang diperlukan untuk puncak tertinggi Jawa.",
    content:
      "Gunung Semeru adalah destinasi impian bagi para pendaki. Dengan ketinggian 3.676 meter, mendaki Semeru memerlukan persiapan matang. Artikel ini membahas rute pendakian, durasi, difficulty level, dan equipment essential untuk mencapai puncak Mahameru.",
    readTime: 10,
  },
  {
    id: 6,
    title: "Budget Camping untuk Keluarga: Hemat tapi Tetap Nyaman",
    category: "Tips Camping",
    author: "Siti Nurhaliza",
    date: "2023-12-15",
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=400&fit=crop",
    excerpt:
      "Strategi camping dengan budget terbatas tanpa mengorbankan kenyamanan dan keamanan keluarga. Tips-tips praktis dari expert kami.",
    content:
      "Camping bersama keluarga tidak harus mahal. Dengan perencanaan yang baik dan memilih equipment yang tepat, Anda bisa camping nyaman dengan budget minimal. Tips ini mencakup pemilihan lokasi, timing, dan rental daripada membeli semua equipment sendiri.",
    readTime: 6,
  },
];

export const blogCategories = [
  "Semua Kategori",
  "Tips Camping",
  "Review Peralatan",
  "Destinasi Camping",
];
