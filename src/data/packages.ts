export interface Package {
  id: number;
  name: string;
  capacity: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  items: string[];
  highlights: string[];
  ideal: string;
}

export const packages: Package[] = [
  {
    id: 1,
    name: "Paket Camping 2 Orang",
    capacity: "2 Orang",
    price: 200000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&h=400&fit=crop",
    description:
      "Paket lengkap untuk pasangan atau 2 teman yang ingin camping weekend",
    items: [
      "Tenda Dome 2 Orang",
      "Sleeping Bag Premium x2",
      "Sleeping Pad x2",
      "Headlamp x2",
      "Kompor Camping Portable",
      "Cooking Set 2 Orang",
    ],
    highlights: [
      "Setup mudah",
      "Semua equipment sudah included",
      "Cocok untuk pemula",
      "Harga super hemat",
    ],
    ideal: "Couple, teman, atau pemula yang ingin camping cepat tanpa ribet",
  },
  {
    id: 2,
    name: "Paket Camping 4 Orang",
    capacity: "4 Orang",
    price: 350000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=400&fit=crop",
    description:
      "Paket premium untuk keluarga kecil atau 4 teman dengan fasilitas lengkap",
    items: [
      "Tenda Dome 4 Orang",
      "Sleeping Bag Premium x4",
      "Sleeping Pad x4",
      "Headlamp x4",
      "Lantern Camping",
      "Kompor Camping Portable x2",
      "Cooking Set 4 Orang",
      "Dry Bag x2",
    ],
    highlights: [
      "Lebih spacious dan nyaman",
      "Equipment berkualitas tinggi",
      "Lantai tenda anti air",
      "Lighting lengkap untuk keamanan",
    ],
    ideal: "Keluarga kecil atau rombongan teman yang ingin camping comfort",
  },
  {
    id: 3,
    name: "Paket Family Camping",
    capacity: "5-6 Orang",
    price: 500000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1486899646497-a842b0e0d244?w=400&h=400&fit=crop",
    description:
      "Paket eksklusif untuk keluarga besar yang mencari kenyamanan maksimal di alam terbuka",
    items: [
      "Tenda Cabin 6 Orang",
      "Sleeping Bag Premium x6",
      "Sleeping Pad x6",
      "Headlamp x6",
      "Lantern Camping x2",
      "Kompor Camping Portable x2",
      "Cooking Set untuk 6 Orang",
      "Dry Bag x4",
      "Tent Footprint",
      "Water Filter Portable",
    ],
    highlights: [
      "Tenda terbesar & paling nyaman",
      "Setup lengkap dan mudah",
      "Cocok untuk liburan keluarga",
      "All-in-one solution",
    ],
    ideal:
      "Keluarga besar atau rombongan yang ingin pengalaman camping luar biasa",
  },
  {
    id: 4,
    name: "Paket Gunung Professional",
    capacity: "3-4 Orang",
    price: 450000,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    description:
      "Paket khusus untuk pendaki gunung dengan equipment berkualitas tinggi dan durabilitas ekstrem",
    items: [
      "Tenda Ultralight 3-4 Orang",
      "Sleeping Bag 4 Musim x4",
      "Sleeping Pad Thermal x4",
      "Headlamp LED Rechargeable x4",
      "Trekking Pole Carbon x4",
      "Carrier Backpack 60L x4",
      "Water Filter Portable",
      "Hammock Camping x2",
      "Dry Bag x4",
    ],
    highlights: [
      "Material premium waterproof",
      "Ultra lightweight untuk pendakian",
      "Cocok untuk cuaca ekstrem",
      "Ideal untuk summit camp",
    ],
    ideal: "Para pendaki gunung, hiker profesional, atau adventure enthusiast",
  },
];
