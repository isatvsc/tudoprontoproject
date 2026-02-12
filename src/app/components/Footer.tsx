import { Link } from "react-router";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/logotudopronto2.png";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="TudoPronto" className="h-10 mb-4 brightness-2 invert" />
            <p className="text-sm text-gray-400 max-w-md">
              Conectando você aos melhores profissionais de Itapipoca. Serviços de qualidade com segurança e rapidez.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-[#F5A623] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#F5A623] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/buscar" className="text-sm hover:text-[#F5A623] transition-colors">
                  Buscar Serviços
                </Link>
              </li>
              <li>
                <Link to="/entrar?tipo=profissional" className="text-sm hover:text-[#F5A623] transition-colors">
                  Sou Profissional
                </Link>
              </li>
              <li>
                <Link to="/entrar" className="text-sm hover:text-[#F5A623] transition-colors">
                  Entrar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Itapipoca, CE</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(88) 99267-7547</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contato@tudopronto.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 TudoPronto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
