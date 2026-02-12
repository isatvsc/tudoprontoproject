export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Professional {
  id: string;
  name: string;
  service: string;
  rating: number;
  reviewCount: number;
  location: string;
  verified: boolean;
  photo: string;
  description: string;
  services: string[];
  reviews: Review[];
  completedJobs: number;
}

export interface Review {
  id: string;
  clientName: string;
  rating: number;
  comment: string;
  date: string;
  serviceType?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  photo: string;
  comment: string;
  rating: number;
  service: string;
}

export const services: Service[] = [
  {
    id: "1",
    name: "Serviços Elétricos",
    icon: "zap",
    description: "Instalação, manutenção e reparo elétrico"
  },
  {
    id: "2",
    name: "Serviços Hidráulicos",
    icon: "droplet",
    description: "Encanamento, vazamentos e instalações"
  },
  {
    id: "3",
    name: "Pintura",
    icon: "paintbrush",
    description: "Pintura residencial e comercial"
  },
  {
    id: "4",
    name: "Limpeza",
    icon: "sparkles",
    description: "Limpeza residencial e pós-obra"
  },
  {
    id: "5",
    name: "Pedreiro",
    icon: "brick-wall",
    description: "Construção, reforma e acabamento"
  },
  {
    id: "6",
    name: "Montagem de Móveis",
    icon: "wrench",
    description: "Montagem e desmontagem de móveis"
  },
  {
    id: "7",
    name: "Jardinagem",
    icon: "tree",
    description: "Cuidados com jardim e poda"
  },
  {
    id: "8",
    name: "Ar Condicionado",
    icon: "wind",
    description: "Instalação e manutenção"
  }
];

