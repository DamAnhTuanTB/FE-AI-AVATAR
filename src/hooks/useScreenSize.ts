import { breakpoints } from '@/config/breakpoints';
import { useMedia } from 'use-media';

const increaseWidth = (breakpoint: string) => {
  const width = Number(breakpoint.replace('px', '')) || 0;
  return `${width + 1}px`;
};

const useScreenSize = (): {
  isMobile: boolean;
  isTablet: boolean;
  isIpadMini: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
} => {
  const isMobile = useMedia({ maxWidth: breakpoints.md });
  const isTablet = useMedia({
    minWidth: increaseWidth(breakpoints.md),
    maxWidth: breakpoints.lg,
  });
  const isIpadMini = useMedia({
    height: breakpoints.ipadMini,
    width: breakpoints.lg,
  });

  const isDesktop = useMedia({ minWidth: increaseWidth(breakpoints.lg) });
  const isLargeDesktop = useMedia({ minWidth: increaseWidth(breakpoints.xl) });
  return { isMobile, isTablet, isIpadMini, isDesktop, isLargeDesktop };
};

export default useScreenSize;
