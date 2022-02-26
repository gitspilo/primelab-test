import React from 'react';
import { css } from '@emotion/react';
import {
  Card,
  Stack,
  Typography,
  IconButton,
  Avatar,
  AvatarGroup
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { images } from '../styles/theme';

const Contact = () => {
  return (
    <Card css={styles.card}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography css={styles.title}>
          Contacts
        </Typography>
        <IconButton size="small">
          <ChevronRightIcon />
        </IconButton>
      </Stack>
      <Stack alignItems="flex-start">
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src={images.avatar2} />
          <Avatar alt="Travis Howard" src={images.avatar2} />
          <Avatar alt="Cindy Baker" src={images.avatar2} />
          <Avatar alt="Agnes Walker" src={images.avatar2} />
          <Avatar alt="Trevor Henderson" src={images.avatar2} />
        </AvatarGroup>
      </Stack>
    </Card>
  )
};

export default Contact;

const styles = {
  card: css`
    padding: 9px;
    background: #EAEFFF;
    display: flex;
    flex: 1;
    flex-direction: column;
  `,
  title: css`
    font-family: Manrope;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #414047;
  `,
};
