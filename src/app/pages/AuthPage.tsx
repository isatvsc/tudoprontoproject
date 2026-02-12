import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { UserCircle, Briefcase } from "lucide-react";
import logo from "figma:asset/318b555f15be6e68de0ba8d08eaccc31f9301558.png";

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const tipo = searchParams.get("tipo") || "cliente";
  const isNew = searchParams.get("novo") === "true";
  
  const [isLogin, setIsLogin] = useState(!isNew);
  const [userType, setUserType] = useState(tipo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/registration
    if (userType === "profissional") {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <img src={logo} alt="TudoPronto" className="h-12 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900">
            {isLogin ? "Bem-vindo de volta!" : "Criar conta"}
          </h1>
          <p className="text-gray-600 mt-2">
            {isLogin ? "Faça login para continuar" : "Cadastre-se gratuitamente"}
          </p>
        </div>

        {/* User Type Selection */}
        {!isLogin && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setUserType("cliente")}
              className={`p-6 rounded-lg border-2 transition-all ${
                userType === "cliente"
                  ? "border-[#F5A623] bg-[#F5A623]/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <UserCircle className={`w-12 h-12 mx-auto mb-2 ${
                userType === "cliente" ? "text-[#F5A623]" : "text-gray-400"
              }`} />
              <p className="font-semibold text-gray-900">Sou Cliente</p>
              <p className="text-xs text-gray-600 mt-1">Buscar serviços</p>
            </button>

            <button
              onClick={() => setUserType("profissional")}
              className={`p-6 rounded-lg border-2 transition-all ${
                userType === "profissional"
                  ? "border-[#F5A623] bg-[#F5A623]/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Briefcase className={`w-12 h-12 mx-auto mb-2 ${
                userType === "profissional" ? "text-[#F5A623]" : "text-gray-400"
              }`} />
              <p className="font-semibold text-gray-900">Sou Profissional</p>
              <p className="text-xs text-gray-600 mt-1">Oferecer serviços</p>
            </button>
          </div>
        )}

        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Digite seu nome"
                    className="mt-2"
                    required
                  />
                </div>
              )}

              {!isLogin && userType === "profissional" && (
                <div>
                  <Label htmlFor="profession">Profissão</Label>
                  <Input
                    id="profession"
                    type="text"
                    placeholder="Ex: Eletricista"
                    className="mt-2"
                    required
                  />
                </div>
              )}

              <div>
                <Label htmlFor="email">E-mail ou Telefone</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="Digite seu e-mail ou telefone"
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  className="mt-2"
                  required
                />
              </div>

              {!isLogin && (
                <div>
                  <Label htmlFor="confirm-password">Confirmar Senha</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Digite sua senha novamente"
                    className="mt-2"
                    required
                  />
                </div>
              )}

              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-sm text-[#F5A623] hover:underline">
                    Esqueceu a senha?
                  </a>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-[#F5A623] hover:bg-[#E09612] text-white"
              >
                {isLogin ? "Entrar" : "Criar Conta"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#F5A623] hover:underline font-semibold"
                >
                  {isLogin ? "Cadastre-se" : "Faça login"}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
