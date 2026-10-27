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
  // 2. Toyota Yaris XLS 2023
  {
    id: "toyota-yaris-xls-2023",
    brand: "TOYOTA",
    model: "YARIS XLS",
    version: "1.5 16V FLEX AUTOMÁTICO • TETO SOLAR & FULL LED",
    year: "2023/2023",
    km: "Revisado",
    price: "R$ 84.900,00",
    category: "Superesportivos",
    image: "/instagram/car-2.jpg",
    power: "110 CV",
    acceleration: "10.8s",
    topSpeed: "180 km/h",
    slogan: "REVISADO EM CONCESSIONÁRIA • TOPO DE LINHA COM TETO SOLAR",
    tag: "TOPO DE LINHA",
    highlightSpecs: [
      { label: "Versão", value: "XLS Topo de Linha com Teto Solar" },
      { label: "Iluminação", value: "Faróis Full LED + DRL" },
      { label: "Interior", value: "Bancos em Couro, Paddle Shift e Ar Digital" },
      { label: "Histórico", value: "Todas as Revisões em Concessionária" }
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
  // 8. Renault Sandero 1.6 Expression 2015
  {
    id: "renault-sandero-expression-2015",
    brand: "RENAULT",
    model: "SANDERO 1.6 EXPRESSION",
    version: "1.6 8V HI-POWER FLEX • CAUTELAR APROVADA",
    year: "2015/2015",
    km: "109.000 km",
    price: "R$ 40.900,00",
    category: "Superesportivos",
    image: "/instagram/car-8.jpg",
    power: "106 CV",
    acceleration: "11.0s",
    topSpeed: "179 km/h",
    slogan: "IMPECÁVEL E COM LAUDO CAUTELAR APROVADO • 109.000 KM",
    tag: "LAUDO APROVADO",
    highlightSpecs: [
      { label: "Quilometragem", value: "109.000 km Originais" },
      { label: "Perícia", value: "Laudo Cautelar Aprovado" },
      { label: "Motorização", value: "1.6 Hi-Power Forte e Econômico" },
      { label: "Estado", value: "Impecável e Revisado" }
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
  // 11. Jeep Renegade 1.8 Sport 2021
  {
    id: "jeep-renegade-sport-2021",
    brand: "JEEP",
    model: "RENEGADE 1.8 SPORT",
    version: "1.8 16V E.TORQ FLEX AUTOMÁTICO • ÚNICO DONO",
    year: "2021/2021",
    km: "115.000 km",
    price: "R$ 64.900,00",
    category: "SUVs de Luxo",
    image: "/instagram/car-11.jpg",
    power: "139 CV",
    acceleration: "11.1s",
    topSpeed: "182 km/h",
    slogan: "ÚNICO DONO • PERÍCIA CAUTELAR APROVADA E REVISADO",
    tag: "ÚNICO DONO",
    highlightSpecs: [
      { label: "Procedência", value: "Único Dono" },
      { label: "Perícia", value: "Laudo Cautelar Aprovado" },
      { label: "Quilometragem", value: "115.000 km Revisados" },
      { label: "Conservação", value: "Em Ótimo Estado Geral" }
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
  // 17. Volkswagen Brasília 1.600 Placa Preta 1977
  {
    id: "vw-brasilia-1600-placa-preta-1977",
    brand: "VOLKSWAGEN",
    model: "BRASÍLIA 1.600",
    version: "PLACA PRETA COM CERTIFICADO DE COLEÇÃO • ALAVANCA EMPI",
    year: "1977/1977",
    km: "23.600 km",
    price: "R$ 25.900,00",
    category: "Superesportivos",
    image: "/instagram/car-17.jpg",
    power: "65 CV",
    acceleration: "Boxer 1600",
    topSpeed: "135 km/h",
    slogan: "PLACA PRETA CERTIFICADA • RODAS TALUDAS DE ALUMÍNIO & ESCAPE ESPORTIVO",
    tag: "PLACA PRETA",
    highlightSpecs: [
      { label: "Certificação", value: "Placa Preta com Certificado de Coleção" },
      { label: "Customização", value: "Suspensão Rebaixada & Rodas Taludas Alumínio" },
      { label: "Performance", value: "Alavanca EMPI + Escapamento Esportivo" },
      { label: "Interior", value: "Monocromático de Época Preservado" }
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
  // 22. Ford Jeep 4x4 1973
  {
    id: "ford-jeep-4x4-1973",
    brand: "FORD",
    model: "JEEP WILLYS 4X4",
    version: "MOTOR 6 CILINDROS • CÂMBIO 4 MARCHAS COM REDUZIDA",
    year: "1973/1973",
    km: "Coleção",
    price: "R$ 44.900,00",
    category: "Superesportivos",
    image: "/instagram/car-22.jpg",
    power: "6 Cilindros",
    acceleration: "4x4 Reduzida",
    topSpeed: "Clássico 4x4",
    slogan: "MOTOR 6 CILINDROS • 4X4 COM REDUZIDA • RODAS RARÍSSIMAS DE F1000",
    tag: "CLÁSSICO 6CC 4X4",
    highlightSpecs: [
      { label: "Motorização", value: "6 Cilindros Forte e Confiável" },
      { label: "Transmissão", value: "Câmbio 4 Marchas + 4x4 com Reduzida" },
      { label: "Rodas", value: "Rodas de F1000 Raríssimas" },
      { label: "Mecânica", value: "Veículo Totalmente Revisado" }
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
