import { CW20Addr } from '@terra-money/apps/types';
import { NumericPanel } from 'components/numeric-panel';
import { useCurrentDao } from 'pages/shared/CurrentDaoProvider';
import { useMultisigMembersQuery } from 'queries/useMultisigMembersQuery';

export const MultisigDaoMembersPanel = () => {
  const dao = useCurrentDao();

  const { data: voters = [], isLoading: isLoadingVoters } = useMultisigMembersQuery(
    dao.membershipContractAddress as CW20Addr
  );

  return <NumericPanel title="Members" value={voters.length} isLoading={isLoadingVoters} />;
};
