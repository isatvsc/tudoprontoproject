import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Testimonial } from "../data/mockData";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full bg-white">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <img 
            src={testimonial.photo} 
            alt={testimonial.clientName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.clientName}</h4>
            <p className="text-sm text-gray-600">{testimonial.service}</p>
          </div>
        </div>
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? 'fill-[#F5A623] text-[#F5A623]'
                  : 'fill-gray-200 text-gray-200'
              }`}
            />
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed italic">"{testimonial.comment}"</p>
      </CardContent>
    </Card>
  );
}
