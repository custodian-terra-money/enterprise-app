import { RecentProposals } from './RecentProposals';
import { TreasuryOverview } from './TreasuryOverview';
import { SocialChannels } from './SocialChannels';
import { useCurrentDao } from 'pages/shared/CurrentDaoProvider';
import { ConditionalRender } from 'components/primitives';
import { TokenDaoTotalSupplyPanel } from './TokenDaoTotalSupplyPanel';
import { NftDaoTotalSupplyPanel } from './NftDaoTotalSupplyPanel';
import { NftDaoTotalStakedPanel } from './NftDaoTotalStakedPanel';
import { TokenDaoTotalStakedPanel } from './TokenDaoTotalStakedPanel';
import { TokenDaoPricePanel } from './TokenDaoPricePanel';
import styled from 'styled-components';
import { VStack } from 'lib/ui/Stack';
import { MultisigDaoMembersPanel } from './MultisigDaoMembersPanel';

const Panels = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
  }
`;

const SidePanel = styled(VStack)`
  gap: 16px;
  > * {
    flex: 1;
  }
`;

export const Overview = () => {
  const dao = useCurrentDao();

  return (
    <VStack gap={24}>
      <Panels>
        <TreasuryOverview />
        <SidePanel>
          <ConditionalRender
            value={dao.type}
            multisig={() => <MultisigDaoMembersPanel />}
            token={() => (
              <>
                <TokenDaoTotalSupplyPanel />
                <TokenDaoTotalStakedPanel />
                <TokenDaoPricePanel />
              </>
            )}
            nft={() => (
              <>
                <NftDaoTotalSupplyPanel />
                <NftDaoTotalStakedPanel />
              </>
            )}
          />
        </SidePanel>
      </Panels>
      <RecentProposals />
      <SocialChannels />
    </VStack>
  );
};
