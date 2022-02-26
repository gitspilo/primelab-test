import { useEffect } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { images } from '../styles/theme';

const Splash: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Image
        src={images.splash}
        alt="primelab"
        layout="fill"
      />
      <div css={styles.main}>
        <Stack>
          <Image
            src={images.applogo}
            alt="HomePage"
            width={171}
            height={36}
          />
          <Typography mt={1} css={styles.typo}>
            a web3 gateway to hidden experiences
          </Typography>
        </Stack>
        <Stack css={styles.bottom}>
          <Typography mb={2} css={styles.typo}>
            powered by
          </Typography>
          <Image
            src={images.near}
            alt="Nexa"
            width={171}
            height={36}
          />
        </Stack>
      </div>
    </Container>
  )
};

const styles = {
  main: css`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,
  typo: css`
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: #FCFCFC;
    opacity: 0.9;
  `,
  bottom: css`
    position: absolute;
    bottom: 40px;
    text-align: center;
  `
};

export default Splash;