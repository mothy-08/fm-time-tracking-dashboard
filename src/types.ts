export type Timeframes = "daily" | "weekly" | "monthly";

export type CurrPrevTimeframe = {
  current: number;
  previous: number;
};

export type Category = {
  title: string;
  timeframes: {
    daily: CurrPrevTimeframe;
    weekly: CurrPrevTimeframe;
    monthly: CurrPrevTimeframe;
  };
};
