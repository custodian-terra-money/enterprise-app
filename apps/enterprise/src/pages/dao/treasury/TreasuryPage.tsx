import { useOutletContext } from 'react-router';
import { Container } from '@terra-money/apps/components';
import { DAOOutletContext } from '../DAOPage';
import { Text } from 'components/primitives';
import { TreasuryOverview } from '../TreasuryOverview';
import { TxItem } from './TxItem';
import { useTxsQuery } from 'queries/useTxsQuery';
import { CW20Addr } from '@terra-money/apps/types';
import { NFTViewer } from './NFTViewer';
import { Panel } from 'components/panel';
import { TreasuryTokensOverview } from '../TreasuryTokensOverview';
import { useDAONFTTreasury } from 'queries';
import styles from './TreasuryPage.module.sass';

export const TreasuryPage = () => {
  const { dao } = useOutletContext<DAOOutletContext>();

  //const { data: nftCollection = [] } = useDAONFTTreasury(dao?.address ?? '', { enabled: Boolean(dao?.address) });

  // nft_address: Addr;
  //   token_ids: string[];

  // const nfts = [
  //   { nftAddress: 'terra16ds898j530kn4nnlc7xlj6hcxzqpcxxk4mj8gkcl3vswksu6s3zszs8kp2', tokenId: '7055' },
  //   { nftAddress: 'terra16ds898j530kn4nnlc7xlj6hcxzqpcxxk4mj8gkcl3vswksu6s3zszs8kp2', tokenId: '900' },
  //   { nftAddress: 'terra16ds898j530kn4nnlc7xlj6hcxzqpcxxk4mj8gkcl3vswksu6s3zszs8kp2', tokenId: '9448' },
  //   { nftAddress: 'terra16ds898j530kn4nnlc7xlj6hcxzqpcxxk4mj8gkcl3vswksu6s3zszs8kp2', tokenId: '8364' },
  //   { nftAddress: 'terra16ds898j530kn4nnlc7xlj6hcxzqpcxxk4mj8gkcl3vswksu6s3zszs8kp2', tokenId: '10886' },
  // ];

  const nftCollection = [
    {
      nft_address: 'terra16ds898j530kn4nnlc7xlj6hcxzqpcxxk4mj8gkcl3vswksu6s3zszs8kp2',
      token_ids: ['7055', '900', '9448', '8364', '10886'],
    },
  ];

  const { data: txs } = useTxsQuery((dao?.address || '') as CW20Addr);

  return (
    <Container direction="column" gap={32} className={styles.root}>
      <Container className={styles.assets} direction="row">
        <Panel>
          <TreasuryTokensOverview />
        </Panel>
        <Panel title="Treasury NFTs">
          <NFTViewer nftCollection={nftCollection} />
        </Panel>
      </Container>
      {/* {dao && <TreasuryOverview dao={dao} />} */}
      <Container direction="column" gap={16}>
        <Text variant="heading4">Transactions</Text>
        <Container gap={16} direction="column">
          {txs && txs.map((tx, index) => <TxItem key={index} tx={tx} />)}
        </Container>
      </Container>
    </Container>
  );
};
