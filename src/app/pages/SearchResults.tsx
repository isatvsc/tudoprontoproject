import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import ProfessionalCard from "../components/ProfessionalCard";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Search, SlidersHorizontal, TrendingUp, Star, Users, Clock } from "lucide-react";
import { professionals, services } from "../data/mockData";

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedService, setSelectedService] = useState(searchParams.get("servico") || "all");
  const [sortBy, setSortBy] = useState("rating");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProfessionals = professionals.filter((prof) => {
    const matchesQuery = searchQuery === "" || 
      prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesService = selectedService === "all" || 
      prof.service.toLowerCase().includes(selectedService.toLowerCase());
    
    return matchesQuery && matchesService;
  }).sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "reviews") return b.reviewCount - a.reviewCount;
    if (sortBy === "jobs") return b.completedJobs - a.completedJobs;
    return 0;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
  };

  useEffect(() => {
    const q = searchParams.get("q");
    const servico = searchParams.get("servico");
    if (q) setSearchQuery(q);
    if (servico) setSelectedService(servico);
  }, [searchParams]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Search Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <form onSubmit={handleSearch} className="mb-4">
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-lg px-4 border">
                <Search className="w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar profissionais ou serviços..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button type="submit" className="bg-[#F5A623] hover:bg-[#E09612] text-white">
                Buscar
              </Button>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center gap-2 text-gray-700 font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
            </button>
            
            <div className={`${showFilters ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row gap-3 w-full sm:w-auto`}>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="w-full sm:w-[220px]">
                  <SelectValue placeholder="Tipo de serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os serviços</SelectItem>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.name}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[220px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Melhor Avaliação
                    </div>
                  </SelectItem>
                  <SelectItem value="reviews">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Mais Avaliações
                    </div>
                  </SelectItem>
                  <SelectItem value="jobs">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Mais Contratados
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters Display */}
            {(selectedService !== "all" || sortBy !== "rating") && (
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Filtros ativos:</span>
                {selectedService !== "all" && (
                  <span className="bg-[#F5A623]/10 text-[#F5A623] px-3 py-1 rounded-full">
                    {selectedService}
                  </span>
                )}
                {sortBy !== "rating" && (
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {sortBy === "reviews" ? "Mais avaliações" : "Mais contratados"}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Filter Chips */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-sm text-gray-600 flex-shrink-0">Filtros rápidos:</span>
            <button
              onClick={() => setSortBy("rating")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors flex-shrink-0 ${
                sortBy === "rating" 
                  ? "bg-[#F5A623] text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              <Star className="w-3.5 h-3.5" />
              Melhor Avaliação
            </button>
            <button
              onClick={() => setSortBy("jobs")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors flex-shrink-0 ${
                sortBy === "jobs" 
                  ? "bg-[#F5A623] text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Mais Contratados
            </button>
            <button
              onClick={() => {
                const topPros = professionals.filter(p => p.rating >= 4.8);
                if (filteredProfessionals.some(p => topPros.includes(p))) {
                  setSortBy("rating");
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-green-100 text-green-700 flex-shrink-0"
            >
              <Users className="w-3.5 h-3.5" />
              Top Profissionais
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {filteredProfessionals.length} {filteredProfessionals.length === 1 ? 'profissional encontrado' : 'profissionais encontrados'}
          </h1>
          {searchQuery && (
            <p className="text-gray-600">
              Resultados para <strong>"{searchQuery}"</strong>
            </p>
          )}
        </div>

        {filteredProfessionals.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg mb-2">Nenhum profissional encontrado</p>
            <p className="text-gray-500 mb-6">Tente ajustar os filtros ou buscar por outro termo</p>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedService("all");
                setSortBy("rating");
                setSearchParams({});
              }}
              variant="outline"
            >
              Limpar Filtros
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredProfessionals.map((professional) => (
              <ProfessionalCard key={professional.id} professional={professional} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}