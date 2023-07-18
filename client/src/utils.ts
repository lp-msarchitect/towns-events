export const formatDate = (date: Date | string) => {
  const timedate = new Date(date);
  let formatter = new Intl.DateTimeFormat('ru', {
    day: 'numeric',
    month: 'long',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
  });
  return formatter.format(timedate);
};
