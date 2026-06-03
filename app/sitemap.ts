import { MetadataRoute } from 'next';
import { NAV_LINKS, SERVICES, SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Main navigation routes
  const mainRoutes = NAV_LINKS.map((link) => ({
    url: `${baseUrl}${link.href === '/' ? '' : link.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: link.href === '/' ? 1.0 : (link.href === '/contact' ? 0.9 : 0.8),
  }));

  // Dynamic service routes
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // High priority for service pages since they drive conversions
  }));

  // Remove duplicates if any (e.g. if '/services' is in both)
  const allRoutes = [...mainRoutes, ...serviceRoutes];
  const uniqueRoutes = Array.from(new Map(allRoutes.map(item => [item.url, item])).values());

  return uniqueRoutes;
}
