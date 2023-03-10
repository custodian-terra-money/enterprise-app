import { useCreateConfigProposalForm } from './useCreateConfigProposalForm';
import { FormSection } from 'components/form-section';
import { MetadataFields } from './MetadataFields';
import { GovConfigFields } from '../../create-dao/gov-config/GovConfigFields';
import { useCurrentDao } from 'pages/shared/CurrentDaoProvider';
import { useCurrentToken } from 'pages/shared/CurrentTokenProvider';
import { proposalTitle } from '../Page';
import { ProposalForm } from '../shared/ProposalForm';
import { getProposalActions } from './helpers/getProposalActions';
import { SocialFields } from 'pages/create-dao/shared/SocialFields';
import styles from './ConfigProposalForm.module.sass';

export const ConfigProposalForm = () => {
  const dao = useCurrentDao();
  const { token } = useCurrentToken();

  const [formInput, formState] = useCreateConfigProposalForm();

  const { submitDisabled } = formState;

  return (
    <ProposalForm
      title={proposalTitle.config}
      getProposalActions={() => getProposalActions(formState, dao, token?.decimals)}
      disabled={submitDisabled}
    >
      <FormSection className={styles.section} name="Metadata">
        <MetadataFields formInput={formInput} formState={formState} />
      </FormSection>
      <FormSection className={styles.section} name="Socials">
        <SocialFields {...formState} onChange={formInput} />
      </FormSection>
      <FormSection className={styles.section} name="Governance Parameters">
        <GovConfigFields daoType={dao.type} onChange={formInput} value={formState} />
      </FormSection>
    </ProposalForm>
  );
};
