import dayjs from 'dayjs';

export const formatUtc = (
  dateUtc: string,
  technicalMode: 'modern' | 'technical' = 'modern',
): string => {
  const d = dayjs(dateUtc);
  return technicalMode === 'modern'
    ? d.format('MMM D, YYYY h:mm A')
    : d.format('YYYY-MM-DD HH:mm:ss');
};
