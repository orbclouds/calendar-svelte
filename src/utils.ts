export const getDateString = (
  date: Date,
  delimiter = '/'
): string => {
  return [
    date.getFullYear(),
    ('0' + (date.getMonth() + 1)).slice(
      -2
    ),
    ('0' + date.getDate()).slice(-2),
  ].join(delimiter);
};
