export const getTimestampFromDateTime = (dateStr: string, timeStr: string) => {
  const datePart = dateStr.split('T')[0];
  const dateTimeStr = `${datePart}T${timeStr}:00-05:00`;
  const dateObj = new Date(dateTimeStr);
  const timestamp = dateObj.getTime();

  return timestamp;
};
