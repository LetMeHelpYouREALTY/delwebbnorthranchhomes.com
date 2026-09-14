import Script from 'next/script';
import {
  SITE_ORIGIN,
  SITE_PHONE_SCHEMA,
  GBP_BUSINESS_NAME,
  GBP_SOCIAL_PROFILES,
  SITE_EMAIL,
  gbpPostalAddressSchema,
} from '@/lib/site';
import { absoluteMediaUrl } from '@/lib/media';

export default function SchemaMarkup() {
  const baseUrl = SITE_ORIGIN;

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: GBP_BUSINESS_NAME,
    alternateName: 'Dr. Jan Duffy Real Estate',
    url: baseUrl,
    logo: `${baseUrl}/images/logo/logo.svg`,
    telephone: SITE_PHONE_SCHEMA,
    email: SITE_EMAIL,
    address: gbpPostalAddressSchema(),
    sameAs: [...GBP_SOCIAL_PROFILES],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    employee: {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
    },
  };

  // WebSite Schema with SearchAction (enables sitelinks search box)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: GBP_BUSINESS_NAME,
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/homes-for-sale?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: GBP_BUSINESS_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo/logo.svg`,
      },
    },
  };

  // Person Schema (E-E-A-T: clear author/entity for Experience, Expertise, Authority, Trust — Jan 2026)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: 'Dr. Jan Duffy',
    jobTitle: 'REALTOR®',
    description: 'REALTOR® specializing in Del Webb North Ranch and North Las Vegas 55+ active adult communities. Licensed with Berkshire Hathaway HomeServices Nevada Properties (S.0197614.LLC).',
    url: `${baseUrl}/about`,
    telephone: SITE_PHONE_SCHEMA,
    email: SITE_EMAIL,
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      credentialNumber: 'S.0197614.LLC',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
    },
    sameAs: [
      'https://www.youtube.com/@DrDuffy',
      ...GBP_SOCIAL_PROFILES,
    ],
    knowsAbout: [
      'Del Webb North Ranch',
      '55+ active adult communities',
      'North Las Vegas real estate',
      '55+ housing in North Las Vegas',
      'Single-story homes',
    ],
  };

  // RealEstateAgent Schema (2026: knowsAbout for AI/voice and rich results)
  const realEstateAgentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${baseUrl}/#realestateagent`,
    name: 'Dr. Jan Duffy',
    alternateName: 'Dr. Jan Duffy Real Estate',
    url: baseUrl,
    image: absoluteMediaUrl('place.primary'),
    telephone: SITE_PHONE_SCHEMA,
    email: SITE_EMAIL,
    address: gbpPostalAddressSchema(),
    areaServed: [
      { '@type': 'City', name: 'North Las Vegas', addressRegion: 'NV' },
    ],
    priceRange: '$400,000-$600,000',
    knowsAbout: [
      'Del Webb North Ranch',
      '55+ active adult communities',
      'North Las Vegas real estate',
      '55+ housing in North Las Vegas',
      'Single-story homes',
      'Resort-style amenities',
      'Gated 55+ community',
    ],
    worksFor: {
      '@type': 'Organization',
      name: GBP_BUSINESS_NAME,
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Real Estate License',
      credentialNumber: 'S.0197614.LLC',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
    },
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c'),
        }}
      />
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
        }}
      />
      <Script
        id="realestateagent-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(realEstateAgentSchema).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
