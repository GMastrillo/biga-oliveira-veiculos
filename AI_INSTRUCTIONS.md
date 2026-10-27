# 🤖 GUIA DE REPLICAÇÃO EM MASSA PARA AGENTES DE IA (AI RUNBOOK)

> **AVISO PARA O AGENTE DE IA (Cursor, Claude Code, Copilot, Antigravity, etc.):**
> Este repositório é um **Master Template de Ultra-Luxo** (estética editorial Awwwards / Porsche / Avantgarde) desenvolvido para ser **replicado em massa** para lojas de carros de luxo, boutiques automotivas, importadoras independentes e personal brokers.
>
> **Você NÃO deve recriar componentes, reestruturar layouts ou reescrever a lógica do zero.**
> O projeto foi 100% modularizado para que um novo site de cliente seja gerado alterando apenas **2 arquivos principais** e substituindo o logo.

---

## 🗺️ Mapa Rápido: Onde Mudar Cada Coisa

| O que você quer alterar? | Arquivo Alvo | O que fazer? |
|---|---|---|
| **Nome da loja, cidade, telefones, WhatsApp, endereço, horário, redes sociais, SEO** | `src/config/site.ts` | Editar os campos do objeto `siteConfig`. |
| **Carros do estoque, destaques do Hero, fotos, preços, quilometragem, fichas técnicas** | `src/data/inventory.ts` | Atualizar os arrays `SHOWCASE_VEHICLES` e `INVENTORY_VEHICLES`. |
| **Logo da nova loja** | `public/` e `src/config/site.ts` | Salvar o logo em `public/logo.png` (ou `.svg`) e apontar em `siteConfig.brand.logoPath`. |
| **Intro em Texto (Abertura do site)** | `src/config/site.ts` / `src/components/sections/hero-hybrid.tsx` | Já consome automaticamente a cidade, nome e slogan de `siteConfig`. Duração padrão: 2.5s. |
| **Mensagens e links de WhatsApp** | `src/lib/whatsapp.ts` | Já consome automaticamente o `whatsappRaw` de `siteConfig`. Altere apenas se o cliente pedir textos de mensagens específicos. |
| **Diferenciais da Boutique (Seção Experience)** | `src/config/site.ts` | Editar o array `pillars` (4 cards de autoridade). |

---

## 1. Passo a Passo para Criar um Novo Site (Checklist de 5 Minutos)

Quando o usuário pedir: *"Crie um site para a loja X com os carros Y e Z"*, execute rigorosamente esta sequência:

### Passo 1: Configurar a Identidade em `src/config/site.ts`
Abra `src/config/site.ts` e substitua os dados com as informações do cliente:

```typescript
export const siteConfig = {
  brand: {
    name: "NOME DA BOUTIQUE",            // Ex: "Veloce Motors", "Avantgarde Imports"
    shortName: "VELOCE",                 // Nome curto em caixa alta (aparece na intro em texto)
    tagline: "A SUA COLEÇÃO EXCLUSIVA",  // Slogan sofisticado em caixa alta
    cityState: "CURITIBA · BRASIL",      // Cidade e Estado (aparece na intro e no rodapé)
    description: "...",                  // Descrição institucional para SEO
    logoPath: "/logo.png",               // Caminho do logo na pasta /public
    faviconPath: "/favicon.ico",
  },
  contact: {
    phone: "(41) 3000-0000",             // Telefone formatado
    whatsapp: "(41) 99999-9999",         // WhatsApp formatado para exibição
    whatsappRaw: "5541999999999",        // OBRIGATÓRIO: apenas números com DDI 55 (sem espaços ou traços)
    address: "Avenida Batel, 1500",
    neighborhood: "Batel · Curitiba - PR",
    hours: {
      weekdays: "Segunda a Sexta: 09h00 às 18h30",
      saturdays: "Sábados: 09h00 às 14h00",
      sundays: "Domingos: Sob agendamento privativo",
    },
  },
  social: {
    instagram: "https://instagram.com/loja",
    tiktok: "https://tiktok.com/@loja",
    youtube: "https://youtube.com/@loja",
  },
  pillars: [
    // 4 pilares de confiança (curadoria, sigilo, transporte, lounge)
  ],
  seo: {
    siteUrl: "https://site-do-cliente.com.br",
    keywords: ["Carros de Luxo Curitiba", "Porsche Curitiba", ...],
  },
};
```

### Passo 2: Cadastrar o Estoque em `src/data/inventory.ts`
O arquivo possui dois arrays:

