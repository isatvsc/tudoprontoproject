import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#F5A623] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">
          A página que você está procurando não existe.
        </p>
        <Button 
          onClick={() => navigate('/')}
          className="bg-[#F5A623] hover:bg-[#E09612] text-white gap-2"
        >
          <Home className="w-4 h-4" />
          Voltar para Início
        </Button>
      </div>
    </div>
  );
}
