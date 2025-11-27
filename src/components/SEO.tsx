import { Helmet } from '@dr.pogodin/react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const defaultMeta = {
  title: 'Paulo Shizuo - Desenvolvedor Full Stack',
  description: 'Portfolio de Paulo Shizuo Vasconcelos Tatibana - Desenvolvedor Full Stack especializado em React, TypeScript, Node.js e mais.',
  keywords: 'desenvolvedor, full stack, react, typescript, nodejs, portfolio, paulo shizuo',
  image: '/og-image.png',
  url: 'https://shizuo0.github.io',
  type: 'website' as const,
};

const SEO: React.FC<SEOProps> = ({
  title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  image = defaultMeta.image,
  url = defaultMeta.url,
  type = defaultMeta.type,
}) => {
  const fullTitle = title 
    ? title.includes('|') ? title : `${title} | Paulo Shizuo`
    : defaultMeta.title;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      
      {/* Standard meta tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Paulo Shizuo Vasconcelos Tatibana" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Paulo Shizuo Portfolio" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
