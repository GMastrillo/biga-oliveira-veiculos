export interface PillarItem {
  title: string;
  description: string;
}

export interface SiteConfig {
  language?: "pt-BR" | "en";
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    description: string;
    logoPath: string;
    faviconPath: string;
    cityState: string;
    region: string;
  };
  contact: {
    whatsappNumber: string;
    displayPhone: string;
    email: string;
    addresses: string[];
    neighborhood: string;
    cityStateZip: string;
    businessHours: {
      weekdays: string;
      saturdays: string;
      sundays: string;
    };
  };
  social: {
    instagram?: string;
    tiktok?: string;
    youtube?: string;
  };
  media: {
    heroVideoSrc?: string;
    showroomBannerImage: string;
  };
  pillars: PillarItem[];
  seo: {
    siteUrl: string;
    keywords: string[];
  };
}

export const siteConfig: SiteConfig = {
  "language": "pt-BR",
  "brand": {
    "name": "Biga Oliveira Veículos Especiais",
    "shortName": "BIGA OLIVEIRA",
    "tagline": "COMPRA, VENDA & INTERMEDIAÇÃO · CARROS, MOTOS & EMBARCAÇÕES",
    "description": "Especialista em clássicos exclusivos V8, relíquias placa preta, projetos únicos e seminovos selecionados em Bragança Paulista e todo o Brasil.",
    "logoPath": "/logo.jpg",
    "faviconPath": "/favicon.ico",
    "cityState": "BRAGANÇA PAULISTA · SP",
    "region": "Vila Verde Prestige Showroom"
  },
  "contact": {
    "whatsappNumber": "5511934447999",
    "displayPhone": "+55 (11) 93444-7999",
    "email": "contato@bigaoliveiraveiculos.com.br",
    "addresses": [
      "Av. Gavião Real, 45 - Vila Verde, Bragança Paulista - SP, 12903-523"
    ],
    "neighborhood": "Vila Verde",
    "cityStateZip": "Bragança Paulista - SP · CEP 12903-523",
    "businessHours": {
      "weekdays": "Segunda a Sexta: 09:00 às 18:30 (Hora Marcada)",
      "saturdays": "Sábado: 09:00 às 14:00 (Com Agendamento Prévio)",
      "sundays": "Domingo: Plantão Privativo / Fechado"
    }
  },
  "social": {
    "instagram": "https://www.instagram.com/bigaoliveiraveiculos/"
  },
  "media": {
    "heroVideoSrc": "/introprime.mp4",
    "showroomBannerImage": "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=85"
  },
  "pillars": [
    {
      "title": "CURADORIA & INTERMEDIAÇÃO",
      "description": "Carros, motos e embarcações rigorosamente selecionados com histórico e procedência cristalina."
    },
    {
      "title": "PROJETOS ESPECIAIS & V8",
      "description": "Exemplares com personalidade própria: motores V8 devidamente documentados e restaurações meticulosas."
    },
    {
      "title": "PLACA PRETA & ORIGINALIDADE",
      "description": "Veículos preservados com características de fábrica, faróis e vidros de época e alto valor colecionável."
    },
    {
      "title": "ATENDIMENTO PRIVATIVO",
      "description": "Visitas exclusivas com hora marcada para proporcionar total atenção ao seu próximo veículo."
    }
  ],
  "seo": {
    "siteUrl": "https://maestri-biga-oliveira-veiculos.netlify.app",
    "keywords": [
      "Biga Oliveira Veículos",
      "Carros Antigos Bragança Paulista",
      "Chevrolet C10 V8",
      "Fusca Placa Preta",
      "Audi A5 Sportback",
      "Intermediação Automotiva SP"
    ]
  }
};
