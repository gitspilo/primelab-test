import React from 'react';
import { css } from '@emotion/react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface CollectibleItemProps {
  title: string;
  subTitle: string;
};

const CollectibleItem = ({
  title,
  subTitle,
}: CollectibleItemProps) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <ChevronRightIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText primary={title} secondary={subTitle} />
    </ListItem>
  )
};

export default CollectibleItem;

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
