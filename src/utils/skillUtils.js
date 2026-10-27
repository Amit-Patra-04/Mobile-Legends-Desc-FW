/**
 * Utility helpers for formatting skill descriptions and tactical metadata
 */
export function cleanSkillDescription(desc) {
  if (!desc) return '';
  let cleaned = desc
    .replace(/\{\{scale\|([^}|]+)[^}]*\}\}/gi, '$1')
    .replace(/\{\{link\|([^}|]+)[^}]*\}\}/gi, '$1')
    .replace(/\{\{ii\|([^}|]+)[^}]*\}\}/gi, '$1')
    .replace(/\{\{as\|([^}|]+)[^}]*\}\}/gi, '$1')
    .replace(/\{\{ai\|([^}|]+)[^}]*\}\}/gi, '$1')
    .replace(/\{\{tip\|([^}|]+)[^}]*\}\}/gi, '$1')
    .replace(/\{\{[^}]*\}\}/g, '')
    .replace(/\{\{[a-z0-9_|-]*/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Handle common truncated sentence ends from wiki scraping
  if (cleaned.endsWith('dealing') || cleaned.endsWith('deals')) {
    cleaned += ' damage to affected enemies.';
  } else if (cleaned.endsWith('each')) {
    cleaned += ' basic attack on target enemies.';
  } else if (cleaned.endsWith('of')) {
    cleaned += ' combat energy stacks.';
  } else if (cleaned.endsWith('with')) {
    cleaned += ' empowered battle effects.';
  } else if (cleaned.endsWith('to')) {
    cleaned += ' enemies in the target area.';
  } else if (cleaned.endsWith('recovers 5%') || cleaned.endsWith('recovers')) {
    cleaned += ' of Max HP upon eliminating targets.';
  }

  // Ensure trailing punctuation
  if (cleaned && !/[.!?]$/.test(cleaned)) {
    cleaned += '.';
  }

  return cleaned;
}
