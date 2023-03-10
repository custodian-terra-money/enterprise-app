import { NetworkInfo } from '@terra-money/wallet-provider';
import { getNetworkOrLCD } from '@terra-money/apps/queries';

interface CW721TokensResponse {
  tokens: string[];
}

export const fetchCW721Tokens = async (
  network: NetworkInfo,
  walletAddress: string,
  nftAddress: string
): Promise<string[]> => {
  const lcd = getNetworkOrLCD(network);

  const response = await lcd.wasm.contractQuery<CW721TokensResponse>(nftAddress, {
    tokens: {
      owner: walletAddress,
      limit: 1000000,
    },
  });

  return response.tokens;
};
