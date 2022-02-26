import React from 'react';
import type { NextPage } from 'next';
import { Container, Typography } from '@mui/material';
import { css } from '@emotion/react';
import Header from '../components/Header';

const Category: NextPage = () => {
  return (
    <>
      <Header isBack />
      <Container>
        <div css={styles.section}>
          <Typography mt={1}>
            Popular Categories
          </Typography>
        </div>
      </Container>
    </>
  )
};

const styles = {
  section: css`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
  `,
};

export default Category;