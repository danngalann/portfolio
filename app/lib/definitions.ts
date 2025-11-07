export type Job = {
  title: string;
  slug: string;
  company: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  tags: string[];
};

export type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};
