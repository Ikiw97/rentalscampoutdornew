import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  stock: number;
}

export const ProductCard = ({
  image,
  name,
  category,
  price,
  rating,
  reviews,
  stock,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {stock > 0 && stock <= 3 && (
          <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-semibold">
            Terbatas
          </div>
        )}
        {stock === 0 && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Habis</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground font-medium uppercase">
          {category}
        </p>
        <h3 className="text-lg font-semibold text-foreground mt-1 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-accent text-accent"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating.toFixed(1)} ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 mb-4">
          <p className="text-2xl font-bold text-primary">
            Rp{price.toLocaleString("id-ID")}
            <span className="text-sm font-normal text-muted-foreground">
              /hari
            </span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Stok: {stock} {stock === 1 ? "unit" : "unit"}
          </p>
        </div>

        {/* Button */}
        <Button className="w-full gap-2" disabled={stock === 0}>
          <ShoppingCart className="w-4 h-4" />
          {stock > 0 ? "Sewa Sekarang" : "Tidak Tersedia"}
        </Button>
      </div>
    </div>
  );
};
