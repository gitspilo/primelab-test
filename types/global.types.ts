export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export interface CollectibleItemProps {
  title: string;
  subTitle: string;
};

export interface TransactionItemProps {
  title: string;
  subTitle: string;
  timeLine: string;
  isIncoming?: boolean;
};

export interface HeaderProps {
  isBack?: boolean;
};