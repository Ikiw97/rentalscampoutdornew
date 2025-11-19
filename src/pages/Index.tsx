import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { ArrowRight, Check, MapPin, Users, Zap } from "lucide-react";

export default function Index() {
  const featuredProducts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&h=400&fit=crop",
      name: "Tenda Dome 2 Orang",
      category: "Tenda",
      price: 75000,
      rating: 4.8,
      reviews: 145,
      stock: 5,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop",
      name: "Sleeping Bag Premium",
      category: "Sleeping Gear",
      price: 50000,
      rating: 4.9,
      reviews: 203,
      stock: 12,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      name: "Carrier Backpack 60L",
      category: "Tas",
      price: 100000,
      rating: 4.7,
      reviews: 89,
      stock: 3,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1551632786-de41ec16a950?w=400&h=400&fit=crop",
      name: "Trekking Pole Carbon",
      category: "Hiking Gear",
      price: 40000,
      rating: 4.6,
      reviews: 156,
      stock: 20,
    },
  ];

  const testimonials = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      name: "Ahmad Wijaya",
      title: "Petualang Gunung",
      content:
        "Perlengkapan OutdoorCamp sangat berkualitas dan harganya terjangkau. Setelah menyewa berkali-kali, saya tidak pernah kecewa dengan layanannya!",
      rating: 5,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      name: "Siti Nurhaliza",
      title: "Penggemar Camping",
      content:
        "Saya selalu menyewa di OutdoorCamp untuk camping keluarga. Prosesnya mudah, pelayanan ramah, dan kondisi barang selalu terjaga dengan baik.",
      rating: 5,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      name: "Budi Santoso",
      title: "Organisator Outdoor",
      content:
        "Untuk event outdoor skala besar, OutdoorCamp adalah partner terpercaya kami. Stok lengkap, responsif, dan menyediakan berbagai pilihan equipment.",
      rating: 4.8,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/85 text-primary-foreground overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Jelajahi Alam dengan Perlengkapan Terbaik
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Rental perlengkapan outdoor terlengkap dan terpercaya. Lebih
                dari 500+ items untuk mendukung petualangan Anda ke gunung,
                pantai, atau camping impian.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/katalog">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto gap-2"
                  >
                    Lihat Katalog
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-white/10 w-full sm:w-auto"
                >
                  Pelajari Selengkapnya
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm text-primary-foreground/80">
                    Perlengkapan
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold">2.5K+</p>
                  <p className="text-sm text-primary-foreground/80">
                    Pelanggan Puas
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold">4.8★</p>
                  <p className="text-sm text-primary-foreground/80">Rating</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&h=600&fit=crop"
                  alt="Outdoor Camping"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-foreground p-4 rounded-xl shadow-xl max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <p className="font-semibold text-sm">
                      Proses Booking Mudah
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Pesan online, bayar DP, dan langsung ambil perlengkapan Anda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Mengapa Memilih OutdoorCamp?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan layanan rental perlengkapan outdoor dengan
              standar kualitas tertinggi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Proses Cepat",
                description:
                  "Booking online dalam hitungan menit, tanpa ribet dan kompromi dengan kenyamanan.",
              },
              {
                icon: <Check className="w-8 h-8" />,
                title: "Kualitas Terjamin",
                description:
                  "Semua perlengkapan diperiksa dan dirawat dengan standar internasional.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Layanan Terbaik",
                description:
                  "Tim support siap membantu 24/7 untuk memastikan pengalaman terbaik Anda.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Produk Unggulan
              </h2>
              <p className="text-muted-foreground">
                Perlengkapan outdoor terpopuler dan terlaris
              </p>
            </div>
            <Link to="/katalog">
              <Button variant="outline" className="hidden sm:flex gap-2">
                Lihat Semua
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="flex justify-center mt-8 sm:hidden">
            <Link to="/katalog">
              <Button className="gap-2">
                Lihat Semua Produk
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Cara Menyewa di OutdoorCamp
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proses sewa yang mudah dalam 4 langkah sederhana
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                number: "1",
                title: "Pilih Produk",
                description:
                  "Jelajahi katalog lengkap kami dan pilih perlengkapan sesuai kebutuhan",
              },
              {
                number: "2",
                title: "Booking & Bayar",
                description:
                  "Tentukan tanggal sewa, bayar DP atau penuh, proses instan",
              },
              {
                number: "3",
                title: "Ambil Barang",
                description:
                  "Datang ke lokasi kami atau pesan pengiriman ke alamat Anda",
              },
              {
                number: "4",
                title: "Gunakan & Kembalikan",
                description:
                  "Nikmati petualangan, kemudian kembalikan barang sesuai jadwal",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-8 shadow-sm text-center h-full">
                  <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:flex absolute top-1/3 -right-6 text-primary/30">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/cara-sewa">
              <Button size="lg" variant="outline" className="gap-2">
                Pelajari Detail Selengkapnya
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Kepuasan Pelanggan Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ribuan pelanggan telah mempercayai OutdoorCamp untuk petualangan
              mereka
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Siap Memulai Petualangan?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Jangan tunggu lagi! Pesan perlengkapan outdoor Anda sekarang dan
              dapatkan diskon khusus untuk pemesanan pertama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/katalog">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto"
                >
                  Mulai Pesan Sekarang
                </Button>
              </Link>
              <Link to="/kontak">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-white/10 w-full sm:w-auto"
                >
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
