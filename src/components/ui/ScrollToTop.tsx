import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Remet le scroll en haut à chaque changement de route
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
