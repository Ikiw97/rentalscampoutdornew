import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-24">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="text-8xl font-bold text-primary mb-4 opacity-80">
          404
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-3">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Maaf, halaman yang Anda cari tidak ada atau sudah dipindahkan. Silakan
          kembali ke beranda atau jelajahi menu lainnya.
        </p>
        <Link to="/">
          <Button size="lg" className="gap-2">
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
