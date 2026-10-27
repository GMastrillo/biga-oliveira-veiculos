# 🏎️ Luxury Automotive Showroom & Estoque — Template Web Next.js

Template de alta conversão e estética editorial automotiva de hiperluxo (padrão **Awwwards / Site of the Day / Porsche / Bugatti / Aston Martin**), projetado para revendedoras de veículos premium, boutiques de hipercarros, blindados e importação sob encomenda.

Construído com **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Lenis Smooth Scroll** e **Motion**.

> 🤖 **Para Agentes de IA (Cursor, Claude Code, Copilot, Antigravity):**
> Consulte o arquivo [`AI_INSTRUCTIONS.md`](AI_INSTRUCTIONS.md) para o guia passo a passo de replicação em massa em 5 minutos.

---

## ⚡ Guia Rápido de Replicação (Como usar como Template)

Para criar um novo site para qualquer loja ou concessionária a partir deste projeto, você só precisa seguir **4 passos simples**:

### 1. Dados e Identidade da Loja em 1 Arquivo (`src/config/site.ts`)
Abra o arquivo [`src/config/site.ts`](src/config/site.ts). Nele estão centralizados:
- **Nome da Loja e Slogan:** `brand.name`, `brand.shortName`, `brand.tagline`
- **WhatsApp Principal:** `contact.whatsappNumber` (apenas dígitos, ex: `"5511999999999"`) — todos os botões de proposta, concierge e sourcing do site inteiro usarão esse número automaticamente!
- **Endereços e Bairros:** `contact.addresses`, `contact.neighborhood`, `contact.cityStateZip`
- **Telefone e E-mail:** `contact.displayPhone`, `contact.email`
- **Horários de Funcionamento:** `contact.businessHours`
- **Redes Sociais:** `social.instagram`, `social.tiktok`, `social.youtube`
- **Pilares Exclusivos:** `pillars` (os 4 diferenciais da loja)
- **Metadados de SEO:** `seo.keywords`, `seo.siteUrl`, `brand.description`

### 2. Cadastrar ou Atualizar o Estoque de Veículos (`src/data/inventory.ts`)
Abra o arquivo [`src/data/inventory.ts`](src/data/inventory.ts):
- **`SHOWCASE_VEHICLES`:** Os 3 carros em destaque com telemetria no carrossel de entrada da página inicial (Home).
- **`INVENTORY_VEHICLES`:** O acervo completo de carros à venda.
- Cada carro possui:
  ```typescript
  {
    id: "porsche-911-gt3",
    brand: "PORSCHE",
    model: "911 GT3",
    version: "4.0 24V H6 GASOLINA PDK",
    year: "2025/2026",
    km: "1.200 km",
    price: "R$ 2.549.900,00",
    category: "Superesportivos", // "Superesportivos" | "SUVs de Luxo" | "Blindados" | "0 KM"
    image: "https://url-da-foto.webp",
    power: "510 CV",
    acceleration: "3.4s",
    topSpeed: "318 km/h",
    armored: false,
    tag: "DISPONÍVEL",
    highlightSpecs: [
      { label: "Motor", value: "4.0L Boxer 6 Cilindros" },
      { label: "Câmbio", value: "PDK 7 Velocidades" }
    ]
  }
  ```

### 3. Logomarca e Identidade Visual (`/public`)
- **Logomarca:** Salve o arquivo em `public/logo.png` (ou `public/logo.svg`) e aponte em `siteConfig.brand.logoPath`.
- **Intro Tipográfica (Padrão):** O site usa uma vinheta de abertura editorial ultrarrápida em texto puro (cidade, nome da loja e slogan) que consome os dados de `siteConfig.ts` automaticamente. Sem downloads pesados de vídeo e sem risco de bloqueio de autoplay no mobile!
- **Vídeo de Abertura (Opcional):** Se o cliente desejar vídeo, basta apontar o caminho em `siteConfig.media.heroVideoSrc`.

### 4. Rodar e Testar Localmente
```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev
```
Acesse `http://localhost:3005` no navegador.

---

## 🧭 Estrutura de Páginas e Rotas

| Rota | Descrição |
|---|---|
| `/` | **Home Page:** Hero Híbrido com intro cinemática opcional, carrossel de supercarros com telemetria, vitrine de estoque, Private Lounge institucional e formulário de Personal Sourcing. |
| `/estoque` | **Aba/Página de Estoque:** Catálogo dedicado sem bloqueio de vídeo, com filtros facetados por categoria (`TODOS`, `SUPERESPORTIVOS`, `SUVS DE LUXO`, `BLINDADOS`, `0 KM`), busca em tempo real por modelo/ano e seletor por marcas. |
| `/#experience` | Seção editorial sobre os pilares, curadoria e histórico da loja. |
| `/#sourcing` | Formulário de Personal Broker para clientes encomendarem veículos sob medida no Brasil ou no exterior. |
| `/#location` | Rodapé editorial com endereços de showrooms físicos, mapa de contatos e canais sociais. |

---

## 🎨 Diretrizes Estéticas Anti-Clichê

Este template segue os princípios de design de hiperluxo:
- **Zero Emojis em UI:** Tipografia em caixa alta, tracking aberto (`tracking-[0.25em]`) e ícones minimalistas monocromáticos (`lucide-react`).
- **Zero Glows Artificiais/Neon:** Iluminação provém de fotos reais de estúdio e bordas translúcidas de 1px (`border-white/10`).
- **Modo Claro e Modo Escuro Nativos:** Alternador instantâneo com persistência no navegador via `localStorage`.
- **Física de Scroll:** Lenis Smooth Scroll sincronizado com o ticker do GSAP para rolagem suave a 60/120 FPS.

---

## 🚀 Deploy em Produção (Netlify)

1. Gere a compilação estática com `npm run build` (exporta para a pasta `/out`).
2. Faça o deploy direto via Netlify CLI: `npx netlify-cli deploy --prod --dir out --site-name maestri-biga-oliveira-veiculos`.
3. Ou na raiz do Maestri, execute o deploy em massa: `npm run deploy:massa` ou individual com `npm run deploy -- --slug=biga-oliveira-veiculos`.
4. (Opcional) Configure as variáveis de ambiente baseadas no [`.env.example`](.env.example).

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** Next.js 15 (App Router, React 19)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS + PostCSS
- **Animações e Física:** GSAP 3 + Lenis + Motion
- **Ícones:** Lucide React
