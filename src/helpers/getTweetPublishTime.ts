const minuteInSeconds = 60;
const hourInSeconds = minuteInSeconds * 60;
const dayInSeconds = hourInSeconds * 24;
const yearInSeconds = dayInSeconds * 365;

export const getTweetPublishTime = (publishDate: Date): string => {
  const today: Date = new Date();
  const passedDate = new Date(today.getTime() - publishDate.getTime());
  const passedTime = passedDate.getTime() / 1000;
  if (passedTime < minuteInSeconds) {
    return `${passedDate.getSeconds()}s`;
  } else if (passedTime < hourInSeconds) {
    return `${passedDate.getMinutes()}m`;
  } else if (passedTime < dayInSeconds) {
    return `${passedDate.getHours()}h`;
  } else if (passedTime < yearInSeconds) {
    return getFormattedDate(publishDate);
  } else {
    return `${getFormattedDate(publishDate)}, ${publishDate.getFullYear()}y`;
  }
};

const getFormattedDate = (date: Date): string => {
  return date.toLocaleString('default', {
    month: 'short',
    day: 'numeric',
  });
};
