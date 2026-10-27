import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { z } from "zod";

const cwd = process.cwd();

// Fallback Schema Zod estrito V5.0
const urlOrPathSchema = z.string().refine(
  (val) => val.startsWith("/") || val.startsWith("http://") || val.startsWith("https://"),
  { message: "A URL deve ser um caminho relativo local iniciado com '/' ou uma URL absoluta 'http/https'." }
);

const TelemetrySchema = z.object({
  agent_id: z.string(),
  skill_loaded: z.string(),
  gold_reference_used: z.string().optional(),
});

const ClientShowroomSchema = z.object({
  clientId: z.string(),
  businessType: z.enum(["concessionaria", "blindadora", "oficina_performance", "estetica_detalhamento", "consultoria_contabil", "importadora_broker"]),
  _telemetry: TelemetrySchema,
  brandPalette: z.object({
    primaryHex: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
    secondaryHex: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
    accentHex: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  }),
  navbar: z.object({
    brandDisplayName: z.string().max(20, "Nome muito longo para a navbar (máx 20 chars)."),
    logoUrl: urlOrPathSchema,
  }),
  hero: z.object({
    badgeText: z.string().max(32),
    headline: z.string().max(48, "VIOLAÇÃO DE LAYOUT: Headline do Hero ultrapassa 48 caracteres."),
    subheadline: z.string().max(180),
    heroMediaUrl: urlOrPathSchema,
    mediaValidatedClean: z.literal(true),
    ctaPrimaryText: z.string().max(24),
  }),
  activeSections: z.array(z.string()),
  inventoryItems: z.array(
    z.object({
      modelName: z.string(),
      year: z.number(),
      specsSummary: z.string().max(80),
      imageUrl: urlOrPathSchema,
      imageAuditTag: z.literal("clean_vehicle_only"),
    })
  ).optional(),
  vipDeliveries: z.array(
    z.object({
      caption: z.string(),
      imageUrl: urlOrPathSchema,
      imageAuditTag: z.literal("lifestyle_or_delivery"),
    })
  ).optional(),
  specializedServices: z.array(
    z.object({
      title: z.string().max(40),
      technicalDescription: z.string().max(180),
      specsList: z.array(z.string()),
      ctaLabel: z.string().max(25),
    })
  ).optional(),
});

