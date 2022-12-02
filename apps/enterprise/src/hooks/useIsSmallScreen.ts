import { useIsScreenWidthLessThan } from '@terra-money/apps/hooks';

export const smallScreenWidth = 600;

export const useIsSmallScreen = () => {
  return useIsScreenWidthLessThan(smallScreenWidth);
};
