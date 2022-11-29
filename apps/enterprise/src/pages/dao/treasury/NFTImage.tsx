import Container from '@mui/system/Container';
import classNames from 'classnames';
import styles from './NFTImage.module.sass';

type Variant = 'small' | 'large';

interface NFTImageProps {
  className?: string;
  variant: Variant;
  nftAddress: string;
  tokenId: string;
}

// const images = [
//   'https://d75aawrtvbfp1.cloudfront.net/ipfs%3A%2F%2FQmNt1avBTdtZG4EH745VfEutk7Wu9U7LsbazAW65NKEysb',
//   'https://d75aawrtvbfp1.cloudfront.net/ipfs%3A%2F%2FQmcaYevp1aEMi7paoCU4qH3h7Hhppn4qJKGxjjb3nveYXz',
//   'https://d75aawrtvbfp1.cloudfront.net/ipfs%3A%2F%2FQmaA3SRRjiR4LAEE53zsuPFpEJx5W8Uo6EFas2txpmhAx9',
//   'https://d75aawrtvbfp1.cloudfront.net/ipfs%3A%2F%2FQmdasQtmbgUCubuoRse1R84uAsf9SjGQJzBrHj6mzJcprk',
//   'https://d75aawrtvbfp1.cloudfront.net/ipfs%3A%2F%2FQmVsviycSrSCzYw5XiBujL8KrryszdAD4uHdWG71a9EBjq',
// ];

export const NFTImage = (props: NFTImageProps) => {
  const { className, variant, nftAddress, tokenId } = props;

  return (
    <Container className={classNames(className, styles.root, styles[variant])}>
      <img src="https://d75aawrtvbfp1.cloudfront.net/ipfs%3A%2F%2FQmNt1avBTdtZG4EH745VfEutk7Wu9U7LsbazAW65NKEysb" />
    </Container>
  );
};
