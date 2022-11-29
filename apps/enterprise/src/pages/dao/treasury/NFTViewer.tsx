import { Container, UIElementProps } from '@terra-money/apps/components';
import { CarouselDirection, useCarouselNavigation } from '@terra-money/apps/hooks';
import { IconButton } from 'components/primitives';
import { ReactComponent as ArrowLeft } from 'components/assets/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from 'components/assets/ArrowRight.svg';
import classNames from 'classnames';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { NFTImage } from './NFTImage';
import { enterprise } from 'types/contracts';
import styles from './NFTViewer.module.sass';

interface TransitionProps extends UIElementProps {
  direction: CarouselDirection;
}

const Transition = (props: TransitionProps) => {
  const { className, direction, children } = props;

  return (
    <TransitionGroup className={classNames(className, styles.container)} data-direction={direction}>
      <CSSTransition
        timeout={{ enter: 250, exit: 250 }}
        mountOnEnter={false}
        unmountOnExit={true}
        classNames={{
          enter: styles.transitionEnter,
          enterActive: styles.transitionEnterActive,
          exit: styles.transitionExit,
          exitActive: styles.transitionExitActive,
        }}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

interface NFTViewerProps {
  className?: string;
  nftCollection: enterprise.NftCollection[];
}

export const NFTViewer = (props: NFTViewerProps) => {
  const { className, nftCollection } = props;

  const nfts = nftCollection.flatMap((collection) =>
    collection.token_ids.map((token) => {
      return {
        nftAddress: collection.nft_address,
        tokenId: token,
      };
    })
  );

  const { indicies, direction, transitionLeft, transitionRight } = useCarouselNavigation(nfts.length);

  return (
    <Container className={styles.root} direction="column">
      <Container className={styles.images} direction="row">
        <Transition direction={direction}>
          <NFTImage
            className={classNames(styles.image, styles.small)}
            variant="small"
            nftAddress={nfts[indicies[0]].nftAddress}
            tokenId={nfts[indicies[0]].tokenId}
          />
        </Transition>
        <Transition direction={direction}>
          <NFTImage
            className={styles.image}
            variant="large"
            nftAddress={nfts[indicies[1]].nftAddress}
            tokenId={nfts[indicies[1]].tokenId}
          />
        </Transition>
        <Transition direction={direction}>
          <NFTImage
            className={classNames(styles.image, styles.small)}
            variant="small"
            nftAddress={nfts[indicies[2]].nftAddress}
            tokenId={nfts[indicies[2]].tokenId}
          />
        </Transition>
      </Container>
      <Container className={styles.navigation} direction="row" gap={8}>
        <IconButton variant="secondary" className={styles.leftArrow} onClick={transitionRight}>
          <ArrowLeft />
        </IconButton>
        <IconButton variant="secondary" className={styles.rightArrow} onClick={transitionLeft}>
          <ArrowRight />
        </IconButton>
      </Container>
    </Container>
  );
};
