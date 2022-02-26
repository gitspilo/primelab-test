import React from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  Card,
  Stack,
  Typography,
  IconButton,
  Button
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Apps = () => {
  const router = useRouter();

  return (
    <Card css={styles.card}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography css={styles.title}>
          web3 Apps
        </Typography>
        <IconButton size="small">
          <ChevronRightIcon />
        </IconButton>
      </Stack>
      <Stack>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={() => router.push('/category')}
        >
          12 Connected
        </Button>
      </Stack>
    </Card>
  )
};

export default Apps;

const styles = {
  card: css`
    padding: 9px;
    background: #885FFF;
    display: flex;
    flex: 1;
    flex-direction: column;
  `,
  title: css`
    font-family: Manrope;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
  `,
};
