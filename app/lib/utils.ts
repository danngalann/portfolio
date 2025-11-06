export function getDateDiffInYears(
  startDate: Date,
  endDate: Date | null,
): number {
  const end = endDate ? endDate : new Date();
  const diffInMs = end.getTime() - startDate.getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(diffInYears * 10) / 10;
}
