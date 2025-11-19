import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg">
                <span className="text-lg">⛺</span>
              </div>
              <h3 className="text-lg font-bold">OutdoorCamp</h3>
            </div>
            <p className="text-sm text-white/80">
              Platform rental perlengkapan outdoor terpercaya dengan koleksi
              lengkap dan harga kompetitif.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white/80 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/katalog"
                  className="hover:text-white/80 transition-colors"
                >
                  Katalog
                </Link>
              </li>
              <li>
                <Link
                  to="/cara-sewa"
                  className="hover:text-white/80 transition-colors"
                >
                  Cara Sewa
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-white/80 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/tentang"
                  className="hover:text-white/80 transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/kontak"
                  className="hover:text-white/80 transition-colors"
                >
                  Kontak
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>info@outdoorcamp.id</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>&copy; {currentYear} OutdoorCamp. Semua hak dilindungi.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
