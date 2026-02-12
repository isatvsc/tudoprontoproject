import { useNavigate } from "react-router";
import { Card, CardContent } from "./ui/card";
import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export default function ServiceCard({ id, name, icon, description }: ServiceCardProps) {
  const navigate = useNavigate();
  
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as any)[icon.split('-').map((word: string, index: number) => 
    index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1)
  ).join('')] || LucideIcons.Wrench;

  const handleClick = () => {
    navigate(`/buscar?servico=${encodeURIComponent(name)}`);
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all hover:scale-105 border-2 hover:border-[#F5A623]"
      onClick={handleClick}
    >
      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
        <div className="w-16 h-16 rounded-full bg-[#F5A623]/10 flex items-center justify-center">
          <IconComponent className="w-8 h-8 text-[#F5A623]" />
        </div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
