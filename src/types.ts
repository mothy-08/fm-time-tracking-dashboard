export type Timeframes = "daily" | "weekly" | "monthly";

export type CurrPrevTF = {
  current: number;
  previous: number;
};

export type Category = {
  title: string;
  timeframes: {
    daily: CurrPrevTF;
    weekly: CurrPrevTF;
    monthly: CurrPrevTF;
  };
};
