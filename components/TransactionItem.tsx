import React from 'react';
import { css } from '@emotion/react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { cx } from "../styles/styling";

interface TransactionItemProps {
  title: string;
  subTitle: string;
  timeLine: string;
  isIncoming?: boolean;
};

const TransactionItem = ({
  title,
  subTitle,
  timeLine,
  isIncoming = false,
}: TransactionItemProps) => {
  return (
    <ListItem
      secondaryAction={
        <Typography variant="caption">
          {timeLine}
        </Typography>
      }
    >
      <ListItemIcon>
        {isIncoming ? <ArrowBackIcon /> : <ArrowForwardIcon />}
      </ListItemIcon>
      <ListItemText
        primary={title}
        secondary={subTitle}
        css={cx(styles, { blue: !isIncoming, green: isIncoming })}
      />
    </ListItem>
  )
};

export default TransactionItem;

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
  blue: css`
    color: #885FFF;
  `,
  green: css`
    color: #3BD0AC;
  `
};
