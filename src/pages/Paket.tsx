import { useState } from "react";
import { packages } from "@/data/packages";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ShoppingCart, Star } from "lucide-react";

export default function Paket() {
  const [selectedTab, setSelectedTab] = useState<"packages" | "items">(
    "packages",
  );
  const [cartNotification, setCartNotification] = useState<string | null>(null);

  const handleAddToCart = (name: string) => {
    setCartNotification(`${name} ditambahkan ke keranjang!`);
    setTimeout(() => setCartNotification(null), 2000);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-3">Paket Camping</h1>
          <p className="text-lg text-primary-foreground/90">
            Paket bundel hemat dengan semua equipment yang Anda butuhkan
          </p>
        </div>
      </section>

      {/* Notification */}
      {cartNotification && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg z-40 flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          {cartNotification}
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-12 border-b border-border">
          <button
            onClick={() => setSelectedTab("packages")}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
              selectedTab === "packages"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            📦 Paket Bundle
          </button>
          <button
            onClick={() => setSelectedTab("items")}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
              selectedTab === "items"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            🛒 Pesan Satuan
          </button>
        </div>

        {/* Packages Tab */}
        {selectedTab === "packages" && (
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground mb-8">
                Kami menyediakan paket bundel hemat yang dirancang khusus untuk
                berbagai kebutuhan camping Anda. Setiap paket sudah termasuk
                semua equipment yang diperlukan.
              </p>
            </div>

            {/* Packages Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gray-100 h-64">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                      {pkg.capacity}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {pkg.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(pkg.rating)
                                  ? "fill-accent text-accent"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {pkg.rating.toFixed(1)}/5
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <p className="font-semibold text-foreground mb-2">
                        Keunggulan Paket:
                      </p>
                      <ul className="space-y-1">
                        {pkg.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex gap-2 text-sm text-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Items Include */}
                    <div>
                      <p className="font-semibold text-foreground mb-2">
                        Termasuk:
                      </p>
                      <ul className="space-y-1">
                        {pkg.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary">+</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For */}
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-primary mb-1">
                        COCOK UNTUK:
                      </p>
                      <p className="text-sm text-foreground">{pkg.ideal}</p>
                    </div>

                    {/* Price & Button */}
                    <div className="border-t border-border pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-bold text-primary">
                          Rp{pkg.price.toLocaleString("id-ID")}
                        </p>
                        <p className="text-xs text-muted-foreground">/hari</p>
                      </div>
                      <Button
                        className="gap-2"
                        onClick={() => handleAddToCart(pkg.name)}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Pesan
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Informasi Penting
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    ✅ Semua Paket Include:
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>✓ Semua equipment berkualitas tinggi</li>
                    <li>✓ Petunjuk setup gratis</li>
                    <li>✓ Support 24/7 via chat</li>
                    <li>✓ Asuransi barang (optional)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    💡 Tips Memilih Paket:
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Hitung jumlah anggota grup</li>
                    <li>• Pertimbangkan lokasi & durasi</li>
                    <li>• Hubungi kami untuk rekomendasi</li>
                    <li>• Booking minimal 3 hari sebelumnya</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Items Tab */}
        {selectedTab === "items" && (
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground mb-8">
                Jika Anda lebih suka memilih item secara individu, kami
                menyediakan katalog lengkap dengan berbagai pilihan. Anda dapat
                membuat paket custom sesuai kebutuhan Anda.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 12).map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleAddToCart(product.name)}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link to="/katalog">
                <Button size="lg" className="gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Lihat Semua Produk
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
