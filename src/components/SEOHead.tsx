import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  image?: string;
}

export default function SEOHead({
  title,
  description,
  canonicalUrl,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  image = 'https://typely.xyz/og-image.jpg',
}: SEOHeadProps) {
  const siteName = 'Typely - The Ultimate Typing Academy';
  const fullTitle = `${title} | ${siteName}`;
  const url = canonicalUrl || 'https://typely.xyz';

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Article Specific Metadata */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* JSON-LD Schema */}
      {type === 'article' ? (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            image: [image],
            datePublished: publishedTime,
            dateModified: modifiedTime || publishedTime,
            author: [{
              '@type': 'Person',
              name: author || 'Typely Editorial Team',
              url: 'https://typely.xyz/about'
            }],
            publisher: {
              '@type': 'Organization',
              name: 'Typely',
              logo: {
                '@type': 'ImageObject',
                url: 'https://typely.xyz/logo.png'
              }
            }
          })}
        </script>
      ) : (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteName,
            url: 'https://typely.xyz',
            description: description,
          })}
        </script>
      )}
    </Helmet>
  );
}
