import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  CheckCircle,
  CreditCard,
  Truck,
  RotateCcw,
} from "lucide-react";

export default function CaraSewa() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const steps = [
    {
      number: "1",
      title: "Pilih Produk",
      description:
        "Jelajahi katalog kami dan pilih perlengkapan yang Anda butuhkan untuk petualangan Anda.",
      details: [
        "Lihat detail produk lengkap",
        "Periksa harga per hari",
        "Ketahui ketersediaan stok real-time",
        "Baca review dari pelanggan lain",
      ],
    },
    {
      number: "2",
      title: "Tentukan Tanggal Sewa",
      description:
        "Pilih tanggal mulai dan tanggal kembali sesuai kebutuhan Anda.",
      details: [
        "Minimal sewa 1 hari",
        "Harga otomatis terhitung berdasarkan durasi",
        "Dapatkan notifikasi ketersediaan stok",
        "Flexible dengan opsi perpanjangan",
      ],
    },
    {
      number: "3",
      title: "Proses Pembayaran",
      description:
        "Pilih metode pembayaran yang sesuai dengan preferensi Anda.",
      details: [
        "DP 20% atau bayar penuh",
        "Transfer bank / e-wallet (DANA, OVO, ShopeePay)",
        "COD (Bayar saat ambil) - opsional",
        "Sistem pembayaran aman dan terenkripsi",
      ],
    },
    {
      number: "4",
      title: "Ambil & Nikmati",
      description:
        "Ambil perlengkapan Anda dan mulai petualangan yang tak terlupakan.",
      details: [
        "Tersedia di lokasi kami atau pesan pengiriman",
        "Semua barang sudah diperiksa dan siap pakai",
        "Dapatkan petunjuk penggunaan gratis",
        "Chat support tersedia 24/7 untuk bantuan",
      ],
    },
    {
      number: "5",
      title: "Kembalikan Barang",
      description: "Kembalikan perlengkapan pada tanggal yang disepakati.",
      details: [
        "Kembalikan dalam kondisi baik",
        "Tidak ada denda jika tepat waktu",
        "Proses cepat dan mudah",
        "Dapatkan feedback dan rating untuk pengalaman terbaik",
      ],
    },
  ];

  const faqs = [
    {
      question: "Berapa durasi minimum sewa?",
      answer:
        "Durasi minimum sewa adalah 1 hari. Namun, untuk paket tertentu, ada minimum durasi khusus. Hubungi customer support kami untuk informasi lebih detail.",
    },
    {
      question: "Apa yang harus saya lakukan jika barang rusak?",
      answer:
        "Jika terjadi kerusakan selama penggunaan, silakan hubungi kami segera. Kami akan mengakses tingkat kerusakan dan menghitung biaya perbaikan atau penggantian sesuai kebijakan kami.",
    },
    {
      question: "Apakah ada biaya tambahan?",
      answer:
        "Biaya tambahan dapat berupa biaya pengiriman (jika memilih pengiriman), asuransi barang, dan denda keterlambatan pengembalian (Rp 50.000 per hari).",
    },
    {
      question: "Bagaimana jika saya ingin membatalkan pemesanan?",
      answer:
        "Pembatalan dapat dilakukan hingga 24 jam sebelum tanggal sewa. Pembatalan akan dikembalikan 80% dari total biaya. Pembatalan kurang dari 24 jam tidak dapat direfund.",
    },
    {
      question: "Apakah perlu deposit keamanan?",
      answer:
        "Iya, kami memerlukan deposit keamanan sebesar 30% dari total harga sewa. Deposit akan dikembalikan penuh jika barang dikembalikan dalam kondisi baik.",
    },
    {
      question: "Bagaimana cara pembayaran?",
      answer:
        "Kami menerima pembayaran melalui Transfer Bank (BCA, Mandiri, BRI), e-wallet (DANA, OVO, ShopeePay), dan COD (Bayar saat ambil). Proses pembayaran sangat aman dan terenkripsi.",
    },
    {
      question: "Apakah semua produk bisa dikirim?",
      answer:
        "Sebagian besar produk kami bisa dikirim ke seluruh Jakarta dan area sekitarnya. Untuk area diluar Jakarta, silakan hubungi kami untuk informasi pengiriman dan biaya tambahan.",
    },
    {
      question: "Apa yang dimaksud dengan 'Stok Real-time'?",
      answer:
        "Stok real-time artinya jumlah barang yang tersedia diperbarui secara otomatis setiap saat. Anda dapat melihat ketersediaan barang saat melakukan booking.",
    },
  ];

  const termsAndConditions = [
    {
      title: "1. Tanggung Jawab Penyewa",
      items: [
        "Penyewa bertanggung jawab menjaga barang sewa dari kerusakan atau kehilangan",
        "Penggunaan barang harus sesuai dengan pedoman penggunaan yang disediakan",
        "Barang harus dikembalikan dalam kondisi yang sama seperti saat dipinjam",
        "Penyewa harus melaporkan kerusakan atau kehilangan segera kepada kami",
      ],
    },
    {
      title: "2. Kebijakan Pembayaran",
      items: [
        "Pembayaran DP minimum 20% atau pembayaran penuh harus dilakukan saat booking",
        "Sisa pembayaran (jika DP) harus dilunasi sebelum pengambilan barang",
        "Pembayaran dilakukan melalui transfer bank, e-wallet, atau COD",
        "Biaya tambahan (pengiriman, asuransi) akan diinformasikan sebelumnya",
      ],
    },
    {
      title: "3. Kebijakan Pembatalan",
      items: [
        "Pembatalan dapat dilakukan maksimal 24 jam sebelum tanggal sewa",
        "Pembatalan 24 jam sebelumnya akan direfund 80% dari total biaya",
        "Pembatalan kurang dari 24 jam tidak dapat direfund",
        "Pembatalan harus dilakukan melalui chat atau email customer service kami",
      ],
    },
    {
      title: "4. Kebijakan Denda & Penggantian",
      items: [
        "Denda keterlambatan pengembalian: Rp 50.000 per hari",
        "Kerusakan ringan (bisa diperbaiki): Biaya perbaikan sesuai assessment",
        "Kerusakan total (tidak bisa diperbaiki): Biaya penggantian 50% harga barang",
        "Barang hilang: Biaya penggantian 100% harga barang + penalty",
      ],
    },
    {
      title: "5. Persyaratan Penyewa",
      items: [
        "Penyewa harus berusia minimal 18 tahun",
        "Penyewa harus memiliki identitas valid (KTP, SIM, atau paspor)",
        "Penyewa harus memberikan data kontak yang valid",
        "Penyewa dengan riwayat buruk dapat diblokir dari layanan kami",
      ],
    },
    {
      title: "6. Privasi & Data",
      items: [
        "Data penyewa akan disimpan dengan aman dan terenkripsi",
        "Data tidak akan dibagikan kepada pihak ketiga tanpa persetujuan",
        "Penyewa memiliki hak untuk mengakses atau menghapus data pribadi mereka",
        "Kami mengikuti standar keamanan data internasional",
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-3">Cara Menyewa</h1>
          <p className="text-lg text-primary-foreground/90">
            Panduan lengkap proses penyewaan perlengkapan outdoor di OutdoorCamp
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Steps Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            5 Langkah Mudah Menyewa
          </h2>
          <p className="text-muted-foreground mb-12">
            Ikuti langkah-langkah berikut untuk menyewa perlengkapan outdoor
            favorit Anda
          </p>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Metode Pembayaran */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Metode Pembayaran
          </h2>
          <p className="text-muted-foreground mb-12">
            Kami menerima berbagai metode pembayaran untuk kemudahan Anda
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <CreditCard className="w-10 h-10" />,
                title: "Transfer Bank",
                description:
                  "Transfer langsung ke rekening OutdoorCamp via BCA, Mandiri, atau BRI",
              },
              {
                icon: "💳",
                title: "E-Wallet",
                description:
                  "DANA, OVO, ShopeePay - pembayaran instan dan aman",
              },
              {
                icon: <Truck className="w-10 h-10" />,
                title: "COD (Bayar Saat Ambil)",
                description:
                  "Bayar langsung saat mengambil barang di lokasi kami atau pengiriman",
              },
            ].map((method, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  {typeof method.icon === "string" ? (
                    <span className="text-4xl">{method.icon}</span>
                  ) : (
                    <div className="text-primary">{method.icon}</div>
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Syarat & Ketentuan
          </h2>
          <p className="text-muted-foreground mb-12">
            Harap baca dan pahami syarat & ketentuan penggunaan layanan kami
          </p>

          <div className="space-y-6">
            {termsAndConditions.map((section, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3">
                      <span className="text-primary font-bold mt-1 flex-shrink-0">
                        •
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-muted-foreground mb-12">
            Jawaban untuk pertanyaan yang sering diajukan oleh pelanggan kami
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm border border-border overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors"
                >
                  <h3 className="font-semibold text-foreground text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 border-t border-border bg-secondary/30">
                    <p className="text-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Memulai?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Jangan tunggu lagi! Pesan perlengkapan outdoor Anda sekarang dan
            dapatkan pengalaman sewa yang menyenangkan.
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
