
import { Helmet } from "react-helmet";

const SEO = ({
  title,
  description,
  keywords,
  image = "https://i.ibb.co.com/WNqYCBcV/fuad.png",
  url = "https://roomora-interiors.vercel.app",
}) => {
  const fullTitle = `${title} | Roomora Interiors`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Roomora Interiors" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Roomora Interiors" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Extra */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#f59e0b" />
    </Helmet>
  );
};

export default SEO;

