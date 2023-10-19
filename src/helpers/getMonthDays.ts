export const getMonthDays = (monthIndex?: number, year?: number) => {
  const date = new Date(year || 0, monthIndex ? monthIndex : 0, 0);
  const days = [];
  const end = date.getDate();
  while (days.length < end) {
    const day: number = days.length + 1;
    days.push({
      name: day,
      value: day,
    });
  }
  console.log(days.at(-1));
  console.log(monthIndex);
  return days;
};
