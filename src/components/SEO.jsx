import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title ? `${title} | Gravity Design` : 'Gravity Design'}</title>
      <meta name="description" content={description || 'Gravity Design - A modern React website with Tailwind CSS and framer motion.'} />
      <meta name="keywords" content={keywords || 'Design, React, Tailwind, Gravity'} />
    </Helmet>
  );
}
