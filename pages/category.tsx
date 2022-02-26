import React from 'react';
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import Header from '../components/Header';

const Category: NextPage = () => {
  return (
    <>
      <Header isBack />
    </>
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
};

export default Category;