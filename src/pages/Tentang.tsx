import { MapPin, Users, Target, Award, Heart, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Tentang() {
  const teamMembers = [
    {
      name: "Ahmad Ridho",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      description:
        "Petualang outdoor berpengalaman dengan passion untuk memberikan akses equipment berkualitas",
    },
    {
      name: "Siti Nurhaliza",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      description:
        "Expert dalam manajemen inventory dan customer service dengan pengalaman 10 tahun",
    },
    {
      name: "Budi Santoso",
      role: "Head of Marketing",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      description:
        "Strategist marketing digital dengan fokus pada pengalaman pelanggan yang luar biasa",
    },
    {
      name: "Dina Wijaya",
      role: "Customer Success Lead",
      image:
        "https://images.unsplash.com/photo-1507876466326-e26c80a0d0c0?w=200&h=200&fit=crop",
      description:
        "Dedicated dalam memastikan setiap pelanggan mendapatkan pengalaman terbaik",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Awal Mula",
      description:
        "Ahmad Ridho memulai OutdoorCamp dari garasi kecil dengan koleksi 20 item perlengkapan camping",
    },
    {
      year: "2019",
      title: "Ekspansi Pertama",
      description:
        "Membuka lokasi pertama di Jakarta Pusat dan memperluas koleksi menjadi 100+ items",
    },
    {
      year: "2020",
      title: "Platform Digital",
      description:
        "Meluncurkan platform online untuk memudahkan booking dan meningkatkan jangkauan pelanggan",
    },
    {
      year: "2021",
      title: "Sertifikasi",
      description:
        "Mendapatkan sertifikasi standar internasional untuk kualitas dan keamanan equipment",
    },
    {
      year: "2023",
      title: "Pertumbuhan Eksponensial",
      description:
        "Mencapai 2500+ pelanggan puas dan memperluas ke lokasi strategis di berbagai kota",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-3">Tentang OutdoorCamp</h1>
          <p className="text-lg text-primary-foreground/90">
            Platform rental perlengkapan outdoor terpercaya yang mendukung
            petualangan Anda
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Cerita Kami Dimulai
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              OutdoorCamp lahir dari passion dan frustrasi. Pada tahun 2018,
              founder kami Ahmad Ridho merasa sulit menemukan rental
              perlengkapan outdoor berkualitas dengan harga terjangkau. Dengan
              modal kecil dan mimpi besar, dia memulai bisnis ini dari garasi
              kecil.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Kini, OutdoorCamp telah berkembang menjadi platform terpercaya
              dengan ribuan pelanggan puas. Kami berkomitmen untuk membuat
              petualangan outdoor tidak lagi eksklusif untuk mereka yang kaya,
              tetapi dapat diakses oleh semua orang.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Setiap produk dalam katalog kami dipilih dengan cermat, dirawat
              dengan standar internasional, dan siap mendukung adventure Anda ke
              mana pun tujuannya.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=600&fit=crop"
              alt="OutdoorCamp Story"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-primary text-primary-foreground rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <Target className="w-8 h-8 flex-shrink-0" />
              <h3 className="text-2xl font-bold">Visi Kami</h3>
            </div>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Menjadi platform rental perlengkapan outdoor terbesar dan
              terpercaya di Indonesia, membuat petualangan alam terbuka dapat
              diakses oleh semua kalangan tanpa membebani budget.
            </p>
          </div>

          <div className="bg-accent text-accent-foreground rounded-lg p-8">
            <div className="flex gap-4 mb-4">
              <Lightbulb className="w-8 h-8 flex-shrink-0" />
              <h3 className="text-2xl font-bold">Misi Kami</h3>
            </div>
            <p className="text-lg text-accent-foreground/90 leading-relaxed">
              Menyediakan perlengkapan outdoor berkualitas tinggi dengan harga
              terjangkau, layanan pelanggan terbaik, dan mendidik masyarakat
              tentang keindahan dan pentingnya menjaga alam.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            Nilai-Nilai Kami
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Prinsip-prinsip yang memandu setiap keputusan dan tindakan kami
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Kepercayaan",
                description:
                  "Kami menjunjung tinggi kepercayaan pelanggan dengan kualitas terjamin dan transparansi penuh",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Kualitas",
                description:
                  "Setiap equipment dipilih dan dirawat dengan standar internasional untuk kepuasan pelanggan",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Komunitas",
                description:
                  "Kami membangun komunitas outdoor yang solid dan saling mendukung untuk berbagi pengalaman",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm p-8 text-center"
              >
                <div className="flex justify-center mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            Perjalanan Kami
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Dari garasi kecil hingga menjadi platform terpercaya dengan ribuan
            pelanggan
          </p>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-1 h-20 bg-primary/20 mt-4 hidden sm:block" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {item.year}
                  </h3>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            Tim Kami
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Orang-orang passionate yang membuat OutdoorCamp menjadi kenyataan
            setiap hari
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legality & Certifications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            Legalitas & Sertifikasi
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Kami beroperasi dengan legalitas penuh dan standar internasional
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Surat Izin Usaha",
                content: "SIUP No: 2020/0235/DTK/BPPT Jakarta Pusat",
                icon: "📜",
              },
              {
                title: "Sertifikasi ISO",
                content: "ISO 9001:2015 untuk Sistem Manajemen Kualitas",
                icon: "✅",
              },
              {
                title: "Asuransi Bisnis",
                content:
                  "Asuransi pertanggungjawaban publik dengan PT Asuransi Terpercaya",
                icon: "🛡️",
              },
              {
                title: "Compliance GDPR",
                content:
                  "Sistem data privacy yang sesuai standar internasional",
                icon: "🔒",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm p-8 border-l-4 border-primary"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            Lokasi Kami
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Kunjungi showroom kami atau pesan secara online untuk pengalaman
            yang lebih mudah
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Alamat Showroom
                  </h3>
                  <p className="text-muted-foreground">
                    Jl. Kemang Raya No. 45 <br />
                    Jakarta Selatan 12560
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Jam Operasional
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Senin - Jumat: 09:00 - 18:00</p>
                    <p>Sabtu: 10:00 - 16:00</p>
                    <p>Minggu & Libur: Tutup (Delivery tersedia)</p>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    Hubungi Kami
                  </h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>📞 +62 21-7123-4567</p>
                    <p>📱 +62 812-1234-5678 (WhatsApp)</p>
                    <p>📧 info@outdoorcamp.id</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-sm h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-3 opacity-30" />
                <p className="text-muted-foreground">
                  Peta Google Maps akan ditampilkan di sini
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap untuk Petualangan Berikutnya?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Percayakan perlengkapan outdoor Anda kepada OutdoorCamp dan nikmati
            pengalaman sewa yang tak terlupakan.
          </p>
          <Link to="/katalog">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Lihat Katalog Produk
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
