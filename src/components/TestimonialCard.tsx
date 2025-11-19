import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  image: string;
  name: string;
  title: string;
  content: string;
  rating: number;
}

export const TestimonialCard = ({
  image,
  name,
  title,
  content,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-border hover:shadow-lg transition-shadow duration-300">
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-accent mb-3 opacity-30" />

      {/* Content */}
      <p className="text-foreground mb-4 leading-relaxed italic">{content}</p>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
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

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-foreground text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
  );
};
