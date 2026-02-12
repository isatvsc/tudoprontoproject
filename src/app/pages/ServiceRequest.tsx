import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ArrowLeft, Check } from "lucide-react";
import { professionals } from "../data/mockData";

export default function ServiceRequest() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    description: "",
    urgency: "",
    name: "",
    phone: "",
    email: ""
  });

  const professional = professionals.find(p => p.id === id);

  if (!professional) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-gray-600">Profissional não encontrado</p>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Simulate successful submission
      setStep(4);
    }
  };

  if (step === 4) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <Card className="max-w-md mx-4 w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Solicitação Enviada!</h2>
            <p className="text-gray-600 mb-6">
              {professional.name} receberá sua solicitação e entrará em contato em breve.
            </p>
            <div className="flex flex-col gap-3">
              <Button onClick={() => navigate('/')} className="bg-[#F5A623] hover:bg-[#E09612] text-white">
                Voltar para Início
              </Button>
              <Button onClick={() => navigate('/buscar')} variant="outline">
                Buscar Mais Profissionais
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                    s <= step
                      ? "bg-[#F5A623] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-12 h-1 ${
                      s < step ? "bg-[#F5A623]" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {step === 1 && "Descreva o serviço"}
              {step === 2 && "Detalhes do serviço"}
              {step === 3 && "Seus dados"}
            </p>
          </div>
        </div>

        {/* Professional Info */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <img
                src={professional.photo}
                alt={professional.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{professional.name}</h3>
                <p className="text-sm text-gray-600">{professional.service}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form */}
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  <div>
                    <Label htmlFor="service">Qual serviço você precisa?</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                      required
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        {professional.services.map((service, index) => (
                          <SelectItem key={index} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="description">Descreva o problema ou serviço necessário</Label>
                    <Textarea
                      id="description"
                      placeholder="Ex: Preciso trocar a torneira da cozinha que está vazando..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="mt-2 min-h-[120px]"
                      required
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div>
                    <Label htmlFor="urgency">Qual a urgência?</Label>
                    <Select
                      value={formData.urgency}
                      onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                      required
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecione a urgência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgente - Hoje</SelectItem>
                        <SelectItem value="soon">Em breve - Esta semana</SelectItem>
                        <SelectItem value="flexible">Flexível - Quando possível</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Dica:</strong> Forneça o máximo de detalhes possível para que o profissional possa preparar um orçamento mais preciso.
                    </p>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div>
                    <Label htmlFor="name">Seu nome completo</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone/WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(88) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail (opcional)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </>
              )}

              <div className="flex gap-3">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="flex-1"
                  >
                    Voltar
                  </Button>
                )}
                <Button 
                  type="submit" 
                  className="flex-1 bg-[#F5A623] hover:bg-[#E09612] text-white"
                >
                  {step === 3 ? "Enviar Solicitação" : "Continuar"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
