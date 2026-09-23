import type { MetadataRoute } from 'next';
import { SITE_ORIGIN } from '@/lib/site';

const DISALLOW = [
  '/signin',
  '/signup',
  '/blog-details',
  '/blog-sidebar',
  '/floor-plans-simple',
  '/error',
];

/**
 * Search and AI answer-engine crawlers. A crawler that matches a named group ignores the `*` group,
 * so every group repeats the same disallow list.
 */
const NAMED_AGENTS = [
  'Googlebot',
  'Bingbot',
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'Claude-Web',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
  'Applebot-Extended',
  'Google-Extended',
  'Bytespider',
  'CCBot',
  'cohere-ai',
  'Meta-ExternalAgent',
  'DuckAssistBot',
  'MistralAI-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      ...NAMED_AGENTS.map((userAgent) => ({ userAgent, allow: '/', disallow: DISALLOW })),
    ],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
