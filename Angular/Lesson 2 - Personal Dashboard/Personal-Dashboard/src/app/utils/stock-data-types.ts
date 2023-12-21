export interface openCloseResult {
  status: string;
  from: string;
  symbol: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  afterHours: number;
  preMarket: number;
}

export const stockMockData: openCloseResult = {
  afterHours: 195.4,
  close: 194.83,
  from: '2023 - 12 - 20',
  high: 197.68,
  low: 194.83,
  open: 196.9,
  preMarket: 196,
  status: 'OK',
  symbol: 'AAPL',
  volume: 52242815,
};
