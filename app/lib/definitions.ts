export type Job = {
  title: string;
  slug: string;
  company: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  tags: string[];
};
