import { Link, useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Menu, User, Search } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/318b555f15be6e68de0ba8d08eaccc31f9301558.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="TudoPronto" className="h-8 md:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/buscar" className="text-gray-700 hover:text-[#F5A623] transition-colors">
              Buscar Serviços
            </Link>
            <Link to="/entrar?tipo=profissional" className="text-gray-700 hover:text-[#F5A623] transition-colors">
              Sou Profissional
            </Link>
            <Button onClick={() => navigate('/entrar')} variant="outline" className="gap-2">
              <User className="w-4 h-4" />
              Entrar
            </Button>
            <Button onClick={() => navigate('/entrar?tipo=cliente&novo=true')} className="bg-[#F5A623] hover:bg-[#E09612] text-white">
              Cadastrar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-3">
              <Link 
                to="/buscar" 
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Search className="w-4 h-4" />
                Buscar Serviços
              </Link>
              <Link 
                to="/entrar?tipo=profissional" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sou Profissional
              </Link>
              <div className="px-4 flex flex-col gap-2 mt-2">
                <Button 
                  onClick={() => {
                    navigate('/entrar');
                    setMobileMenuOpen(false);
                  }} 
                  variant="outline" 
                  className="w-full gap-2"
                >
                  <User className="w-4 h-4" />
                  Entrar
                </Button>
                <Button 
                  onClick={() => {
                    navigate('/entrar?tipo=cliente&novo=true');
                    setMobileMenuOpen(false);
                  }} 
                  className="w-full bg-[#F5A623] hover:bg-[#E09612] text-white"
                >
                  Cadastrar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
