import { KnowledgeItem } from '../types';

/**
 * Normalizes text by converting to lowercase, stripping Portuguese accents/diacritics,
 * and replacing special characters or punctuation with spaces.
 */
export function normalizeText(str: string): string {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[-_.,?!;:]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Finds the best matching KnowledgeItem in the knowledge base using intelligent
 * phrase matching, keyword scoring, and Portuguese semantic aliases.
 */
export function findBestKnowledgeMatch(
  userText: string,
  knowledgeBase: KnowledgeItem[]
): KnowledgeItem | null {
  const normUser = normalizeText(userText);
  if (!normUser || !knowledgeBase || knowledgeBase.length === 0) return null;

  const userWords = normUser.split(' ').filter((w) => w.length >= 2);

  let bestMatch: KnowledgeItem | null = null;
  let bestScore = 0;

  for (const item of knowledgeBase) {
    const normQ = normalizeText(item.question);
    const normA = normalizeText(item.answer);
    const normSec = normalizeText(item.section);

    let score = 0;

    // Direct / complete phrase matches
    if (normQ === normUser) {
      score += 100;
    } else if (normQ.includes(normUser) || normUser.includes(normQ)) {
      score += 80;
    }

    // Word-by-word relevance scoring
    for (const word of userWords) {
      if (word.length < 3) continue;

      if (normQ.includes(word)) score += 15;
      if (normA.includes(word)) score += 8;
      if (normSec.includes(word)) score += 5;

      // Domain-specific aliases & synonym boosting
      // Wi-Fi / Internet
      if (
        (word === 'wifi' || word === 'internet' || word === 'senha' || word === 'rede') &&
        (normQ.includes('wi fi') || normQ.includes('wifi') || normA.includes('wi fi') || normA.includes('wifi'))
      ) {
        score += 35;
      }

      // Check-in / Horário de chegada
      if (
        (word === 'checkin' || word === 'chegada' || word === 'chave' || word === 'acesso' || word === 'teclado') &&
        (normQ.includes('check in') || normQ.includes('checkin') || normSec.includes('check in'))
      ) {
        score += 35;
      }

      // Checkout / Horário de saída
      if (
        (word === 'checkout' || word === 'saida' || word === 'sair') &&
        (normQ.includes('checkout') || normSec.includes('checkout'))
      ) {
        score += 35;
      }

      // Banheira / Hidromassagem / Jacuzzi / Spa
      if (
        (word === 'hidro' || word === 'jacuzzi' || word === 'banheira' || word === 'spa' || word === 'banho') &&
        (normQ.includes('banheira') || normA.includes('banheira') || normA.includes('hidromassagem'))
      ) {
        score += 35;
      }

      // Restaurantes / Alimentação
      if (
        (word === 'restaurante' || word === 'restaurantes' || word === 'comer' || word === 'jantar' || word === 'gastronomia') &&
        (normQ.includes('restaurante') || normA.includes('restaurante') || normA.includes('regiao') || normSec.includes('guia'))
      ) {
        score += 30;
      }

      // Capacidade / Pessoas / Regras
      if (
        (word === 'capacidade' || word === 'pessoas' || word === 'hospedes' || word === 'casal' || word === 'familia') &&
        (normQ.includes('pessoas') || normQ.includes('casal') || normQ.includes('familia') || normA.includes('capacidade'))
      ) {
        score += 30;
      }

      // Cancelamento / Pagamento / Reserva
      if (
        (word === 'cancelar' || word === 'cancelamento' || word === 'pagamento' || word === 'preco' || word === 'valor') &&
        (normQ.includes('cancelar') || normQ.includes('pagamento') || normQ.includes('reserva') || normA.includes('airbnb'))
      ) {
        score += 30;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  return bestScore >= 10 ? bestMatch : null;
}
