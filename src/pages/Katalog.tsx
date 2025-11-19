import { useState, useMemo } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, priceRanges } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, X } from "lucide-react";

export default function Katalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [selectedPriceRange, setSelectedPriceRange] = useState("Semua Harga");
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Filter by category
    if (selectedCategory !== "Semua Kategori") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by price range
    const priceRange = priceRanges.find((r) => r.label === selectedPriceRange);
    if (priceRange) {
      result = result.filter(
        (p) => p.price >= priceRange.min && p.price <= priceRange.max,
      );
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "newest") {
      result.reverse();
    }

    return result;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-3">Katalog Produk</h1>
          <p className="text-lg text-primary-foreground/90">
            Jelajahi koleksi lengkap perlengkapan outdoor kami
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:block ${showFilters ? "block" : "hidden"}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 sticky top-24">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Kategori</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary text-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold text-foreground mb-3">Harga</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPriceRange(range.label)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                        selectedPriceRange === range.label
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary text-foreground"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("Semua Kategori");
                    setSelectedPriceRange("Semua Harga");
                    setSortBy("relevance");
                  }}
                >
                  Reset Filter
                </Button>
              </div>

              <button
                onClick={() => setShowFilters(false)}
                className="lg:hidden flex items-center justify-center gap-2 w-full border border-border rounded-md py-2 text-sm"
              >
                <X className="w-4 h-4" />
                Tutup Filter
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Controls */}
            <div className="space-y-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Cari produk..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center justify-center gap-2 border border-border rounded-lg px-4 py-2 text-foreground hover:bg-secondary transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filter
                </button>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Menampilkan {filteredProducts.length} produk
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="relevance">Relevan</option>
                  <option value="price-low">Harga: Rendah ke Tinggi</option>
                  <option value="price-high">Harga: Tinggi ke Rendah</option>
                  <option value="rating">Rating Tertinggi</option>
                  <option value="newest">Produk Terbaru</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Produk Tidak Ditemukan
                </h3>
                <p className="text-muted-foreground mb-4">
                  Coba ubah filter atau cari dengan kata kunci lain
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("Semua Kategori");
                    setSelectedPriceRange("Semua Harga");
                  }}
                >
                  Reset Pencarian
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
