import { useState, useMemo } from "react";
import { blogPosts, blogCategories } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { Search, Calendar, User, ChevronRight } from "lucide-react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");

  const filteredPosts = useMemo(() => {
    let result = blogPosts;

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Filter by category
    if (selectedCategory !== "Semua Kategori") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    return result;
  }, [searchTerm, selectedCategory]);

  const featuredPost = blogPosts[0];
  const otherPosts = filteredPosts.filter((p) => p.id !== featuredPost.id);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-3">Blog & Artikel</h1>
          <p className="text-lg text-primary-foreground/90">
            Tips, review, dan inspirasi untuk petualangan outdoor Anda
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari artikel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-colors text-sm ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <>
            {/* Featured Post */}
            {selectedCategory === "Semua Kategori" && searchTerm === "" && (
              <div className="mb-16">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden bg-gray-100 h-64 md:h-auto">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-primary uppercase">
                            {featuredPost.category}
                          </span>
                        </div>
                        <h2 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                          {featuredPost.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-6 border-t border-border">
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            {featuredPost.author}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formatDate(featuredPost.date)}
                          </div>
                        </div>
                        <Button className="gap-2">
                          Baca Selengkapnya
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            )}

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                >
                  <div className="relative overflow-hidden bg-gray-100 h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-primary uppercase">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-3 leading-tight line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="border-t border-border pt-4 flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                      <span className="text-xs">{post.readTime} min read</span>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <Button variant="outline" className="w-full gap-2">
                      Baca
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Artikel Tidak Ditemukan
            </h3>
            <p className="text-muted-foreground mb-8">
              Coba ubah filter atau cari dengan kata kunci lain
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Semua Kategori");
              }}
            >
              Reset Pencarian
            </Button>
          </div>
        )}

        {/* Newsletter Section */}
        <section className="mt-20 bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-3">
            Jangan Lewatkan Artikel Terbaru
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Subscribe newsletter kami untuk mendapatkan tips outdoor dan
            inspirasi petualangan langsung ke inbox Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Subscribe
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