1. **`SHOWCASE_VEHICLES`**: Os 3 a 5 veículos de maior impacto visual que giram no carrossel Hero no topo da Home.
   - Dica: Prefira fotos com fundo neutro/estúdio ou imagens recortadas.
   - Cada um deve ter `brand`, `model`, `slogan`, `year`, `km`, `power`, `price`, `image` e opcionalmente `watermarkLogo` (marca d'água da montadora).
2. **`INVENTORY_VEHICLES`**: Todo o catálogo da loja (exibido na grade da Home e na página `/estoque`).
   - O campo `category` deve ser: `"SUPERESPORTIVOS"`, `"SUVS & EXECUTIVOS"`, `"CLÁSSICOS & RARIDADES"`, `"CONVERSÍVEIS"`, `"BLINDADOS"` ou `"0 KM"`.
   - O campo `armored` (booleano) ativa a tag e filtro de blindagem.
   - O objeto `dossier` permite adicionar galeria de fotos secundárias, especificações detalhadas e opcionais para o modal de dossiê técnico.

### Passo 3: Colocar o Logo na Pasta `public/`
- Salve o arquivo de logo do cliente em `public/logo.png` (ou `public/logo.svg`).
- O navbar e o footer aplicam automaticamente `dark:brightness-0 dark:invert` para logotipos pretos em modo escuro. Se o logo for colorido ou branco nativo, remova essa classe em `src/components/layout/navbar.tsx` e `footer.tsx`.

### Passo 4: Intro em Texto (Automática)
- A intro do site é **100% tipográfica e ultrarrápida** (está em `src/components/sections/hero-hybrid.tsx`).
- Ela consome diretamente `siteConfig.brand.cityState`, `shortName` e `tagline`.
- Acontece apenas 1 vez por sessão (`sessionStorage`).
- Se o cliente quiser pular ou não quiser intro, basta definir `introStage` inicial como `"done"` ou remover a verificação de `sessionStorage`.

### Passo 5: Validar a Compilação
Sempre execute o comando de build antes de finalizar a entrega:
```bash
npm run build
```
O build deve terminar com **código 0 e zero erros de tipo**.

---

## 🚫 Regras Estéticas Anti-IA (O que NUNCA fazer)

Como agente de IA, você **NUNCA DEVE**:
1. ❌ **Usar emojis:** Proibido colocar 🚀, ✨, 🔥, 💎, 🚗, etc. Use ícones monocromáticos do `lucide-react` com `strokeWidth={1.5}` ou tipografia com tracking aberto.
2. ❌ **Adicionar orbs neon borradas:** Nada de `blur-3xl bg-purple-600/30` ou gradientes neon clichês de SaaS. O design de luxo é fundamentado em pretos profundos (`#000000`), brancos nítidos, cinzas acetinados e bordas finas de 1px (`border-black/10` ou `border-white/10`).
3. ❌ **Usar tipografia genérica:** Mantenha as fontes editoriais do projeto: **Cinzel** (para títulos/display) e fontes mono para telemetria e dados técnicos.
4. ❌ **Quebrar a integração com WhatsApp:** O número no `whatsappRaw` DEVE ser sempre somente números no padrão internacional `55DD9XXXXXXXX`. Não coloque `+`, `-`, `(` ou espaços.
5. ❌ **Deixar `any` no TypeScript:** Todas as propriedades de veículos devem respeitar a interface `Vehicle` de `src/data/inventory.ts`.

---

## 📂 Arquitetura Detalhada dos Componentes

- **`src/app/page.tsx`**: Home page completa. Orquestra Navbar, Hero Showcase, Filtros, Grade de Veículos, Lounge Privativo, Personal Sourcing, Footer e Botão Flutuante de Concierge.
- **`src/app/estoque/page.tsx`**: Rota independente `/estoque`. Possui cabeçalho editorial exclusivo, métricas rápidas (unidades disponíveis, laudos 100%), filtros facetados instantâneos e paginação/listagem completa.
- **`src/components/sections/hero-hybrid.tsx`**: Hero com intro em texto editorial + carrossel dinâmico dos carros com telemetria e barra de progresso temporal.
- **`src/components/sections/showroom-grid.tsx`**: Grade de veículos com cards de alta densidade visual, fotos com hover zoom, tags de destaque (Blindado, 0 KM, Série Limitada) e botões de proposta direta.
- **`src/components/sections/personal-sourcing.tsx`**: Seção "Não encontrou o veículo ideal?". Possui formulário de encomenda sob demanda (marca, modelo, ano, blindagem, observações) que envia o pedido formatado direto para o WhatsApp do broker.
- **`src/components/sections/private-lounge.tsx`**: Seção de autoridade e experiência com os 4 pilares configurados em `siteConfig.pillars`.
- **`src/components/modals/vehicle-detail-modal.tsx`**: Dossiê completo do carro em modal com ficha técnica (câmbio, combustível, cor, motorização, opcionais) e botão de proposta instantânea.
- **`src/components/layout/concierge-button.tsx`**: Botão flutuante no canto inferior direito que se adapta dinamicamente ao carro que o usuário está visualizando.

---

## ⚡ Comandos Úteis

- Iniciar servidor de desenvolvimento: `npm run dev`
- Verificar integridade e compilar produção: `npm run build`
- Formatação e linter: `npm run lint`
