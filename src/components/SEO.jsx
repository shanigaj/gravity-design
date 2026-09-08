import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Gravity Tech World';
const SITE_URL = 'https://gravitytechworld.com';
const DEFAULT_DESC =
  'Gravity Tech World - a leading mobile app development company in Surat, building high-quality Android and iOS apps, plus custom software, websites, UI/UX design and e-commerce solutions.';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_KEYWORDS =
  'mobile app development company Surat, Android app development Surat, iOS app development Surat, app developers Surat, software company Surat, custom software development, web development, UI UX design, e-commerce development, Gravity Tech World';

export default function SEO({ title, description, keywords, image, path }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Mobile App (Android & iOS) & Software Development Company in Surat`;
  const desc = description || DEFAULT_DESC;
  const url = path ? `${SITE_URL}${path}` : SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords || DEFAULT_KEYWORDS} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image || DEFAULT_IMAGE} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image || DEFAULT_IMAGE} />
    </Helmet>
  );
}
