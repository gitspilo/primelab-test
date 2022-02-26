import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import {
  Card,
  Typography,
  Button
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { images } from '../styles/theme';

const NFT = () => {
  return (
    <Card css={styles.card}>
      <div css={styles.left}>
        <Typography mb={2}>
          Start Creating your NFT Today
        </Typography>
        <Button variant="contained" endIcon={<ChevronRightIcon />}>
          Create NFT
        </Button>
      </div>
      <div>
        <Image
          src={images.flower}
          alt="primelab"
          width={150}
          height={150}
          css={styles.icon}
        />
      </div>
    </Card>
  )
};

export default NFT;

const styles = {
  card: css`
    padding: 9px;
    background: #F5F5F5;
    display: flex;
    flex: 1;
    flex-direction: row;
    background: #F7E9FF;
    padding: 0;
  `,
  left: css`
    padding: 10px;
  `,
  icon: css`
    position: absolute;
    top: -20px;
    right: -20px;
  `
};
