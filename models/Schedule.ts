export type Match = {
  _id?: string;
  time: string;
  a: string;
  b: string;
  aLogo: string;
  bLogo: string;
  finished: boolean;
  score: { a: number; b: number };
  sets: string[];
};

export type DaySchedule = {
  day: number;
  label: string;
  week: string;
  matches: Match[];
};