async function runPrebuildGate() {
  console.log(`\n================================================================`);
  console.log(`🛡️ [PREBUILD GATE V5.0] Validando conformidade estrita e telemetria...`);
  console.log(`================================================================`);

  // Localiza o 04-showroom-config.json
  const candidatePaths = [
    resolve(cwd, "state/04-showroom-config.json"),
    resolve(cwd, "../state/04-showroom-config.json"),
    resolve(cwd, "TemplateCars/state/04-showroom-config.json"),
    resolve(cwd, "src/config/showroom-config.json"),
  ];

  let configPath = "";
  for (const p of candidatePaths) {
    if (existsSync(p)) {
      configPath = p;
      break;
    }
  }

  if (!configPath) {
    console.error(`❌ FALHA CRÍTICA PREBUILD: Arquivo 04-showroom-config.json não encontrado em: ${candidatePaths.join(", ")}`);
    process.exit(1);
  }

  let config: any;
  try {
    const raw = readFileSync(configPath, "utf-8");
    config = JSON.parse(raw);
  } catch (err: any) {
    console.error(`❌ FALHA CRÍTICA PREBUILD: Erro ao ler JSON de ${configPath}: ${err.message}`);
    process.exit(1);
  }

  // 1. TRAVA DE TELEMETRIA E SKILLS OFICIAIS (PASSO 5)
  const legacySkillsBlacklist = [
    "automotive-luxury",
    "frontend-design",
    "all-in-one",
    "vertexdesign",
    "maestri-art-director",
    "maestri-instagram-scout",
    "superpowers",
    "graphify",
    "dev-lp",
    "dev-imobiliaria",
    "imobiliaria",
  ];

  const telemetry = config._telemetry;
  if (!telemetry || typeof telemetry !== "object") {
    console.error(`❌ FALHA CRÍTICA DE TELEMETRIA: Bloco '_telemetry' ausente no 04-showroom-config.json.`);
    console.error(`  O arquivo DEVE registrar explicitamente as skills oficiais carregadas.`);
    process.exit(1);
  }

  const skillLoaded = String(telemetry.skill_loaded || "").toLowerCase();

  // A. Verificar tentativa de uso de skill antiga/deletada
  for (const legacy of legacySkillsBlacklist) {
    if (skillLoaded.includes(legacy)) {
      console.error(`❌ FALHA CRÍTICA DE TELEMETRIA: Tentativa de uso de skill antiga/deletada '${legacy}' em _telemetry.skill_loaded!`);
      console.error(`  Skills permitidas exclusivamente: 'design-master' e 'project-genesis-harness'.`);
      process.exit(1);
    }
  }

  // B. Verificar se registra explicitamente design-master e project-genesis-harness
  const hasDesignMaster = skillLoaded.includes("design-master");
  const hasGenesisHarness = skillLoaded.includes("project-genesis-harness");

  if (!hasDesignMaster || !hasGenesisHarness) {
    console.error(`❌ FALHA CRÍTICA DE TELEMETRIA: _telemetry.skill_loaded inválido: "${telemetry.skill_loaded}"`);
    console.error(`  O artefato de Showroom (04-showroom-config.json) deve registrar explicitamente o uso conjunto das duas skills oficiais:`);
    console.error(`  'design-master + project-genesis-harness'`);
    process.exit(1);
  }

  // C. Validação de estado adicional (01 a 06) no diretório de state
  const stateDir = dirname(configPath);
  try {
    const filesInState = readdirSync(stateDir);
    for (const sf of filesInState) {
      if (sf.endsWith(".json")) {
        const fullSfPath = resolve(stateDir, sf);
        const sfData = JSON.parse(readFileSync(fullSfPath, "utf-8"));
        if (sfData._telemetry) {
          const sSkill = String(sfData._telemetry.skill_loaded || "").toLowerCase();
          for (const legacy of legacySkillsBlacklist) {
            if (sSkill.includes(legacy)) {
              console.error(`❌ FALHA DE TELEMETRIA no arquivo ${sf}: uso de skill legada '${legacy}' detectado!`);
              process.exit(1);
            }
          }
        }
      }
    }
  } catch (err: any) {
    // Ignora se não for possível listar diretório
  }

  console.log(`  [Gate 1/6] ✅ Telemetria e Skills Oficiais verificadas com sucesso!`);
  console.log(`             Skill registrada: "${telemetry.skill_loaded}"`);

  // 2. Validação Zod completa
  try {
    ClientShowroomSchema.parse(config);
    console.log(`  [Gate 2/6] ✅ Contrato Zod (ClientShowroomSchema) validado com sucesso!`);
  } catch (err: any) {
    console.error(`❌ FALHA NO SCHEMA ZOD:`, (err as any).errors || (err as any).message);
    process.exit(1);
  }

  // 3. Lei 4: Não-Concessionárias e Não-Importadoras não podem ter estoque de carros
  if (config.businessType === "concessionaria" || config.businessType === "importadora_broker") {
    if (!config.inventoryItems || config.inventoryItems.length === 0) {
      console.error(`❌ VIOLAÇÃO: ${config.businessType} sem catálogo de veículos em inventoryItems!`);
      process.exit(1);
    }
    console.log(`  [Gate 3/6] ✅ ${config.businessType === "importadora_broker" ? "Importadora/Broker" : "Concessionária"} com ${config.inventoryItems.length} veículos em catálogo.`);
  } else {
    if (config.activeSections && config.activeSections.includes("inventory_grid")) {
      console.error(`❌ VIOLAÇÃO LEI 4: businessType é '${config.businessType}', mas activeSections contém 'inventory_grid'!`);
      process.exit(1);
    }
    if (config.inventoryItems && config.inventoryItems.length > 0) {
      console.error(`❌ VIOLAÇÃO LEI 4: businessType é '${config.businessType}', mas inventoryItems contém carros à venda!`);
      process.exit(1);
    }
    if (!config.specializedServices || config.specializedServices.length === 0) {
      console.error(`❌ VIOLAÇÃO LEI 4: businessType é '${config.businessType}', mas specializedServices está vazio!`);
      process.exit(1);
    }
    console.log(`  [Gate 3/6] ✅ Lei 4 respeitada: Nicho '${config.businessType}' sem grid de estoque e com serviços técnicos.`);
  }

  // 4. Trava de Hero Headline (Máximo 48 caracteres)
  if (config.hero.headline.length > 48) {
    console.error(`❌ VIOLAÇÃO DE LAYOUT: hero.headline ultrapassa 48 caracteres: "${config.hero.headline}" (${config.hero.headline.length} chars)`);
    process.exit(1);
  }
  console.log(`  [Gate 4/6] ✅ Hero Headline dentro do limite seguro (${config.hero.headline.length}/48 chars): "${config.hero.headline}"`);

  // 5. Trava de Mídia e Imagens Auditadas
  if (config.hero.mediaValidatedClean !== true) {
    console.error(`❌ VIOLAÇÃO DE MÍDIA: hero.mediaValidatedClean não é true. Proibido usar imagens não auditadas no Hero.`);
    process.exit(1);
  }
  if (config.inventoryItems) {
    for (const item of config.inventoryItems) {
      if (item.imageAuditTag !== "clean_vehicle_only") {
        console.error(`❌ VIOLAÇÃO DE MÍDIA: Veículo "${item.modelName}" possui tag inválida: "${item.imageAuditTag}". Deve ser "clean_vehicle_only".`);
        process.exit(1);
      }
    }
  }
  if (config.vipDeliveries) {
    for (const item of config.vipDeliveries) {
      if (item.imageAuditTag !== "lifestyle_or_delivery") {
        console.error(`❌ VIOLAÇÃO DE MÍDIA: Entrega VIP possui tag inválida: "${item.imageAuditTag}". Deve ser "lifestyle_or_delivery".`);
        process.exit(1);
      }
    }
  }
  console.log(`  [Gate 5/6] ✅ Auditoria de mídia 100% verificada (Hero clean, tags de catálogo e entregas VIP).`);

  // 6. Trava de Navbar (Máx 20 caracteres sem truncate)
  if (config.navbar.brandDisplayName.length > 20) {
    console.error(`❌ VIOLAÇÃO DE NAVBAR: navbar.brandDisplayName tem ${config.navbar.brandDisplayName.length} caracteres (máx 20).`);
    process.exit(1);
  }
  console.log(`  [Gate 6/6] ✅ Navbar Brand Display Name aprovado (${config.navbar.brandDisplayName.length}/20 chars): "${config.navbar.brandDisplayName}"`);

  console.log(`\n🎉 [PREBUILD GATE V5.0] TODAS AS 6 TRAVAS DETERMINÍSTICAS PASSARAM COM SUCESSO!\n`);
  process.exit(0);
}

runPrebuildGate().catch((err) => {
  console.error("Erro no runner de prebuild:", err);
  process.exit(1);
});