export const professionals: Professional[] = [
  {
    id: "1",
    name: "João Silva",
    service: "Eletricista",
    rating: 4.8,
    reviewCount: 127,
    location: "Centro, Itapipoca",
    verified: true,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    description: "Eletricista com mais de 10 anos de experiência em instalações residenciais e comerciais. Atendimento rápido e qualidade garantida.",
    services: ["Instalação elétrica", "Manutenção preventiva", "Troca de fiação", "Instalação de chuveiros"],
    completedJobs: 245,
    reviews: [
      {
        id: "1",
        clientName: "Maria Santos",
        rating: 5,
        comment: "Excelente profissional! Muito atencioso e trabalho impecável.",
        date: "2026-02-08",
        serviceType: "Instalação elétrica"
      },
      {
        id: "2",
        clientName: "Pedro Costa",
        rating: 5,
        comment: "Pontual e competente. Resolveu meu problema rapidamente.",
        date: "2026-02-05",
        serviceType: "Manutenção preventiva"
      },
      {
        id: "3",
        clientName: "Ana Paula",
        rating: 4,
        comment: "Bom trabalho, preço justo.",
        date: "2026-01-30",
        serviceType: "Troca de fiação"
      },
      {
        id: "4",
        clientName: "Carlos Eduardo",
        rating: 5,
        comment: "Chegou no horário marcado e fez um trabalho perfeito. Super recomendo!",
        date: "2026-01-28",
        serviceType: "Instalação de chuveiro"
      },
      {
        id: "5",
        clientName: "Juliana Ribeiro",
        rating: 5,
        comment: "Profissional dedicado e honesto. Fez mais do que o esperado.",
        date: "2026-01-25",
        serviceType: "Manutenção preventiva"
      }
    ]
  },
  {
    id: "2",
    name: "Carlos Mendes",
    service: "Encanador",
    rating: 4.9,
    reviewCount: 89,
    location: "Balneário, Itapipoca",
    verified: true,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    description: "Especialista em serviços hidráulicos, sempre pronto para atender emergências.",
    services: ["Conserto de vazamentos", "Instalação de torneiras", "Desentupimento", "Instalação de caixa d'água"],
    completedJobs: 178,
    reviews: [
      {
        id: "1",
        clientName: "Francisca Oliveira",
        rating: 5,
        comment: "Resolveu um vazamento que ninguém conseguia. Super recomendo!",
        date: "2026-02-10",
        serviceType: "Conserto de vazamentos"
      },
      {
        id: "2",
        clientName: "Roberto Lima",
        rating: 5,
        comment: "Atendeu em emergência no domingo. Salvou meu dia!",
        date: "2026-02-07",
        serviceType: "Desentupimento"
      },
      {
        id: "3",
        clientName: "Tereza Gomes",
        rating: 5,
        comment: "Muito atencioso e trabalho de qualidade.",
        date: "2026-02-03",
        serviceType: "Instalação de torneiras"
      },
      {
        id: "4",
        clientName: "Antônio Freitas",
        rating: 4,
        comment: "Bom trabalho, chegou rápido.",
        date: "2026-01-29",
        serviceType: "Conserto de vazamentos"
      }
    ]
  },
  {
    id: "3",
    name: "Roberto Alves",
    service: "Pintor",
    rating: 4.7,
    reviewCount: 64,
    location: "Cruzeiro, Itapipoca",
    verified: true,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Pintura residencial e comercial com acabamento de alta qualidade.",
    services: ["Pintura interna", "Pintura externa", "Textura", "Grafiato"],
    completedJobs: 132,
    reviews: [
      {
        id: "1",
        clientName: "Luiza Fernandes",
        rating: 5,
        comment: "Pintou minha casa toda. Ficou perfeito!",
        date: "2026-02-07",
        serviceType: "Pintura interna"
      },
      {
        id: "2",
        clientName: "Marcos Andrade",
        rating: 4,
        comment: "Bom acabamento e preço justo.",
        date: "2026-02-01",
        serviceType: "Pintura externa"
      },
      {
        id: "3",
        clientName: "Patrícia Silva",
        rating: 5,
        comment: "Trabalho impecável, super recomendo!",
        date: "2026-01-27",
        serviceType: "Textura"
      }
    ]
  },
  {
    id: "4",
    name: "Antônio Sousa",
    service: "Pedreiro",
    rating: 4.6,
    reviewCount: 95,
    location: "Centro, Itapipoca",
    verified: true,
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    description: "Construção e reformas em geral. Trabalho sério e de qualidade.",
    services: ["Construção", "Reforma", "Reboco", "Assentamento de pisos"],
    completedJobs: 203,
    reviews: [
      {
        id: "1",
        clientName: "José Roberto",
        rating: 5,
        comment: "Reformou meu banheiro. Trabalho excelente!",
        date: "2026-02-06",
        serviceType: "Reforma"
      },
      {
        id: "2",
        clientName: "Cláudia Moreira",
        rating: 4,
        comment: "Fez um bom trabalho no meu muro.",
        date: "2026-02-02",
        serviceType: "Construção"
      },
      {
        id: "3",
        clientName: "Ricardo Tavares",
        rating: 5,
        comment: "Profissional sério e trabalho de qualidade.",
        date: "2026-01-26",
        serviceType: "Assentamento de pisos"
      }
    ]
  },
  {
    id: "5",
    name: "Marcela Lima",
    service: "Limpeza",
    rating: 5.0,
    reviewCount: 142,
    location: "Planalto, Itapipoca",
    verified: true,
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    description: "Serviços de limpeza residencial com produtos de qualidade e atenção aos detalhes.",
    services: ["Limpeza residencial", "Limpeza pós-obra", "Limpeza profunda", "Organização"],
    completedJobs: 289,
    reviews: [
      {
        id: "1",
        clientName: "Sandra Martins",
        rating: 5,
        comment: "Melhor profissional de limpeza que já contratei!",
        date: "2026-02-09",
        serviceType: "Limpeza residencial"
      },
      {
        id: "2",
        clientName: "Renata Souza",
        rating: 5,
        comment: "Deixou minha casa impecável. Muito caprichosa!",
        date: "2026-02-05",
        serviceType: "Limpeza profunda"
      },
      {
        id: "3",
        clientName: "Paulo Henrique",
        rating: 5,
        comment: "Fez a limpeza pós-obra. Ficou perfeito!",
        date: "2026-02-01",
        serviceType: "Limpeza pós-obra"
      }
    ]
  },
  {
    id: "6",
    name: "Fernando Costa",
    service: "Técnico em Ar Condicionado",
    rating: 4.8,
    reviewCount: 71,
    location: "Centro, Itapipoca",
    verified: true,
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    description: "Instalação e manutenção de ar condicionado de todas as marcas.",
    services: ["Instalação", "Manutenção preventiva", "Conserto", "Limpeza de filtros"],
    completedJobs: 156,
    reviews: [
      {
        id: "1",
        clientName: "Rodrigo Alves",
        rating: 5,
        comment: "Instalou meu ar condicionado perfeitamente. Muito profissional!",
        date: "2026-02-04",
        serviceType: "Instalação"
      },
      {
        id: "2",
        clientName: "Camila Rocha",
        rating: 5,
        comment: "Consertou meu ar que estava com problema. Recomendo!",
        date: "2026-01-30",
        serviceType: "Conserto"
      },
      {
        id: "3",
        clientName: "Bruno Ferreira",
        rating: 4,
        comment: "Bom atendimento e preço justo.",
        date: "2026-01-24",
        serviceType: "Manutenção preventiva"
      }
    ]
  },
  {
    id: "7",
    name: "Daniela Mendes",
    service: "Montadora de Móveis",
    rating: 4.9,
    reviewCount: 103,
    location: "Centro, Itapipoca",
    verified: true,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    description: "Especialista em montagem e desmontagem de móveis planejados e modulados.",
    services: ["Montagem de móveis", "Desmontagem", "Instalação de prateleiras", "Montagem de guarda-roupas"],
    completedJobs: 215,
    reviews: [
      {
        id: "1",
        clientName: "Fernanda Costa",
        rating: 5,
        comment: "Montou minha cozinha planejada com perfeição!",
        date: "2026-02-08",
        serviceType: "Montagem de móveis"
      },
      {
        id: "2",
        clientName: "Lucas Oliveira",
        rating: 5,
        comment: "Muito profissional e rápida. Recomendo demais!",
        date: "2026-02-03",
        serviceType: "Montagem de guarda-roupas"
      }
    ]
  },
  {
    id: "8",
    name: "Paulo Santos",
    service: "Jardineiro",
    rating: 4.7,
    reviewCount: 58,
    location: "Balneário, Itapipoca",
    verified: true,
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
    description: "Cuidado completo de jardins, poda de árvores e paisagismo.",
    services: ["Poda de árvores", "Manutenção de jardim", "Paisagismo", "Irrigação"],
    completedJobs: 124,
    reviews: [
      {
        id: "1",
        clientName: "Helena Rodrigues",
        rating: 5,
        comment: "Transformou meu jardim! Trabalho maravilhoso.",
        date: "2026-02-06",
        serviceType: "Paisagismo"
      },
      {
        id: "2",
        clientName: "Rafael Barros",
        rating: 4,
        comment: "Fez a poda das árvores. Bom trabalho.",
        date: "2026-01-31",
        serviceType: "Poda de árvores"
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Maria Santos",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    comment: "Encontrei um eletricista excelente através da plataforma. Trabalho rápido e de qualidade!",
    rating: 5,
    service: "Serviços Elétricos"
  },
  {
    id: "2",
    clientName: "Pedro Costa",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    comment: "Precisava de um encanador urgente e consegui em minutos. Muito prático e confiável!",
    rating: 5,
    service: "Serviços Hidráulicos"
  },
  {
    id: "3",
    clientName: "Ana Paula",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    comment: "A plataforma me ajudou a encontrar profissionais verificados. Me senti muito segura!",
    rating: 5,
    service: "Pintura"
  },
  {
    id: "4",
    clientName: "Carlos Eduardo",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    comment: "Solicitei uma reforma e recebi vários orçamentos. Escolhi o melhor custo-benefício!",
    rating: 5,
    service: "Pedreiro"
  }
];

export const popularSearches = [
  "Eletricista urgente",
  "Encanador emergência",
  "Pintor residencial",
  "Limpeza pós-obra",
  "Pedreiro reforma",
  "Montador de móveis"
];