import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop helper component that automatically resets window scroll
 * to the top upon route changes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
