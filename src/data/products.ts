export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  stock: number;
  image: string;
  description: string;
  capacity?: string;
  brand?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Tenda Dome 2 Orang",
    category: "Tenda & Shelter",
    price: 75000,
    rating: 4.8,
    reviews: 145,
    stock: 5,
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&h=400&fit=crop",
    description:
      "Tenda dome berkualitas tinggi untuk 2 orang dengan material waterproof dan ventilasi baik.",
    capacity: "2 orang",
    brand: "Coleman",
  },
  {
    id: 2,
    name: "Tenda Dome 4 Orang",
    category: "Tenda & Shelter",
    price: 120000,
    rating: 4.9,
    reviews: 203,
    stock: 3,
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=400&fit=crop",
    description:
      "Tenda spacious untuk 4 orang dengan perlengkapan lengkap dan setup mudah.",
    capacity: "4 orang",
    brand: "REI",
  },
  {
    id: 3,
    name: "Sleeping Bag Premium",
    category: "Sleeping Gear",
    price: 50000,
    rating: 4.9,
    reviews: 203,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop",
    description:
      "Sleeping bag premium dengan insulation terbaik untuk camping musim dingin.",
    brand: "North Face",
  },
  {
    id: 4,
    name: "Carrier Backpack 60L",
    category: "Tas Carrier",
    price: 100000,
    rating: 4.7,
    reviews: 89,
    stock: 3,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    description:
      "Tas carrier 60L ergonomis dengan support komfor untuk hiking jarak jauh.",
    capacity: "60L",
    brand: "Osprey",
  },
  {
    id: 5,
    name: "Carrier Backpack 40L",
    category: "Tas Carrier",
    price: 75000,
    rating: 4.6,
    reviews: 67,
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Tas carrier 40L ideal untuk day hiking dan short trips.",
    capacity: "40L",
    brand: "Deuter",
  },
  {
    id: 6,
    name: "Trekking Pole Carbon",
    category: "Hiking Gear",
    price: 40000,
    rating: 4.6,
    reviews: 156,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1551632786-de41ec16a950?w=400&h=400&fit=crop",
    description: "Trekking pole carbon lightweight dengan grip ergonomis.",
    brand: "Black Diamond",
  },
  {
    id: 7,
    name: "Sleeping Pad Inflatable",
    category: "Sleeping Gear",
    price: 35000,
    rating: 4.5,
    reviews: 98,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1546026423-cc4642628d4b?w=400&h=400&fit=crop",
    description:
      "Matras tidur inflatable self-inflating dengan comfort maksimal.",
    brand: "Therm-a-Rest",
  },
  {
    id: 8,
    name: "Kompor Camping Portable",
    category: "Masak & Perlengkapan Dapur",
    price: 45000,
    rating: 4.7,
    reviews: 124,
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    description:
      "Kompor camping portable dengan bahan stainless steel berkualitas.",
    brand: "Primus",
  },
  {
    id: 9,
    name: "Cooking Set 2 Orang",
    category: "Masak & Perlengkapan Dapur",
    price: 55000,
    rating: 4.8,
    reviews: 89,
    stock: 7,
    image:
      "https://images.unsplash.com/photo-1585518419759-53df7f0a0c57?w=400&h=400&fit=crop",
    description: "Set lengkap panci, wajan, dan peralatan masak untuk 2 orang.",
    brand: "Trangia",
  },
  {
    id: 10,
    name: "Headlamp LED Rechargeable",
    category: "Lighting",
    price: 25000,
    rating: 4.6,
    reviews: 176,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1525946398532-48eea5b852cb?w=400&h=400&fit=crop",
    description:
      "Headlamp LED rechargeable dengan brightness tinggi dan durabilitas terjamin.",
    brand: "Petzl",
  },
  {
    id: 11,
    name: "Lantern Camping",
    category: "Lighting",
    price: 35000,
    rating: 4.5,
    reviews: 112,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    description: "Lantern camping portable dengan durasi baterai lama.",
    brand: "Coleman",
  },
  {
    id: 12,
    name: "Hammock Camping",
    category: "Shelter Alternative",
    price: 60000,
    rating: 4.9,
    reviews: 143,
    stock: 6,
    image:
      "https://images.unsplash.com/photo-1570129477492-45201003ab41?w=400&h=400&fit=crop",
    description:
      "Hammock camping dengan tree straps dan weight capacity tinggi.",
    brand: "ENO",
  },
  {
    id: 13,
    name: "Waterproof Dry Bag",
    category: "Aksesori",
    price: 30000,
    rating: 4.7,
    reviews: 95,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Dry bag waterproof untuk melindungi barang di cuaca ekstrem.",
    brand: "Sea to Summit",
  },
  {
    id: 14,
    name: "Tent Footprint",
    category: "Aksesori",
    price: 20000,
    rating: 4.4,
    reviews: 56,
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&h=400&fit=crop",
    description:
      "Alas tenda untuk proteksi maksimal dari tanah dan kelembaban.",
    brand: "Generic",
  },
  {
    id: 15,
    name: "Water Filter Portable",
    category: "Aksesori",
    price: 85000,
    rating: 4.8,
    reviews: 102,
    stock: 9,
    image:
      "https://images.unsplash.com/photo-1565017969904-5f0df0c5b10d?w=400&h=400&fit=crop",
    description: "Filter air portable untuk membuat air bersih saat camping.",
    brand: "LifeStraw",
  },
];

export const categories = [
  "Semua Kategori",
  "Tenda & Shelter",
  "Tas Carrier",
  "Sleeping Gear",
  "Masak & Perlengkapan Dapur",
  "Hiking Gear",
  "Lighting",
  "Shelter Alternative",
  "Aksesori",
];

export const priceRanges = [
  { label: "Semua Harga", min: 0, max: Infinity },
  { label: "Di bawah Rp 50.000", min: 0, max: 50000 },
  { label: "Rp 50.000 - Rp 100.000", min: 50000, max: 100000 },
  { label: "Rp 100.000 - Rp 150.000", min: 100000, max: 150000 },
  { label: "Di atas Rp 150.000", min: 150000, max: Infinity },
];
