import { siteConfig } from "@/config/site";

/**
 * Cria o link direto do WhatsApp (wa.me) higienizando o número de telefone e codificando a mensagem
 */
export function buildWhatsAppLink(message: string, customPhone?: string): string {
  const phone = (customPhone || siteConfig.contact.whatsappNumber).replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Gera mensagem contextualizada de interesse em um veículo específico do estoque
 */
export function buildVehicleWhatsAppLink(params: {
  brand: string;
  model: string;
  year: string;
  price?: string;
}): string {
  const isEn = siteConfig.language === "en";
  const message = isEn
    ? `Hello! I would like more information and details regarding the ${params.brand} ${params.model} (${params.year}) listed on ${siteConfig.brand.name}.`
    : `Olá! Gostaria de receber mais informações e negociar o veículo ${params.brand} ${params.model} (${params.year}) anunciado no site da ${siteConfig.brand.shortName}.`;
  return buildWhatsAppLink(message);
}

/**
 * Gera mensagem de solicitação do Personal Sourcing (encomenda de veículos)
 */
export function buildSourcingWhatsAppLink(params: {
  model: string;
  name: string;
  phone: string;
  specs?: string;
}): string {
  const isEn = siteConfig.language === "en";
  const message = isEn
    ? `Hello! I would like to request vehicle sourcing through ${siteConfig.brand.name}:
- Desired Model: ${params.model}
- Name: ${params.name}
- Phone/WhatsApp: ${params.phone}
- Specifications: ${params.specs || "Standard"}`
    : `Olá! Gostaria de encomendar um veículo através do serviço de Personal Sourcing da ${siteConfig.brand.shortName}:
- Modelo Desejado: ${params.model}
- Nome: ${params.name}
- Telefone/WhatsApp: ${params.phone}
- Especificações: ${params.specs || "Padrão"}`;
  return buildWhatsAppLink(message);
}

/**
 * Gera mensagem de agendamento de visita privativa ao showroom
 */
export function buildVisitScheduleWhatsAppLink(): string {
  const isEn = siteConfig.language === "en";
  const message = isEn
    ? `Hello! I would like to schedule a private showroom appointment with ${siteConfig.brand.name}.`
    : `Olá! Gostaria de agendar uma visita privativa no Showroom da ${siteConfig.brand.shortName}.`;
  return buildWhatsAppLink(message);
}

/**
 * Gera mensagem de atendimento VIP geral com o Concierge
 */
export function buildConciergeGeneralWhatsAppLink(vehicleName?: string): string {
  const isEn = siteConfig.language === "en";
  let message: string;
  if (isEn) {
    message = vehicleName
      ? `Hello, I am browsing ${siteConfig.brand.name} and would like exclusive details about the ${vehicleName}.`
      : `Hello! I would like dedicated VIP concierge assistance with ${siteConfig.brand.name}.`;
  } else {
    message = vehicleName
      ? `Olá, estou no site da ${siteConfig.brand.shortName} e gostaria de informações exclusivas sobre o veículo ${vehicleName}.`
      : `Olá! Gostaria de um atendimento exclusivo pelo Concierge da ${siteConfig.brand.shortName}.`;
  }
  return buildWhatsAppLink(message);
}

