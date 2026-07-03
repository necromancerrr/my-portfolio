import type { MetadataRoute } from 'next';

const siteUrl = 'https://my-portfolio-eta-mocha-48.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
