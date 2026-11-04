export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  version: string;
  year: string;
  km: string;
  price: string;
  category: "Superesportivos" | "SUVs de Luxo" | "Blindados" | "0 KM";
  image: string;
  gallery?: string[];
  power: string;
  acceleration: string;
  topSpeed: string;
  slogan?: string;
  armored?: boolean;
  tag?: string;
  watermarkLogo?: string;
  highlightSpecs?: { label: string; value: string }[];
}

/**
 * Estoque completo de veículos extraídos diretamente do Instagram oficial (@bigaoliveiraveiculos)
 * Contempla todos os posts de fotos de carros disponíveis até o Chrysler Town & Country.
 */
export const INVENTORY_VEHICLES: Vehicle[] = [
  // Jeep Renegade Trailhawk Flex 4x4 2024
  {
    id: "jeep-renegade-trailhawk-2024",
    brand: "JEEP",
    model: "RENEGADE TRAILHAWK 4X4",
    version: "1.3 TURBO T270 FLEX 185 CV • 4X4 • CÂMBIO 9M • FULL LED",
    year: "2024/2024",
    km: "45.000 km",
    price: "R$ 116.900,00",
    category: "SUVs de Luxo",
    image: "/inventory/jeep-renegade-trailhawk-2024/renegade-1.jpg",
    gallery: [
      "/inventory/jeep-renegade-trailhawk-2024/renegade-1.jpg",
      "/inventory/jeep-renegade-trailhawk-2024/renegade-2.jpg",
      "/inventory/jeep-renegade-trailhawk-2024/renegade-3.jpg",
      "/inventory/jeep-renegade-trailhawk-2024/renegade-4.jpg",
      "/inventory/jeep-renegade-trailhawk-2024/renegade-5.jpg",
      "/inventory/jeep-renegade-trailhawk-2024/renegade-6.jpg"
    ],
    power: "185 CV",
    acceleration: "T270 Turbo Flex 4x4",
    topSpeed: "202 km/h",
    slogan: "VERSÃO TOPO TRAILHAWK • TRAÇÃO 4X4 INTEGRAL • CÂMBIO DE 9 VELOCIDADES",
    tag: "NOVO NO ESTOQUE",
    highlightSpecs: [
      { label: "Motorização", value: "1.3 Turbo T270 Flex 185 cv" },
      { label: "Transmissão", value: "Câmbio Automático 9 Marchas c/ Tração 4x4" },
      { label: "Quilometragem", value: "Apenas 45.000 km Rodados" },
      { label: "Design", value: "Branca c/ Detalhes Preto e Vermelho Trailhawk" }
    ]
  },
  // Renault Duster 2.0 Dynamique 2016
  {
    id: "renault-duster-dynamique-2016",
    brand: "RENAULT",
    model: "DUSTER DYNAMIQUE 2.0",
    version: "2.0 FLEX 16V AUTOMÁTICA • TOTALMENTE REVISADA",
    year: "2016/2016",
    km: "139.000 km",
    price: "R$ 57.900,00",
    category: "SUVs de Luxo",
    image: "/inventory/renault-duster-2016/duster-1.jpg",
    gallery: [
      "/inventory/renault-duster-2016/duster-1.jpg",
      "/inventory/renault-duster-2016/duster-2.jpg",
      "/inventory/renault-duster-2016/duster-3.jpg",
      "/inventory/renault-duster-2016/duster-4.jpg",
      "/inventory/renault-duster-2016/duster-5.jpg",
      "/inventory/renault-duster-2016/duster-6.jpg",
      "/inventory/renault-duster-2016/duster-7.jpg",
      "/inventory/renault-duster-2016/duster-8.jpg",
      "/inventory/renault-duster-2016/duster-9.jpg"
    ],
    power: "148 CV",
    acceleration: "2.0 Flex 16V",
    topSpeed: "180 km/h",
    slogan: "ESPAÇO E ROBUSTEZ • COR MARROM METÁLICO • IMPECÁVEL MANUTENÇÃO",
    tag: "DISPONÍVEL",
    highlightSpecs: [
      { label: "Motorização", value: "2.0 16V Flex Câmbio Automático" },
      { label: "Quilometragem", value: "139.000 km Originais" },
      { label: "Condição", value: "Totalmente Revisada e Laudo Cautelar Aprovado" },
      { label: "Conforto", value: "Central Multimídia Media NAV e Rodas Especiais" }
    ]
  },
  // Harley-Davidson Road Glide 117 2025
  {
    id: "harley-davidson-road-glide-2025",
    brand: "HARLEY-DAVIDSON",
    model: "ROAD GLIDE 117",
    version: "MILWAUKEE-EIGHT 117 • 1.300 KM • PAINEL SKYLINE OS",
    year: "2025/2025",
    km: "1.300 km",
    price: "R$ 174.900,00",
    category: "Superesportivos",
    image: "/inventory/harley-road-glide-2025/roadglide-1.jpg",
    gallery: [
      "/inventory/harley-road-glide-2025/roadglide-1.jpg",
      "/inventory/harley-road-glide-2025/roadglide-2.jpg",
      "/inventory/harley-road-glide-2025/roadglide-3.jpg",
      "/inventory/harley-road-glide-2025/roadglide-4.jpg",
      "/inventory/harley-road-glide-2025/roadglide-5.jpg"
    ],
    power: "105 CV",
    acceleration: "175 Nm Torque",
    topSpeed: "200 km/h",
    slogan: "ESTADO DE ZERO KM • NOVO DESIGN DE CARENAGEM • CENTRAL MULTIMÍDIA TOUCH",
    tag: "ESTADO DE 0 KM",
    highlightSpecs: [
      { label: "Motorização", value: "Milwaukee-Eight 117 V-Twin 1.923 cc" },
      { label: "Quilometragem", value: "Apenas 1.300 km Rodados" },
      { label: "Painel", value: "Display TFT Skyline OS com Navegação" },
      { label: "Acabamento", value: "Cromados e Pintura Impecáveis sem Detalhes" }
    ]
  },
  // Gurgel Xavante 1973 Placa Preta
  {
    id: "gurgel-xavante-1973",
    brand: "GURGEL",
    model: "XAVANTE X12 1973",
    version: "PLACA PRETA DE COLEÇÃO • RESTAURAÇÃO TOTAL • CAPOTA MARROM",
    year: "1973/1973",
    km: "Coleção",
    price: "R$ 79.900,00",
    category: "Superesportivos",
    image: "/inventory/gurgel-xavante-1973/gurgel-1.jpg",
    gallery: [
      "/inventory/gurgel-xavante-1973/gurgel-1.jpg",
      "/inventory/gurgel-xavante-1973/gurgel-2.jpg",
      "/inventory/gurgel-xavante-1973/gurgel-3.jpg",
      "/inventory/gurgel-xavante-1973/gurgel-4.jpg",
      "/inventory/gurgel-xavante-1973/gurgel-5.jpg",
      "/inventory/gurgel-xavante-1973/gurgel-6.jpg",
      "/inventory/gurgel-xavante-1973/gurgel-7.jpg",
      "/inventory/gurgel-xavante-1973/gurgel-8.jpg"
    ],
    power: "50 CV",
    acceleration: "Boxer 1600 VW",
    topSpeed: "120 km/h",
    slogan: "ICÔNICO CLÁSSICO NACIONAL • PARA-BRISA REBATÍVEL • RARIDADE DE COLEÇÃO",
    tag: "PLACA PRETA",
    highlightSpecs: [
      { label: "Coleção", value: "Placa Preta Certificada de Colecionador" },
      { label: "Restauração", value: "Chassi, Carroceria Plasteel e Mecânica Restaurados" },
      { label: "Detalhes", value: "Para-brisa Rebatível e Capota em Lona Marrom" },
      { label: "Interior", value: "Estofamento Personalizado e Painel Clássico" }
    ]
  },
  // Harley-Davidson Sportster 883R 2010
  {
    id: "harley-davidson-883r-2010",
    brand: "HARLEY-DAVIDSON",
    model: "SPORTSTER 883R",
    version: "RODAS V-ROD • PNEU TRASEIRO 240 • VANCE & HINES",
    year: "2010/2010",
    km: "24.000 km",
    price: "R$ 42.900,00",
    category: "Superesportivos",
    image: "/inventory/harley-883r-2010/harley-883-1.jpg",
    gallery: [
      "/inventory/harley-883r-2010/harley-883-1.jpg"
    ],
    power: "52 CV",
    acceleration: "Evolution 883 cc",
    topSpeed: "170 km/h",
    slogan: "PROJETO EXCLUSIVO CUSTOMIZADO • BANCO PEDRINHO • GUIDÃO 14 POL",
    tag: "CUSTOMIZADA",
    highlightSpecs: [
      { label: "Rodas & Pneus", value: "Rodas V-Rod com Pneu 120 Dianteiro e 240 Traseiro" },
      { label: "Escapamento", value: "Escape Esportivo Vance & Hines com Ronco Marcante" },
      { label: "Ergonomia", value: "Guidão Seca Sovaco 14 Pol e Banco Sela Pedrinho" },
      { label: "Acessórios", value: "Bolha Dianteira Café Racer e Pintura Laranja Icônica" }
    ]
  },
  // Volkswagen Fusca 1300 1983 Placa Preta com Teto Solar Britax
  {
    id: "vw-fusca-1300-1983-britax",
    brand: "VOLKSWAGEN",
    model: "FUSCA 1300 1983",
    version: "PLACA PRETA • TETO SOLAR BRITAX • RODAS RAW 15",
    year: "1983/1983",
    km: "84.000 km",
    price: "R$ 54.900,00",
    category: "Superesportivos",
    image: "/inventory/vw-fusca-1300-1983/fusca-1.jpg",
    gallery: [
      "/inventory/vw-fusca-1300-1983/fusca-1.jpg",
      "/inventory/vw-fusca-1300-1983/fusca-2.jpg",
      "/inventory/vw-fusca-1300-1983/fusca-3.jpg",
      "/inventory/vw-fusca-1300-1983/fusca-4.jpg",
      "/inventory/vw-fusca-1300-1983/fusca-5.jpg",
      "/inventory/vw-fusca-1300-1983/fusca-6.jpg",
      "/inventory/vw-fusca-1300-1983/fusca-7.jpg",
      "/inventory/vw-fusca-1300-1983/fusca-8.jpg",
      "/inventory/vw-fusca-1300-1983/fusca-9.jpg",
      "/inventory/vw-fusca-1300-1983/fusca-10.jpg",
      "/inventory/vw-fusca-1300-1983/fusca-11.jpg",
      "/inventory/vw-fusca-1300-1983/fusca-12.jpg",
      "/inventory/vw-fusca-1300-1983/fusca-13.jpg",
      "/inventory/vw-fusca-1300-1983/fusca-14.jpg"
    ],
    power: "46 CV",
    acceleration: "Boxer Aircooled 1300",
    topSpeed: "125 km/h",
    slogan: "VEÍCULO TOTALMENTE RESTAURADO • TETO BRITAX • PLACA PRETA DE COLEÇÃO",
    tag: "PLACA PRETA",
    highlightSpecs: [
      { label: "Originalidade", value: "Veículo de Coleção com Placa Preta" },
      { label: "Teto Solar", value: "Teto Solar Britax Estilo Ragtop" },
      { label: "Rodas e Pneus", value: "Rodas RAW Aro 15 Clássicas" },
      { label: "Suspensão", value: "Preparada: Catraca Dianteira e Facão Regulável" }
    ]
  },
  // Ford F-1000 1998 X10 Projeto Estilo Texano
  {
    id: "ford-f1000-x10-1998",
    brand: "FORD",
    model: "F-1000 1998 • X10",
    version: "MOTOR X10 • PROJETO ESTILO TEXANO • RESTAURAÇÃO COMPLETA",
    year: "1998/1998",
    km: "Restauração 0km",
    price: "R$ 249.900,00",
    category: "Superesportivos",
    image: "/inventory/ford-f1000-1998/f1000-7.jpg",
    gallery: [
      "/inventory/ford-f1000-1998/f1000-7.jpg",
      "/inventory/ford-f1000-1998/f1000-1.jpg",
      "/inventory/ford-f1000-1998/f1000-2.jpg",
      "/inventory/ford-f1000-1998/f1000-3.jpg",
      "/inventory/ford-f1000-1998/f1000-4.jpg",
      "/inventory/ford-f1000-1998/f1000-5.jpg",
      "/inventory/ford-f1000-1998/f1000-6.jpg",
      "/inventory/ford-f1000-1998/f1000-8.jpg",
      "/inventory/ford-f1000-1998/f1000-9.jpg",
      "/inventory/ford-f1000-1998/f1000-10.jpg"
    ],
    power: "160 CV",
    acceleration: "Torque Pesado",
    topSpeed: "165 km/h",
    slogan: "PROJETO TEXANO ÚNICO • PNEUS 35 POL • RODAS VITÓRIA ALUMÍNIO",
    tag: "PROJETO EXCLUSIVO",
    highlightSpecs: [
      { label: "Motorização", value: "MWM X10 Turbo Diesel" },
      { label: "Montagem", value: "Suspensão Elevada e Pneus 35 Pol" },
      { label: "Rodas e Acabamento", value: "Rodas Vitória Alumínio e Madeira na Caçamba" },
      { label: "Equipamentos", value: "Ar, Direção, Vidros/Travas e Alarme" }
    ]
  },
  // Mitsubishi Pajero Dakar HPE 3.2 2015
  {
    id: "mitsubishi-pajero-dakar-hpe-2015",
    brand: "MITSUBISHI",
    model: "PAJERO DAKAR HPE 3.2",
    version: "3.2 DIESEL 4X4 • BLINDAGEM TRUFFI • 7 LUGARES",
    year: "2015/2015",
    km: "138.000 km",
    price: "R$ 157.900,00",
    category: "Blindados",
    armored: true,
    image: "/inventory/pajero-dakar-2015/pajero-1.jpg",
    gallery: [
      "/inventory/pajero-dakar-2015/pajero-1.jpg",
      "/inventory/pajero-dakar-2015/pajero-2.jpg",
      "/inventory/pajero-dakar-2015/pajero-3.jpg",
      "/inventory/pajero-dakar-2015/pajero-4.jpg",
      "/inventory/pajero-dakar-2015/pajero-5.jpg",
      "/inventory/pajero-dakar-2015/pajero-6.jpg",
      "/inventory/pajero-dakar-2015/pajero-7.jpg",
      "/inventory/pajero-dakar-2015/pajero-8.jpg",
      "/inventory/pajero-dakar-2015/pajero-9.jpg",
      "/inventory/pajero-dakar-2015/pajero-10.jpg"
    ],
    power: "210 CV",
    acceleration: "Remap SFI Rally",
    topSpeed: "180 km/h",
    slogan: "BLINDAGEM TRUFFI • PREPARAÇÃO OFF-ROAD • GUINCHO 12.000 LB",
    tag: "BLINDADO & OFF-ROAD",
    highlightSpecs: [
      { label: "Blindagem", value: "Truffi Nível IIIA • 7 Lugares" },
      { label: "Preparação", value: "Lift Tadson, XBRI Brutus 285/70 e Snorkel OGZ" },
      { label: "Equipamentos", value: "Guincho 12.000 lb Sintético e Rack Eqmax" },
      { label: "Tecnologia", value: "Apple CarPlay/Android Auto e Som JBL" }
    ]
  },
  // Hyundai ix35 GL 2018
  {
    id: "hyundai-ix35-gl-2018",
    brand: "HYUNDAI",
    model: "IX35 GL 2.0",
    version: "MOTOR 2.0 FLEX 16V • CÂMBIO AUTOMÁTICO 6 MARCHAS",
    year: "2018/2018",
    km: "130.000 km",
    price: "R$ 85.900,00",
    category: "SUVs de Luxo",
    image: "/instagram/hyundai-ix35-gl-2018.jpg",
    power: "167 CV",
    acceleration: "10.4s",
    topSpeed: "178 km/h",
    slogan: "APROVADA EM CAUTELAR • TOTALMENTE REVISADA • 4 PNEUS MICHELIN NOVOS",
    tag: "DISPONÍVEL",
    highlightSpecs: [
      { label: "Motorização", value: "2.0 Flex 16V Câmbio Automático 6M" },
      { label: "Procedência", value: "Perícia Cautelar 100% Aprovada" },
      { label: "Manutenção", value: "Totalmente Revisada" },
      { label: "Pneus", value: "4 Pneus Michelin Novos" }
    ]
  },
  // 1. Chevrolet Veraneio 1978
  {
    id: "chevrolet-veraneio-41-1978",
    brand: "CHEVROLET",
    model: "VERANEIO 4.1 6CC",
    version: "MOTOR 4.1 6 CILINDROS ÁLCOOL • PINTURA ESTILO PATINA",
    year: "1978/1978",
    km: "Coleção",
    price: "R$ 79.900,00",
    category: "Superesportivos",
    image: "/instagram/car-1.jpg",
    power: "138 CV",
    acceleration: "Clássico 6cc",
    topSpeed: "155 km/h",
    slogan: "PINTURA ESTILO PATINA • AR-CONDICIONADO • TOTALMENTE REVISADA",
    tag: "CLÁSSICO PATINA",
    highlightSpecs: [
      { label: "Motorização", value: "4.1 6 Cilindros a Álcool" },
      { label: "Visual", value: "Pintura Estilo Patina Exclusiva" },
      { label: "Conforto", value: "Ar-Condicionado e Mecânica Revisada" },
      { label: "Destaque", value: "Roda Macio e Chama Muita Atenção" }
    ]
  },
  // 3. Volkswagen Fusca 1966 Placa Preta
  {
    id: "vw-fusca-1966-placa-preta",
    brand: "VOLKSWAGEN",
    model: "FUSCA 1966",
    version: "PLACA PRETA COM O ANO DO CARRO • CARACTERÍSTICAS ORIGINAIS",
    year: "1966/1966",
    km: "Colecionador",
    price: "R$ 59.900,00",
    category: "Superesportivos",
    image: "/instagram/car-3.jpg",
    power: "46 CV",
    acceleration: "Boxer Aircooled",
    topSpeed: "120 km/h",
    slogan: "PLACA PRETA DO ANO (1966) • RARÍSSIMO ESTADO DE CONSERVAÇÃO",
    tag: "PLACA PRETA",
    highlightSpecs: [
      { label: "Certificação", value: "Placa Preta com o Ano do Carro" },
      { label: "Originalidade", value: "Características Originais Preservadas" },
      { label: "Conservação", value: "Raríssimo Estado Impecável" },
      { label: "Visitação", value: "Bragança Paulista - Hora Marcada" }
    ]
  },
  // 4. Volkswagen Golf 1.8 GL 1998
  {
    id: "vw-golf-gl-1998",
    brand: "VOLKSWAGEN",
    model: "GOLF 1.8 GL",
    version: "MK3 1.8 MI • VIDROS, FARÓIS E LANTERNAS HELLA ORIGINAIS",
    year: "1998/1998",
    km: "Raridade",
    price: "R$ 51.900,00",
    category: "Superesportivos",
    image: "/instagram/car-4.jpg",
    power: "90 CV",
    acceleration: "11.5s",
    topSpeed: "178 km/h",
    slogan: "SEM ABSOLUTAMENTE NENHUM DETALHE • CONJUNTO ÓPTICO HELLA ORIGINAL",
    tag: "RARIDADE MK3",
    highlightSpecs: [
      { label: "Conjunto Óptico", value: "Faróis e Lanternas Originais Hella" },
      { label: "Vidros", value: "Todos Originais de Fábrica" },
      { label: "Estado", value: "Impecável, Muito Acima da Média" },
      { label: "Selo", value: "Exemplar de Coleção Sem Detalhes" }
    ]
  },
  // 7. Mitsubishi Outlander 2.0 Blindado 2016
  {
    id: "mitsubishi-outlander-blindado-2016",
    brand: "MITSUBISHI",
    model: "OUTLANDER 2.0",
    version: "BLINDADO NÍVEL IIIA TOTALITY • VIDROS SPACE GLASS",
    year: "2016/2016",
    km: "180.000 km",
    price: "R$ 79.900,00",
    category: "Blindados",
    armored: true,
    image: "/instagram/car-7.jpg",
    power: "160 CV",
    acceleration: "11.1s",
    topSpeed: "190 km/h",
    slogan: "BLINDAGEM TOTALITY VIDROS SPACE GLASS • 4 PNEUS NOVOS",
    tag: "BLINDADO IIIA",
    highlightSpecs: [
      { label: "Blindagem", value: "Nível IIIA Totality" },
      { label: "Vidros", value: "Space Glass de Alta Transparência" },
      { label: "Pneus", value: "4 Pneus Novos e Totalmente Revisado" },
      { label: "Conservação", value: "Extremamente Bem Cuidado" }
    ]
  },
  // 9. Chevrolet C10 1973 V8 318
  {
    id: "chevrolet-c10-v8-1973",
    brand: "CHEVROLET",
    model: "C10 CUSTOM V8 318",
    version: "DODGE V8 318 NO DOCUMENTO • ESCAPE 3\" FULL INOX",
    year: "1973/1973",
    km: "Coleção",
    price: "R$ 219.900,00",
    category: "Superesportivos",
    image: "/instagram/car-9.jpg",
    power: "230 CV",
    acceleration: "V8 Brutal",
    topSpeed: "Clássico V8",
    slogan: "HÁ MAIS DE 15 ANOS COM O MESMO PROPRIETÁRIO • PROJETO EXCLUSIVO",
    tag: "V8 EXCLUSIVO",
    highlightSpecs: [
      { label: "Motor", value: "Dodge V8 318 Cadastrado no Doc" },
      { label: "Alimentação", value: "Quadrijet Edelbrock 650 CFM" },
      { label: "Escape", value: "3\" Full Inox Direto + Coletor Inox" },
      { label: "Interior", value: "Couro, Ar, Som Fosgate & Calotas 1939" }
    ]
  },
  // 10. Volkswagen Up! TSI Connect 2020 (97k km)
  {
    id: "vw-up-tsi-connect-2020-97k",
    brand: "VOLKSWAGEN",
    model: "UP! TSI CONNECT",
    version: "1.0 TURBO FLEX • STAGE 2 BENGA TV & DIFUSOR",
    year: "2020/2020",
    km: "97.000 km",
    price: "R$ 64.900,00",
    category: "Superesportivos",
    image: "/instagram/car-10.jpg",
    power: "135 CV",
    acceleration: "8.1s",
    topSpeed: "195 km/h",
    slogan: "STAGE 2 BENGA TV • ESCAPAMENTO ESPORTIVO COM DIFUSOR • LAUDO 100%",
    tag: "STAGE 2 BENGA",
    highlightSpecs: [
      { label: "Preparação", value: "Stage 2 Benga TV" },
      { label: "Exaustão", value: "Escapamento Esportivo com Difusor" },
      { label: "Rodas & Pneus", value: "Conjunto de Rodas e Pneus Novos" },
      { label: "Perícia", value: "Aprovado em Laudo Cautelar" }
    ]
  },
  // 12. Ford Maverick Tremor 2025
  {
    id: "ford-maverick-tremor-2025",
    brand: "FORD",
    model: "MAVERICK TREMOR",
    version: "2.0 ECOBOOST AWD OFF-ROAD • APENAS 5.000 KM",
    year: "2025/2025",
    km: "5.000 km",
    price: "R$ 209.900,00",
    category: "0 KM",
    image: "/instagram/car-12.jpg",
    power: "253 CV",
    acceleration: "7.2s",
    topSpeed: "175 km/h",
    slogan: "APENAS 5.000 KM • ESTADO DE ZERO KM • APROVADA EM CAUTELAR",
    tag: "SEMINOVO 5.000 KM",
    highlightSpecs: [
      { label: "Quilometragem", value: "Apenas 5.000 km" },
      { label: "Versão", value: "Tremor AWD Off-Road Especial" },
      { label: "Estado", value: "Sem Absolutamente Nenhum Detalhe" },
      { label: "Condição", value: "De R$ 219.900 por R$ 209.900" }
    ]
  },
  // 13. Volkswagen Up! TSI 1.0 Connect 2020 (Rodas Scorro 17)
  {
    id: "vw-up-tsi-scorro17-2020",
    brand: "VOLKSWAGEN",
    model: "UP! TSI CONNECT STG2",
    version: "STAGE 2 BENGA TV • PRESSURIZAÇÃO INOX & RODAS ARO 17",
    year: "2020/2020",
    km: "200.000 km",
    price: "R$ 70.900,00",
    category: "Superesportivos",
    image: "/instagram/car-13.jpg",
    power: "140 CV",
    acceleration: "7.9s",
    topSpeed: "198 km/h",
    slogan: "REMAP STAGE 2 BENGA TV • PRESSURIZAÇÃO EM INOX E RODAS SCORRO 17\"",
    tag: "STAGE 2 + ARO 17",
    highlightSpecs: [
      { label: "Performance", value: "Remap Stg2 Benga TV + Pressurização Inox" },
      { label: "Exaustão", value: "Difusor de Escape + Válvula de Alívio" },
      { label: "Rodas", value: "Scorro Aro 17 com Pneus Novos" },
      { label: "Revisão", value: "Correias, Óleos, Discos e Pastilhas Premium" }
    ]
  },
  // 14. Ford EcoSport 2.0 XLT 2011
  {
    id: "ford-ecosport-xlt-2011",
    brand: "FORD",
    model: "ECOSPORT 2.0 XLT",
    version: "2.0 16V DURATEC FLEX AUTOMÁTICO • REVISADO",
    year: "2011/2011",
    km: "145.000 km",
    price: "R$ 39.900,00",
    category: "SUVs de Luxo",
    image: "/instagram/car-14.jpg",
    power: "145 CV",
    acceleration: "10.9s",
    topSpeed: "180 km/h",
    slogan: "EXCELENTE CUSTO X BENEFÍCIO • REVISADO E LAUDO CAUTELAR APROVADO",
    tag: "CUSTO X BENEFÍCIO",
    highlightSpecs: [
      { label: "Câmbio", value: "Automático" },
      { label: "Motorização", value: "2.0 Flex 145 cv" },
      { label: "Perícia", value: "Aprovado em Laudo Cautelar" },
      { label: "Quilometragem", value: "145.000 km Revisados" }
    ]
  },
  // 15. Volkswagen Kombi 1.600 Furgão 1993
  {
    id: "vw-kombi-1600-furgao-1993",
    brand: "VOLKSWAGEN",
    model: "KOMBI 1.600 FURGÃO",
    version: "RESTAURADA • COMANDO & CARBURAÇÃO PREPARADOS",
    year: "1993/1993",
    km: "Restaurada",
    price: "R$ 55.900,00",
    category: "Superesportivos",
    image: "/instagram/car-15.jpg",
    power: "65 CV",
    acceleration: "Boxer Preparado",
    topSpeed: "130 km/h",
    slogan: "TOTALMENTE RESTAURADA • PARA-CHOQUES CROMADOS E INTERIOR CUSTOM",
    tag: "CLÁSSICO CUSTOM",
    highlightSpecs: [
      { label: "Mecânica", value: "Graduação de Comando e Carburação Preparada" },
      { label: "Interior", value: "Banco e Cintos Customizados" },
      { label: "Exterior", value: "Para-choques Cromados e Pintura Impecável" },
      { label: "Dedicação", value: "Projeto Montado com Muito Cuidado" }
    ]
  },
  // 16. Land Rover Discovery Sport HSE 2018
  {
    id: "land-rover-discovery-sport-hse-2018",
    brand: "LAND ROVER",
    model: "DISCOVERY SPORT HSE",
    version: "2.0 SI4 TURBO GASOLINA 4WD • 5 LUGARES",
    year: "2018/2018",
    km: "73.000 km",
    price: "R$ 119.900,00",
    category: "SUVs de Luxo",
    image: "/instagram/car-16.jpg",
    power: "240 CV",
    acceleration: "8.2s",
    topSpeed: "200 km/h",
    slogan: "APENAS 73.000 KM • 4 PNEUS PIRELLI NOVOS • APPLE CARPLAY",
    tag: "SUV PREMIUM HSE",
    highlightSpecs: [
      { label: "Quilometragem", value: "Apenas 73.000 km" },
      { label: "Pneus", value: "4 Pneus Pirelli Novos" },
      { label: "Conectividade", value: "Multimídia com Apple CarPlay" },
      { label: "Versão", value: "HSE Topo de Linha 5 Lugares" }
    ]
  },
  // 18. Troller T4 3.0 Diesel 2010
  {
    id: "troller-t4-30-diesel-2010",
    brand: "TROLLER",
    model: "T4 3.0 TURBO DIESEL",
    version: "TETO RÍGIDO • 3.0 NGD TURBO ELETRÔNICO 4X4",
    year: "2010/2010",
    km: "157.000 km",
    price: "R$ 114.900,00",
    category: "SUVs de Luxo",
    image: "/instagram/car-18.jpg",
    power: "163 CV",
    acceleration: "4x4 Reduzida",
    topSpeed: "165 km/h",
    slogan: "MOTOR 3.0 TURBO ELETRÔNICO DIESEL • TETO RÍGIDO E REVISADO",
    tag: "OFF-ROAD 4X4",
    highlightSpecs: [
      { label: "Motorização", value: "3.0 Turbo Eletrônico Diesel" },
      { label: "Carroceria", value: "Teto Rígido" },
      { label: "Tração", value: "4x4 com Reduzida" },
      { label: "Estado", value: "Veículo Revisado e Impecável" }
    ]
  },
  // 20. Suzuki Samurai Canvas 1997
  {
    id: "suzuki-samurai-canvas-1997",
    brand: "SUZUKI",
    model: "SAMURAI CANVAS",
    version: "PROJETO FULL FUELTECH FT300 • RESTAURAÇÃO COMPLETA",
    year: "1997/1997",
    km: "Restaurado",
    price: "R$ 89.900,00",
    category: "SUVs de Luxo",
    image: "/instagram/car-20.jpg",
    power: "FuelTech FT300",
    acceleration: "4x4 Off-Road",
    topSpeed: "Projeto Único",
    slogan: "INJEÇÃO FUELTECH FT300 + SPARK PRO • CAPOTA SMITTYBILT & FARÓIS HELLA",
    tag: "PROJETO FUELTECH",
    highlightSpecs: [
      { label: "Eletrônica", value: "FuelTech FT300, Spark Pro, NanoPro & Peak and Hold" },
      { label: "Mecânica", value: "Motor Novo, Direção Hidráulica e Ar-Condicionado" },
      { label: "Exterior", value: "Capota Smittybilt, Pneus 31\" Firestone e Milhas Hella" },
      { label: "Interior & Som", value: "Bancos Concha Ralie Design, CarPlay e Rádio PY" }
    ]
  },
  // 21. Dodge Ram 2500 2008
  {
    id: "dodge-ram-2500-2008",
    brand: "RAM",
    model: "RAM 2500 5.9 CUMMINS",
    version: "TURBO DIESEL 4X4 • REVISADA E MUITO ÍNTEGRA",
    year: "2008/2008",
    km: "205.500 km",
    price: "R$ 139.900,00",
    category: "SUVs de Luxo",
    image: "/instagram/car-21.jpg",
    power: "325 CV",
    acceleration: "Torque Cummins",
    topSpeed: "170 km/h",
    slogan: "PICAPE FULL-SIZE ÍNTEGRA E TOTALMENTE REVISADA",
    tag: "FULL-SIZE 4X4",
    highlightSpecs: [
      { label: "Motorização", value: "Cummins Turbo Diesel 6 Cilindros" },
      { label: "Quilometragem", value: "205.500 km" },
      { label: "Conservação", value: "Muito Íntegra e Revisada" },
      { label: "Presença", value: "Força Bruta e Capacidade Inigualável" }
    ]
  },
  // 24. Chrysler Town & Country 2011/2012 Blindada
  {
    id: "chrysler-town-country-blindada-2012",
    brand: "CHRYSLER",
    model: "TOWN & COUNTRY",
    version: "3.6 V6 PENTASTAR 7 LUGARES • BLINDADO NÍVEL IIIA",
    year: "2011/2012",
    km: "113.500 km",
    price: "R$ 59.900,00",
    category: "Blindados",
    armored: true,
    image: "/instagram/car-24.jpg",
    power: "283 CV",
    acceleration: "9.5s",
    topSpeed: "185 km/h",
    slogan: "7 LUGARES BLINDADA IIIA • ESTRUTURA, MOTOR E CÂMBIO 100% OK",
    tag: "7 LUGARES BLINDADO",
    highlightSpecs: [
      { label: "Blindagem", value: "Nível IIIA • 7 Lugares" },
      { label: "Mecânica", value: "Estrutura, Motor, Câmbio e Suspensão 100% OK" },
      { label: "Opção 1 (No Estado)", value: "R$ 59.900,00" },
      { label: "Opção 2 (Feito Tudo)", value: "R$ 84.900,00 (Valor de Mercado)" }
    ]
  }
];

const c10Vehicle = INVENTORY_VEHICLES.find((v) => v.id === "chevrolet-c10-v8-1973") || INVENTORY_VEHICLES[0];
const maverickVehicle = INVENTORY_VEHICLES.find((v) => v.id === "ford-maverick-tremor-2025") || INVENTORY_VEHICLES[1];
const samuraiVehicle = INVENTORY_VEHICLES.find((v) => v.id === "suzuki-samurai-canvas-1997") || INVENTORY_VEHICLES[2];

/**
 * SEMPRE E SOMENTE OS 3 MELHORES para o Carrossel Hero (Showcase)
 */
export const SHOWCASE_VEHICLES: Vehicle[] = [
  c10Vehicle,
  maverickVehicle,
  samuraiVehicle,
];
