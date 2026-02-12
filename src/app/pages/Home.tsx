import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import ServiceCard from "../components/ServiceCard";
import ProfessionalCard from "../components/ProfessionalCard";
import TestimonialCard from "../components/TestimonialCard";
import { Search, CheckCircle, Clock, Shield, TrendingUp, BadgeCheck, Lock, MapPin, Users } from "lucide-react";
import { services, popularSearches, professionals, testimonials } from "../data/mockData";
import logo from "figma:asset/7fab7c4942cc1733e2a1eb42c3d0431a88e3becb.png";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handlePopularSearch = (query: string) => {
    navigate(`/buscar?q=${encodeURIComponent(query)}`);
  };

  // Top profissionais (rating >= 4.8)
  const topProfessionals = professionals
    .filter(p => p.rating >= 4.8)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#F5A623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Logo */}
            <img src={logo} alt="TudoPronto" className="h-16 md:h-20 mx-auto mb-8 [filter:drop-shadow(0_4px_12px_rgba(0,0,0,0.6))]" />
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              O melhor para o seu conforto
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Encontre profissionais qualificados em Itapipoca de forma rápida e segura
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-2 bg-white rounded-lg p-2 shadow-lg">
                <div className="flex-1 flex items-center gap-2 px-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Qual serviço você precisa?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <Button 
                  type="submit"
                  className="bg-[#F5A623] hover:bg-[#E09612] text-white px-8 font-semibold"
                >
                  Buscar
                </Button>
              </div>
            </form>

            {/* Popular Searches */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-3">Buscas populares:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handlePopularSearch(search)}
                    className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors backdrop-blur-sm"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <BadgeCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm md:text-base">Profissionais</p>
                <p className="text-xs text-gray-600">Verificados</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm md:text-base">Plataforma</p>
                <p className="text-xs text-gray-600">Segura</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm md:text-base">Avaliações</p>
                <p className="text-xs text-gray-600">Reais</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm md:text-base">Serviços</p>
                <p className="text-xs text-gray-600">Locais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Como Funciona
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encontre profissionais qualificados em 4 passos simples
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Escolha o Serviço</h3>
              <p className="text-sm text-gray-600">Busque pelo serviço que você precisa</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Compare Profissionais</h3>
              <p className="text-sm text-gray-600">Veja perfis, preços e disponibilidade</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Veja Avaliações</h3>
              <p className="text-sm text-gray-600">Confira comentários de clientes reais</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Contrate com Segurança</h3>
              <p className="text-sm text-gray-600">Solicite orçamento e contrate o melhor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Professionals Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              ⭐ Profissionais Mais Bem Avaliados em Itapipoca
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça os profissionais com as melhores avaliações da plataforma
            </p>
          </div>
          <div className="space-y-4">
            {topProfessionals.map((professional) => (
              <ProfessionalCard key={professional.id} professional={professional} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              onClick={() => navigate('/buscar')}
              variant="outline"
              size="lg"
              className="border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623] hover:text-white"
            >
              Ver Todos os Profissionais
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Serviços Populares na Região
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os serviços mais solicitados em Itapipoca
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Depoimentos reais de quem já usou a plataforma
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#F5A623] to-[#E09612]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <p className="text-sm md:text-base opacity-90">Profissionais Cadastrados</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">2.500+</div>
              <p className="text-sm md:text-base opacity-90">Serviços Realizados</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <p className="text-sm md:text-base opacity-90">Clientes Satisfeitos</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.8⭐</div>
              <p className="text-sm md:text-base opacity-90">Avaliação Média</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Rapidez</h3>
              <p className="text-sm text-gray-600">Encontre profissionais em minutos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Segurança</h3>
              <p className="text-sm text-gray-600">Profissionais verificados</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Confiança</h3>
              <p className="text-sm text-gray-600">Avaliações reais de clientes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Qualidade</h3>
              <p className="text-sm text-gray-600">Melhores profissionais da região</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Você é um profissional?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Cadastre-se gratuitamente e comece a receber solicitações de clientes em Itapipoca
          </p>
          <Button 
            onClick={() => navigate('/entrar?tipo=profissional&novo=true')}
            size="lg"
            className="bg-[#F5A623] hover:bg-[#E09612] text-white px-8"
          >
            Cadastrar como Profissional
          </Button>
        </div>
      </section>
    </div>
  );
}