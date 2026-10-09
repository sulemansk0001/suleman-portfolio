import { useEffect } from 'react';

/**
 * Reusable SEO component that updates document title and meta description per route
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    const defaultTitle = "Suleman Shaikh | Digital Marketing Executive";
    document.title = title ? `${title} | Suleman Shaikh` : defaultTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
