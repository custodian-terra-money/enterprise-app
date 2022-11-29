import { CreateTxOptions } from '@terra-money/terra.js';

export const useTxOverrides = (): Partial<CreateTxOptions> => {
  return {
    gas: '015000uluna',
    gasAdjustment: 1.5,
  };
};
