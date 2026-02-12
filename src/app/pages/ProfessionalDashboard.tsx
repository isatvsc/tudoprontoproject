import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import StarRating from "../components/StarRating";
import { 
  Bell, 
  Star, 
  Briefcase, 
  Settings, 
  CheckCircle,
  Clock,
  X,
  User,
  Edit,
  LogOut
} from "lucide-react";

interface ServiceRequest {
  id: string;
  clientName: string;
  service: string;
  description: string;
  urgency: string;
  date: string;
  status: "pending" | "accepted" | "completed" | "rejected";
}

export default function ProfessionalDashboard() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<ServiceRequest[]>([
    {
      id: "1",
      clientName: "Maria Santos",
      service: "Instalação elétrica",
      description: "Preciso instalar um chuveiro elétrico no banheiro",
      urgency: "urgent",
      date: "2026-02-11",
      status: "pending"
    },
    {
      id: "2",
      clientName: "Pedro Costa",
      service: "Troca de fiação",
      description: "A fiação da sala está antiga e precisa ser trocada",
      urgency: "soon",
      date: "2026-02-10",
      status: "pending"
    },
    {
      id: "3",
      clientName: "Ana Paula",
      service: "Manutenção preventiva",
      description: "Gostaria de fazer uma revisão completa da parte elétrica",
      urgency: "flexible",
      date: "2026-02-09",
      status: "accepted"
    }
  ]);

  const handleAccept = (id: string) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: "accepted" as const } : req
    ));
  };

  const handleReject = (id: string) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: "rejected" as const } : req
    ));
  };

  const pendingRequests = requests.filter(r => r.status === "pending");
  const acceptedRequests = requests.filter(r => r.status === "accepted");
  const completedRequests = requests.filter(r => r.status === "completed");

  const urgencyLabels = {
    urgent: { text: "Urgente", color: "bg-red-100 text-red-700" },
    soon: { text: "Em breve", color: "bg-yellow-100 text-yellow-700" },
    flexible: { text: "Flexível", color: "bg-green-100 text-green-700" }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Painel do Profissional</h1>
              <p className="text-gray-600">Bem-vindo, João Silva</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Edit className="w-4 h-4" />
                Editar Perfil
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={() => navigate('/')}
              >
                <LogOut className="w-4 h-4" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Novas Solicitações</p>
                  <p className="text-3xl font-bold text-gray-900">{pendingRequests.length}</p>
                </div>
                <div className="w-12 h-12 bg-[#F5A623]/10 rounded-full flex items-center justify-center">
                  <Bell className="w-6 h-6 text-[#F5A623]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avaliação</p>
                  <p className="text-3xl font-bold text-gray-900">4.8</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600 fill-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Trabalhos Concluídos</p>
                  <p className="text-3xl font-bold text-gray-900">245</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Em Andamento</p>
                  <p className="text-3xl font-bold text-gray-900">{acceptedRequests.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending">
              Pendentes ({pendingRequests.length})
            </TabsTrigger>
            <TabsTrigger value="accepted">
              Aceitas ({acceptedRequests.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Concluídas
            </TabsTrigger>
          </TabsList>

          {/* Pending Requests */}
          <TabsContent value="pending" className="space-y-4">
            {pendingRequests.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-gray-600">Nenhuma solicitação pendente no momento</p>
                </CardContent>
              </Card>
            ) : (
              pendingRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg text-gray-900">
                            {request.clientName}
                          </h3>
                          <Badge className={urgencyLabels[request.urgency as keyof typeof urgencyLabels].color}>
                            {urgencyLabels[request.urgency as keyof typeof urgencyLabels].text}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-1">{request.service}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(request.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-700">{request.description}</p>
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        onClick={() => handleAccept(request.id)}
                        className="flex-1 bg-[#F5A623] hover:bg-[#E09612] text-white gap-2"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Aceitar
                      </Button>
                      <Button 
                        onClick={() => handleReject(request.id)}
                        variant="outline"
                        className="flex-1 gap-2"
                      >
                        <X className="w-4 h-4" />
                        Recusar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Accepted Requests */}
          <TabsContent value="accepted" className="space-y-4">
            {acceptedRequests.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-gray-600">Nenhum trabalho em andamento</p>
                </CardContent>
              </Card>
            ) : (
              acceptedRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">
                          {request.clientName}
                        </h3>
                        <p className="text-gray-600 mb-1">{request.service}</p>
                        <p className="text-sm text-gray-500">
                          Aceito em {new Date(request.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700">
                        Em andamento
                      </Badge>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-700">{request.description}</p>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Marcar como Concluído
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Completed */}
          <TabsContent value="completed">
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-gray-600">Histórico de trabalhos concluídos</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
