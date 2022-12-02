import { PropsWithChildren } from 'react';
import { Container } from '@terra-money/apps/components';
import { Logo } from './Logo';
import { ReactComponent as HomeIcon } from 'components/assets/Home.svg';
import { ReactComponent as PlusIcon } from 'components/assets/Plus.svg';
import { ReactComponent as ChatIcon } from 'components/assets/Chat.svg';
import { useNavigate } from 'react-router';
import { Favourites } from './Favourites';
import { IconButton, Tooltip } from 'components/primitives';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import { Path } from 'navigation';
import styles from './MobileNavigationLayout.module.sass';

interface MobileNavigationLayoutProps extends PropsWithChildren {}

export const MobileNavigationLayout = ({ children }: MobileNavigationLayoutProps) => {
  const navigate = useNavigate();

  const connectedWallet = useConnectedWallet();

  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
      <div className={styles.navigation}>
        <div className={styles.items}>
          <IconButton onClick={() => navigate(Path.Dashboard)}>
            <HomeIcon />
          </IconButton>
        </div>
        <Container className={styles.menu} direction="column">
          <Tooltip title="Got feedback?" placement="right" arrow={true}>
            <IconButton
              className={styles.feedback}
              variant="outline"
              onClick={() => window.open('https://terra.sc/enterprisefeedback')}
            >
              <ChatIcon />
            </IconButton>
          </Tooltip>
          {connectedWallet && (
            <Tooltip title="Create a DAO" placement="right" arrow={true}>
              <IconButton className={styles.create} variant="primary" onClick={() => navigate('/dao/create')}>
                <PlusIcon className={styles.icon} />
              </IconButton>
            </Tooltip>
          )}
        </Container>
      </div>
    </div>
  );
};
