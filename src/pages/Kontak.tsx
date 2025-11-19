import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Telepon",
      value: "+62 21-7123-4567",
      description: "Hubungi kami Senin-Jumat, 09:00-18:00",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp",
      value: "+62 812-1234-5678",
      description: "Chat cepat untuk pertanyaan atau booking",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "info@outdoorcamp.id",
      description: "Kami akan merespon dalam 24 jam",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Lokasi",
      value: "Jakarta Selatan",
      description: "Kunjungi showroom kami untuk konsultasi langsung",
    },
  ];

  const operatingHours = [
    { day: "Senin - Jumat", hours: "09:00 - 18:00" },
    { day: "Sabtu", hours: "10:00 - 16:00" },
    { day: "Minggu & Libur", hours: "Tutup (Delivery tersedia)" },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-3">Hubungi Kami</h1>
          <p className="text-lg text-primary-foreground/90">
            Ada pertanyaan? Tim kami siap membantu Anda 24/7
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Kirim Pesan Kami
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Pesan Terkirim Sukses!
                  </h3>
                  <p className="text-green-800">
                    Terima kasih telah menghubungi kami. Tim kami akan merespon
                    dalam waktu 24 jam.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+62 812-1234-5678"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subjek
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Pertanyaan tentang harga"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tulis pesan Anda di sini..."
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="w-5 h-5" />
                    Kirim Pesan
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Hubungi Kami
              </h3>
              <div className="space-y-6">
                {contactMethods.map((method, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-primary flex-shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {method.title}
                      </h4>
                      <p className="font-medium text-primary text-sm mb-1">
                        {method.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  Jam Operasional
                </h3>
              </div>
              <div className="space-y-3">
                {operatingHours.map((schedule, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center pb-3 border-b border-border last:border-0"
                  >
                    <span className="text-foreground font-medium">
                      {schedule.day}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Lokasi Kami
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4 opacity-30" />
                <p className="text-muted-foreground font-medium">
                  Peta Google Maps akan ditampilkan di sini
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Jl. Kemang Raya No. 45, Jakarta Selatan
                </p>
              </div>
            </div>

            {/* Address Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Alamat Lengkap
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Alamat</p>
                    <p className="text-foreground font-medium">
                      Jl. Kemang Raya No. 45
                      <br />
                      Jakarta Selatan 12560
                      <br />
                      Indonesia
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-1">
                      Area Layanan
                    </p>
                    <p className="text-foreground font-medium">
                      Jakarta, Tangerang, Depok, Bogor
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-1">
                      Pengiriman
                    </p>
                    <p className="text-foreground font-medium">
                      Gratis untuk area Jakarta
                      <br />
                      Ongkir terbatas untuk area lain
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-secondary/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Akses Cepat
                </h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    📞 Hubungi WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    📧 Kirim Email
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    🗺️ Buka di Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Pertanyaan yang Sering Diajukan
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Berapa biaya pengiriman?",
                a: "Pengiriman gratis untuk wilayah Jakarta. Untuk area lain, hubungi kami untuk penawaran khusus.",
              },
              {
                q: "Bagaimana jika ada barang yang bermasalah?",
                a: "Hubungi customer service kami segera melalui WhatsApp atau telepon. Kami siap membantu 24/7.",
              },
              {
                q: "Apakah bisa pickup langsung?",
                a: "Ya, Anda bisa pickup langsung ke showroom kami di Kemang. Disarankan booking terlebih dahulu.",
              },
              {
                q: "Berapa waktu respon customer service?",
                a: "Kami merespon dalam waktu maksimal 1 jam untuk WhatsApp, dan 24 jam untuk email.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="font-semibold text-foreground mb-3">{item.q}</h4>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Punya Pertanyaan Lain?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Tim customer service kami yang friendly siap membantu menjawab semua
            pertanyaan Anda. Jangan ragu untuk menghubungi kami!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              💬 Chat WhatsApp
            </Button>
            <Button
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-white/10"
            >
              📞 Hubungi Telepon
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
