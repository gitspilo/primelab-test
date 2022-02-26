import React, { useState } from 'react';
import type { NextPage } from 'next';
import {
  Container,
  Stack,
  Tab,
  Tabs,
  Box,
  List,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Apps from '../components/Apps';
import NFT from '../components/NFT';
import CollectibleItem from '../components/CollectibleItem';
import TransactionItem from '../components/TransactionItem';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const Home: NextPage = () => {
  const [value, setValue] = useState(0);
  const [alignment, setAlignment] = useState('all');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleToggleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Header />
      <Container>
        <Stack direction="row" spacing={2} pt={2}>
          <Contact />
          <Apps />
        </Stack>
        <Stack mt={2} mb={2}>
          <NFT />
        </Stack>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="list item"
          centered
        >
          <Tab label="Collectibles" {...a11yProps(0)} />
          <Tab label="Transactions" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <List>
            <CollectibleItem title='Digital Ninja' subTitle='by johndoe.near' />
            <CollectibleItem title='Panda' subTitle='by whitegoose497' />
            <CollectibleItem title='Panda' subTitle='by whitegoose497' />
            <CollectibleItem title='Panda' subTitle='by whitegoose497' />
            <CollectibleItem title='Panda' subTitle='by whitegoose497' />
          </List>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Stack alignItems="center" mt={2}>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleToggleChange}
            >
              <ToggleButton value="all">All</ToggleButton>
              <ToggleButton value="sent">Sent</ToggleButton>
              <ToggleButton value="received">Received</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
          <List>
            <TransactionItem title='0.456 NEAR' subTitle='Sent to devon.near' timeLine="3 days ago" isIncoming />
            <TransactionItem title='#13893' subTitle='Recieved from ' timeLine="3 days ago" />
            <TransactionItem title='0.456 NEAR' subTitle='Sent to devon.near' timeLine="3 days ago" isIncoming />
            <TransactionItem title='#13893' subTitle='Recieved from ' timeLine="3 days ago" />
          </List>
        </TabPanel>
      </Container>
    </>
  )
};

export default Home;

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};
