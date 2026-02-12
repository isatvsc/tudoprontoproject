import { useParams, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import StarRating from "../components/StarRating";
import ReviewCard from "../components/ReviewCard";
import { MapPin, CheckCircle, Briefcase, Star, ArrowLeft, Award } from "lucide-react";
import { professionals } from "../data/mockData";

export default function ProfessionalProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const professional = professionals.find(p => p.id === id);

  if (!professional) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-gray-600">Profissional não encontrado</p>
      </div>
    );
  }

  // Calcular distribuição de estrelas
  const ratingDistribution = [5, 4, 3, 2, 1].map(stars => {
    const count = professional.reviews.filter(r => r.rating === stars).length;
    const percentage = professional.reviews.length > 0 
      ? (count / professional.reviews.length) * 100 
      : 0;
    return { stars, count, percentage };
  });

  // Determinar selo
  const getBadge = () => {
    if (professional.rating >= 4.9) return { text: "Top Profissional", color: "bg-green-100 text-green-700 border-green-200" };
    if (professional.rating >= 4.7) return { text: "Bem Avaliado", color: "bg-blue-100 text-blue-700 border-blue-200" };
    return null;
  };

  const badge = getBadge();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>

        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="relative mx-auto sm:mx-0">
                <img
                  src={professional.photo}
                  alt={professional.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                {professional.verified && (
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-1">
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {professional.name}
                      </h1>
                      {badge && (
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${badge.color}`}>
                          <Award className="w-3.5 h-3.5" />
                          {badge.text}
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-gray-600">{professional.service}</p>
                  </div>
                  <Button 
                    onClick={() => navigate(`/solicitar/${professional.id}`)}
                    size="lg"
                    className="bg-[#F5A623] hover:bg-[#E09612] text-white"
                  >
                    Solicitar Orçamento
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center sm:justify-start">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <div className="flex items-center gap-1 bg-[#F5A623]/10 px-3 py-1.5 rounded-full">
                      <Star className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
                      <span className="font-bold text-lg">{professional.rating}</span>
                    </div>
                    <span className="text-gray-600">
                      <strong>{professional.reviewCount}</strong> avaliações
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 text-gray-600 justify-center sm:justify-start">
                  <div className="flex items-center gap-1 justify-center sm:justify-start">
                    <MapPin className="w-4 h-4" />
                    <span>{professional.location}</span>
                  </div>
                  <div className="flex items-center gap-1 justify-center sm:justify-start">
                    <Briefcase className="w-4 h-4" />
                    <span><strong>{professional.completedJobs}</strong> trabalhos concluídos</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Sobre</h2>
            <p className="text-gray-700 leading-relaxed">{professional.description}</p>
          </CardContent>
        </Card>

        {/* Services */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Serviços Oferecidos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {professional.services.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reviews Section */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Avaliações dos Clientes
            </h2>

            {/* Rating Summary */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Overall Rating */}
                <div className="text-center md:border-r md:pr-6">
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    {professional.rating}
                  </div>
                  <div className="flex justify-center mb-2">
                    <StarRating rating={professional.rating} size="md" />
                  </div>
                  <p className="text-sm text-gray-600">
                    {professional.reviewCount} avaliações
                  </p>
                </div>

                {/* Rating Distribution */}
                <div className="flex-1">
                  <div className="space-y-2">
                    {ratingDistribution.map(({ stars, count, percentage }) => (
                      <div key={stars} className="flex items-center gap-3">
                        <div className="flex items-center gap-1 w-16">
                          <span className="text-sm font-medium text-gray-700">{stars}</span>
                          <Star className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className="bg-[#F5A623] h-full rounded-full transition-all"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-12 text-right">
                          {count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-4">
                Comentários ({professional.reviews.length})
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {professional.reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}