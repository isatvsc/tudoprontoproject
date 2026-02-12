import { useNavigate } from "react-router";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Star, MapPin, CheckCircle, Briefcase, Award } from "lucide-react";
import { Professional } from "../data/mockData";

interface ProfessionalCardProps {
  professional: Professional;
}

export default function ProfessionalCard({ professional }: ProfessionalCardProps) {
  const navigate = useNavigate();

  // Determinar selo baseado na avaliação
  const getBadge = () => {
    if (professional.rating >= 4.9) return { text: "Top Profissional", color: "bg-green-100 text-green-700 border-green-200" };
    if (professional.rating >= 4.7) return { text: "Bem Avaliado", color: "bg-blue-100 text-blue-700 border-blue-200" };
    return null;
  };

  const badge = getBadge();

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Photo */}
          <div className="flex-shrink-0 relative">
            <img
              src={professional.photo}
              alt={professional.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
            />
            {professional.verified && (
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-lg text-gray-900">{professional.name}</h3>
                  {badge && (
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${badge.color}`}>
                      <Award className="w-3 h-3" />
                      {badge.text}
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{professional.service}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1 bg-[#F5A623]/10 px-2.5 py-1 rounded-full">
                <Star className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                <span className="font-bold text-gray-900">{professional.rating}</span>
              </div>
              <span className="text-sm text-gray-600">
                <strong>{professional.reviewCount}</strong> avaliações
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1 text-gray-600 mb-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{professional.location}</span>
            </div>

            {/* Completed Jobs */}
            <div className="flex items-center gap-1 text-gray-600 mb-4">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm"><strong>{professional.completedJobs}</strong> trabalhos concluídos</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                onClick={() => navigate(`/profissional/${professional.id}`)}
                variant="outline"
                className="flex-1"
              >
                Ver Perfil
              </Button>
              <Button 
                onClick={() => navigate(`/solicitar/${professional.id}`)}
                className="flex-1 bg-[#F5A623] hover:bg-[#E09612] text-white"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}