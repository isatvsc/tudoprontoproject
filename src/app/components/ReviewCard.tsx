import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Review } from "../data/mockData";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  return (
    <Card className="h-full">
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-semibold text-gray-900">{review.clientName}</h4>
            <p className="text-sm text-gray-500">{formatDate(review.date)}</p>
          </div>
          <div className="flex items-center gap-1 bg-[#F5A623]/10 px-2.5 py-1 rounded-full">
            <Star className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
            <span className="font-semibold text-sm text-gray-900">{review.rating}.0</span>
          </div>
        </div>
        {review.serviceType && (
          <p className="text-xs text-gray-500 mb-2">Serviço: {review.serviceType}</p>
        )}
        <p className="text-gray-700 leading-relaxed">{review.comment}</p>
      </CardContent>
    </Card>
  );
}
