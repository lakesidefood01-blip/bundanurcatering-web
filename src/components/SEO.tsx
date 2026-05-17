import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Bunda Nur Catering | Nasi Kotak & Catering Sidoarjo Terbaik",
  description = "Layanan catering Sidoarjo terpercaya sejak 2011. Pesan Nasi Kotak, Tumpeng, Aqiqah, dan Ayam Bakar Madu premium dengan harga terjangkau. Halal & Higienis.",
  keywords = "catering sidoarjo, nasi kotak sidoarjo, paket aqiqah sidoarjo, tumpeng sidoarjo, bunda nur catering, catering enak sidoarjo",
  image = "/og-image.jpg",
  url = "https://bundanurcatering.com",
  type = "website"
}) => {
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "FoodEstablishment",
    "name": "Bunda Nur Catering",
    "image": image,
    "url": url,
    "telephone": "+62811341589",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jalan Sumatra no 24 Binangun Indah Buduran",
      "addressLocality": "Sidoarjo",
      "addressRegion": "Jawa Timur",
      "postalCode": "61252",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.4264,
      "longitude": 112.7214
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "menu": url + "#menu",
    "servesCuisine": "Indonesian"
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <link rel="icon" type="image/x-icon" href="https://bundanurcatering.com/favicon.ico" />

      {/* Open Graph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* Accessibility & UX */}
      <html lang="id" />
    </Helmet>
  );
};
