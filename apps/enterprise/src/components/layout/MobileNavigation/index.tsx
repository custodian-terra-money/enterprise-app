import { getCSSUnit } from '@terra-money/apps/utils';
import { ManageWallet } from 'chain/components/ManageWallet';
import { CreateDaoButton } from 'dao/components/CreateDaoButton';
import { DashboardButton } from 'dao/components/DashboardButton';
import { ComponentWithChildrenProps } from 'lib/shared/props';
import { HStack } from 'lib/ui/Stack';
import styled from 'styled-components';
import { Favourites } from '../Favourites';

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 86px 1fr 86px;
`;

const ContentWr = styled.div`
  overflow-y: auto;
`;

const Header = styled(HStack)`
  padding: 16px;
  padding-top: 32px;

  border-bottom: 1px solid #242627;
  background: rgba(21, 23, 24, 0.9);
`;

const Footer = styled(HStack)`
  padding: 16px;
  padding-bottom: 24px;

  border-top: 1px solid #242627;
  background: rgba(21, 23, 24, 0.9);
`;

export const MobileNavigation = ({ children }: ComponentWithChildrenProps) => {
  return (
    <Container>
      <Header alignItems="center" justifyContent="space-between">
        <div />
        <ManageWallet />
      </Header>
      <ContentWr>{children}</ContentWr>
      <Footer alignItems="center" justifyContent="space-between">
        <HStack gap={16}>
          <DashboardButton />
          <Favourites />
        </HStack>
        <CreateDaoButton />
      </Footer>
    </Container>
  );
};
